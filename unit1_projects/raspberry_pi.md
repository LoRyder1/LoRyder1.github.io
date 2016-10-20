# Getting Started with Raspberry Pi 

What does it mean to say that Pi is a fully functional computer? The Pi runs at 1.2GHz. - 64-bit 1.2GHz quad-core CPU with 1GB of RAM, 802.11n Wi-Fi and Bluetooth. This allows it to run a myriad of different operating systems. 

#Energy consumption

Raspberry Piz cost almost nothing to run. This makes the Pi remarkably attractive as an always-on linux server or base for your connected hardware projects. Consumption depends on the model and there are ways to reduce consumption even further, but a Pi 3 Model B will draw around 1.4W at idle and upt to 3.7W at load. 

The diminuitive Pi power needs opens the door for interesting mobile and embedded uses as it can be powered by a normal USB battery pack for a good while. 

#Uses of a Raspberry Pi

Network-attached storage (NAS) is a file-level computer data storage server connected to a computer network providing data access to a heterogeneous group of clients. NAS is specialized for serving files either by its hardware, software, or configuration. It is often manufactured as a computer appliance - a purpose-built specialized computer. NAS systems are networked appliances which contain one or more storage drives, often arranged into logical, redundant storage containers or RAID. 

Network-attached storage removes the responsiblity of file serving from other servers on the network. They typically provide accs to files using network file sharing protocols such as NFS. NAS benefits include, dedicated network-attached storage, compared to general-purpose servers also serving files, include faster data access, easier administration, and simple configuration. 

#So what can you do with it

The first and most obvious route: use it as a computer. It definitely won't be the fastes machine in your house but it can accomplish basic tasks well. While you can hook it up to a full size mouse, keyboard and desktop display, there are tons of options for smaller displays, including touch screens, that make the the Pi ideal for various projects. 
  - Digital photo frame
  - Smart/Magic Mirror
  - etc

#What is the Pi not so well suited for?

For one the Pi is a full computer and while it does not consume much power for a computer, it can be overkill compared to an Arduino for simple hardware projects tha don't require running an OS, GUI or networking. 
The Pi is not without a few tradeoffs. Ethernet networking (which is a 100Mbps link) and disk access (if you attach any storage device via USB) all go throught the USB bus. So any simultaneous Ethernet network traffic and storage device usage will be bottlenecked by the same bus. Wi-Fi does not route througthe USB bus, but youwill still typically only see around 20-40MBps over Wi-Fi instead of the theoretical 150Mbps for 802.11n. 