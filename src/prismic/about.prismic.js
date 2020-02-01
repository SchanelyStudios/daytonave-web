import { renderHtml, renderText, resolveYoutubeId } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.about_page;

  // Set up belief tiles
  let beliefItems = page.beliefs_summary.map((belief) => {
    return {
      label: renderText(belief.belief_heading),
      content: renderHtml(belief.belief_copy),
      figure: {
        alt: belief.belief_icon.alt,
        src: belief.belief_icon.url
      }
    }
  });

  // Set up pastors list
  let pastors = page.pastoral_team.map(({ pastoral_team_member: pastor }) => {
    return {
      name: renderText(pastor.name),
      position: renderText(pastor.position),
      figure: {
        alt: "",
        src: pastor.picture.url
      }
    };
  });

  // Set up faqs
  let faqs = page.faqs.map(({ question, answer }) => {
    return {
      question: renderText(question),
      answer: renderHtml(answer)
    };
  });

  return {
    title: renderText(page.page_title),
    intro: {
      title: renderText(page.intro_heading),
      lead: renderHtml(page.intro_lead),
      copy: renderHtml(page.intro_copy),
    },
    videoId: resolveYoutubeId(page.about_us_video),
    beliefs: {
      heading: renderText(page.beliefs_heading),
      items: beliefItems,
      link: {
        label: "Read our Church Doctrines",
        path: page.beliefs_link._meta.uid
      }
    },
    pastoral_team: {
      heading: renderText(page.pastors_heading),
      pastors
    },
    faqs: {
      heading: renderText(page.faqs_heading),
      faqs
    }
  }
}
