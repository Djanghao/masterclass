# Optimize Solution Basic on the Chess Board Logic

**Author:** Shree_Govind_Jee
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4592285/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4592285/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- There are only 2 results, either `2 steps` or `1 step`.
        **Cases**
- If the rook and black queen in the same line, except the bishop in between which will be `2 steps`.
 - bishop and black queen in the same diagonal, except that the rook in between which will be `2 steps`

# Complexity
- Time complexity:$$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
**Java**
```
class Solution {
    public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        // Rook and Black Queen in the same line
        if (a == e || b == f) {
            // Bishop in between (.ie. 2 steps)
            if ((a == e && a == c && ((d - b) * (d - f)) < 0) || (b == f && b == d && ((c - a) * (c - e)) < 0)) {
                return 2;
            }
            return 1;
        }

        // Bishop and Black Queen in the same diagonal
        if (Math.abs(c - e) == Math.abs(d - f)) {
            // The Rook in between
            if (Math.abs(c - a) == Math.abs(d - b) && Math.abs(e - a) == Math.abs(f - b) && ((b - f) * (b - d)) < 0)
                return 2;
                
            return 1;
        }

        return 2;
    }
}
```


---

# C++
```
class Solution {
public:
    int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        // Rook and Black Queen in the same line
        if (a == e || b == f) {
            // Bishop in between (.ie. 2 steps)
            if ((a == e && a == c && ((d - b) * (d - f)) < 0) || (b == f && b == d && ((c - a) * (c - e)) < 0)) {
                return 2;
            }
            return 1;
        }

        // Bishop and Black Queen in the same diagonal
        if (abs(c - e) == abs(d - f)) {
            // The Rook in between
            if (abs(c - a) == abs(d - b) && abs(e - a) == abs(f - b) && ((b - f) * (b - d)) < 0)
                return 2;
                
            return 1;
        }

        return 2;
    }
};
```