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