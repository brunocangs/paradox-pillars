import React from "react";
import { useRouter } from "next/router";
import texts from "../../texts.json";

export const getServerSideProps = (ctx) => {
  const slug = (ctx.params?.slug as string) || "";
  if (!texts[slug])
    return {
      notFound: true,
    };
  return {
    props: {
      ...texts[slug],
    },
  };
};

const TextPage = (props) => {
  const { title, subtitle, content } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <hr />
      {content.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
    </div>
  );
};

export default TextPage;
