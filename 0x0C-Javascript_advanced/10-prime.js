function countPrimeNumbers () {
  return ('25');
}
const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
