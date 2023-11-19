'use client';

import React from 'react';
import styles from './styles/service.module.scss';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Service} from "../../../lib/entities/Service";

const ServiceCard = ({service}: {service: Service}) => {
    const router = useRouter();
    return (
        <div className={styles.serviceCard} onClick={() => router.push(`/service/${service.id}`)}>
            <div className={styles.serviceCardImages}>
                <Image src={service.pictures[0]}
                       alt={`Service Image`}
                       className={styles.serviceCardImage}
                       width={500}
                       height={500}
                       quality={100}
                       priority={true}
                />
            </div>
            <div className={styles.serviceCardDetails}>
                <div>
                    <div className={styles.serviceCardRating}>
                        <p>Rating: {service.rating}</p>
                    </div>
                    <div className={styles.serviceCardHeader}>
                        <h2>{service.name}</h2>
                        <p>Price: {service.price ?? 'Negotiable'}</p>
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
