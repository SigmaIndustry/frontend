'use client';
import React, {useEffect, useState} from 'react';
import styles from '../styles/service.module.scss';
import Image from "next/image";
import {Service} from "../../../lib/entities/Service";
import {ClassicButton} from "@shared/buttons/api";
import {SearchController} from "../../../lib/controllers/search/search.controller";
import {useRouter} from "next/navigation";
import RateModal from "../RateModal";

const Page = ({params: {id}}: {params: {id: number}}) => {
    function formatPhoneNumber(phone: string): string {
        const cleanedNumber = phone.replace(/\D/g, '');
        const formattedNumber = cleanedNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
        return formattedNumber;
    }
    
    const [service, setService] = useState<Service>({
        id,
        name: '',
        price: 0,
        provider: 0,
        description: '',
        pictures: [],
        rating: 0,
        category: ''
    });
    const router = useRouter();
    const [rateModal, setRateModal] = useState(false);
    useEffect(() => {
        SearchController.search({query: '', id})
            .then((res: any) => {
                console.log(res);
                if (res.error) {
                    router.push('/');
                } else {
                    setService(res.data.results[0]);
                }
            })
    }, []);

    const rate = async () => {
        setRateModal(true)
    }
    return (
        <section className={styles.service}>
            <div className={styles.service__inner}>
                <div className={styles.service__left_block}>
                    <div className={styles.service__avatar}>
                        {service.pictures
                            ? <Image src={service.pictures[0]} alt={''} width={250} height={200}
                                     style={{height: 200, width: 250}}/>
                            : <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="service-circle-2" transform="translate(-2 -2)">
                                        <path id="secondary" fill="#2ca9bc" d="M12,3A9,9,0,0,0,5.55,18.27a7,7,0,0,1,4.28-3.92h0a4,4,0,1,1,4.34,0h0a7,7,0,0,1,4.28,3.92A9,9,0,0,0,12,3Z"></path>
                                        <path id="primary" d="M16,11a4,4,0,1,1-4-4A4,4,0,0,1,16,11Zm-1.83,3.35a3.95,3.95,0,0,1-4.34,0,7,7,0,0,0-4.28,3.92,9,9,0,0,0,12.81.09l.09-.09a7,7,0,0,0-4.28-3.92ZM21,12h0a9,9,0,0,0-9-9h0a9,9,0,0,0-9,9H3a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9Z" fill="none" stroke={'#797c7b'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                    </g>
                                </g>
                            </svg>
                        }
                    </div>
                    <div>
                        <p className={styles.service__email}>Category - {service.category}</p>
                    </div>
                    <div className={styles.service__options}>
                        <ClassicButton onClick={rate}>Rate</ClassicButton>
                    </div>
                </div>
                <div className={styles.service__right_block}>
                    <h3 className={styles.service__title}>Detail information</h3>
                    <div className={styles.service__info_blocks_wrapper}>
                        <div className={styles.service__info_block}>
                            <p className={styles.service__info_item}><span>Name:</span> {service.name}</p>
                            <p className={styles.service__info_item}><span>Price:</span> {service.price ?? 'Free'}</p>
                        </div>
                        <div className={styles.service__info_block}>
                            <p className={styles.service__info_item}><span>Provider:</span> {service.provider}</p>
                            <p className={styles.service__info_item}><span>Rating:</span> {service.rating}</p>
                        </div>
                    </div>
                    <p className={styles.service__info_description_title}>Description</p>
                    <p className={styles.service__info_description}>{service.description}</p>
                </div>
            </div>
            <RateModal open={rateModal} setOpen={setRateModal} serviceId={service.id}/>
        </section>
    );
};

export default Page;