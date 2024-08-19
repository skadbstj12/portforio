import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [c, setC] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;

        const updateProgress = () => {
            loadedImages += 1;
            setC(Math.round((loadedImages / images.length) * 100));
            if (loadedImages === images.length) {
                setTimeout(() => {
                    setFadeOut(true);
                    document.body.style.overflow = '';
                }, 2500);
            }
        };

        const handleLoad = () => {
            setC(100);
            setTimeout(() => {
                setFadeOut(true);
                document.body.style.overflow = '';
            }, 2500);
        };

        if (images.length > 0) {
            images.forEach((img) => {
                if (img.complete) {
                    updateProgress();
                } else {
                    img.addEventListener('load', updateProgress);
                    img.addEventListener('error', updateProgress);
                }
            });
        } else {
            handleLoad();
        }

        window.addEventListener('load', handleLoad);

        return () => {
            images.forEach((img) => {
                img.removeEventListener('load', updateProgress);
                img.removeEventListener('error', updateProgress);
            });
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    const loaderClasses = `loader loading-page ${fadeOut ? 'fade-out' : ''}`;

    return (
        <div className={loaderClasses} id='loader'>
            <div className="loader-logo-wrap">
                <h1 className="main_logo">
                    <svg viewBox="0 0 1900 250">
                        <text x="50%" y="50%" textAnchor="middle" dy="50px">loading</text>
                    </svg>
                </h1>
                <div className="counter">
                    <h1>{c}%</h1>
                    <hr style={{ width: `${c}%`, marginLeft: '0%' }} />
                </div>
            </div>
        </div>
    );
}

export default Loading;
