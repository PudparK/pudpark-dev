import React from "react";
import styles from "./styles.module.scss";

// Components
import PageTemplate from "component/layout-component/PageTemplate";
import PostContainer from "component/layout-component/PostContainer";
import Sidebar from "component/layout-component/Sidebar";
import SocialStack from "component/layout-component/SocialStack";

const post = {
  type_of: "article",
  id: 359907,
  title: "Hello, DEV.to!",
  description:
    "This is my first post. I plan to use the DEV API to extract this data and put it on my personal site....",
  published: true,
  published_at: "2020-06-20T23:15:17.109Z",
  slug: "hello-dev-to-1ghh",
  path: "/pudpark/hello-dev-to-1ghh",
  url: "https://dev.to/pudpark/hello-dev-to-1ghh",
  comments_count: 13,
  public_reactions_count: 37,
  page_views_count: 343,
  published_timestamp: "2020-06-20T23:15:17Z",
  body_markdown:
    "This is my first post. I plan to use the DEV API to extract this data and put it on my personal site. Here goes nothing!!!\n#🤞",
  positive_reactions_count: 37,
  cover_image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--9CZQeSKU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--SAkOX55K--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/jz1sr57svwcj3mxki6jt.jpg",
  tag_list: ["react", "javascript", "css", "node", "default"],
  canonical_url: "https://dev.to/pudpark/hello-dev-to-1ghh",
  user: {
    name: "Paul Barron",
    username: "pudpark",
    twitter_username: "paul__132",
    github_username: "PudparK",
    website_url: "https://www.pudpark.dev",
    profile_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ALy-TApm--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/305006/c27cea27-9777-416e-8db5-fa48286ae838.jpeg",
    profile_image_90:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qgoenv3n--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/305006/c27cea27-9777-416e-8db5-fa48286ae838.jpeg",
  },
};

function Blog() {
  return (
    <PageTemplate title="Blog">
      <PostContainer className={styles.postContainer} data={post} />
      <SocialStack />
    </PageTemplate>
  );
}

export default Blog;
