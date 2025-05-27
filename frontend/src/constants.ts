import { faker } from "@faker-js/faker";

export const PRODUCTS = [
  {
    title: "CORSAIR VOID RGB ELITE Wireless Gaming Headset",
    description: `
      Stunning Sound: Hear everything from the lightest footstep to the most thundering explosion thanks to premium, custom-tuned 50mm high-density neodymium audio drivers with an expanded frequency range of 20Hz-30,000Hz.
      Enduring Comfort: Breathable microfiber mesh fabric and plush memory foam earpads keep you comfortable even during long gaming sessions.
      Low-Latency 2.4GHz Wireless: Connect wirelessly to your PC or PS4* with the included USB adapter. *7.1 surround sound only available on PC
      Optimized Omnidirectional Microphone: Picks up your voice with exceptional clarity, with a flip-up mute function and a built-in LED mute indicator.
      Durable Construction with Aluminum Yokes: Built to last through years of gaming.
    `,
    image: "https://m.media-amazon.com/images/I/61oGokyedML._AC_SL1500_.jpg",
  },
  {
    title: "Razer Basilisk V3 Customizable Ergonomic Gaming Mouse",
    description: `
      ICONIC ERGONOMIC DESIGN WITH THUMB REST — PC gaming mouse favored by millions worldwide with a form factor that perfectly supports the hand while its buttons are optimally positioned for quick and easy access
      11 PROGRAMMABLE BUTTONS — Assign macros and secondary functions across 11 programmable buttons to execute essential actions like push-to-talk, ping, and more
      HYPERSCROLL TILT WHEEL — Speed through content with a scroll wheel that free-spins until its stopped or switch to tactile mode for more precision and satisfying feedback that’s ideal for cycling through weapons or skills
      11 RAZER CHROMA RGB LIGHTING ZONES — Customize each zone from over 16.8 million colors and countless lighting effects, all while it reacts dynamically with over 150 Chroma integrated games
      OPTICAL MOUSE SWITCHES GEN 2 — With zero unintended misclicks these switches provide crisp, responsive execution at a blistering 0.2ms actuation speed for up to 70 million clicks
      FOCUS+ 26K DPI OPTICAL SENSOR — Best-in-class mouse sensor with intelligent functions flawlessly tracks movement with zero smoothing, allowing for crisp response and pixel-precise accuracy
      #1 SELLING PC GAMING PERIPHERALS BRAND IN THE U.S. — Source — Circana, Retail Tracking Service, U.S., Dollar Sales, Gaming Designed Mice, Keyboards, and PC Headsets, Jan. 2019- Dec. 2023 combined
      OPTIMIZE MOUSE ACCURACY — Improve accuracy by disabling the "Enhance pointer precision" option in the Windows mouse settings, and further optimize performance using the Razer Synapse App
    `,
    image: "https://m.media-amazon.com/images/I/61AcT0ZuO3L._AC_SL1500_.jpg",
    price: 100,
    variants: ["Black", "White", "Red", "Blue", "Green"],
  },
  {
    title: "SteelSeries Arctis Nova 7 Wireless Multi-Platform Gaming Headset",
    description: `
      NEODYMIUM MAGNETIC DRIVERS — These drivers create an ultra-detailed soundscape of crystal clear highs, pinpoint mids, and deep bass for your space journey
      DUAL AUDIO STREAMS — Connect your mobile device directly for on-the-go audio or mix in calls or music with your game audio.when at home.
      MULTI-PLATFORM WIRELESS — Instant, lossless wireless on your PC, PlayStation, Switch or tablet with a portable USB-C dongle (USB-C to USB-A cable also included).
      38-HR BATTERY LIFE — Quickly jump back in with USB-C Fast Charge, giving 6 hours of play after a 15 min charge
      360° SPATIAL AUDIO — Hear everything from every direction for full immersion and situational awareness; compatible with Tempest 3D Audio.
      X-RAY HEARING — Amplify footsteps, reloads, or whatever helps you win with 100+ game presets. Powered by Sonar Software.
      AI NOISE CANCELLING — Deletes any noise that isn’t your voice, so you can be heard loud and clear.
    `,
    image: "https://m.media-amazon.com/images/I/611LReeBjVL._AC_SL1500_.jpg",
  },
  {
    title:
      "ASUS TUF Gaming Z790-Plus WiFi LGA 1700 (Intel 14th, 12th & 13th Gen) ATX Gaming Motherboard",
    description: `
      Intel LGA 1700 socket: Ready for 12thand13th Gen Intel Core processors, support PCIe 5.0,DDR5 and out of box Windows 11 ready
      Enhanced Power Solution: 16plus1 DrMOS, ProCool sockets, military-grade TUF components, and Digiplus VRM for maximum durability and performance
      Comprehensive Cooling : VRM heatsink, PCH fanless heatsink, M.2 heatsink, hybrid fan headers and Fan Xpert 4 utility
      Ultra-Fast Gaming Networking : WiFi 6 AX201 (802.11 ax), Intel I225-V 2.5Gb LAN, TUF LANGuard and TurboLAN technology
      Fastest Connectivity: 4x M.2/NVMe SSD, Front panel USB 3.2 Gen 2 Type-C header, USB Gen 2x2 Type-C and Thunderbolt 4 (USB4)header
      PC DIY Friendly: SafeDIMM, PCIe 5.0 Safeslot, Q-LED, M.2 Q-Latch, Pre-mount I/O shield
      New TUF Gaming Aesthetics: New ID design, Synchronizable LED effects across a vast portfolio of compatible PC gear, including addressable RGB strips with Aura Sync
      Immersive Gaming Audio and AI Noise Cancellation: The Realtek S1200A codec offers pristine audio quality to draw you deeper into the game action or to enhance your favorite music tracks or videos.Communicate clearly with ASUS AI Noise Canceling Mic technology
    `,
    image: "https://m.media-amazon.com/images/I/81vwunw01KL._AC_SL1500_.jpg",
  },
  {
    title: "ARZOPA 16.1'' 144Hz Portable Gaming Monitor",
    description: `
      16.1" 144Hz Display: Arzopa Z1FC 16.1" portable monitor has 144Hz ultra-high refresh rate for higher motion clarity and smoother gaming visuals. The 144Hz high refresh rate brings lower input latency and higher videos, work and game screen quality（no adaptive sync or freesync）
      Portable Monitor with Kickstand: The portable gaming monitor comes with a built-in stand that allows for easy adjustment of the tilt angle to accommodate different usage needs. Lightweight and easier to carry
      106% sRGB IPS Screen: The 16.1" portable monitor features 1080P FHD high-definition resolution and 106% sRGB gamut brings clear picture quality, immerse yourself in vibrant colors and crisp details
      Second Monitor for Your Laptop: The ARZOPA portable monitor can very well act as your second screen and improve your work efficiency. You can work and perform multiple tasks simultaneously while using this monitor. You can also switch the screen view between horizontal and vertical modes for the perspective you prefer
      Plug-and-play Monitor: With two fully functional USB Type-C connections and a Mini HDMI port, can used with laptop, Mac, Xbox, PS5, Steam Deck, etc. No setup or downloads are required. Perfect for gamers to enjoy gaming, also for business people to train others or work from home（Please refer to the detailed steps on the manual for connecting your gaming console）
    `,
    image: "https://m.media-amazon.com/images/I/71-clY1wOUL._AC_SL1465_.jpg",
  },
  {
    title: "GMKtec M5 Plus Gaming Mini PC Ryzen 7 5825U",
    description: `
      【Office Gaming Mini PC】UPGRADED GMKtec Nucbox M5 Plus Series is equipped with the powerful AMD Ryzen 7 5825U processor, 8 Cores/16 Threads, Boost up to 4.50GHz, Based on the ZEN 3+ architecture, this small but powerful mini pc delivers satisfying results in productivity, office work, and gaming. 35% Performance increase over previous AMD Ryzen 7 5700U, 5600U, 5560U, 5500U.
      【32GB DDR4 RAM & 1TB PCIe SSD】Installed with DDR4 32GB RAM Dual Channel (2x16GB), the Nucbox M5 mini pc support expansion to 64GB RAM. Featured with 1TB M.2 2280 PCIe 3.0 SSD, support dual slot expansion to 4TB SSD. (Upgrades not included)
      【DUAL NIC LAN 2.5G RJ45】Fast Network Speeds: Enjoy up to 2500Mbps data transmission speed without worrying about lagging. Ideal for working, gaming, and surfing the internet. Great for Untangle, Pfsense or as a server office PC.
      【Mini Desktop Computer with 4K Triple Screen Display】Nucbox M5 Plus integrates AMD Radeon Graphics 8 Cores 2000 MHz GPU to deliver powerful graphics processing power to easily handle the demands of complex design software, 4K@60Hz UHD video editing, and playback, or mid-range gaming. And it can connect to 3 display screens simultaneously.
      【Fast Internet WiFi 6E + BT5.2 Connection】GMKtec Mini PC with WiFi-6E Wireless, have 2.5G/5G/6G triple band, more faster and lower latency. Bluetooth 5.2 allowing you more quickly to connect other wireless devices (headset, mouse, keyboard, etc.) Interface features 2*USB3.2 ports, 2*USB2.0 ports, 1*HDMI 2.0 port(4K@60Hz), 1*USB-C port(PD/DP/DATA), 1*DP Port, 1*Audio 3.5mm (HP&MIC), 1*DC Power Port.
      【GMKtec Warranty】 GMKtec offers a 1-year limited warranty for each mini PC, starting from the date of the purchase. All defects due to design and workmanship are covered. With a professional after sales team always ready to attend to your needs, you can simply relax and enjoy your mini PC.
    `,
    image: "https://m.media-amazon.com/images/I/61LtrQX1E4L._AC_SL1500_.jpg",
  },
  {
    title: "GL.iNet GL-MT6000 (Flint 2) WiFi 6 Router with Wide Coverage",
    description: `
      ***Please update the firmware upon initial setup of the router, as it greatly enhances the device's performance and ensures a superior user experience.*** 【WiFi 6 Standard with ultra-low latency】Wi-Fi 6 speeds up to 6 Gbps to let you enjoy smoother 4K streaming, gaming, video calls and more, DDR4 1GB / eMMC 8GB
      【High Speed Gaming Router】Dominate with uninterrupted performance with the ultimate MT6000 gaming internet router, equipped with 8-stream Wi-Fi 6 technology, the Flint 2 delivers blazing speeds, ensuring a stable and high-speed connection during intense multiplayer battles.
      【Rapid OpenVPN & Wireguard speed】Wireguard VPN and OpenVPN speeds up to 900Mbps and 190Mbps respectively, giving you complete control over your gaming, steaming and working bandwidth. Actual speed may differ depending on internet service provider, network environment, VPN server location, VPN service provider, etc.
      【AdGuard Home Supported】Enabling the use of a DNS server for blocking unwanted tracking and offers a convenient web interface for filtering selected digital advertisements. Users can take full control of their online experience and enjoy a clutter-free browsing environment with ease.
      【Mass device connectivity】Experience enhanced online connectivity with our higher storage capacity, catering to over a hundred devices and fulfilling the requirements of DIY users seeking to install additional plugins. Enjoy stable and reliable connections, ensuring seamless performance and accommodating a wide range of digital needs.
      【Easy Setup】Follow the Initial Set-up video tutorial on Amazon or Connect MT6000 to your computer via Ethernet cable to access the web Admin Panel.
    `,
    image: "https://m.media-amazon.com/images/I/61mSLh-ERLL._AC_SL1500_.jpg",
  },
  {
    title: "MSI Gaming RTX 5070 Ti 16G Ventus 3X OC Graphics Card",
    description: `
      16GB GDDR7, 256-bit, Extreme Performance: 2497 MHz, DisplayPort x 3 2.1a, HDMI 2.1b, NVIDIA Blackwell Architecture
      Powered by the NVIDIA Blackwell architecture and DLSS 4
      SFF-Ready Enthusiast GeForce Card
      TORX Fan 5.0: Fan blades linked by ring arcs work to stabilize and maintain high-pressure airflow
      Nickel-plated Copper Baseplate: Heat from the GPU and memory is swiftly captured by a nickel-plated copper baseplate and transferred
      Core Pipe feature a square design to maximize contact with the GPU baseplate for optimal thermal management
    `,
    image: "https://m.media-amazon.com/images/I/81Lsj0mjbpL._AC_SL1500_.jpg",
  },
  {
    title: "Skytech Chronos Gaming PC Desktop",
    description: `
      AMD Ryzen 7 9800X3D 4.7GHz (5.2GHz Turbo Boost) CPU Processor | 2TB Gen4 NVMe M.2 SSD – Up to 30x Faster Than Traditional HDD | 360mm AIO Liquid CPU Cooler with ARGB Fans, say goodbye to outdated and inefficient air coolers.
      NVIDIA Geforce RTX 5080 16GB GDDR7 Graphics Card (Brand may vary) | X670 motherboard |32GB DDR5 RAM 6000 RGB Gaming Memory with Heat Spreader | Windows 11 Home 64-bit
      802.11 AC | No Bloatware | Graphic output options include 1 x HDMI, and 1 x Display Port Promised, Additional Ports may vary | USB Ports Including 2.0, 3.0, and 3.2 Gen1 Ports | HD Audio and Mic | Free Gaming Keyboard and Mouse
      High-spec AIO liquid coolers used, delivering unmatched cooling performance for a perfect operational experience and unparalleled cooling performance. With hardware unrestricted by temperature limits, you can unleash its full potential. Whether gaming, creating, or working, you'll never suffer from thermal throttling again. | Skytech Chronos Case White Edition with Front Mesh | 1 Year Warranty on Parts and Labor | Free Technical Support | Assembled in the USA
      This powerful gaming PC is capable of running all your favorite games such as Call of Duty, Fortnite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, PLAYERUNKNOWN’s Battlegrounds, Overwatch 2, Counter-Strike 2, Battlefield V, Minecraft, ELDEN RING Shadow of the Erdtree, Rocket League, Baldur’s Gate 3, Dota 2, HELLDIVERS 2, Monster Hunter, Terraria, Rainbow Six Siege, Dragon’s Dogma 2, Black Myth Wukong, Marvel Rivals, more at Ultra settings, detailed 4K Ultra HD resolution, and smooth 60+ FPS gameplay.
    `,
    image: "https://m.media-amazon.com/images/I/71A9cMSgvFL._AC_SL1200_.jpg",
  },
  {
    title: "HapGIFT Gaming Chair",
    description: `
      Computer Chair with Massage Lumbar Support, Ergonomic Gaming Chair with Footrest, High Back Adjustable Technical Fabric with Headrest, Gamer Chair for Adults (Black-White)
      COMFORTABLE FABRIC: The fabric of this gaming chair is made of PU leather, which enhances the breathability of the chair. The fabric is soft, comfortable and easy to clean, just wipe it gently with a damp cloth. The seat cushion of the computer chair is composed of S-shaped springs and durable high-density foam, which is elastic and not easily deformed, making it comfortable and more supportive. You can sit comfortably for long periods of time without feeling hot and humid. Armchair cushion and backrest frame made of FSC-Certified wood.
      ERGONOMIC DESIGN: HapGIFT gaming chair is comfortable and durable, and its ergonomic design structure conforms to the curves of the human body, bringing you the ultimate comfortable experience. The chair is equipped with a headrest and massage lumbar pillow, which can relieve neck discomfort and waist pain caused by sitting for long periods of time. The bottom of the seat is equipped with footrests, which you can use to relieve your legs when lying down on the chair.
      Sturdy and Durable Material:The gaming chair features a sturdy five-prong base, ensuring the chair is extremely stable. The chair’s air bars are made of alloy steel and are multi-certified to withstand up to 300 pounds of weight, making them extremely strong and durable. The 360° swivel and 360° caster features allow you to move freely while sitting in the chair.
      SUITABLE FOR MULTIPLE SCENES :HapGIFT gaming chair is suitable for gamers and office workers. The wing-shaped backrest provides multiple points of body contact to distribute body pressure. There are a variety of colors for you to choose from to suit your usage scenarios, so you don’t have to worry about being out of tune with your gaming/working environment.
      ASSEMBLY AND AFTER-SALES: You'll receive a detailed instruction manual and all the necessary accessories for easy assembly. If problems arise, such as missing parts, product damage, or other unsatisfactory issues, our professional after-sales service team will offer replacement parts as needed. Additionally, we provide free replacement or repair within one year. We want all of our customers to feel 100% satisfied, If you have any questions or suggestions, please don't hesitate to contact us.
    `,
    image: "https://m.media-amazon.com/images/I/71M0xxt+BhL._AC_SL1500_.jpg",
  },
  {
    title:
      "Audioengine A2+ Desktop 24 Bit Wireless Bluetooth Desktop Speakers - 60W Computer Speakers for Music and Gaming",
    description: `
      HIFI 24 BIT - 16 and 24 bit high resolution audio capable, great for all online streaming services and personal libraries
      BLUETOOTH 5.3 APTX-HD - Simple wireless connection from up to 100ft away with your smartphone or computer
      CUSTOM TUNED - Custom tuned by musicians for that signature audioengine music and gaming sound
      PLUG AND PLAY - Quick USB-C, RCA or 3.5mm AUX wired options
      HAND BUILT - Made to last wood cabinets finished in a high gloss 13 step paint process
      FEATURING - Subwoofer output, class A/B amplifier with 2.75 inch aramid fiber woofers and 0.75 inch silk dome tweeters
      GREAT AS - Studio monitors, bookshelf speakers, computer speakers, turntable speakers
      WHY CHOOSE THE A2 - Award-winning, professional components, US veteran owned company based in Texas, guaranteed for 3 years, customer service with real people - not voicemail
      INCLUDES - 6.5 ft speaker wire, power supply & cord, 5 ft USB cable, 5 ft mini-jack audio cable, microfiber speaker and cable bags, setup guide  
    `,
    image: "https://m.media-amazon.com/images/I/51dqqbw2DhL._AC_SL1152_.jpg",
  },
  {
    title: "MAONO Dynamic Gaming Microphone",
    description: `
      Improve 50% Sound Details: Compared with similar competitors with a 16-bit/48kHz sampling rate, MAONO PD100XS gaming microphone adopts a frequency response of 40Hz-16KHz and a high 24-bit/48kHz sampling rate, Sound details improved by 50%, the pc microphone gaming conveys richer, clearer audio
      Double Noise Cancellation: MAONO Podcast microphone uses a customized dynamic microphone core and the latest self-developed algorithm to minimize the impact of ambient noise, thereby achieving the purpose of noise reduction. MAONO LINK software noise reduction can freely adjust the noise reduction level to adapt to various usage environments, whether you're a gamer, streamer, or podcaster. Maono Link tailors your audio output for a truly immersive and engaging experience. (USB mode only)
      Exclusive customizable RGB Lighting: The streaming microphone features a unique RGB design with 3 modes and 9 color options, customizable static, and dynamic RGB lighting effects perfectly complement your PC gaming rig. Easily adjust color, and brightness or turn off the lights to suit various environments by using Maono link software or the bottom RGB button. (USB mode only)
      USB/XLR Connectivity: PD100XS microphone with arm is an all-in-one solution, perfect for gamers to take their live game streaming to the next level. Connect the XLR microphone to a gaming audio interface or mixer for smooth audio and flexible operation, providing clean, stable,noise-free signal transmission with impressive results. Additionally, the USB connection offers convenience for beginners or professionals. Allows you fast into gaming, streaming, or chatting on PC, PS4/PS5
      Tap To Mute, Easy To Use: Whether you're gaming, podcasting,chatting, or live streaming, just tap the silent soft-touch mute key to silence, helps avoid any embarrassing streaming audio-related accidents, better protecting your privacy. PD100XS microphone for pc easily masters all aspects of the gaming voice, streaming, and vocal recording process. (USB mode only)
      Flexible Function Keys: The studio microphone is equipped with a convenient, smooth 2-in-1 smart knob that independently controls gain and monitoring volume with different colored LED indicators. This feature is particularly useful for streaming and extensive online gaming with Discord. Additionally, the built-in headphone monitor jack allows for real-time gameplay, enabling clear game chat and seamless teamwork with your teammates! (USB mode only)
      What's you get: Dynamic microphone*1, User Gudie*1, USB-C to USB-A/C cable*1, Mic desktop Stand*1 (NOTE: XLR cable not included) - COMPATIBILITY: Widely compatible with Windows, Mac OS, PS4/PS5, audio mixer, etc. (NOT COMPATIBLE WITH XBOS)
    `,
    image: "https://m.media-amazon.com/images/I/51i9W4VSD+L._AC_SL1000_.jpg",
  },
].map((product) => ({
  ...product,
  price: faker.number.int({ min: 20, max: 1000 }),
  variants: Array.from({ length: 3 }, () => faker.color.human()),
}));
