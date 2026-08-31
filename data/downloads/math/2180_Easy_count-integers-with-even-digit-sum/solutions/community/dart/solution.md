# Easy

**Author:** Shaheed_Palappetty
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4364028/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4364028/)

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
  int countEven(int num) {
      int count=0;
   for(int i=1;i<=num;i++){
       int sum=0;
       int value=i;
       while(value>0){
           int digit=value%10;
           sum+=digit;
           value~/=10; 
       }
       if(sum%2==0){
           count++;
       }
   }
   return count;
  }
}
```