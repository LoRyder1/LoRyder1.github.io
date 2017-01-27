#Comptia A+ and N+ 


#DNS - domain name system
Resolving a domain name - domain name to an IP address. Makes it easier for humans to use domain name instead of IP address. Abstracts the web server from the domain name. If you want to update your web server just change the dns records of domain name and point from old ip address to new ip address. 

#Topology - layout how a network communicates with different devices
Star Topology, Bus Topology - no terminators = signal reflection, Ring Topology - easy to trouble shoot, Mesh Topology - handles failure very well, - high redundancy, Hybrid Topology - star ring network and star bus network, Point to Point Topology, Client Server Topology, Point to Multipoint Topology, Peer to Peer Topology

#Firewall - 
Access Control List, Host Based Firewall - software based firewall. Network based Firewall - protects an entire network. Stateful vs Stateless Firewall - Stateful - monitors all connections and data streams that are passing through, keeps a record, dynamic. Stateless - uses an ACL to allow or deny traffic, only looks in header, and does not keep record. 

#Content Filtering - 
looks at content not the source, commonly used to filter email. 

#Signature identification 
used to detect viruses that have a well known behavior pattern.   

#HUb - not intelligent 
Connects network with ethernet cables

#Switch - intelligent
Data directed only to intended port, learns physical addresses and stores them in a table. Reduce an unnecessary traffic. 
Multilayer Switch - Layers 2 and 3 similar to a router in layer 3. Content Switch - can operate at layers 4 through 7 of the OSI model. Can perform load balancing and advanced filtering - very expensive. 

#Spanning Tree protocol
Network with multiple switches - allows for fault tolerance and prevents unnecessary traffic loops in the network. Allows switches to talk to each other to find if loops are happening in the network. 

#Bridges 
Used to divide a network into separate collision domains. Reduces unnecessary traffic based on their MAC address. Filters by MAC address

#Router
Routes data packets based on their IP address. Router is the gateway for its own network. 

#Gateway
Device that joins two networks together. Does not change the data, only changes the format

#CSU/DSU - channel service Unit/ Data service unit
Converts Data from a LAN to a WAN. 

#NIC - network interface card
Circuit board with network adapter. Converts incoming serial data to parallel data. 

#Transciever 
A device that has both a transmitter and a receiver in the same package

#Modem
converts analog data to digital data

#OSI model
Application, Presentation, Session, Transport, Network, Data link, Physical

#Subnetting
break a network into smaller networks
borrowing 3 bits from hosts portion of subnet mask to break up our network creates 6 subnets.

#Dynamic IP or Static IP
- DHCP server - automatically assigns a computer a IP address, Subnet mask, default gateway, and dns server 

#Scope - DHCP
a scope is a group and a range of consecutive IP addresses for computers that gets their IP address from a DHCP server. 

#Reservation -DHCP
a reservation ensures that a specific computer or device will always be given the same IP address when that computer or device accesses the DHCP server. Reservations are typically given to special devices or computers, such as network printers and servers that require using the same IP address constantly. 

#Lease - DHCP
a lease is the amount of time an IP address is assigned to a computer

#DHCP - Relay
if computer and DHCP server are not on the same subnet or same IP address settings, then DHCP server will not receive the request because broadcast can not go outside their own subnet.

#TCP
connection oriented protocol, Three Way handshake - SYN, SYN ACK, ACK
guarantees receipt of data

#UDP
sending and receiving data - connectionless, does not establish session, does not guarantee data is received - Fire and Forget. Faster than TCP

#FTP
standard protocol used for file transfers, Transfer done by web browser or FTP software. Connection oriented protocol that uses TCP for file transfer. 

#TFTP - trivial file transfer protocol
simple protocol, not used over the internet, used for transferring files within a network, connectionless protocol that uses UDP. 

#SFTP secure FTP
similar to FTP, adds a layer of security, data is encrypted using secure shell during transfer. data is not sent in clear text. 

#SMTP - simple mail transfer protocol
uses the TCP protocol, connection oriented

#POP3 - Post office protocol ver3
only downloads the email, does not do any syncing, no copy of the email is remained on the mail server, unless specified to keep a copy on the server. Commonly used for email applications such as outlook. 

#IMAP4 - internet message access protocol
similar to POP3 but better. Access and manage email on server from local computer. Syncs email and folders between the mail server adn your computer. 

#Http - hypertext transfer protocol
sent in clear text

#HTTPS - secure hypertext transfer protocol
encrypted data sent

