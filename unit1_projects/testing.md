**Testing Private Methods**

if you are using send to test private methods in your tests, you are almost certainly doing it wrong. Most private methods tend to fall into:

  - A method that does not have behaviour of its own (a helper function)
  - A method that actually deserves to be public on the current object
  - A method that is only private to hide a design flaw

When you have a method who's sole purpose is to make code cleaner, it would be wasteful to write an explicit test. 

Try to implicitly cover the functionality of a private method while focusing on actual interactions

Indirectly testing a privated method will result in the same code coverage results as testing the method directly, you won't silently miss out on a failure if a private method does not work as expected. By writing tests this way, you focus primarily on what can be done to the object via its external interface = clearer, more maintainable tests. 

private method functions can be regarded as implementation details. 