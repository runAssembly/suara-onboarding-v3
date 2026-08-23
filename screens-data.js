/* Shared by flow-v2.html (phone) and desktop.html. Extracted so the two
   layouts cannot drift apart — one screen list, two shells. */
const SB = `<div class="statusbar"><span class="time">9:41</span><span class="ios">
<svg viewBox="0 0 18 12" width="17" height="11"><rect x="0" y="7.5" width="3" height="4.5" rx="1"/><rect x="4.6" y="5" width="3" height="7" rx="1"/><rect x="9.2" y="2.5" width="3" height="9.5" rx="1"/><rect x="13.8" y="0" width="3" height="12" rx="1"/></svg>
<svg viewBox="0 0 16 12" width="16" height="12"><path d="M8 10.6l1.9-2.1a2.7 2.7 0 00-3.8 0L8 10.6zM3.6 6.1a6.6 6.6 0 018.8 0l1.5-1.7a8.9 8.9 0 00-11.8 0l1.5 1.7z"/></svg>
<svg viewBox="0 0 26 12" width="25" height="12"><rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="currentColor" stroke-opacity=".4"/><rect x="2" y="2" width="15" height="8" rx="1.8"/><path d="M23 4.2v3.6a2 2 0 000-3.6z"/></svg>
</span></div>`;
const BACK = `<div class="back"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></div>`;
const ARR = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
const INFO = `<svg viewBox="0 0 24 24" fill="none" stroke="#6B6270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.4"/></svg>`;
const TICK = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
const conseq = (lbl,inner) => `<div class="conseq"><div class="ch"><i></i>${lbl}</div>${inner}</div>`;
const preview = (img,txt,tail='') => `<div class="cb"><div class="cimg"><img src="genimg/${img}"></div><div class="ctx"><span class="q">${txt}</span>${tail}</div></div>`;
const CAL = `<svg viewBox="0 0 24 24" fill="none" stroke="#E24A28" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>`;
const NO = `<svg viewBox="0 0 24 24" fill="none" stroke="#E24A28" stroke-width="2.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M6 18L18 6"/></svg>`;
const WA = `<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.5 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a13 13 0 01-5.6-4.9c-.4-.6-1-1.5-1-2.9s.7-2 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.5.8 1 1.4 1.7 2 .6.4 1 .6 1.3.7.2.1.4.1.5-.1l.7-.8c.2-.2.3-.1.5-.1l1.9.9c.2.1.4.2.4.3v.9z"/></svg>`;
const TICKC = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
const help = t => `<div class="helper">${INFO}<div>${t}</div></div>`;
const wave = () => `<div class="wave">${[30,64,96,52,78,38,88,44,70,26,58,82,48,92,36].map(h=>`<i style="height:${h}%"></i>`).join('')}</div>`;

