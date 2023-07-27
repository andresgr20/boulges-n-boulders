import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
function Footer(){

    return(<div className='footer'>
        <div className='socials'>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
        </div>
        <div className='copyright'>
        <p>All Rights reserverved to Bulges and Boulders</p>
        <p>Copyright 2023</p>
        <p>Done by Andres Garcia</p>   
        </div>

    </div>);
}

export default Footer;