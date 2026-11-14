# Animation Research Notes

Research for the Maison Pickle school project, November 2026.

## How I studied them
I opened each homepage in a browser, scrolled from top to bottom, and read off three things:
- the CSS animations each page was actually running
- the most common hover transitions, with their speed
- anything that changed as the page scrolled, such as the header shrinking or content fading in

Pop-ups from cookie banners (OneTrust, Klaviyo) were left out as noise. Animation drawn in JavaScript on a canvas isn't captured this way, so video-heavy sites may move more than these notes show.

**20 sites checked:** 15 restaurants and bakeries, 4 food chains, and Apple's product page as a non-food benchmark for polished motion.

---

## Site by site

| # | Site | Animations found | What they're for |
|---|------|------------------|------------------|
| 1 | **Dishoom** | **Scrolling marquee.** The text is repeated and slides left by 25%, then loops. | Shows lots of short messages in one line and gives a feeling of a busy Bombay street. |
| | | **Illustrations rock back and forth by ±4°.** Food and chef drawings bob up and down. | Makes the hand-drawn collage look alive and tells the brand story without words. |
| | | **Accordion that opens in 0.2s.** | Long menu and FAQ sections open smoothly instead of jumping. |
| | | **Header colour fades over 0.5s.** | Keeps the navigation readable over different backgrounds. |
| 2 | **Milk Bar** | **Marquee in the promo bar,** 10s per loop. | Fits several offers into one thin bar. |
| | | **Fade-up (12px), fade-right and slide-up entrances.** | Leads the eye through the page in order, with a playful feel. |
| | | **Header becomes sticky when you scroll.** Menu items fade in over 0.3s. | Keeps the shop navigation within reach. |
| | | **9 autoplay videos.** | Shows the texture of the cake layers better than a photo. |
| 3 | **Sweetgreen** | **Hover colour changes (0.3s)** and small movements. **Flickity carousels.** **4 reduced-motion rules.** | Calm, clean feedback, built with accessibility in mind. |
| 4 | **Jacob's Pickles** (sister restaurant) | **Header collapses when you scroll down on mobile.** All hovers take 0.2s. The accordion opens slowly (1.5s). | Frees up screen space on phones. Hovers confirm a link is clickable. |
| 5 | **Shake Shack** | **Sticky header.** **0.2s button transitions.** **Lottie vector animations.** **5 reduced-motion rules.** | Playful icons that stay lightweight, and quick feedback on buttons. |
| 6 | **Major Food Group** (Carbone) | **Opacity fades only,** 0.15–0.5s. | Luxury restraint, where less motion feels more expensive. |
| 7 | **Momofuku** | **0.25s and 0.5s hover transitions.** Otherwise very little. | Gets out of the way of the food photos. |
| 8 | **Levain Bakery** | **Marquee of icons and badges.** **Content slides in.** **Spinning loader.** **10 reduced-motion rules,** the most of any site checked. | The marquee makes trust badges feel lively. The spinner shows that something is loading. |
| 9 | **Balthazar** | **Almost none:** 4 small transitions. | A classic Parisian brasserie, where motion would fight the old-world identity. |
| 10 | **Hawksmoor** | **Hover lift (0.2s).** **Fade-and-move (0.3s).** **Background video.** | Buttons feel tactile, and the video sets a moody steakhouse atmosphere. |
| 11 | **Magnolia Bakery** | **Link colour changes (0.25s)** on 132 links. **Dropdowns fade and grow.** **Slideshow crossfades over 0.5s.** | Friendly feedback, and the slideshow cycles through cakes. |
| 12 | **Russ & Daughters** | **1 transition** on the whole page. | A heritage brand that puts content first, and the stillness feels trustworthy. |
| 13 | **Apple (AirPods Pro)** | **16 autoplay videos.** **Hundreds of fade-and-move transitions,** each a slightly different speed (0.16–0.32s) so they ripple in one after another. **6 reduced-motion rules.** | The videos tell the product story, and the staggered speeds make the motion feel natural. |
| 14 | **Eleven Madison Park** | **Slow 0.6s fades.** **Slideshow.** | Fine-dining pacing that feels unhurried and calm. |
| 15 | **Maison Pickle** (current site) | **0.2s hovers.** **1.5s accordion.** **0.75s slideshow fade.** | The baseline is subtle, so anything new should stay subtle and on-brand. |
| 16 | **Katz's Delicatessen** | **4 transitions** in total. | Nostalgia, since the deli has been there since 1888. |
| 17 | **Crumbl** | **Loading placeholders that pulse.** **Cookie cards pop up a little on hover** (0.3s). **Menu drawer slides in.** | Feels like an app, and shows that content is on its way. |
| 18 | **Chipotle** | **10 videos.** **Very fast 0.12s hovers.** **Colour sweeps across buttons.** | Snappy, built for ordering quickly. |
| 19 | **Noma** | **Photos and videos fade in once loaded** instead of popping in. **Link underline colour fades** (0.15s). **Image filter changes on hover.** **6 reduced-motion rules.** | A gentle, refined feel. |
| 20 | **Joe's Pizza** | **Fade-and-move entrances** (0.8s). **Quick header transitions** (0.14s). | Simple polish on a site-builder template. |

