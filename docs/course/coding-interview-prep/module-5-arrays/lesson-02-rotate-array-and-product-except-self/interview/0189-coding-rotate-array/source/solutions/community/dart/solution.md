# Common solution 0(n) with explanation

**Author:** Lainaaa
**Votes:** 5
**Link:** [https://leetcode.com/problems/rotate-array/solutions/3359178/](https://leetcode.com/problems/rotate-array/solutions/3359178/)

---

# Intuition
In the new array, add only those numbers that should be moved to the beginning, and then add the rest. 

# Approach
1.Firstly find real count of steps - k %= nums.length .

2.This is approach works only if k > 0 otherwise we will get something like "index out of range"

3.Create new array with numbers that should be moved to the beginning.

4.After that add remaining numbers using simple loop.

# Complexity
- Time complexity: 0(n)

# Code
```
class Solution {
  void rotate(List<int> nums, int k) {
//Find real k
    k %= nums.length;
    //examination
    if(nums.length > 1 && k > 0){
    //Create new array with numbers that should be moved to the beginning
      List<int> result = nums.getRange(nums.length - k, nums.length).toList();
    //add remaining numbers
      for (var i = 0; i < nums.length - k; i++) {
        result.add(nums[i]);
    }
    nums.removeRange(0, nums.length);
    nums.insertAll(0, result);
  }
  }
}
```
If you liked this solution, then do not forget to rate it please \uD83D\uDC4D\uD83C\uDFFB