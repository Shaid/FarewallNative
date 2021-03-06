import { sample, uniq } from 'lodash';
import { detect } from 'gender-detection';
import * as types from '../actions/types';

import portraits from 'FarewellNative/assets/assets';

const initialState = {
  salutation: "Hey",
  message: {
    start: "Looks like you're finally leaving.",
    middle: "It turns out that we couldn't fit all the messages into the card, so I made this for you. Click the 'Another!' link to see more of your farewell messages.",
    end: "Cheers,"
  },
  author: {
    name: "Jez Templeton",
    role: "Underutilised Developer",
    portrait: portraits.jez
  }
};

import strings from '../../assets/strings.json';

function generateMessage() {
  const middle = () => {
    let middle = [];

    let x = Math.round(Math.random()*4) + 1;

    for (let i = 0; i < x; i++ ){
      middle.push(sample(strings.middle));
    }

    return uniq(middle).join(" ");
  };

  return {
    start: sample(strings.start),
    middle: middle(),
    end: sample(strings.end)
  };
}

function getRandomPortrait(name) {
  const gender = (detect(name) === "female") ? "female" : "male";

  // magic numbers!
  const numFemale = 132;
  const numMale = 116;

  const num =  Math.floor(Math.random() * (gender === "female" ? numFemale : numMale - 1));
  return portraits[gender][num];
}

function generateAuthor() {
  const name = sample(strings.firstname) + " " + sample(strings.surname);
  return {
    name: name,
    role: sample(strings.role),
    portrait: getRandomPortrait(name)
  };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FAREWELL_GENERATE:
            return {
              ...state,
              salutation: sample(strings.salutations),
              message: generateMessage(),
              author: generateAuthor(),
            };
        default:
          return state;
    }
};
