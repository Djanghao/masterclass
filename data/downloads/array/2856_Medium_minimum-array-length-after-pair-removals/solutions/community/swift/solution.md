# Simple 5 lines Swift solution. Time: O(n/2) and Space: O(1)

**Author:** barabash
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052545/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052545/)

---

# Intuition
- Compare the first and second parts of the list.

# Approach
- Make two pointers: starting from the beginning and starting from the middle.
- Compare the and iterate to the end of the list.
- If after the mid-value is higher, then continue. Otherwise, add two because both numbers failed with the condition.
- In the end, add one if the list is not even, and we need to add a mid element.

# Complexity
- Time complexity:
$$O(n/2)$$ -> $$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    func minLengthAfterRemovals(_ nums: [Int]) -> Int {
        var i = 0, half = (nums.count + 1) / 2, res = 0
        while i+half < nums.count  {
            res += nums[i+half] > nums[i] ? 0 : 2
            i += 1
        }
        return res + (nums.count % 2 == 0 ? 0 : 1)
    }
}
```


![image.png](./images/0.png)
