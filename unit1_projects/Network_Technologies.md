##Network Technologies

#Firewall(computing)

A firewall is a network security system that monitors and controls the incoming and outgoing network traffic based on predetermined security rules. A firewall typically establishes a barrier between a trusted secure internal network and another outside network, such as the internet, that is assumed not to be secure or trusted. Firewalls are often categorized as either **network firewalls** or **host-based firewalls**. Network firewalls are a software appliance running on general purpose hardware or hardware-based firewall computer applications that filter traffic between two or more networks. Host-based firewalls provide a layer of software on one host that controls network traffic in and out of that single machine. Firewall appliances may also offer other functionality to the internal network they protect such as a acting as a DHCP or VPN server for that network. 

#Content filtering (information filtering)

On the internet, content filtering (also known as information filtering) is the use of a program to screen and exclude from access or availability Web pages or e-mail that is deemed objecitonable. Content filtering is used by corporations as part of Internet firewall computers and also by home computer owners, especially by parents to screen  the content their children have access to from a computer. 

Content filtering usually works by specifying character strings that, if matched, indicate undesirable content that is to be screened out. Content is typically screened out. Content is typically screened for pornographic content and sometimes also for violence or hate-oriented content. Critics of content filtering programs point out that it is not difficult to unintentionally exclude desirable content. 

Content filtering and the products that offer this service can be divided into Web filtering, the screending of Web sites or pages, and e-mail filtering, the screening of e-mail for span or other objectionable content. 

#Routing

Routing is the process of selecting best paths in a network. Routing is performed for many kinds of networks, including the public switched telephone network, electronic data networks(internet), and tranportation networks. 

In packet switching networks, routing directs packet forwarding ( the transit of logically addessed network packes from their source toward their ultimate destination) through intermediate nodes. Intermediate nodes are typically network hardware devices such as routers, bridges, gateways, firewalls, or switches. General-purpose computers can also forward packets and perform routing, though they are not specialized hardware and may suffer from limited performance. The routing process usually directs forwarding on the basis of routing tables, which maintain a record of the routes to various network destinations. Thus, constructing routing tables, which are held in the router's memory, is very important for efficient routing. Most routing algorithms use only one network path at a time. Multipath routing techniques enable the use of multiple alternative paths. 

Routing in a more narrow sense of the term, is often contrasted with bridging in its assumption that network addresses are structured and that similar addresses imply proximity within the network. Structured addresses allow a single routing table entry to represent the route to a group of devices. In large networks, structured addressing (routing, in the narrow sense) outperforms unstructured addressing (bridging). Routing has become the dominant form of addressing on the Internet. Bridging is still widely used within localized environments. 

#A Network Packet

A formatted unit of data carried by a packet-switched network. Computer communications links that do not support packets, such as traditional point-to-point telecommunications links, simply transmit data as a bit stream. When data is formatted into packets, packet switching is possible and the bandwidth of the communication medium can be better shared among users than with circuit switching. 

A packet consists fo control information and user data, which is also known as the payload. Control information provides data for delivering the payload, for example: source and destination network addresses, error detection codes, and sequencing information. Typically, control information is found in packet headers and trailers. 

#Packet switching

Packet switching is a digital networking communications method that groups all transmitted data into suitably sized blocks, called packets, which are transmitted via a medium that may be shared by multiple simultaneous communications sessions. Packet switching increases network efficiency, robustness and enables technological convergence of many applications operating on the same network.

Packets are composed of a header and payload. Information in the header is used by networking hardware to direct the packet to its destination where the payload is extracted and used by application software.

Packet switching is used to optimize the use of the channel capacity available in digital telecommunications networks such as computer networks, to minimize the transmission latency (the time it takes for data to pass across the network), and to increase robustness of communication. 

#Network Switch

A network switch(also called switching hub, bridging hub, officially MAC bridge) is a computer networking device that connects devices together on a computer network, by using packet switching to receive, process and forward data to the destination device. Unlike less advanced network hubs, a network switch forwards data only to one or multiple devices that need to receive it, rather than broadcasting the same data out of each of its ports. 

