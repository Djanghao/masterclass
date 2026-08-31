# Python 3 | Math, Binary Search | Explanation

**Author:** idontknoooo
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1467647/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1467647/)

---

### Explanation
- `nums1[i] + nums1[j] > nums2[i] + nums2[j], i < j` can be converted to 
	- `(nums1[i]-nums2[i]) + (nums1[j]-nums2[j]) > 0, i < j`
	- At this point, you will realize that the constrain `i < j` is not really important anymore, you can replace `i` with `j` and get
	- `(nums1[j]-nums2[j]) + (nums1[i]-nums2[i]) > 0`. This is due to [Commutative_Property of Addition](https://en.wikipedia.org/wiki/Commutative_property).
- We can calculate the difference between `nums1[i]` and `nums2[i]` and sort the result array `diff`
	- Then for each `diff[i]`, we want to find **number of `diff[j]` such that `diff[j] > -diff[i]`**, so that `diff[i] + diff[j] > 0`
		- Remember the **original order is not important** as discussed above, we will only **focus on current order (i.e. only count `j such that j > i`)**
		- This part can be confusing, the original order also requires to find `j such that j > i`, but this is **totally different** from the order of `diff`. This is because that `diff` is already sorted, which breaks the original order.
	- Since `diff` is already sorted, we can use `binary search` to do the finding
- The question is not a hard one, but the reasoning behind it need a bit more thinking.
### Implementation
```
class Solution:
    def countPairs(self, nums1: List[int], nums2: List[int]) -> int:
        diff = sorted(x - y for x, y in zip(nums1, nums2))
        ans, n = 0, len(diff)
        for i, x in enumerate(diff):
            idx = bisect_right(diff, -x, i+1)
            ans += n - idx
        return ans
```