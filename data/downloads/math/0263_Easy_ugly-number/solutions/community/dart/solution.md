# Easy While loop condition Statement!

**Author:** aka__sh__k__
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number/solutions/5157882/](https://leetcode.com/problems/ugly-number/solutions/5157882/)

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
  bool isUgly(int n) {
    if(n<=0){
        return false;
    }
    while(n>0){
        if(n==1){
            return true;
        }else if(n%2==0){
            n=n~/2;
       }else if(n%3==0){
        n=n~/3;
       }else if(n%5==0){
        n=n~/5;
       }else{
        return false;
       }  
    } return true;
  }
}
```