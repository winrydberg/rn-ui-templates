const apps = [
  {
    id: 1,
    title: 'Auth (Login & Sign Up)',
    route: 'AuthStack',
    description: 'Some description here',
    colors: ['#52BE80', '#6C3483'],
    projects: [
      {
        id: 1,
        name: 'Auth One',
        desc: 'App description',
        link: 'AuthOneScreen',
        color: '#3498DB',
        route: 'SignInOne',
      },

      {
        id: 2,
        name: 'Auth Two',
        desc: 'App description',
        link: 'AuthOneScreen',
        color: '#F5B041',
        route: 'SignInTwo',
      },
    ],
  },
  {
    id: 2,
    title: 'Bottom Tabs',
    route: 'BottomTabs',
    description: 'Some description here',
    colors: ['#F5B041', '#3498DB'],
    projects: [
      {
        name: 'Auth One',
        desc: 'App description',
        link: 'AuthOneScreen',
      },
    ],
  },

  {
    id: 3,
    title: 'Glocery Shop',
    route: 'AuthStack',
    description: 'Some description here',
    colors: ['#283747', '#943126'],
    projects: [
      {
        name: 'Auth One',
        desc: 'App description',
        link: 'AuthOneScreen',
      },
    ],
  },

  {
    id: 4,
    title: 'General Components',
    route: 'AuthStack',
    description: 'Some description here',
    colors: ['#3498DB', '#52BE80'],
    projects: [
      {
        name: 'Auth One',
        desc: 'App description',
        link: 'AuthOneScreen',
      },
    ],
  },
];

export default apps;