---

## Patterns: what I learned

1. **Every animation has a job.** The sites used motion for five things:
   - **Feedback:** hovers, button presses and loaders confirm something happened.
   - **Guidance:** entrance animations and scroll cues show where to look next.
   - **Packing in information:** marquees fit many messages into little space.
   - **Atmosphere:** videos, rocking illustrations and neon set the mood.
   - **Saving space:** collapsing headers, accordions and drawers.
2. **Speeds are consistent:**
   - hovers take 0.15–0.3s
   - entrances take 0.3–0.8s
   - looping animations take 6–30s
   - almost every site uses "ease-out" style curves, which start fast and finish gently
3. **Movements are small.** Milk Bar only moves things 12px, and Dishoom only tilts drawings 4°. Big swoops feel cheap.
4. **Motion matches the brand.** Heritage and fine-dining sites (Balthazar, Katz's, Russ & Daughters, Eleven Madison Park) barely move. Playful brands (Milk Bar, Dishoom, Crumbl) move much more. Maison Pickle is retro-chic but fun, so it belongs between the two: classy, with a few playful moments.
5. **Good sites respect "reduce motion."** 11 of the 20 sites had rules that switch animation off for people who set "reduce motion" on their device, because motion can make some people feel dizzy.
6. **Only animate opacity and transform (movement).** These are smooth and cheap for the browser, and almost every site did this.

---

## What I added to the Maison Pickle site

All of it is plain CSS and JavaScript: free, with no libraries.

| Animation | Inspired by | Purpose |
|-----------|-------------|---------|
| **Hero entrance:** text fades up line by line, the script title "writes" itself in, and the art-deco arch draws open | Milk Bar fade-ups, Apple's staggered speeds | Guidance. Reads in order: where, what, then the buttons. |
| **Counting numbers:** "24 layers" counts up | My own addition (not seen on the sites I checked) | Draws attention to the famous 24-layer cake. |
| **Gentle parallax:** the hero background scrolls a little slower than the page | My own addition (not seen on the sites I checked) | Adds depth to the hero. It switches off with reduce-motion. |
| **Must-Orders marquee:** a gold ribbon of the favourite dishes | Dishoom, Milk Bar, Levain | Packs in information and gives a busy-restaurant energy. Pauses when you hover. |
| **Sections fade up 12px as you scroll** to them, with cards one after another | Milk Bar, Apple, Joe's Pizza | Guidance, and makes the page feel crafted. |
| **Header shrinks and gains a shadow, hides as you scroll down, and comes back when you scroll up** | Milk Bar's sticky header, Jacob's Pickles' collapsing header | Saves space while keeping the Reserve button one flick away. |
| **Dish drawings draw themselves line by line.** The bread steam rises, the candle flickers, and drawings rock ±4° on hover | Dishoom's living illustrations | Atmosphere. The vintage drawings feel hand-made. |
| **Gold underline grows under nav links** | Noma's underline fade | Feedback. |
| **Menu tab highlight slides to the chosen tab, and the dishes fade in group by group** | Dishoom tabs, Apple's stagger | Feedback. You can see which menu you switched to. |
| **Share Planner number pops and results slide in** | Crumbl's card pop | Feedback. Confirms the plan changed. |
| **FAQ answers slide open** | Dishoom accordion (0.2s), Jacob's Pickles | Saves space without a jarring jump. |
| **"After Dark" neon sign flickers on, then glows and hums** | Reviews about the pink neon back room, plus Hawksmoor's moody atmosphere | Atmosphere. Recreates the back room at night. |
| **Sparkler candle with animated sparks** in Celebrate Here | Reviews about the sparkler candles, plus Dishoom's illustrations | Delight. Shows the birthday experience guests love. |
| **Reduce-motion support** | 11 of the 20 sites | Accessibility. Everything becomes still for people who need it. |
