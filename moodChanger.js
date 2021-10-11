const mood = document.querySelector("#mood");
const celebrateBtn = document.querySelector("#celebrating");
const stressedBtn = document.querySelector("#stressed");
const facePalmBtn = document.querySelector("#facePalm");
const fightMeBtn = document.querySelector("#fightMe");
const initState = store.getState();
mood.innerText = initState.mood;

celebrateBtn.addEventListener("click", function () {
  store.dispatch({ type: "CELEBRATING" });
  const state = store.getState();
  mood.innerText = state.mood;
});

stressedBtn.addEventListener("click", function () {
  store.dispatch({ type: "STRESSED" });
  const state = store.getState();
  mood.innerText = state.mood;
});

facePalmBtn.addEventListener("click", function () {
  store.dispatch({ type: "FACE PALM" });
  const state = store.getState();
  mood.innerText = state.mood;
});

fightMeBtn.addEventListener("click", function () {
  store.dispatch({ type: "FIGHT ME" });
  const state = store.getState();
  mood.innerText = state.mood;
});
