// The big old dictionary that stores our character class info
const Backgrounds = {
  Alchemist: {
    Description: [
      `...have replaced their blood with finely-wrought liquid machinery.`,
      `...search for the secrets of natural philosophy.`,
      `...often have wealthy patrons, though their self-made blood makes
  the Noblesse suspicious`,
    ],
    Powers: [
      {
        Selected: true,
        Name: "Shining Whip",
        Cost: "♦",
        Description: "You extend your blood into a long rope with a sharp end.",
        Investigation:
          "When you climb the rope of your own blood, you easily succeed in your climb",
        Battle: "When you {flurry } with your rope, you have Sweep 3.",
      },
      {
        Selected: true,
        Name: "Ichor",
        Cost: "♦♦",
        Description:
          "Your golden blood can be shaped... and when you shed it, it's as if you're still present.",
        Investigation:
          "When you leave a drop of your blood behind in a location, you may {dig} by observing others without being physically present",
        Battle:
          "When you form your blood into liquid armor, you may play an Ace to {block} as if it were a Queen",
      },
      {
        Selected: false,
        Name: "Discernment",
        Cost: "♠♦♦",
        Description:
          "Through the sciences of chemistry and microscopy, you reveal the unseen",
        Investigation:
          "When you look for tiny, near-invisible details, you may automatically succeed at { digging}",
        Battle:
          "When an ally {grants opportunity} to a foe, that foe {grants opportunity} to you.",
      },
      {
        Selected: false,
        Name: "Homunculus",
        Cost: "♣♣♦",
        Description:
          "You form your blood into a small, golden replica of yourself, which seeks other things of value",
        Investigation:
          "When you send your homunculus to look for a specific object of value, you may automatically succeed at {digging }.",
        Battle:
          "When you send your homunculus forth into the fray, you can manipulate it with your own {basic moves}. Its position counts as if it were you, including for flanking and adjacency. The homunculus also has Jump.",
      },
    ],
  },
  "Dream-Thief": {
    Description: [
      `...come from the far south, and are often believed to be the dev-
      il-rulers of those lands.`,
      `...sustain themselves on the nightly wants of mortals and Noblesse
      alike.`,
      `...speak all the languages of Christendom, and take their names
      from common words.`,
    ],
    Powers: [
      {
        Selected: true,
        Name: "Wings of Dream",
        Cost: "♠",
        Description:
          "Your wings unfurl, and you are raised by dreams and propelled by nightmares",
        Investigation: "You can fly.",
        Battle: "When you {move}, you may fly and may end any turn Flying",
      },
      {
        Selected: true,
        Name: "Glory of Dream",
        Cost: "♠♠",
        Description: "A dream is a secret the heart keeps.",
        Investigation:
          "When you walk in the dreams of another person, you may {recover } and {dig} on the same turn.",
        Battle:
          "When you remind an ally of one of their dreams, you may play any card, and they gain 1 Hope.",
      },
      {
        Selected: false,
        Name: "A Coin for a Thought",
        Cost: "♠♠♦",
        Description: "You give worldly goods for something far more valuable.",
        Investigation:
          "When you destroy a treasure, you may automatically succeed at {forming a bond } with a spirit.",
        Battle:
          "When you destroy a treasure belonging to a foe, you deal 2 damage to that foe.",
      },
      {
        Selected: false,
        Name: "Soporific Hymn",
        Cost: "♠♠♥",
        Description:
          "Your singing lulls those who listen to a sleep full of happy recollections",
        Investigation:
          "When you spend your turn to sing an ally to sleep, each of you gains 1 Hope.",
        Battle:
          "When you sing the sweetest of songs, you may { mark} a foe. That foe may only play aces or queens-as-aces until the start of your next turn. Your mark also goes away at the start of your next turn.",
      },
    ],
  },
  Evangelist: {
    Description: [
      `...have experienced an epiphany that drives them to spread God's
      word.`,
      `...are often considered living saints.`,
      `...are both valued and watched carefully by the Church`,
    ],
    Powers: [
      {
        Cost: "♥",
        Selected: true,
        Name: "Living Psalter",
        Description: "You have the right words for any situation.",
        Investigation:
          "When you {defend} yourself with scripture, you may count any card as a heart.",
        Battle:
          "When you cite scripture to your cause, you may {mark} an ally. All of that ally's actions are Sacred until the start of your next turn.",
      },
      {
        Cost: "♠♥",
        Selected: true,
        Name: "Rouse Faith",
        Description: "You stir the moral passion of your allies.",
        Investigation:
          "When you preach to an audience, you may { form a bond} with them as a group.",
        Battle:
          "When you shout inspiring words to your allies, you may play cards, giving 1 Hope to an ally, +1 for every value match. You may split this Hope among as many allies as you like.",
      },
      {
        Cost: "♥♥♥",
        Selected: false,
        Name: "Fire and Brimstone",
        Description:
          "You put the fear of God into people... whether they believe or not!",
        Investigation:
          "When you speak frightening words about God's judgment, you may automatically succeed at denigrating someone.",
        Battle:
          "When you call judgment upon a foe, they suffer Vulnerable (Sacred) 1 until the end of the scene",
      },
      {
        Cost: "♣♥♥",
        Selected: false,
        Name: "Reveal the Deceiver",
        Description:
          "Having been tempted, you see the efforts of the Great Liar for what they are.",
        Investigation:
          "When you speak intimately with someone who has lost their faith, you may automatically succeed at {forming a bond}, whether you convince them or not.",
        Battle:
          "When you have suffered a foe's Profane attack and retained Hope, you may give 1 Hope to every ally that foe has hurt.",
      },
    ],
  },
  "Half-Noble": {
    Description: [
      `...don't inherit titles, but may receive gifts from their parents.`,
      `...have the sacred thirst of their ancestors, but are less gluttonus.`,
      `...receive much of the respect or scorn the common people direct at
      their full-blooded kin.`,
    ],
    Powers: [
      {
        Cost: "♥",
        Selected: true,
        Name: "Noble Thirst",
        Description: "Your ancestors' eternal thirst must be slaked",
        Investigation:
          "When someone willingly shares blood from their arteries with you, you may {recover} and {form a bond } on the same turn.",
        Battle:
          "When you {attack} by ripping blood from your foe's veins, your opponent {grants opportunity} to you.",
      },
      {
        Cost: "♠♥",
        Selected: true,
        Name: "Murder of Crows",
        Description:
          "You become a murder of crows, each embodying one of your most precious recollections.",
        Investigation:
          "When you {defend} against a physical assault, you may automatically succeed, but must flee the location.",
        Battle:
          "When you {dash} at your enemies in a swirl of feathers, beaks, and claws, you have Flying and Trample.",
      },
      {
        Cost: "♦♦♥",
        Selected: false,
        Name: "Vestige of Authority",
        Description:
          "Despite your illegitimate birth, you still command some deference.",
        Investigation:
          "When you {defend} a member of the lower orders, you may automatically succeed.",
        Battle:
          "When you end your turn adjacent to foes, those foes {grant opportunity} to you while they remain adjacent",
      },
      {
        Cost: "♥♥♥",
        Selected: false,
        Name: "Day to Night",
        Description:
          "You bring the silent night of Christ's birth to your surroundings",
        Investigation:
          "At your will, day becomes night. All characters who have taken a turn during the day round may now take another turn, as well as one in the regular night round.",
        Battle:
          "When you command day to become night, you (and anyone else who has it) benefit from the Nocturnal keyword for the rest of the scene. In addition, all cards higher than 3 played for { move} or {flurry } higher than 3 have an effective value of 3",
      },
    ],
  },
  Hunter: {
    Description: [
      `...battle monsters and demons wherever they find them.`,
      `...are heirs to a particular legacy of demon-hunting.`,
      `...are considered a necessary evil by the Noblesse.`,
    ],
    Powers: [
      {
        Cost: "♦",
        Selected: true,
        Name: "Lure",
        Description: "By treats or taunts, you bring your foe closer.",
        Investigation:
          "When you look for something a creature values, you may treat any card as a diamond.",
        Battle:
          "When you offer a foe something it wants or hates, you may play a card to {pull} it closer.",
      },
      {
        Cost: "♣",
        Selected: true,
        Name: "Legacy Weapon",
        Description:
          "Your weapon has been passed down through your family or tradition, and the souls of its many past wielders give it uncanny powers.",
        Investigation:
          "When you threaten or assault someone with your weapon, you may automatically succeed at denigrating them.",
        Battle:
          "When you swing your weapon in a great arc, you may count a {flurry } card twice",
      },
      {
        Cost: "♣♣♥",
        Selected: false,
        Name: "Exorcism",
        Description: "You know long-hidden rituals of destruction.",
        Investigation:
          "When you perform a ritual to repel or destroy a being, attempt to {denigrate } it. If you do not succeed, you {mark} that being",
        Battle:
          "When you {attack} the {marked} being, if it is vulnerable to any power type, your attack counts as that power type.",
      },
      {
        Cost: "♣♦",
        Selected: false,
        Name: "Experienced Tracker",
        Description:
          "You are wise in the ways of the wood and the grave, able to follow the tiniest trace.",
        Investigation:
          "When you look for someone who's trying to avoid you, you find them before the day or night is over",
        Battle:
          "When you focus your attention on one foe, you may {mark} that foe. When your { marked} foe moves, you may {move} to a space the same distance away from them without playing a card. You may do this immediately after their move, on anyone's turn.",
      },
    ],
  },
  "Numerological Monk": {
    Description: [
      `...are apprenticed at young ages to the Church.`,
      `...are critical in crusades against the Thinking Machines`,
      `..are considered sage in matters beyond mathematics`,
    ],
    Powers: [
      {
        Cost: "♥",
        Selected: true,
        Name: "Experienced Tracker",
        Description: "Three is the perfect number for all things.",
        Investigation:
          "When you calculate the solution to an enigma and you select a 3, you may flip over an additional card.",
        Battle:
          "When you mathematically decide where to strike, you may count a 3 as a 5 or an ace.",
      },
      {
        Cost: "♣♥",
        Selected: true,
        Name: "P-Hack",
        Description:
          "You can't change the numbers, but you can change the conclusions.",
        Investigation:
          "When you disagree with an ally's conclusion, you may treat an ace as a queen.",
        Battle:
          "When your enemy seems beyond your reach by 3 to 5 spaces, you may {attack} with any card as if it were a queen.",
      },
      {
        Cost: "♣♣♣♥",
        Selected: false,
        Name: "Blasphemathematics",
        Description:
          "Sometimes, contemplating faith leads you to voice grotesque doubt.",
        Investigation:
          "When you speak blasphemy to a person of faith, you automatically succeed at both {denigrating} and { forming a bond }.",
        Battle:
          "When you describe your proof of the malignancy of God, you may play any card. Deal 1 damage to any character in the scene who is Sacred or has a ♥ in their tableau..",
      },
      {
        Cost: "♥",
        Selected: false,
        Name: "Psychostatistics",
        Description: "You know when something doesn't add up.",
        Investigation:
          "When a secret reveals a violent deed, you know whether there's more than one perpetrator.",
        Battle:
          "When you suspect there are more foes waiting in ambush, you may play any card to find out.",
      },
    ],
  },
  "Wise One": {
    Description: [
      `...know secrets of old world engineering`,
      `...can heal and perform surgery with ancient techniques`,
      `...are often respected and protected by local villagers.`,
    ],
    Powers: [
      {
        Cost: "♣",
        Selected: true,
        Name: "Frightening Trick",
        Description:
          "It's amazing what you can do with a bit of fire and a snap of the fingers.",
        Investigation:
          "When you use your magic to {denigrate } someone, you may treat any card as a spade.",
        Battle:
          "When you trace a symbol in the air in fire, you may {push} any foe 1 space as part of another action.",
      },
      {
        Cost: "♠♦",
        Selected: true,
        Name: "Local Lore",
        Description:
          "You know the value of a secret passed down through the years.",
        Investigation:
          "When you ask about something that happened a decade or more ago, you may automatically succeed at {digging }.",
        Battle:
          "When you tell your allies lore about a foe, that foe suffers Vulnerable (Memory, Secular) 1 until the end of the scene.",
      },
      {
        Cost: "♣♠",
        Selected: false,
        Name: "Healing Arts",
        Description:
          "They say you work miracles, but it's all a matter of practice.",
        Investigation:
          "When an ally is badly wounded and you provide aid, you may spend your turn to give them 1 Hope.",
        Battle:
          "When a foe wounds an adjacent ally, you may immediately act to reduce Hope loss by 1.",
      },
      {
        Cost: "♣♣",
        Selected: false,
        Name: "Heart of Gas",
        Description: "You bring dead machines to life.",
        Investigation:
          "When you find an ancient relic by {digging }, you may repair it to work for a day and a night.",
        Battle:
          "When you ride an ancient machine into battle, you may play multiple cards to {move} in one turn, including as part of a {dash}.",
      },
    ],
  },
  Witchfinder: {
    Description: [
      `...are not agents of the Church, but don't tell them that`,
      `...root out both heresy and demons`,
      `...are collegial to each other, but rarely formally affiliated`,
    ],
    Powers: [
      {
        Cost: "♦♦",
        Selected: true,
        Name: "Believer",
        Description: "You are righteous, and rarely in the wrong.",
        Investigation:
          "When you profess your innocence against an accusation, your accuser must specify not just color, but suit.",
        Battle: "When you defeat a profane foe, you gain 1 Hope.",
      },
      {
        Cost: "♦♦♦",
        Selected: true,
        Name: "Mark of Cain",
        Description: "When you suspect someone, they belong to you.",
        Investigation:
          "When you turn someone's life upside down, flip over 3 cards instead of taking a normal action. After you've looked, flip them back over.",
        Battle:
          "When you pursue a foe with particular venom, you may { mark} them. While { marked}, if they are vulnerable to any power type, your {attacks} have that power type. Any {attacks} by other heroes deal 0 damage.",
      },
      {
        Cost: "♦♥",
        Selected: false,
        Name: "Fear Him",
        Description: "Your faith makes you unshakeable.",
        Investigation:
          "When you {defend} against an attempt to intimidate you, treat any card as a club.",
        Battle:
          "When you stand firm against a { dashing} foe, you may play cards to {retreat} and gain the benefit of doing so, but do not have to {move}.",
      },
      {
        Cost: "♦♦",
        Selected: false,
        Name: "JAccuse",
        Description: "You brand a person a criminal or heretic.",
        Investigation:
          "When you call for the authorities or mob to punish someone, you may accuse and specify only a number, rather than a color. If you're wrong, you must defend against serious damage to your credibility.",
        Battle:
          "When you call out a particular foe, you may mark them. Any of your allies may use that mark as if they placed it themselves.",
      },
    ],
  },
  Wolf: {
    Description: [
      `...are the Hounds of God`,
      `...can always speak, but take human form only when needed.`,
      `...form packs with those they feel closest to`,
    ],
    Powers: [
      {
        Selected: true,
        Name: "One God, No Kings",
        Cost: "♥♥",
        Description:
          "You have a holy purpose, one outside the feudal order and fully equal to it",
        Investigation:
          "When you declare yourself outside authority, you may treat any card as if it were a club",
        Battle:
          "Gain Resistance (Secular) 1 or Resistance (Sacred) 1 until the beginning of your next turn.",
      },
      {
        Cost: "♦♥",
        Selected: true,
        Name: "Feral Might",
        Cost: "",
        Description: "Who's cornered who?",
        Investigation:
          "When you get into a fight, you may automatically succeed at denigrating someone.",
        Battle:
          "When you {attack} a foe, you may { attack} all foes in Burst (Self) 1 for the same card values and amount of damage.",
      },
      {
        Cost: "♦♦♥",
        Selected: false,
        Name: "Circle the Prey",
        Cost: "",
        Description: "A good pack coordinates.",
        Investigation:
          "When you take the same investigative action as an ally during the same round, flip another card in the spread permanently face-up.",
        Battle:
          "Select a foe whose space you could make a {basic move} to, and play that card. Instead of making that move, you may {move} to any space where you and an ally would be flanking that foe.",
      },
      {
        Cost: "♦♥♥",
        Selected: false,
        Name: "Pack Loyalty",
        Cost: "",
        Description: "It's not what you give your life for. It's who.",
        Investigation:
          "When you {defend} someone else, you also {form a bond } with them",
        Battle:
          "You may give any number of your Hope points to an adjacent ally",
      },
    ],
  },
};

