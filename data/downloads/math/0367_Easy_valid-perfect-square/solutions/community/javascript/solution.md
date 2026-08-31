# 🚀 Beats 100% | Binary Search | Easiest Approach 🔥🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 24
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/4523995/](https://leetcode.com/problems/valid-perfect-square/solutions/4523995/)

---

**Intuition:**

\uD83E\uDD14 The algorithm is like a detective using binary search to find the mysterious perfect square among positive integers. The goal is to figure out if a given number `num` is the square of another integer.

**Approach:**

1. \uD83C\uDFAF Initialize two pointers, `start` and `end`, pointing at the beginning (1) and the end (`num`).
2. \uD83D\uDD0D Conduct a binary search within the range [start, end].
3. \uD83C\uDFAF At each step, calculate the middle value `mid`.
4. \uD83E\uDDD0 Compare `mid * mid` with `num`:
   - If equal, return true (perfect square found).
   - If greater, adjust `end` to `mid - 1` (narrow the search to the left).
   - If less, adjust `start` to `mid + 1` (narrow the search to the right).
5. \uD83D\uDD01 Repeat until `start` is greater than `end`, meaning the search is exhausted.
6. \uD83D\uDEAB If no perfect square is found, return false.

**Time Complexity:**

\u23F0 O(log(num)) - A logarithmic search, efficient like a well-trained detective narrowing down the suspects.

**Space Complexity:**

\uD83E\uDDCA O(1) - Minimal extra space, keeping things cool and compact regardless of the input size.

# Code
```
class Solution {
public:
    bool isPerfectSquare(int num) {
        int start = 1;
        int end = num;

        while(start <= end)
        {
            long long mid = start + (end - start) / 2;

            if(mid * mid == num)
            return true;
            else if(mid * mid > num)
            end = mid - 1;
            else start = mid + 1;
        }
        return false;
    }
};
```
![lc1.png](./images/0.png)
