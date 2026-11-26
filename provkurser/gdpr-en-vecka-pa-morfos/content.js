/*
 * GDPR Core Path: One Week at Morfos
 * Course content in English and Swedish. Every text is written as [English, Swedish].
 *
 * CLIENT SETTINGS ("author mode")
 * Change the values in COURSE_CONFIG.contacts to fit the client organisation.
 * They are inserted wherever the text says {{dp}}, {{role}}, {{channel}} or {{tools}}.
 */
window.COURSE_CONFIG = {
  passMark: 80,                       // % needed on the final check
  defaultLang: "sv",                    // "en", "sv", or "" to follow the learner's browser
  exitUrl: "/#provkurser",   // where Exit leads when the course is not running in an LMS
  exitLabel: ["Back to morfos.se", "Tillbaka till morfos.se"],
  contacts: {
    dp:      ["Lena Berg", "Lena Berg"],
    role:    ["Data protection contact", "Dataskyddsansvarig"],
    channel: ["the incident form on the intranet", "incidentformuläret på intranätet"],
    tools:   ["Morfos Akademi, or the shared drive in Microsoft 365", "Morfos Akademi eller den delade enheten i Microsoft 365"]
  }
};

window.COURSE = {
  title: ["GDPR: One week at Morfos", "GDPR: En vecka på Morfos"],

  ui: {
    brand: ["Morfos Edtech Akademi", "Morfos Edtech Akademi"],
    langLabel: ["Language", "Språk"],
    exit: ["Exit", "Avsluta"],
    exitTitle: ["Leave the course?", "Lämna kursen?"],
    exitBodyLms: ["Your progress is saved, and you can carry on where you left off next time.", "Dina framsteg sparas, och nästa gång fortsätter du där du slutade."],
    exitBodyWeb: ["Your progress is saved in this browser, so you can carry on where you left off.", "Dina framsteg sparas i den här webbläsaren, så att du kan fortsätta där du slutade."],
    exitConfirm: ["Exit course", "Avsluta kursen"],
    stay: ["Keep going", "Fortsätt kursen"],
    exitedTitle: ["You've left the course", "Du har lämnat kursen"],
    exitedLms: ["Your progress is saved. You can close this window.", "Dina framsteg är sparade. Du kan stänga det här fönstret."],
    exitedWeb: ["Your progress is saved in this browser.", "Dina framsteg är sparade i den här webbläsaren."],
    backToMorfos: ["Go to morfos.se", "Till morfos.se"],
    resume: ["Back to the course", "Tillbaka till kursen"],

    eyebrow: ["GDPR core path · about 15 minutes", "GDPR grundkurs · cirka 15 minuter"],
    welcomeTitle: ["One week at Morfos", "En vecka på Morfos"],
    welcomeLead: [
      "It's your first week at Morfos. Each day brings one everyday situation where personal data is involved. Make the call, see what happens, and learn the five habits that prevent most data incidents.",
      "Det är din första vecka på Morfos. Varje dag bjuder på en vardaglig situation där personuppgifter är inblandade. Fatta beslutet, se vad som händer och lär dig de fem vanor som förebygger de flesta dataincidenter."
    ],
    habitsTitle: ["Five habits, one per day", "Fem vanor, en per dag"],
    habits: [
      ["Recognise personal data, including sensitive data, in everyday work.", "Känna igen personuppgifter, även känsliga, i det dagliga arbetet."],
      ["Collect and keep only what's needed, and ask before reusing data for something new.", "Samla in och spara bara det som behövs, och fråga innan uppgifter används till något nytt."],
      ["Share only through approved tools, with the right recipients.", "Dela bara via godkända verktyg och med rätt mottagare."],
      ["Report a suspected breach immediately, without investigating or fixing it alone.", "Rapportera en misstänkt incident direkt, utan att utreda eller åtgärda den på egen hand."],
      ["Recognise a request about someone's data, however it's phrased, and forward it immediately.", "Känna igen en begäran om någons uppgifter, hur den än är formulerad, och skicka den vidare direkt."]
    ],
    contactsTitle: ["Who to contact at Morfos", "Vem du kontaktar på Morfos"],
    reportVia: ["Report incidents through", "Rapportera incidenter via"],
    approvedTools: ["Approved tools for sharing data", "Godkända verktyg för att dela uppgifter"],
    nameLabel: ["Your name (for the certificate)", "Ditt namn (till intyget)"],
    namePlaceholder: ["e.g. Sam Andersson", "t.ex. Sam Andersson"],
    start: ["Start Monday", "Börja på måndagen"],
    continueWeek: ["Continue where you left off", "Fortsätt där du slutade"],
    restart: ["Start again", "Börja om"],
    endNote: ["The week ends with a short final check: five new situations. You need 4 out of 5 to get your certificate.", "Veckan avslutas med ett kort slutprov: fem nya situationer. Du behöver 4 av 5 rätt för att få ditt intyg."],

    weekNav: ["Your week", "Din vecka"],
    finalShort: ["Final check", "Slutprov"],
    minutes: ["min", "min"],
    behaviour: ["Habit", "Vana"],
    setup: ["The situation", "Situationen"],
    whyTitle: ["Why this task?", "Varför den här uppgiften?"],
    takeaway: ["Takeaway", "Att ta med sig"],
    nextDay: ["Next day", "Nästa dag"],
    toFinal: ["Go to the final check", "Till slutprovet"],
    next: ["Continue", "Fortsätt"],
    stepOf: ["Step {n} of {m}", "Steg {n} av {m}"],
    msgOf: ["Message {n} of {m}", "Meddelande {n} av {m}"],
    whatDo: ["What do you do?", "Vad gör du?"],
    tryAgain: ["Not the best choice. Read the feedback, then try another option.", "Inte det bästa valet. Läs återkopplingen och prova ett annat alternativ."],
    rightAnswer: ["Good call.", "Bra beslut."],
    sortedOf: ["{n} of {m} sorted", "{n} av {m} sorterade"],
    sortCorrect: ["Correct:", "Rätt:"],
    sortWrong: ["Not quite. The right box is", "Inte riktigt. Rätt låda är"],
    checkFields: ["Check my form", "Kontrollera formuläret"],
    fieldsNeeded: ["Needed", "Behövs"],
    fieldsNotNeeded: ["Not needed", "Behövs inte"],
    fieldsScore: ["You chose {n} of {m} fields correctly.", "Du valde rätt för {n} av {m} fält."],
    inbox: ["Inbox", "Inkorg"],
    handled: ["Handled", "Hanterat"],
    from: ["From", "Från"],
    unread: ["Unread", "Oläst"],

    finalTitle: ["Final check", "Slutprov"],
    finalLead: [
      "Five new situations, one for each habit, in mixed order. Pick the best response. Your first answer counts, and you'll see feedback after each one. You need 4 out of 5 to pass.",
      "Fem nya situationer, en för varje vana, i blandad ordning. Välj det bästa alternativet. Ditt första svar räknas, och du får återkoppling efter varje fråga. Du behöver 4 av 5 rätt för att bli godkänd."
    ],
    startFinal: ["Start the final check", "Starta slutprovet"],
    question: ["Situation {n} of {m}", "Situation {n} av {m}"],
    correct: ["Correct.", "Rätt."],
    incorrect: ["Not quite.", "Inte riktigt."],
    bestAnswer: ["The best response:", "Det bästa svaret:"],
    seeResult: ["See my result", "Visa mitt resultat"],
    passedTitle: ["You passed", "Du är godkänd"],
    failedTitle: ["Not quite there yet", "Inte riktigt ännu"],
    scoreLine: ["You got {n} out of {m}.", "Du fick {n} av {m} rätt."],
    passedBody: ["Well done. You've finished the week at Morfos and know the five habits that prevent most data incidents.", "Bra jobbat. Du har klarat veckan på Morfos och kan de fem vanor som förebygger de flesta dataincidenter."],
    failedBody: ["You need 4 out of 5. Look back at the day for any situation you missed, then try the final check again. The situations come in a new order.", "Du behöver 4 av 5 rätt. Titta tillbaka på dagen för de situationer du missade och gör sedan slutprovet igen. Situationerna kommer i ny ordning."],
    retake: ["Try the final check again", "Gör om slutprovet"],
    reviewDay: ["Review", "Repetera"],
    certificate: ["Certificate", "Intyg"],
    certTitle: ["Certificate of completion", "Kursintyg"],
    certText: ["has completed the course", "har genomfört kursen"],
    certScore: ["Final check: {n} of {m} correct", "Slutprov: {n} av {m} rätt"],
    certDate: ["Date", "Datum"],
    print: ["Print or save as PDF", "Skriv ut eller spara som PDF"],
    habitsLearned: ["The five habits", "De fem vanorna"],
    savedLms: ["Your result has been sent to Morfos Akademi.", "Ditt resultat har skickats till Morfos Akademi."],
    savedWeb: ["This is a demo, so your result is only saved in this browser.", "Det här är en demo, så ditt resultat sparas bara i den här webbläsaren."],
    learner: ["Learner", "Deltagare"]
  },

  days: [
    /* ---------------------------------------------------------------- MONDAY */
    {
      id: "mon",
      name: ["Monday", "Måndag"],
      short: ["Mon", "Mån"],
      title: ["What counts as personal data?", "Vad räknas som personuppgifter?"],
      habit: 1,
      setup: [
        "It's your first day at Morfos. Your manager gives you access to the shared drive and your team's inbox, and asks you to tidy up the course folder. Before you move anything, you need to know what you're handling.",
        "Det är din första dag på Morfos. Din chef ger dig tillgång till den delade enheten och teamets inkorg och ber dig städa upp i kursmappen. Innan du flyttar något behöver du veta vad du hanterar."
      ],
      steps: [
        {
          type: "sort", id: "m1",
          prompt: ["Put each item in the right box.", "Placera varje sak i rätt låda."],
          boxes: [["Not personal data", "Inte personuppgift"], ["Personal data", "Personuppgift"], ["Sensitive personal data", "Känslig personuppgift"]],
          items: [
            { id: "a", answer: 1,
              text: ["An attendance list with learners' names", "En närvarolista med deltagarnas namn"],
              fb: ["Anything that identifies a person is personal data, and a name is the most obvious example.", "Allt som identifierar en person är en personuppgift, och ett namn är det tydligaste exemplet."] },
            { id: "b", answer: 1,
              text: ["A photo from the course graduation, with faces visible", "Ett foto från kursavslutningen där ansiktena syns"],
              fb: ["Faces identify people just as well as names. Photos are personal data even without captions.", "Ansikten identifierar människor lika bra som namn. Foton är personuppgifter även utan bildtext."] },
            { id: "c", answer: 0,
              text: ["A survey summary: \"82% of 180 learners were satisfied\"", "En sammanställning av en enkät: ”82 % av 180 deltagare var nöjda”"],
              fb: ["True statistics about a large group don't identify anyone. But free-text comments, or results from very small groups, can easily point to individuals.", "Statistik om en stor grupp identifierar ingen. Men fritextsvar, eller resultat från mycket små grupper, kan lätt peka ut enskilda personer."] },
            { id: "d", answer: 1,
              text: ["A learner ID, \"L-2291\", in a grade spreadsheet with no names", "Ett deltagar-id, ”L-2291”, i ett betygsblad utan namn"],
              fb: ["The ID doesn't show a name, but someone at Morfos can connect it to a person. Data that can be linked back to someone is still personal data.", "Id:t visar inget namn, men någon på Morfos kan koppla det till en person. Uppgifter som kan kopplas tillbaka till någon är fortfarande personuppgifter."] },
            { id: "e", answer: 0,
              text: ["The email address info@supplier.se", "Mejladressen info@leverantor.se"],
              fb: ["A shared company mailbox doesn't identify a particular person. An address like anna.lindqvist@supplier.se would be personal data.", "En gemensam funktionsbrevlåda identifierar ingen särskild person. En adress som anna.lindqvist@leverantor.se skulle däremot vara en personuppgift."] },
            { id: "f", answer: 2,
              text: ["A note: \"Needs step-free access, uses a wheelchair\"", "En anteckning: ”Behöver tillgänglig entré utan trappor, använder rullstol”"],
              fb: ["This is health information, a special category with stricter rules. Use it only for the purpose it was given for, and share it only with those who need it.", "Det här är uppgifter om hälsa, en särskild kategori med strängare regler. Använd dem bara för det syfte de lämnades för och dela dem bara med dem som behöver dem."] },
            { id: "g", answer: 2,
              text: ["A catering order: \"Two halal meals: Omar H., Yasmin K.\"", "En cateringbeställning: ”Två halalmåltider: Omar H., Yasmin K.”"],
              fb: ["A meal choice linked to a name can reveal religious belief, which is a special category. A vegetarian order usually wouldn't be.", "Ett matval kopplat till ett namn kan avslöja religiös övertygelse, som är en särskild kategori. En vegetarisk beställning skulle oftast inte vara det."] },
            { id: "h", answer: 2,
              text: ["A payroll list of employees who pay union fees through their salary", "En lönelista över anställda som betalar fackavgift via lönen"],
              fb: ["Trade union membership is a special category. It's common in Swedish workplaces, which makes it easy to forget how sensitive it is.", "Medlemskap i fackförening är en särskild kategori. Det är vanligt på svenska arbetsplatser, och därför lätt att glömma hur känsligt det är."] }
          ]
        }
      ],
      why: [
        "Sorting sharpens your eye. You can't protect data you don't recognise, and the most common mistakes involve data that doesn't look personal: an ID number, a photo, a meal order. Sorting items that look similar, then seeing why they belong in different boxes, builds the quick recognition you need when you're busy.",
        "Att sortera skärper blicken. Du kan inte skydda uppgifter som du inte känner igen, och de vanligaste misstagen gäller uppgifter som inte ser personliga ut: ett id-nummer, ett foto, en matbeställning. När du sorterar saker som liknar varandra och ser varför de hör hemma i olika lådor tränar du upp den snabba igenkänning du behöver när det är mycket att göra."
      ],
      takeaway: [
        "If information can be linked to a person, even indirectly, it's personal data. Health, religion, union membership and similar information need extra care.",
        "Om en uppgift kan kopplas till en person, även indirekt, är den en personuppgift. Uppgifter om hälsa, religion, fackmedlemskap och liknande kräver extra försiktighet."
      ]
    },

    /* --------------------------------------------------------------- TUESDAY */
    {
      id: "tue",
      name: ["Tuesday", "Tisdag"],
      short: ["Tue", "Tis"],
      title: ["Just what's needed", "Bara det som behövs"],
      habit: 2,
      setup: [
        "Tuesday morning. Your manager asks you to set up registration for a free one-hour webinar, \"Digital tools for adult learners\". Later that day you find some old files, and in the afternoon your manager has an idea.",
        "Tisdag morgon. Din chef ber dig ordna anmälan till ett gratis webbinarium på en timme, ”Digitala verktyg för vuxna elever”. Senare under dagen hittar du några gamla filer, och på eftermiddagen får din chef en idé."
      ],
      steps: [
        {
          type: "fields", id: "t1", time: "09:15",
          prompt: ["Choose the fields for the sign-up form. Tick everything the webinar actually needs.", "Välj fälten till anmälningsformuläret. Kryssa i allt som webbinariet faktiskt behöver."],
          formTitle: ["Sign up: Digital tools for adult learners", "Anmälan: Digitala verktyg för vuxna elever"],
          fields: [
            { id: "name", need: true, label: ["Name", "Namn"], fb: ["Needed to know who is attending.", "Behövs för att veta vem som deltar."] },
            { id: "email", need: true, label: ["Email address", "Mejladress"], fb: ["Needed to send the webinar link.", "Behövs för att skicka länken till webbinariet."] },
            { id: "dob", need: false, label: ["Date of birth", "Födelsedatum"], fb: ["Nothing about a webinar requires it.", "Ingenting i ett webbinarium kräver det."] },
            { id: "addr", need: false, label: ["Home address", "Hemadress"], fb: ["Nothing is being sent by post.", "Ingenting skickas med post."] },
            { id: "phone", need: false, label: ["Phone number", "Telefonnummer"], fb: ["Email is enough for a link and a reminder.", "Mejl räcker för en länk och en påminnelse."] },
            { id: "employer", need: false, label: ["Employer", "Arbetsgivare"], fb: ["Only include this if you have a stated reason, and tell people what it's used for.", "Ta bara med det om ni har ett uttalat skäl, och berätta vad det används till."] }
          ],
          summary: [
            "Every extra field is data you must protect, keep track of and eventually delete. \"It might be useful someday\" isn't a purpose. Collect only what the purpose requires.",
            "Varje extra fält är uppgifter som ni måste skydda, hålla reda på och till slut radera. ”Det kan vara bra att ha” är inget syfte. Samla bara in det som syftet kräver."
          ]
        },
        {
          type: "choice", id: "t2", time: "11:40",
          prompt: [
            "In the course folder you find \"Registration_2014.xlsx\": names, email addresses and phone numbers of 60 learners. Nobody seems to have opened it for years.",
            "I kursmappen hittar du ”Anmalan_2014.xlsx”: namn, mejladresser och telefonnummer till 60 deltagare. Ingen verkar ha öppnat filen på flera år."
          ],
          options: [
            { id: "a", correct: true,
              text: ["Flag it to {{dp}} or the folder owner so it can be reviewed and deleted properly.", "Flagga den till {{dp}} eller den som äger mappen, så att den kan granskas och raderas på rätt sätt."],
              fb: ["Right. Keeping data with no current purpose breaks the storage limitation principle, so the file shouldn't stay. But some records have to be kept for a set period, and deletions should be documented, so let the right person decide.", "Rätt. Att spara uppgifter utan något aktuellt syfte strider mot principen om lagringsminimering, så filen ska inte ligga kvar. Men vissa uppgifter måste sparas en viss tid, och raderingar bör dokumenteras, så låt rätt person avgöra."] },
            { id: "b",
              text: ["Delete it right away, since it's obviously outdated.", "Radera den direkt, eftersom den uppenbarligen är inaktuell."],
              fb: ["The instinct is right, but deleting on your own can remove something that must be kept, and leaves no record of what happened. Flag it instead.", "Instinkten är rätt, men om du raderar på egen hand kan du ta bort något som måste sparas, och det finns ingen dokumentation av vad som hände. Flagga den i stället."] },
            { id: "c",
              text: ["Leave it where it is, since you didn't create it.", "Låt den ligga kvar, eftersom det inte var du som skapade den."],
              fb: ["The file is still a risk while it sits there, and you're now one of the few people who knows about it. Flagging it takes one minute.", "Filen är fortfarande en risk så länge den ligger där, och nu är du en av få som känner till den. Att flagga den tar en minut."] }
          ]
        },
        {
          type: "choice", id: "t3", time: "14:30",
          speaker: ["Your manager", "Din chef"],
          prompt: [
            "\"The webinar was full! Let's email everyone who signed up and invite them to our paid course in the spring.\"",
            "”Webbinariet blev fullbokat! Vi mejlar alla som anmälde sig och bjuder in dem till vår betalkurs i vår.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Check with {{dp}} first, since people signed up for a webinar, not for sales emails.", "Kolla med {{dp}} först, eftersom de anmälde sig till ett webbinarium och inte till säljmejl."],
              fb: ["Right. Using data for a new purpose, such as marketing, has to be checked against what people were told when they signed up. There may be a way to do it, for example if the form offered a marketing opt-in, but that's a question to ask before sending, not after.", "Rätt. När uppgifter ska användas för ett nytt syfte, som marknadsföring, måste det stämmas av mot vad deltagarna fick veta när de anmälde sig. Det kan finnas ett sätt, till exempel om formuläret erbjöd ett samtycke till utskick, men det är en fråga att ställa innan ni skickar, inte efteråt."] },
            { id: "b",
              text: ["Send the invitation, since they've already shown interest in similar topics.", "Skicka inbjudan, eftersom de redan har visat intresse för liknande ämnen."],
              fb: ["Interest in a free webinar isn't consent to marketing. Sending sales emails without checking could break both GDPR and Swedish marketing law.", "Intresse för ett gratis webbinarium är inget samtycke till marknadsföring. Att skicka säljmejl utan att kontrollera kan bryta mot både GDPR och marknadsföringslagen."] },
            { id: "c",
              text: ["Send it, but add an unsubscribe link at the bottom.", "Skicka den, men lägg till en avregistreringslänk längst ner."],
              fb: ["An unsubscribe link is good practice, but it doesn't make the first email lawful. The question is whether you may send it at all, and that has to be checked first.", "En avregistreringslänk är bra, men den gör inte det första mejlet lagligt. Frågan är om ni får skicka det över huvud taget, och det måste kontrolleras först."] }
          ]
        }
      ],
      why: [
        "Three moments where data is created, kept and reused. Most data problems don't start with a dramatic breach; they start with an extra form field, a forgotten file, or a reasonable-sounding idea. Practising the pause at each of these moments builds the habit of asking, \"Do we actually need this, for this purpose?\"",
        "Tre ögonblick när uppgifter skapas, sparas och återanvänds. De flesta dataproblem börjar inte med en dramatisk incident, utan med ett extra fält i ett formulär, en bortglömd fil eller en idé som låter rimlig. När du övar på att stanna upp i vart och ett av de här ögonblicken bygger du vanan att fråga: ”Behöver vi verkligen det här, för det här syftet?”"
      ],
      takeaway: [
        "Collect only what the purpose needs, flag data that's no longer needed, and check with {{dp}} before using data for something new.",
        "Samla bara in det som syftet kräver, flagga uppgifter som inte längre behövs och kolla med {{dp}} innan uppgifter används till något nytt."
      ]
    },

    /* ------------------------------------------------------------- WEDNESDAY */
    {
      id: "wed",
      name: ["Wednesday", "Onsdag"],
      short: ["Wed", "Ons"],
      title: ["Sharing safely", "Dela säkert"],
      habit: 3,
      setup: [
        "Wednesday is a busy day of sharing: with a partner, with a group of learners, and with a supplier. Each situation feels routine, and each has a trap.",
        "Onsdagen är full av delning: med en partner, med en grupp deltagare och med en leverantör. Varje situation känns som rutin, och i varje finns en fälla."
      ],
      steps: [
        {
          type: "choice", id: "w1", time: "10:00",
          prompt: [
            "You need to send a partner school a spreadsheet of 45 learners and their results. The file is too large for email. A colleague says, \"Just use that free file-transfer site. Or paste the comments into an AI chatbot first and get a summary. Much faster.\"",
            "Du ska skicka ett kalkylblad med 45 deltagare och deras resultat till en partnerskola. Filen är för stor för mejl. En kollega säger: ”Använd bara den där gratissajten för filöverföring. Eller klistra in kommentarerna i en AI-chattbot först och få en sammanfattning. Mycket snabbare.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Use one of the approved tools: {{tools}}.", "Använd ett av de godkända verktygen: {{tools}}."],
              fb: ["Right. Approved tools have been checked: where the data is stored, who can access it, and whether there's an agreement with the supplier. A free file-transfer site or a public AI chatbot may store the data outside the EU, or use it for other purposes, and Morfos would have no control over it.", "Rätt. De godkända verktygen är kontrollerade: var uppgifterna lagras, vem som kommer åt dem och om det finns ett avtal med leverantören. En gratis överföringssajt eller en öppen AI-chattbot kan lagra uppgifterna utanför EU eller använda dem för andra syften, och Morfos skulle inte ha någon kontroll över dem."] },
            { id: "b",
              text: ["Use the free file-transfer site, but delete the file afterwards.", "Använd gratissajten för filöverföring, men radera filen efteråt."],
              fb: ["Once uploaded, you can't be sure where the data is stored or who has access, and deleting your link doesn't necessarily delete their copy. Use an approved tool.", "När filen väl är uppladdad kan du inte veta var uppgifterna lagras eller vem som kommer åt dem, och att radera din länk raderar inte nödvändigtvis deras kopia. Använd ett godkänt verktyg."] },
            { id: "c",
              text: ["Paste the learners' comments into the AI chatbot to create a summary, then share only the summary.", "Klistra in deltagarnas kommentarer i AI-chattboten för att få en sammanfattning, och dela sedan bara sammanfattningen."],
              fb: ["The summary might be fine, but pasting the comments gives the chatbot provider personal data, possibly including names and sensitive details. Only use AI tools that are on the approved list, for the purposes they're approved for.", "Sammanfattningen kanske är okej, men när du klistrar in kommentarerna lämnar du personuppgifter till chattbotens leverantör, kanske även namn och känsliga detaljer. Använd bara AI-verktyg som finns på listan över godkända verktyg, och bara för det de är godkända för."] }
          ]
        },
        {
          type: "choice", id: "w2", time: "13:15",
          prompt: [
            "You're sending a reminder about tomorrow's session to all 40 participants. How do you address the email?",
            "Du ska skicka en påminnelse om morgondagens träff till alla 40 deltagare. Hur adresserar du mejlet?"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Use the mailing function in an approved tool, or put the addresses in BCC.", "Använd utskicksfunktionen i ett godkänt verktyg, eller lägg adresserna som hemlig kopia (BCC)."],
              fb: ["Right. Each participant gets the message without seeing the others' addresses.", "Rätt. Varje deltagare får meddelandet utan att se de andras adresser."] },
            { id: "b",
              text: ["Put all 40 addresses in the To field. They're all on the same course anyway.", "Lägg alla 40 adresser i Till-fältet. De går ju ändå samma kurs."],
              fb: ["Being on the same course doesn't mean they've agreed to share their email addresses with each other. This exact mistake is one of the most commonly reported data breaches.", "Att de går samma kurs betyder inte att de har gått med på att dela sina mejladresser med varandra. Just det här misstaget är en av de vanligaste incidenterna som rapporteras."] },
            { id: "c",
              text: ["Put the addresses in CC, so everyone knows who else was reminded.", "Lägg adresserna som kopia (CC), så att alla ser vilka andra som fick påminnelsen."],
              fb: ["CC shows the addresses just like To does. Use BCC or a mailing tool.", "Kopia (CC) visar adresserna precis som Till-fältet. Använd hemlig kopia (BCC) eller ett utskicksverktyg."] }
          ]
        },
        {
          type: "choice", id: "w3", time: "16:00",
          speaker: ["A software company", "Ett mjukvaruföretag"],
          prompt: [
            "\"There's a bug in your booking system. If you give us login access to the learner database, we can fix it tonight.\"",
            "”Det finns en bugg i ert bokningssystem. Om ni ger oss inloggning till deltagardatabasen kan vi fixa det i kväll.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Say you need to check first, and bring it to {{dp}} and your IT contact before giving any access.", "Säg att du måste kontrollera först, och ta upp det med {{dp}} och er IT-kontakt innan du ger någon åtkomst."],
              fb: ["Right. A supplier who can access personal data needs a data processing agreement before they get access, and IT needs to confirm that the request is genuine. Checking takes a day; fixing unauthorised access takes much longer.", "Rätt. En leverantör som kan komma åt personuppgifter behöver ett personuppgiftsbiträdesavtal innan de får åtkomst, och IT måste bekräfta att förfrågan är äkta. Att kontrollera tar en dag; att reda ut obehörig åtkomst tar mycket längre tid."] },
            { id: "b",
              text: ["Give them access. The system needs fixing and they're the experts.", "Ge dem åtkomst. Systemet måste fixas och de är experterna."],
              fb: ["Even if the company is genuine, giving access without an agreement means the data is being handled unlawfully. Requests like this are also a common tactic in fraud.", "Även om företaget är äkta innebär åtkomst utan avtal att uppgifterna hanteras olagligt. Förfrågningar som den här är dessutom ett vanligt bedrägeriknep."] },
            { id: "c",
              text: ["Send them a copy of the database, so they don't need to log in.", "Skicka en kopia av databasen till dem, så att de inte behöver logga in."],
              fb: ["This hands over all the data at once, with even less control than access would give. Nothing should be shared until the agreement and the request have been checked.", "Då lämnar du ut alla uppgifter på en gång, med ännu mindre kontroll än en inloggning skulle ge. Ingenting ska delas förrän avtalet och förfrågan har kontrollerats."] }
          ]
        }
      ],
      why: [
        "Three forms of sharing, one principle. Sharing data is part of everyday work, and most of the time it's done quickly. These three situations use different channels (a file, an email, a supplier), but the same question applies to each: is this an approved way to share, with the right people? Practising the same principle in different forms helps you recognise it when the next situation looks different again.",
        "Tre sätt att dela, en princip. Att dela uppgifter är en del av vardagen, och oftast går det snabbt. De här tre situationerna använder olika kanaler (en fil, ett mejl, en leverantör), men samma fråga gäller för alla: är det här ett godkänt sätt att dela, med rätt personer? När du övar samma princip i olika former blir det lättare att känna igen den när nästa situation ser annorlunda ut."
      ],
      takeaway: [
        "Share personal data only through {{tools}}, only with the people who need it, and check with {{dp}} before giving any outside party access.",
        "Dela personuppgifter bara via {{tools}}, bara med dem som behöver dem, och kolla med {{dp}} innan någon utomstående får åtkomst."
      ]
    },

    /* -------------------------------------------------------------- THURSDAY */
    {
      id: "thu",
      name: ["Thursday", "Torsdag"],
      short: ["Thu", "Tors"],
      title: ["The wrong Anna", "Fel Anna"],
      habit: 4,
      setup: [
        "It's 15:40 on Thursday. You're sending the updated course register to Anna Lindqvist at a partner school: 180 learners, with names, email addresses and phone numbers. Two minutes after sending, you notice the email autocompleted to a different Anna, at an external supplier you worked with last spring. Your stomach drops. Nobody else has noticed.",
        "Klockan är 15:40 på torsdagen. Du skickar det uppdaterade kursregistret till Anna Lindqvist på en partnerskola: 180 deltagare med namn, mejladresser och telefonnummer. Två minuter efter att du tryckt på skicka ser du att adressen autofylldes till en annan Anna, hos en extern leverantör som du jobbade med i våras. Det sjunker i magen. Ingen annan har märkt något."
      ],
      steps: [
        {
          type: "choice", id: "h1", time: "15:42",
          prompt: ["What do you do first?", "Vad gör du först?"],
          options: [
            { id: "a", correct: true,
              text: ["Report it right away to {{dp}} through {{channel}}, and note the time you noticed.", "Rapportera det direkt till {{dp}} via {{channel}}, och anteckna när du upptäckte det."],
              fb: ["Right. The organisation has 72 hours from becoming aware of a breach to decide whether to notify the supervisory authority (IMY in Sweden), and that time can start as soon as you know. Reporting quickly is the most useful thing you can do, and it's exactly what's expected of you. Mistakes like this happen; hiding them is the real problem.", "Rätt. Organisationen har 72 timmar från att den fått kännedom om en incident på sig att avgöra om den ska anmälas till Integritetsskyddsmyndigheten (IMY), och den tiden kan börja löpa så fort du vet. Att rapportera snabbt är det mest användbara du kan göra, och det är precis vad som förväntas av dig. Sådana misstag händer – det är att dölja dem som är det verkliga problemet."] },
            { id: "b",
              text: ["Email the wrong Anna, ask her to delete the message, and consider it handled if she agrees.", "Mejla fel Anna, be henne radera meddelandet och se saken som löst om hon går med på det."],
              fb: ["Understandable, but not enough on its own. Asking the recipient to delete it may well be part of the response, but whether the incident is handled isn't your decision to make. {{dp}} needs to know, because the risk must be assessed and the incident documented, even if it turns out to be harmless.", "Förståeligt, men inte tillräckligt. Att be mottagaren radera mejlet kan mycket väl ingå i hanteringen, men det är inte ditt beslut om incidenten är löst. {{dp}} behöver veta, eftersom risken måste bedömas och incidenten dokumenteras, även om den visar sig vara ofarlig."] },
            { id: "c",
              text: ["Wait and mention it to your manager at tomorrow's meeting.", "Vänta och ta upp det med din chef på morgondagens möte."],
              fb: ["Too late. The clock can start when you noticed, not when you're ready to talk about it. Waiting until tomorrow uses up almost a day of the time the organisation has to act.", "För sent. Klockan kan börja ticka när du upptäckte det, inte när du är redo att prata om det. Att vänta till i morgon äter upp nästan ett dygn av den tid organisationen har på sig."] },
            { id: "d",
              text: ["Try to recall the message in your email program, and report only if the recall fails.", "Försök återkalla meddelandet i mejlprogrammet, och rapportera bara om det misslyckas."],
              fb: ["Recalling rarely works on messages sent outside the organisation, and you can't confirm whether it succeeded. Try it if you like, but report at the same time rather than afterwards.", "Att återkalla fungerar sällan för mejl som skickats utanför organisationen, och du kan inte se om det lyckades. Prova gärna, men rapportera samtidigt och inte efteråt."] }
          ]
        },
        {
          type: "choice", id: "h2", time: "15:45",
          speaker: ["{{dp}}", "{{dp}}"],
          prompt: ["\"Thanks for telling me straight away. What exactly was sent?\"", "”Tack för att du sa till direkt. Vad var det exakt som skickades?”"],
          ask: ["How do you answer?", "Hur svarar du?"],
          options: [
            { id: "a", correct: true,
              text: ["Describe it: what was sent, when, to whom, roughly how many people are affected, and what kind of information it contained.", "Beskriv det: vad som skickades, när, till vem, ungefär hur många som berörs och vilken sorts uppgifter det gällde."],
              fb: ["Right. Those are the facts needed to assess the risk. Describing the data is enough; there's no need to send it again.", "Rätt. Det är de fakta som behövs för att bedöma risken. Det räcker att beskriva uppgifterna; du behöver inte skicka dem igen."] },
            { id: "b",
              text: ["Forward the original email with the register attached, so they can see exactly what was sent.", "Vidarebefordra originalmejlet med registret bifogat, så att de ser exakt vad som skickades."],
              fb: ["This spreads the data further, into another inbox, another thread, and possibly more backups. Describe what was sent instead. If {{dp}} needs the file itself, they'll tell you how to share it safely.", "Då sprids uppgifterna ännu mer, till en till inkorg, en till tråd och kanske fler säkerhetskopior. Beskriv i stället vad som skickades. Om {{dp}} behöver själva filen får du veta hur du delar den säkert."] },
            { id: "c",
              text: ["Say it was \"just a contact list\" so it doesn't seem too serious.", "Säg att det ”bara var en kontaktlista”, så att det inte verkar så allvarligt."],
              fb: ["Understating the incident can lead to the wrong decision. Names, email addresses and phone numbers for 180 people is exactly the kind of detail needed to judge the risk correctly. Give the facts and let them assess it.", "Om du tonar ner incidenten kan det leda till fel beslut. Namn, mejladresser och telefonnummer till 180 personer är precis den sortens detaljer som behövs för att bedöma risken rätt. Ge fakta och låt dem bedöma."] }
          ]
        },
        {
          type: "choice", id: "h3", time: "17:20",
          prompt: [
            "The wrong Anna replies: \"No worries, I've deleted it without opening it.\" A colleague says, \"Great, then you can tell data protection it's sorted and cancel the report.\"",
            "Fel Anna svarar: ”Inga problem, jag har raderat det utan att öppna det.” En kollega säger: ”Toppen, då kan du säga till dataskyddet att det är löst och dra tillbaka rapporten.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Forward Anna's reply to {{dp}} so it becomes part of their assessment.", "Vidarebefordra Annas svar till {{dp}}, så att det blir en del av bedömningen."],
              fb: ["Right. Her confirmation is important information, and it may well mean the authority doesn't need to be notified. But that decision, and the documentation behind it, belongs to {{dp}}. Every incident must be recorded, even ones that end well.", "Rätt. Hennes bekräftelse är viktig information, och den kan mycket väl innebära att incidenten inte behöver anmälas till IMY. Men det beslutet, och dokumentationen bakom det, ligger hos {{dp}}. Alla incidenter ska dokumenteras, även de som slutar bra."] },
            { id: "b",
              text: ["Tell {{dp}} it's resolved and the report can be closed.", "Säg till {{dp}} att det är löst och att rapporten kan stängas."],
              fb: ["It may turn out to be low risk, but closing the case isn't your decision. Pass on the new information and let them decide what happens next.", "Det kan visa sig vara låg risk, men det är inte ditt beslut att stänga ärendet. För vidare den nya informationen och låt dem avgöra vad som händer sedan."] },
            { id: "c",
              text: ["Do nothing more. Anna deleted it, so the problem is gone.", "Gör ingenting mer. Anna har raderat det, så problemet är borta."],
              fb: ["The incident still has to be documented, and {{dp}} is still assessing it without the latest information. Forward the reply so they can make the right decision.", "Incidenten måste fortfarande dokumenteras, och {{dp}} bedömer den utan den senaste informationen. Vidarebefordra svaret så att rätt beslut kan fattas."] }
          ]
        }
      ],
      why: [
        "Rehearsing the hard moment. Most breaches that go unreported aren't hidden out of ignorance but out of embarrassment and the hope that everything will turn out fine. Practising the decision to report your own mistake, in a situation that feels real, gives you a ready-made plan for the moment it actually happens. Psychologists call this an implementation intention: \"If I notice a mistake, I report it immediately.\" Decisions made in advance are far easier to follow under stress.",
        "Att öva på det svåra ögonblicket. De flesta incidenter som aldrig rapporteras döljs inte av okunskap, utan av skam och förhoppningen att allt ska ordna sig. När du övar på beslutet att rapportera ditt eget misstag, i en situation som känns verklig, har du en färdig plan för när det faktiskt händer. Psykologer kallar det en genomförandeavsikt: ”Om jag märker ett misstag rapporterar jag det direkt.” Beslut som är fattade i förväg är mycket lättare att följa under stress."
      ],
      takeaway: [
        "If something goes wrong with personal data, report it to {{dp}} straight away, with the facts, even if it was your mistake and even if it seems to have resolved itself.",
        "Om något går fel med personuppgifter, rapportera det till {{dp}} direkt och med fakta, även om det var ditt misstag och även om det verkar ha löst sig självt."
      ]
    },

    /* ---------------------------------------------------------------- FRIDAY */
    {
      id: "fri",
      name: ["Friday", "Fredag"],
      short: ["Fri", "Fre"],
      title: ["Four messages before lunch", "Fyra meddelanden före lunch"],
      habit: 5,
      inbox: true,
      setup: [
        "It's Friday, 08:30. Before the weekend you want to clear your inbox. Four messages are waiting. One thing to know first: when someone asks about their personal data, the organisation has one month to respond, and the month starts when anyone at Morfos receives the request, including you, today.",
        "Det är fredag, 08:30. Innan helgen vill du tömma inkorgen. Fyra meddelanden väntar. En sak att veta först: när någon frågar om sina personuppgifter har organisationen en månad på sig att svara, och månaden börjar när vem som helst på Morfos tar emot begäran – även du, i dag."
      ],
      steps: [
        {
          type: "choice", id: "f1", message: true,
          from: ["A former learner", "En tidigare deltagare"],
          subject: ["Your newsletter", "Ert nyhetsbrev"],
          prompt: [
            "\"I keep getting your newsletter even though I never signed up. I'd like to know what information you actually have about me and where you got it from. Very annoying.\"",
            "”Jag får hela tiden ert nyhetsbrev fast jag aldrig har anmält mig. Jag vill veta vilka uppgifter ni faktiskt har om mig och var ni har fått dem ifrån. Väldigt irriterande.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Forward it to {{dp}} today, and let the sender know it has been passed on.", "Skicka det vidare till {{dp}} i dag, och meddela avsändaren att det har lämnats vidare."],
              fb: ["Right. It looks like a complaint, but it contains two requests: to see their data (a right of access) and, in effect, to stop the marketing. Both have legal consequences and deadlines, so {{dp}} needs it today.", "Rätt. Det ser ut som ett klagomål, men det innehåller två begäranden: att få se sina uppgifter (rätt till tillgång, ett så kallat registerutdrag) och i praktiken att slippa marknadsföringen. Båda har rättsliga följder och tidsgränser, så {{dp}} behöver få det i dag."] },
            { id: "b",
              text: ["Unsubscribe them from the newsletter and reply with an apology.", "Avregistrera personen från nyhetsbrevet och svara med en ursäkt."],
              fb: ["Stopping the newsletter is good, but it only handles half the message. The question \"what information do you have about me?\" is an access request, and it has a one-month deadline that started when you received it.", "Att stoppa nyhetsbrevet är bra, men det hanterar bara halva meddelandet. Frågan ”vilka uppgifter har ni om mig?” är en begäran om registerutdrag, och den har en tidsgräns på en månad som började löpa när du fick mejlet."] },
            { id: "c",
              text: ["Forward it to marketing, since it's about the newsletter.", "Skicka det till marknadsavdelningen, eftersom det handlar om nyhetsbrevet."],
              fb: ["Marketing may need to know, but the access request would likely get lost there. Requests about personal data go to {{dp}}.", "Marknadsavdelningen kan behöva veta, men begäran om registerutdrag skulle troligen försvinna där. Frågor om personuppgifter går till {{dp}}."] }
          ]
        },
        {
          type: "choice", id: "f2", message: true,
          from: ["Reception", "Receptionen"],
          subject: ["Phone call this morning", "Telefonsamtal i morse"],
          prompt: [
            "\"A learner called this morning: 'Please delete everything you have about me, I'm finished with your courses.' Could you deal with it?\"",
            "”En deltagare ringde i morse: ’Radera allt ni har om mig, jag är klar med era kurser.’ Kan du ta hand om det?”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Forward the note to {{dp}} today, including the caller's name and the time of the call.", "Skicka lappen vidare till {{dp}} i dag, med uppringarens namn och tiden för samtalet."],
              fb: ["Right. A request to delete data is valid even when it's made by phone and in casual words. There's no special form or wording required. {{dp}} will check the caller's identity and decide what can be deleted.", "Rätt. En begäran om radering gäller även när den görs per telefon och med vardagliga ord. Det krävs ingen särskild blankett eller formulering. {{dp}} kontrollerar uppringarens identitet och avgör vad som kan raderas."] },
            { id: "b",
              text: ["Ask reception to tell the learner they must submit the request in writing on the official form.", "Be receptionen säga till deltagaren att begäran måste lämnas skriftligt på den officiella blanketten."],
              fb: ["A request can't be refused just because it wasn't made on a form, and asking for one can delay the response. Forward what you have. {{dp}} can contact the person if more information is needed.", "En begäran kan inte avvisas bara för att den inte gjordes på en blankett, och att kräva en kan försena svaret. Skicka vidare det du har. {{dp}} kan kontakta personen om mer information behövs."] },
            { id: "c",
              text: ["Delete the learner from your own course lists, since that's what they asked for.", "Ta bort deltagaren från dina egna kurslistor, eftersom det var det hen bad om."],
              fb: ["Well meant, but deleting data yourself can cause problems. Some records may have to be kept by law, such as invoices, and the deletion needs to be documented. Leave it to {{dp}}.", "Välment, men att radera på egen hand kan ställa till problem. Vissa uppgifter kan behöva sparas enligt lag, till exempel fakturor, och raderingen behöver dokumenteras. Låt {{dp}} sköta det."] }
          ]
        },
        {
          type: "choice", id: "f3", message: true,
          from: ["Unknown address", "Okänd adress"],
          subject: ["Sara Ek's certificate", "Sara Eks intyg"],
          prompt: [
            "\"Hi, I'm Sara Ek's husband. She asked me to sort out her course certificate. Could you send me her grades and attendance record? She's very busy at the moment.\"",
            "”Hej, jag är Sara Eks man. Hon bad mig ordna hennes kursintyg. Kan du skicka hennes betyg och närvaro till mig? Hon har väldigt mycket just nu.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Don't send anything. Forward the message to {{dp}}.", "Skicka ingenting. Vidarebefordra meddelandet till {{dp}}."],
              fb: ["Right. There's no way to know whether this person is who they claim to be, or whether Sara has actually agreed. Sending her data to the wrong person would be a breach. {{dp}} can verify the request with Sara herself.", "Rätt. Du kan inte veta om personen är den han säger sig vara, eller om Sara verkligen har gått med på det. Att skicka hennes uppgifter till fel person vore en incident. {{dp}} kan kontrollera begäran med Sara själv."] },
            { id: "b",
              text: ["Send the information, since he knows her name and which course she's taking.", "Skicka uppgifterna, eftersom han vet hennes namn och vilken kurs hon går."],
              fb: ["Knowing someone's name and course proves very little, and that information is often easy to find. Helpfulness is exactly what this kind of message relies on. Don't send anything, and forward the message instead.", "Att känna till någons namn och kurs bevisar väldigt lite, och de uppgifterna är ofta lätta att hitta. Den här sortens meddelanden bygger just på att du vill vara hjälpsam. Skicka ingenting, utan vidarebefordra meddelandet i stället."] },
            { id: "c",
              text: ["Reply asking him to confirm his identity, then send the information if his answer seems convincing.", "Svara och be honom styrka sin identitet, och skicka sedan uppgifterna om svaret verkar övertygande."],
              fb: ["Better than sending it immediately, but it still leaves you to judge identity and consent on your own. That's a decision for {{dp}}, who can contact Sara directly.", "Bättre än att skicka direkt, men du måste fortfarande bedöma identitet och samtycke på egen hand. Det beslutet ligger hos {{dp}}, som kan kontakta Sara direkt."] }
          ]
        },
        {
          type: "choice", id: "f4", message: true,
          from: ["A current learner", "En nuvarande deltagare"],
          subject: ["Carpooling", "Samåkning"],
          prompt: [
            "\"Hi! Could you send me the contact list for our course group? A few of us want to arrange carpooling.\"",
            "”Hej! Kan du skicka kontaktlistan för vår kursgrupp? Några av oss vill ordna samåkning.”"
          ],
          options: [
            { id: "a", correct: true,
              text: ["Don't send the list, but offer to pass the learner's message on to the group so anyone interested can reply.", "Skicka inte listan, men erbjud dig att föra vidare meddelandet till gruppen, så att de som är intresserade kan svara."],
              fb: ["Right. This isn't a request about the learner's own data. It's a request for other people's contact details, which they gave for the course, not for carpooling. Passing the message on solves the actual problem without sharing anyone's data. There's nothing to forward to {{dp}} here; this is simply good everyday judgement.", "Rätt. Det här är ingen begäran om deltagarens egna uppgifter, utan om andras kontaktuppgifter, som de lämnade för kursen och inte för samåkning. Att föra vidare meddelandet löser själva problemet utan att någons uppgifter delas. Här finns inget att skicka vidare till {{dp}}; det är helt enkelt sunt omdöme i vardagen."] },
            { id: "b",
              text: ["Send the list, since it's for a good cause and they're all on the same course.", "Skicka listan, eftersom det är för en god sak och de går samma kurs."],
              fb: ["A good cause, but the others gave their details for the course, not so fellow learners could contact them. Using data for a new purpose needs a basis, and in this case there's an easier solution.", "En god sak, men de andra lämnade sina uppgifter för kursen, inte för att kurskamrater skulle kunna kontakta dem. Att använda uppgifter för ett nytt syfte kräver en grund, och här finns en enklare lösning."] },
            { id: "c",
              text: ["Forward it to {{dp}} as a data request.", "Skicka det vidare till {{dp}} som en begäran om personuppgifter."],
              fb: ["It's good to be careful, but this isn't a request from someone about their own data, so it doesn't need to be forwarded. The key is simply not to share the list. Offering to pass the message on solves it.", "Det är bra att vara försiktig, men det här är ingen begäran från någon om deras egna uppgifter, så det behöver inte skickas vidare. Det viktiga är helt enkelt att inte dela listan. Att erbjuda sig att föra vidare meddelandet löser saken."] }
          ]
        }
      ],
      why: [
        "Telling similar situations apart. The four messages look alike on the surface, but each calls for a different response, and one of them isn't a data request at all. Practising mixed cases teaches you to notice what a message is really asking, which is the skill a real inbox demands. Requests rarely announce themselves; they arrive as complaints, phone calls, favours and friendly questions.",
        "Att skilja liknande situationer åt. De fyra meddelandena liknar varandra på ytan, men vart och ett kräver olika åtgärder, och ett av dem är inte alls en begäran om personuppgifter. När du övar på blandade fall lär du dig se vad ett meddelande egentligen handlar om, och det är den förmågan en riktig inkorg kräver. Begäranden presenterar sig sällan som sådana; de kommer som klagomål, telefonsamtal, tjänster och vänliga frågor."
      ],
      takeaway: [
        "If someone asks about, wants to change, or wants to delete their own personal data, however they phrase it, forward it to {{dp}} the same day. If someone asks for another person's data, don't send it.",
        "Om någon frågar om, vill ändra eller vill radera sina egna personuppgifter, hur de än uttrycker det, skicka det vidare till {{dp}} samma dag. Om någon ber om en annan persons uppgifter, skicka dem inte."
      ]
    }
  ],

  /* ----------------------------------------------------------- FINAL CHECK */
  final: [
    {
      id: "q1", habit: 4,
      prompt: [
        "You realise that the shared folder with learners' certificates, including their personal identity numbers, has been set to \"anyone with the link can view\" for several weeks.",
        "Du upptäcker att den delade mappen med deltagarnas intyg, där även personnumren finns, har varit inställd på ”alla med länken kan se” i flera veckor."
      ],
      options: [
        { id: "a", correct: true,
          text: ["Report it to {{dp}} straight away, and restrict the link at the same time if you can.", "Rapportera det till {{dp}} direkt, och begränsa länken samtidigt om du kan."],
          fb: ["Right. Stopping further exposure is sensible, but it doesn't replace the report. {{dp}} needs to know now so the risk can be assessed within the 72-hour window.", "Rätt. Att stoppa vidare spridning är klokt, men det ersätter inte rapporten. {{dp}} behöver veta nu, så att risken kan bedömas inom 72-timmarsfristen."] },
        { id: "b",
          text: ["Restrict the link quietly. Nobody seems to have used it, so there's no harm done.", "Begränsa länken i tysthet. Ingen verkar ha använt den, så ingen skada är skedd."],
          fb: ["Restricting the link is a good first move, but you can't know who has seen the files. Whether there was harm is for {{dp}} to assess, so report it too.", "Att begränsa länken är ett bra första steg, men du kan inte veta vem som har sett filerna. Om någon skada har skett är för {{dp}} att bedöma, så rapportera det också."] },
        { id: "c",
          text: ["Check the access log yourself first, to find out whether anyone opened the files, then decide whether to report.", "Kontrollera själv åtkomstloggen först, för att se om någon har öppnat filerna, och bestäm sedan om du ska rapportera."],
          fb: ["Investigating on your own uses up time the organisation needs, and the log may not tell the whole story. Report first; {{dp}} will decide what needs checking.", "Att utreda på egen hand äter upp tid som organisationen behöver, och loggen kanske inte visar hela bilden. Rapportera först; {{dp}} avgör vad som behöver kontrolleras."] }
      ]
    },
    {
      id: "q2", habit: 1,
      prompt: [
        "You're tidying a learner file. Which of these notes needs the most care?",
        "Du städar i en deltagarakt. Vilken av de här anteckningarna kräver mest försiktighet?"
      ],
      options: [
        { id: "a",
          text: ["\"L-1043 scored 74% on the module 2 test.\"", "”L-1043 fick 74 % på provet i modul 2.”"],
          fb: ["This is personal data, since the ID can be linked to a person, but it isn't a special category.", "Det här är en personuppgift, eftersom id:t kan kopplas till en person, men det är ingen särskild kategori."] },
        { id: "b", correct: true,
          text: ["\"Has dyslexia and gets extra time on tests.\"", "”Har dyslexi och får förlängd tid på prov.”"],
          fb: ["Right. A diagnosis is health information, one of the special categories. It should only be used for the adjustment it was given for, and only shared with those who need it.", "Rätt. En diagnos är en uppgift om hälsa, en av de särskilda kategorierna. Den ska bara användas för den anpassning den lämnades för, och bara delas med dem som behöver den."] },
        { id: "c",
          text: ["\"The course had 112 participants this term.\"", "”Kursen hade 112 deltagare den här terminen.”"],
          fb: ["A total for a large group doesn't identify anyone, so this isn't personal data.", "En siffra för en stor grupp identifierar ingen, så det här är ingen personuppgift."] }
      ]
    },
    {
      id: "q3", habit: 3,
      prompt: [
        "A colleague asks you to email the full learner list to her private Gmail address so she can work on it at home over the weekend.",
        "En kollega ber dig mejla hela deltagarlistan till hennes privata Gmail-adress, så att hon kan jobba med den hemma i helgen."
      ],
      options: [
        { id: "a",
          text: ["Send it, but protect the file with a password.", "Skicka den, men skydda filen med ett lösenord."],
          fb: ["A password helps, but the list still ends up in a private account Morfos has no control over. Point her to an approved tool instead.", "Ett lösenord hjälper, men listan hamnar ändå i ett privat konto som Morfos inte har någon kontroll över. Hänvisa henne till ett godkänt verktyg i stället."] },
        { id: "b",
          text: ["Send it. She's a colleague and already has access to the list at work.", "Skicka den. Hon är en kollega och har redan tillgång till listan på jobbet."],
          fb: ["Having access at work doesn't make a private email account a safe place for the data. Once it's there, Morfos can't protect it or delete it.", "Att hon har tillgång på jobbet gör inte ett privat mejlkonto till en säker plats för uppgifterna. När de väl är där kan Morfos varken skydda eller radera dem."] },
        { id: "c", correct: true,
          text: ["Don't send it. Suggest she opens it from home through {{tools}}.", "Skicka den inte. Föreslå att hon öppnar den hemifrån via {{tools}}."],
          fb: ["Right. She can still do her work, and the data stays in a tool Morfos controls.", "Rätt. Hon kan fortfarande göra sitt jobb, och uppgifterna stannar i ett verktyg som Morfos har kontroll över."] }
      ]
    },
    {
      id: "q4", habit: 5,
      prompt: [
        "The phone rings. \"Hi, I did one of your courses last year. Can you tell me what notes you have about me in your system?\"",
        "Telefonen ringer. ”Hej, jag gick en av era kurser förra året. Kan du berätta vilka anteckningar ni har om mig i ert system?”"
      ],
      options: [
        { id: "a",
          text: ["Look the person up and read the notes out over the phone.", "Sök upp personen och läs upp anteckningarna i telefon."],
          fb: ["You can't confirm who you're talking to, and reading data out on the phone could hand it to the wrong person. Pass the request on instead.", "Du kan inte veta vem du pratar med, och om du läser upp uppgifter i telefon kan de hamna hos fel person. Skicka vidare begäran i stället."] },
        { id: "b", correct: true,
          text: ["Take their name and contact details, explain that the request will be handled, and forward it to {{dp}} today.", "Anteckna namn och kontaktuppgifter, förklara att begäran kommer att hanteras och skicka den vidare till {{dp}} i dag."],
          fb: ["Right. This is an access request, even though it came as a casual phone call. The one-month deadline has already started, and {{dp}} will check the caller's identity.", "Rätt. Det här är en begäran om registerutdrag, även om den kom som ett vardagligt telefonsamtal. Tidsgränsen på en månad har redan börjat löpa, och {{dp}} kontrollerar uppringarens identitet."] },
        { id: "c",
          text: ["Tell them they need to send a formal written request before anything can happen.", "Säg att de måste skicka en formell skriftlig begäran innan något kan hända."],
          fb: ["There's no required form or wording for a request. Asking for one only delays it. Forward what you have.", "Det finns ingen obligatorisk blankett eller formulering för en begäran. Att kräva en försenar bara. Skicka vidare det du har."] }
      ]
    },
    {
      id: "q5", habit: 2,
      prompt: [
        "Your manager wants to add a field for personal identity number (personnummer) to the newsletter sign-up form, \"so we can avoid duplicates\".",
        "Din chef vill lägga till ett fält för personnummer i anmälan till nyhetsbrevet, ”så att vi slipper dubbletter”."
      ],
      options: [
        { id: "a",
          text: ["Add it, but make the field optional.", "Lägg till det, men gör fältet frivilligt."],
          fb: ["Optional fields still collect data. If the purpose doesn't need it, the field shouldn't be there at all.", "Även frivilliga fält samlar in uppgifter. Om syftet inte kräver det ska fältet inte finnas alls."] },
        { id: "b", correct: true,
          text: ["Point out that the email address already prevents duplicates, and check with {{dp}} before adding anything.", "Påpeka att mejladressen redan förhindrar dubbletter, och kolla med {{dp}} innan något läggs till."],
          fb: ["Right. A newsletter doesn't need a personal identity number, and in Sweden these may only be used when it's clearly justified. The email address does the job.", "Rätt. Ett nyhetsbrev behöver inget personnummer, och i Sverige får personnummer bara användas när det är klart motiverat. Mejladressen räcker."] },
        { id: "c",
          text: ["Add it. Duplicates waste time, and that's a good enough reason.", "Lägg till det. Dubbletter tar tid, och det är skäl nog."],
          fb: ["Saving a little admin time doesn't justify collecting one of the most sensitive identifiers in Sweden. Collect only what the purpose needs.", "Att spara lite administration motiverar inte att samla in en av de mest känsliga identifierarna i Sverige. Samla bara in det som syftet kräver."] }
      ]
    }
  ]
};
