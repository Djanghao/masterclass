# Python, recursive solution.

**Author:** bison_a_besoncon
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/585667/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/585667/)

---

To find the decomposition into the sum of Fibonnaci numbers we will iteratively (recursively) take the greatest Fibonnaci number that is smaller than the current reamainder and return the 1 plus the decomposition of the new remainder. 1 corresponds to the new found Fibonnaci that, and the recursion will descend just until we compute the whole solution.
Cheers.
```
class Solution:
    def findMinFibonacciNumbers(self, k):
        n1 = 1
        n2 = 1
        while n2 < k:
            temp = n2
            n1, n2 = n2, n1+n2
        if n2==k:
            return 1
        return self.findMinFibonacciNumbers(k-n1)+1
```
