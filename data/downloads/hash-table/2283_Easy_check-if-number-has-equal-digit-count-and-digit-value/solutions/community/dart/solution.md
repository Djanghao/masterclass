# Dart Simple Solution!

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/5266958/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/5266958/)

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
  bool digitCount(String num) {

    bool res = true;
    for(int i = 0 ; i< num.length ; i++){
        int count = 0;
        for(int j = 0 ; j< num.length ; j++){
            int val = int.parse(num[j]);
            if(i == val){
                count++;
            }
        }
        int t = int.parse(num[i]);
        if(count != t){
            res= false;
        }
    }
    return res;
  }
}  
```