# 3D Prints — `/3d-prints`

> Goal: convert two types of buyer — impulse catalog buyer and custom-quote requester. Catalog has explicit pricing, custom is quote-driven.

---

## Section 01 — Hero

```
EYEBROW (mono, green):  // 3d printing

HEADLINE:               Made-to-order, or
                        ready-to-ship.

SUBHEAD:                Custom 3D prints from your file or mine. Plus a small catalog
                        of pre-designed pieces. Ships from Big Bear, CA. Local pickup
                        for Inland Empire / Big Bear customers.

CTAs (split):
  ▸ Browse the catalog
  ▸ Request a custom print
```

---

## Section 02 — Catalog grid

> Grid of pre-designed items. Each card: photo, name, short description, price, "Add to cart" or "Buy" Stripe Payment Link button.

```
SECTION EYEBROW:        // catalog

SECTION HEADING:        Ready to ship.

CARD STRUCTURE
  [photo]
  [item name]
  [one-line description, casual]
  $[price]
  [Buy now button → Stripe Payment Link]
  
  Material: [PLA / PETG / etc]
  Size: [dimensions]
  Ships in: [days]

EMPTY STATE (until catalog populated):
  Catalog's small right now and growing. Custom orders open below.
```

---

## Section 03 — Custom orders

> The conversion path for the bigger half of the print business. Form-based intake.

```
SECTION EYEBROW:        // custom

SECTION HEADING:        Need something specific?

PARAGRAPH:
Send what you have — a description, sketches, photos, an STL, or a STEP file.
I'll come back within 48 hours with a quote covering material, print time,
finishing, and shipping.

INTAKE FORM FIELDS
  • Name (required)
  • Email (required)
  • What are you trying to make? (textarea, required)
  • Quantity (number, default 1)
  • Material preference (select: PLA / PETG / ABS / TPU / Resin / "not sure, recommend one")
  • Timeline (select: "no rush" / "within 2 weeks" / "within 1 week" / "ASAP")
  • Budget if you have one (text, optional)
  • Files (file upload, accepts .stl .step .obj .3mf .zip, max 50MB)
  • Local pickup or ship?  (radio: ship / pickup / either)

BUTTON LABEL:           Request a quote

POST-SUBMIT MESSAGE:
  Got it. I'll come back within 48 hours with a quote and any clarifying
  questions. Check your inbox — replies sometimes land in spam.
```

---

## Section 04 — What I can print

> Capabilities block. Mono-styled spec sheet. Reads as honest about constraints.

```
SECTION EYEBROW:        // capabilities

PRINTERS
  Snapmaker U1                  270×270×270mm · 0.08–0.24mm
  Flashforge AD5M Pro           220×220×220mm · 0.1–0.4mm
  Flashforge AD5X               220×220×220mm · 0.1–0.4mm
  Entina Tina2                  100×120×100mm · 0.1–0.4mm

MATERIALS
  PLA          Standard plastic. Good for most decorative work, prototyping.
  PETG         Stronger, more durable. Outdoor-friendly, slightly flexible.
  ABS          High strength, heat-resistant. For functional parts.
  TPU          Flexible. For grips, gaskets, anything that bends.
  Resin        High-detail. For miniatures, jewelry, intricate work. Ask first.

FINISHING
  • Sanding (standard on most orders)
  • Priming and painting
  • Acetone smoothing (ABS only)
  • Custom color match on request

WHAT I CAN'T DO (yet)
  • Metal printing
  • Food-safe parts (use food-safe service like SLA + dishwasher-safe coatings)
  • FDA / medical-grade parts
  • Large runs have longer lead times — ask for an estimate before committing
```

---

## Section 05 — How it works

```
SECTION EYEBROW:        // process

STEP 01 — Submit your job
  Form above, or email hello@psyborgvision.com with files attached.

STEP 02 — Quote within 48hrs
  Material, print time, finish, shipping — line-itemed. No surprise charges.

STEP 03 — Approve and pay
  Half down for jobs over $500. Smaller jobs paid up front. Stripe.

STEP 04 — Print and finish
  Most jobs print within 3–7 days. Bigger jobs longer. Status updates
  along the way.

STEP 05 — Ship or pickup
  Tracked shipping anywhere in the US. Local pickup in Big Bear by appointment.
  Free delivery within the Big Bear area for orders over $250.
```

---

## Section 06 — Shipping & turnaround

```
SECTION EYEBROW:        // shipping

SHIPS FROM:             Fawnskin, CA · 92333

US SHIPPING
  USPS Ground Advantage     $8–$15              3–6 business days
  USPS Priority             $10–$18             2–3 business days
  UPS Ground                $12–$22             3–5 business days
  Free local pickup         —                   Big Bear, by appointment
  Free local delivery       orders over $250     Big Bear area only

INTERNATIONAL
  Available on request. Quote includes customs and tracked shipping.

TURNAROUND
  Catalog items             ships within 2 business days
  Custom prints (small)     5–10 days from approval
  Custom prints (large)     2–4 weeks from approval

DEFECTS / RETURNS
  Print defects: free reprint within 14 days. Just send a photo.
  Custom orders: non-refundable once printing has started.
  Catalog items: 14-day return on unused/unopened items, buyer pays return shipping.
```

---

## Section 07 — CTA

```
HEADING:                Got an STL waiting on you?

PRIMARY CTA:            Request a quote
SECONDARY CTA:          hello@psyborgvision.com
```
