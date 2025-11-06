'use client';
import { useEffect, useRef } from 'react';
import oc from 'oc-client-browser';

export default function OCHelloWorld() {
    const ref = useRef(null);

    useEffect(() => {
        const client = oc({
            registries: { clientRendering: 'http://localhost:3030/' }
        });

        client.renderComponent('hello-world', { name: 'Ivan' }, (err: any, html: any) => {
            if (err) {
                ref.current.innerHTML = `<p style="color:red">OC Error: ${err.message}</p>`;
            } else {
                ref.current.innerHTML = html;
            }
        });
    }, []);

    return <div ref={ref}></div>;
}
