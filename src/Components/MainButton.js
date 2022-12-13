import React from 'react';
import Button from '@mui/material/Button';


function ButtonMain({display, justifyContent, text, border, variant, bg, size, color, height, width, fontSize, mt, startIcon, endIcon, type}) {
    return ( 
        <Button variant={variant} size={size} startIcon={startIcon} endIcon={endIcon} type={type}
         sx={{
             p:2,
             display:{display},
             justifyContent:{justifyContent},
             textTransform:"none",
             marginTop:{mt},
             fontSize:{fontSize},
             textAlign: "center",
             lineHeight: "24px",
             borderRadius:"50px", 
             border:{border}, 
             color:{color}, 
             bgcolor:{bg},
            //  bgcolor:"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
            //  ':hover': {
            //     bgcolor: "black", // theme.palette.primary.main
            //     color: '#ffff',
            //     border:"0.5px solid black",
            // },
             width:{width}, 
             height:{height} 
            }}>{text}</Button>
     );
}

export default ButtonMain;