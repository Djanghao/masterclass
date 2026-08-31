# Dart simple🔥 solution🚀

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2971994/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2971994/)

---

If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```
class Solution {
  List<int> intersect(List<int> nums1, List<int> nums2) {
      nums1.sort();
      nums2.sort();
      List<int> res = [];
      int i=0, j=0 ;
      while(i<nums1.length && j<nums2.length){
          if(nums1[i]==nums2[j]){
              res.add(nums1[i]);
              i++;
              j++;
          }else if(nums1[i]>nums2[j]) j++;
          else i++ ;
      }
      return res ;
  }
}
```


Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)
