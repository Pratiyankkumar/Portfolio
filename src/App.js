import { useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import logos from "./utils/logosArray";
import { LeftContainer } from "./components/LeftContainer";
import { EndMessage } from "./components/EndMessage";
import { RightContainer } from "./components/RightContainer";

function App() {
  return (
    <div className="App bg-dark flex flex-col">
      <div className="flex flex-row">
        <LeftContainer />
        <RightContainer />
      </div>
      <EndMessage />
    </div>
  );
}

export const authCodeSnippet = `const jwt = require('jsonwebtoken')
require('dotenv').config({ path: './config/dev.env' });
const User = require('../models/user.js')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

    if (!user) {
      throw new Error({error: 'User not found!'})
    }

    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({error: 'Please authenticate'})
  }
}

module.exports = auth`;

export const restApiSnippet = `router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
      throw new Error("User not found");
    }
  
    const pass = await bcrypt.compare(req.body.password, user.password)
  
    if (pass) {
      const token = await user.generateAuthToken()
      res.send({user, token})
    } else {
      throw new Error("gmail or password is incorrect");
    } 
  } catch (error) {
    res.status(400).send({error: error.message})
  }
})`;

export function CodeSnippet({ codeString }) {
  return (
    <div className="md:w-width4 xsm:w-width4 w-width5 xmd:w-width3 text-xs xmd:text-base">
      s
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export function Scroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        // Reset scroll position to the start once it reaches halfway
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate the items enough times to ensure seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; // Quadruple for smooth effect

  return (
    <div className="overflow-hidden p-8 xmd:w-width2 md:w-width4 w-width7 rounded-md">
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-hidden whitespace-nowrap"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-none rounded-lg bg-white p-4 shadow-lg transition-transform"
          >
            <div className="h-16 w-16 flex items-center justify-center">
              {logo.svg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
