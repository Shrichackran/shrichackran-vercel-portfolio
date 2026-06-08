import { useState } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Loader2, Mail, MapPin, Send, X } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolioData.js';

const initialForm = { name: '', email: '', subject: '', message: '' };

function SuccessPortal({ onClose }) {
  return createPortal(
    <div className="sent-overlay" role="dialog" aria-modal="true" aria-label="Message sent successfully">
      <div className="success-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="sent-card glass-card">
        <button className="sent-close" onClick={onClose} aria-label="Close message sent popup"><X size={18} /></button>
        <div className="gojo-ring">
          <img src="/gojo-success.png" alt="Success avatar" />
        </div>
        <p className="success-kicker">Transmission complete</p>
        <h3>メッセージ送信済み!</h3>
        <span className="success-subtitle">Message Sent!</span>
        <p>Your message reached me successfully. I’ll review it and get back to you soon.</p>
        <button className="primary-btn mini" onClick={onClose}>Write Another</button>
      </div>
    </div>,
    document.body
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS environment variables are missing. Add them in .env.local and Vercel settings.'
      });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          title: form.subject,
          message: form.message
        },
        { publicKey }
      );
      setStatus({ type: 'success', message: 'Message sent successfully.' });
      setShowSuccess(true);
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: 'Message failed to send. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section container contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent"
        subtitle="Open to startups, product engineering, AI engineering and SDE roles."
      />
      <div className="contact-grid">
        <div className="glass-card contact-info">
          <h3>Reach out</h3>
          <p>I respond within 24 hours for roles, collaborations and project discussions.</p>
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> github.com/Shrichackran</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> linkedin.com/in/shrichackran-k-m</a>
          <span><MapPin size={18} /> {profile.location}</span>
        </div>

        <form className={`glass-card contact-form ${showSuccess ? 'form-muted' : ''}`} onSubmit={submitForm}>
          <div className="form-row">
            <label>
              Name
              <input name="name" value={form.name} onChange={updateField} placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" value={form.email} onChange={updateField} placeholder="you@example.com" type="email" required />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={updateField} placeholder="What is this about?" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me about your project, role or idea..." rows="6" required />
          </label>
          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? <Loader2 className="spin" size={16} /> : <Send size={16} />} Send Message
          </button>
          {status.message && status.type === 'error' && <p className="form-status error">{status.message}</p>}
        </form>
      </div>

      {showSuccess && <SuccessPortal onClose={() => setShowSuccess(false)} />}
    </section>
  );
}
