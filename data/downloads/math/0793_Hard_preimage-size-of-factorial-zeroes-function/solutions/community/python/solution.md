# Python braindead solution, runtime 100% / memory 98.06 %

**Author:** ephemer1s
**Votes:** 11
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2329315/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2329315/)

---

Notice that the tag of this problem is `brainteaser`, so its just a problem of math rather than algorithm.

For calculating zeros in factorials, the pattern is simple:
 * every time theres a multiple of 5, add a zero
 * every time theres a multiple of 25, add a zero
 * every time theres a multiple of 125, add a zero
 * ...

So the answer is either 0 or 5. depends on if theres a 25 or bigger power of 5 that skipped the kth zeros.
 * every 5th of 6 ks is skipped by multiples of 25
 * every 30th of 31 ks is skipped by multiples of 125 (for 31 = 6 * 5 + 1)
 * every 155th of 156 ks is skipped by multiples of 625 (for 156 = 31 * 5 + 1)
 * ......

So we just need to print out a list of i' = (5i+1) < 1e9 and do modulo from the largest number to the smallest to see if the giving k is skipped.

Code:
```
class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        patterns = [6, 31, 156, 781, 3906, 19531, 97656, 488281, 2441406, 12207031, 61035156, 305175781, 1525878906]
        for i in patterns[::-1]:
            k = k % i
            if k == i - 1:
                return 0
        return 5
```