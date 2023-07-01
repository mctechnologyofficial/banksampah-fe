// assets
import { IconDashboard, IconUsers } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconUsers };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard Bank Sampah',
  type: 'group',
  children: [
    {
      url: '/dashboard',
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      url: '/nasabah',
      id: 'nasabah',
      title: 'Nasabah',
      type: 'item',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
