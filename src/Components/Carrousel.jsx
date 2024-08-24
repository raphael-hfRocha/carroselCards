import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/Carrousel.css';
import { RxChevronLeft, RxChevronRight  } from "react-icons/rx";


const Carrousel = ({ children }) => {
    Carrousel.propTypes =  {
        children: PropTypes.node.isRequired,
    };
        const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPreviousSlide = () => {
        const isFirstCard = currentIndex === 0;
        const newIndex = isFirstCard ? React.Children.count(children) - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    
    const goToNextSlide = () => {
        const isLastCard = currentIndex === React.Children.count(children) - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        
        <div className="carousel">
        <RxChevronLeft size={50} color="white" onClick={goToPreviousSlide} />
        <div className="carousel-card">
            {React.Children.toArray(children)[currentIndex]}
            
        </div>
        <RxChevronRight size={50} color="white" onClick={goToNextSlide} />
    </div>
);
};

export default Carrousel;