import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Face3Icon from '@mui/icons-material/Face3';
import IconButton from "@mui/material/IconButton";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import BrownieGallery from '../BrownieGallery';
import SammyGallery from '../SammyGallery';
import LatteArtGallery from '../LatteArtGallery';
export function ToolBar() {
    return (
        <Router>
            <AppBar position="fixed" elevation={0} sx={{backgroundColor:' #e8d1c5', boxShadow: 'none', color: 'black' }}>
                <Toolbar sx ={{  color: 'black' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <Tooltip title="Home"><IconButton color="inherit" component={Link} to="/"><HomeIcon/></IconButton></Tooltip>
                        <Tooltip title="About"><IconButton color="inherit" component={Link} to="/about"><Face3Icon/></IconButton></Tooltip>
                        <Tooltip title="Professional Experience"><IconButton color="inherit" component={Link} to="/experience"><WorkHistoryIcon/></IconButton></Tooltip>
                    </Box>
                </Toolbar>
                <Divider sx={{ mx: 4, borderColor: '#bfa08f' }} />
            </AppBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/brownie-gallery" element={<BrownieGallery />} />
                <Route path="/about/sammy-gallery" element={<SammyGallery />} />
                <Route path="/about/latte-art-gallery" element={<LatteArtGallery />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </Router>
        
    );
}