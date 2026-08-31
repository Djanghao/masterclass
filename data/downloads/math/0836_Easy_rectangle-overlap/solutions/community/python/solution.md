# Python O(1) with Explanation

**Author:** whissely
**Votes:** 16
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/323228/](https://leetcode.com/problems/rectangle-overlap/solutions/323228/)

---

O(1)
Space: O(n)
Algorithm: compute the overlap area similar to LC#223 and return True only if both width and height are positive numbers, which indicates there is an overlap.
```
def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """
        width = min(rec1[2], rec2[2]) - max(rec1[0], rec2[0])
        height = min(rec1[3], rec2[3]) - max(rec1[1], rec2[1])
        return True if width > 0 and height > 0 else False