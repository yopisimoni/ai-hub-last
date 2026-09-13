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
];

export function getWorkflow(slug: string) {
  return workflows.find((workflow) => workflow.slug === slug);
}
