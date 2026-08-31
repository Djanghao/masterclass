# SImple Dart Solution (DFS)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/3590196/](https://leetcode.com/problems/find-unique-binary-string/solutions/3590196/)

---

# Approach
//Given a list of strings (nums) return any combination
//of 1's and 0's that does not appear in the nums list.

//To solve this I used DfS because it is the best way to
//find the first solution to a problem (not necessarily
//the shortest solution though, but here that does not matter).

//Time: 260ms Beats: 100%
//Memory: 141.5MB Beats: 100%


# Code
```
class Solution {
  String findDifferentBinaryString(List<String> nums) {
      Set<String> vals = nums.toSet();
      return findUnique(vals,'', nums[0].length);
}
  String findUnique(Set<String> vals, String current, int len){
    if(current.length == len){
      if(vals.contains(current) == false){
        return current;
      }
      return '';
    }
    String one = findUnique(vals, current + '1', len);
    if(one.length != 0){
      return one;
    }
    String zero = findUnique(vals, current + '0', len);
    return zero;
  }
}
```