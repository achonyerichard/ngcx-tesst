import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink, useLocation } from "react-router-dom";

type Props = {

  children: JSX.Element,
};



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#F7F7F9',
  border:'none',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#F7F7F9',
  border:'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: '#F7F7F9',
  border:'none',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#F7F7F9',
  border:'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: '#F7F7F9',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    borderRight: 0,
    border:'none',
    backgroundColor: '#F7F7F9',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavWrapper({ children }: Props,) {
  const location = useLocation();
  const { pathname } = location;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [utility, setUtility] = React.useState(false)
  const [nested, setNested] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#F7F7F9", boxShadow: "none" }}>

        <Toolbar sx={{ backgroundColor: "#F7F7F9", paddingTop: "10px" }}>
          <span className={open ? "hidden" : "block"}>


            <svg width="40" fill="none" height="22" viewBox="0 0 268 150" xmlns="http://www.w3.org/2000/svg"><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fillOpacity="0.4" fill="url(#paint1_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"></rect><defs><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint0_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint1_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stopOpacity="0"></stop></linearGradient></defs></svg>
          </span>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>

          {/* Search Icon Using Tailwind Starts */}
          <div className="relative flex items-center md:ml-8  ">

            <span className="flex items-center material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
              {" "}
              <SearchIcon className={`text-xl text-[#908D7E] mr-2`} />
            </span>

            <p className='pl-10 text-lg text-gray-400'>Search (Ctrl+/)</p>
          </div>


          {/* Search Icon Using Tailwind Ends */}
          <div className="grow"></div>
          <div className='relative flex justify-end md:pr-28'>
            <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
              <img src="http://source.unsplash.com/100x100/?woman" className="rounded-full"/>
                <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ backgroundColor: "#F7F7F9", borderRight: 0 }}>

        <DrawerHeader>
          <div className=' left-0 absolute pl-5'>
            {/* NDCX Logo using Tailwind Starts */}
            <span className='flex'>



              <svg width="40" fill="none" height="22" viewBox="0 0 268 150" xmlns="http://www.w3.org/2000/svg"><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fillOpacity="0.4" fill="url(#paint1_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#72E128" transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"></rect><defs><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint0_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint1_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stopOpacity="0"></stop></linearGradient></defs></svg>
              <p className='text-xl font-bold text-[#4C4E64DE] -ml-2'>GCX</p>
            </span>
            {/* NDCX Logo using Tailwind Ends */}
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Main Section Header Starts */}
        <div className='flex justify-start mx-5 pt-3'>

          <h2 className={open ? `text-sm uppercase text-gray-300 font-bold` : `hidden`}>
            Main Section
          </h2>
        </div>
        {/* Main Section Header Ends */}

        {/* Dashboard SideNav List With Tailwind Starts */}
        <ul className='spacey-5 mt-2'>
          <Link to="/">
            <li className={`mx-3 rounded-lg font-bold text-gray-500 ${pathname==="/" &&
              "text-white font-bold text-xl bg-[#83E542]"
              }`}>
              <ListItemButton
                sx={{
                  color: "white",
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color:pathname==="/" ? "white" : "gray",
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <p className={open ? `text-gray-500 text-lg font-normal ${pathname==="/" && "text-sm font-normal text-white"}` : "hidden"} >Dashboard</p>
              </ListItemButton>
            </li>
          </Link>

          <Link to="/users">
            <li className={`mx-3 rounded-lg font-bold ${pathname.includes("users") &&
              "text-white font-bold text-xl bg-[#83E542]"
              }`}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: pathname.includes("users") ? "white" : "gray",
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
                <p className={open ? `text-gray-500 text-lg font-normal ${pathname.includes("users") && "text-sm font-normal text-white"}` : "hidden"}  >Users</p>
              </ListItemButton>
            </li>
          </Link>
          <Link to="/form">
          <li className={`mx-3 rounded-lg font-bold ${pathname.includes("form") &&
              "text-white font-bold text-xl bg-[#83E542]"
              }`}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: pathname.includes("form") ? "white" : "gray",
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ArticleIcon />
              </ListItemIcon>
              <p className={open ? `text-gray-500 text-lg font-normal ${pathname.includes("form") && "text-sm font-normal text-white"}` : "hidden"} >Form</p>
            </ListItemButton>
          </li>
</Link>
        </ul>

        {/* Dashboard SideNav List With Tailwind Starts */}
        <Divider />

        {/* Section 2 SideNav Heaer Starts */}
        <div className='flex justify-start mx-5 pt-3'>
          <h2 className={open ? `text-sm uppercase text-gray-300 font-bold` : `hidden`}>
            Bonus Section
          </h2>
        </div>
        {/* Section 2 SideNav Heaer Ends */}

        {/* Dashboard Optional List Starts */}
        <ul className='spacey-5 mt-2'>

          <li className='mx-3 font-bold'>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DeleteIcon />
              </ListItemIcon>

              <p className={open ? "text-sm font-normal" : "hidden"}  ><button onClick={() => {
                setNested(false)
                setUtility(!utility)
              }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-500  font-medium rounded-lg text-lg text-center inline-flex items-center " type="button">Utility Pages <svg className={utility ? "w-6 h-6 rotate-90 transition-all ease-in  duration-200 " : " w-6 h-6 "} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></button></p>

            </ListItemButton>
            <div id="dropdown" className={utility ? "  w-full bg-[#F7F7F9] " : 'hidden'}>
              <ul className="ml-20 text-md text-gray-500 dark:text-gray-200 space-y-2" aria-labelledby="dropdownDefaultButton">
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Dashboard</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Settings</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Earnings</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Sign out</p>
                </li>
              </ul>
            </div>
          </li>
          <li className='mx-3 font-bold'>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <DeleteIcon />
              </ListItemIcon>
              <p className={open ? "text-sm font-normal" : "hidden"}  ><button onClick={() => {
                setNested(!nested)
                setUtility(false)
              }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-500  font-medium rounded-lg text-lg text-center inline-flex items-center " type="button">Nested Routes <svg className={nested ? "w-6 h-6 rotate-90 transition-all ease-in  duration-200 " : " w-6 h-6 "} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></button></p>

            </ListItemButton>
            <div id="dropdown" className={nested ? "  w-full bg-[#F7F7F9] transition-all ease-in duration-800" : 'hidden'}>
              <ul className="ml-20 text-md text-gray-500 dark:text-gray-200 space-y-2" aria-labelledby="dropdownDefaultButton">
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Dashboard</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Settings</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Earnings</p>
                </li>
                <li className='flex items-center gap-2'>
                  <FiberManualRecordIcon sx={{ color: "black", width: "10px" }} />
                  <p className={open ? "text-md font-normal text-gray-500" : "hidden"}  >Sign out</p>
                </li>
              </ul>
            </div>
          </li>
          <li className='mx-3 font-bold'>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ArticleIcon />
              </ListItemIcon>
              <p className={open ? "text-lg font-normal text-gray-500" : "hidden"}   >Theming control</p>
            </ListItemButton>
          </li>

        </ul>
        {/* Dashboard Optional List Ends */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
        <div className=' bottom-0 fixed w-full p-5 md:ml-20'>
        <h1 className="text-gray-500 text-xl">Made and Powered by Coffee</h1>
      </div>
      </Box>
     
    </Box>
   
    </>
  );
}