# oddiygina yechim

**Author:** ayubxon_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5361187/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5361187/)

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
  bool sumOfNumberAndReverse(int num) {
    if(num == 0){
        return true;
    }
    String count = '';
   for(int i = 0;i<num;i++){
count = i.toString().split("").reversed.join("");
if(i+int.parse(count) == num){
    return true;
}
   } 
   return false;
  }
}
```