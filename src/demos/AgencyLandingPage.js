import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import ExpertiseImage from 'images/expetise.png'
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColSimple";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import { Container, ContentWithPaddingLg } from "components/misc/Layouts";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

export default () => {
  const HighlightedText = tw.span`text-primary-500`;
  const Heading = tw(
    SectionHeading
  )`w-full mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature />
      {/* <Features
        subheading={<></>}
        heading={
          <>
            Our Amazing Software Development<HighlightedText> Services.</HighlightedText>
          </>
        }
        description="Our expertise has been proven through the successful delivery of challenging software to enhance business processes. Tailored to fit any timeline, budget, or use case. "
      /> */}
      <Features
        heading={
          <>
            Our Amazing Software Development{" "}
            <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            title: "Software Product Development Services",
            description:
              "Turning your ideas into market-ready software products with consideration for scalability, robustness, and customizability. At Upfront Labs, we specialize in transforming creative concepts into practical, high-quality software solutions.",
          },
          {
            title: "Custom Application Development Services",
            description:
              "We offer comprehensive end-to-end services, including bespoke app development from the ground up, migration, updates, and maintenance. At Upfront Labs, we deliver on time, regardless of the complexity of the project. Our services span a wide range of industry verticals, including healthcare, eLearning, data analysis, fintech, and eCommerce.",
          },
          {
            title: "Hire Software Developers",
            description:
              "Let Upfront Labs provide you with access to seasoned developers for custom software solutions for your startup, agency, or enterprise. Understanding the significance of a dedicated software team for your business objectives, we bring on board experienced developers from India, proficient in the latest software development technologies to bring value to your team.",
          },
          {
            title: "Software QA & Testing Services",
            description:
              "At Upfront Labs, we prioritize quality assurance and digital diligence through the use of the best software testing methodologies. Our commitment to delivering results is reflected in our thorough and effective approach to testing.",
          },
          {
            title: "Business Intelligence & Analytics Solutions",
            description:
              "Tailored custom dashboards and analytics solutions, designed to meet the specific needs of your organization - that's what you can expect from Upfront Labs. Whether you're looking for a single project or ongoing consulting services, we offer competitive pricing that makes us a top choice.",
          },
          {
            title: "eCommerce Development Services",
            description:
              "At Upfront Labs, we assist ecommerce businesses in thriving by incorporating an omnichannel strategy, user-centered solutions, and customer-centric tools for insights into each customer's needs. This approach allows our clients to deliver an exceptional shopping experience and win over the expectations of modern, discerning consumers.",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Container>
        <ContentWithPaddingLg>
          <Heading>Expertise in following platforms</Heading>
          <Description>
            At Upfront Labs, our 5+ years of experience speaks for itself as a
            top service provider from India. Our dedicated team, hands-on
            experience, and expertise in Oracle Commerce Cloud, Salesforce
            Commerce Cloud, and e-commerce implementation result in exceptional
            outcomes for our clients. Contact us for more information and a free
            consultation.
          </Description>
        </ContentWithPaddingLg>
        <img src={ExpertiseImage} alt="" />
      </Container>
      <MainFeature2
        heading={
          <>
            Hire Software <HighlightedText>Developers</HighlightedText>
          </>
        }
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
