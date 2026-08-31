# solution with time o(n^2) space o(1)

**Author:** jesbin66
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4177662/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4177662/)

---

# Intuition
it has diffirent way we can do it in o(n) time and o(n) space but i done the method in o(n^2) time and 0(1) space

# Approach
taking each elements in the pieces List<List<int>> and checking every elements first element in the arr not valid then it will return false or checking the elements behind it to the length of the pieces elemnt length doing like that for every element if it is false then return false or waiting till last element in the pieces then return true

# Complexity
- Time complexity:
o(n^2)

- Space complexity:
0(1)

# Code
```
class Solution {
  bool canFormArray(List<int> arr, List<List<int>> pieces) {
    for (final List<int> element in pieces) {
      int index = arr.indexOf(element[0]);
      if (index == -1) return false;
      if (index + element.length - 1 >= arr.length) return false;
      if (!element.every(
        (element) => element == arr[index++],
      )) return false;
    }
    return true;
  }
}
```