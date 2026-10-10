import heroOceanImg from '../assets/images/hero_ocean_freight_1791654360420.jpg';
import heroAirImg from '../assets/images/hero_air_freight_1791654375365.jpg';
import heroRoadImg from '../assets/images/hero_road_freight_1791654388807.jpg';
import heroHubImg from '../assets/images/hero_logistics_hub_1791654402278.jpg';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  highlightStat: string;
  highlightLabel: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
}

export interface ShippingService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  details: string[];
  specs: {
    transitTime: string;
    capacity: string;
    coverage: string;
    bestFor: string;
  };
  features: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Maritime' | 'Air Freight' | 'Supply Chain' | 'Trade Policy';
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface ShipmentTrackRecord {
  trackingNumber: string;
  carrier: string;
  status: 'In Transit' | 'Customs Cleared' | 'Port Arrival' | 'Out for Delivery' | 'Scheduled';
  origin: string;
  destination: string;
  mode: 'Ocean FCL' | 'Air Cargo' | 'Overland Intermodal' | 'Cold Chain';
  vesselName: string;
  progressPercent: number;
  currentLocation: string;
  estimatedArrival: string;
  events: {
    date: string;
    time: string;
    location: string;
    description: string;
    completed: boolean;
  }[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'pre-clearance',
    title: 'Fast-Track Customs Pre-Clearance & Wharf Release',
    subtitle: 'Electronic ASYCUDA World Clearance with Jamaica Customs Agency',
    description: 'Advance manifest processing, duty calculations, and electronic pre-clearance at Kingston Wharves and KCT so your cargo is released immediately upon docking.',
    image: heroOceanImg,
    category: 'Customs Pre-Clearance',
    highlightStat: '100% Digital',
    highlightLabel: 'ASYCUDA Advance Filing',
    primaryAction: 'Request Pre-Clearance',
    primaryHref: '#contact',
    secondaryAction: 'Explore Services',
    secondaryHref: '#services',
  },
  {
    id: 'air-cargo',
    title: 'Expedited Air Cargo & Express Aviation Logistics',
    subtitle: 'Daily Inbound Flights to Norman Manley & Sangster Airports',
    description: 'Time-critical air freight connections into Kingston from Miami, New York, Atlanta, Toronto, and London with rapid customs clearance.',
    image: heroAirImg,
    category: 'Air Cargo Logistics',
    highlightStat: '24-48 hrs',
    highlightLabel: 'Express Transit Window',
    primaryAction: 'Book Air Cargo',
    primaryHref: '#contact',
    secondaryAction: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 'haulage',
    title: 'Heavy Container Haulage & Wharf Drayage Fleet',
    subtitle: 'Reliable 20ft & 40ft Container Hauling Islandwide Across Jamaica',
    description: 'Dedicated prime movers and skeletal chassis providing swift port pullout from Kingston Wharves and KCT directly to your warehouse or project site.',
    image: heroRoadImg,
    category: 'Container Haulage',
    highlightStat: 'Islandwide',
    highlightLabel: 'All Parishes Connected',
    primaryAction: 'Book Container Haulage',
    primaryHref: '#contact',
    secondaryAction: 'Haulage Specs',
    secondaryHref: '#services',
  },
  {
    id: 'door-to-door-vehicles',
    title: 'Door to Door Delivery & Motor Vehicle Clearance',
    subtitle: 'Turnkey Personal & Commercial Cargo Solutions Across All 14 Parishes',
    description: 'Seamless pickup, ocean/air shipping, Trade Board & Customs valuation, and secure flatbed or truck delivery straight to your doorstep.',
    image: heroHubImg,
    category: 'Door to Door & Vehicles',
    highlightStat: 'All 14',
    highlightLabel: 'Parishes Delivered Direct',
    primaryAction: 'Get Rate Quote',
    primaryHref: '#contact',
    secondaryAction: 'Explore All Services',
    secondaryHref: '#services',
  },
];

