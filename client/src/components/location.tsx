import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Visit Our Farm</h2>
          <p className="mt-4 text-lg text-gray-600">Come see where the magic happens - our sustainable mushroom growing facility</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Details</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-mushroom-brown mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Mushroom Lane, Farm Valley, CA 94558</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-mushroom-brown mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900">Farm Tours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 4:00 PM<br/>
                    Saturday: 10:00 AM - 2:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mushroom-brown hover:bg-opacity-90 transition-colors">
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </button>
            </div>
          </div>

          <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-400 mt-2">
                Map integration would be implemented here<br/>
                using a service like Google Maps or Leaflet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
