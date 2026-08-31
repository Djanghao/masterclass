# Very Simple and Beginner Friendly with Explanation | C++

**Author:** Chanpreet3000
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650464/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3650464/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have to partition `nums` in such a `max(nums1)` - `min(nums2)` id minimum.
We know that in an `Sorted Array` the minimum difference between any two pairs `(i, j)` of the array would be minimum difference between `(i, i + 1)`.
Ex: `1,2,3,4,5` diff between `1 & 2` is always less than `1,3` & `1, 4` & `1,5`. Similarly for all adjacent pairs.

Assume a Sorted array `....a,b,c,d.....` if we choose `c` to be minium of `nums2` and `b` to be maximum of `nums1`.
We can do this by partitioning `.....ab` & `cd.....`.


# Approach
<!-- Describe your approach to solving the problem. -->
Partition at each index and find minimum.
`....a` & `bcd...` (b - a)
`....ab` & `cd...` (c - b)
`....abc` & `d...` (d - c)

# Complexity
- Time complexity:`O(N * Log(N))`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int findValueOfPartition(vector<int>& nums) {
        int ans = 1e9;
        sort(nums.begin(), nums.end());
        for(int i = 1; i < nums.size(); i++){
            ans = min(ans, nums[i] - nums[i - 1]);
        }
        return ans;
    }
};
```