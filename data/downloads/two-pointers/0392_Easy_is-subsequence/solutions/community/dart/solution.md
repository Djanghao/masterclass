# RUNTIME BEATS 100% DART USERS AND MEMORY 99.15% (Two pointer solution)

**Author:** Aviary
**Votes:** 2
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/4315202/](https://leetcode.com/problems/is-subsequence/solutions/4315202/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This approach involves two pointers. One (pointer) keeps track of the location in the string. The other (index) keeps track of the location in the substring 

 - index will only go up if it is found in the main string
 - so if all letters are found, index should be equal to the length of the substring

# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
 $$O(1)$$

# Code
```
class Solution {
  bool isSubsequence(String s, String t) {
    int index = 0; 
    int pointer = 0; 

    while (index < s.length && pointer < t.length){
        if (s[index] == t[pointer]){
            index++;
        }
        pointer++;
    }
    return index == s.length;
  }
}
```