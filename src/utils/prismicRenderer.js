import React from "react";
import { RichText } from "prismic-reactjs";
import linkResolver from "./linkResolver";

const renderHtml = (content) => {
  return (
    <RichText
      render={content}
      linkResolver={linkResolver}
    />
  );
};

const renderText = (content) => {
  return RichText.asText(content);
};

const resolveYoutubeId = (video) => {
  return video.embed_url.replace("https://youtu.be/", "");
};

const resolveImage = (image) => {
  return image ? {
    src: image.url,
    alt: image.alt
  } : null;
};

export { renderHtml, renderText, resolveYoutubeId, resolveImage };
