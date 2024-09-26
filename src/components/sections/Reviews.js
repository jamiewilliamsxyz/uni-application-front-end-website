import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import RCard from '../ui/RCard';
import pfp1 from '../../images/pfp1.webp'
import pfp2 from '../../images/pfp2.webp'
import pfp3 from '../../images/pfp3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #141414;
  padding: 0.5rem 2rem 3rem 2rem;

  h3 {
    color: white;
    text-align: center;
    font-size: 2.75rem;
    font-weight: 600;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  Button {
    font-size: 1.4rem;
  }

  .note {
    font-size: 0.88rem;
    color: #545454;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1rem;
  }

  @media (max-width: 1100px) {
    .card-container {
      flex-direction: column;
    }
  }
`;

const Reviews = () => {
  return(
    <StyledReviews>
      <h3>Hear What Gamers<br></br>Are Saying</h3>
      <div className='card-container'>
        <RCard
          profile={pfp1}
          name='Lewey'
          star={<FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", fontSize: "1.75rem"}}/>}
          review='for a USB mic this is about as good as it gets I would think. Excellent quality, great isolation, ease of use features (tap to mute, gain wheel) are handy too.'>
        </RCard>
        <RCard
          profile={pfp2}
          name='Eric. L'
          star={<FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", fontSize: "1.75rem"}}/>}
          review='Love it. Arrived with everything it was advertised to have, in new condition. Sounds great. Pop filter works well. I love that is has the tap-to-mute and lighting.'>
        </RCard>
        <RCard
          profile={pfp3}
          name='Omar Juarez'
          star={<FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", fontSize: "1.75rem"}}/>}
          review='No complaints, works excellently. The audio is good, the parts are good quality, and easy to install if you have a mount. I like the visual feedback it gives.'>
        </RCard>
      </div>
      <Button text='Order Today' page='/product'/>
      <a href='https://www.amazon.co.uk/product-reviews/B07NZZZ746/ref=acr_dp_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews#reviews-filter-bar' target='_blank' rel="noreferrer" className='note'>Read more reviews</a>
    </StyledReviews>
  );
};

export default Reviews;