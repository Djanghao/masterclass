# Solution

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5956543/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5956543/)

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
  List<int> arrayRankTransform(List<int> arr) {
     List<int> res = arr.toSet().toList()..sort();
    Map<int, int> temp = {};
    for(int i=0; i<res.length;i++){
        temp[res[i]]=i+1;
    }
  
    return arr.map((val)=>temp[val]!).toList();
    
  }
}
```