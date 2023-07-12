// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to SuperMinds, where we unleash the power of cutting-edge
        technology and create extraordinary digital experiences! At SuperMinds,
        we are passionate about pushing the boundaries of innovation and
        crafting the coolest web applications that leave a lasting impression.
        📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Chingu</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">Bruno Simon</a>
        </li>
        <li>
          <a href="https://poly.pizza">Poly Pizza</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">Synty Studios</a>
        </li>
        <li>
          <a href="https://streakbyte.com">Streak Byte</a>
        </li>
        <li>
          <a href="https://github.com/chingu-voyages/v43-tier3-team-29">
            More Credits
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
