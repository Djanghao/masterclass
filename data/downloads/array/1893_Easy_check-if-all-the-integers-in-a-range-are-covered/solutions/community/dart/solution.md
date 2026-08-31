# Dart solution

**Author:** dovandu9x01
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3162616/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3162616/)

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
```
class Solution {
  bool isCovered(List<List<int>> ranges, int left, int right) {
        for(int i = left; i<= right ; i ++){
            bool result = false;
            for(List list in ranges){
                if(list.first <= i && list.last >= i){
                    result = true;
                }
                
            }
            if(!result) return false;
        }
        return true;
  }
}
```