const Specialities = {
  "Calls Lightning": {
    Cost: "♣♥",
    Description: "The weather is no one's friend... but it is your ally.",
    Investigation:
      "When you call judgment on a foe, lightning strikes from the clear sky and you automatically succeed at {denigrating} them.",
    Battle:
      "When you denounce your enemies, you may { attack} more than one, so long as none are adjacent to you.",
  },
  "Cavorts with the Dead": {
    Cost: "♠♠",
    Description: "You are a friend to beings of memory and mourning.",
    Investigation:
      "When you share laughter or shed tears with the dead, you may automatically succeed at {forming a bond } with them.",
    Battle:
      "When you call your dead friends for aid, you may summon a dead being which you have previously { formed a bond } with.",
  },
  "Has Poison Blood": {
    Cost: "♣♣",
    Description: "Your blood runs cold. Colder than death.",
    Investigation:
      "When you poison someone with your blood, they can only escape death by confessing a sin.",
    Battle:
      "When you are wounded and your blood splatters or flows, your next {attack} is Toxic.",
  },
  "Has the Blessing of a Saint": {
    Cost: "♥♥",
    Description: "A special someone intercedes on your behalf.",
    investigae:
      "When you wear your saint's medallion against your skin, it turns ice cold whenever someone tells you the whole truth as they know it.",
    Battle:
      "When you pray for your saint's help, gain Resistance (Profane) 2 or Resistance (Memory) 2. The next time you take damage, you're resistance goes away at the end of the round.",
  },
  "Heals Quickly": {
    Cost: "♦",
    Description: "Your body knits back together like a spider mending its web.",
    Investigation:
      "When you have been wounded, you may heal the wound and regain 1 Hope as if you {recovered } and/or received medical attention, but without spending a turn.",
    Battle:
      "When you lose all Hope, you may sacrifice a Diamond totem to gain 1 Hope.",
  },
  "Protects My Friends": {
    Cost: "♦♦",
    Description:
      "You keep your eyes out for anyone who would hurt your friend.",
    Investigation: "When you {defend} another hero, they gain 1 Hope.",
    Battle:
      "{Mark} an ally. When your marked ally is {attacked }, you may Tank 2 for them.",
  },
  "Runs with Wolves": {
    Cost: "♥♥",
    Description: "You were born to be free, but free does not mean alone.",
    Investigation:
      "When you go { digging } for information in the dangerous wilderness, you may also {form a bond } with local wildlife.",
    Battle:
      "When you call for the aid of a creature you { formed a bond} with, summon it. On its turn, it may always act as if it's playing a 1 or 2.",
  },
  "Sees Portents": {
    Cost: "♣♣",
    Description: "You stare daggers, cutting through time itself.",
    Investigation:
      "When you speak ominous prophecy, you may { accuse} without playing one of your own cards.",
    Battle:
      "When you read the future from a foe's blood or fleeing footprints, choose an ally to give 1 Hope",
  },
  "Whispers with Machines": {
    Cost: "♣♣",
    Description:
      "You speak in the esoteric tongues of the Thinking Machines, and they have given you gifts.",
    Investigation:
      "When you clandestinely provide aid using a device a Machine gave you, an ally may activate any Profane power they have, regardless of whether they're holding the cards.",
    Battle: "As Investigation.",
  },
};

