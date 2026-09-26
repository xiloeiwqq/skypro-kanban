import fs from "fs";

const html = fs.readFileSync("main.html", "utf8");
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  throw new Error("body not found");
}

let jsx = bodyMatch[1];

jsx = jsx.replace(/<!--([\s\S]*?)-->/g, (_m, comment) => {
  const safe = String(comment).replace(/\*\//g, "* /");
  return `{/*${safe}*/}`;
});

jsx = jsx.replace(/\sclass=/g, " className=");
jsx = jsx.replace(/\sfor=/g, " htmlFor=");
jsx = jsx.replace(/\sautofocus\b/gi, " autoFocus");
jsx = jsx.replace(/\sreadonly\b/gi, " readOnly");
jsx = jsx.replace(/\sstroke-width=/g, " strokeWidth=");
jsx = jsx.replace(/\sstroke-linejoin=/g, " strokeLinejoin=");
jsx = jsx.replace(/\sstroke-linecap=/g, " strokeLinecap=");
jsx = jsx.replace(/\sclip-path=/g, " clipPath=");
jsx = jsx.replace(/\sfill-rule=/g, " fillRule=");
jsx = jsx.replace(/\sclip-rule=/g, " clipRule=");
jsx = jsx.replace(/\sstroke-miterlimit=/g, " strokeMiterlimit=");
jsx = jsx.replace(/\sfont-size=/g, " fontSize=");
jsx = jsx.replace(/\sfont-family=/g, " fontFamily=");
jsx = jsx.replace(/\sfont-weight=/g, " fontWeight=");
jsx = jsx.replace(/\stabindex=/g, " tabIndex=");
jsx = jsx.replace(/\smaxlength=/g, " maxLength=");
jsx = jsx.replace(/\scolspan=/g, " colSpan=");
jsx = jsx.replace(/\srowspan=/g, " rowSpan=");
jsx = jsx.replace(/\sdatetime=/g, " dateTime=");

jsx = jsx.replace(/<(input|img|br|hr|meta|link)([^>]*?)>/gi, (_m, tag, attrs) => {
  const trimmed = attrs.trimEnd();
  if (trimmed.endsWith("/")) {
    return `<${tag}${attrs}>`;
  }
  return `<${tag}${attrs} />`;
});

jsx = jsx.replace(/src="images\//g, 'src="/images/');

const app = `import "./App.css";

function App() {
  return (
    <>
${jsx}
    </>
  );
}

export default App;
`;

fs.writeFileSync("src/App.jsx", app);
console.log("Wrote src/App.jsx, length", app.length);
