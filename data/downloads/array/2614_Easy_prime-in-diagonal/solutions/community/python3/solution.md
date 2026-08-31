# ✅Explained - Simple and Clear Python Code✅

**Author:** moazmar
**Votes:** 13
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3395778/](https://leetcode.com/problems/prime-in-diagonal/solutions/3395778/)

---

# Intuition
The problem asks to find the largest prime number present on any of the diagonals of the given 2D integer array. We can iterate over the main and secondary diagonal of the matrix and check if the number is prime or not. If a prime number is found, we compare it with the largest prime found so far and update the largest prime accordingly.


# Approach
We use a helper function is_prime() to check if a number is prime or not. We then iterate over the main and secondary diagonal of the matrix using a for loop and check if each element on the diagonal is prime or not. If it is prime, we compare it with the largest prime found so far and update the largest prime accordingly.


# Complexity
- Time complexity:
The time complexity of the algorithm is O(n^2) as we have to traverse the entire matrix to find the largest prime number on the diagonal.

- Space complexity:
 The space complexity of the algorithm is O(1) as we are using constant space for storing variables.




# Code
```
class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:
        def is_prime(num):
            if num <= 1:
                return False
            for i in range(2, int(num ** 0.5) + 1):
                if num % i == 0:
                    return False
            return True

        largest_prime = 0
        n = len(nums)
        for i in range(n):
            if is_prime(nums[i][i]):
                largest_prime = max(largest_prime, nums[i][i])
            if is_prime(nums[i][n-i-1]):
                largest_prime = max(largest_prime, nums[i][n-i-1])
        return largest_prime

```