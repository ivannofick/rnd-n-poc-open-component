'use client'
import { useEffect, useState } from 'react';

const OCComponentExample = () => {
    const [componentHTML, setComponentHTML] = useState<string | null>(null);

    useEffect(() => {
        const loadOCComponent = async () => {
            try {
                const response = await fetch('http://localhost:3030/hello-world');
                const data = await response.json(); // Ambil data JSON
                setComponentHTML(data.html);
            } catch (error) {
                console.error('Error fetching component:', error);
            }
        };

        loadOCComponent();
    }, []);

    return (
        <div>
            {componentHTML ? (
                <div dangerouslySetInnerHTML={{ __html: componentHTML }} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default OCComponentExample;
