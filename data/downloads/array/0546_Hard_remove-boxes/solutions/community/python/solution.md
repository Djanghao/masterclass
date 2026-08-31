# 546: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/3294701/](https://leetcode.com/problems/remove-boxes/solutions/3294701/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define the removeBoxes function that takes in a list of boxes and returns an integer representing the maximum score that can be achieved by removing the boxes.

2. Define the inner dp function that takes in the starting index i, ending index j, and the number of boxes k that are identical to the box at index j. The function returns the maximum score that can be achieved for the subarray of boxes starting at index i and ending at index j, given that k boxes are identical to the box at index j.

3. If i > j, then there are no boxes left to remove, so the function returns 0.

4. While there are still boxes in the subarray and the last box is identical to the box before it, we can reduce the sub-problem size by decrementing j and incrementing k.

5. If we have processed all the boxes, then we return the score, which is equal to (k+1)^2.

6. We consider two cases:

    1. Case 1: Remove the last k+1 boxes and recurse on the remaining sub-problem. We compute the score for this case by adding (k+1)^2 to the maximum score that can be achieved for the subarray starting at index i and ending at index j-1, with no identical boxes at the end.

    2. Case 2: Merge the box at index j with some box in the subarray starting at index i and ending at index j-1, and recurse on the two resulting sub-problems. We compute the score for this case by iterating over all possible boxes in the subarray and finding the one that is identical to the box at index j. We then split the subarray into two parts: the subarray starting at index i and ending at index m, which contains the merged boxes, and the subarray starting at index m+1 and ending at index j-1, which contains the remaining boxes. We compute the maximum score for each of these subarrays recursively and add them together.

7. The function returns the maximum score that can be achieved for the entire array of boxes, which is equal to the maximum score that can be achieved for the subarray starting at index 0 and ending at index len(boxes)-1, with no identical boxes at the end.




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
        # dp(i, j, k) := max score of boxes[i..j] if k boxes equal to boxes[j]
        @lru_cache(None)
        def dp(i: int, j: int, k: int) -> int:
            if i > j:
                return 0

            # Check if we can reduce the sub-problem size
            while i < j and boxes[j] == boxes[j-1]:
                j -= 1
                k += 1

            # If we have processed all the boxes, return the score
            if i == j:
                return (k+1)**2

            # Case 1: Remove the last k+1 boxes and recurse on the remaining sub-problem
            ans = (k+1)**2 + dp(i, j-1, 0)

            # Case 2: Merge boxes[j] with some box in the subarray i to j-1 and recurse on the two resulting sub-problems
            for m in range(j-1, i-1, -1):
                if boxes[m] == boxes[j]:
                    ans = max(ans, dp(i, m, k+1) + dp(m+1, j-1, 0))

            return ans

        return dp(0, len(boxes)-1, 0)

```