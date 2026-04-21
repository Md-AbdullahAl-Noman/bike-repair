import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { siteImages } from "@/content/site-images";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">USA bike shop · Certified mechanics</p>
            <h1>Repairs and tune-ups that keep you rolling.</h1>
            <p className="lead">
              From daily commuters to race-ready road bikes and full-suspension
              mountain rigs — we service what American riders actually ride,
              including Class 1–3 e-bikes where permitted.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+15551234567">
                Call (555) 123-4567
              </a>
              <a className="btn btn-ghost" href="#contact">
                Request service
              </a>
            </div>
            <ul className="hero-badges" aria-label="Highlights">
              <li>Same-week turnaround on most jobs</li>
              <li>Free estimates on repairs</li>
              <li>Walk-ins welcome</li>
            </ul>
          </div>
          <div className="hero-visual">
            <figure className="hero-photo-frame">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                fill
                className="hero-photo"
                sizes="(max-width: 900px) 100vw, 380px"
                priority
              />
            </figure>
            <div className="hero-card">
              <p className="hero-card-label">Today’s shop floor</p>
              <p className="hero-card-stat">Open · 10am–6pm</p>
              <p className="hero-card-note">
                Closed Sundays · Major holidays may vary
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <div>
            <strong>15+ years</strong>
            <span>serving local riders</span>
          </div>
          <div>
            <strong>ASE-style training</strong>
            <span>mechanics you can trust</span>
          </div>
          <div>
            <strong>Parts in stock</strong>
            <span>Shimano, SRAM, Bosch &amp; more</span>
          </div>
          <div>
            <strong>Warranty-backed work</strong>
            <span>we stand behind every job</span>
          </div>
        </div>
      </section>

      <section
        className="section section-alt photo-strip-section"
        aria-labelledby="photo-strip-heading"
      >
        <div className="container">
          <header className="section-head">
            <h2 id="photo-strip-heading">On the stand &amp; on the road</h2>
            <p>
              A few of the builds we see every week — swap these for photos of
              your own bay and customer bikes.
            </p>
          </header>
          <ul className="photo-strip-grid">
            {siteImages.strip.map((item) => (
              <li key={item.src}>
                <figure className="photo-strip-card">
                  <div className="photo-strip-image-wrap">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="photo-strip-image"
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="photo-strip-caption">
                    {item.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="photo-credit">
            Placeholder photography is bundled in{" "}
            <code className="photo-credit-code">/public/images</code> — swap in
            your own bay, team, and customer bikes anytime.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <header className="section-head">
            <h2>Services we offer</h2>
            <p>
              Full-service repair for the bikes U.S. shops see every day — road,
              gravel, MTB, hybrid, cargo, and e-bikes.
            </p>
          </header>
          <ul className="service-grid">
            <li className="service-card service-card--media">
              <div className="service-card-image">
                <Image
                  src={siteImages.services.tuneUp.src}
                  alt={siteImages.services.tuneUp.alt}
                  fill
                  className="service-card-img"
                  sizes="(max-width: 600px) 100vw, 280px"
                />
              </div>
              <div className="service-card-body">
                <h3>Complete tune-ups</h3>
                <p>
                  Adjust shifting and brakes, true wheels, inspect bearings, and
                  safety-check the whole bike.
                </p>
              </div>
            </li>
            <li className="service-card service-card--media">
              <div className="service-card-image">
                <Image
                  src={siteImages.services.tires.src}
                  alt={siteImages.services.tires.alt}
                  fill
                  className="service-card-img"
                  sizes="(max-width: 600px) 100vw, 280px"
                />
              </div>
              <div className="service-card-body">
                <h3>Flat repair &amp; tire install</h3>
                <p>
                  Tubes, tubeless setup, sealant refresh, and tire swaps for
                  road and trail.
                </p>
              </div>
            </li>
            <li className="service-card service-card--media">
              <div className="service-card-image">
                <Image
                  src={siteImages.services.brakes.src}
                  alt={siteImages.services.brakes.alt}
                  fill
                  className="service-card-img"
                  sizes="(max-width: 600px) 100vw, 280px"
                />
              </div>
              <div className="service-card-body">
                <h3>Brake service</h3>
                <p>
                  Mechanical and hydraulic disc, pad replacement, bleed, and
                  rotor true.
                </p>
              </div>
            </li>
            <li className="service-card service-card--media">
              <div className="service-card-image">
                <Image
                  src={siteImages.services.drivetrain.src}
                  alt={siteImages.services.drivetrain.alt}
                  fill
                  className="service-card-img"
                  sizes="(max-width: 600px) 100vw, 280px"
                />
              </div>
              <div className="service-card-body">
                <h3>Drivetrain</h3>
                <p>
                  Chain, cassette, chainring, and derailleur installs; cable and
                  housing replacement.
                </p>
              </div>
            </li>
            <li className="service-card">
              <h3>Wheel building &amp; truing</h3>
              <p>
                Spoke replacement, tension balance, and hand-built wheels for
                heavy use.
              </p>
            </li>
            <li className="service-card">
              <h3>E-bike service</h3>
              <p>
                Motor firmware checks, drivetrain wear, battery-safe handling per
                manufacturer specs.
              </p>
            </li>
            <li className="service-card">
              <h3>Suspension</h3>
              <p>
                Basic fork and shock service coordination with authorized
                centers when needed.
              </p>
            </li>
            <li className="service-card">
              <h3>Custom builds &amp; fitting</h3>
              <p>
                New bike assembly, upgrades, and fit adjustments for comfort and
                performance.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="products">
        <div className="container">
          <header className="section-head">
            <h2>Shop products</h2>
            <p>
              Besides repairs, we stock trusted bike essentials and upgrades for
              daily commuters, road cyclists, and trail riders.
            </p>
          </header>
          <ul className="product-grid">
            <li className="product-card">
              <div className="product-image-wrap">
                <Image
                  src={siteImages.services.tires.src}
                  alt="Performance road and gravel tires on display"
                  fill
                  className="product-image"
                  sizes="(max-width: 720px) 100vw, 25vw"
                />
              </div>
              <div className="product-body">
                <p className="product-kicker">Tires</p>
                <h3>Road &amp; gravel tires</h3>
                <p className="product-price">$49–$119</p>
                <p>
                  Tubeless-ready and puncture-protected options from top brands.
                </p>
              </div>
            </li>
            <li className="product-card">
              <div className="product-image-wrap">
                <Image
                  src={siteImages.services.tuneUp.src}
                  alt="Bike chain and cassette replacement parts"
                  fill
                  className="product-image"
                  sizes="(max-width: 720px) 100vw, 25vw"
                />
              </div>
              <div className="product-body">
                <p className="product-kicker">Drivetrain parts</p>
                <h3>Chains &amp; cassettes</h3>
                <p className="product-price">$29–$249</p>
                <p>
                  Shimano and SRAM compatible parts matched to your bike and
                  riding style.
                </p>
              </div>
            </li>
            <li className="product-card">
              <div className="product-image-wrap">
                <Image
                  src={siteImages.services.brakes.src}
                  alt="Brake pads and rotor components for bikes"
                  fill
                  className="product-image"
                  sizes="(max-width: 720px) 100vw, 25vw"
                />
              </div>
              <div className="product-body">
                <p className="product-kicker">Braking</p>
                <h3>Pads, rotors &amp; bleed kits</h3>
                <p className="product-price">$15–$95</p>
                <p>
                  Mechanical and hydraulic brake consumables for fast service
                  turnaround.
                </p>
              </div>
            </li>
            <li className="product-card">
              <div className="product-image-wrap">
                <Image
                  src={siteImages.strip[1].src}
                  alt="Cycling helmets and lights for safer commuting"
                  fill
                  className="product-image"
                  sizes="(max-width: 720px) 100vw, 25vw"
                />
              </div>
              <div className="product-body">
                <p className="product-kicker">Accessories</p>
                <h3>Helmets, lights &amp; locks</h3>
                <p className="product-price">$25–$180</p>
                <p>
                  Daily-ride essentials for visibility, security, and safer
                  commuting.
                </p>
              </div>
            </li>
          </ul>
          <p className="products-note">
            Looking for a specific brand or item?{" "}
            <a href="#contact">Message us</a> or call to check current stock.
          </p>
        </div>
      </section>

      <section className="section section-alt" id="packages">
        <div className="container">
          <header className="section-head">
            <h2>Tune-up packages</h2>
            <p>
              Clear, USD pricing tiers — pick what matches your mileage and how
              your bike feels.
            </p>
          </header>
          <div className="packages">
            <article className="package-card">
              <h3>Essential</h3>
              <p className="package-price">
                <span className="currency">$</span>79
              </p>
              <p className="package-desc">
                Safety check, bolt torque, minor adjustments, lube chain.
              </p>
              <ul>
                <li>Best for new bikes or light use</li>
                <li>~30–45 min turnaround when booked</li>
              </ul>
            </article>
            <article className="package-card package-featured">
              <p className="package-ribbon">Most popular</p>
              <h3>Performance</h3>
              <p className="package-price">
                <span className="currency">$</span>149
              </p>
              <p className="package-desc">
                Full tune: shifting, brakes, wheels, drivetrain clean &amp; lube.
              </p>
              <ul>
                <li>Includes minor parts (cables, housing)</li>
                <li>Ideal for year-round riders</li>
              </ul>
            </article>
            <article className="package-card">
              <h3>Pro overhaul</h3>
              <p className="package-price">
                <span className="currency">$</span>289+
              </p>
              <p className="package-desc">
                Strip, deep clean, regrease, replace wear items as quoted.
              </p>
              <ul>
                <li>Great after harsh winters or high miles</li>
                <li>Detailed estimate before we start</li>
              </ul>
            </article>
          </div>
          <p className="packages-note">
            Prices vary by bike type and parts. Sales tax applied per your state
            and local rates.{" "}
            <a href="#contact">Ask for a written estimate</a> — no surprises.
          </p>
        </div>
      </section>

      <section className="section" id="why-us">
        <div className="container split">
          <div>
            <header className="section-head section-head-left">
              <h2>Built like a real U.S. bike shop</h2>
              <p>
                We stock common consumables, work with major distributors, and
                explain repairs in plain English — whether you’re training for a
                century or riding to work.
              </p>
            </header>
            <ul className="checklist">
              <li>Transparent queue: you’ll know when your bike is ready.</li>
              <li>Insurance and crash repair documentation on request.</li>
              <li>
                Corporate and fleet programs for offices and delivery teams.
              </li>
              <li>
                Recycle tubes and batteries through partner programs where
                available.
              </li>
            </ul>
          </div>
          <div className="split-aside">
            <blockquote className="quote">
              <p>“Fast, honest, and they actually ride — rare combo.”</p>
              <footer>— Local customer, Google review</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="process">
        <div className="container">
          <header className="section-head">
            <h2>How it works</h2>
            <p>Simple steps from drop-off to pickup.</p>
          </header>
          <ol className="process-steps">
            <li>
              <span className="step-num">1</span>
              <h3>Drop off or schedule</h3>
              <p>
                Walk in during business hours or reserve a slot by phone or form.
              </p>
            </li>
            <li>
              <span className="step-num">2</span>
              <h3>Diagnose &amp; quote</h3>
              <p>
                We inspect, call or email with options, and wait for your OK.
              </p>
            </li>
            <li>
              <span className="step-num">3</span>
              <h3>Repair &amp; test ride</h3>
              <p>
                Mechanics complete the work and verify on the stand and road.
              </p>
            </li>
            <li>
              <span className="step-num">4</span>
              <h3>Pickup &amp; ride</h3>
              <p>
                Pay in-store (card, cash, contactless). Warranty notes included.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" id="location">
        <div className="container split split-reverse">
          <div
            className="map-placeholder"
            role="img"
            aria-label="Map placeholder — add your storefront embed"
          >
            <span>Map / directions</span>
            <small>Embed Google Maps or Mapbox for your U.S. address</small>
          </div>
          <div>
            <header className="section-head section-head-left">
              <h2>Visit the shop</h2>
              <p>
                Convenient parking and bike racks. We’re easy to find for
                commuters and weekend warriors alike.
              </p>
            </header>
            <address className="shop-address">
              <strong>Ironline Cycles</strong>
              <br />
              1842 Industrial Parkway
              <br />
              Denver, CO 80205
              <br />
              United States
            </address>
            <dl className="hours">
              <div>
                <dt>Monday – Friday</dt>
                <dd>10:00 a.m. – 6:00 p.m.</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>10:00 a.m. – 4:00 p.m.</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <p className="location-note">
              Replace the address and hours with your real storefront details.
              Many U.S. shops adjust hours for Memorial Day, July 4th,
              Thanksgiving, and Christmas — note those on your site and door.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container narrow">
          <header className="section-head">
            <h2>FAQ</h2>
            <p>Answers riders ask before they roll in.</p>
          </header>
          <div className="faq-list">
            <details open>
              <summary>Do you service e-bikes?</summary>
              <p>
                Yes, for Class 1–3 pedal-assist bikes where we’re authorized by
                the brand or motor system. Bring your charger and keys if
                applicable.
              </p>
            </details>
            <details>
              <summary>How long will my repair take?</summary>
              <p>
                Flats and small jobs are often same day. Tune-ups typically
                within a few business days depending on parts. We’ll give you a
                realistic window at check-in.
              </p>
            </details>
            <details>
              <summary>Do you offer warranties?</summary>
              <p>
                We warranty our labor. Parts carry manufacturer warranty. We’ll
                explain coverage on your receipt.
              </p>
            </details>
            <details>
              <summary>Can I buy a bike here?</summary>
              <p>
                Many U.S. shops sell completes and accessories. Add your inventory
                story here — test rides, sizing, and assembly included.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div>
            <header className="section-head section-head-left">
              <h2>Book service or ask a question</h2>
              <p>
                Tell us about your bike and we’ll follow up by phone or email.
                For urgent flats, call — we’ll fit you in when we can.
              </p>
            </header>
            <p className="contact-direct">
              <a href="tel:+15551234567">(555) 123-4567</a>
              <span className="sep">·</span>
              <a href="mailto:service@ironlinecycles.example">
                service@ironlinecycles.example
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
