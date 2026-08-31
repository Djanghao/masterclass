# simple dimple dart solution

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921677/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921677/)

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
  List<int> findDuplicates(List<int> nums) {
    Set<int>duplicate={};
    List<int>result=[];
    for(int value in nums){
        if(duplicate.contains(value)){
            result.add(value);
        }else{
            duplicate.add(value);
        }
    }
    return result;
  }
}
```