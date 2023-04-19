import React from 'react'
import logo from './logo.png';
import { Link } from "react-router-dom";
import { StyledHeaderContainer, 
         StyledHeaderWrapper, 
         StyledHeaderLeft, 
         StyledHeaderRight,
         StyledLogoContainer } from './Home.Styled';
import { Avatar } from '@mui/material';
import { Tooltip } from '@mui/material';

import SearchInput from './SearchInput';
import ChatIcon from '@mui/icons-material/Chat';
import { StyledOptions } from './SearchPage.Styled';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ImageIcon from "@mui/icons-material/Image";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Home() {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledHeaderLeft>
        <StyledOptions><ChatIcon /></StyledOptions>
          <Link to='/Chat'>Chat</Link>
          <StyledOptions><DriveFileRenameOutlineIcon /></StyledOptions>
          <Link to='/Write'>Write</Link>
          <StyledOptions><ImageIcon /></StyledOptions>
          <Link to='/Images'>Images</Link>
          <StyledOptions><CurrencyBitcoinIcon /></StyledOptions>
          <Link to='/Blockchain'>Blockchain</Link>
          <StyledOptions><ExpandMoreIcon /></StyledOptions>
          <Link to='/More'>More</Link>
        </StyledHeaderLeft>
        <StyledHeaderRight>
        <Link to='/SignUp'>Sign Up</Link>
        <Link to='/Log In'>Log In</Link>
        
        
        <Tooltip title = "Account">
            <Avatar sx={{width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#8ab4f8',
                color: 'white',
                cursor: 'pointer',
                marginRight: '8px',}}></Avatar>
        </Tooltip>

        </StyledHeaderRight>
      </StyledHeaderWrapper>
      <StyledLogoContainer>
        <img src={logo} alt='Search Engine Logo'/>
        <div>
            <SearchInput showButtons={true}/>
        </div>
      </StyledLogoContainer>
    </StyledHeaderContainer>
  );
};

export default Home;
