export type projectType = 'commerce' | 'mobile' | 'business' | 'games' | '';

export interface projectInterface {
  name: string;
  description: string;
  imagePath: string;
  types: projectType[];
  links: {
    github?: string;
    link2?: string;
    share?: string;
  };
}

export const projectsList: projectInterface[] = [
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['commerce', 'games'],
    links: {
      github: '#',
      share: '#',
    },
  },
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['mobile', 'games'],
    links: {
      github: '#',
      link2: '#',
    },
  },
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['commerce', 'business'],
    links: {
      link2: '#',
      share: '#',
    },
  },
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['mobile'],
    links: {
      github: '#',
      link2: '#',
    },
  },
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['business', 'mobile'],
    links: {
      github: '#',
    },
  },
  {
    name: 'Project Name',
    description:
      'A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.A brief description of the project outlining what was accomplished, the technologies implemented, and the timeline for completion.',
    imagePath: 'temp.png',
    types: ['games'],
    links: {
      github: '#',
      link2: '#',
      share: '#',
    },
  },
];
