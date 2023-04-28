import * as React from 'react';
import { Box, AppBar, Toolbar, Avatar, Typography } from '@mui/material';
import { Outlet } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';

// const pages = [{title: 'Upcoming Sets', route: '/upcoming'}, {title: 'Mixes', route: '/mixes'}, {title: 'About', route: '/about'}];
// const pages = [{title: 'Mixes', route: '/'}]

const Header = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
            <Toolbar>
              <Avatar alt="DJ Gone Gurl" src="/static/images/avatar/2.jpg" sx={{ marginRight: '10px', display: { xs: 'none', md: 'flex' }}} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                DJ Gone Gurl
              </Typography>

              {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="menu-options"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
                <Avatar alt="DJ Gone Gurl" src="/static/images/avatar/2.jpg" sx={{ marginRight: '10px', display: { xs: 'flex', md: 'none' }}} />
                <Typography
                variant="h5"
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                DJ Gone Gurl
              </Typography>
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    component="a"
                    href={page.route}
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>*/}
            </Toolbar> 
        </AppBar>
      </Box>
      <Outlet />
    </div>
  )
};

export default Header;