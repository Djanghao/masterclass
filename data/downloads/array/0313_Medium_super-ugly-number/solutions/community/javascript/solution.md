# Heavily commented Javascript bottom up DP solution

**Author:** demiurg2000
**Votes:** 4
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/329498/](https://leetcode.com/problems/super-ugly-number/solutions/329498/)

---

```
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    // General idea is to build up an array with super ugly numbers till we reach n-1
    // So we will iterate multiples of [primes] and record them.
    // Let's say primes is [2,3,5] -
    // If we just store 2,3,5 - 4,6,10 - 6,9,15 etc we'd be going out of order
    // So we need to increase the indeces for [primes] more wisely.
    
    // we record our prime indeces here in an array that starts out as zeroes
    // e.g [2,1,0] would imply that we used the first prime twice and second prime once
    // and the 3rd prime is yet unused. For 2,3,5 that means we'd have recorded
    // [2,3,4] 
    
    let indeces = [];
    let currents = [];
    let i, l;
    // fill up our indeces array with zeroes to start
    for (i = 0, l = primes.length; i < l; i++) {
        indeces[i] = 0;
    }
    let out = [1]; // we will record or prime multiples here
    
    while (!out[n-1]) { 
        // simply calculate the next multiple of all the primes
        for (i = 0, l = primes.length; i < l; i++) {
            currents[i] = out[indeces[i]] * primes[i]; 
            // so in the case of 2,3,5 , currents would come out as [2,3,5] first round.
            // Then we use 2 and increase the index of that prime. Next round it would calculate to [4,3,5], then use 3, then calculate to [4,6,5] etc
        }
        
        // select the lowest one next so we stay in order
        let next = Math.min(...currents);
        out.push(next);
        
        // and for that prime we increase the index so next round we find the next multiple of that prime
        for (i = 0, l = primes.length; i < l; i++) {
            if (next === out[indeces[i]] * primes[i]) {
                indeces[i] = indeces[i] + 1;
            }
        }
    }
    
    return out[n-1];
};

```