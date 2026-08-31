# excel sheet column title solution

**Author:** haritha_kp_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/6041212/](https://leetcode.com/problems/excel-sheet-column-title/solutions/6041212/)

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
  String convertToTitle(int columnNumber) {
    String result='';
    while (columnNumber>0){
        columnNumber--;
        int remainder=columnNumber%26;
        result=String.fromCharCode(remainder+65)+result;
        columnNumber~/=26;
    }
    return result;
  }
}
```