A network switch is a multiport network bridge that uses hardware addresses to process and forward data at the data link layer(layer2) of the OSI model. Switches can also process data at the network layer(layer 3) by additionally incorporating routing functionality that most commonly uses IP addresses to perform packet forwarding; such switches are commonly known as layer-3 switches or multilayer switches. Beside most commonly used Ethernet switches, they exist for various types of networks, including Fibre Channel, Asynchronous Transfer Mode, and InfiniBand.

#VLAN 

A virtual LAN (VLAN) is any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2). LAN is an abbreviation for local are network. 

To subdivide a network into virtual LANs, one configures network equipment. Simpler equipment can partition only per physical port (if at all), in which case each VLAN is connected with a dedicated network cable. More sophisticated devices can mark packets through VLAN tagging, so that a single interconnect(trunk) may be used to transport data for multiple VLANs. Since VLANS shar bandwidth, a VLAN trunk can use link aggregation, quality-of-service prioritization, or both to route data efficiently. 

VLANs allow network administrators to group hosts together even if the hosts are not on the same network switch. This can greatly simplify network design and deployment, because VLAN membership can be configured through software. Without VLANs, grouping hosts according to their resource eneds necessitates the labor of relocating nodes or rewiring data links. 

#Link aggregation

Link aggregation applies to various methods of combining multiple network connections in parallel in order to increase throughput beyond what a single connection could sustain, and to provide redundancy in case one of the links should fail. A LAG (Link Aggregation Group) combines a number of physical ports together to make a single high-bandwidth data path, so as to implement the traffic load sharing among the member ports in the group and to enhance the connection reliability. 

#Quality of service

Quality of service(QoS) is the overall performance of a telephony or computer network, particularly the performance seen by the users of the network. To quantitatively measure quality of service, several related aspects of network service are often considered, such as error rates, bit rate, throughput, transmission delay, availability, jitter. 

In computer networking, quality of service refers to traffic prioritization and resource reservation control mechanisms rather than the achieved service quality. Quality of service is the ability to provide different priority to different applications, users, or data flows, or to guarantee a certain level of performance to a data flow. 

Quality of service is particularly important for the tranport of traffic with special requirements. In particular, developers have introduced technology to allow computer networks to become as useful as telephone networks for audio conversations, as well as supporting new applicaitons with even stricter service demands. 

#IEEE 802.11

IEEE 802.11 is a set of media access control(MAC) and physical layer (PHY) specifications for implementing wireless local area network (WLAN) computer communication in the 900 MHz and 2.4, 3.6, 5, and 60 GHz frequency bands. They are created and maintained by the (IEEE) LAN/MAN Standards Committee. The base version of the standard was released in 1997, and has had subsequent amendments. The standard and amendments provide the basis for wireless network products using the Wi-Fi brand. While each amendment is officially revoked when it is incorporated in the latest version of the standard, teh corporate world tends to market to the revisions because they concisely denote capabilities of their products. As a result, in the market place, each revision tends to become its own standard. 

The 802.11 family consists of a series of half-duplex over the air modulation techniques that use the same basic protocol.

802.11b adn 802.11g use the 2.4 GHz ISM band. Because of this choice of frequency band, 802.11b and g equipment may occasionally suffer interference from microwave ovens, cordless telephones, and Bluetooth devices. The standards control their interference and susceptibility to interference by using direct-sequence spread spectrum (DSSS) and orthogonal frequency-division multiplexing (OFDM) signaling methods, respectively. 802.11a uses the 5GHz U-NII band, which, for much of the world, offers at least 23 non-overlapping channels rather than the 2.4GHz ISM frequency band offereing only three non-overlapping channels, where other adjacent channels overlap. Better or worse performance with higher or lower frequencies (channels) may be realized, depending on the environemnt. 

#TCP - Transmission Control Protocol

TCP is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol(IP). Therefore, teh entire suite is commonly referred to as TCP/IP. TCP provides reliable, ordered, and error-checked delivery of a stream of octets between applications running on hosts communicating by an IP network. Major Internet applications such as the World Wide Web, email, remote administration adn file transfer rely on TCP. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service thtat emphasizes reduced latency over reliability. 

