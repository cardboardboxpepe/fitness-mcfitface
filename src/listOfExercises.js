import { Exercise } from "./exerciseComponent/exercise";
import { MainPage } from "./mainPageComponent/mainpage"

const AllExercises = [
  {
    path: "/",
    component: MainPage,
    props: {
      title: "Welcome to Fitness McFitFace",
      innertext: "This website is powered by react."
    }
  },
  {
    path: "/pullup",
    component: Exercise,
    props: {
      title: "Pull Up",
      innertext: "this is a fuckin a Pull Up bro"
    }
  },
  {
    path: "/chinup",
    component: Exercise,
    props: {
      title: "Chin Up",
      innertext: "this is a fuckin a Chin Up bro"
    }
  },
  {
    path: "/pushup",
    component: Exercise,
    props: {
      title: "Push Up",
      innertext: "this is a fuckin a Push Up bro"
    }
  },
  {
    path: "/russiantwist",
    component: Exercise,
    props: {
      title: "Russian Twist",
      innertext: "this is a fuckin a Russian Twist bro"
    }
  },
  {
    path: "/plank",
    component: Exercise,
    props: {
      title: "Plank",
      innertext: "this is a fuckin a Plank bro"
    }
  },
  {
    path: "/shoulderpushup",
    component: Exercise,
    props: {
      title: "Shoulder Push Up",
      innertext: "this is a fuckin a Shoulder Push Up bro"
    }
  }
];

export default AllExercises;
