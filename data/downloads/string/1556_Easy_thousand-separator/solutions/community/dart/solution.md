# Dart Simple Solution

**Author:** abhinavp9074
**Votes:** 1
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/4152229/](https://leetcode.com/problems/thousand-separator/solutions/4152229/)

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
  String thousandSeparator(int n) {
      String snum = n.toString();
      if(snum.length<=3){
          return snum;
      }else{
          List<String>arr=snum.split('');
          for(int i=3;i<arr.length;i=i+4){
              arr.insert(arr.length-i,'.');
          }
          return arr.join();
      }
      
  }
}
```