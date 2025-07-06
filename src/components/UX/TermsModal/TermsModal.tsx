'use client'
import React, { useState, UIEvent, useEffect } from 'react';
import styles from './TermsModal.module.scss';

const TermsModal: React.FC = () => {
    const cookieName = 'terms_accepted';
    const [isOpen, setIsOpen] = useState(false);
    const [scrolledToBottom, setScrolledToBottom] = useState(false);

    useEffect(() => {
        // Проверяем cookies только на клиенте после монтирования
        const accepted = document.cookie.includes(`${cookieName}=access`);
        if (accepted==false) {
            setIsOpen(true);
        }
    }, []);

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const isBottom = scrollTop + clientHeight >= scrollHeight - 20;
        setScrolledToBottom(isBottom);
    };

    const handleAccept = () => {
        // Устанавливаем cookie на клиенте
        document.cookie = `${cookieName}=access; path=/`;
        setIsOpen(false);
    };

    if (!isOpen) return null;
    
    return (
        <div className={styles.termsModalOverlay}>
            <div className={styles.termsModal}>
                <div className={styles.termsModalHeader}>
                    <h2>Пользовательское соглашение</h2>
                </div>
                
                <div 
                    className={styles.termsModalContent}
                    onScroll={handleScroll}
                >
                    <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq

                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq

                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                    </p>
                </div>
                
                <div className={styles.termsModalFooter}>
                    <button
                        onClick={handleAccept}
                        disabled={!scrolledToBottom}
                        className={`${styles.termsAcceptButton} ${
                            !scrolledToBottom ? styles.disabled : ''
                        }`}
                    >
                        Принимаю условия
                        {!scrolledToBottom && (
                            <span className={styles.scrollHint}>(прокрутите до конца)</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;