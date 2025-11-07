const path = require("path");
const oc = require("oc");

// 👇 Add this import
const ocTemplateReact = require("oc-template-react");

const configuration = {
  baseUrl: "http://localhost:3030",
  port: 3030,
  verbosity: 2,
  path: path.join(__dirname, "../components"),
  local: true,
  hotReloading: true,
  discovery: true,
  liveReloadPort: 35729,
  compileClient: true,
  staticPath: path.join(__dirname, "../components/_package"),

  cdn: {
    provider: "local",
    path: path.join(__dirname, "../components/_package"),
  },

  // 👇 Add this line to register the React template
  templates: [ocTemplateReact],
};

const registry = new oc.Registry(configuration);

registry.start((err) => {
  if (err) {
    console.error("❌ Failed to start registry:", err);
  } else {
    console.log(`✅ OC Registry running at ${configuration.baseUrl}`);
  }
});