#Spanning Tree Protocol 

STP is a network protocol that builds a logical loop-free topology for Ethernet networks. THe basic function of STP is to prevent bridge loops and broadcast radiation that results from them. Spanning tree also allows a network design to include spare(redundant) links to provide automatic backup paths if an active link fails. This is done without the danger of bridge loops, or the need for manual enabling or disabling of these backup links. 

As the name suggests, STP creates a spanning tree within a network of connected layer-2 bridges, and disables those links that not part of the spanning tree, leaving a single acive path between any two network nodes.

**switching loop** or bridge loop occurs in computer networks when there is more than one Layer 2(OSI model) paht between two endpoints(e.g. multiple connections between two network switches or two ports on the same switch connected to each other). The loop creates broadcast storms as broadcasts and multicasts are forwarded by switches out every port, the switch or switches will repeatedly rebroadcast the broadcast messages flooding the network. Since the Layer 2 header does not support a time to live (TTL) value, if a frame is sent into a looped topology, it can loop forever. 

A physical topology that contains switching or bridge loops is attractive for redundancy reasons, yet a switched network must not have loops. The solution is to allow physical loops, but create a loop-free logical topology using the shortest path bridging (SPB) protocol or the older spanning tree protocols(STP) on the network switches.  

**Broadcast radiation** is the accumulation of broadcast and multicast traffic on a computer network. Extreme amounts of broadcast traffic constitute a broadcast storm. A broadcast storm can consume sufficient network resources so as to render the network unable to transport normal traffic. A packet that induces such a storm is occasionally nicknamed a Chernobyl packet. 

In some cases, a broadcast storm can be instigated for the purpose of a denial of service (DOS) using one of the packet amplification attacks, such as the smurf attack or fraggle attack, where smurf sends a large amount of ICMP Echo Requests (ping) traffic to a broadcast address, with each ICMP Echo packet containing the spoof source address of the victim host. When the spoofed packet arrives the destination network, all hosts on the network reply to the spoofed address, The initial Echo Request is multiplied by the number of hosts on the network. This generates a storm of replies to the victim host tying up network bandwidth, using up CPU resources or possibly crashing the victim. 

#Shortest Path Bridging

SPB is a computer networking technology intended to simplify the creation and configuration of networks, while enabling multipath routing. It is the replacement for the older spanning tree protocols. These blocked any redundant paths that could result in a layer 2 loop, whereas SPB allows all paths to be active with multiple equal cost paths, provides much larger layer 2 topologies, supports faster convergence times, and improves the efficiency by allowing traffic to load share across all paths of a mesh network. It is designed to virtually eliminate human error during configuration and preserves the plug-and-play nature that established Ethernet as the de facto protocol at Layer 2. 

#Network topology

Network toplogy is the arrangement of the various elements (links, nodes, etc) of a computer network. Essentially, it is the topological structure of a network adn may be depicted physically or logically, Physical topology is the placement of the various components of a network, including device location and cable installation, while logical topology illustrates how data flows within a network, regardless of its physical design. Distances between nodes, physical interconnections, transmission rates, or signal types may differ between two networks, yet their topologies may be identical. 

#Network address translation

Network address translation is a method of remapping one IP address space into another by modifying network address information in Internet Protocol(IP) datagram packet headers while they are in transit across a traffic routing device. The technique was originally used for eas of rerouting traffic in IP networks without renumbering every host. It has become a popular and essential tool in conserving global address space allocations in face of IPv4 address exhaustion by sharing one Internet-routable IP address of a NAT gateway for an entire private network. 

#Address Resolution Protocol(ARP)

ARP is a telecommunication protocol used for resolution of Internet layer addresses into link layer addresses, a critical function in multiple access networks. 

ARP is used for mapping a network address(e.g. an IPv4 address) to a physical address like an Ethernet address (also named a MAC address). ARP has been implemented with many combinations of network and data link layer technologies, like IPv4, etc. 

