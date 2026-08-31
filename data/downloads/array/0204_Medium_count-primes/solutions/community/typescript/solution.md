# Simple solution with O(n logn)

**Author:** shamnad_skr
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-primes/solutions/5888112/](https://leetcode.com/problems/count-primes/solutions/5888112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Loop through all numbers from 2 to n-1 and check if each number is prime.
2. To check if a number is prime, iterate from 2 to the square  root of the number. If the number is divisible by any of these, it's not prime.
3. If the number is prime, increase the count.

# Complexity
- Time complexity:O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function countPrimes(n: number): number {

 if (n <= 2) return 0;  // No primes less than 2

    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;  // 0 and 1 are not primes

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((count, prime) => count + prime, 0);
    
};
```