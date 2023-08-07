import { IconCertificate2, IconDashboard, IconReportAnalytics } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Dashboard',
  },

  {
    id: uniqueId(),
    title: "Vue d'ensemble",
    icon: IconReportAnalytics,
    href: '/dashboard/overview',
  },
  {
    id: uniqueId(),
    title: 'Analyse approfondie',
    icon: IconDashboard,
    href: '/dashboard/analyse',
  },
  {
    id: uniqueId(),
    title: 'Objectif Réussite',
    icon: IconCertificate2,
    href: '/dashboard/objectif',
  },
];

export default Menuitems;
