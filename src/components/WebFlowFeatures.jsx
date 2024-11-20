import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Monitor, Gauge, BarChart3, Layout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ index, title, description, icon: Icon, className = '' }) => {
  const cardRef = useRef(null);
  const reflectionRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const reflection = reflectionRef.current;

    // Mouse move effect for reflection
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(reflection, {
        x: x * 20,
        y: y * 20,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl bg-neutral-900 p-8 transition-all duration-300 hover:scale-[1.2] ${className}`}
    >
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-12 w-6 text-white" />}
          <h3 className="text-2xl font-light text-white">{title}</h3>
        </div>
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>
      
      {/* Reflection Effect */}
      <div 
        ref={reflectionRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-soft-light"
        style={{
          background: 'radial-gradient(circle at center, white, transparent 70%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />
    </div>
  );
};

const WebflowFeatures = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation with fromTo
      gsap.fromTo(
        '.feature-card',
        {
          y: 100, // Starting vertical position
          opacity: 0, // Fully transparent at the start
        },
        {
          y: 0, // End at original position
          opacity: 1, // Fully visible
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
          },
        }
      );
  
      // Reflection animation with fromTo
      gsap.fromTo(
        '.reflection-wrapper',
        {
          opacity: 1, // Start fully visible
        },
        {
          opacity: 0.2, // Fade out to 20% visibility
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  const features = [
    {
      title: 'Lightning-fast development times',
      description: 'Time is money. I dont want you to waste it',
      icon: Zap,
      className: 'md:col-span-2 feature-card'
    },
    {
      title: 'Pixel perfect',
      description: '100% precise, 100% custom',
      icon: Monitor,
      className: 'feature-card'
    },
    {
      title: 'Clean code',
      description: 'Structured & maintainable codebase',
      icon: Code,
      className: 'feature-card'
    },
    {
      title: 'Animation & interactions',
      description: 'High-end interactions to bring website experiences to life',
      icon: Layout,
      className: 'md:col-span-2 feature-card'
    },
    {
      title: 'Responsive design',
      description: 'All breakpoints, huge screens included',
      icon: Monitor,
      className: 'feature-card'
    },
    {
      title: 'SEO optimized',
      description: 'Everything about on-site SEO',
      icon: BarChart3,
      className: 'feature-card'
    },
    {
      title: 'Performance focused',
      description: 'Fast loading times & smooth interactions',
      icon: Gauge,
      className: 'feature-card'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebflowFeatures;