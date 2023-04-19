import { styled } from "@mui/system";
const StyledHeaderContainer = styled('div')({
    // styles here
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  });
const StyledHeaderWrapper = styled('div')({
    // styles here
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px',
  });
const StyledHeaderLeft = styled('div')({
    // styles here
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:'0.1',
    '& a': {
        display: 'inline-block',
        padding: '5px',
        margin: '0px 5px',
        color: '#bdc1c6',
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontamily: 'Roboto, arial, sans-serif',
        '&:hover' : {
            textDecoration:'underline',
        }
    }
  });
const StyledHeaderRight = styled('div')({
    // styles here
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flex: '0.3',
    
    '& a': {
        display: 'inline-block',
        padding: '5px',
        margin: '0px 5px',
        color: '#bdc1c6',
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontamily: 'Roboto, arial, sans-serif',
        '&:hover' : {
            textDecoration:'underline',
        }
    }
  });
const StyledLogoContainer = styled('div')({
    // styles here
    display:'flex',
    flex:'1',
    marginTop:'10%',
    flexDirection: 'column',
    '& img' : {
        height: '92px',
        objectFit: 'contain',
    }
  });

export {
    StyledHeaderContainer, 
    StyledHeaderWrapper, 
    StyledHeaderLeft, 
    StyledHeaderRight,
    StyledLogoContainer,
};
