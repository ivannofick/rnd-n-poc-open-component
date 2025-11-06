'use client';
import { useEffect, useRef } from 'react';
import oc from 'oc-client-browser';

export default function OCHelloWorld() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ambil library OC dari registries
        oc.getLibs().then((libs) => {
            const lib = libs.dev;  // Ambil library untuk dev (atau prod sesuai kebutuhan)

            // Load library OC ke dalam DOM (misalnya dengan <script> tag)
            const script = document.createElement('script');
            script.src = lib;
            script.onload = () => {
                // Pastikan window.oc sudah ada sebelum menggunakannya
                if (window) {
                    if (window?.oc) {
                        // Sekarang kita bisa panggil komponen OC
                        window.oc.renderComponent(
                            'hello-world',  // Nama komponen OC yang ingin di-render
                            { name: 'Ivan' },  // Parameter untuk komponen
                            (err: any, html: any) => { // Callback untuk hasil render
                                if (err) {
                                    ref.current!.innerHTML = `<p style="color:red">OC Error: ${err.message}</p>`;
                                } else {
                                    ref.current!.innerHTML = html;
                                }
                            }
                        );
                    } else {
                        ref.current!.innerHTML = '<p style="color:red">OC not loaded properly.</p>';
                    }
                    
                }
            };
            document.body.appendChild(script);
        }).catch((err) => {
            ref.current!.innerHTML = `<p style="color:red">Error loading OC library: ${err.message}</p>`;
        });
    }, []);

    return <div ref={ref}></div>;
}
