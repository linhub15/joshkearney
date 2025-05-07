import vento from "lume/plugins/vento.ts";
import lume from "lume/mod.ts";
import tailwind from "lume/plugins/tailwindcss.ts";

const site = lume({ src: "./src" });

site.use(vento({
  extensions: [".vento", ".vto", ".html"],
  options: {},
}));

site.use(tailwind());
site.add("style.css");

export default site;
