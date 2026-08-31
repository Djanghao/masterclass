# Swift Brute force approach | not well optimised but worked

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2990749/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2990749/)

---

# Approach
1. We need to find all the prime factors for each number in the array, and then count the distinct prime factors.
2. So we need a Set to store the distinct prime factors, and a function to find all the prime factors for a number.
3. We can use the Sieve of Eratosthenes algorithm to find all the prime factors for a number.
4. The Sieve of Eratosthenes algorithm is a simple, ancient algorithm for finding all prime numbers up to any given limit.
5. For each number, we divide it by 2, 3, 4 ... until it is divided by a prime number.
6. Then we add this prime number to the Set.
7. If we have already found all the prime factors for a number, we can return.
8. Finally, we can return the size of the Set.

# Flow
Let nums = [1, 2, 3, 4, 5]
let result = Solution().distinctPrimeFactors(nums)
print(result)

# Complexity
- Time complexity: O(n * sqrt(n))

- Space complexity: O(n)

# Code
```
class Solution {
    private var set: Set<Int> = []
    private func getPrimes(_ num: Int) {
        var n = num
        for i in 2...num {
            if n % i == 0 {
                while n % i == 0 {
                    n /= i
                }
                set.insert(i)
            }
            if n == 1 {
                return
            }
        }
    }

    func distinctPrimeFactors(_ nums: [Int]) -> Int {
        for n in nums {
            getPrimes(n)
        }

        return set.count
    }
}

```