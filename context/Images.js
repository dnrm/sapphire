import React, { useEffect, useState, createContext, useContext } from 'react'
import { useSession } from 'next-auth/client';

const ImageContext = createContext();

const ImageWrapper = ({ children }) => {

    const [session] = useSession();
    const [urls, setUrls] = useState();

    useEffect(() => {
        if (session) {
            const getUrls = async () => {
                const response = await fetch('/api/get-urls');
                const json = await response.json();
                setUrls(json);
            };

            getUrls();
        }
    }, [session]);

    return (
        <ImageContext.Provider value={{ urls }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageWrapper

export function useImageContext() {
    return useContext(ImageContext)
}
