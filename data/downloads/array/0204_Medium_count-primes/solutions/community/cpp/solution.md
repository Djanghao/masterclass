# Basic and modified Sieve of Eratosthenes ✅ | Beats 99.70%🔥🔥🔥

**Author:** AyushBansalCodes
**Votes:** 55
**Link:** [https://leetcode.com/problems/count-primes/solutions/5567554/](https://leetcode.com/problems/count-primes/solutions/5567554/)

---

\u2B50\uFE0F\u2B50\uFE0F Let's start with Basic one, then we will proceed to the best solution of this problem.

# Solution 1 :
The provided solution counts the number of prime numbers less than \uD835\uDC5B using the Sieve of Eratosthenes algorithm. Here\u2019s a detailed explanation of the approach:

## Approach

1. Initialization:

    - An integer variable `cnt` is initialized to 0 to keep track of the count of prime numbers.
    - A boolean vector `prime` of size \uD835\uDC5B+1 is initialized to `true`. This vector is used to mark whether a number is prime (`true`) or not (`false`).

2. Edge Case Handling:

    - The values of `prime[0]` and `prime[1]` are set to `false` because 0 and 1 are not prime numbers.

3. Sieve of Eratosthenes:

    - The outer loop iterates over each number `i` from 2 to \uD835\uDC5B\u22121.
    - For each number `i`:
        - If `prime[i]` is `true`, it means `i` is a prime number.
            - Increment the prime count `cnt` by 1.
            - Mark all multiples of `i` starting from `i*2` as `false`. The inner loop achieves this by setting `prime[j]` to `false` for all multiples `j` of `i`.
    - This marking ensures that all non-prime numbers are identified and excluded from the count.

4. Return Result:

    - Finally, the function returns the count of prime numbers, `cnt`.


## Complexity
- Time complexity: O(nloglogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`Upvote! It only takes 1 click\uD83D\uDE09`
## Code
```
class Solution {
public:
    int countPrimes(int n) {
        int cnt = 0;
        vector<bool> prime(n + 1, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i < n; i++) {
            if (prime[i]) {
                cnt++;
                for (int j = i * 2; j < n; j = j + i) {
                    prime[j] = 0;
                }
            }
        }
        return cnt;
    }
};
```

## Simplified Breakdown of the Code
- The `prime` vector is used to keep track of which numbers are prime.
- The outer loop runs from 2 to \uD835\uDC5B\u22121.
- If `prime[i]` is `true`, it means `i` is a prime number, and we increment the count `cnt`.
- The inner loop marks all multiples of `i` as `false`, starting from `i*2`.

# Solution 2 :
The provided solution uses a modified version of the Sieve of Eratosthenes algorithm to count the number of prime numbers less than \uD835\uDC5B. Here is a step-by-step explanation of the approach:

## Approach
1. Edge Case Handling:
    - If \uD835\uDC5B is less than 3, there are no prime numbers less than \uD835\uDC5B, so the function immediately returns 0.
2. Initialization:
    - An array `isprime` of size \uD835\uDC5B is created and initialized to `true`. This array is used to mark whether a number is prime (`true`) or not (`false`).
    - The function initializes the count of prime numbers, `result`, to \uD835\uDC5B/2. This is because, initially, we assume all odd numbers less than \uD835\uDC5B are prime, and there are approximately \uD835\uDC5B/2 odd numbers.

3. Sieve of Eratosthenes:

    - The algorithm iterates over odd numbers starting from 3 (since even numbers other than 2 are not prime).
    - For each odd number \uD835\uDC56, if `isprime[i]` is `true`, \uD835\uDC56 is considered prime.
        - For each prime \uD835\uDC56, the algorithm marks all multiples of i starting from i<sup>2</sup> (since any smaller multiple of \uD835\uDC56 would have already been marked by a smaller prime) as `false`.
        - The step size for marking multiples is 2\uD835\uDC56 because we only need to consider odd multiples.
4. Count Update:

    - For each multiple \uD835\uDC57 of \uD835\uDC56 that is marked `false`, the `result` count is decremented, as these multiples are not prime.

5. Return Result:

    - Finally, the function returns the count of prime numbers, `result`.

## Complexity
- Time complexity: O(nloglogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`Upvote! It only takes 1 click\uD83D\uDE09`
## Code
```
class Solution {
public:
    int countPrimes(int n) {
        if (n < 3) {
            return 0;
        }
        bool isprime[n];

        memset(isprime, true, n);

        int result = n / 2;
        for (int i = 3; i * i < n; i += 2) {
            if (isprime[i]) {
                int d = i * 2;
                for (int j = i * i; j < n; j += d) {
                    if (isprime[j]) {
                        isprime[j] = false;
                        result--;
                    }
                }
            }
        }
        return result;
    }
};
```

## Simplified Breakdown of the Code
- The `isprime` array is used to keep track of which numbers are prime.
- The outer loop runs through each odd number starting from 3.
- The inner loop marks multiples of the current prime i as non-prime, starting from i<sup>2</sup> to avoid redundant work.
- The `result` is updated to reflect the number of primes found.


![upvote.jpeg](./images/0.jpeg)








