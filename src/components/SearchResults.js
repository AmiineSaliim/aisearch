import React, { useState } from 'react';
import {
  SearchResultsContainer,
  SearchResultsWrapper,
  SearchResultsTitle,
} from "./SearchResults.Styled";
import { Typography, IconButton } from "@mui/material";
import { Pagination, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PAGE_SIZE = 20;

const SearchResults = ({ data = {}, totalResults = 0 }) => {
  const [currentPage, setCurrentPage] = useState(1);
   
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  return (
    <SearchResultsContainer sx={{ flexGrow: 1, height: "100%", overflowY: "auto" }}>
      <Typography
        variant='p'
        component='p'
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "Google Sans,Roboto,arial,sans-serif",
          paddingTop: " 8px",
          fontSize: "0.875rem",
          color: "#bdc1c6",
        }}
      >
        About {data?.searchInformation?.formattedTotalResults} results{" "}
        {data?.searchInformation?.searchTime} seconds
      </Typography>

      {data?.items?.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map((item) => (
        <SearchResultsWrapper key={item?.cacheId}>
          <div>
            <SearchResultsTitle href={item?.link}>
              {item?.pagemap?.cse_image?.length > 0 &&
                item?.pagemap?.cse_image[0]?.src && (
                  <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' />
                )}
              <Typography
                variant='p'
                component='p'
                sx={{
                  color: "#bdc1c6",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}
              >
                {item?.displayLink}
              </Typography>
            </SearchResultsTitle>
            <SearchResultsTitle href={item?.link}>
              <Typography
                variant='h3'
                component='h3'
                sx={{
                  color: "#c58af9",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                }}
              >
                {item?.title}
              </Typography>
            </SearchResultsTitle>
            <Typography
              variant='body1'
              component='body1'
              sx={{
                marginTop: "16px",
                fontSize: "0.875rem",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "normal",
                color: "#bdc1c6",
              }}
            >
              {item?.snippet}
            </Typography>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon sx={{ fontSize: "0.875rem", color: "#bdc1c6" }} />
            </IconButton>
          </div>
        </SearchResultsWrapper>
      ))}

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
             

      color: '#8a4bf8',
    },
    
  }}
/>
</Stack>
    </SearchResultsContainer>
  );
};

export default SearchResults
