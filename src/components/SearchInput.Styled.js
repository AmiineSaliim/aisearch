import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
const StyledInputWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '75%',
  height: '20px',
  padding: '16px 24px',
  margin: '0 auto',
  marginTop: '24px',
  maxWidth: '560px',
  border: '0.1px solid rgb(95, 99, 104)',
  borderRadius: '999px',
  flex: '0.1',
  '& a': {
    display: 'inline-block',
    padding: '5px',
    margin: '0px 5px',
    color: '#bdc1c6'
  },
  '& input': {
    flex: 1,
    backgroundColor: 'rgba(32, 33,36,1)',
    border: 'none',
    padding: '16px 24px',
    fontSize: 'medium',
    color: 'white',
    '&:focus': {
      outlineWidth: 0
    }
  },
});
const StyledSearchIcon = styled(SearchIcon)({
  color: '#9aa0a6',
  fontSize: '1.5rem',
  cursor: 'pointer',
});

const StyledMicIcon = styled(MicIcon)({
    color: '#9aa0a6',
    fontSize: '1.5rem',
    cursor: 'pointer',
});
const StyledButtonContainer = styled('div')`
display: ${(props) => (props.showButtons ? "flex" : "none")};
justify-content: center;
padding-top: 18px;
button {
  min-height: 32px;
  text-transform: inherit;
  font-size: 0.875rem;
  font-family: Roboto, arial, sans-serif;
  background-color: #303134;
  color: #e8eaed;
  border: 1px solid #303134;
  border-radius: 4px;
  padding: 0 16px;
  margin: 11px 4px;
  &:hover {
    border: 1px solid lightgray;
    border-radius: 4px;
  }
}
`;

export {
    StyledInputWrapper, StyledSearchIcon, StyledMicIcon, StyledButtonContainer
};