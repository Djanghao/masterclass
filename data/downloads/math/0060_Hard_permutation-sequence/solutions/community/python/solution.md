# Share my Python solution with detailed explanation

**Author:** dasheng2
**Votes:** 161
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/22512/](https://leetcode.com/problems/permutation-sequence/solutions/22512/)

---

The idea is as follow:

For permutations of n, the first (n-1)! permutations start with 1, next (n-1)! ones start with 2, ... and so on. And in each group of (n-1)! permutations, the first (n-2)! permutations start with the smallest remaining number, ...

take n = 3 as an example, the first 2 (that is, (3-1)! ) permutations start with 1, next 2 start with 2 and last 2 start with 3. For the first 2 permutations (123 and 132), the 1st one (1!) starts with 2, which is the smallest remaining number (2 and 3). So we can use a loop to check the region that the sequence number falls in and get the starting digit. Then we adjust the sequence number and continue.

    import math
    class Solution:
        # @param {integer} n
        # @param {integer} k
        # @return {string}
        def getPermutation(self, n, k):
            numbers = range(1, n+1)
            permutation = ''
            k -= 1
            while n > 0:
                n -= 1
                # get the index of current digit
                index, k = divmod(k, math.factorial(n))
                permutation += str(numbers[index])
                # remove handled number
                numbers.remove(numbers[index])
    
            return permutation