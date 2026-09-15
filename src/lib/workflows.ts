export type WorkflowStep = {
  title: string;
  description: string;
  output?: string;
};

export type WorkflowTool = {
  name: string;
  purpose: string;
  note: string;
  href?: string;
};

export type Workflow = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  outcome: string;
  timeEstimate: string;
  category: string;
  steps: WorkflowStep[];
  tools: WorkflowTool[];
  alternatives: string[];
  checklist: string[];
};

export const workflows: Workflow[] = [
  {
    slug: "turn-one-idea-into-30-social-posts",
    title: "Turn one idea into 30 social posts",
    summary:
      "Use one strong source idea to create a month of useful, platform-aware social content without copying the same post everywhere.",
    audience: "Creators, freelancers, small businesses, and solo operators",
    outcome:
      "A structured 30-post content bank split into angles, formats, and platform-ready variations.",
    timeEstimate: "45–90 minutes",
    category: "Create content",
    steps: [
      {
        title: "Choose one strong source idea",
        description:
          "Start with a real idea, article, product insight, customer question, case study, or lesson. Avoid starting from a vague topic.",
        output: "One source idea with a clear audience and result.",
      },
      {
        title: "Extract 5 content angles",
        description:
          "Break the source into five useful angles: problem, mistake, method, example, and opinion. These angles become the content backbone.",
        output: "Five distinct angles instead of 30 repetitive rewrites.",
      },
      {
        title: "Create 6 formats for each angle",
        description:
          "For every angle, create six formats such as short post, carousel outline, hook, checklist, story/example, and question/poll.",
        output: "5 angles × 6 formats = 30 content pieces.",
      },
      {
        title: "Adapt by platform",
        description:
          "Rewrite for the behavior of each platform rather than cross-posting identical copy. Keep the idea consistent while changing length, hook, CTA, and formatting.",
        output: "Platform-aware versions for the channels you actually use.",
      },
      {
        title: "Quality-check before scheduling",
        description:
          "Remove repetition, unsupported claims, filler, and anything that does not sound like you. Keep only posts that teach, show, or help.",
        output: "A clean 30-post bank ready for scheduling or manual publishing.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Idea extraction, angle generation, drafting, and platform adaptation",
        note: "Best used with your real source material and clear constraints.",
      },
      {
        name: "Canva",
        purpose: "Turn selected posts into carousels, graphics, or visual explainers",
        note: "Use only for posts that benefit from visual packaging.",
      },
      {
        name: "A social scheduler",
        purpose: "Queue approved content after review",
        note: "Choose based on the platforms you actually publish to; do not automate low-quality output.",
      },
    ],
    alternatives: [
      "Use a spreadsheet instead of a scheduler if you want manual control.",
      "Create 10 excellent posts instead of 30 if the source idea does not support enough variety.",
      "Use separate prompts per platform if one large batch becomes repetitive.",
    ],
    checklist: [
      "One real source idea selected",
      "Audience and desired result defined",
      "Five distinct content angles created",
      "Six formats created per angle",
      "Platform versions reviewed",
      "Claims and facts checked",
      "Repetitive or weak posts removed",
      "Final posts approved before scheduling",
    ],
  },
  {
    slug: "create-a-30-day-social-media-plan",
    title: "Create a 30-day social media plan with AI",
    summary:
      "Build a realistic month-long social plan around your audience, offer, content pillars, and available production time.",
    audience: "Small businesses, creators, local brands, and freelancers",
    outcome:
      "A 30-day calendar with clear content pillars, post ideas, formats, CTAs, and a manageable production rhythm.",
    timeEstimate: "45–75 minutes",
    category: "Grow social media",
    steps: [
      {
        title: "Define the audience and one measurable goal",
        description:
          "Tell the AI who you want to reach and choose one primary outcome such as profile visits, website clicks, leads, or saves. Do not optimize for every metric at once.",
        output: "One audience statement and one 30-day objective.",
      },
      {
        title: "Create 3–5 content pillars",
        description:
          "Ask for a small set of recurring themes tied to real customer questions, proof, education, and the value of your offer.",
        output: "A reusable pillar system that prevents random posting.",
      },
      {
        title: "Generate and score 30 post ideas",
        description:
          "Create enough ideas for the month, then score them for usefulness, relevance, proof, and ease of production. Remove generic filler.",
        output: "Thirty approved ideas ranked by value.",
      },
      {
        title: "Assign formats and publishing rhythm",
        description:
          "Match each idea to a suitable format such as short video, image, carousel, text post, or story. Space demanding formats across the month.",
        output: "A practical calendar you can actually produce.",
      },
      {
        title: "Review performance weekly",
        description:
          "At the end of each week, feed the real results back into the plan and adjust future posts based on clicks, saves, comments, or conversions.",
        output: "A plan that improves from evidence instead of staying static.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Audience framing, content pillars, idea generation, and weekly analysis",
        note: "Give it your actual offer, audience, constraints, and previous results.",
      },
      {
        name: "Canva",
        purpose: "Create reusable visual templates",
        note: "Build a small template system rather than designing every post from scratch.",
      },
      {
        name: "Platform analytics",
        purpose: "Measure which ideas and formats produce useful behavior",
        note: "Use first-party platform data before changing the strategy.",
      },
    ],
    alternatives: [
      "Use a 14-day plan if you have very little historical data.",
      "Publish three strong posts per week instead of daily if production capacity is limited.",
      "Run one channel first before expanding to multiple platforms.",
    ],
    checklist: [
      "Audience defined",
      "Primary 30-day goal selected",
      "Content pillars approved",
      "Thirty ideas quality-checked",
      "Formats and dates assigned",
      "Weekly measurement points scheduled",
    ],
  },
  {
    slug: "build-a-website-with-ai",
    title: "Plan and build a small website with AI",
    summary:
      "Use AI to turn a business or project idea into a focused website plan, clear copy, implementation brief, and launch checklist.",
    audience: "Founders, freelancers, local businesses, and side-project builders",
    outcome:
      "A website brief, page structure, first-pass copy, implementation plan, and launch QA checklist.",
    timeEstimate: "60–120 minutes",
    category: "Build a website",
    steps: [
      {
        title: "Write the website brief",
        description:
          "Explain the business, target visitor, primary action, proof available, and constraints. Ask AI to identify missing information before generating pages.",
        output: "A one-page website brief with a clear conversion goal.",
      },
      {
        title: "Design the information architecture",
        description:
          "Create only the pages needed to answer user questions and support the primary action. Start lean: home, service/product detail, trust, contact or conversion path.",
        output: "A page map with the purpose of each page.",
      },
      {
        title: "Draft copy from evidence",
        description:
          "Generate copy using verified facts, real differentiators, and customer language. Remove invented claims, fake testimonials, and unsupported numbers.",
        output: "Editable page copy grounded in real information.",
      },
      {
        title: "Choose the implementation path",
        description:
          "Decide whether the site is best built with a site builder, CMS, or code. Ask AI to produce a build specification appropriate to that route.",
        output: "A scoped implementation plan instead of an uncontrolled build.",
      },
      {
        title: "Run launch QA",
        description:
          "Check mobile layout, navigation, forms, metadata, accessibility basics, analytics, indexing controls, performance, and all critical links.",
        output: "A launch checklist with pass/fail status.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Briefing, structure, copy drafting, QA planning, and technical guidance",
        note: "Treat generated claims and technical assumptions as drafts to verify.",
      },
      {
        name: "Figma or Canva",
        purpose: "Visual planning and page mockups",
        note: "Useful when layout decisions should be reviewed before implementation.",
      },
      {
        name: "A site builder, CMS, or code editor",
        purpose: "Implement the approved design and content",
        note: "Choose the simplest stack that satisfies the actual requirements.",
      },
    ],
    alternatives: [
      "Start with a one-page landing page when the offer is not yet validated.",
      "Use a CMS when non-technical publishing is more important than custom application behavior.",
      "Prototype visually before coding if the information architecture is still changing.",
    ],
    checklist: [
      "Website goal and audience defined",
      "Page map approved",
      "Claims verified",
      "Primary CTA works",
      "Mobile layout checked",
      "Forms and links tested",
      "Metadata and indexing reviewed",
      "Analytics plan defined",
    ],
  },
  {
    slug: "automate-a-small-business-email-workflow",
    title: "Automate a small-business email workflow with AI",
    summary:
      "Map one repetitive email process, decide what AI should and should not do, then create a controlled automation with human review where it matters.",
    audience: "Small-business owners, solo operators, and service teams",
    outcome:
      "A documented email workflow with triggers, classifications, draft actions, safety rules, and a measurement plan.",
    timeEstimate: "45–90 minutes",
    category: "Run a small business",
    steps: [
      {
        title: "Choose one repetitive email process",
        description:
          "Pick a narrow process such as enquiry triage, FAQ responses, lead qualification, appointment follow-up, or invoice reminders. Avoid automating the whole inbox at once.",
        output: "One bounded process with a clear start and end.",
      },
      {
        title: "Map trigger, inputs, decisions, and outputs",
        description:
          "Document what starts the workflow, which data is required, the decisions AI may assist with, and the exact allowed outputs.",
        output: "A simple workflow map with decision boundaries.",
      },
      {
        title: "Define human-review and safety rules",
        description:
          "Require review for sensitive, financial, legal, contractual, or unusual messages. Prevent the system from inventing account details, commitments, or policies.",
        output: "A list of actions AI may draft versus actions a person must approve.",
      },
      {
        title: "Build and test with sample messages",
        description:
          "Create prompts and automation steps, then test normal, ambiguous, incomplete, and adversarial examples before connecting real customers.",
        output: "A tested draft workflow with known failure cases.",
      },
      {
        title: "Measure usefulness",
        description:
          "Track time saved, correction rate, missed classifications, response time, and customer outcomes. Stop or narrow automation when quality drops.",
        output: "Evidence that the automation is actually helping.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Process design, classification logic, response drafting, and test-case generation",
        note: "Use structured instructions and explicit escalation rules.",
      },
      {
        name: "Gmail or Outlook",
        purpose: "Source and destination for the email workflow",
        note: "Keep permissions limited to what the workflow genuinely needs.",
      },
      {
        name: "An automation platform",
        purpose: "Connect triggers, AI steps, records, and notifications",
        note: "Log decisions and keep a manual fallback path.",
      },
    ],
    alternatives: [
      "Use AI only to draft replies while a person sends every message.",
      "Start with classification and labeling before automating responses.",
      "Use templates without AI when the process is highly repetitive and deterministic.",
    ],
    checklist: [
      "One email process selected",
      "Trigger and required data defined",
      "Human-review rules documented",
      "Sensitive actions blocked from autonomous execution",
      "Normal and edge cases tested",
      "Quality metrics selected",
    ],
  },
  {
    slug: "create-an-ai-study-plan",
    title: "Create a study plan with AI",
    summary:
      "Turn a syllabus, topic list, or learning goal into a structured plan with explanations, retrieval practice, and progress checks.",
    audience: "Students and independent learners",
    outcome:
      "A realistic study schedule with topic priorities, practice sessions, review cycles, and progress checks.",
    timeEstimate: "30–60 minutes",
    category: "Study & learn",
    steps: [
      {
        title: "Define the learning target",
        description:
          "Specify what you need to know or be able to do, the deadline, current level, available study time, and any source materials you must follow.",
        output: "A measurable learning objective and time budget.",
      },
      {
        title: "Break the subject into dependencies",
        description:
          "Ask AI to organize topics from prerequisites to advanced concepts, then compare that structure with the syllabus or trusted learning source.",
        output: "A topic map in the right learning order.",
      },
      {
        title: "Build a weekly schedule",
        description:
          "Assign learning, practice, review, and catch-up sessions. Keep the plan realistic enough to survive missed days.",
        output: "A calendar that balances new material and revision.",
      },
      {
        title: "Use active recall and practice",
        description:
          "Generate questions, exercises, explanations, and mini-tests. Attempt them before asking for the answer or explanation.",
        output: "Practice material that tests understanding instead of passive reading.",
      },
      {
        title: "Replan from evidence",
        description:
          "Use quiz results and mistakes to identify weak areas, then update the next week rather than repeating the original plan blindly.",
        output: "A study plan that adapts to actual progress.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Topic decomposition, explanations, quizzes, and adaptive planning",
        note: "Provide course materials when accuracy must match a specific curriculum.",
      },
      {
        name: "Calendar or task app",
        purpose: "Schedule study blocks and review sessions",
        note: "Keep sessions short enough to be sustainable.",
      },
      {
        name: "Flashcard or notes system",
        purpose: "Store facts, mistakes, and retrieval prompts",
        note: "Use it for active recall rather than copying long summaries.",
      },
    ],
    alternatives: [
      "Use the workflow for a single difficult chapter instead of an entire course.",
      "Build a seven-day revision sprint when the deadline is close.",
      "Study with teacher-provided questions first when they best reflect the assessment.",
    ],
    checklist: [
      "Learning target defined",
      "Deadline and available hours recorded",
      "Topic dependencies reviewed",
      "Study and review blocks scheduled",
      "Practice questions included",
      "Progress check defined",
    ],
  },
  {
    slug: "start-a-freelance-service-with-ai",
    title: "Turn one skill into a freelance service with AI",
    summary:
      "Package an existing skill into a small, specific service, create proof, and build a repeatable client-delivery workflow without pretending AI replaces expertise.",
    audience: "Freelancers, students, creators, and people testing a small online service",
    outcome:
      "A defined offer, sample deliverable, pricing hypothesis, outreach list, and delivery checklist.",
    timeEstimate: "60–120 minutes",
    category: "Make money online",
    steps: [
      {
        title: "Choose a skill and narrow customer problem",
        description:
          "Start from something you can genuinely do. Define one customer type and one painful, specific result instead of offering every possible digital service.",
        output: "A narrow service statement with a clear buyer.",
      },
      {
        title: "Package the deliverable",
        description:
          "Define exactly what the client receives, turnaround time, revision policy, required inputs, and what is outside scope.",
        output: "A service package that can be explained in a few sentences.",
      },
      {
        title: "Create proof before outreach",
        description:
          "Build one or two realistic samples, teardown examples, or before/after demonstrations. Label fictional examples clearly and never invent customer results.",
        output: "Evidence a prospect can evaluate quickly.",
      },
      {
        title: "Build a small prospecting system",
        description:
          "Identify a limited set of relevant prospects and personalize outreach around a real observation. Avoid spam and track every contact.",
        output: "A qualified prospect list and outreach template.",
      },
      {
        title: "Standardize delivery",
        description:
          "Create a checklist for intake, production, QA, handoff, revisions, and follow-up. Use AI to accelerate steps without lowering quality.",
        output: "A repeatable process that can support multiple clients.",
      },
    ],
    tools: [
      {
        name: "ChatGPT",
        purpose: "Offer positioning, research synthesis, drafts, checklists, and QA",
        note: "Use it to accelerate work you understand, not to fake expertise.",
      },
      {
        name: "A portfolio page",
        purpose: "Show proof and make the offer easy to evaluate",
        note: "One clear service page is enough for an early validation test.",
      },
      {
        name: "A simple CRM or spreadsheet",
        purpose: "Track prospects, follow-ups, outcomes, and revenue",
        note: "Avoid duplicate outreach and learn which customer segment responds.",
      },
    ],
    alternatives: [
      "Sell a fixed-scope starter package before offering a monthly retainer.",
      "Use freelance marketplaces for initial demand discovery if direct outreach is difficult.",
      "Partner with another freelancer when a project requires skills outside your competence.",
    ],
    checklist: [
      "Real skill selected",
      "Specific customer problem defined",
      "Deliverable and scope documented",
      "At least one proof asset created",
      "Prospects qualified before outreach",
      "Delivery checklist ready",
      "Results and feedback tracked",
    ],
  },
];

export function getWorkflow(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}

export function getWorkflowCategories() {
  return Array.from(new Set(workflows.map((workflow) => workflow.category)));
}