ARP is a request and reply protocol that runs encapsulated by the line protocol. It is communicated within the boundaries of a single network, never routed across internetwork nodes. This property places ARP into the Link Layer of the Internet Protocol Suite, while in the Open Systems Interconnection(OSI) model, it is often described as residing in Layer 3, being encapsulated by Layer 2 protocols. However, ARP was not developed in the OSI framework. 

#Ethernet

Ethernet is a family of computer networking technologies commonly used in local area networks (LANs) and metropolitan area networks (MANs). 

The original Ethernet uses coaxial cable as a shared medium, while the newer Ethernet variants use twisted pair and fiber optic links in conjunction with hubs or switches. Over the course of its history, Ethernet data transfer rates have been increased from the original 2.94 megabits per second (Mbit/s) to the latest 100 gigabits per second (Gbit/s). The Ethernet standards comprise several wiring and signaling variants of the OSI physical layer in use with Ethernet.

Systems communicating over Ethernet divide a stream of data into shorter pieces called frames. Each frame contains source and destination addresses, and error-checking data so that damaged frames can be detected and discarded; most often, higher-layer protocols trigger retransmission of lost frames. As per te OSI model, Ethernet proveds services up to and including the data link layer. 

Since its commercial release, Ethernet has retained a good degree of backward compatibility. Features such as the 48-bit MAC address adn Ethernet frame format have influenced other networking protocols. The primary alternative for some uses of contemporary LANs is Wi-Fi, a wireless protocol standardized as IEEE 802.11.

#Open Shortest Path First

OSPF is a routing protocol for Internet Protocol(IP) networks. It uses a link state routing (LSR) algorithm and falls into the group of interior routing protocols, operatin within a single autonomous system(AS). OSPF is perhaps the most widely used interior gateway protocol(IGP) in large enterprise networks. Intermediate System to Intermediate System (IS-IS), another link-state dynamic routing protocol, is more common in large service provider networks. The most widely used exterior gateway protocol is the Border Gateway Protocol (BGP), the principal routing protocol between autonomous systems on the Internet. 

#Link-state routing protocol

Link state routing protocols are one of the two main classes of routing protocols used in packet switching networks for computer communications, the other being distance-vector routing protocols. This contrasts with distance-vector routing protocols, which work by having each node share its routing table with its neighbours. In a link-state protocol the only information passed between nodes is connectivity related. Link-state algorithms are sometimes characterized informally as each router, "telling teh world about its neighbours".

#Distance-vector routing protocola

A distance-vector routing protocol requires that a router informs its neighbors of topology changes periodically. Compared to link-state protocols, which require a router to inform all the nodes in a network of topology changes, distance-vector routing protocols have less computational complexity and message overhead. 

#Intermediate System to Intermediate System 

IS-IS is a routing protocol designed to move information efficiently within a computer network, a group of physically connected computers or similar devices. It accomplished this by determining teh best route for datagrams through a packet-switched network. 

#Interior Gateway Protocol

IGP is a type of protocol used for exchanging routing information between gateways (commonly routers) within an autonomous system (for example, a system of corporate local area networks). This routing information can then be used to route network-layer protocols like IP. 

Internet gateway protocols can be divided into two categories: distance vector routing protocols and link-state routing protocols. Specific examples of IGP protocols include PSPF, RIP, and IS-IS. 

By contrast, exterior gateway protocols are used to exchange routing information between autonomous systems and rely on IGPs to resolve routes within an autonomous system. 

#Border Gateway Protocol 

BGP is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems (AS) on the Internet. The protocol is often classified as a path vector protocol but is sometimes also classed as a distance-vector protocol. THe Border Gateway Protocol makes routing decisions based on paths, network policies, or rule-sets configured by a network administrator and is involved in making core routing decisions

BGP may be used for routing within an autonomous system, In this application it is referred to as Interior Border Gateway Protocol, Internal BGP, or iBGP. In contrast. The Internet application of the protocol may be referred to as Exterior Border Gateway Protocol, External BGP, or EBGP. 
