import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, useTheme, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from './../../theme';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import items from '../../data/sideBarData';

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState('Dashboard');

  const elements = items.map(({ id, ...props }) => (
    <Item key={id} {...props} selected={selected} setSelected={setSelected} />
  ));
  const elementsA = elements.slice(0, 1);
  const elementsB = elements.slice(1, 4);
  const elementsC = elements.slice(4, 7);
  const elementsD = elements.slice(7);

  return (
    <Box>
      <Sidebar
        collapsed={collapsed}
        rootStyles={{
          background: 'transparent',
          borderRightStyle: 'none',
        }}
        backgroundColor={colors.primary[400]}
        border="none"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  padding: '5px 35px 5px 20px',
                  color: active ? '#868dfb' : colors.grey[100],
                  '&:hover': {
                    color: '#6870fa',
                    backgroundColor: 'transparent',
                  },
                };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => collapseSidebar(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => collapseSidebar(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../../public/assets/photo_2023-03-01_17-41-42.jpg`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Maks
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : '10%'}>
            {elementsA}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            {elementsB}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            {elementsC}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            {elementsD}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
