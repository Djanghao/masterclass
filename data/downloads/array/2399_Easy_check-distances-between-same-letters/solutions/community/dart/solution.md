# Best Approach

**Author:** saheelmk
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/6113640/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/6113640/)

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
  bool checkDistances(String s, List<int> distance) {
    for(int i=0; i<s.length; i++){
        var current_char=s[i];
        int first_index=s.indexOf(current_char);
        int last_index=s.lastIndexOf(current_char);

        int dist=last_index - first_index - 1;
    int charIndex = current_char.codeUnitAt(0) - 'a'.codeUnitAt(0);
        if(distance[charIndex]==dist){
            continue;
        }else{
            return false;
        }
    }
    return true;
  }
}
```