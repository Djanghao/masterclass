# simple solution for Check if The Number is Fascinating

**Author:** EsraaRiad
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/6033088/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/6033088/)

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
  bool isFascinating(int n) {
    if(n.toString().contains('0')|| (2*n).toString().contains('0')||(3*n).toString().contains('0')){
        return false;
    }
      String  conctNumber=n.toString()+(2*n).toString()+(3*n).toString();
      if(conctNumber.length !=9 ){
        return false;
      }
      for(int i=1; i<=9; i++){
        if(!conctNumber.contains(i.toString())){
            return false;
        }

      }
      return true;
      
    
  }
}
```