# Explanation why longest decreasing  sequence size works

**Author:** SmittyWerbenjagermanjensen
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5534179/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5534179/)

---

# Intuition
Each number in the largest **non-increasing sequence** of numbers must be handled in separate moves. Therefore, the length of the largest non-increasing sequence is the minimum number of operations required to make the array empty.

**Example 1:**
nums = [***5***, ***3***, 1, 4, ***2***]
The longest non-increasing sequence that can be made is ***5, 3, 2*** thus 3 operations are required to make array empty since these 3 numbers can never be included in a strictly increasing subsequence

Refer to [300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/description/) to see how longest increasing/decreasing subsequence is found

# Complexity
- Time complexity:
$$O(nlogn)$$ due to binary search

- Space complexity:
$$O(n)$$ due to ```lds``` array

# Code
```javascript []
const binarySearch = (nums, n) => {
    let l = 0, r = nums.length;
    while (l < r) {
        let mid = (l + r) >> 1;
        nums[mid] >= n ? l = mid + 1 : r = mid;
    }
    return l;
}

const minOperations = (nums) => {
    const lds = []; // longest decreasing subsequence
    for (let num of nums) {
        let i = binarySearch(lds, num);
        i === lds.length ? lds.push(num) : lds[i] = num;
    }
    return lds.length;
}
```
```python []
class Solution:
    def binarySearch(self, nums: List[int], n: int) -> int:
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) >> 1
            if nums[mid] >= n:
                l = mid + 1
            else:
                r = mid
        return l
    
    def minOperations(self, nums: List[int]) -> int:
        lds = [] # longest decreasing subsequence
        for num in nums:
            i = self.binarySearch(lds, num)
            if i == len(lds):
                lds.append(num)
            else:
                lds[i] = num
        return len(lds)
```