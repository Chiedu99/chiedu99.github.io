// Section.tsx

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  lines: string[];
  gradientWords: { [key: string]: string };
  children?: ReactNode; // This line allows you to include child components
}

const Section: React.FC<SectionProps> = ({ lines, gradientWords, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const renderTextLine = (line: string) => {
    return line.split(' ').map((word, index) => {
      const wordKey = word.toLowerCase().replace(/[^a-z]/gi, '');
      const gradientClass = gradientWords[wordKey];
      if (gradientClass) {
        return (
          <span key={index} className={styles[gradientClass]}>
            {word + ' '}
          </span>
        );
      }
      return <span key={index}>{word + ' '}</span>;
    });
  };

  return (
    <div
      className={`${styles.section} ${isVisible ? styles.isVisible : ''}`}
      ref={sectionRef}
    >
      {lines.map((line, index) => (
        <p key={index} className={styles.title}>
          {renderTextLine(line)}
        </p>
      ))}
      {children}
    </div>
  );
};

export default Section;
