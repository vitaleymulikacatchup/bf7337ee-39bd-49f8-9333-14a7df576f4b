"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Star, MessageCircle, Handshake } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="AutoDeal"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
          className="bg-card/80 backdrop-blur-sm border-b border-background-accent/10"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Cars at Unbeatable Prices"
          description="Discover our extensive collection of luxury and reliable vehicles. Quality guaranteed, financing available, and exceptional service."
          tag="Trusted Dealer"
          tagIcon={Award}
          imageSrc="https://images.pexels.com/photos/376674/pexels-photo-376674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car showroom with luxury vehicles"
          buttons={[
            {
              text: "View Inventory",
              href: "product"
            },
            {
              text: "Get Financing",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="With over 20 years of experience, we provide exceptional automotive solutions that exceed customer expectations and build lasting relationships through quality, integrity, and outstanding service."
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium vehicles"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Mercedes-Benz",
              name: "C-Class Sedan",
              price: "$45,900",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mercedes-Benz C-Class luxury sedan"
            },
            {
              id: "2",
              brand: "BMW",
              name: "X5 SUV",
              price: "$62,500",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/5992514/pexels-photo-5992514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW X5 luxury SUV"
            },
            {
              id: "3",
              brand: "Porsche",
              name: "911 Carrera",
              price: "$118,000",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Porsche 911 Carrera sports car"
            },
            {
              id: "4",
              brand: "Tesla",
              name: "Model S",
              price: "$89,900",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://images.pexels.com/photos/33233681/pexels-photo-33233681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tesla Model S electric vehicle"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from satisfied car buyers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Business Owner",
              testimonial: "Outstanding service and quality vehicles. The team went above and beyond to find me the perfect car within my budget. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              testimonial: "Professional, honest, and reliable. They made the car buying process smooth and stress-free. Great selection and competitive prices.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Software Engineer",
              testimonial: "Best car dealership experience I've ever had. No pressure, transparent pricing, and excellent after-sales support. Will definitely return.",
              imageSrc: "https://images.pexels.com/photos/4559704/pexels-photo-4559704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Chen"
            },
            {
              id: "4",
              name: "Jessica Rodriguez",
              role: "Project Manager",
              testimonial: "Amazing customer service and quality cars. The financing options were flexible and the staff was incredibly helpful throughout the entire process.",
              imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jessica Rodriguez"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Automotive Brands"
          description="We partner with leading manufacturers to bring you quality vehicles"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/195636/pexels-photo-195636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9740571/pexels-photo-9740571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8305278/pexels-photo-8305278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9740571/pexels-photo-9740571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/14681398/pexels-photo-14681398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Your Free Quote Today"
          description="Ready to find your perfect vehicle? Contact us for personalized assistance and competitive financing options."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dream car...",
            rows: 4,
            required: false
          }}
          buttonText="Get Free Quote"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                {
                  label: "New Cars",
                  href: "new-cars"
                },
                {
                  label: "Used Cars",
                  href: "used-cars"
                },
                {
                  label: "Luxury Vehicles",
                  href: "luxury"
                },
                {
                  label: "Electric Cars",
                  href: "electric"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Financing",
                  href: "financing"
                },
                {
                  label: "Trade-In",
                  href: "trade-in"
                },
                {
                  label: "Service Center",
                  href: "service"
                },
                {
                  label: "Warranties",
                  href: "warranties"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Reviews",
                  href: "reviews"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | AutoDeal"
        />
      </div>
    </ThemeProvider>
  );
}