export const SHIPPING_SERVICES: ShippingService[] = [
  {
    id: 'pre-clearance',
    title: 'Customs Pre-Clearance',
    tagline: 'Fast-track electronic customs pre-clearance with Jamaica Customs Agency.',
    image: '/images/hero_ocean_freight_1791654360420.jpg',
    description: 'Accelerate your cargo release before your vessel or aircraft touches down in Jamaica. Our certified customs specialists submit electronic manifests through ASYCUDA World, process duties, verify compliance, and secure advance wharf release so your cargo bypasses port demurrage and holding delays.',
    details: [
      'ASYCUDA World electronic pre-manifest submission and automated tariff classification',
      'Advance duty calculation, GCT compliance, and Jamaica Customs Agency fee processing',
      'Direct coordination with Kingston Wharves, Kingston Container Terminal (KCT), and Montego Bay',
      'Expedited clearance for commercial shipments, personal effects, and barrel consignments'
    ],
    specs: {
      transitTime: 'Electronic pre-release prior to vessel/flight arrival',
      capacity: 'Full commercial declarations, personal effects & barrels',
      coverage: 'Kingston Wharves (KWL), Port Bustamante & Norman Manley Airport (KIN)',
      bestFor: 'Commercial importers, retail distributors, manufacturers & returning residents'
    },
    features: ['ASYCUDA World Electronic Pre-Filing', 'Zero-Delay Wharf Release', 'Licensed Jamaica Customs Specialists'],
    icon: 'ShieldCheck',
  },
  {
    id: 'door-to-door',
    title: 'Door to Door Delivery',
    tagline: 'End-to-end logistics from overseas origin straight to your doorstep islandwide.',
    image: '/images/door_to_door_delivery.jpg',
    description: 'Complete peace-of-mind delivery from international suppliers, warehouses, or personal senders straight to your business, warehouse, or residence in Jamaica. We handle overseas collection, international transport, customs clearance, and final-mile delivery right to your door.',
    details: [
      'Islandwide delivery network covering all 14 parishes across Jamaica',
      'Careful handling of barrels, commercial cartons, wooden crates, and palletized cargo',
      'Automated dispatch updates and scheduled residential/commercial delivery appointments',
      'Professional two-person delivery teams with liftgate trucks for safe offloading'
    ],
    specs: {
      transitTime: 'Scheduled weekly delivery runs across all 14 parishes',
      capacity: 'From individual barrels and boxes to multi-pallet consignments',
      coverage: 'All 14 Parishes (Kingston, St. Andrew, Montego Bay, St. Catherine, Mandeville & beyond)',
      bestFor: 'Retail businesses, returning residents, overseas family parcels & e-commerce'
    },
    features: ['Islandwide All-14 Parish Reach', 'Complete Turnkey Port-to-Door Delivery', 'Dedicated Offloading Crews'],
    icon: 'Boxes',
  },
  {
    id: 'haulage',
    title: 'Container Haulage & Drayage',
    tagline: 'Heavy-duty container transport, wharf drayage, and inland freight haulage.',
    image: '/images/hero_road_freight_1791654388807.jpg',
    description: 'Dependable container haulage moving 20ft, 40ft, and 45ft ocean containers seamlessly from Kingston Wharves and KCT terminals directly to client sites, factories, and warehouses across Jamaica. Equipped with reliable heavy-duty prime movers, skeletal chassis, and flatbeds.',
    details: [
      'Direct wharf drayage from Kingston Container Terminal (KCT) and Kingston Wharves Ltd (KWL)',
      'Movement of 20ft, 40ft Dry Van containers and 40ft High-Cube refrigerated reefers',
      'Live-unload delivery and flexible drop-and-pick container staging at your premises',
      'Oversized machinery, construction steel, and heavy project cargo transport'
    ],
    specs: {
      transitTime: 'Same-day port pullout and scheduled inland delivery',
      capacity: 'Up to 65,000 lbs payload per haulage unit / Multi-axle chassis',
      coverage: 'Industrial corridors, construction sites & distribution facilities islandwide',
      bestFor: 'Manufacturing plants, construction developers, hardware distributors & shipping lines'
    },
    features: ['Modern Heavy Tractor Fleet & Chassis', 'Wharf Interchange Priority Pullout', 'GPS Fleet Tracking & Route Security'],
    icon: 'Truck',
  },
  {
    id: 'air-cargo',
    title: 'Expedited Air Cargo',
    tagline: 'Rapid commercial air cargo and express freight into Norman Manley & Sangster Airports.',
    image: '/images/hero_air_freight_1791654375365.jpg',
    description: 'When timing is critical, Hi Impact Shipping provides fast, dependable air freight connections into Jamaica from North America, the Caribbean, Europe, and Asia. From urgent commercial spare parts and medical supplies to high-priority cartons and personal cargo.',
    details: [
      'Daily scheduled flight inbound connections into Norman Manley (KIN) and Sangster (MBJ)',
      'Express courier cartons, consolidated air freight, and oversized palletized cargo',
      'Ramp supervision, bonded airport sorting, and immediate customs inspection handover',
      'Temperature-sensitive medical supplies, urgent electronics, and perishable goods handling'
    ],
    specs: {
      transitTime: '24 - 48 Hours express transit / Daily commercial flight schedules',
      capacity: 'Individual packages up to multi-ton consolidated air cargo',
      coverage: 'Miami, Fort Lauderdale, New York, Atlanta, Toronto, London ⇄ Kingston, Jamaica',
      bestFor: 'Urgent commercial inventory, medical supplies, automotive spare parts & electronics'
    },
    features: ['Daily Inbound Flight Schedules', 'Norman Manley Airport (KIN) Ramp Priority', '24–48h Express Turnaround'],
    icon: 'Plane',
  },
  {
    id: 'motor-vehicle-clearance',
    title: 'Motor Vehicle Clearance',
    tagline: 'Customs clearance, valuation assessment, Trade Board permits, and wharf release.',
    image: '/images/motor_vehicle_shipping.jpg',
    description: 'Expert, hassle-free clearance for motor cars, SUVs, commercial trucks, buses, motorcycles, and heavy machinery arriving at Jamaican ports. We guide you through the entire Jamaica Customs Agency importation process—including Trade Board import permit verification, C78 declaration, valuation assessment, and licensing release.',
    details: [
      'Full documentation validation: Bill of Lading, Title/Certificate of Origin, and Trade Board Permit',
      'Jamaica Customs Agency (JCA) C78 valuation assessment, CIF duty, and Environmental Levy calculation',
      'Wharf inspection coordination, wharfage fee settlement, and secure port gate release passes',
      'Tilt-tray flatbed towing and drive-away delivery from Kingston Wharves direct to your location'
    ],
    specs: {
      transitTime: 'Expedited 24 - 48 Hour port clearance upon vessel discharge',
      capacity: 'Sedans, SUVs, Commercial Vans, Heavy Trucks & Industrial Machinery',
      coverage: 'Kingston Wharves (Port Bustamante) & Montego Bay Port',
      bestFor: 'Auto dealerships, private vehicle buyers, returning residents & fleet operators'
    },
    features: ['Accurate JCA Tariff & Duty Valuation', 'Trade Board Import Permit Support', 'Port Gate Release & Flatbed Delivery'],
    icon: 'Car',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'maritime-regulations-2026',
    slug: 'imo-2026-decarbonization-mandates',
    title: 'Decarbonization Mandates: How Green Methanol Vessels Are Reshaping Ocean Freight Rates',
    category: 'Maritime',
    author: {
      name: 'Capt. Henrik Lindqvist',
      role: 'VP of Maritime Fleet Operations',
    },
    date: 'March 28, 2026',
    readTime: '5 min read',
    summary: 'A deep dive into new maritime greenhouse gas targets, dual-fuel container vessels, and how enterprise shippers can forecast green fuel surcharges.',
    keyTakeaways: [
      'Over 28% of new container ship orderbooks now feature dual-fuel methanol or LNG propulsion systems.',
      'Tiered carbon intensity indicator (CII) ratings are prompting vessel speed optimizations across trans-Pacific routes.',
      'Forward contracting and consolidated cargo planning mitigate seasonal alternative fuel price fluctuations.'
    ],
    content: [
      'As international maritime environmental policies tighten, global liner shipping is undergoing its most capital-intensive transformation since containerization. The latest mandate sets binding carbon intensity benchmarks across all vessels exceeding 5,000 gross tonnage.',
      'For global supply chain directors, this shift introduces both operational opportunities and contract structures that require foresight. Dual-fuel container ships running on green e-methanol are no longer conceptual prototypes; major alliances are operating them on scheduled trans-Pacific and Asia-Europe loops.',
      'Shippers investing in long-term carrier contracts must evaluate how maritime fuel surcharges (BAF) are pegged to alternative bio-fuels versus conventional marine gas oil. By consolidating LCL shipments and utilizing predictive booking schedules, organizations can preserve shipping budget predictability while meeting mandatory Scope 3 corporate decarbonization targets.'
    ],
  },
  {
    id: 'cold-chain-iot-pharma',
    slug: 'cold-chain-telemetry-pharma',
    title: 'Cold-Chain Integrity: Real-Time IoT Telemetry in Biopharmaceutical Freight',
    category: 'Supply Chain',
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Director of Life Sciences & Cold Chain',
    },
    date: 'April 04, 2026',
    readTime: '6 min read',
    summary: 'Examines active sensors, cellular-satellite data loggers, and automated temperature excursion mitigation during intercontinental transport.',
    keyTakeaways: [
      'Active GPS and 5G cellular thermal loggers provide continuous 60-second telemetry polling even inside cargo holds.',
      'Automated alert protocols trigger airport intervention teams within 15 minutes of any temperature drift.',
      'GDP compliant digital data logs eliminate paper-based documentation delays at international customs checkpoints.'
    ],
    content: [
      'Biologic drugs, cellular therapies, and vaccines present zero tolerance for temperature excursions. A single uncontrolled thermal swing can compromise millions of dollars in clinical inventory and disrupt patient treatment cycles.',
      'Traditional passive data loggers only revealed thermal failures after the shipment arrived at the destination dock. Today, modern cold chain logistics deploys active IoT sensor arrays equipped with multi-constellation satellite connectivity and cellular failover.',
      'When cargo approaches threshold limits, automated protocol triggers alert on-ground triage personnel at intermediate transfer hubs. Ramp teams can replace dry ice or reconnect reefer units before product viability is compromised, ensuring pristine compliance with Good Distribution Practice (GDP).'
    ],
  },
  {
    id: 'nearshoring-rail-corridors',
    slug: 'nearshoring-intermodal-corridors',
    title: 'Nearshoring Corridors: Intermodal Rail Expanding Continental Supply Chains',
    category: 'Trade Policy',
    author: {
      name: 'Marcus Vance',
      role: 'Chief Commercial Officer',
    },
    date: 'April 11, 2026',
    readTime: '4 min read',
    summary: 'Why manufacturing shifts toward regional clusters are driving historic investments in cross-border rail and dedicated bonded drayage fleets.',
    keyTakeaways: [
      'Cross-border intermodal rail volume grew 18.4% year-over-year as automotive and industrial manufacturing clusters expand.',
      'Pre-cleared bonded rail cars cross international frontiers without stopping for physical highway truck inspections.',
      'Intermodal rail reduces carbon emissions by up to 65% compared to long-haul dry van highway trucking.'
    ],
    content: [
      'The strategic pivot from single-source offshore manufacturing toward diversified regional clusters has placed unprecedented demand on overland freight networks. Industrial hubs are relocating closer to end-consumer markets, shifting freight flows onto continental corridors.',
      'Rather than relying exclusively on long-haul truck drivers navigating congested border crossing bottlenecks, shippers are turning to unified cross-border rail systems. Bonded trains travel directly through electronic non-intrusive inspection portals, shaving days off international border dwell times.',
      'By integrating domestic railhead drayage with port container arrivals, businesses establish resilient, fuel-efficient supply pipelines that buffer against fuel shocks and driver shortages.'
    ],
  },
  {
    id: 'smart-port-congestion-ai',
    slug: 'predictive-port-slot-booking',
    title: 'Mitigating Demurrage: How Predictive Port Slot Booking Protects Operating Margins',
    category: 'Air Freight',
    author: {
      name: 'Sarah Chen-Morales',
      role: 'Head of Global Port Operations',
    },
    date: 'April 18, 2026',
    readTime: '5 min read',
    summary: 'Practical strategies for cargo owners to avoid punitive detention charges through automated berth scheduling and rapid drayage off-dock staging.',
    keyTakeaways: [
      'Terminal demurrage and detention fees cost global cargo owners over $8B in preventable supply chain friction annually.',
      'Automated vessel ETA reconciliation allows drayage trucks to schedule terminal appointments inside 2-hour appointment windows.',
      'Off-dock container yards provide immediate relief by staging containers within 10 miles of marine gates.'
    ],
    content: [
      'Marine terminal congestion and unpredictable vessel bunching frequently subject importers to steep demurrage penalties. When containers sit on terminal property past free-time windows, daily charges accumulate rapidly.',
      'The remedy lies in real-time integration between vessel satellite AIS tracking, terminal gate reservation systems, and drayage dispatch. Instead of waiting for official vessel discharge notifications, our dispatch team reconciles crane moves hours ahead of time.',
      'By immediately moving containers to adjacent off-dock container freight stations (CFS), shippers stop the demurrage clock, maintain inventory velocity, and eliminate driver idle time at port gates.'
    ],
  },
];

