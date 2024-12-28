import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ id, imgSrc, title, description,category,image,rating }) => {
  return (
    <div className={styles.divContainer}>
      <h2>ID: {id}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <h3>{category}</h3>
      <img className={styles.img} src={image} alt="" />
<div className={styles.rating}>
    <span >Rating:{rating.rate}
    </span>
    <br />
    <span>count:{rating.count}
    </span>
</div>
    </div>
  );
  
};

Card.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.string,
};

export default Card;