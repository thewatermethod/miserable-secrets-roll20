// The dictionaries

const DESCRIPTIONS = {
  Alchemist: `<p>...have replaced their blood with finely-wrought liquid machinery.</p> 
    <p>...search for the secrets of natural philosophy.</p> 
    <p>...often have wealthy patrons, though their self-made blood makes
the Noblesse suspicious</p>
    `,
  "Dream-Thief": "",
  Evangelist: "",
  "Half-Noble": "",
  Hunter: "",
  "Numerological Monk": "",
  "Wise One": "",
  Witchfinder: "",
  Wolf: "",
};

const BACKGROUNDS = {
  Alchemist: [],
  "Dream-Thief": [],
  Evangelist: [],
  "Half-Noble": [],
  Hunter: [],
  "Numerological Monk": [],
  "Wise One": [],
  Witchfinder: [],
  Wolf: [],
};

// sources of dom truth
const background = document.querySelector('[name="attr_Background"]');
const description = document.querySelector('[name="attr_Description"');

const logPowers = (bg) => {
  const powers = BACKGROUNDS[bg];
  if (!powers) {
    throw new Error(); // todo - catch this
  }

  console.log(powers);
};

const setDescription = (bg) => {
  const backgroundDescription = DESCRIPTIONS[bg];
  if (!backgroundDescription || !description) {
    throw new Error(); // todo - catch this
  }

  description.value = backgroundDescription;
  description.nextElementSibling.innerHTML = description.value;
};

background.addEventListener("change", (e) => {
  const newBackground = e.target.value;
  setDescription(newBackground);
  logPowers(newBackground);
});
