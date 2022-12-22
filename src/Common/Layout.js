import * as React from 'react';
import NavBar from './NavBar'
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import Home from '@mui/icons-material/Home';
import Logo from '../Images/MainLogo.png'
import { styled } from '@mui/material';
import Dashboard from '@material-ui/icons/Dashboard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiSwitch from '@mui/material/Switch';
import CardMedia from "@material-ui/core/CardMedia";
import Divider from '@mui/material/Divider'

import TextField from '@mui/material/TextField';

// import MenuIcon from '@material-ui/icons/Menu'

import Grid from '@mui/material/Grid';

const drawerWidth = 220;


const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  borderRadius: 6,
  color: "#697388",

  "&$selected": {
    backgroundColor: "#c9dfff",
    color: "#1574f6",
    "& .MuiListItemIcon-root": {
      color: "#1574f6"
    }
  },
  "&$selected:hover": {
    backgroundColor: "#c9dfff",
    color: "#1574f6",

    "& .MuiListItemIcon-root": {
      color: "#1574f6"
    }
  },
  "&:hover": {
    backgroundColor: "#c9dfff",
    color: "#1574f6",
    "& .MuiListItemIcon-root": {
      color: "#1574f6"
    }
  }

}));



export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);



  const Switch = styled((props) => (
    <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 54,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',

      '&.Mui-checked': {
        transform: 'translateX(26px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#1574f6',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      "&:after, &:before": {

        fontSize: "11px",
        position: "absolute",
        top: "6px"
      },
      "&:after": {
        content: "'ON'",
        color: "white",
        left: "6px"
      },
      "&:before": {
        content: "'OFF'",
        fontWeight: 'bold',
        color: "#39393D",
        right: "4px"
      },
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="10vh"
      >
        <Box
          component="img"
          sx={{

            marginTop: 2,
            marginBottom: 2,
            maxWidth: 170
          }}
          alt="Refer-Scout"
          src={Logo}
        />
      </Box>

      <List >
        {props.sideBarItems.map((text, index) => (
          <Box
            display="flex"
            justifyContent="center"
            minHeight="5vh"
          >
            <ListItem key={text} dense={true} disablePadding alignItem='center' sx={{ maxWidth: 190 }}>
              <ListItemButton  >
                <ListItemIcon sx={{ minWidth: '40px' }} >
                  {index % 2 === 0 ? <Dashboard /> : <Home />}
                </ListItemIcon>
                <ListItemText primary={<Box sx={{ fontWeight: 'bold' }}>{text}</Box>} />

              </ListItemButton>
            </ListItem>
          </Box>

        ))}
      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'background.default' 
        }}
      >
        <Toolbar>
          <IconButton
            color="background.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar> */}
      <NavBar drawerWidth={drawerWidth} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open>

          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1, mt: 8, pb: 3,
          pl: 10,pr: 40, width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f8f8fb'
        }}>

        <Typography variant="h6"
          sx={{ fontWeight: 'bold', py: 2 }}>
          Manage Rewards
        </Typography>
        <Card sx={{ minWidth: 275, borderRadius: 3, py: 3, px: 2, boxShadow: 3 }}>
          <CardContent>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={7}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.8, md: 1 }}>
                  <Grid item xs={10}>
                    <Typography variant="h8"
                      sx={{ fontWeight: 'bold' }}>
                      Enable Rewards Shop
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Switch sx={{ m: 1 }} defaultChecked />
                  </Grid>

                </Grid>


                <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.8, md: 1 }}>

                  <Grid item xs={10}>
                    <Typography variant="h9"
                      sx={{ fontWeight: 'bold' }}>
                      Coins Accumulation
                    </Typography>
                    <Typography variant="body1"
                      sx={{ fontSize: '13px', textAlign: 'justify', textJustify: 'auto' }}>
                      Enabling rewards shop automatically enables Coins Accumulation.This allows employees to get Coins for every ScoutPoints they earn and they can redeem their coins for products in the Rewards Shop. Their Coin's balance will be visible in Employee's Rewards Shop.
                    </Typography>
                    <Typography variant="body1"
                      sx={{ fontSize: '13px', fontStyle: 'italic', fontWeight: 'bold', color: '#3f3f3f', pt: 2 }}>
                      1 ScoutPoint = 1 Coin
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Switch sx={{ m: 1 }} defaultChecked />
                  </Grid>

                </Grid>


              </Grid>
              <Grid item xs={5}>

              </Grid>

            </Grid>
          </CardContent>
          <CardContent>
            <Box sx={{ display: 'block' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.8, md: 1 }} sx={{ pt: 3 }}>
                <Grid item xs={8.5}>
                  <Typography variant="h8"
                    sx={{ fontWeight: 'bold' }}>
                    Shop Inventory
                  </Typography>

                </Grid>
                <Grid item xs={3.5} sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                  <Typography variant="h8"
                    sx={{ fontWeight: 'bold' }}>
                    Product Details
                  </Typography>

                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 0.8, md: 1 }} sx={{ pt: 3 }}>

                <Grid item xs={8.3}>
                  <Grid
                    container
                    spacing={4}
                    px='40px'
                    justify="center">

                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: 3, borderStyle: 'dashed', height: 140, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', px: 3 }}  >
                        <Typography variant="h8"
                          sx={{ color: '#61697a' }}>
                          Add a new product to the shop
                        </Typography>

                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: 3, height: 140 }}>
                        <CardMedia
                          image="https://wallpaperaccess.com/full/1308159.jpg"
                          style={{ height: 140 }}
                          loading="lazy"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: 3, height: 140 }}>
                        <CardMedia
                          image="https://images.indianexpress.com/2021/08/Spotify.jpg"
                          style={{ height: 140 }}
                          loading="lazy"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: 3, height: 140 }}>
                        <CardMedia
                          image="https://www.hrkgame.com/media/screens/google-play-gift-card-100-eur-europe/.thumbnails/googleplaygift_800x500.jpg/googleplaygift_800x500-800x500.jpg"
                          style={{ height: 140 }}
                          loading="lazy"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={{ borderRadius: 3, height: 140 }}>
                        <CardMedia
                          image="https://en.mzadqatar.com//uploads/images/2020/25/04/10364932-lthmx0zntprzyjj.png"
                          style={{ height: 140 }}
                          loading="lazy"
                        />
                      </Card>
                    </Grid>
                  </Grid>


                </Grid>
                <Grid item xs={.2} sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                  <Divider orientation="vertical" color="#656565" flexItem />
                </Grid>

                <Grid item xs={3.5} >
                  <Box sx={{ display: 'block' }}>

                    <Card sx={{ borderRadius: 3, height: 500, mx: 4 }}>
                      <CardMedia
                        image="https://wallpaperaccess.com/full/1308159.jpg"
                        style={{ height: 200 }}
                        loading="lazy"
                      />

                      <CardContent sx={{ p: 0 }}>
                        <Grid container rowSpacing={1.5} columnSpacing={{ xs: 0.3, sm: 0.8, md: 1 }} sx={{ pt: 2, px: 2 }}>

                          <Grid item xs={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Product Name
                            </Typography>
                          </Grid>
                          <Grid item xs={6.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                            <TextField
                              size="small"
                              id="outlined-multiline-flexible"
                              label="Product Name"
                              multiline
                              maxRows={4}
                            />
                          </Grid>
                          <Grid item xs={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Quantity in Stock
                            </Typography>
                          </Grid>
                          <Grid item xs={6.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                            <TextField
                              size="small"
                              id="outlined-multiline-flexible"
                              label="Quantity in Stock"
                              multiline
                              maxRows={4}
                            />
                          </Grid>
                          <Grid item xs={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Redeemption Amt
                            </Typography>
                          </Grid>
                          <Grid item xs={4.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                            <TextField
                              size="small"
                              id="outlined-multiline-flexible"
                              label="Amount"
                              placeholder='100'
                              multiline
                              maxRows={4}
                            />
                          </Grid>
                          <Grid item xs={2} >
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Units
                            </Typography>
                          </Grid>
                          <Grid item xs={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Product Category
                            </Typography>
                          </Grid>
                          <Grid item xs={4.5} >
                            <TextField
                              size="small"
                              id="outlined-multiline-flexible"
                              placeholder='150'
                              label="Category"
                              multiline
                              maxRows={4}
                            />
                          </Grid>
                          <Grid item xs={2} >
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Coins
                            </Typography>
                          </Grid>
                          <Grid item xs={5.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="h8"
                              sx={{ fontWeight: 'bold', fontSize: 16, color: '#61697a' }}>
                              Delivery Method
                            </Typography>
                          </Grid>
                          <Grid item xs={6.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <TextField
                              size="small"
                              select
                              id="outlined-multiline-flexible"
                              label="Method"
                              multiline
                              // helperText="Please select your currency"
                              maxRows={4}
                            />

                          </Grid>

                        </Grid>

                      </CardContent>
                    </Card>

                  </Box>

                </Grid>

              </Grid>
            </Box>






          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}