# ✅ Python Simple Map Approach

**Author:** constantine786
**Votes:** 35
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112285/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112285/)

---

The core logic for this is the reversed iteration to construct the final replacements list.The reversed iteration helps to link the last replacement.

There can be chain of `operations` which will replace the same index in the array.
eg:
> **operations = [[1,2], [2,3], [3,4]], nums = [1, 7, 9, 10]**

If you consider this example, the chain of operations are: `1-> 2 -> 3 -> 4`. So by transitive property we only care only about this replacement: `1->4`. The reversed iteration helps me to connect this link in `O(1)` with `replacements[x] = replacements.get(y, y)` logic. If I start from first, I would need a `O(n)` search.

```
class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
            replacements = {}
            for x, y in reversed(operations):
                replacements[x] = replacements.get(y, y)
            for idx, val in enumerate(nums):
                if val in replacements:
                    nums[idx] = replacements[val]
            return nums
```

**Time - O(n)**
**Space - O(n)** - space for storing positions of each element in input `nums`

---
***Please upvote if you find it useful***