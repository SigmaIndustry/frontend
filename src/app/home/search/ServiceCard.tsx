import React from 'react';
import styles from './styles/service.module.scss';
type ServiceCardProps = {
  service: ServiceDto;
}

type ServiceDto = {
  name: string;
  category: string;
  description: string;
  pictures: string[];
  price: number;
  provider: number;
  rating: number;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCardHeader}>
        <h2>Name: {service.name}</h2>
      </div>
      <div>
      <p>Category: {service.category}</p>
      </div>
      <div className={styles.serviceCardImages}>
        {service.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Service Image ${picture}`} className={styles.serviceCardImage} />
        ))}
      </div>
      <div className={styles.serviceCardDetails}>
        <p>{service.description}</p>
        <p>Price: {service.price}</p>
        <p>Rating: {service.rating}</p>
        <p>Provider: {service.provider}</p>
      </div>
    </div>
  );
}

export default ServiceCard;