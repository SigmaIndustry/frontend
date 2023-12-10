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
                <img src={service.pictures[0]}
                       alt={`Service Image`}
                       className={styles.serviceCardImage}
                />
            </div>
            <div className={styles.serviceCardDetails}>
                <div>
                    <div className={styles.serviceCardRating}>
                        <p><span className={'font-bold'}>Rating:</span> <span className={'text-green-300'}>{service.rating}</span></p>
                    </div>
                    <div className={styles.serviceCardHeader}>
                        <h2 className={'text-lg font-semibold'}>{service.name}</h2>
                        <p>Price: <span className={'text-green-400'}>{service.price ? `${service.price}$` : 'Negotiable'}</span></p>
                    </div>
                </div>
                <p className={styles.serviceCardDescription} data-full-description={service.description}>
                    {service.description.length > 100 ? `${service.description.slice(0, 100)}...` : service.description}
                </p>
            </div>
        </div>
    );
}


export default ServiceCard;
