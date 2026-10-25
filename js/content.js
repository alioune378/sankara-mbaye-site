/* =========================================================================
   SANKARA MBAYE — CONTENT FILE
   Everything that changes over time lives here: texts (FR/EN), videos,
   press articles, social links and photo captions.
   Built by DALAL STUDIO.
   ========================================================================= */

/* Final domain, once purchased (e.g. "https://www.sankarambaye.com").
   Leave empty until then: canonical / hreflang / Open Graph URLs are added automatically when set. */
window.SITE_URL = "";

/* DALAL STUDIO website, once online. Leave empty to show the credit without a link. */
window.DALAL_URL = "";

/* -------------------------------------------------------------------------
   SOCIAL PROFILES — only profiles with verified: true are shown.
   Set verified: true ONLY after Sankara confirms the account is his.
   ------------------------------------------------------------------------- */
window.SOCIALS = [
  { id: "tiktok",    label: "TikTok",    url: "https://www.tiktok.com/@sankarambaye", verified: true },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/sankara_mbaye/", verified: true },
  { id: "facebook",  label: "Facebook",  url: "", verified: false },
  { id: "youtube",   label: "YouTube",   url: "", verified: false }
];

/* -------------------------------------------------------------------------
   VIDEOS — add real, verified videos only.
   type: "youtube" (id = the part after v= in the link) | "link" (Facebook/Instagram/TikTok URL)
   category: humour | famille | lives | societe | culture
   featured: true for the "À la une / Featured" video (one only)
   Example:
   { type: "youtube", id: "dQw4w9WgXcQ", category: "humour", featured: true,
     title: { fr: "Titre en français", en: "English title" } },
   ------------------------------------------------------------------------- */
window.VIDEOS = [];

/* -------------------------------------------------------------------------
   PRESS — publication dates only if verified (leave date empty otherwise).
   ------------------------------------------------------------------------- */
window.PRESS = [
  {
    outlet: "Dakarposte",
    kind: { fr: "Commentaire de presse", en: "Press commentary" },
    title: {
      fr: "Du live au pouvoir : Sankara Mbaye, nouveau visage de l’activisme pro-régime",
      en: "From Livestreams to Politics: Sankara Mbaye and Pro-Government Activism"
    },
    desc: {
      fr: "Article d’opinion publié par Dakarposte sur le parcours public de Sankara Mbaye. Il reflète le point de vue de la publication.",
      en: "Opinion piece published by Dakarposte about Sankara Mbaye’s public journey. It reflects the publication’s own point of view."
    },
    url: "https://www.dakarposte.com/Du-live-au-pouvoir-Sankara-Mbaye-nouveau-visage-de-l-activisme-pro-regime_a87558.amp.html",
    date: ""
  },
  {
    outlet: "Seneweb",
    kind: { fr: "Vidéo", en: "Video" },
    title: {
      fr: "Sankara Mbaye célèbre l’arrivée de Diomaye à New York",
      en: "Sankara Mbaye Welcomes President Diomaye in New York"
    },
    desc: {
      fr: "Reportage vidéo publié par Seneweb.",
      en: "Video report published by Seneweb."
    },
    url: "https://seneweb.com/fr/news/Video/sankara-mbaye-celebre-larrivee-de-diomaye-a-new-york-un-geste-qui-fait-grincer-des-dents-chez-les-pro-sonko_n_504854.html",
    date: ""
  },
  {
    outlet: "Senegal7",
    kind: { fr: "Vidéo", en: "Video" },
    title: {
      fr: "Sankara Mbaye et Daba Guéweul se retrouvent à la plage après le Bamba Day",
      en: "Sankara Mbaye and Daba Guéweul Meet Up at the Beach After Bamba Day"
    },
    desc: {
      fr: "Vidéo publiée par Senegal7.",
      en: "Video published by Senegal7."
    },
    url: "https://senegal7.com/video-sankara-mbaye-et-daba-gueweul-se-retrouve-a-la-plage-apres-le-bamba-day/",
    date: ""
  }
];

/* -------------------------------------------------------------------------
   PHOTO GALLERY — file names in assets/img/ and their descriptions.
   To replace a photo: put the new file in assets/img/ with the same name.
   ------------------------------------------------------------------------- */
