import Exercise from "../exerciseComponent/exercise";

const AllExercises = [
  {
    path: "/pullup",
    component: Exercise,
    props: {
      title: "Pull Up",
      innertext: "this is a fuckin a Pull Up bro"
    },
    tags: [
      "arms"
    ]
  },
  {
    path: "/chinup",
    component: Exercise,
    props: {
      title: "Chin Up",
      innertext: "this is a fuckin a Chin Up bro"
    },
    tags: [
      "arms"
    ]
  },
  {
    path: "/pushup",
    component: Exercise,
    props: {
      title: "Push Up",
      innertext: "this is a fuckin a Push Up bro"
    },
    tags: [
      "arms"
    ]
  },
  {
    path: "/russiantwist",
    component: Exercise,
    props: {
      title: "Russian Twist",
      innertext: "this is a fuckin a Russian Twist bro"
    },
    tags: [
      "core"
    ]
  },
  {
    path: "/plank",
    component: Exercise,
    props: {
      title: "Plank",
      innertext: "this is a fuckin a Plank bro"
    },
    tags: [
      "core"
    ]
  },
  {
    path: "/shoulderpushup",
    component: Exercise,
    props: {
      title: "Shoulder Push Up",
      innertext: "this is a fuckin a Shoulder Push Up bro"
    },
    tags: [
      "arms"
    ]
  }
];

export default AllExercises;
