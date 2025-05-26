import React from 'react';
import { Trash2, Truck, Construction, Mountain, Phone } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceType } from '../types';

const Services = () => {
  const junkRemovalServices = [
    'Residential Cleanouts (whole-house, garage, attic, basement)',
    'Estate & Foreclosure Cleanouts for realtors & property managers',
    'Hoarder & Bulk-Item Removal (furniture, mattresses, plastics)',
    'Appliance Pickup & Recycling (refrigerators, washers, ovens)',
    'Yard Waste & Landscaping Debris (brush, branches, small stumps)',
    'E-Waste & Electronics Recycling (TVs, computers, printers)',
    'Donation Drop-Off Coordination (sorting & delivery to charities)',
    'Light Construction Debris Hauling (drywall, lumber, tile scraps)',
    'Specialty Item Removal (hot tubs, swing sets, trampolines)'
  ];

  const constructionEquipmentServices = [
    'Mini Excavator & Skid-Steer Hauling (Bobcats, mini-diggers)',
    'Small Machinery Moves (plate compactors, trenchers, mini backhoes)',
    'Rental Equipment Delivery (generators, mixers, pressure washers)',
    'Emergency Equipment Recovery (breakdown response)',
    'Preventive Maintenance Transfers (shop runs & returns)'
  ];

  const materialDumpingServices = [
    'Bulk Dirt & Fill Dirt Delivery (yard prep, low spots)',
    'Rock, Gravel & Sand Dumping (driveways, pathways, landscaping)',
    'Site Grading & Prep Hauls (leveling, backfill)',
    'Material Recycling & Disposal (separating inert debris)'
  ];

  const services: ServiceType[] = [
    {
      id: 'junk-removal',
      title: 'Junk Removal Services',
      description: 'Comprehensive cleanout services for homes, businesses, and properties.',
      icon: <Trash2 className="h-10 w-10 text-amber-500" />,
      emoji: '🗑',
      items: junkRemovalServices,
      backgroundColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'equipment-transport',
      title: 'Mini Construction Equipment Transport',
      description: '12′ dump trailer – up to ~7,000 lbs payload capacity for your equipment needs.',
      icon: <Construction className="h-10 w-10 text-amber-500" />,
      emoji: '🚜',
      items: constructionEquipmentServices,
      backgroundColor: 'bg-amber-50',
      hoverColor: 'hover:bg-amber-100'
    },
    {
      id: 'material-dumping',
      title: 'Rock, Dirt & Material Dumping Services',
      description: 'Delivery and removal of various materials for your projects.',
      icon: <Mountain className="h-10 w-10 text-amber-500" />,
      emoji: '🪨',
      items: materialDumpingServices,
      backgroundColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From junk removal to equipment transport, we offer a wide range of services to meet your hauling and cleanout needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:+19165105355"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call For Quote: (916)-510-5355
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;