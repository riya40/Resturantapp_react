import './App.css';
import NavBar from './components/NavBar';
import DishItem from './components/DishItem';
import { Container,Grid,Typography } from '@mui/material';
import Footer from './components/Footer';
import StoreTimings from './components/StoreTimings';
import FeedbackForm from './components/FeedbackForm';
import Testimonials from './components/Testimonals';
import ReserVationForm from './components/ReservationForm';
import WhoWeAre from './components/WhoWeAre';


function App() {
  return (
    <div>
        <NavBar />
      <br />

      <Typography color='green' align='center' variant='h4'>
                Best ordered dishes of all the time at ABC restaurant
        </Typography>
        <Container maxWidth='lg' sx={{marginTop: '2rem'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <DishItem
                          imageUrl='https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg'
                          dishName='Pan Cakes'
                          dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
             />
             </Grid>
             <Grid item xs={12} sm={6} md={4}>
                        <DishItem
                              imageUrl='https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350'
                             dishName='Burger'
                              dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
                        />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <DishItem
                        imageUrl='https://www.thelist.com/img/gallery/what-happens-to-your-body-when-you-drink-iced-tea-every-day/intro-1593618977.jpg'
                            dishName='Ice Tea'
                        dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
                        />
                        </Grid>
                      </Grid>
                  </Container>
                <br/><br/>
                <WhoWeAre />
<br/><br/>
<StoreTimings />
<br/><br/>
      <ReserVationForm />
<br/><br/>
              <Testimonials />
<FeedbackForm/>

<Footer/></div>
);

}




export default App;






