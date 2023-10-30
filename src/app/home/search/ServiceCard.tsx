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
      <div className={styles.serviceCardImages}>
        
        <img src={service.pictures[0]}  alt={`Service Image`} className={styles.serviceCardImage} />
      </div>
      <div className={styles.serviceCardDetails}>
        <div>
          <div className={styles.serviceCardRating}>
            <p>Rating: {service.rating}</p>
          </div>
          <div className={styles.serviceCardHeader}>
            <h2>{service.name}</h2>
            <p>Price: {service.price}</p>
          </div>
        </div>
        <p className={styles.serviceCardDescription} data-full-description={service.description}>
          {service.description.slice(0, 30)}
        </p>
      </div>
    </div>
  );
}


export default ServiceCard;
