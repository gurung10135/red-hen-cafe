import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, MapPin, Clock, Star, Phone, ArrowRight, ChevronRight, CheckCircle2, Navigation, Mail, Camera, Instagram } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { useRef, useState } from "react";

// Import generated images
import latteImg from "../assets/latte.png";
import cinnamonRollsImg from "../assets/cinnamon-rolls.png";
import quicheImg from "../assets/quiche.png";
import interiorImg from "../assets/interior.png";
import displayCaseImg from "../assets/display-case.png";
import storefrontImg from "../assets/storefront.png";
import logoImg from "@assets/312021854_121989427169656_1473103766871661946_n._1775752046583.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const seoData = {
    title: "The Red Hen Café & Bakery – Best Coffee Shop in Plain City Ohio",
    description: "Experience the warm, handcrafted atmosphere of The Red Hen Café & Bakery in Plain City, Ohio. Freshly Baked. Warmly Served.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "The Red Hen Café & Bakery",
      "image": [storefrontImg],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "542 W Main St",
        "addressLocality": "Plain City",
        "addressRegion": "OH",
        "postalCode": "43064",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "375"
      },
      "priceRange": "$10-20",
      "telephone": "+16147330421",
      "servesCuisine": ["Bakery", "Coffee", "Breakfast"]
    }
  };

  useSEO(seoData);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="The Red Hen Café & Bakery logo" className="h-10 w-10 object-contain" data-testid="img-logo" />
            <span className="font-serif text-xl font-semibold text-primary tracking-tight" data-testid="text-logo">The Red Hen</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Story</a>
            <a href="#menu" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#visit" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Visit Us</a>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            <a href="#visit" data-testid="link-nav-visit">Get Directions</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Section 1: Hero */}
        <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: yHero }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={storefrontImg} 
              alt="The Red Hen Cafe Storefront" 
              className="w-full h-full object-cover"
              data-testid="img-hero-bg"
            />
          </motion.div>
          
          <div className="container relative z-20 px-6 text-center text-white mt-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-6"
            >
              <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider uppercase mb-4">
                Plain City, Ohio
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight text-white shadow-sm" data-testid="text-hero-title">
                Freshly Baked.<br />Warmly Served.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
                Step into the warmth. We're a beloved neighborhood bakery and café crafting quality coffee and artisan goods every single morning.
              </motion.p>
              <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg w-full sm:w-auto h-auto transition-transform hover:scale-105">
                  <a href="#menu" data-testid="button-view-menu">Explore the Menu</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm rounded-full px-8 py-6 text-lg w-full sm:w-auto h-auto transition-transform hover:scale-105">
                  <a href="#visit" data-testid="button-plan-visit">Plan a Visit</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: About / Vibe */}
        <section id="about" className="py-24 bg-background relative overflow-hidden">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight" data-testid="text-about-title">
                    A taste of home, <span className="text-primary italic">every time.</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    At The Red Hen, we believe in the magic of unhurried mornings. Flour-dusted aprons, the hiss of the espresso machine, and the undeniable comfort of a fresh cinnamon roll warm from the oven.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    We aren't just a place to get coffee—we're your second living room. Cozy, refined, and entirely without pretense. Everything in our pastry case is baked from scratch before the sun comes up.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-8 pt-4">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium" data-testid="text-rating">4.8/5 from 375+ locals</p>
                  </div>
                  <div className="h-12 w-[1px] bg-border hidden sm:block"></div>
                  <div>
                    <p className="text-2xl font-serif text-foreground">Est. 2018</p>
                    <p className="text-sm text-muted-foreground font-medium">Plain City, OH</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src={interiorImg} alt="Cozy cafe interior" className="w-full h-full object-cover transition-transform hover:scale-105 duration-1000" data-testid="img-about-interior" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                  <img src={displayCaseImg} alt="Bakery display case" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Coffee className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-foreground">Quality Roasts</h3>
                <p className="text-muted-foreground font-light">Ethically sourced, locally roasted beans, pulled with precision for the perfect crema.</p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-foreground">Baked Daily</h3>
                <p className="text-muted-foreground font-light">From buttery quiches to fluffy donuts, everything is crafted by hand every single morning.</p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }} className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-foreground">A Warm Space</h3>
                <p className="text-muted-foreground font-light">Wood counters, natural light, and the gentle hum of community. Stay awhile.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Menu Highlights */}
        <section id="menu" className="py-24 bg-[#FEFDFB]">
          <div className="container px-6 mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16 space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">Our Signatures</h2>
              <p className="text-muted-foreground text-lg">Handcrafted daily using simple, honest ingredients.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Featured image column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 hidden lg:block"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group relative">
                  <img src={latteImg} alt="Café Latte with heart art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="steam"></div>
                    <div className="steam"></div>
                    <div className="steam"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden group">
                    <img src={cinnamonRollsImg} alt="Fresh baked pastries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden group">
                    <img src={quicheImg} alt="Savory quiche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </motion.div>

              {/* Menu list column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-3"
              >
                {[
                  {
                    name: "The Nest",
                    desc: "Our signature breakfast plate — built for a full morning.",
                    price: "$9.00 – $11.00"
                  },
                  {
                    name: "Breakfast Burrito",
                    desc: "Stuffed with farm-fresh eggs, melted cheese, and savory fillings.",
                    price: "$9.50 – $10.50"
                  },
                  {
                    name: "Maple Donut",
                    desc: "Hand-glazed each morning with real maple — warm, soft, irresistible.",
                    price: "$3.00"
                  },
                  {
                    name: "Café Latte",
                    desc: "Velvety espresso pulled over silky steamed milk with signature heart art.",
                    price: "$5.00 – $5.50"
                  },
                  {
                    name: "Croissant Sandwich",
                    desc: "Buttery, flaky croissant layered with your choice of savory fillings.",
                    price: "$9.00"
                  },
                  {
                    name: "614 Brew",
                    desc: "Our house-crafted cold brew — smooth, bold, and local through and through.",
                    price: "$5.00 – $5.50"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                    data-testid={`card-menu-item-${idx}`}
                  >
                    <div className="flex items-start justify-between gap-4 p-5 rounded-xl bg-card border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-sm text-muted-foreground font-light mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-base font-medium text-primary whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <Button variant="outline" className="w-full rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors h-12" data-testid="button-full-menu">
                    View Full Menu
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Parallax Middle */}
        <section className="h-[60vh] min-h-[400px] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
            <img 
              src={displayCaseImg} 
              alt="Bakery details" 
              className="w-full h-full object-cover fixed-attachment-simulation"
              style={{ objectPosition: "center 60%" }}
            />
          </div>
          <div className="relative z-20 text-center text-white px-6 max-w-3xl">
            <Coffee className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">"The smell of cinnamon rolls in a sun-lit room."</h2>
            <p className="text-lg text-white/90 font-light">That's the feeling we bake into every single batch.</p>
          </div>
        </section>

        {/* Section 6: Gallery Grid */}
        <section id="gallery" className="py-24 bg-background">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Life at The Red Hen</h2>
              <p className="text-muted-foreground">Follow along on our journey.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="aspect-square rounded-xl overflow-hidden group">
                <img src={latteImg} alt="Latte" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="aspect-square rounded-xl overflow-hidden group">
                <img src={storefrontImg} alt="Storefront" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="aspect-square rounded-xl overflow-hidden group">
                <img src={quicheImg} alt="Quiche" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="aspect-square rounded-xl overflow-hidden group flex items-center justify-center bg-primary text-white">
                <a href="#" className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-10 h-10 mx-auto mb-2" />
                  <span className="font-serif block">@theredhen</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7: Testimonials */}
        <section id="reviews" className="py-24 bg-[#FEFDFB] border-y border-border">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Word on the Street</h2>
              <p className="text-muted-foreground">What our neighbors are saying.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "Nice place, good atmosphere, good service, and great coffee!",
                  author: "Sarah M.",
                  role: "Local Resident"
                },
                {
                  text: "Good prices, great food, quick service and friendly staff!",
                  author: "David L.",
                  role: "Regular Customer"
                },
                {
                  text: "The wait is worth it! Best cinnamon rolls I've ever had in Ohio.",
                  author: "Emily R.",
                  role: "First-time Visitor"
                }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <Card className="bg-background border-border/60 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between" data-testid={`card-testimonial-${idx}`}>
                    <CardContent className="p-8">
                      <div className="flex gap-1 text-primary mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg italic text-foreground mb-6 font-serif">"{review.text}"</p>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Visit Us / Location */}
        <section id="visit" className="py-24 bg-background">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4" data-testid="text-visit-title">Come On In.</h2>
                  <p className="text-muted-foreground text-lg">We can't wait to pour you a cup.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0 h-fit">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">Location</h4>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          542 W Main St<br />
                          Plain City, OH 43064
                        </p>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary font-medium text-sm inline-flex items-center mt-3 hover:underline">
                          Get Directions <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0 h-fit">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">Contact</h4>
                        <p className="text-muted-foreground font-light">
                          +1 614-733-0421
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-full shrink-0 h-fit">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">Hours</h4>
                        <ul className="text-muted-foreground font-light space-y-2">
                          <li className="flex justify-between"><span>Mon - Fri:</span> <span>6:30 AM - 3:00 PM</span></li>
                          <li className="flex justify-between"><span>Saturday:</span> <span>7:00 AM - 2:00 PM</span></li>
                          <li className="flex justify-between text-primary font-medium"><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <div className="bg-primary/10 p-3 rounded-full shrink-0 h-fit">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Dine-in</span>
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">Drive-through</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-border"
                data-testid="map-container"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.2618873099955!2d-83.28472402340578!3d40.10300957502446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ec67ef3eeb0d%3A0xcb135b5eb02082b2!2s542%20W%20Main%20St%2C%20Plain%20City%2C%20OH%2043064!5e0!3m2!1sen!2sus!4v1709848529381!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Red Hen Cafe Map"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 9: Newsletter */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          </div>
          <div className="container px-6 mx-auto relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-serif">Join the Hen House</h2>
              <p className="text-primary-foreground/80 text-lg font-light">Sign up for our newsletter to get updates on seasonal menus, special events, and the occasional secret recipe.</p>
              
              {subscribed ? (
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm mt-8">
                  <p className="text-xl font-serif">Thank you for subscribing!</p>
                  <p className="text-primary-foreground/80 mt-2">We'll keep you in the loop.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white h-12"
                    required
                  />
                  <Button type="submit" className="h-12 bg-white text-primary hover:bg-white/90 px-8 rounded-md font-medium">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#1a1512] text-white/80 py-16 border-t border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="font-serif text-2xl text-white mb-4">The Red Hen Café & Bakery</h3>
              <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-6">
                Freshly Baked. Warmly Served. Your neighborhood spot for quality coffee, scratch-made pastries, and unhurried mornings.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wider text-sm uppercase">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#visit" className="hover:text-white transition-colors">Location & Hours</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wider text-sm uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>542 W Main St</li>
                <li>Plain City, OH 43064</li>
                <li>hello@theredhen.com</li>
                <li>+1 614-733-0421</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} The Red Hen Café & Bakery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
