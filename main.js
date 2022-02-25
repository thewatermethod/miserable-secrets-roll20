// The big old dictionary that stores our character class info
const Backgrounds = {
  Alchemist: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  "Dream-Thief": {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  Evangelist: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  "Half-Noble": {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  Hunter: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  "Numerological Monk": {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  "Wise One": {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  Witchfinder: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
  Wolf: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
  },
};

function updateRepeatedRows(slug, newValues) {
  // clear out old values
  getSectionIDs(slug, (oldValues) => {
    oldValues.forEach((v) => removeRepeatingRow(`${slug}_${v}`));
  });

  setAttrs(newValues);
}

// The on change handler for changing character class
on("change:Background", (e) => {
  const { newValue } = e;
  const { Description } = Backgrounds[newValue];

  // update w/ new values
  const attrs = Description.reduce((previousValue, currentValue) => {
    const id = generateRowID();
    return {
      ...previousValue,
      [`repeating_descriptions_${id}_desc`]: currentValue,
    };
  }, {});

  updateRepeatedRows("repeating_descriptions", attrs);
});
