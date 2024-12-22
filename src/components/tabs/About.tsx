import AppearingBox from "../boxes/AppearingBox";
import CustomBox from "../boxes/CustomBox";
import ImageBox from "../boxes/ImageBox";

export default function About() {
    return (
        <div id="about">
            <CustomBox>
                <p className="description">
                    7 years ago, my brother Martin introduced me to programming. Since then, I've participated in national competitions, workshops, team projects, while learning (and failing) a lot. Programming has immensely shaped the way I approached real-life problems as I've grown up. 
                    <br /><br />
                    I'm 17 now, and I can confidently say computers have changed my life for the better. It not only has given me the tools to build software, but to build my future: the <span>love</span>, experiences, and discoveries that await.
                </p>
            </CustomBox>

            <CustomBox marginTop="100px" marginBottom="100px">
                <ImageBox imageUrl="/childhood-photo.png" description="This kid used to be me. Hi!" alt="Childhood photo of me" loadingType="eager"/>
            </CustomBox>

            <AppearingBox  marginBottom="150px">
                <p className="description">
                    Over the past few years, I've been exploring how ideas actually turn into reality. I used to run a blog pointing out ui/ux mistakes made by technical founders, while offering actionable solutions in a digestible way. Although the blog was short-lived, it managed to inspire people to fix issues I highlighted.
                    <br /><br />
                    Even though I haven't built anything that's reached a wider audience yet, I often see my past work guiding me toward my next steps.
                </p>
            </AppearingBox>

            <AppearingBox marginTop="100px" marginBottom="100px">
                <ImageBox width={700} imageUrl="/helped-somebody.png" description="One of the founders I've inspired. :)" alt="A founder I've inspired" loadingType="lazy"/>
            </AppearingBox>

            <AppearingBox marginBottom="25px">
                <p className="description">
                    I believe that every key I've pressed, every word I've written, every mistake I've made, and every wave of uncertainty I've faced will ultimately shape me into the person my subconscious self wants me to become.
                </p>
            </AppearingBox>

            <AppearingBox>
                <p className="description">
                    Into someone that's truly authentic to me.
                </p>
            </AppearingBox>
        </div>
    );
}