window.GALLERY = [
  { src: "assets/img/hero-maillot-bleu.jpg",    w: 387, h: 516, alt: { fr: "Sankara Mbaye souriant en maillot bleu, téléphone à la main", en: "Sankara Mbaye smiling in a blue jersey, phone in hand" } },
  { src: "assets/img/tenue-rayee.jpg",          w: 495, h: 619, alt: { fr: "Sankara Mbaye en tenue traditionnelle rayée", en: "Sankara Mbaye in a striped traditional outfit" } },
  { src: "assets/img/waterfront.jpg",           w: 411, h: 486, alt: { fr: "Sankara Mbaye en polo turquoise, accoudé à une rambarde au bord de l’eau", en: "Sankara Mbaye in a turquoise polo, leaning on a waterfront railing" } },
  { src: "assets/img/camouflage.jpg",           w: 415, h: 481, alt: { fr: "Sankara Mbaye en tenue camouflage et casquette", en: "Sankara Mbaye in camouflage streetwear and a cap" } },
  { src: "assets/img/chemise-verte-dakar.jpg",  w: 429, h: 466, alt: { fr: "Sankara Mbaye en chemise verte, en ville", en: "Sankara Mbaye in a green shirt, in the city" } },
  { src: "assets/img/interview-media.jpg",      w: 335, h: 597, alt: { fr: "Sankara Mbaye interviewé devant une caméra", en: "Sankara Mbaye being interviewed on camera" } },
  { src: "assets/img/casque-diaspora.jpg",      w: 335, h: 597, alt: { fr: "Sankara Mbaye avec un casque audio et des lunettes de soleil", en: "Sankara Mbaye wearing headphones and sunglasses" } },
  { src: "assets/img/chemise-bleue.jpg",        w: 588, h: 351, alt: { fr: "Sankara Mbaye en chemise bleue, dans une rue arborée", en: "Sankara Mbaye in a blue shirt on a tree-lined street" } },
  { src: "assets/img/polo-vert.jpg",            w: 222, h: 447, alt: { fr: "Sankara Mbaye en polo vert clair lors d’un événement", en: "Sankara Mbaye in a light green polo at an event" } },
  { src: "assets/img/tenue-traditionnelle.jpg", w: 201, h: 251, alt: { fr: "Sankara Mbaye en tenue traditionnelle rose pêche", en: "Sankara Mbaye in a peach-pink traditional outfit" } },
  { src: "assets/img/times-square.jpg",         w: 205, h: 246, alt: { fr: "Sankara Mbaye tenant un trophée", en: "Sankara Mbaye holding a trophy" } },
  { src: "assets/img/famille.jpg",              w: 415, h: 417, alt: { fr: "Sankara Mbaye et son enfant, à deux âges différents", en: "Sankara Mbaye with his child, at two different ages" } }
];

/* -------------------------------------------------------------------------
   TEXTS — French (default) and English.
   ------------------------------------------------------------------------- */
