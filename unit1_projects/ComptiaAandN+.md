##Comptia A+ and N+ 


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

##WAN Technologies

#Packet Switching
data takes different routes, once data reaches destination the data is recompiled. Connectionless. Internet mostly uses packet switching technology.

#Circuit Switching
all the data is sent along the same dedicated route. Ex.: telephone lines. 

#ISDN - integrated services digital network
international standard for digital transmission over ordinary telephone lines.
significant speed improvement of speed over the standard 56 Kbps modem. ISDN speeds are 128 Kbps. ISDN never really caught on because of the faster speeds of cable and DSL. 

#T1 T carrier level 1
commonly used internet service for businesses today. Speed is 1.544 Mbps. Consists of 24 individual channels that carries a rate of 64 Kbps each. Carries data or voice traffic. 

#T3 T Carrier Level 3
High speed internet connection. Speed is 43 Mbps. Consists of 672 individual channels that carries a rate of 64 Kbps each. Mainly used by ISPs that connect directly to the backbone of the internet. 

#E1 Line
Similar to T1 line, Format that is used in Europe, speed is 2 Mbps, Consists of 32 channels that carry 64 Kbps of data each. 

#E3 line
European equivalent of T3 line. Speed is 34 Mbps. Has fewer channels than a T3. 

#OCx optical carrier
Describes the speed of networks that can b carried on SONET (Synchronous OPtical Network). Fiber optic technology that delivers voice, data, and video at high speeds. The OC levels are calculated by multiples of 51.84 Mbps. 

#DSL - 
can carry voice and data at the same time. 
ADSL - asymmetric, SDSL - symmetric, VDSL - download speeds over 50 Mbps over copper wire. Uses copper wire - made for short distances. Long distance = fiber  optic

#Cable broadband -
cable modem, 50Mbs or more. 

#POTS/PSTN plain old telephone service/public switched telephone network
very cheap, and everywhere. 

#WIMAX 
super wireless network that covers entire cities or countries. ISP connects to tower with T3.

#PAN
personal area network with bluetooth

#LAN
Cat5 ethernet network connected using a switch.

#MAN - metropolitan area network

#WAN - wide area network

#4GLTE
speeds over 100Mbps

#Remote Access Protocols

#PPP point to point protocol
the standard remote access protocol used today, supports encryption or authentication. Is a secure protocol, most ISPs use this protocol for their customers who want to access the internet through a dial up connection. 

#PPPoE point to point protocol over ethernet
encapsulates PPP frames in Ethernet frames. developed for DSL, cable modem, or wireless connections to the Internet. Used for connecting multiple users on a LAN to a remote site sharing a common device. 

#PPTP - point to point tunneling protocol
used for creating VPNs (virtual private network). ensures data transfer is secure by creating a secure tunnel. 

#GRE - generic route encapsulation
used with PPTP in creation of a VPN network, creates the tunnel in PPTP. Encapsulates the data in a secure manner. 

#VPN - virtual private network
a private communication network that uses a public network to establish a remote connection, encrypts data when sending and decrypts data when receiving, Provides a dedicate link between two points over the internet. 

#VPN site to site
VPN connector going to internet and coming out of the internet

#VPN host to site
computer to internet and VPN connector at the site

#VPN host to host

#PAP - password authentication protocol
all passwords sent in clear text

#CHAP challenge handshake protocol
encrypts usernames and passwords, client validation done by a 3 way handshake. 

#MS-CHAP - microsoft challenge handshake protocol
basically CHAP

#MS-CHAP2
both the client and server are authenticated

#Radius - remote authentication dial in service
enables a single server, such as a domain controller to handle all authentication. A Radius server makes the request on the user's behalf after authenticating. 

#Kerberos - authentication
authenticates by using ticke. First authenticates using Kerberos server. Client is issued a ticket and with it can access network resources. 

#EAP - extensible authenticaiton protocol

#Virtualization
database server, web server, email server, consolidate servers using virtualization. One server runs, email, web, database. Run not just applications but the different operating systems in parallel. Virtualization saves money. Virtual switch - software, database connects to web server virtually. Also virtual router - routs data packets between virtual servers and the internet according to what the business needs are. Virtual firewall - monitors and filter network traffic. 