function updateRepeatingRows(slug, newValues) {
  // clear out old values
  getSectionIDs(slug, (oldValues) => {
    oldValues.forEach((v) => removeRepeatingRow(`${slug}_${v}`));
  });

  setAttrs(newValues);
}

function updateAttribute(field, key, arr) {
  // update w/ new values
  const attrs = arr.reduce((previousValue, currentValue) => {
    const id = generateRowID();
    return {
      ...previousValue,
      [key(id)]: currentValue,
    };
  }, {});

  updateRepeatingRows(field, attrs);
}

function updatePowers(Powers) {
  const attrs = Powers.reduce((all, power, index) => {
    if (power.Selected) {
      const currentAttrs = Object.keys(power).reduce((prev, curr) => {
        if (curr === "Selected") {
          return prev;
        }

        return {
          ...prev,
          [`Power${index + 1}_${curr}`]: power[curr],
        };
      }, {});

      return {
        ...all,
        ...currentAttrs,
      };
    }

    return all;
  }, {});

  setAttrs(attrs);
}

// The on change handler for changing character class
on("change:Background", (e) => {
  const { newValue } = e;
  const { Description, Powers } = Backgrounds[newValue];

  // update description
  const descriptionKey = (id) => `repeating_descriptions_${id}_desc`;
  updateAttribute("repeating_descriptions", descriptionKey, Description);

  updatePowers(Powers);
});

on("change:Speciality", (e) => {
  const { newValue } = e;

  // update description, cost, etc
  const speciality = Specialities[newValue];
  const attrs = Object.keys(speciality).reduce((acc, curr) => {
    return {
      ...acc,
      [`Speciality_${curr}`]: speciality[curr],
    };
  }, {});

  setAttrs(attrs);
});

on("change:OptionalPower", (e) => {
  const { newValue } = e;
  getAttrs(["Background"], function ({ Background }) {
    const selectedBackground = Backgrounds[Background];
    const powers = selectedBackground.Powers;
    const selectedPower = powers.find((power) => power.Name === newValue);
    if (selectedPower) {
      setAttrs({
        OptionalCost: selectedPower.Cost,
        OptionalBattle: selectedPower.Battle,
        OptionalInvestigation: selectedPower.Investigation,
        OptionalDescription: selectedPower.Description,
      });
    }
  });
});
