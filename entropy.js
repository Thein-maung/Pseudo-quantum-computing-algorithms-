export function generateEntropy(seed) {
  let entropy = [];
  let random = seed;
  for (let i = 0; i < 32; i++) {
    random = Math.sin(random + i) * 10000;
    entropy.push(Math.floor((random - Math.floor(random)) * 256));
  }
  return entropy;
}

export function compareEntropy(e1, e2) {
  return JSON.stringify(e1) === JSON.stringify(e2);
}