const S = [
{n:'00',t:'Language',tag:'tap',neu:0,skip:'I already have an account',btn:'Mula',
 capt:'Malaysian, but not one trade',
 capd:'A five-foot-way at opening time. The old hero was a kopitiam, which quietly told a salon, a clinic and a hardware shop that this product was not for them &mdash; it mis-sold to five of the six tiles we show two screens later. This says small business in Malaysia and names no trade at all.',
 welcome:1},

{n:'01',t:'The name',tag:'type',neu:1,skip:'Skip for now',
 capt:'One field, unavoidable',
 capd:'Everything downstream is addressed to this name, spelled their way. The old flow inferred it from a handle; inferring a business name is exactly the kind of guess that gets screenshotted.',
 eb:'Your business',h:'What is your<br>business called?',
 sub:'Exactly as it is on your signboard.',
 body:`<div class="field on"><span class="val">Melur Kopi</span><span class="caret"></span></div>
   ${help('We never re-spell it, shorten it or title-case it. <b>Your spelling is the spelling.</b>')}`},

{n:'02',t:'Category',tag:'tap',neu:0,skip:'None of these fit',
 capt:'Tinted tiles, and a reason under each',
 capd:'Unchanged from your version, because it already works. This is the screen that selects which fact pack gets asked at 15.',
 eb:'Your business',h:'What kind of<br>place is it?',
 sub:'This decides which questions you get next.',
 body:`<div class="grid">
   <div class="tile sel" style="background:#FFE4CF"><svg viewBox="0 0 24 24" fill="none" stroke="#B85C22" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8zM17 9h1.8a2.7 2.7 0 010 5.4H17M6 3.5v1.6M10 3v2M14 3.5v1.6"/></svg><div><div class="tname">Cafe or<br>restaurant</div><div class="tsub">Menu, hours, specials</div></div></div>
   <div class="tile" style="background:#FDE0D8"><svg viewBox="0 0 24 24" fill="none" stroke="#B8503C" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8 8l12 10M20 6L8.6 16"/></svg><div><div class="tname">Salon or<br>barber</div><div class="tsub">Stylists, before-afters</div></div></div>
   <div class="tile" style="background:#E6EFE7"><svg viewBox="0 0 24 24" fill="none" stroke="#4E7A56" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 8.6a4.6 4.6 0 00-8.5-2.3A4.6 4.6 0 003.5 8.6C3.5 14 12 20 12 20s8.5-6 8.5-11.4z"/></svg><div><div class="tname">Clinic or<br>aesthetics</div><div class="tsub">Claims are regulated</div></div></div>
   <div class="tile" style="background:#FFF0CE"><svg viewBox="0 0 24 24" fill="none" stroke="#A87A18" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8zM9 8V6a3 3 0 016 0v2"/></svg><div><div class="tname">Shop or<br>product</div><div class="tsub">Stock, drops, delivery</div></div></div>
   <div class="tile" style="background:#ECE5DB"><svg viewBox="0 0 24 24" fill="none" stroke="#6E5F4E" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.5a4.5 4.5 0 006 6L15 17l-3 3-4-4 3-3 4.5-7.5z"/></svg><div><div class="tname">Trades and<br>home</div><div class="tsub">Jobs, quotes, callouts</div></div></div>
   <div class="tile" style="background:#F1E7F3"><svg viewBox="0 0 24 24" fill="none" stroke="#7A5A87" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h7a3 3 0 013 3v13a2.5 2.5 0 00-2.5-2.5H4V4zM20 4h-3a3 3 0 00-3 3v13a2.5 2.5 0 012.5-2.5H20V4z"/></svg><div><div class="tname">Classes or<br>studio</div><div class="tsub">Timetable, intakes</div></div></div>
   </div>`},

{n:'03',t:'The wedding sentence',tag:'type',neu:1,skip:'Skip &mdash; I will record it later',
 capt:'The most valuable answer in the intake',
 capd:'And the old flow had no screen for it. The voice note is the better path: one tap, far more tone signal than anything they would type, and voice notes are how Malaysians actually talk. This recording is what every caption is written against.',
 eb:'Your voice',h:'<span class="sm">How would you describe it to someone at a wedding?</span>',
 sub:'One sentence, your words. Or just say it out loud.',
 body:`<div class="note"><div class="noteph">Kedai kopi kecil di Bangsar, kami roast sendiri sejak 1997&hellip;</div></div>
   <div class="voice"><div class="rec"><i></i></div>${wave()}<div class="vtime">0:14</div></div>
   ${conseq('Then we write the way you talk', preview('post-4.png','Kami roast sendiri. Same beans, same roaster, since 1997.',`<div class="killed" style="color:var(--muted)">Your words and your rhythm, not ours</div>`))}`},

{n:'04',t:'Who buys',tag:'tap',neu:1,skip:'Not sure yet',
 capt:'Aspiration here, reality next',
 capd:'Multi-tap, and deliberately followed by the screen that grounds it. On its own this question collects who they wish bought from them.',
 eb:'Your customers',h:'Who actually<br>buys from you?',
 sub:'Pick all that fit.',
 body:`<div class="chips">
   <div class="chip sel">Office workers</div><div class="chip sel">Students</div><div class="chip">Families</div>
   <div class="chip sel">Regulars nearby</div><div class="chip">Tourists</div><div class="chip">Delivery only</div>
   <div class="chip">Other businesses</div><div class="chip">Retirees</div></div>
   ${conseq('Then your posts will speak to them', preview('post-1.png','Before your 9am. Kopi O bungkus, ready when you are.',`<div class="killed" style="color:var(--muted)">Written for office workers and students</div>`))}`},

{n:'05',t:'Last three customers',tag:'type',neu:1,skip:'Skip &mdash; I will come back to this',
 capt:'The reality check on the screen before',
 capd:'Three real people beat any persona, and a few words each is short enough to survive being typed on a phone between customers. This is the answer that stops us writing for an imagined audience.',
 eb:'Your customers',h:'<span class="sm">Think of your last three customers. What did they come in for?</span>',
 sub:'A few words each is plenty.',
 body:`<div class="note" style="min-height:auto;padding:11px 15px"><div class="noteph" style="color:var(--ink)">Kopi O bungkus, on the way to work</div></div>
   <div class="note" style="min-height:auto;margin-top:9px;padding:11px 15px"><div class="noteph" style="color:var(--ink)">Sat two hours with a laptop</div></div>
   <div class="note" style="min-height:auto;margin-top:9px;padding:11px 15px"><div class="noteph">Third one&hellip;</div></div>
   ${conseq('And we lead with what they come for', preview('post-3.png','Two hours, one table, nobody rushing you.',`<div class="killed" style="color:var(--muted)">Built from your last three, not a persona</div>`))}`},

{n:'06',t:'The one ask',tag:'tap',neu:0,skip:'Not sure yet',
 capt:'Say what the answer will do',
 capd:'Unchanged. The helper turns an abstract choice into a promise, which is why people answer it honestly.',
 eb:'What it is for',h:'What do you<br>want more of?',
 sub:'Pick one. Everything we write points at it.',
 body:`<div class="opts">
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V8l6-5 6 5v13M10 21v-6h4v6"/></svg></div><div class="otxt"><div class="oname">Walk-ins</div><div class="odesc">People through the door</div></div><div class="radio"></div></div>
   <div class="opt sel"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#FF6A45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M16 3v4M8 3v4M3 11h18"/></svg></div><div class="otxt"><div class="oname">Bookings</div><div class="odesc">Appointments and tables</div></div><div class="radio">${TICK}</div></div>
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 01-9 8.4L3 21l1.1-9A8.4 8.4 0 1121 11.5z"/></svg></div><div class="otxt"><div class="oname">Enquiries</div><div class="odesc">Messages asking about you</div></div><div class="radio"></div></div>
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg></div><div class="otxt"><div class="oname">Just being known</div><div class="odesc">Stay in people's heads</div></div><div class="radio"></div></div></div>
   ${conseq('Then your posts will end like this', preview('post-2.png','Kopi O gau. Thick, black, no sugar &mdash; the one people come back for.',`<div class="cta-line">${CAL}Book a table &mdash; link in bio</div>`))}`},

{n:'07',t:'Proof',tag:'type',neu:1,skip:'I do not have one yet',
 capt:'A paste, never a composition',
 capd:'This single field unlocks every quality word we are allowed to use anywhere else. Without it the gate blocks all of them, and the feed goes flat and factual. We quote it word for word and never write praise on their behalf.',
 eb:'Proof',h:'<span class="sm">What do people say when they are happy?</span>',
 sub:'Paste a real review or message. Do not tidy it up.',
 body:`<div class="note"><div class="noteph" style="color:var(--ink)">&ldquo;The uncle remembers how you take it.&rdquo;</div></div>
   <div class="chips"><div class="chip">Paste from Google</div><div class="chip">From WhatsApp</div><div class="chip">From Instagram</div></div>
   ${conseq('This is the only praise we may use', preview('post-3.png','&ldquo;The uncle remembers how you take it.&rdquo; &mdash; Aisyah, on Google.',`<div class="killed">${NO}Anything we cannot trace here gets cut</div>`))}`},

{n:'08',t:'The wince list',tag:'tap',neu:0,skip:'Nothing comes to mind',
 capt:'The screen that earns the money',
 capd:'Unchanged. Everything else about a brand can be seen from outside; this cannot.',
 eb:'Your rules',h:'What would<br>make you wince?',
 sub:'Things we must never post. Nobody can guess these but you.',
 body:`<div class="chips">
   <div class="chip sel">Discounts</div><div class="chip">Emojis everywhere</div><div class="chip sel">Before &amp; afters</div>
   <div class="chip">Our prices</div><div class="chip">My face</div><div class="chip sel">Slang</div>
   <div class="chip">Trending audio</div><div class="chip">Competitors</div><div class="chip">Politics</div></div>
   <div class="note"><div class="noteph">Anything else? For example &mdash; &ldquo;never call us cheap&rdquo;.</div></div>
   ${conseq('So this will never reach your feed', preview('post-1.png','Come in before eleven and start the day properly.',`<div class="struck">20% off all kopi this week</div><div class="killed">${NO}Removed &mdash; you said no discounts</div>`))}`},

{n:'09',t:'Compliance',tag:'tap',neu:0,skip:'Skip &mdash; none apply',
 capt:'Boundaries, with the receipt',
 capd:'Unchanged, and the only failure mode in the flow that is dangerous rather than embarrassing. Halal certified and halal ingredients are different claims and we never upgrade one into the other.',
 eb:'Your rules',h:'Anything you<br>cannot claim?',
 sub:'For a cafe this is short. For a clinic it is the whole job.',
 body:`<div class="chips">
   <div class="chip warn sel">Halal</div><div class="chip warn">Organic</div><div class="chip warn">Best in KL</div>
   <div class="chip warn">Award-winning</div><div class="chip warn">Doctor-approved</div><div class="chip warn">Sugar-free</div>
   <div class="chip warn">Nothing applies</div></div>
   <div class="locked"><svg viewBox="0 0 24 24" fill="none" stroke="#E24A28" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 018 0v3"/></svg><div>Locked &mdash; we will never write &ldquo;halal&rdquo; unless you send us the certificate.</div></div>
   ${conseq('And this gets stopped before it ships', preview('post-4.png','Our kopi is roasted in house every Tuesday.',`<div class="struck">100% halal certified</div><div class="killed">${NO}Blocked &mdash; no certificate on file</div>`))}`},

{n:'10',t:'The face',tag:'tap',neu:1,skip:'Decide later',
 capt:'Who appears, and who agreed',
 capd:'Decides whether people are in the content at all, and flags photo permission before we build a library around someone who never said yes.',
 eb:'Your people',h:'Who is the face<br>of this business?',
 sub:'If anyone.',
 body:`<div class="opts">
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20a9 9 0 0118 0"/><circle cx="12" cy="8" r="4"/><path d="M3 3l18 18"/></svg></div><div class="otxt"><div class="oname">Nobody</div><div class="odesc">Keep people out of it</div></div><div class="radio"></div></div>
   <div class="opt sel"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#FF6A45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a8 8 0 0116 0"/><circle cx="12" cy="8" r="4"/></svg></div><div class="otxt"><div class="oname">The owner</div><div class="odesc">Pak Din</div></div><div class="radio">${TICK}</div></div>
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a7 7 0 0114 0M15 12a5 5 0 017 8"/><circle cx="9" cy="8" r="3.6"/></svg></div><div class="otxt"><div class="oname">A named person</div><div class="odesc">Someone on staff</div></div><div class="radio"></div></div></div>
   ${conseq('Then Pak Din shows up about once a week', preview('post-5.png','Twenty-nine years at the same roaster. Pak Din still does it himself.',`<div class="killed" style="color:var(--muted)">Nobody appears until they have said yes</div>`))}`},

{n:'11',t:'Logo',tag:'up',neu:1,skip:'I do not have one &mdash; make me one',
 capt:'No logo is an upsell, not a blocker',
 capd:'The flow continues either way. A photo of the signboard is a perfectly good answer and is what most of them will actually send.',
 eb:'Your brand',h:'Send your logo.',
 sub:'A photo of your signboard works too.',
 body:`<div class="up"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="#FF6A45" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg></div>
   <b>Tap to upload</b><span>PNG, JPG, PDF &mdash; or just a photo</span></div>
   <div class="chips"><div class="chip">Take a photo</div><div class="chip">From WhatsApp</div><div class="chip">From my website</div></div>
   ${conseq('Your mark goes on everything we make', preview('post-6.png','Merdeka. Kami tutup pukul 2 petang.',`<div class="killed" style="color:var(--muted)">Bottom right, same place every time</div>`))}`},

{n:'12',t:'Colours',tag:'tap',neu:1,skip:'Use what you found',
 capt:'Pulled, then confirmed',
 capd:'Read out of the logo where there is one, tapped where there is not. Two fonts fall out of the same answer, so the brand lock is complete without a separate screen.',
 eb:'Your brand',h:'Which colours<br>are yours?',
 sub:'We pulled these from your logo. Change any of them.',
 body:`<div class="swat">
   <div class="sel" style="background:#E24A28"></div><div class="sel" style="background:#FFC24B"></div>
   <div class="sel" style="background:#1A1520"></div><div style="background:#1B3A5C"></div></div>
   <div class="fontrow">
   <div class="opt sel"><div class="glyph" style="font-size:17px;font-weight:800">Aa</div><div class="otxt"><div class="oname">Headings</div><div class="odesc">Bold, tight, confident</div></div><div class="radio">${TICK}</div></div>
   <div class="opt"><div class="glyph" style="font-size:17px;font-weight:500">Aa</div><div class="otxt"><div class="oname">Body</div><div class="odesc">Plain and readable</div></div><div class="radio"></div></div></div>
   ${conseq('Everything we make will look like this', preview('post-6.png','Merdeka. Kami tutup pukul 2 petang.',`<div class="killed" style="color:var(--muted)">Your three colours, on every post</div>`))}`},

{n:'13',t:'Who presses publish',tag:'tap',neu:1,skip:'I will decide later',
 capt:'The question that decides the trial',
 capd:'Your own PRD calls it that, and the eight-screen flow never asked it. A perfect post that nobody has the password to publish is a churned customer, and it churns quietly in week two.',
 eb:'Publishing',h:'<span class="sm">Where does this get posted, and who posts it?</span>',
 sub:'Be honest &mdash; this is the bit that usually breaks.',
 body:`<div class="chips"><div class="chip sel">Instagram</div><div class="chip sel">Facebook</div>
   <div class="chip">TikTok</div><div class="chip">WhatsApp status</div></div>
   <div class="opts" style="margin-top:13px">
   <div class="opt sel"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#FF6A45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20a8 8 0 0116 0"/><circle cx="12" cy="8" r="4"/></svg></div><div class="otxt"><div class="oname">Me</div><div class="odesc">Pak Din</div></div><div class="radio">${TICK}</div></div>
   <div class="opt"><div class="glyph"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a7 7 0 0114 0M15 12a5 5 0 017 8"/><circle cx="9" cy="8" r="3.6"/></svg></div><div class="otxt"><div class="oname">Someone on my staff</div><div class="odesc">We will add them</div></div><div class="radio"></div></div></div>
   ${conseq('So Pak Din gets this, the day before', `<div class="waprev"><div class="wav">${WA}</div><div><div class="wabub"><b>Suara</b><br>Tomorrow 8am: Kopi O gau. Tap to approve, or tell me what to change.</div><div class="watime">Monday 18:02</div></div></div>`)}`},

{n:'14',t:'What is coming up',tag:'tap',neu:1,skip:'Nothing of my own',
 capt:'Show the calendar, do not ask for it',
 capd:'Merdeka is on 31 August whether or not they tell us, so asking was us making the customer do our work. We hold the calendar and show it; the only thing we ask for is their own events, because a roastery tour in September is the part we genuinely cannot know.',
 eb:'The next eight weeks',h:'Here is what is<br>coming up.',
 sub:'We keep the calendar. Tick the ones you want posts for.',
 body:`<div class="hol">
   <div class="holrow sel"><div class="holdate"><b>31</b><span>Mon Aug</span></div>
     <div><div class="holname">Hari Merdeka</div><div class="holsub">National Day &middot; 11 days away</div></div>
     <div class="holtick">${TICKC}</div></div>
   <div class="holrow sel"><div class="holdate"><b>16</b><span>Wed Sep</span></div>
     <div><div class="holname">Hari Malaysia</div><div class="holsub">Malaysia Day</div></div>
     <div class="holtick">${TICKC}</div></div>
   <div class="holrow ghost"><div class="holdate"><b>&bull;</b><span>Sel</span></div>
     <div><div class="holname">Your state holidays</div><div class="holsub">Pulled from the Selangor calendar</div></div>
     <div class="holtick"></div></div>
   </div>
   <div class="note" style="min-height:56px;margin-top:12px"><div class="noteph" style="color:var(--ink)">Roastery tour, second week of September</div></div>
   ${help('Public holidays we already know. <b>We only ask about your own.</b>')}`},

{n:'15',t:'Fact pack &mdash; food &amp; drink',tag:'tap',neu:1,skip:'Fill this in later',
 capt:'One of twelve, and the pack is data',
 capd:'A new industry is a new pack and nothing else in the product is touched. Mostly pick-lists so it stays inside the promise, except this screen &mdash; menu names have to be typed exactly, because getting a dish name wrong is our version of calling a garnet an opal.',
 eb:'Food &amp; drink &middot; 2 of 12',h:'<span class="sm">What are your five best-known items?</span>',
 sub:'Exactly as they appear on your menu.',
 body:`<div class="field on" style="margin-top:16px"><span class="val" style="font-size:16px">Kopi O gau</span></div>
   <div class="field" style="margin-top:8px"><span class="val" style="font-size:16px">Roti bakar kaya</span></div>
   <div class="field" style="margin-top:8px"><span class="val" style="font-size:16px">Nasi lemak bungkus</span></div>
   <div class="field" style="margin-top:8px"><span class="at" style="font-size:15px">Add another&hellip;</span></div>
   ${conseq('We build posts straight from these names', preview('post-2.png','Kopi O gau &mdash; RM4.50. Thick, black, no sugar.',`<div class="killed" style="color:var(--muted)">Spelled exactly as you typed it</div>`))}`},

{n:'16',t:'Photos',tag:'up',neu:0,skip:'Send them on WhatsApp instead',
 capt:'Put the hardest ask last',
 capd:'Unchanged, and still right. Fifteen photos is the biggest drop-off in the product and the one thing we genuinely cannot do for them, so it goes at the end once they are invested.',
 eb:'Your pictures',h:'<span class="sm">Now the<br>hard part.</span>',
 sub:'Fifteen photos. The one thing we genuinely cannot do for you.',
 body:`<div class="pgrid">
   <div class="ph"><img src="img/p1.jpg"></div><div class="ph"><img src="img/p2.jpg"></div><div class="ph"><img src="img/p3.jpg"></div>
   <div class="ph"><img src="img/p4.jpg"></div><div class="ph"><img src="img/p1.jpg"></div><div class="ph"><img src="img/p2.jpg"></div>
   <div class="ph add"><svg viewBox="0 0 24 24" fill="none" stroke="#6B6270" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></div>
   <div class="ph"></div><div class="ph"></div></div>
   <div class="count"><div class="ring"><i>6/15</i></div><div class="ctxt"><b>Six so far.</b> Nine more and we can<br>fill a whole month without asking again.</div></div>
   <div class="perm"><div class="box">${TICK}</div><div class="ptxt">Everyone in these has said yes to being posted.</div></div>`},

{n:'17',t:'Your first week',tag:'tap',neu:1,skip:'Change something first',btn:'Schedule them',dark:1,
 capt:'End on their grid, not a submit button',
 capd:'The screen you asked for. Every screen before this took something from them; this is the first one that gives. Their real profile, our six in the top rows, their own photographs underneath &mdash; and a line saying plainly that ours are not published yet.',
 eb:'Step 17 of 17',h:'Here is your<br>first week.',
 sub:'Six posts, built from your answers.',
 body:`<div class="ig">
   <div class="igtop"><div class="igav"><img src="img/p2.jpg"></div>
   <div><div class="ighn">melurkopi</div><div class="igsub">Kopitiam &middot; Bangsar, KL</div></div>
   <div class="igst"><b>4,180</b>Followers</div></div>
   <div class="iggrid">
   <img src="genimg/post-1.png"><img src="genimg/post-2.png"><img src="genimg/post-3.png">
   <img src="genimg/post-4.png"><img src="genimg/post-5.png"><img src="genimg/post-6.png">
   <img src="img/p1.jpg"><img src="img/p2.jpg"><img src="img/p4.jpg"></div>
   <div class="igflag"><i></i><div>Top six are ours and are <b>not published yet</b>. The rest are your own.</div></div></div>`},
];