#Cloud computing
refers to data and applications being stored and run on remote servers rather than being on your local computer. 

#3 different types of cloud computing
IAAS - infrastructure as a service, PAAS - platform as a service, SAAS - software as a Service. 
IAAS - amazon web service - servers, storage, and networking, YOU - application, data, operating system, middleware, and runtime. 
PAAS - manages hardware but also the operating system, middleware, and runtime, EX: Azure - microsoft. 
SAAS - all applications and hardware run by 3rd party vendor. EX: Google Apps

#NAS - network attached storage
centralized storage device for storing data on a network, will have multiple hard drives in a RAID configuration, Directly attaches to a switch or router on a network. Can be accessed from network devices through a shared folder.

#SAN storage area network 
a special, high speed network that stores and provides access to large amounts of data, servers access this data as if it was a local hard drive. Independent of servers, SANs are not limited or owned by a single server, easily expandable and very redundant. All data is shared amoung several disk arrays. High speed network, interconnected using Fibre Channel (speeds starting at 2000 Mbit/s)
ISCSI - internet small computer system interface - which as an alternate to using fiber channel. 

#Demarc - 
point where a customers network equipment meets with the service provider's network equipment, it defines where the service provider's responsibility for their equipment ends and where the customer's responsibility for their equipment begins. If the demarc needs to be extended further inside the customer's building, then this is known as a demarc extension. 

#VLAN - virtual local area network
controls network traffic regardless of the physicalities of the location. Logically creates several virtual networks to separate network broadcast traffic. Created by ports on VLAN switch or MAC address using computers. 

#Intranet
private network that belongs to an organization, behind a firewall. 

#Extranet
private network that can be accessible from outside the organization on a restricted basis. 

#Load balancer
hardware or software that used to evenly distribute data activity across a network so no single computer or server becomes overwhelmed. 

#port blocking
done on firewall, can control which ports should be opened or closed depending on application. FTP - 21, HTTP - 80, EMAIL - 110

#Standby Server
secondary server with exact config as the primary. 

#Server clustering
a group of servers work together for load balancing and fault tolerance, works best when servers are in different geographical locations. 

#Disaster recovery
full, incremental, differential - does not clear archive bit. 

#IPSec - internet protocol security
encrypts the data, public key locks and unlocks data, prevents data tampering. Transport mode encrypts the message, tunnel mode - encrypts the entire data packet. 

#L2TP - layer 2 tunneling protocol
combination of Cisco's layer 2 forwarding and PPTP, authenticates both the computer adn the user, prevents 'man in the middle ' attack. 

#SSL secure sockets layer
protocol taht provides security on the internet, commonly associated with HTTP. Authenticates server, client, and encrypts the data

#TLS - transport layer security
latest industry standard, authenticates server, client, and encrypts the data. 
TLS Record protocol - connection is private and reliable
TLS Handshake Protocol - server and client authenticate each other and negotiate an encryption algorithm and cryptographic keys before data is sent. 

#802.1x
used for both wired and wireless networks, controls network access by ports, port based authentication. 

#WEP - wired equivalent privacy
easily hackable - 40 bit key

#WPA - wi-fi protected access
stronger encryption method TKIP - temporal key integrity protocol, uses EAP - verifies authorized nework users. 

#WPA2
stronger encryption method, uses CCMP

#WPS wifi protected setup

#MAC filter

#DMZ -
computer fully exposed to the internet, typically has static IP address. 

#RDP port forwarding
forward a specific port to a computer

#ARP Ping
ARP ping command uses ARP data packets to ping network devices, firewalls will not block any ARP data, because ARP data is never blocked or should be never blocked on a LAN. Cannot be used on the internet because the data is not routable, so it only works on a LAN. 

#Traceroute utility

#Nbtstat utility

#ARP 
IP address to MAC address. 

#netstat
displays current network stats

#ipconfig
network information for problem solving

#ifconfig
used in unix and linux

#nslookup/dig
name server lookup, used to lookup DNS info

#DHCP
problem same ip address issued to multiple computers = IP conflict


DHCP
DNS
Active Directory