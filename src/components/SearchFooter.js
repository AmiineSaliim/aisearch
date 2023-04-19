import React from "react";
import { styled } from "@mui/system";
const StyledFooter = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledPagination = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #000;
    padding: 0 10px;
    text-decoration: none;

    &.active {
      font-weight: bold;
      border-bottom: 2px solid #000;
    }
  }
`;

const SearchFooter = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <StyledFooter>
      {totalPages && (
        <StyledPagination>
          {Array.from(Array(totalPages), (e, i) => {
            const page = i + 1;
            return (
              <a
                href="#"
                key={i}
                className={currentPage === page ? "active" : ""}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            );
          })}
        </StyledPagination>
      )}
    </StyledFooter>
  );
};

export default SearchFooter;
