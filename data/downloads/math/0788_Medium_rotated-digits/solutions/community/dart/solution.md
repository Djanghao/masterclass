# Beats 100% easy solution.

**Author:** mostafayasser
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/5829157/](https://leetcode.com/problems/rotated-digits/solutions/5829157/)

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
  int rotatedDigits(int n) {
    int validNums = 0;
    for(int i = 1; i <= n; i++){
    String number = i.toString();
    if(number.contains('3') || number.contains('4') || number.contains('7') ){
            continue;
        }
      else  if(number.contains('2') || number.contains('5') || number.contains('6') || number.contains('9')){
            validNums++;
        }
    }
    return validNums;
  }
}
```