export const TRACKING_SAMPLES: Record<string, ShipmentTrackRecord> = {
  'HIS-8921-X': {
    trackingNumber: 'HIS-8921-X',
    carrier: 'Hi Impact Ocean Line',
    status: 'In Transit',
    origin: 'Singapore (SGSIN)',
    destination: 'Rotterdam (NLRTM)',
    mode: 'Ocean FCL',
    vesselName: 'M/V Hi Impact Voyager (Voyage 2604W)',
    progressPercent: 74,
    currentLocation: 'Approaching Suez Canal Maritime Corridor',
    estimatedArrival: 'April 26, 2026 · 14:00 UTC',
    events: [
      { date: 'Apr 10, 2026', time: '08:30 UTC', location: 'Singapore PSA Terminal', description: 'Container loaded onto M/V Hi Impact Voyager', completed: true },
      { date: 'Apr 10, 2026', time: '17:45 UTC', location: 'Singapore Straits', description: 'Vessel cleared harbor waters, underway to Rotterdam', completed: true },
      { date: 'Apr 16, 2026', time: '11:15 UTC', location: 'Indian Ocean Corridor', description: 'Mid-voyage safety inspection & reefer telematics verified', completed: true },
      { date: 'Apr 20, 2026', time: '06:00 UTC', location: 'Gulf of Aden / Red Sea', description: 'Convoys formed for scheduled canal transit', completed: true },
      { date: 'Apr 26, 2026', time: '14:00 UTC', location: 'Rotterdam Gateway Terminal', description: 'Berth arrival & automated gantry crane discharge', completed: false },
    ],
  },
  'HIS-4402-A': {
    trackingNumber: 'HIS-4402-A',
    carrier: 'Hi Impact Air Express',
    status: 'Customs Cleared',
    origin: 'Frankfurt Airport (FRA)',
    destination: 'Chicago O\'Hare (ORD)',
    mode: 'Air Cargo',
    vesselName: 'Boeing 777F (Flight HI-920)',
    progressPercent: 88,
    currentLocation: 'Chicago O\'Hare Cargo Hub 5',
    estimatedArrival: 'Today · 18:30 CDT',
    events: [
      { date: 'Yesterday', time: '14:20 CEST', location: 'Frankfurt Airport Cargo City Süd', description: 'Palletized cargo accepted and screened by TSA/LBA', completed: true },
      { date: 'Yesterday', time: '21:00 CEST', location: 'Frankfurt Runway 18', description: 'Flight HI-920 departed on schedule', completed: true },
      { date: 'Today', time: '04:15 CDT', location: 'Chicago O\'Hare Terminal 5', description: 'Aircraft landed, air waybill processed', completed: true },
      { date: 'Today', time: '09:40 CDT', location: 'US Customs & Border Protection ORD', description: 'Customs clearance granted, release order issued', completed: true },
      { date: 'Today', time: '18:30 CDT', location: 'Consignee Facility, Aurora IL', description: 'Scheduled final dock delivery via dedicated truck', completed: false },
    ],
  },
  'HIS-1109-R': {
    trackingNumber: 'HIS-1109-R',
    carrier: 'Hi Impact Intermodal Haulage',
    status: 'In Transit',
    origin: 'Port of Long Beach, CA',
    destination: 'Alliance Logistics Hub, Dallas TX',
    mode: 'Overland Intermodal',
    vesselName: 'Double-Stack Rail Manifest HI-804',
    progressPercent: 52,
    currentLocation: 'El Paso Inland Rail Corridor, TX',
    estimatedArrival: 'April 23, 2026 · 10:00 CDT',
    events: [
      { date: 'Apr 18, 2026', time: '11:00 PDT', location: 'Long Beach Pier T Terminal', description: 'Discharged from vessel, mounted on intermodal chassis', completed: true },
      { date: 'Apr 19, 2026', time: '02:30 PDT', location: 'ICTF Intermodal Yard, Carson CA', description: 'Classified onto double-stack railcar sequence', completed: true },
      { date: 'Apr 20, 2026', time: '15:10 MDT', location: 'Tucson Rail Corridor, AZ', description: 'Sensors verified, rolling transit on schedule', completed: true },
      { date: 'Apr 23, 2026', time: '10:00 CDT', location: 'Dallas BNSF Intermodal Facility', description: 'Arriving at destination ramp for last-mile delivery', completed: false },
    ],
  },
};
