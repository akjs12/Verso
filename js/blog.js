/* =========================================================================
   blog.js — Verso Blog: central data store + rendering helpers
   This file holds all dummy content (authors, categories, tags, posts) and
   the reusable functions used to render blog cards, sidebars, and single
   post pages across the whole site. Every other JS module reads from the
   `VERSO` namespace defined here.
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     1. AUTHORS
     --------------------------------------------------------------------- */
  const authors = [
    {
      id: "a1",
      name: "Maya Okonkwo",
      avatar: "https://i.pravatar.cc/150?img=32",
      role: "Senior Editor",
      bio: "Maya writes about the intersection of technology and everyday life. She has spent a decade covering the tools that quietly reshape how we work.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: "a2",
      name: "Daniel Reyes",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Design Columnist",
      bio: "Daniel is a product designer turned writer, obsessed with typography, grids, and the small decisions that make interfaces feel human.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: "a3",
      name: "VESRSO",
      avatar: "images/IMG_20260829_113428.png",
      role: "Science Correspondent",
      bio: "Priya trained as a biologist before turning to journalism. She translates dense research into stories anyone can follow.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: "a4",
      name: "Tomasz Novak",
      avatar: "https://i.pravatar.cc/150?img=51",
      role: "Business Writer",
      bio: "Tomasz covers startups, markets, and the strategy behind the scenes. Formerly an analyst, now a full-time explainer of things.",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      id: "a5",
      name: "Hana Kobayashi",
      avatar: "https://i.pravatar.cc/150?img=26",
      role: "Wellness & Travel",
      bio: "Hana writes about slow travel, deliberate living, and the habits that hold up under a busy life.",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  /* ---------------------------------------------------------------------
     2. CATEGORIES
     --------------------------------------------------------------------- */
  const categories = [
    { id: "technology", name: "Technology", icon: "💻", desc: "Tools, platforms, and the code behind them." },
    { id: "design", name: "Design", icon: "🎨", desc: "Typography, interfaces, and visual craft." },
    { id: "productivity", name: "Productivity", icon: "⏱️", desc: "Working with focus in a distracted world." },
    { id: "culture", name: "Culture", icon: "📰", desc: "Ideas, media, and the way we live now." },
    { id: "science", name: "Science", icon: "🔬", desc: "Research, discovery, and how we know things." },
    { id: "travel", name: "Travel", icon: "🧭", desc: "Notes from the road and the reasons to leave." },
    { id: "business", name: "Business", icon: "📈", desc: "Strategy, startups, and how work gets done." },
    { id: "wellness", name: "Wellness", icon: "🌿", desc: "Rest, health, and staying human at speed." }
    ];

  /* ---------------------------------------------------------------------
     3. TAGS (30)
     --------------------------------------------------------------------- */
  const tags = [
    "javascript", "css", "accessibility", "startups", "remote-work",
    "typography", "minimalism", "ai", "privacy", "open-source",
    "habits", "focus", "climate", "space", "psychology",
    "branding", "ux-research", "hiring", "japan", "hiking",
    "finance", "sleep", "nutrition", "writing", "books",
    "photography", "architecture", "Competitive Exams ", "gardening", "history",
    "education", "students", "future-of-learning"
  ];

  /* ---------------------------------------------------------------------
     4. POSTS (20)
     Each post has rich HTML `content` used on the single post page, plus
     summary fields used everywhere else (cards, sidebar, search).
     --------------------------------------------------------------------- */
  const posts = [
    {
      id: 1,
      slug: "how-ai-is-changing-student-learning-2026",
      title: "How AI Is Changing the Way Students Learn in 2026",
      excerpt: "AI is changing how students study, research, practice, and prepare for exams in 2026. Discover how AI is reshaping education and what students need to know.",
      category: "technology",
      tags: ["minimalism", "ux-research", "focus"],
      author: "a3",
      date: "2026-07-18",
      readTime: 7,
      views: 5820,
      image: "images/blogimages1.png",
      featured: true,
      content: `
           <p>Artificial intelligence is no longer something students hear about only in technology news. In 2026, AI has become part of everyday learning. Students are using AI tools to understand difficult concepts, summarize information, practice questions, improve writing, learn programming, and prepare for exams.</p>

    <p>But AI is doing more than simply helping students finish homework faster. It is changing how learning itself happens.</p>

    <p>A student can now ask an AI system to explain a difficult topic in simple language, generate practice questions based on a subject, identify mistakes in an answer, or create a personalized study plan. What once required hours of searching through books and websites can sometimes be done in minutes.</p>

    <p>At the same time, this convenience creates an important question: <strong>Are students learning more, or are they simply getting answers faster?</strong></p>

    <h2>The Rise of AI in Education</h2>

    <p>Education has always adopted new technologies. Computers brought digital learning into classrooms, smartphones made information available almost instantly, and online courses allowed students to learn from anywhere.</p>

    <p>AI is the next major step.</p>

    <p>Unlike traditional search engines, AI systems can interact with students through conversation. Instead of searching for a specific answer, students can describe what they do not understand and ask for an explanation.</p>

    <h2>AI as a Personal Tutor</h2>

    <p>One of the biggest changes AI brings to education is personalized assistance.</p>

    <p>In a traditional classroom, one teacher may have to teach dozens of students at the same time. Every student has a different learning speed and different weaknesses.</p>

    <p>AI can provide additional support outside the classroom.</p>

    <p>A student who understands a topic quickly can move to more difficult problems. Another student who needs more practice can ask for simpler explanations and additional examples.</p>

    <h2>Faster Research and Note-Making</h2>

    <p>Research is another area where AI is changing student workflows.</p>

    <p>AI tools can help summarize long material, organize ideas, create outlines, and explain unfamiliar terminology.</p>

    <p>However, students still need to verify important information. AI systems can sometimes produce incorrect or outdated answers.</p>

    <h2>Personalized Study Plans</h2>

    <p>Creating a study schedule can be difficult, especially when students have multiple subjects, assignments, and examinations.</p>

    <p>AI can help students turn a large syllabus into smaller tasks and suggest a structured study plan.</p>

    <h2>AI and Exam Preparation</h2>

    <p>Exam preparation is one of the most useful applications of AI for students.</p>

    <p>AI can generate practice questions, multiple-choice questions, flashcards, revision summaries, mock tests, and topic-based quizzes.</p>

    <p>Students can also ask AI to evaluate their answers and explain where they went wrong.</p>

    <h2>Learning Programming With AI</h2>

    <p>Programming education is also changing rapidly.</p>

    <p>Students learning Python, JavaScript, Java, and C++ can use AI to explain code, identify errors, suggest improvements, and generate small examples.</p>

    <p>However, copying AI-generated code without understanding it can create problems. Students should use AI for explanations, hints, debugging guidance, and alternative approaches.</p>

    <h2>The Problem With AI Dependency</h2>

    <p>AI can make learning easier, but convenience can become a weakness.</p>

    <p>If students use AI for every assignment, essay, calculation, or programming problem, they may gradually lose the habit of thinking through difficult problems themselves.</p>

    <blockquote>Try first. Ask AI second. Understand the answer third.</blockquote>

    <h2>Can AI Replace Teachers?</h2>

    <p>Despite rapid improvements in AI, teachers remain important.</p>

    <p>A teacher does more than provide information. Teachers motivate students, notice confusion, provide human feedback, and help students develop communication and social skills.</p>

    <p>The future of education is therefore more likely to involve teachers working with AI rather than AI completely replacing teachers.</p>

    <h2>The Skills Students Still Need</h2>

    <p>As AI becomes better at generating information, some human skills become even more important.</p>

    <h3>Critical Thinking</h3>
    <p>AI can produce convincing answers that are still wrong. Students need to question information and verify important claims.</p>

    <h3>Problem Solving</h3>
    <p>Getting an answer is not the same as understanding how to reach it.</p>

    <h3>Communication</h3>
    <p>Students still need to explain ideas clearly to teachers, classmates, colleagues, and future employers.</p>

    <h3>Creativity</h3>
    <p>AI can generate ideas, but students need to decide which ideas are useful, original, and appropriate.</p>

    <h3>Digital Literacy</h3>
    <p>Students should understand AI's capabilities, limitations, privacy considerations, and potential for producing inaccurate information.</p>

    <h2>The Future of Learning</h2>

    <p>The most interesting change may not be that AI gives students answers. It is that learning can become increasingly personalized.</p>

    <p>Imagine a student having an AI learning assistant that understands their current level, remembers which topics they struggle with, creates practice exercises, tracks progress, and changes the difficulty as they improve.</p>

    <p>This could make education more adaptable than a one-size-fits-all system.</p>

    <h2>Conclusion</h2>

    <p>AI is changing education in 2026 by making learning more interactive, personalized, and accessible.</p>

    <p>Students can use AI to understand difficult concepts, practice for exams, organize research, learn programming, and build personalized study plans.</p>

    <p>But the most successful students will not necessarily be those who use AI the most.</p>

    <p>They will be the students who know how to use AI without allowing AI to do all the thinking for them.</p>

    <p>The future of education may not be humans versus AI. It may be humans using AI to become better learners.</p>
      `
    },
    {
      id: 2,
      slug: "c-programming-why-it-still-matters-2026",
      title: "C Programming: Way it Sill Matters in 2026",
      excerpt: "C may be decades old, but it remains one of the most important programming languages for understanding software, memory, hardware, and computer systems.",
      category: "technology",
      tags: ["css", "typography", "ux-research"],
      author: "a3",
      date: "2026-07-22",
      readTime: 9,
      views: 8120,
      image: "images/C programming.png",
      featured: true,
      content: `
        <p>C Programming: Why It Still Matters in 2026

C is one of the most important programming languages in computer science. Although it was created more than 50 years ago, C is still widely used in 2026 for operating systems, embedded systems, compilers, device drivers, and high-performance software.

What Is C Programming?

C is a general-purpose programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It was designed to create efficient system software while giving programmers control over computer memory and hardware.

Its simple syntax and powerful features made C one of the most influential programming languages ever created.

Why Should Students Learn C?

For computer science and engineering students, C provides a strong programming foundation.

By learning C, students understand important concepts such as:

- Variables and data types
- Conditional statements
- Loops
- Functions
- Arrays
- Pointers
- Structures
- Memory management
- File handling

These concepts are useful when learning other programming languages and advanced computer science subjects.

Where Is C Used?

C is still used in many areas of technology.

Operating Systems

Parts of operating systems such as Linux and other system-level software use C because of its performance and low-level control.

Embedded Systems

C is widely used in microcontrollers, electronics, automobiles, industrial machines, and IoT devices.

Compilers

Many compilers and system tools are written using C or technologies based on C.

Device Drivers

C is useful for developing software that allows operating systems to communicate with hardware devices.

A Simple C Program

#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}

This is one of the simplest C programs. The "main()" function is the starting point of the program, while "printf()" displays text on the screen.

C vs Modern Programming Languages

Languages such as Python, JavaScript, Java, and C++ are popular for modern application development. However, C continues to have an important role because it provides direct control over memory and system resources.

Python may allow developers to write programs quickly, but C helps students understand what is happening at a lower level.

Is C Difficult to Learn?

C can feel difficult at first, especially when students start learning pointers and memory management. However, learning it step by step makes the process much easier.

A good learning path is:

Basics → Conditions → Loops → Functions → Arrays → Pointers → Structures → File Handling → Data Structures

Conclusion

C programming remains relevant because it teaches the fundamentals of how software works at a deeper level. For students, learning C is not only about writing programs. It is about developing logical thinking and understanding the relationship between software, memory, and hardware.

Even in 2026, C remains a valuable language for anyone who wants to build a strong foundation in computer science . </p>
      `
    },
    {
      id: 3,
      slug: "thomas-alva-edison-history-inventor",
      title: "Thomas Alva Edison Biography: Life, Inventions, and Legacy",
      excerpt: "Discover the life of Thomas Alva Edison, his famous inventions, the electric light bulb, phonograph, motion pictures, and the lasting legacy he left on modern technology.",
      category: "science",
      tags: ["science", "history", "inventions", "technology"],
      author: "a3",
      date: "2026-08-28",
      readTime: 9,
      views: 8120,
      image: "images/IMG_20260828_152327.png",
      featured: true,
      content: `
        <p>Thomas Alva Edison was one of the most influential inventors in history. His work transformed everyday life through innovations in electric lighting, sound recording, motion pictures, telecommunications, and electrical power systems.</p>
        <p>Although Edison is often remembered simply as the inventor of the electric light bulb, his real achievement was much larger. He helped develop technologies and businesses that made electric power and several new forms of communication practical for ordinary people.</p>
        <h2 id="early-life">Early Life</h2>
        <p><code>Thomas Alva Edison was born on February 11, 1847, in Milan, Ohio, United States.</code> He was the youngest of seven children.</p>
        <p>When Edison was a child, he had difficulty fitting into the traditional school system. He attended school for only a short period. His mother, Nancy Edison, played an important role in his education and encouraged his curiosity.</p>
        <p>Edison became fascinated by science and technology at a young age. He enjoyed conducting experiments and reading scientific books. His curiosity eventually developed into a lifelong passion for invention.</p>
        <h2 id="first-experience-with-work-and-telegraphy">His First Experience With Work and Telegraphy</h2>
        <p>As a teenager, Edison worked as a newspaper seller and telegraph operator. His work with the telegraph introduced him to electrical technology.</p>
        <p>He began experimenting with electrical devices and eventually developed improvements to telegraph equipment.</p>
        <p>His early experience with telegraphy became an important foundation for his later inventions.</p>
        <h2 id="edison-becomes-an-inventor">Edison Becomes an Inventor</h2>
        <p>Edison moved to different cities while working on electrical and communication technologies. In the late 1860s and early 1870s, he began earning money from inventions and patents.</p>
        <p>One of his important early successes was the stock ticker, a machine used to transmit stock price information.</p>
        <p>His growing success allowed him to establish laboratories where he could work with other researchers and technicians.</p>
        <h2 id="menlo-park">Menlo Park: The Invention Factory</h2>
        <p>In 1876, Edison established a research laboratory in Menlo Park, New Jersey.</p>
        <p>The laboratory became famous for its systematic approach to invention. Edison and his team worked on multiple experiments and tested different materials and designs.</p>
        <p>Instead of relying only on individual inspiration, Edison developed a process of continuous experimentation.</p>
        <p>This approach helped produce a large number of inventions and improvements.</p>
        <h2 id="the-electric-light-bulb">The Electric Light Bulb</h2>
        <p>Edison is most famously associated with the electric light bulb.</p>
        <p>However, he did not invent the first electric light. Earlier scientists and inventors had already created forms of electric lighting.</p>
        <p>Edison's major contribution was developing a practical and commercially useful incandescent lighting system.</p>
        <p>In 1879, his team demonstrated an incandescent lamp that could operate for a much longer period than many earlier designs.</p>
        <p>But the lamp itself was only one part of Edison's achievement. He also worked on generators, wiring, switches, meters, and other components needed to distribute electricity.</p>
        <p>This helped establish the foundations of an electrical power system.</p>
        <h2 id="first-commercial-electric-power-system">The First Commercial Electric Power System</h2>
        <p>Edison understood that electric lighting would be useful only if electricity could be generated and delivered to customers.</p>
        <p>In 1882, the Edison Illuminating Company began operating a central power station on Pearl Street in New York City.</p>
        <p>The station supplied electricity to nearby customers and became an important milestone in the development of commercial electric power.</p>
        <p>This was a major step toward the widespread use of electricity in cities.</p>
        <h2 id="the-phonograph">The Phonograph</h2>
        <p>Another major Edison invention was the phonograph.</p>
        <p>In 1877, Edison developed a machine capable of recording and reproducing sound.</p>
        <p>The phonograph was revolutionary because, for the first time, people could record sounds and listen to them later.</p>
        <p>The invention made Edison internationally famous and demonstrated that recorded sound could become a practical technology.</p>
        <h2 id="motion-pictures">Motion Pictures</h2>
        <p>Edison also played an important role in the early development of motion pictures.</p>
        <p>His laboratory developed devices and technologies for recording and viewing moving images, including the Kinetograph camera and Kinetoscope viewing system.</p>
        <p>These inventions contributed to the development of the early film industry.</p>
        <h2 id="edison-and-nikola-tesla">Edison and Nikola Tesla</h2>
        <p>Edison's career is also connected to one of the most famous technological rivalries in history: the competition between direct current (DC) and alternating current (AC) electrical systems.</p>
        <p><code>Edison strongly supported DC power.</code> Other inventors and engineers, including Nikola Tesla, promoted AC technology.</p>
        <p>The competition became known as the War of the Currents.</p>
        <p>Eventually, AC became widely adopted for long-distance electricity transmission because of its practical advantages for transmitting power over large distances.</p>
        <p>Despite this, Edison's work on electrical generation, distribution, and lighting remained highly influential.</p>
        <h2 id="edison-as-an-entrepreneur">Edison as an Entrepreneur</h2>
        <p>Edison was not only an inventor. He was also an entrepreneur who understood the importance of turning inventions into useful products and businesses.</p>
        <p>Throughout his career, he worked with engineers, technicians, scientists, and business partners.</p>
        <p>He accumulated more than 1,000 U.S. patents, making him one of the most prolific inventors of his era.</p>
        <p>His laboratories also helped establish an early model of organized industrial research and development.</p>
        <h2 id="challenges-and-failures">Challenges and Failures</h2>
        <p>Edison's success did not come without failure.</p>
        <p>He performed thousands of experiments, and many of them did not produce the desired results.</p>
        <p>His approach was based on testing different ideas, learning from unsuccessful experiments, and continuing to improve the design.</p>
        <p>This is one reason Edison became associated with the idea that successful invention requires persistence.</p>
        <h2 id="later-life">Later Life</h2>
        <p>During his later years, Edison continued working on new technologies and scientific projects.</p>
        <p>He experimented with batteries, mining technologies, chemicals, motion pictures, and other areas.</p>
        <p>Even as he became internationally famous, he continued spending considerable time in his laboratories.</p>
        <p>Thomas Edison died on October 18, 1931, at his home in West Orange, New Jersey, at the age of 84.</p>
        <h2 id="edisons-legacy">Edison's Legacy</h2>
        <p>Thomas Edison left a lasting impact on technology and modern society.</p>
        <p>His work helped accelerate the development of:</p>
        <blockquote>
          Electric lighting<br>
          Commercial power systems<br>
          Sound recording<br>
          Motion-picture technology<br>
          Telegraph and communication technology<br>
          Electrical equipment<br>
          Industrial research laboratories
        </blockquote>
        <p>His greatest legacy was not a single invention. It was his approach to invention: experiment, test, improve, and try again.</p>
        <h2 id="conclusion-edison">Conclusion</h2>
        <p>Thomas Alva Edison was more than the man associated with the light bulb. He was an inventor, businessman, experimenter, and one of the key figures in the transition to the modern technological age.</p>
        <p>His career shows that innovation is rarely the result of one successful experiment. It often comes from repeated testing, failure, improvement, teamwork, and persistence.</p>
        <p>More than a century after many of his inventions, Edison's influence can still be seen in the technologies and industries that shape everyday life.</p>
        <p>Thomas Edison did not simply invent devices. He helped build an environment in which invention could become an industry.</p>
      `
    },
    {
      id: 4,
      slug: "four-day-week-six-months-later",
      title: "The Four-Day Week, Six Months Later",
      excerpt: "We followed three companies that switched to a four-day week. The results were less dramatic than the headlines — and more interesting.",
      category: "productivity",
      tags: ["remote-work", "focus", "habits"],
      author: "a3",
      date: "2026-06-30",
      readTime: 6,
      views: 4310,
      image: "https://picsum.photos/id/20/1200/700",
      content: `
        <p>The pitch is simple: cut a day, keep the pay, watch output hold steady. The reality, six months in, is a little messier.</p>
        <h2 id="what-held">What held up</h2>
        <p>Meeting load dropped by nearly a third across all three companies, mostly because "quick syncs" stopped being scheduled by default.</p>
        <h2 id="what-broke">What quietly broke</h2>
        <p>Customer support coverage needed a rethink. Two of the three companies ended up staggering the day off across the team rather than closing entirely.</p>
        <blockquote>"The four-day week didn't fix our calendar problem. It just made the calendar problem impossible to ignore." — an operations lead we interviewed.</blockquote>
        <h2 id="the-real-lesson">The real lesson</h2>
        <p>The companies that succeeded treated the fifth day as a forcing function to cut meetings and tools, not as a schedule change bolted onto an unchanged workflow.</p>
      `
    },
    {
      id: 5,
      slug: "inside-a-decade-long-telescope-project",
      title: "Inside a Decade-Long Telescope Project",
      excerpt: "A look at the engineering, politics, and patience required to build an instrument designed to outlive most of the people building it.",
      category: "science",
      tags: ["space", "history"],
      author: "a3",
      date: "2026-07-05",
      readTime: 10,
      views: 6100,
      image: "https://picsum.photos/id/28/1200/700",
      content: `
        <p>Some engineering projects are measured in months. This one is measured in careers.</p>
        <h2 id="the-mirror">The mirror problem</h2>
        <p>Grinding a mirror to the required precision took longer than expected, not because of the grinding itself, but because of how long it takes glass to stop moving after being touched.</p>
        <h2 id="funding-in-decades">Funding across decades</h2>
        <p>Three different funding bodies, two changes of national government, and one near-cancellation later, the project is finally in its testing phase.</p>
        <blockquote>"You learn to write proposals for people who won't be in office when the money is spent." — a project scientist.</blockquote>
        <h2 id="first-light">Waiting for first light</h2>
        <p>"First light," the moment a telescope opens its eye for the first time, is treated with a kind of reverence usually reserved for launches.</p>
      `
    },
    {
      id: 6,
      slug: "notes-from-three-weeks-in-kyoto",
      title: "Notes From Three Weeks in Kyoto",
      excerpt: "A slower kind of travel journal — on temples, timing, and the discipline of doing very little on purpose.",
      category: "travel",
      tags: ["japan", "hiking", "writing"],
      author: "a3",
      date: "2026-05-14",
      readTime: 8,
      views: 3980,
      image: "https://picsum.photos/id/48/1200/700",
      content: `
        <p>I went to Kyoto with a list of forty places to see. I saw six of them properly, and I don't regret a single one I skipped.</p>
        <h2 id="arriving-slow">Arriving slow</h2>
        <p>The first two days were jet-lagged and useless for sightseeing, so I used them for nothing but walking the same three streets near where I stayed.</p>
        <h2 id="the-temple-that-mattered">The temple that mattered</h2>
        <p>Not the famous one. A small, half-empty temple on a hill where the caretaker let me sit on the veranda for an hour without saying a word.</p>
        <blockquote>Travel slower than feels efficient, and the trip remembers you back.</blockquote>
        <h2 id="a-short-packing-note">A short packing note</h2>
        <p>Good shoes and one book you're willing to finish. Everything else you can buy or borrow.</p>
      `
    },
    {
      id: 7,
      slug: "the-hidden-cost-of-context-switching",
      title: "The Hidden Cost of Context Switching",
      excerpt: "Every notification costs more than the two seconds it takes to glance at it. Here's what the research actually says about the price of interruption.",
      category: "productivity",
      tags: ["focus", "psychology", "habits"],
      author: "a3",
      date: "2026-07-01",
      readTime: 6,
      views: 7210,
      image: "https://picsum.photos/id/60/1200/700",
      content: `
        <p>The average knowledge worker is interrupted every few minutes, and the return trip back to deep focus takes far longer than the interruption itself.</p>
        <h2 id="the-real-number">The real number</h2>
        <p>Estimates of "recovery time" after an interruption vary, but nearly all of them land well above the length of the interruption that caused it.</p>
        <h2 id="what-actually-helps">What actually helps</h2>
        <p>Batching communication into two or three windows a day beats trying to respond instantly and "make up" the focus time later.</p>
        <blockquote>Attention doesn't restart where it left off. It restarts from zero.</blockquote>
      `
    },
    {
      id: 8,
      slug: "designing-for-people-who-hate-forms",
      title: "Designing for People Who Hate Forms",
      excerpt: "Forms are where good intentions go to die. A practical guide to making them shorter, kinder, and less likely to be abandoned.",
      category: "design",
      tags: ["ux-research", "accessibility", "typography"],
      author: "a3",
      date: "2026-06-12",
      readTime: 7,
      views: 5340,
      image: "https://picsum.photos/id/96/1200/700",
      content: `
        <p>Nobody opens your form because they want to. They open it because it's standing between them and something they actually want.</p>
        <h2 id="ask-less">Ask for less than you want</h2>
        <p>Every field you remove is a small act of respect. Ask for what you need now, and ask for the rest later, only if you still need it.</p>
        <h2 id="errors-that-help">Errors that help instead of scold</h2>
        <p>"Invalid input" tells a person nothing. "Phone numbers need 10 digits, no spaces" tells them exactly what to fix.</p>
        <blockquote>A form's job is to get out of the way, not to prove the user wrong.</blockquote>
      `
    },
    {
      id: 9,
      slug: "what-open-source-maintainers-actually-do",
      title: "What Open-Source Maintainers Actually Do All Day",
      excerpt: "Spoiler: it's mostly not writing code. A week shadowing three maintainers of widely used libraries.",
      category: "technology",
      tags: ["open-source", "javascript", "hiring"],
      author: "a3",
      date: "2026-06-25",
      readTime: 8,
      views: 4990,
      image: "https://picsum.photos/id/119/1200/700",
      content: `
        <p>Ask a maintainer what they did this week and the answer is rarely "shipped a feature." It's usually "closed forty issues, reviewed twelve PRs, and wrote one very careful comment."</p>
        <h2 id="the-triage-tax">The triage tax</h2>
        <p>Sorting new issues into "bug," "already answered," and "not actually a bug" takes up a surprising share of maintainer time.</p>
        <h2 id="saying-no-well">Saying no, well</h2>
        <p>A good maintainer rejects most feature requests, but does it in a way that leaves the door open and the contributor undiscouraged.</p>
        <blockquote>Maintaining is mostly editing other people's confidence, not your own code.</blockquote>
      `
    },
    {
      id: 10,
      slug: "the-economics-of-a-five-dollar-coffee",
      title: "The Economics of a Five-Dollar Coffee",
      excerpt: "Where does your money actually go when you buy a coffee? We traced the supply chain from farm to cup.",
      category: "business",
      tags: ["finance", "history"],
      author: "a3",
      date: "2026-05-30",
      readTime: 5,
      views: 3720,
      image: "https://picsum.photos/id/225/1200/700",
      content: `
        <p>Roughly speaking, the farmer sees a small fraction of what you pay. The rest is split between shipping, roasting, rent, labor, and, finally, profit.</p>
        <h2 id="the-farm-side">The farm side</h2>
        <p>Price volatility on green coffee futures can wipe out a season's margin for a small farm before the beans even leave the country.</p>
        <h2 id="the-cafe-side">The cafe side</h2>
        <p>Rent and labor, not beans, are usually the largest line items on a coffee shop's cost sheet — which is why the price rarely tracks the commodity market directly.</p>
      `
    },
    {
      id: 11,
      slug: "sleep-is-not-a-productivity-hack",
      title: "Sleep Is Not a Productivity Hack",
      excerpt: "Framing sleep as an optimization input misses the point entirely — and might be making things worse.",
      category: "wellness",
      tags: ["sleep", "habits", "psychology"],
      author: "a3",
      date: "2026-07-10",
      readTime: 6,
      views: 6640,
      image: "https://picsum.photos/id/292/1200/700",
      content: `
        <p>There's an entire industry built around treating sleep as a lever to pull for better output. That framing might be part of the problem.</p>
        <h2 id="the-optimization-trap">The optimization trap</h2>
        <p>Tracking every metric of your sleep can, ironically, make it harder to fall asleep — a phenomenon researchers have started calling "orthosomnia."</p>
        <blockquote>Rest that's measured for performance stops being rest.</blockquote>
        <h2 id="simpler-rules">Simpler rules that hold up</h2>
        <p>Consistent wake time beats a perfect bedtime. Morning light matters more than most supplements. Most of the advice that works is boring.</p>
      `
    },
    {
      id: 12,
      slug: "a-short-history-of-the-hyperlink",
      title: "A Short History of the Hyperlink",
      excerpt: "The single most consequential piece of punctuation of the last thirty years, and how it nearly didn't happen.",
      category: "culture",
      tags: ["history", "writing"],
      author: "a3",
      date: "2026-04-18",
      readTime: 7,
      views: 2980,
      image: "https://picsum.photos/id/60/1200/701",
      content: `
        <p>Before the hyperlink, "linking" ideas meant footnotes, citations, and a great deal of trust that the reader would go find the book.</p>
        <h2 id="early-attempts">Early, clunky attempts</h2>
        <p>Several hypertext systems predate the web, most of them far more ambitious and far less usable than what eventually won out.</p>
        <h2 id="why-it-won">Why the simple version won</h2>
        <p>The one-directional, break-anytime link was technically inferior to earlier proposals — and that simplicity is exactly why it scaled.</p>
      `
    },
    {
      id: 13,
      slug: "nepal-flood-disaster-2026-rescue-operation",
      title: "Nepal Flood Disaster 2026: Thousands Affected as Rescue Operations Continue",
      excerpt: "A devastating flash flood near the Nepal-China border has caused massive destruction, leaving hundreds dead and thousands missing as rescue operations continue.",
      category: "travel",
      tags: ["accessibility", "css", "branding"],
      author: "a3",
      date: "2026-08-29",
      readTime: 9,
      views: 5570,
      image: "images/1787983164241.png",
      content: `
        <p>Nepal is facing one of its most devastating natural disasters in recent years after catastrophic flash floods struck areas near the Nepal-China border.</p>

<p>The disaster, which severely affected the Himalayan region including parts of Rasuwa district, caused widespread destruction to villages, roads, bridges and important infrastructure. Rescue teams are continuing their operations as authorities search for thousands of missing people.</p>

<h2 id="disaster-within-minutes">A Disaster That Happened Within Minutes</h2>

<p>According to early reports, the devastating flood may have been triggered by a glacier and ice-rock collapse in the Himalayan region. The collapse caused a sudden surge of water and debris through river valleys.</p>

<p>The floodwaters moved rapidly, giving many residents and visitors very little time to escape.</p>

<p>Several settlements were damaged, while roads, bridges and hydropower facilities were badly affected. The disaster has also created serious challenges for transportation and communication in the mountainous region.</p>

<h2 id="dead-and-missing">Hundreds Dead and Thousands Missing</h2>

<p>The scale of the tragedy has continued to grow as rescue teams reach more affected areas.</p>

<p>Recent reports indicate that hundreds of people have died, while thousands remain missing. Many of those affected include local residents, workers, tourists and foreign nationals visiting the Himalayan region.</p>

<p>Rescue operations have been made difficult by bad weather conditions, damaged roads and the dangerous mountain terrain.</p>

<p>Authorities have deployed thousands of security personnel and emergency workers to search for survivors and provide assistance to affected communities.</p>

<h2 id="rescue-challenges">Rescue Operations Face New Challenges</h2>

<p>The situation remains dangerous because of unstable conditions in the mountains.</p>

<p>Reports have warned about additional flooding risks caused by temporary lakes and blocked rivers formed after landslides and glacier collapses. Rescue teams have occasionally been forced to stop operations because of concerns about fresh floods and avalanches.</p>

<p>Helicopters, security forces and emergency teams are working to evacuate survivors from isolated areas.</p>

<h2 id="reconstruction-challenge">Nepal Faces a Huge Reconstruction Challenge</h2>

<p>Apart from the human tragedy, Nepal is now facing massive economic damage.</p>

<p>The destruction of roads, bridges, homes and energy infrastructure could require billions of dollars for reconstruction. The disaster has also affected tourism and trade routes near the Nepal-China border.</p>

<p>The government is expected to face a long and difficult recovery process after the immediate rescue operations are completed.</p>

<h2 id="climate-risks">Growing Climate Risks in the Himalayas</h2>

<p>Scientists have warned that warming temperatures are increasing risks in the Himalayan region.</p>

<p>Melting glaciers, unstable mountain slopes and changing weather patterns can increase the chances of avalanches, landslides and sudden floods.</p>

<p>The Nepal disaster has once again highlighted the importance of better early-warning systems, glacier monitoring and disaster preparedness in Himalayan communities.</p>

<h2 id="conclusion">Conclusion</h2>

<p>The Nepal flood disaster of 2026 is a tragic reminder of how quickly natural disasters can destroy entire communities.</p>

<p>While rescue teams continue searching for survivors, thousands of families are waiting for news about their loved ones. The coming weeks will be critical for relief operations, rehabilitation and rebuilding the affected regions.</p>

<p>Nepal now faces not only an immediate humanitarian crisis but also a long-term challenge of rebuilding communities and preparing for future climate-related disasters.</p>

<h2 id="related-video">Watch Related Video</h2>

<blockquote
  class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/reel/Dcf-9Mbogsn/"
  data-instgrm-version="14"
  style="background:#FFF; border:0; border-radius:8px; margin:20px auto; max-width:540px; min-width:326px; width:100%;">
</blockquote>
</p>
      `
    },
    {
      id: 14,
      slug: "the-quiet-return-of-the-personal-website",
      title: "The Quiet Return of the Personal Website",
      excerpt: "As platforms consolidate and algorithms flatten everyone's voice, a small but growing number of people are going back to their own domain.",
      category: "culture",
      tags: ["writing", "minimalism", "branding"],
      author: "a3",
      date: "2026-06-02",
      readTime: 5,
      views: 4460,
      image: "https://picsum.photos/id/145/1200/700",
      content: `
        <p>It turns out owning your own words, on your own domain, was always a good idea — it just took the algorithm changing a few too many times for people to remember.</p>
        <h2 id="why-now">Why now</h2>
        <p>Feed-based platforms reward a narrow band of content. A personal site rewards whatever the owner actually wants to say.</p>
        <blockquote>A website you own can be boring on purpose. A feed almost never lets you.</blockquote>
      `
    },
    {
      id: 15,
      slug: "how-startups-actually-decide-on-pricing",
      title: "How Startups Actually Decide on Pricing",
      excerpt: "Spoiler: it's rarely a spreadsheet. Conversations with five founders about the messy reality of setting a price.",
      category: "business",
      tags: ["startups", "finance", "hiring"],
      author: "a3",
      date: "2026-07-08",
      readTime: 8,
      views: 3990,
      image: "https://picsum.photos/id/160/1200/700",
      content: `
        <p>Every founder says they did "extensive market research." Most of them mean they asked ten friends and picked a number that felt uncomfortable.</p>
        <h2 id="the-uncomfortable-rule">The uncomfortable-number rule</h2>
        <p>A price that makes you slightly nervous to say out loud is, more often than not, closer to correct than one that feels safe.</p>
        <h2 id="raising-later">Why raising later is harder than raising early</h2>
        <p>Existing customers anchor hard to the price they signed up at, which makes the first price you choose far more sticky than founders expect.</p>
      `
    },
    {
      id: 16,
      slug: "nashik-history-culture-places-to-visit",
      title: "Nashik: The City Where History, Spirituality and Modern Life Meet",
      excerpt: "Explore Nashik, a city where ancient history, spirituality, nature, vineyards and modern life come together. Discover its famous temples, caves, forts and scenic attractions.",
      category: "travel",
      tags: ["javascript", "open-source", "startups"],
      author: "a3",
      date: "2026-07-25",
      readTime: 7,
      views: 9040,
      image: "images/IMG_20260829_120423.png",
      featured: true,
      content: `
        <p>
<p>Nashik is one of Maharashtra’s most fascinating cities. Located on the banks of the Godavari River, the city brings together ancient temples, historical landmarks, vineyards, forts, caves and a growing modern lifestyle.
</p>

<p>Often associated with the Ramayana, Nashik has developed from an ancient pilgrimage centre into one of Maharashtra’s important modern cities. Its combination of culture, nature and history makes it a destination worth exploring.
</p>
A City With Thousands of Years of History

Nashik has a long historical background. Archaeological evidence from the Godavari region indicates human habitation in the area going back to the Chalcolithic period, around 1,400–1,300 BCE.

The region later became important under the Satavahanas because of its location on ancient trade routes. Over the centuries, different dynasties influenced Nashik, leaving behind temples, caves, inscriptions and architectural heritage.

Nashik also played a role in India's freedom movement. The city was connected with several important events and personalities, including Anant Kanhere and Dr. B. R. Ambedkar's social reform movement.

Panchavati and the Ramayana Connection

For many visitors, Nashik's identity begins with Panchavati.

According to traditional accounts associated with the Ramayana, Lord Rama, Sita and Lakshmana spent part of their exile in the region. Panchavati remains an important pilgrimage area, with places such as Ramkund, Sita Gufa and Kalaram Temple attracting visitors throughout the year.

The Godavari River flowing through the city adds another layer to Nashik's spiritual identity.

Trimbakeshwar: A Major Spiritual Landmark

One of Nashik's most famous attractions is Trimbakeshwar Temple, located about 28 kilometres from Nashik city.

The temple is one of the twelve Jyotirlingas dedicated to Lord Shiva. The surrounding Brahmagiri hills are also associated with the origin of the Godavari River.

The temple's black-stone architecture and its religious importance make Trimbakeshwar one of the most significant destinations in the Nashik region.

Pandavleni Caves and Ancient Heritage

Nashik is not only about temples. The Pandavleni Caves offer a glimpse into the region's Buddhist history.

Located on Trirasmi Hill, the caves contain rock-cut structures, sculptures, water tanks and inscriptions dating from approximately the 3rd century BCE to the 6th century CE.

For history lovers, Pandavleni is one of the places that shows how diverse Nashik's cultural past really is.

Nashik and the Wine Industry

Modern Nashik has another identity: it is widely known as India's wine capital.

The district has a major concentration of vineyards and wineries. Places such as Sula Vineyards have helped make Nashik popular among tourists looking for vineyard tours, scenic experiences and food tourism.

This is one of the clearest examples of how Nashik combines its traditional identity with modern tourism.

Forts, Hills and Waterfalls

Nashik is also a good destination for people who enjoy trekking and nature.

Anjaneri is associated with the traditional belief that it was the birthplace of Lord Hanuman and offers trekking routes through the hills. Ramshej Fort is another important historical destination in the region.

During the monsoon, places around Nashik become especially attractive because of the greenery, waterfalls and hills. Someshwar Waterfall and other nearby natural attractions are popular during the rainy season.

Why Nashik Is Special

What makes Nashik different is not one single attraction. It is the combination.

You can visit an ancient temple in the morning, explore Buddhist caves in the afternoon, drive through vineyards later and watch the Godavari flow through the city in the evening.

Nashik connects history with modern life, spirituality with nature, and tradition with a growing urban culture.

Final Thoughts

Nashik is more than just a city to pass through on the way to another destination.

It is a place where ancient stories, historical monuments, religious traditions, vineyards, mountains and modern city life exist together.

Whether you are a history lover, a spiritual traveller, a trekker, a food enthusiast or simply someone looking for a peaceful weekend destination, Nashik has something to offer.

Nashik is a city that doesn't just have stories. It creates them.
      `
    },
    {
      id: 17,
      slug: "what-a-decade-of-climate-data-shows",
      title: "What a Decade of Climate Data Actually Shows",
      excerpt: "Setting aside the headlines, a plain look at what a full decade of consistent measurement tells us.",
      category: "science",
      tags: ["climate", "history"],
      author: "a3",
      date: "2026-06-20",
      readTime: 9,
      views: 6810,
      image: "https://picsum.photos/id/1043/1200/700",
      content: `
        <p>A single hot summer proves very little on its own. A decade of consistent measurement proves quite a lot.</p>
        <h2 id="the-consistent-signal">The consistent signal</h2>
        <p>The trend line matters more than any individual year, and a decade of data finally gives the trend line room to speak clearly.</p>
        <h2 id="what-surprised-researchers">What surprised researchers</h2>
        <p>Regional variation turned out to be larger than early models predicted, which has quietly reshaped how local adaptation plans are written.</p>
      `
    },
    {
      id: 18,
      slug: "how-to-read-a-financial-statement-in-ten-minutes",
      title: "How to Read a Financial Statement in Ten Minutes",
      excerpt: "You don't need an accounting degree to understand whether a company is healthy. Here's the shortest honest version.",
      category: "business",
      tags: ["finance", "hiring"],
      author: "a3",
      date: "2026-05-22",
      readTime: 6,
      views: 5120,
      image: "https://picsum.photos/id/201/1200/700",
      content: `
        <p>Three documents tell you almost everything: the income statement, the balance sheet, and the cash flow statement. Two of the three are more honest than the first.</p>
        <h2 id="follow-the-cash">Follow the cash, not the profit</h2>
        <p>A company can report a profit and still run out of cash. The cash flow statement is where that story actually shows up.</p>
        <h2 id="one-ratio-that-matters">One ratio worth remembering</h2>
        <p>Current assets divided by current liabilities gives a rough sense of whether a company can pay its near-term bills without borrowing.</p>
      `
    },
    {
      id: 19,
      slug: "the-lost-art-of-the-long-walk",
      title: "The Lost Art of the Long Walk",
      excerpt: "No podcast, no destination, no step count goal. Just a walk long enough to get bored, and what happens after that.",
      category: "wellness",
      tags: ["hiking", "psychology", "habits"],
      author: "a3",
      date: "2026-06-15",
      readTime: 5,
      views: 4210,
      image: "https://picsum.photos/id/338/1200/700",
      content: `
        <p>The first twenty minutes of an unstructured walk are usually restless. The next twenty are where something interesting tends to happen.</p>
        <h2 id="boredom-as-a-feature">Boredom as a feature, not a bug</h2>
        <p>A walk with no input is one of the few remaining places where a wandering mind is allowed to actually wander.</p>
        <blockquote>Nothing to listen to is, itself, worth listening to.</blockquote>
      `
    },
    {
      id: 20,
      slug: "the-architecture-of-a-good-library",
      title: "The Architecture of a Good Library",
      excerpt: "What makes a library feel like a library, structurally and emotionally? A tour of the design decisions that hold up over a century.",
      category: "culture",
      tags: ["architecture", "history", "books"],
      author: "a3",
      date: "2026-04-30",
      readTime: 8,
      views: 3340,
      image: "https://picsum.photos/id/24/1200/700",
      content: `
        <p>A good library building does one thing consistently: it makes silence feel like a feature of the room, not an imposition on the visitor.</p>
        <h2 id="light-over-decoration">Light over decoration</h2>
        <p>The best reading rooms are defined more by where the daylight falls than by any single ornamental detail.</p>
        <h2 id="the-stacks">Why the stacks still matter</h2>
        <p>Wandering physical shelves surfaces books a search bar never would, which is reason enough to keep building them.</p>
      `
    },
    {
      id: 21,
      slug: "ibps-po-vs-clerk-complete-guide-2026",
      title: "IBPS PO vs Clerk: Complete Guide for Banking Aspirants",
      excerpt: "IBPS PO and IBPS Clerk are popular banking exams for graduates in India. Learn the key differences, eligibility, selection process, preparation strategy, and career opportunities.",
      category: "productivity",
      tags: ["Competitive Exams", "hiring", "habits"],
      author: "a3",
      date: "2026-07-28",
      readTime: 7,
      views: 7990,
      image: "images/inpspoandcleark.png",
      featured: true,
      content: `
        <p>
        
<h2>Quick Overview</h2>

IBPS PO and IBPS Clerk are popular banking exams for graduates in India. PO is an officer-level role, while Clerk is a clerical position. Both offer career opportunities in participating public sector banks.

Banking jobs are among the most popular career options for graduates in India. The Institute of Banking Personnel Selection (IBPS) conducts recruitment examinations for various public sector bank positions.

Among the most popular exams are IBPS PO and IBPS Clerk. Both offer stable government-sector banking careers, but their job roles, responsibilities, selection process, and career growth are different.

<h2>What Is IBPS PO?</h2>

IBPS PO stands for Institute of Banking Personnel Selection Probationary Officer.

A Probationary Officer joins a participating public sector bank as an officer and receives training in different banking operations. The role can involve customer service, loans, account management, branch operations, and other banking responsibilities.

IBPS PO is generally considered a higher-level position than Clerk and offers greater responsibility and career growth.

<h2>What Is IBPS Clerk?</h2>

IBPS Clerk is a recruitment examination for clerical positions in participating public sector banks.

Clerks commonly handle customer-related banking activities, account services, cash operations, documentation, and other branch-level tasks.

With experience and internal promotions, a Clerk can also progress to higher positions in the banking sector.

<h2>IBPS PO vs IBPS Clerk</h2>

Feature| IBPS PO| IBPS Clerk
Position| Officer| Clerical
Responsibility| Higher| Moderate
Work| Officer-level banking operations| Customer and clerical operations
Career Growth| Faster/higher officer-level growth| Promotion opportunities available
Competition| High| High
Suitable For| Graduates targeting officer roles| Graduates seeking banking careers

<h2>Eligibility</h2>

Graduation is generally required for both IBPS PO and IBPS Clerk recruitment.

Candidates must also satisfy the age limit and other requirements mentioned in the particular year's official notification. Eligibility conditions can change, so aspirants should always check the latest IBPS notification before applying.

<h2>Selection Process</h2>

The selection process differs between PO and Clerk recruitment.<br>

IBPS PO<br>

The PO recruitment process generally includes:
<blockquote>
1. Preliminary Examination<br>
2. Main Examination<br>
3. Interview<br>
4. Final selection based on the recruitment process
</blockquote>

<h2>IBPS Clerk</h2>

The Clerk recruitment process generally includes:<br>

1. Preliminary Examination
2. Main Examination
3. Final selection according to the recruitment rules

The exact examination pattern, marks, sections, and selection rules can change from year to year.

<h2>What Should You Study?</h2>

Aspirants should focus on the major areas tested in banking examinations:

Quantitative Aptitude<br>

Topics generally include arithmetic, percentages, profit and loss, averages, ratios, data interpretation, simplification, and number-based problems.<br>

Reasoning Ability<br>

Important areas include puzzles, seating arrangements, syllogism, inequalities, coding-decoding, blood relations, and logical reasoning.<br>

English Language

Preparation generally includes reading comprehension, vocabulary, grammar, sentence arrangement, error detection, and cloze tests.

General and Banking Awareness

Candidates should follow current affairs and learn important banking, financial, economic, and general awareness topics.

How to Prepare for IBPS Exams

Preparation becomes easier when students follow a consistent routine.

Start by understanding the syllabus and examination pattern. Then strengthen basic concepts before moving to timed practice.<br>

A simple preparation strategy is:<br>

<blockquote>Learn concepts → Solve basic questions → Practice topic-wise → Take mock tests → Analyze mistakes → Improve speed and accuracy
</blockquote>
Regular mock tests are particularly useful because banking examinations are highly time-sensitive.

<h2>PO or Clerk: Which One Should You Choose?</h2>

If your goal is to become a bank officer and you are comfortable with greater responsibility, IBPS PO can be the better target.

If you prefer starting with a clerical position and want to build a career in banking, IBPS Clerk is another strong option.

The best choice depends on your career goals, preparation level, and the eligibility and recruitment rules of the particular year.

<h2>Conclusion</h2>


IBPS PO and IBPS Clerk are important opportunities for graduates who want to build a career in public sector banking.

Both examinations require strong preparation in reasoning, quantitative aptitude, English, and general awareness. With consistent practice, mock tests, and proper time management, students can prepare effectively for these competitive examinations.

For graduates looking for a stable banking career, IBPS exams are worth considering as part of their competitive-exam preparation strategy.
<blockquote> The Most importnat is your researchers</blockquote></p>

      `
    }
  ];

  /* ---------------------------------------------------------------------
     5. Utility helpers
     --------------------------------------------------------------------- */

  /** Format an ISO date string into a friendly, readable format. */
  function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  function getAuthor(id) {
    return authors.find((a) => a.id === id);
  }

  function getCategory(id) {
    return categories.find((c) => c.id === id);
  }

  function getPostBySlug(slug) {
    return posts.find((p) => p.slug === slug);
  }

  /** Read bookmarked post ids from localStorage. */
  function getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem("verso_bookmarks") || "[]");
    } catch (e) {
      return [];
    }
  }

  function toggleBookmark(id) {
    const list = getBookmarks();
    const idx = list.indexOf(id);
    if (idx > -1) list.splice(idx, 1);
    else list.push(id);
    localStorage.setItem("verso_bookmarks", JSON.stringify(list));
    return list.includes(id);
  }

  /** Likes are stored as { [postId]: count } plus a "liked by me" set. */
  function getLikedByMe() {
    try {
      return JSON.parse(localStorage.getItem("verso_liked") || "[]");
    } catch (e) {
      return [];
    }
  }

  function getLikeCount(post) {
    const overrides = JSON.parse(localStorage.getItem("verso_like_counts") || "{}");
    return overrides[post.id] != null ? overrides[post.id] : post.likes || Math.floor(post.views / 40);
  }

  function toggleLike(post) {
    const liked = getLikedByMe();
    const idx = liked.indexOf(post.id);
    const counts = JSON.parse(localStorage.getItem("verso_like_counts") || "{}");
    const base = counts[post.id] != null ? counts[post.id] : (post.likes || Math.floor(post.views / 40));
    if (idx > -1) {
      liked.splice(idx, 1);
      counts[post.id] = base - 1;
    } else {
      liked.push(post.id);
      counts[post.id] = base + 1;
    }
    localStorage.setItem("verso_liked", JSON.stringify(liked));
    localStorage.setItem("verso_like_counts", JSON.stringify(counts));
    return { liked: liked.includes(post.id), count: counts[post.id] };
  }

  /* ---------------------------------------------------------------------
     6. Card / list rendering
     --------------------------------------------------------------------- */

  /** Build the HTML for a single blog card. Used on home + blog listing. */
  function renderCard(post) {
    const author = getAuthor(post.author);
    const category = getCategory(post.category);
    const bookmarked = getBookmarks().includes(post.id);
    return `
      <article class="card glass-card" data-id="${post.id}" data-category="${post.category}" data-tags="${post.tags.join(",")}">
        <a href="post.html?slug=${post.slug}" class="card__image-link" aria-label="Read ${escapeHtml(post.title)}">
          <img class="card__image" data-src="${post.image}" src="images/placeholder.svg" alt="${escapeHtml(post.title)}" loading="lazy" width="600" height="360">
          <span class="card__category badge">${category.icon} ${category.name}</span>
        </a>
        <div class="card__body">
          <h3 class="card__title"><a href="post.html?slug=${post.slug}">${escapeHtml(post.title)}</a></h3>
          <p class="card__excerpt">${escapeHtml(post.excerpt)}</p>
          <div class="card__meta">
            <img class="card__avatar" src="${author.avatar}" alt="${author.name}" width="28" height="28">
            <span class="card__author">${author.name}</span>
            <span class="dot">•</span>
            <time class="card__date" datetime="${post.date}">${formatDate(post.date)}</time>
            <span class="dot">•</span>
            <span class="card__readtime">${post.readTime} min read</span>
          </div>
          <div class="card__actions">
            <button class="icon-btn like-btn" data-action="like" data-id="${post.id}" aria-pressed="${getLikedByMe().includes(post.id)}" title="Like this post">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 21s-7.5-4.6-10-9C.5 8.5 2 5 5.5 5c2 0 3.5 1 4.5 2.5C11 6 12.5 5 14.5 5 18 5 19.5 8.5 22 12c-2.5 4.4-10 9-10 9z" fill="currentColor"/></svg>
              <span class="like-count">${getLikeCount(post)}</span>
            </button>
            <button class="icon-btn" data-action="share" data-slug="${post.slug}" data-title="${escapeHtml(post.title)}" title="Share this post">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .1 2.6L8.9 10.2a3 3 0 1 0 0 3.6l6.2 3.6a3 3 0 1 0 .9-1.7l-6.2-3.6a3 3 0 0 0 0-1.2l6.2-3.6c.5.4 1.2.7 1.9.7Z" fill="currentColor"/></svg>
            </button>
            <button class="icon-btn bookmark-btn ${bookmarked ? "is-active" : ""}" data-action="bookmark" data-id="${post.id}" aria-pressed="${bookmarked}" title="Save for later">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------------------------------------------------------------
     7. Sidebar renderers
     --------------------------------------------------------------------- */
  function renderCategoryList(targetSelector, { asFilters = false } = {}) {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    el.innerHTML = categories
      .map((c) => {
        const count = posts.filter((p) => p.category === c.id).length;
        return asFilters
          ? `<button class="chip category-chip" data-category="${c.id}">${c.icon} ${c.name} <span class="chip__count">${count}</span></button>`
          : `<li><a href="blog.html?category=${c.id}">${c.icon} ${c.name}</a><span class="chip__count">${count}</span></li>`;
      })
      .join("");
  }

  function renderTagCloud(targetSelector) {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    el.innerHTML = tags
      .map((t) => `<a href="blog.html?tag=${t}" class="tag">#${t}</a>`)
      .join("");
  }

  function renderPopularPosts(targetSelector, count = 5) {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    const top = [...posts].sort((a, b) => b.views - a.views).slice(0, count);
    el.innerHTML = top
      .map(
        (p, i) => `
      <li class="mini-post">
        <span class="mini-post__rank">${String(i + 1).padStart(2, "0")}</span>
        <a href="post.html?slug=${p.slug}">
          <span class="mini-post__title">${escapeHtml(p.title)}</span>
          <span class="mini-post__meta">${p.views.toLocaleString()} views</span>
        </a>
      </li>`
      )
      .join("");
  }

  function renderRecentPosts(targetSelector, count = 5, excludeId = null) {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    const recent = [...posts]
      .filter((p) => p.id !== excludeId)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count);
    el.innerHTML = recent
      .map(
        (p) => `
      <li class="mini-post">
        <img src="${p.image}" alt="" width="56" height="56" loading="lazy">
        <a href="post.html?slug=${p.slug}">
          <span class="mini-post__title">${escapeHtml(p.title)}</span>
          <span class="mini-post__meta">${formatDate(p.date)}</span>
        </a>
      </li>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------------
     Expose everything on a single global namespace.
     --------------------------------------------------------------------- */
  window.VERSO = {
    authors,
    categories,
    tags,
    posts,
    formatDate,
    getAuthor,
    getCategory,
    getPostBySlug,
    getBookmarks,
    toggleBookmark,
    getLikedByMe,
    getLikeCount,
    toggleLike,
    renderCard,
    renderCategoryList,
    renderTagCloud,
    renderPopularPosts,
    renderRecentPosts,
    escapeHtml
  };
})();
