# Easy Understand For Beginners!

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5293251/](https://leetcode.com/problems/relative-sort-array/solutions/5293251/)

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
  List<int> relativeSortArray(List<int> arr1, List<int> arr2) {

    List<int>res = [];
    List<int>store = [];
   
    for(var value in arr2){
      for(int j = 0 ; j < arr1.length ; j++){
        if(value == arr1[j]){
            res.add(arr1[j]);
        }
      }
    }

    for(int k = 0 ; k < arr1.length ; k++){
        if(!arr2.contains(arr1[k])){
            store.add(arr1[k]);
        }
    }
    store.sort();
   return [...res,...store];
  }
}
```