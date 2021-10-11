const INITIAL_STATE = { mood: "(・∀・)" };

const moodChanger = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CELEBRATING":
      return { ...state, mood: "＼(^◇^)／" };
    case "STRESSED":
      return { ...state, mood: "⊙.☉" };
    case "FACE PALM":
      return { ...state, mood: "(－‸ლ)" };
    case "FIGHT ME":
      return { ...state, mood: "(งᓀ‸ᓂ)ง" };
    default:
      return state;
  }
};

const store = Redux.createStore(moodChanger);
