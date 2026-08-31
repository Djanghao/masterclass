# Simple Solution

**Author:** akshaynathks
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/5936702/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/5936702/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int countNegatives(List<List<int>> grid) {
    int count=0;
    for(List<int>gri in grid){
        for(int i=0;i<gri.length;i++){
            if(gri[i]<0){
                count++;
            }
        }
    }
    return count;
  }
}
```