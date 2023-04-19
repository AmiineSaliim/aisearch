
import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledLogo,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
  StyledHeaderRight,
} from "./SearchPage.Styled";
import { Pagination, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Tooltip, IconButton } from "@mui/material";
import SearchInput from "./SearchInput";
import Avatar from "@mui/material/Avatar";
import SearchResults from "./SearchResults";
import useSearch from "../hooks/useSearch";
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from './logo.png';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ChatIcon from '@mui/icons-material/Chat';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
const SearchPage = () => {
  const { search } = useLocation();
  
  const PAGE_SIZE = 20;
  const searchTerm = search?.split("?")[1];
  const { data } = useSearch(searchTerm);
  const totalResults = data?.searchInformation?.formattedTotalResults || 0;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
    return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchHeader>
        <StyledHeaderLeft>
          <Link to='/'>
            <StyledLogo
              src={logo}
              alt='AI Search Logo'
            />
          </Link>
          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              <StyledOptions>
                <SearchIcon />
                <Link to={`/search?${searchTerm}`}>All</Link>
              </StyledOptions>
              <StyledOptions>
                <ChatIcon />
                <Link to='/Chat'>Chat</Link>
              </StyledOptions>
              <StyledOptions>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </StyledOptions>
              <StyledOptions>
                <YouTubeIcon />
                <Link to='/Videos'>Videos</Link>
              </StyledOptions>
              <StyledOptions>
                <CurrencyBitcoinIcon />
                <Link to='/Blockchain'>Blockchain</Link>
              </StyledOptions>
              <StyledOptions>
                <FeedIcon />
                <Link to='/News'>News</Link>
              </StyledOptions>
              <StyledOptions>
                <LocalOfferIcon />
                <Link to='/Shop'>Shop</Link>
              </StyledOptions>
              <StyledOptions>
                <LocationOnIcon />
                <Link to='/Maps'>Maps</Link>
              </StyledOptions>
              <StyledOptions>
                <ConnectWithoutContactIcon />
                <Link to='/Social'>Social</Link>
              </StyledOptions>
              
              
              <StyledOptions>
                <ExpandMoreIcon />
                <Link to='/More'>More</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledOptions>
            <Tooltip title='Settings'>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Apps'>
              <IconButton>
                <AppsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title='Account'>
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                A
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </StyledHeaderRight>
      </StyledSearchHeader>
      <SearchResults data={data} />
      <Stack
  direction="row"
  spacing={2}
  justifyContent="center"
  marginTop="20px"
  
>
<Pagination
  count={totalPages}
  page={currentPage}
  onChange={handlePageChange}
  sx={{
    marginBottom: '20px',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000',
      '&.Mui-selected': {
        backgroundColor: '#b19cd9',
        color: '#fff',
      },
      '&:hover': {
        backgroundColor: '#b19cd9',
        color: '#fff',
      },
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#8ab4f8',
      color: '#8ab4f8',
    },
    '& .MuiPaginationItem-ellipsis': {
      color: '#8ab4f8',
    },
    '& .MuiPaginationItem-icon': {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#8a4bf8',
    },
    
  }}
/>
</Stack>
      
    </StyledSearchPageHeaderContainer>
    
    
    
    
    
    
  
  );
};;
export default SearchPage;
