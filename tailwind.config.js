module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {


    extend: {
      colors:{
        'primary-color':'#EB5757',
        'gray1':'#151515',
        'gray2':'#808080'
      },
      fontFamily:{
        'popins':['Poppins']
      },


     maxWidth:{
      'screen-2xl':'1920px',
      'max-w-2sm':'27rem',
      'screen-2l':'1720px'
      
     },
     maxHeight:{
       '3/5':'40rem',
       '100':'31rem'
     },

         backgroundImage: theme => ({
         'qoutes': "url('/src/asset/images/dWYU3i-mqEo.png')"
        
        }),
   
    },

  },
  variants: {
    extend: {
    },
  },

 
}
