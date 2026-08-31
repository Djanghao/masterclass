# Very Easy solution.

**Author:** lijith006
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/5969207/](https://leetcode.com/problems/alternating-digit-sum/solutions/5969207/)

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
  int alternateDigitSum(int n) {
    List<String>digits=n.toString().split('');
    int sum=0;
    for(int i=0;i<digits.length;i++){
        int value=int.parse(digits[i]);
        if(i%2!=0){
            value=-value;
            
        }
        sum+=value;

        
    }return sum;
    
  }
}
```