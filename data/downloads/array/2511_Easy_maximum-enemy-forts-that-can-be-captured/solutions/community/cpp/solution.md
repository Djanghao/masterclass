# Simple C++ || optimal solution || O(N)||0ms-Runtime

**Author:** Srikanth_2304
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2946793/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2946793/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
PLS LIKE THE SOLUTION
Try to give a comment
```
class Solution {
public:
    int captureForts(vector<int>& forts) {
        int result = 0, x = 0; 
        for (int j = 0; j < forts.size(); j++) {
            if (forts[j]) {
                if (forts[x] == -forts[j]) result = max(result, j - x - 1); 
                x = j; 
            }
        }
        return result; 
    }
};
PLS LIKE THE SOLUTION
Try to give a comment
// 0,0,1,-1
// 1,0,0,-1,0,0,0,0,1
```