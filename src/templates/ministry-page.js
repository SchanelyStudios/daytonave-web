import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../components/common/section-header";
import Spread from "../components/common/spread";
import Slices from "../components/slices";
import TempPage from "./temp-page";

import ContentService from "../services/content.service";

export const query = graphql`
  fragment minsitryPagelinkQuery on PRISMIC__Linkable {
    _linkType
    ... on PRISMIC__ExternalLink{
      url
    }
    ... on PRISMIC__FileLink{
      name
      url
      size
    }
    ... on PRISMIC_Test_open_page{
      title1
      _meta{
        uid
      }
    }
    ... on PRISMIC_Event_page{
      event_title
      _meta{
        uid
      }
    }
  }
  query MinistryPageQuery($uid: String!) {
    prismic {
      ministry(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        ministry_name
        body{
          ... on PRISMIC_MinistryBodyBlob {
            type
            primary {
              title
              lead
              content
              call_to_action {
                ...minsitryPagelinkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodySpread {
            type
            primary {
              title1
              lead
              content
              figure
              call_to_action {
                ...minsitryPagelinkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodyFlier {
            type
            primary {
              title1
              content
              figure
              call_to_action {
                ...minsitryPagelinkQuery
              }
            }
          }
          ... on PRISMIC_MinistryBodyTiles {
            type
            primary{
              title1
              introduction
              tile_type
            }
            fields {
              figure
              label
              sublabel
              content
              call_to_action {
                ...minsitryPagelinkQuery
              }
            }
          }
          __typename
        }
      }
    }
  }
`;

const MinistryPage = ({ data }) => {
  const copy = ContentService.ministryPage(data);

  if (!copy) {
    return (
      <Layout activeNavPath="/">
        <TempPage />
      </Layout>
    );
  }

  return (
    <Layout activePath={`/events/${copy.slug}`}>
      <SEO title={copy.title} />
      <SectionHeader>
        {copy.title}
      </SectionHeader>
      <Spread figure={copy.thumbnail}>
        {copy.summary}
      </Spread>
      <Slices slices={copy.slices} />
    </Layout>
  );
}

export default MinistryPage;
