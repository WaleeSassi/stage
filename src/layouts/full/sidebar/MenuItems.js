import {
  IconBuildingBank,
  IconChristmasTree,
  IconCoin,
  IconReportMedical,
  IconStethoscope,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Dashboard',
  },

  {
    id: uniqueId(),
    title: 'Economy',
    icon: IconBuildingBank,
    href: '/dashboard/economy',
  },
  { id: uniqueId(), title: 'Environment', icon: IconChristmasTree, href: '/dashboard/enviroment' },
  { id: uniqueId(), title: 'Health', icon: IconStethoscope, href: '/dashboard/health' },
  { id: uniqueId(), title: 'Top Health', icon: IconReportMedical, href: '/dashboard/top-health' },
  { id: uniqueId(), title: 'Poverty', icon: IconCoin, href: '/dashboard/poverty' },
  {
    navlabel: true,
    subheader: 'Prediction',
  },
  { id: uniqueId(), title: 'Predict Poverty', icon: IconCoin, href: '/dashboard/predict-poverty' },
  {
    id: uniqueId(),
    title: 'Predict Health Condition',
    icon: IconStethoscope,
    href: '/dashboard/predict-Health',
  },
  {
    id: uniqueId(),
    title: 'Predict Pollution Rate',
    icon: IconChristmasTree,
    href: '/dashboard/predict-env',
  },
  {
    id: uniqueId(),
    title: 'Predict Economy State',
    icon: IconBuildingBank,
    href: '/dashboard/predict-eco',
  },
];

export default Menuitems;
