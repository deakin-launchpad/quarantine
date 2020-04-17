import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  // IconButton,
  MenuItem,
  Select
  // Paper, MobileStepper, Icon
} from "@material-ui/core";
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Redirect,Link} from "react-router-dom";
import {
  CustomInput,
  RegularButton,
  Heading
  // Image,
  // notify
} from "components";
import { API } from "helpers/index";
import { LayoutConfig } from "configurations/index";
import Button from '@material-ui/core/Button';

// import DeleteIcon from '@material-ui/icons/Delete';
// import Dropzone from 'react-dropzone';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     maxWidth: 400,
//     overflow: 'hidden',
//     display: 'block',
//     width: '100%',
//   },
// }));

export const NewNeed = () => {
  // const classes = useStyles();
  // const theme = useTheme();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  // const [images, setImages] = useState([]);
  // const [activeStep, setActiveStep] = useState(0);
  // const [maxSteps, setMaxSteps] = useState(1);
  const [redirect, setRedirect] = useState(false);

  // Upload a document
  // const uploadDocument = async (files) => {
  //   notify('Uploading image in-progress');
  //   let data = new FormData();
  //   data.append('imageFile', files);
  //   const response = await API.uploadImages(data);
  //   notify('Image uploaded');
  //   let temp = images;
  //   temp.push(response);
  //   setImages(temp);
  //   setMaxSteps(temp.length);
  //   setActiveStep(0);
  // };

  const handleChange = (event, variant) => {
    if (variant === "title") setTitle(event.target.value);
    else setDescription(event.target.value);
  };

  // const handleNext = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep - 1);
  // };

  if (redirect) return <Redirect to={{ pathname: "/locals" }} />;

  const content = (
    <Container
      maxWidth="sm"
      style={{ marginBottom: "5%", alignItems: "center",paddingLeft:0,paddingRight:0, height:600}}
    >
      <Grid item xs={12} style={{paddingTop:30, height:300, backgroundColor:LayoutConfig.theme.colors.color5,paddingLeft:15,paddingRight:15}}>
      <Typography variant="h5" align="left" style={{color:'white', fontSize:20,fontWeight:'bold'}}>
        Let the community know what you need, only your suburb is revealed!
                </Typography>
                <Grid container >
        
        
        <Grid item xs={12}>
          {/* <TextField label='Title' id='standard-text' variant='outlined' fullWidth value={title} onChange={(e) => handleChange(e, 'title')} /> */}
          <CustomInput
            id="standard-text-description "
            labelText="Title *"
            required
            fullWidth
            style={{color: "white"}}
            inputProps={{
              label: "Title ",
              placeholder: "Max 25 characters ",
              name: "Title ",
              value: title,
              onChange: e => e.target.value.length < 25 ? handleChange(e, "title") :  e.target.value = title
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Paper square elevation={0} className={classes.header}>
            <Grid container direction='row'>
              <Grid item xs={10}>
                <Typography style={{ paddingTop: '10px' }}>{images.length > 0 ? 'Uploaded images' : 'No images selected'}</Typography>
              </Grid>
              <Grid item xs={1}>
                {images.length <= 0 ? 
                <IconButton><Dropzone
                  accept="image/*"
                  noDrag={true}
                  onDrop={acceptedFiles => {
                    acceptedFiles.forEach((file) => {
                      uploadDocument(file);
                    });
                  }}>
                  {({ getRootProps, getInputProps }) => (
                    <section style={{ display: 'inline-block' }}>
                      <div {...getRootProps()}
                        style={{ cursor: 'pointer' }}
                      >
                        <input {...getInputProps()} />
                        <Icon>backup</Icon>
                      </div>
                    </section>
                  )}
                </Dropzone></IconButton> : <IconButton onClick={() => { 
                  setImages([]);
                  setActiveStep(0); 
                  setMaxSteps(1);
                  } }>
                    <DeleteIcon />
                  </IconButton>}
              </Grid>
            </Grid>
          </Paper>
          <Image
            style={{ width: '100%', height: '20vh' }}
            src={images.length > 0 ? images[activeStep].thumbnail : 'https://penserra.com/wp-content/uploads/2018/03/dummy-post-square-1-300x300.jpg'}
            alt="imagepost"
          />
          <MobileStepper
            steps={images.length > 0 ? images.length : 1}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
            }
          />
        </Grid> */}

        <Grid item xs={12}  style={{color: "white", paddingBottom: "17px"}}
>
          {/* <TextField label='Description' id='standard-text-description' variant='outlined' multiline rows={5} fullWidth value={description} onChange={(e) => handleChange(e, 'description')} /> */}
          <CustomInput
            id="standard-text-description "
            labelText="Description *"
            required
            style={{color: "white"}}
            fullWidth
            inputProps={{
              label: "Description ",
              multiline: true,
              placeholder: "Description ",
              rows: 1,
              name: "Description ",
              value: description,
              onChange: e => handleChange(e, "description")
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
        </Grid>

            
      </Grid>
    
        <Grid item  container xs={12}>
          <Grid container >
            <Grid item xs={12} >
                <Select
                  

                  fullWidth
                  value={category}
                  onChange={e => {
                    setCategory(e.target.value);
                  }}
                  style={{paddingTop: "28px", marginBottom: "17px",color:'white',backgroundColor:'rgb(0, 172, 193'}}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Category
                  </MenuItem>
                  <MenuItem value={"FOOD"}>Food</MenuItem>
                  <MenuItem value={"MEDICINES"}>Medicines</MenuItem>
                  <MenuItem value={"ACCOMMODATION"}>Accommodation</MenuItem>
                  <MenuItem value={"OTHER"}>Other</MenuItem>
                </Select>
            </Grid>
          </Grid>
        </Grid>
      
        <Grid container xs={12}>
                    <Grid item xs={6} align='center'>
                    <Link to="/locals"><Button size='large'  variant="contained"  style={{backgroundColor:LayoutConfig.theme.colors.color4,width:170,height:50,fontSize:19, color:'white'}}>Cancel</Button></Link>
                    </Grid>
                    <Grid item xs={6} align='center'>
                    <Button 
                    onClick={() => {
                      API.createListing({ title: title, description: description, images: [], category: category, postType: 'NEED' }, () => {
                        setRedirect(true);
                      })
                    }}
                    size='large'  variant="contained"  style={{backgroundColor:LayoutConfig.theme.colors.color4,width:170,height:50,fontSize:19, color:'white'}}>Confirm</Button>
                    </Grid>
              
          </Grid>
          <Grid item xs={12}>
                <Typography variant="h5" align="left" style={{color:LayoutConfig.theme.colors.color5,fontSize:18,paddingTop:50}}>
                  Your post will be seen by the community and our control centre. When matched, you will receive an email from the other person, check your spam!
                </Typography>
              </Grid>
          
      </Grid>
    </Container>
  );
  return content;
};
