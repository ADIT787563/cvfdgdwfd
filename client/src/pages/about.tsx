import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Check, Clock, Users, Leaf, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "FreshcoMushroom",
      "foundingDate": "2005",
      "founders": [
        {
          "@type": "Person",
          "name": "Ramdas Verma"
        },
        {
          "@type": "Person", 
          "name": "Basant Lal"
        }
      ],
      "description": "20+ years of premium mushroom cultivation, providing highest quality fresh mushrooms, premium seeds, and organic compost",
      "specialty": "Organic mushroom farming and sustainable agriculture",
      "numberOfEmployees": "50+",
      "areaServed": "India",
      "knowsAbout": [
        "Mushroom cultivation",
        "Organic farming",
        "Sustainable agriculture",
        "Food production",
        "Seed production"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us - 20+ Years of Premium Mushroom Farming | Our Story"
        description="Founded in 2005 by Ramdas Verma and Basant Lal, FreshcoMushroom has 20+ years of experience in premium mushroom cultivation. Learn about our sustainable farming practices and commitment to quality."
        keywords="FreshcoMushroom story, mushroom farming company, Ramdas Verma, Basant Lal, organic farming, sustainable agriculture, mushroom cultivation expertise, Karnataka farm, premium mushroom growers"
        canonicalUrl="https://freshco-mushroom.replit.app/about"
        structuredData={aboutStructuredData}
      />
      <Header />
      <main>


        {/* Values Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-premium-black via-charcoal to-primary-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fadeInUp">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black animate-slideInDown">Our Values</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800 animate-fadeInUp stagger-2 px-2">What drives us every day in button mushroom cultivation</p>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/10 backdrop-blur border-green-300/20 animate-scaleIn stagger-3 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary-green animate-bounce">
                      <Leaf className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Sustainability</h3>
                  <p className="text-gray-800">Environmental responsibility in every aspect of our button mushroom farming.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-green-300/20 animate-scaleIn stagger-4 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary-green animate-bounce stagger-2">
                      <Award className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Excellence</h3>
                  <p className="text-gray-800">Uncompromising quality standards across our diverse mushroom varieties, with detailed descriptions showcasing freshness and flavor.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-green-300/20 animate-scaleIn stagger-5 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary-green animate-bounce stagger-3">
                      <Heart className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Passion</h3>
                  <p className="text-gray-800">20 years of dedicated commitment to cultivating premium mushroom varieties and providing detailed quality descriptions to our community.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
              <div className="mt-8 text-lg text-gray-600 space-y-6">
                <p>
                  Founded in <span className="font-bold text-primary-green">2005</span> by visionary entrepreneur <span className="font-bold text-gray-900">Ramdas Verma</span> alongside co-founder <span className="font-bold text-gray-900">Basant Lal</span>, FreshcoMushroom began with a passion for <span className="font-bold text-primary-green">sustainable agriculture</span> and a commitment to growing the <span className="font-bold text-gray-900">highest quality mushrooms</span>. What started as a small venture providing <span className="font-bold text-primary-green">premium fresh produce</span> to our local community grew steadily, culminating in our official company registration in <span className="font-bold text-primary-green">2020</span>.
                </p>
                <p>
                  Our <span className="font-bold text-primary-green">20-year journey</span> since 2005 has been marked by <span className="font-bold text-gray-900">continuous innovation</span> in mushroom cultivation under the leadership of <span className="font-bold text-gray-900">Ramdas Verma</span> and <span className="font-bold text-gray-900">Basant Lal</span>, where we've perfected our growing techniques and expanded our offerings to showcase a diverse range of <span className="font-bold text-primary-green">high-quality mushroom varieties</span>. Each variety comes with detailed descriptions that highlight their <span className="font-bold text-primary-green">unique freshness characteristics</span> and <span className="font-bold text-primary-green">exceptional flavor profiles</span>, reflecting our unwavering commitment to quality and environmental stewardship.
                </p>
                <p>
                  Today, as a <span className="font-bold text-primary-green">registered company</span> since 2020, FreshcoMushroom continues to set the <span className="font-bold text-gray-900">industry standard</span> for <span className="font-bold text-primary-green">premium mushrooms</span>, combining two decades of expertise with modern <span className="font-bold text-gray-900">sustainable techniques</span> to deliver exceptional products that emphasize <span className="font-bold text-primary-green">freshness and flavor</span>, nourishing families and communities with our founders' original vision of excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}