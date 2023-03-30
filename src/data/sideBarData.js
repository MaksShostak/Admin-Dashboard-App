import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const items = [
  {
    title: 'Dashboard',
    to: '/',
    icon: <HomeOutlinedIcon />,
    id: 1,
  },
  {
    title: 'Manage Team',
    to: '/team',
    icon: <PeopleOutlinedIcon />,
    id: 2,
  },
  {
    title: 'Contacts Information',
    to: '/contacts',
    icon: <ContactsOutlinedIcon />,
    id: 3,
  },
  {
    title: 'Invoices Balances',
    to: '/invoices',
    icon: <ReceiptOutlinedIcon />,
    id: 4,
  },
  {
    title: 'Profile Form',
    to: '/form',
    icon: <PersonOutlinedIcon />,
    id: 5,
  },
  {
    title: 'Calendar',
    to: '/calendar',
    icon: <CalendarTodayOutlinedIcon />,
    id: 6,
  },
  {
    title: '"FAQ Page"',
    to: '/faq',
    icon: <HelpOutlineOutlinedIcon />,
    id: 7,
  },
  {
    title: 'Bar Chart',
    to: '/bar',
    icon: <BarChartOutlinedIcon />,
    id: 8,
  },
  {
    title: 'Pie Chart',
    to: '/pie',
    icon: <PieChartOutlineOutlinedIcon />,
    id: 9,
  },
  {
    title: 'Line Chart',
    to: '/line',
    icon: <TimelineOutlinedIcon />,
    id: 10,
  },
  {
    title: 'Geography Chart',
    to: '/geography',
    icon: <MapOutlinedIcon />,
    id: 11,
  },
];

export default items;