#Telnet - terminal emulation program
used to access remote servers, send commands remotely, does not send graphics so pretty fast. Drawback is that it is not secure. All commands sent in clear text. Used mainly to access devices within a local network and not on the internet. 

#SSH - secure shell
protects data from being tracked or stolen over a network, forms a secure tunnel around data transfer

#ARP - address resolution protocol 
used to resolve IP addresses to MAC addresses. computers use MAC addresses for communication between each other, computers search their ARP cache first to find the target MAC address. If the MAC address is not in the ARP cache, the computer will broadcast a message asking for it. 

#RARP - reverse address resolution protocol 

#NTP - network time protocol

#SCP - secure copy protocol

#SNMP - simple network management protocol
used for network management, collects data from various network devices such as: routers, printers, and servers. 

#Ports 
80 - HTTP, 443 - HTTPS, 25 - SMTP

#DNS - domain name system
computers go by numbers not names - dns translates names for numbers. Basically works like a phone book

#WINS - windows internet name service
phonebook for netbios name and IP address. Computers on the same network. 

#NAT - network address translation
tranlates a set of IP addresses to another set of IP addresses. Typicaly in routers. Private IP address to Public address and Public IP addresses to private. 

#PAT - port address translation
translates IP addresses based on port numbers. Each computer on a private network are issued not only a unique IP address but a unique port number. This is so external data packets from the internet know which computer it wants to talk to on the private network. 

#SNAT - static network address translation
links a public IP address with a private IP address permanently. Ex: a mail server. 

#Proxy Service and Proxy Server
Benefits = Speed, cached web pages retrieved quickly from database on proxy server. Benefit2 = Saves Bandwidth reduces need to get web page from the internet. Benefit3 = Security - reports what web pages are retrieved to the network administrator. 

#RDP - remote desktop protocol
technology for Microsoft to access remote computer desktops, Based on Microsoft terminal services. 

#CSMA/CD - carrier sense multiple access with Collision detection
used on wired networks, first sense if wire is idle, if it is then it sends its data. 

#CSMA/CA - carrier sense multiple access with collision avoidance
used on wireless networks - first sends small data packet to make sure network is clear then sends main data. 

#Broadcast - 
a single transmitter of data being received by multiple receivers. 

#Unicast vs multicast
unicast - data packets sent to a single destination, multicast - data packets sent to multiple destinations at the same time. 

#Loopback interface
fake or virtual interface that is created on a router. Assigned an IP address, purpose is for testing and administration purposes

#Routing Table
a routing table is a file that contains set of rules that shows information on what path a data packet takes to its destination. network destination - final dest, subnet mask - which network which host, gateway - tells router which IP address the data packet should be forwarded to, interface - the outgoing IP address of the device that's sending the data, Next hop - the IP address to which the IP address is forwarded to, Metric - determines the best route among multiple destinations. 

#Routing protocols
routing protocols collect information about the current network status and map out the best path for data packets to take to their specific destination. 3 types of routing protocols - distance vector, link state, and hybrid. 
Distance vector protocol - factors distance to the destination based on how many hops. 

#RIP - routing information protocol 
broadcast their routing information to other routers every 30 seconds regardless if the routing information has changed. Unnecessary traffic

#RIPv2 - solves the problem of broadcasat traffic that RIP caused. 

#BGP - border gateway protocol
distance vector protocol, standard routing protocol of the internet, determines routing directions that are based on paths and policies. 

#Link State Protocol
routing protocol that is used by routers to share information and independently map out the best path on a network, OSPF, IS-IS

#OSPF - open shortest path first
routing protocol that is used to determine the correct route for data packets to take to their destination. It collects information from other routers using IP. Creates a topology map of the network. 

#IS-IS intermediate system to intermediate system
routers are organized into a 'domain' or groups. IS-IS primarily functions within these domains. Uses CLNS to communicate to other routers - CLNS

#Hybrid protocol
EIGRP - enhanced interior gateway routing protocol. Combination of distance vector and link state protocols. Runs only on Cisco routers. Fast, less overhead, and can support many network layer protocols. 

#SIP - session initiation protocol
establishes communication sessions over the internet, VoiP (voice over Internet Protocol), also used for instant messaging and conferencing services. Operates at the application layers of the OSI model. 

#RTP - real time transport protocol
the internet standard for transporting real-time data such as streaming audio and video. Used over UDP - does not guarantee data delivery. Used with RTCP - real-time transport Control Protocol - enables you to monitor the quality of the data being delivered. Uses both unicast adn multicast. 

#Packet Switching