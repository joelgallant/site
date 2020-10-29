import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 2000px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 80vw;
  }
`

export default function () {
  return (
    <Container>
      <Intro />
      <Skills />
      <Recommendations />
    </Container>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  &:not(:first-of-type) {
    margin-top: 50px;
  }

  &:first-of-type {
    margin-top: 80px;

    @media (max-width: 750px) {
      margin-top: 100px;
    }
  }

  @media (max-width: 990px) {
    margin: 0 5%;
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 1em 0 0 0;
  }
`

const RightBox = styled(Box)`
  align-self: flex-end;
  text-align: end;
`

const Intro = () => (
  <RightBox>
    <h2>Who am I?</h2>
    <p>
      I&apos;m a curious life-long learner. I&apos;m self-taught in programming,
      and have been using computers to build things for as long as I can
      remember. I&apos;m Canadian, male (he/him), and this is the only place on
      the internet where you&apos;ll find any activity from me (
      <a href="https://www.privacytools.io/">delete</a>{' '}
      <a href="https://github.com/nikitavoloboev/privacy-respecting">
        Facebook
      </a>
      ).
    </p>

    <p>
      In particular, I care deeply about the social and political goals of Free
      Software (FOSS). Linux and the community around it enabled me to learn and
      grow as a kid, in many ways that would have been inaccessible to me in a
      corporate world. I try to bring this philosophy wherever I go.
    </p>

    <p>
      Some of the most important things in my life have been{' '}
      <a href="https://www.firstinspires.org/">FIRST Robotics</a>, the{' '}
      <a href="https://www.rust-lang.org/">Rust</a> programming language (and
      community), FIRE (Financial Independence), Secular Buddhism, travel, and
      my family. I tend to be obsessed with something at any given time - at the
      moment it&apos;s Formula 1 racing.
    </p>

    <p>
      In work, I consider craftsmanship and durability. I deeply believe that
      creative work needs an "end" - understanding a problem is most of the work
      in solving it. This perspective is usually taken too far - perfectionism
      without reason is just wasting time. My work is understanding and helping
      human beings.
    </p>
  </RightBox>
)

const Skills = () => (
  <Box>
    <h2>Skills</h2>
    <p>
      I tend to be very flexible in my technical skills. I&apos;m a polyglot
      that&apos;s always looking to learn another language, but my preferred
      environments usually include TypeScript, Rust, or Python. I&apos;m
      actually quite comfortable in a "full-stack" environment - I&apos;ve
      worked on everything from embedded real-time computer vision tasks, to
      complex scheduling algorithms, to highly interactive (photoshop-like) user
      interfaces. I like plumbing and scaffolding, and tend to help with devops
      as well (I&apos;ve dealt with Dockerfiles and build systems more than
      anyone ever should).
    </p>

    <p>
      When building UIs, I tend to use React (though Vue interests me a lot). My
      general opinion is to build the data architecture before worrying about
      presentation layers. Libraries like{' '}
      <a href="https://mobx-state-tree.js.org">mobx-state-tree</a> make a lot of
      sense to me. Identity maps and data models are very close to the way my
      brain operates. <a href="https://orbitjs.com/">Orbit</a> seems close to my
      ideal. I do normally take a much more practical approach though.
    </p>

    <p>
      For APIs, I try to keep my options open. For simple CRUD applications, I
      do what&apos;s most comfortable for me - Node.js, an ORM (Objection.js),
      and PostgreSQL exposing REST endpoints. I&apos;ve built systems with gRPC,
      WebSockets, and dabbled with GraphQL. Problems that should not be solved
      with a relational database, in my experience, are few and far between.
    </p>

    <p>
      I&apos;ve been well positioned to learn management, leadership and
      mentorship skills as well. I&apos;ve led small teams, taught many juniors
      and high-school students CS fundamentals, and have done a lot of hiring
      for small to medium sized employers. I&apos;m keenly interested in
      continuing this trajectory, and intend to one day build a business.
      I&apos;ve also been involved in grant applications and 2 patents.
    </p>

    <p>
      I realised that I probably need a "miscellaneous" section here, as my work
      with FIRST Robotics has given me the opportunity to work with Solidworks
      (CAD) and 3D printing quite a bit. Along these lines, hobbyist electronics
      are a hobby of mine (I like <a href="https://eater.net/">Ben Eater</a>
      &apos;s stuff).
    </p>

    <p>
      There&apos;s a lot more I could say here (I do have a <i>lot</i> of
      opinions), but generally I keep an open mind. I play devil&apos;s advocate
      a lot, because every problem deserves exploring grey areas.
    </p>
  </Box>
)

const Recommendations = () => (
  <RightBox>
    <h2>Recommendations</h2>
    <p>
      I figure that while I have you&apos;re attention, I&apos;ll write down a
      list of some of the influential writing and media I&apos;ve taken note of.
      I&apos;m always reading a new book, watching conference talks and
      indulging in podcasts, so send any recommendations my way!
    </p>

    <ul>
      <li>
        Any Bryan Cantrill talk is awesome -{' '}
        <a href="https://www.youtube.com/watch?v=9QMGAtxUlAc">an example</a>
      </li>
      <li>
        <a href="https://nostarch.com/howlinuxworks2">How Linux Works</a> - the
        book I wish I had 10 years ago
      </li>
      <li>
        <a href="https://jamesclear.com/atomic-habits">Atomic Habits</a> - how I
        remain "productive"
      </li>
      <li>
        <a href="https://pragprog.com/titles/btlang/seven-languages-in-seven-weeks/">
          Seven Languages in Seven Weeks
        </a>{' '}
        - good intro for some PL topics
      </li>
      <li>
        <a href="https://www.microsoftpressstore.com/store/code-the-hidden-language-of-computer-hardware-and-software-9780735611313">
          Code: The Hidden Language of Computer Hardware and Software
        </a>
      </li>
    </ul>
  </RightBox>
)
