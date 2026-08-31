# Easy methode.

**Author:** lijith006
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/5919446/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/5919446/)

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
  String largestOddNumber(String num) {
    int n=num.length;
    for(int i=n-1;i>=0;i--){
        if(int.parse(num[i])%2!=0){
            return num.substring(0,i+1);
            
        }
    }return '';
    
  }
}
```