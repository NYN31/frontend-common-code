const ICON_SIZE = 18;

const SidebarData = [
  {
    title: data.BLOG,
    hasAccordion: [
      {
        title: data.ALL_BLOGS,
        label: data.BLOG_PATH,
        path: data.BLOG_PATH,
        icon: <LuListTodo size={ICON_SIZE} />,
      },
      {
        title: data.BLOG_CREATED,
        label: data.BLOG_CREATED_PATH,
        path: data.BLOG_CREATED_PATH,
        icon: <MdOutlineCreateNewFolder size={ICON_SIZE} />,
      },
      {
        title: data.BLOG_STATS,
        label: data.BLOG_STATS_PATH,
        path: data.BLOG_STATS_PATH,
        icon: <IoStatsChartOutline size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: data.PROFILE,
    hasAccordion: [
      {
        title: data.PROFILE_UPDATE,
        label: data.PROFILE_UPDATE_PATH,
        path: data.PROFILE_UPDATE_PATH,
        icon: <FiSettings size={ICON_SIZE} />,
      },
      {
        title: data.PROFILE_DETAILS,
        label: data.PROFILE_DETAILS_PATH,
        path: data.PROFILE_DETAILS_PATH,
        icon: <CgProfile size={ICON_SIZE} />,
      },
    ],
  },
];

export default SidebarData;