window.T = {
  fr: {
    meta_title: "Sankara Mbaye | Site Officiel — Vidéos, Culture & Actualité",
    meta_desc: "Découvrez le site officiel de Sankara Mbaye : vidéos, humour, culture sénégalaise, actualité, vie de la diaspora et collaborations professionnelles.",
    skip: "Aller au contenu",
    nav_home: "Accueil", nav_about: "À propos", nav_world: "Mon univers", nav_tv: "Sankara TV", nav_media: "Dans les médias", nav_contact: "Contact",
    menu_open: "Ouvrir le menu", menu_close: "Fermer le menu", lang_label: "Langue",
    site_sub: "Site Officiel",

    hero_eyebrow: "Bienvenue sur mon site officiel",
    hero_tagline: "Une voix authentique. Plusieurs facettes. Une seule communauté.",
    hero_p1: "Créateur de contenu sénégalais établi aux États-Unis, je partage avec ma communauté ce qui me passionne : l’humour, la famille, la culture, les questions de société et l’actualité.",
    hero_p2: "À travers mes vidéos, mes directs et mes échanges, je cultive un lien avec les Sénégalais d’ici et d’ailleurs.",
    hero_cta1: "Découvrir mon univers", hero_cta2: "Regarder mes vidéos",
    hero_small: "Humour • Famille • Culture • Société • Actualité",

    about_label: "Mon parcours",
    about_title: "Qui est Sankara Mbaye ?",
    about_p1: "Sankara Mbaye est un créateur de contenu et une personnalité des réseaux sociaux sénégalais, établi aux États-Unis.",
    about_p2: "Au fil des années, il s’est fait connaître à travers des vidéos, des directs et des échanges avec sa communauté. Son univers mêle humour, moments familiaux, culture sénégalaise, questions de société et commentaires sur l’actualité.",
    about_p3: "Son parcours témoigne de la diversité de ses centres d’intérêt et de sa volonté de rester en contact avec les Sénégalais, qu’ils vivent au pays ou dans la diaspora.",
    about_p4: "À travers ses différentes prises de parole, Sankara partage son regard personnel sur les sujets qui l’interpellent, tout en continuant à proposer des contenus divertissants et des moments de proximité avec son public.",
    about_close: "Un parcours, des convictions personnelles et une communauté qui continue de grandir.",

    world_label: "Mon univers",
    world_title: "Les différentes facettes de mon univers",
    w1_t: "Humour & divertissement", w1_d: "Des vidéos, des moments spontanés et une bonne dose de bonne humeur. Parce que le rire et le partage occupent une place importante dans mon univers.",
    w2_t: "Famille & moments de vie", w2_d: "Des souvenirs, des moments de complicité et des instants du quotidien qui rappellent l’importance des liens familiaux.",
    w3_t: "Culture & identité", w3_d: "Un attachement à mes racines sénégalaises, à nos traditions et à cette richesse culturelle que nous partageons au-delà des frontières.",
    w4_t: "Société & actualité", w4_d: "Des réflexions, des échanges et des opinions personnelles sur les sujets qui font l’actualité au Sénégal et dans la diaspora.",

    tv_tiktok_t: "Mes dernières vidéos", read_more: "Lire la suite", read_less: "Réduire",
    tv_tiktok_p: "Regardez mes vidéos directement ici, et abonnez-vous pour ne rien manquer.",
    col_lead: "Marques, organisateurs, médias et associations : travaillons ensemble pour toucher une communauté sénégalaise engagée, au pays et dans la diaspora.",
    off1_t: "Contenu sponsorisé", off1: "Présenter votre marque, votre produit ou votre service dans des vidéos pensées pour ma communauté.",
    off2_t: "Événements", off2: "Animation, présence ou prise de parole lors de vos lancements, soirées culturelles et rencontres de la communauté.",
    off3_t: "Campagnes culturelles", off3: "Valoriser la culture sénégalaise, une initiative ou une cause à travers des contenus authentiques.",
    off4_t: "Interviews & médias", off4: "Émissions, podcasts, interviews et collaborations avec d’autres créateurs.",
    tv_label: "Vidéos & directs",
    tv_title: "Bienvenue sur Sankara TV",
    tv_intro: "Retrouvez mes vidéos, mes directs, mes échanges et les moments qui font vivre ma communauté. Entre divertissement, discussions et actualité, découvrez les différentes facettes de mon univers.",
    cat_all: "Toutes les vidéos", cat_humour: "Humour", cat_famille: "Famille", cat_lives: "Lives & discussions", cat_societe: "Société & actualité", cat_culture: "Culture & diaspora",
    tv_featured: "À la une", tv_latest: "Dernières vidéos", tv_more: "Voir plus de vidéos",
    tv_empty_t: "Les vidéos arrivent bientôt sur le site",
    tv_empty_p: "En attendant, retrouvez mes vidéos et mes directs sur mes réseaux.",
    tv_empty_nosocial: "Les liens vers mes plateformes officielles seront ajoutés très bientôt.",
    tv_open: "Ouvrir la vidéo", tv_none_cat: "Aucune vidéo dans cette catégorie pour le moment.",

    dia_label: "Mes racines, mon ouverture sur le monde",
    dia_title: "Le Sénégal dans le cœur, la diaspora dans le quotidien.",
    dia_p1: "Vivre à l’étranger ne signifie pas perdre le lien avec ses origines.",
    dia_p2: "À travers mes contenus et mes échanges, je garde une place importante pour le Sénégal, sa culture, ses réalités et les conversations qui animent notre communauté.",
    dia_p3: "Qu’ils soient à Dakar, à New York, à Paris, à Montréal ou ailleurs, les Sénégalais partagent des histoires, des expériences et des aspirations qui nous rapprochent.",
    dia_p4: "C’est aussi cette connexion que je souhaite faire vivre à travers mon univers numérique.",

    media_label: "Revue de presse",
    media_title: "Dans les médias",
    media_intro: "Retrouvez une sélection d’articles, de reportages et de publications consacrés à mon parcours et à mes interventions publiques.",
    media_read: "Lire sur", media_note: "Les articles reflètent le point de vue de leurs auteurs et des publications concernées.",

    gal_title: "En images",
    gal_intro: "Des moments, des rencontres, des souvenirs et quelques images de mon quotidien.",
    lb_close: "Fermer", lb_prev: "Photo précédente", lb_next: "Photo suivante", lb_open: "Agrandir la photo",

    col_label: "Opportunités & partenariats",
    col_title: "Travaillons ensemble.",
    col_p1: "Vous souhaitez me contacter pour une interview, une collaboration, un événement ou un projet professionnel ?",
    col_p2: "Je suis ouvert aux propositions sérieuses et aux échanges constructifs.",
    col_p3: "Présentez votre projet et précisez la nature de votre demande.",
    col_c1: "Interviews & médias", col_c2: "Événements", col_c3: "Collaborations de contenu", col_c4: "Partenariats de marque", col_c5: "Projets culturels", col_c6: "Autres demandes professionnelles",
    col_btn: "Envoyer une demande",

    form_title: "Restons en contact.",
    form_desc: "Une question, une proposition ou une demande professionnelle ? Envoyez votre message à l’aide du formulaire ci-dessous.",
    f_name: "Nom complet", f_email: "Adresse e-mail", f_org: "Organisation (facultatif)", f_subject: "Objet de votre demande", f_subject_ph: "Choisissez…", f_msg: "Votre message",
    f_submit: "Envoyer mon message", f_sending: "Envoi en cours…",
    f_ok: "Merci pour votre message. Votre demande a bien été envoyée.",
    f_err: "Votre message n’a pas pu être envoyé. Veuillez réessayer.",
    f_req: "Ce champ est obligatoire.", f_bad_email: "Veuillez saisir une adresse e-mail valide.",
    f_privacy: "Vos informations servent uniquement à répondre à votre demande.",

    soc_title: "Retrouvez-moi sur les réseaux.",
    soc_desc: "Suivez mes publications, mes vidéos et mes directs sur mes plateformes officielles.",
    soc_soon: "Mes liens officiels seront ajoutés ici très prochainement.",

    foot_sub: "Site officiel",
    foot_tags: "Humour • Culture • Société • Actualité • Diaspora",
    foot_rights: "© 2026 Sankara Mbaye. Tous droits réservés.",
    foot_credit: "Site conçu et développé par",
    foot_privacy: "Politique de confidentialité",

    pv_title: "Politique de confidentialité",
    pv_p1: "Ce site recueille uniquement les informations que vous saisissez dans le formulaire de contact : votre nom, votre adresse e-mail, votre organisation (facultative), l’objet de votre demande et votre message.",
    pv_p2: "Ces informations servent exclusivement à répondre à votre demande. Elles ne sont ni vendues, ni louées, ni utilisées à des fins publicitaires.",
    pv_p3: "Le site est hébergé par Netlify, qui reçoit et conserve les messages envoyés par le formulaire. Les messages sont supprimés lorsqu’ils ne sont plus utiles au traitement de la demande.",
    pv_p4: "Le site mémorise votre choix de langue dans votre navigateur. Il n’utilise pas de cookies publicitaires ni d’outil de suivi. Les polices de caractères sont chargées depuis Google Fonts. Les vidéos TikTok affichées sur le site sont fournies par TikTok, qui peut déposer ses propres cookies selon sa politique de confidentialité.",
    pv_p5: "Pour demander la consultation ou la suppression de vos informations, écrivez-nous à l’aide du formulaire de contact.",
    pv_close: "Fermer",

    cap_hero: "Sankara Mbaye souriant en maillot bleu, téléphone à la main",
    cap_about1: "Sankara Mbaye en tenue traditionnelle rayée",
    cap_about2: "Sankara Mbaye en tenue traditionnelle rose pêche",
    cap_w1: "Sankara Mbaye en tenue camouflage", cap_w2: "Sankara Mbaye et son enfant, à deux âges différents", cap_w3: "Sankara Mbaye en chemise verte, en ville", cap_w4: "Sankara Mbaye en polo vert clair lors d’un événement",
    cap_tv: "Sankara Mbaye avec un casque audio et des lunettes de soleil",
    cap_dia1: "Sankara Mbaye en chemise bleue, dans une rue arborée", cap_dia2: "Sankara Mbaye tenant un trophée",
    cap_media: "Sankara Mbaye interviewé devant une caméra",
    cap_col: "Sankara Mbaye en polo turquoise au bord de l’eau"
  },

  en: {
    meta_title: "Sankara Mbaye | Official Website — Videos, Culture & Current Affairs",
    meta_desc: "Explore Sankara Mbaye’s official website featuring videos, humor, Senegalese culture, current affairs, diaspora life, and professional collaborations.",
    skip: "Skip to content",
    nav_home: "Home", nav_about: "About", nav_world: "My World", nav_tv: "Sankara TV", nav_media: "In the Media", nav_contact: "Contact",
    menu_open: "Open menu", menu_close: "Close menu", lang_label: "Language",
    site_sub: "Official Website",

    hero_eyebrow: "Welcome to my official website",
    hero_tagline: "One authentic voice. Many sides. One community.",
    hero_p1: "I’m a Senegalese content creator based in the United States, sharing what matters to me: humor, family, culture, social issues, and current events.",
    hero_p2: "Through my videos, livestreams, and conversations, I stay connected with Senegalese communities at home and around the world.",
    hero_cta1: "Discover My World", hero_cta2: "Watch My Videos",
    hero_small: "Humor • Family • Culture • Society • Current Affairs",

    about_label: "My journey",
    about_title: "Who Is Sankara Mbaye?",
    about_p1: "Sankara Mbaye is a Senegalese content creator and social media personality based in the United States.",
    about_p2: "Over the years, he has become known through his videos, livestreams, and conversations with his community. His content brings together humor, family moments, Senegalese culture, social issues, and commentary on current events.",
    about_p3: "His journey reflects a wide range of interests and a desire to remain connected with Senegalese people, both in Senegal and throughout the diaspora.",
    about_p4: "Through his public commentary, Sankara shares his personal perspective on issues that matter to him while continuing to create entertaining content and meaningful moments with his audience.",
    about_close: "A personal journey, individual convictions, and a growing community.",

    world_label: "My world",
    world_title: "The many sides of my world",
    w1_t: "Humor & Entertainment", w1_d: "Videos, spontaneous moments, and plenty of good humor. Because laughter and sharing are an important part of my world.",
    w2_t: "Family & Life Moments", w2_d: "Memories, meaningful connections, and everyday moments that celebrate the importance of family.",
    w3_t: "Culture & Identity", w3_d: "A connection to my Senegalese roots, our traditions, and the cultural heritage we share across borders.",
    w4_t: "Society & Current Affairs", w4_d: "Reflections, conversations, and personal perspectives on issues shaping Senegal and its diaspora.",

    tv_tiktok_t: "My latest videos", read_more: "Read more", read_less: "Show less",
    tv_tiktok_p: "Watch my videos right here, and follow me so you never miss one.",
    col_lead: "Brands, event organizers, media and associations: let’s work together to reach an engaged Senegalese community, at home and across the diaspora.",
    off1_t: "Sponsored content", off1: "Feature your brand, product or service in videos made for my community.",
    off2_t: "Events", off2: "Hosting, appearances or speaking at your launches, cultural nights and community gatherings.",
    off3_t: "Cultural campaigns", off3: "Promote Senegalese culture, an initiative or a cause through authentic content.",
    off4_t: "Interviews & media", off4: "Shows, podcasts, interviews and collaborations with other creators.",
    tv_label: "Videos & livestreams",
    tv_title: "Welcome to Sankara TV",
    tv_intro: "Explore my videos, livestreams, conversations, and the moments that bring my community together. From entertainment to current affairs, discover the many sides of my world.",
    cat_all: "All Videos", cat_humour: "Humor", cat_famille: "Family", cat_lives: "Lives & Discussions", cat_societe: "Society & Current Affairs", cat_culture: "Culture & Diaspora",
    tv_featured: "Featured", tv_latest: "Latest Videos", tv_more: "Explore More Videos",
    tv_empty_t: "Videos are coming to the website soon",
    tv_empty_p: "In the meantime, find my videos and livestreams on my social media.",
    tv_empty_nosocial: "Links to my official platforms will be added very soon.",
    tv_open: "Open video", tv_none_cat: "No videos in this category yet.",

    dia_label: "My roots, my connection to the world",
    dia_title: "Senegal in My Heart. The Diaspora in My Everyday Life.",
    dia_p1: "Living abroad does not mean losing touch with your roots.",
    dia_p2: "Through my content and conversations, Senegal remains an important part of my world: its culture, its realities, and the discussions that matter to our community.",
    dia_p3: "Whether in Dakar, New York, Paris, Montreal, or elsewhere, Senegalese people share stories, experiences, and aspirations that bring us together.",
    dia_p4: "That connection is something I want to celebrate through my digital presence.",

    media_label: "Press coverage",
    media_title: "In the Media",
    media_intro: "Explore a selection of articles, reports, and publications covering my journey and public appearances.",
    media_read: "Read on", media_note: "Articles reflect the views of their authors and publications.",

    gal_title: "In Pictures",
    gal_intro: "Moments, encounters, memories, and glimpses into my everyday life.",
    lb_close: "Close", lb_prev: "Previous photo", lb_next: "Next photo", lb_open: "Enlarge photo",

    col_label: "Opportunities & partnerships",
    col_title: "Let’s Work Together.",
    col_p1: "Interested in reaching out for an interview, collaboration, event, or professional project?",
    col_p2: "I welcome serious proposals and constructive conversations.",
    col_p3: "Tell me about your project and the nature of your inquiry.",
    col_c1: "Interviews & Media", col_c2: "Events", col_c3: "Content Collaborations", col_c4: "Brand Partnerships", col_c5: "Cultural Projects", col_c6: "Other Professional Inquiries",
    col_btn: "Send an Inquiry",

    form_title: "Let’s Stay Connected.",
    form_desc: "Have a question, proposal, or professional inquiry? Send your message using the form below.",
    f_name: "Full Name", f_email: "Email Address", f_org: "Organization (Optional)", f_subject: "Inquiry Type", f_subject_ph: "Choose…", f_msg: "Your Message",
    f_submit: "Send Message", f_sending: "Sending…",
    f_ok: "Thank you for your message. Your inquiry has been sent successfully.",
    f_err: "Your message could not be sent. Please try again.",
    f_req: "This field is required.", f_bad_email: "Please enter a valid email address.",
    f_privacy: "Your information is used only to reply to your inquiry.",

    soc_title: "Connect With Me on Social Media.",
    soc_desc: "Follow my latest posts, videos, and livestreams on my official platforms.",
    soc_soon: "My official links will be added here very soon.",

    foot_sub: "Official Website",
    foot_tags: "Humor • Culture • Society • Current Affairs • Diaspora",
    foot_rights: "© 2026 Sankara Mbaye. All rights reserved.",
    foot_credit: "Website designed and developed by",
    foot_privacy: "Privacy Policy",

    pv_title: "Privacy Policy",
    pv_p1: "This website only collects the information you enter in the contact form: your name, email address, organization (optional), inquiry type, and message.",
    pv_p2: "This information is used solely to reply to your inquiry. It is never sold, rented, or used for advertising.",
    pv_p3: "The website is hosted by Netlify, which receives and stores messages sent through the form. Messages are deleted once they are no longer needed to handle the inquiry.",
    pv_p4: "The website remembers your language choice in your browser. It does not use advertising cookies or tracking tools. Fonts are loaded from Google Fonts. The TikTok videos shown on the website are provided by TikTok, which may set its own cookies under its privacy policy.",
    pv_p5: "To request access to or deletion of your information, contact us using the contact form.",
    pv_close: "Close",

    cap_hero: "Sankara Mbaye smiling in a blue jersey, phone in hand",
    cap_about1: "Sankara Mbaye in a striped traditional outfit",
    cap_about2: "Sankara Mbaye in a peach-pink traditional outfit",
    cap_w1: "Sankara Mbaye in camouflage streetwear", cap_w2: "Sankara Mbaye with his child, at two different ages", cap_w3: "Sankara Mbaye in a green shirt, in the city", cap_w4: "Sankara Mbaye in a light green polo at an event",
    cap_tv: "Sankara Mbaye wearing headphones and sunglasses",
    cap_dia1: "Sankara Mbaye in a blue shirt on a tree-lined street", cap_dia2: "Sankara Mbaye holding a trophy",
    cap_media: "Sankara Mbaye being interviewed on camera",
    cap_col: "Sankara Mbaye in a turquoise polo by the water"
  }
};

/* Press text keys (used by the static press cards in index.html) */
(window.PRESS || []).forEach(function (p, i) {
  ["fr", "en"].forEach(function (l) {
    window.T[l]["pr" + i + "_kind"] = p.kind[l];
    window.T[l]["pr" + i + "_title"] = p.title[l];
    window.T[l]["pr" + i + "_desc"] = p.desc[l];
    window.T[l]["pr" + i + "_link"] = (l === "fr" ? "Lire sur " : "Read on ") + p.outlet + " ↗";
  });
});
