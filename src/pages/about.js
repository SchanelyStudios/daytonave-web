import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Placeholdit from "../components/common/placeholdit";

import ContentService from '../services/content.service';

const AboutPage = () => {
  const copy = ContentService.about;
  return (
    <Layout activeNavPath="/about">
      <SEO title={copy.title} />
      <main className="page about-page">
        <h2 className="about-page__title">{copy.title}</h2>
        <div className="about-page__intro">
          <div className="about-page__intro__content">
            {copy.intro}
          </div>
          <div className="about-page__intro__image">
            <Placeholdit size="600x400" text="FPO" />
          </div>
        </div>
        <div className="about-page__beliefs">
          <h3>{copy.beliefs.heading}</h3>
          <ul className="about-page__beliefs__items">
            {copy.beliefs.items.map(({ label, content }, i) => (
              <li key={i} className="about-page__beliefs__item">
                <Placeholdit size="300x200" text="Icon" />
                <h4>{label}</h4>
                {content}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-page__pastoral-team">
          <h3>{copy.pastoral_team.heading}</h3>
          <ul className="about-page__pastors">
            {copy.pastoral_team.pastors.map(({ name, title }, i) => (
              <li key={i} className="pastor">
                <div className="pastor__mug">
                  <Placeholdit size="200x200" text="Mug" />
                </div>
                <h4 className="pastor__name">{name}</h4>
                <p className="pastor__title">{title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-page__faqs">
          <h3>{copy.faqs.heading}</h3>
          <ul className="faqs">
            {copy.faqs.items.map(({ question, answer }, i) => (
              <li key={i} className="faq">
                <h4>{question}</h4>
                {answer}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
