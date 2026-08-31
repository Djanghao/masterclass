# C++| Dynamic programming (DP) |

**Author:** ashish_madhup
**Votes:** 21
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/3701051/](https://leetcode.com/problems/super-ugly-number/solutions/3701051/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Upon analyzing the code, here are my initial thoughts on how to solve the problem:

1. Understand the problem: The goal is to find the nth super ugly number given a list of prime numbers. A super ugly number is a positive integer whose prime factors are limited to the given list of primes.

2. Approach: The code follows a dynamic programming approach. It uses an array, `superUgly`, to store the super ugly numbers. The algorithm iterates from 1 to n, calculating each super ugly number based on the prime number multiples and their corresponding indices.

3. Key variables:
   - `n`: The input representing the position of the super ugly number to find.
   - `primes`: A vector containing the prime numbers to be used as factors.
   - `numPrimes`: The number of prime numbers in the `primes` vector.
   - `primeIndices`: A vector storing the current indices for each prime number.
   - `superUgly`: An array that will hold the super ugly numbers.

4. Algorithm:
   - Check if n is 1, in which case the first super ugly number is 1.
   - Initialize the vector `primeIndices` with zeros for each prime number.
   - Initialize the first element of `superUgly` as 1 since 1 is always a super ugly number.
   - Iterate from 1 to n (exclusive):
     - Find the minimum value, `minVal`, among the prime number multiples.
     - Store `minVal` as the current super ugly number.
     - Increment the indices of the prime number multiples that contribute to the minimum value.
   - Return the nth super ugly number.

Overall, the code efficiently calculates the nth super ugly number by iteratively finding the minimum value among the prime number multiples.

# Approach
<!-- Describe your approach to solving the problem. -->To solve the problem of finding the nth super ugly number given a list of prime numbers, here's the approach I would take:

1. Initialize a list or array to store the super ugly numbers.
2. Since the first super ugly number is always 1, add it to the list.
3. Create a separate list to keep track of the indices for each prime number in the given list. Initialize all indices to 0.
4. Iterate from 1 to n (exclusive) to find the remaining super ugly numbers.
5. For each iteration:
   a. Find the minimum value among the products of each prime number with its corresponding super ugly number at the respective index.
   b. Add the minimum value to the list of super ugly numbers.
   c. Update the indices for the prime numbers that contributed to the minimum value by incrementing them.
   d. Repeat steps a-c until all n super ugly numbers are found.
6. Return the nth super ugly number from the list.

This approach takes advantage of the fact that each super ugly number can be obtained by multiplying a prime number with a previously generated super ugly number. By keeping track of the indices for each prime number, we can efficiently generate the super ugly numbers in ascending order.

# Complexity
- Time complexity: O(n * k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Finds the nth super ugly number given a list of prime numbers.

class Solution {
public:
    int nthSuperUglyNumber(int n, vector<int>& primes) {
        if (n == 1)
            return 1;

        int numPrimes = primes.size();  // Number of prime numbers
        vector<int> primeIndices(numPrimes, 0);  // Indices to track prime number multiples

        int superUgly[n];  // Array to store super ugly numbers
        // memset(superUgly, 0, sizeof(superUgly));  // Initialize the array (commented out since it's unnecessary)
        superUgly[0] = 1;  // First super ugly number is always 1

        for (int i = 1; i < n; i++) {
            long minVal = INT_MAX;  // Minimum value among the prime number multiples

            // Find the minimum value among the prime number multiples
            for (int j = 0; j < numPrimes; j++) {
                minVal = min(minVal, (long)primes[j] * superUgly[primeIndices[j]]);
            }

            superUgly[i] = (int)minVal;  // Store the minimum value as the next super ugly number

            // Increment the indices for prime number multiples that contribute to the minimum value
            for (int j = 0; j < numPrimes; j++) {
                if (minVal == (long)primes[j] * superUgly[primeIndices[j]]) {
                    primeIndices[j]++;
                }
            }

            // cout<<superUgly[i]<<",";  // Print the current super ugly number (commented out for clarity)
        }

        return superUgly[n - 1];  // Return the nth super ugly number
    }
};

```
![Leetcode.jpeg](./images/0.jpeg)
