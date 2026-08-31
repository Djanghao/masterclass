# Beats 100.00% | Easy Typescript Solution using Sieve with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5567117/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5567117/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n log log n)$$ where n is the maxNum parameter. This is because the function uses the Sieve of Eratosthenes algorithm to find all prime numbers up to the maxNum. The algorithm has a time complexity of O(n log log n) because it iterates through all numbers up to n and marks multiples of each prime number as composite.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ where n is the maxNum parameter. This is because the function creates an array of size n+1 to store the boolean values indicating whether each number is prime or not.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// initialize sievePrime() function which accept maxNum as parameter for counting prime number
function sievePrime(maxNum) {

    // initialize checkPrime as array of maxNum+1 element with value as true
    const checkPrime: false[] = Array(maxNum + 1).fill(true);

    // make 0th and 1th element as false because 0 and 1 are not prime number

    checkPrime[0] = checkPrime[1] = false;

    // run for loop from 2 to maxNum
    for (let i = 2; i * i <= maxNum; i++) {

        // if checkPrime[i] is true
        if (checkPrime[i]) {

            // run for loop from i*i to maxNum and increment j by i
            for (let j = i * i; j <= maxNum; j += i) {

                // make jth element of checkPrime as false
                checkPrime[j] = false;
            }
        }
    }

    // return checkPrime
    return checkPrime;
}

// initialize isPrime as function of sievePrime(1000000) with argument value 1000000
const isPrime = sievePrime(1000000);

function nonSpecialCount(l: number, r: number): number {

    // initialize left as square root of l and right square root of right
    let left: number = Math.ceil(Math.sqrt(l));
    let right: number = Math.floor(Math.sqrt(r));

    // initialize count as 0 for counting prime number
    let count: number = 0;

    // run for loop from left to right
    for (let i = left; i <= right; i++) {

        // if ith value of isPrime is true then decrement
        if (isPrime[i]) {
            count--;
        }
    }

    // add count + r - l + 1 and assign to count and return it
    return count += r - l + 1;
};
```