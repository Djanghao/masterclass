# fast & simple code

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/5138218/](https://leetcode.com/problems/next-greater-element-i/solutions/5138218/)

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
  List<int> nextGreaterElement(List<int> nums1, List<int> nums2) {
    List<int>store=[];
     
     for(var num in nums1){
        int index = nums2.indexOf(num);
        int number = nums2.sublist(index + 1).firstWhere((element)=>
        element > num,
        orElse : () =>-1,
        );
        store.add(number);
     }
     return store;
  }
}
```