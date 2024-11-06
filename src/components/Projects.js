import { Heading } from "./Heading";
import { ProjectCard } from "./ProjectCard";
import { openLink } from "./openLink";

export function Projects() {
  return (
    <div className="mt-5 flex flex-col items-start">
      <Heading upperText="RECENT" belowText="PROJECTS" fontSize="text-8xl" />
      <div>
        <ProjectCard
          projectName="Chat APP"
          imageURL="https://img.freepik.com/free-vector/messages-concept-illustration_114360-583.jpg"
          link="https://github.com/Pratiyankkumar/Chat-App"
        >
          <>
            <img alt="" src="images/html.svg" className="size-8" />
            <img alt="" src="images/css.svg" className="size-8" />
            <img alt="" src="images/js.svg" className="size-8" />
            <img
              alt=""
              src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
              className="size-20"
            />
            <img alt="" src="images/express.svg" className="size-20" />
            <img
              alt=""
              src="https://www.svgrepo.com/show/331488/mongodb.svg"
              className="size-8"
            />
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              className="size-8"
            />
          </>
        </ProjectCard>
        <ProjectCard
          projectName="X Clone"
          link="https://github.com/Pratiyankkumar/Twitter-clone"
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rEXPGfPJRMyd8JQVy23a86IvefgbUOKwbTLQPUuz2meDfiurwnV5E_Qgyk_c1bNXy8E&usqp=CAU"
        >
          <>
            <img alt="" src="images/html.svg" className="size-8" />
            <img alt="" src="images/css.svg" className="size-8" />
            <img alt="" src="images/js.svg" className="size-8" />
            <img
              alt=""
              src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
              className="size-20"
            />
            <img alt="" src="images/express.svg" className="size-20" />
            <img
              alt=""
              src="https://www.svgrepo.com/show/331488/mongodb.svg"
              className="size-8"
            />
          </>
        </ProjectCard>
        <ProjectCard
          link="https://github.com/Pratiyankkumar/My-AI"
          projectName="AI ChatBot"
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_A5Wpa9ff7Ote5arkGDkrPs6PYo2HQigTQ&s"
        >
          <>
            <img alt="" src="images/html.svg" className="size-8" />
            <img alt="" src="images/css.svg" className="size-8" />
            <img alt="" src="images/js.svg" className="size-8" />
            <img alt="" src="images/gemini.svg" className="size-8" />
          </>
        </ProjectCard>
        <ProjectCard
          projectName="Amazon Clone"
          link="https://github.com/Pratiyankkumar/Amazon-clone"
          imageURL="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
          linkContainer={
            <div
              onClick={() => openLink("https://github.com/Pratiyankkumar")}
              className="flex flex-row items-center font-bold text-2xl cursor-pointer mt-4 text-white mb-6"
            >
              <p className="sm:text-xl text-sm">And many more on </p>
              <div className="px-2 py-2 bg-white rounded-full flex flex-row items-center sm:ml-6 ml-3">
                <p className="text-black sm:text-xl text-sm">Github</p>
                <img src="images/github.svg" className="size-6 ml-2" alt="" />
              </div>
            </div>
          }
        >
          <>
            <img alt="" src="images/html.svg" className="size-8" />
            <img alt="" src="images/css.svg" className="size-8" />
            <img alt="" src="images/js.svg" className="size-8" />
          </>
        </ProjectCard>
      </div>
    </div>
  );
}
