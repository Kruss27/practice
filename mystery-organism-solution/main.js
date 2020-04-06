// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function - takes a number and an array of DNA bases (15)
const pAequorFactory = (num, dna) => {
  return {
    _specimenNum: num,
    _dna: dna,
    // Mutates a random base
    mutate() {
      let x = Math.floor(Math.random() * dna.length);
      let randBase = this._dna[x];
      let newBase = returnRandBase();
      while (randBase === newBase) {
        newBase = returnRandBase();
      }
      this._dna[x] = newBase;
      return this._dna;
    },
    // Compares dna, returns similarity as percentage
    compareDNA(dna) {
      let identical = 0;
      for (let i = 0; i <= dna.length; i++) {
        if (this._dna[i] === dna[i]) {
          identical++;
        }
      }
      console.log(((identical/dna.length) * 100).toFixed(1));
    },
    // Determines if 'C' and 'G' bases make up >=60% of dna
    willLikelySurvive() {
      let percent = 0;
      for (let i = 0; i <= this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          percent++;
        }
      }
      percent = (((percent/this._dna.length) * 100).toFixed(1));
      if (percent >= 60) {
        return true;
      } else {
        return false;
      }
    },
    // Create complementary strand
    complementStrand() {
      let baseStrand = this._dna;
      let complement = [];
      this._dna.forEach(element => {
        if (element === 'C') {
          complement.push('G');
        } else if (element === 'G') {
          complement.push('C');
        } else if (element === 'A') {
          complement.push('T');
        } else if (element === 'T') {
          complement.push('A');
        }
      });
      return complement;
    }
  }
};

// Function that creates 30 surviving dna strands
const surviveCreator = () => {
  let array = [];
  for (let i = 1; i <= 30;) {
    let strand = pAequorFactory(i, mockUpStrand());
    if (strand.willLikelySurvive() === true) {
      array.push(strand);
      i++;
    }
  };
  return array;
}; 

// Create example: let ex1 = pAequorFactory(1, mockUpStrand());














