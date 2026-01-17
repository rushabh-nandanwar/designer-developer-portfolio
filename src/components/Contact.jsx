import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolio';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const fadeInRef = useFadeIn({ delay: 0.1 });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_lhms8l2",
            "template_jmkyses",
            formData,
            "jINAaTSs7XvadpVg2"
        ).then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => {
            alert("Failed to send message. Try again.");
        });
    };

    return (
        <section id="contact" className="section-padding relative bg-background border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
                <div ref={fadeInRef} className="grid md:grid-cols-2 gap-16">

                    <div className="space-y-8">
                        <div>
                            <span className="text-zinc-500 text-sm tracking-widest uppercase block mb-2">Get in Touch</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
                                Let's work <br /> together.
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg font-light leading-relaxed">
                            I'm currently available for freelance work. If you have a project that needs some creative injection then that's where I come in!
                        </p>

                        <div className="space-y-4 pt-4">
                            <a href={`mailto:${portfolioData.personal.email}`} className="block text-xl text-white hover:text-zinc-400 transition-colors">
                                {portfolioData.personal.email}
                            </a>
                            <p className="text-zinc-500 text-sm">{portfolioData.personal.location}</p>
                        </div>
                    </div>

                    <form className="space-y-8 mt-4 md:mt-24" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                placeholder="NAME"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pb-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pb-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                rows="1"
                                name="message"
                                placeholder="MESSAGE"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full pb-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors resize-none h-auto min-h-[50px]"
                                required
                            ></textarea>
                        </div>
                        <button className="pt-4 text-white uppercase text-sm tracking-widest font-bold border-b border-white hover:text-zinc-400 hover:border-zinc-400 transition-all">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
