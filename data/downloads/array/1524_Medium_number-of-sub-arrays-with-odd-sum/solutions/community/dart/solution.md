# [Dart] dart Solution for numOfSubarrays

**Author:** Mo_Chelbeb
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/2863215/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/2863215/)

---

# Intuition
    odd + odd = evan
    odd + evan= odd(the target)
    evan+ evan= evan

    so lets calcul the m and n (evan num and odd num)
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)
- Space complexity:
O(n)
# Code
```
class Solution {
  int numOfSubarrays(List<int> arr) {
      int m=1;
      int n=0;
      int s=0;
      for(var i in arr){
          s += i;
          if(s%2==0){
              m++;
          }
          else{
              n++;
          }
      }
      return (n*m)%(pow(10,9) +7) as int;
  }
}
```