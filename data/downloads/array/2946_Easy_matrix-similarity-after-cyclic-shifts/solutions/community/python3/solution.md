# 🥇 C++ | PYTHON | JAVA || Easiest Explanation || ; ] ✅

**Author:** karan_8082
**Votes:** 37
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4330438/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4330438/)

---

**UPVOTE IF HELPFuuL**

# Approach

For each row perform a simple check
``` row[i] != row[(i + k) % n] ```

# Complexity
- Time complexity: O ( m * n ) -> Iterate through metrix once

- Space complexity: O(1) -> No extra space Used

# Code
```Python []
class Solution:
    def areSimilar(self, mat: List[List[int]], k: int) -> bool:
        for l in mat:
            n = len(l)
            for i in range(n):
                if l[i] != l[(i + k) % n]:
                    return False
        return True
```
```C++ []
class Solution {
public:
    bool areSimilar(vector<vector<int>>& mat, int k) {
        for (const auto& l : mat) {
            int n = l.size();
            for (int i = 0; i < n; ++i) {
                if (l[i] != l[(i + k) % n]) {
                    return false;
                }
            }
        }
        return true;
    }
};
```
```JAVA []
class Solution {
    public boolean areSimilar(int[][] mat, int k) {
        for (int[] l : mat) {
            int n = l.length;
            for (int i = 0; i < n; ++i) {
                if (l[i] != l[(i + k) % n]) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

![IMG_3740.JPG](./images/0.jpeg)
