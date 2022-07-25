import React from "react";
import { useRouter } from "next/router";
import texts from "../../texts.json";

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: "0",
        },
      },
      {
        params: {
          slug: "1",
        },
      },
      {
        params: {
          slug: "2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
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
