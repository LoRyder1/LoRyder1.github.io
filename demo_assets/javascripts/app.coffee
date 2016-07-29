class Thumb extends Backbone.Model
  
  defaults:
    uri: ''
    state: ''
 
  select: (state) ->
    st = ''
    st = 'selected' if state
    @set('state' : st)
 
 
class Thumbs extends Backbone.Collection
  model: Thumb
  
  fetch: ->
    _.map(urls, (url)-> new Thumb(uri: url))
  
  select: (model) ->
    @selected.select(false) if @selected?
    @selected = model
    @selected.select(true)
    @trigger('thumbs:selected')
  
  selectedThumb: ()->
    @selected
 
 
class FrontView extends Backbone.View
  template: _.template('<img src="<%= uri %>" />')
  
  el: $('#front')
  
  initialize: ()->
    @model.bind('thumbs:selected', @render)
 
  render: ()=>
    $(@el).html(@template(@model.selectedThumb().toJSON()))
    @ # important to give 'this' out, on rendering we'll access 'el'
 
thumbs = new Thumbs
frontview = new FrontView(model:thumbs)
 
class ThumbView extends Backbone.View
  tagName: 'li'
  template: _.template('<img src="<%= uri %>" class="<%= state %>" />')
  events:
    "click" : "selectThumb"
  initialize: ()->
    @model.bind('change', @render)
 
  render: ()=>
    $(@.el).html(@template(@model.toJSON()))
    @
 
  selectThumb: ()->
    thumbs.select(@model)
 
 
class AppView extends Backbone.View
  el: $("container")
 
  render: ()->
    _.each thumbs.fetch(), (t)->
      $('div ul').append( new ThumbView(model: t).render().el)
 
window.App = new AppView
window.App.render()