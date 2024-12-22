import AppearingBox from "../boxes/AppearingBox";
import ImageBox from "../boxes/ImageBox";

export default function Projects() {
    return <div className="new-section" id="projects" >
        <AppearingBox>
            <h1 className='title'>Projects</h1>
            <p className="description">Continue reading if you'd like to know the stories behind some of my projects.</p>
        </AppearingBox>
        <AppearingBox marginBottom="150px">
            <h3 className='subtitle'><a href="https://recreatedesign.substack.com/">Recreate.design</a></h3>
            <p className="description mb-6">Recreate.design was a blog I started to help solo founders make their websites better with short, actionable articles. I also wanted to learn more about web design and marketing. While I miserably failed at the marketing part, my designing and writing skills have improved a lot. But it came with a cost:</p>
            <p className="description mb-6">The price of learning was apathy. While already standing on the edge of a burn out, this project was the cherry on the cake. Still, I haven't managed to fully recover from that, which is why I'm trying to find something new and exciting nowadays, to feel that spark I felt when I started programming.</p>
            <ImageBox imageUrl="/recreate-design.png" description="I lowkey miss writing for recreate.design." alt="The logo of recreate.design" height={250}/>
        </AppearingBox>
        <AppearingBox marginBottom="150px">
            <h3 className='subtitle'><a href="https://github.com/milanfulop/explainer">Explainer</a></h3>
            <p className="description mb-6">Way before Recreate.design, I built an app to help students learn more efficiency using AI. I made this app for an international competition, but even though I didn't get into the second round, this project taught me a ton about app development.</p>
            <p className="description mb-6">It also pushed me to improve my speaking and social skills. I used to be super shy before, and I'm still searching for ways to fight that. If you'd like to hear me present the app in hungarian, <a href="https://www.youtube.com/watch?v=X8COxr6bHpw">check it out here</a>! :)</p>
        </AppearingBox>
        <AppearingBox>
            <h3 className='subtitle'>devRoot</h3>
            <p className="description mb-6">devRoot is a platform to help hungarian IT students and teachers (and also self-taught IT students) find hungarian coding projects and assignments to improve their skills. It's planned to launch in early 2025.</p>
            <p className="description mb-6">We are a team of 4 high-school students with a mentor. I'm working as one of the designers and front-end developers.</p>
            <p className="description mb-6">I've been learning a lot about networking and teamwork here. We are still improving how we present the team's vision, ideas and lessons to audiences.</p>
        </AppearingBox>
    </div>
}

//<p className="description">If you'd prefer to see a listed version of my projects instead of an article, click <a href="/projects">here</a></p>