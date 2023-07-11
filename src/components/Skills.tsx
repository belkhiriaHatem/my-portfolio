import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center px-10 text-center md:flex-row md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        Skills
      </h3>

      <h3 className="absolute top-28 text-xs uppercase tracking-[5px] text-[#7d8679]">
        Hover over a skill😌
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill
          prct={95}
          directionLeft={true}
          img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        />
        <Skill
          prct={80}
          directionLeft={true}
          img="https://res.cloudinary.com/practicaldev/image/fetch/s--6LfYwHeK--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1608/0f93b179-76bf-4ee7-a838-e8222fbef062.png"
        />
        <Skill
          prct={90}
          directionLeft={true}
          img="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg"
        />
        <Skill
          prct={75}
          directionLeft={true}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
        />
        <Skill
          prct={85}
          directionLeft={true}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"
        />
        <Skill
          prct={80}
          directionLeft={true}
          img="https://www.e-spincorp.com/wp-content/uploads/2020/06/laravel-php-framework.jpg"
        />
        <Skill
          prct={90}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/636px-Database-mysql.svg.png?20220815123837"
        />
        <Skill
          prct={70}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png?20161105194737"
        />
        <Skill
          prct={85}
          img="https://res.cloudinary.com/apideck/image/upload/v1616206509/icons/trpc-io.png"
        />
        <Skill
          prct={90}
          img="https://d2ooyrflu7lhqd.cloudfront.net/next_js_framework_7c8abcd653.jpeg"
        />
        <Skill
          prct={70}
          img="https://g.foolcdn.com/art/companylogos/square/mdb.png"
        />
        <Skill
          prct={75}
          img="https://i0.wp.com/www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png?w=500&ssl=1"
        />
        <Skill
          prct={70}
          img="https://avatars.githubusercontent.com/u/836974?s=200&v=4"
        />
      </div>
    </motion.div>
  );
}
