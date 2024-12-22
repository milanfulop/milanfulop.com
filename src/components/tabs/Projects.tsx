import AppearingBox from "../boxes/AppearingBox";
import ImageBox from "../boxes/ImageBox";

export default function Projects() {
    return <div className="new-section" id="projects" >
        <AppearingBox>
            <h1 className='title'>Projects</h1>
            <p className="description">Continue reading if you'd like to know the stories behind some of my projects.</p>
        </AppearingBox>
        <AppearingBox marginBottom="250px">
            <h3 className='subtitle'><a href="https://recreatedesign.substack.com/">Recreate.design</a></h3>
            <p className="description mb-6">Recreate.design was a blog I started to help solo founders make their websites look and feel better with short, actionable articles. Aside to this goal, I also wanted to learn more about web design and marketing. While I miserably failed at the marketing part, my designing and writing skills have improved a lot, but at a cost:</p>
            <p className="description mb-6">The price of learning was apathy. While already standing on the edge of a burn out, this project was the cherry on the cake. Still, I haven't managed to fully recover since then. This is one of the main reasons why I'm trying to find something new and exciting nowadays, to feel the spark I felt when I started programming.</p>
            <ImageBox imageUrl="/recreate-design.png" description="I lowkey miss writing for recreate.design." alt="The logo of recreate.design" height={250}/>
        </AppearingBox>
        <AppearingBox marginBottom="250px">
            <h3 className='subtitle'><a href="https://github.com/milanfulop/explainer">Explainer</a></h3>
            <p className="description mb-6">Way before recreate.design, I made an app to help students boost their learning efficiency with AI. I made this app for the first round of an international competition. Even though I didn't get into the second round, this project teached me app development on a deeper level.</p>
            <p className="description mb-6">It also launched me on a path to improve my speaking and social skills. I used to be very shy before, and I'm still searching for ways to fight that. If you'd like to hear me present the app in hungarian, <a href="https://www.youtube.com/watch?v=X8COxr6bHpw">check    this out</a>! :)</p>
        </AppearingBox>
        <AppearingBox marginBottom="250px">
            <h3 className='subtitle'>devRoot</h3>
            <p className="description mb-6">devRoot is a national platform to help IT students and teachers (also self-motivated IT students) find hungarian coding projects and assignments to improve their skills. It's planned to launch in early 2025</p>
            <p className="description mb-6">We are a team of 4 high-school students with a mentor. I'm working as one of the designers and front-end developers.</p>
            <p className="description mb-6">I've been learning a lot about networking and teamwork here. We are still improving at presenting the team's vision, ideas and lessons to audiences.</p>
        </AppearingBox>
    </div>
}

//<p className="description">If you'd prefer to see a listed version of my projects instead of an article, click <a href="/projects">here</a></p>