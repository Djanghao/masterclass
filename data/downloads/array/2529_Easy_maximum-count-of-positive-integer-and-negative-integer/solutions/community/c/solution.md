# [C++|Java|Python3] binary search

**Author:** ye15
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3017003/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3017003/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cd738c7122f758231c4f575936d09271343de490) for solutions of weekly 327. 

**Intuition**
We binary search for the number of negative numbers and positive numbers in the array. 

**Implementation**
**C++**
```
class Solution {
public:
    int maximumCount(vector<int>& nums) {
        int neg = lower_bound(nums.begin(), nums.end(), 0) - nums.begin(), pos = nums.end() - upper_bound(nums.begin(), nums.end(), 0); 
        return max(neg, pos); 
    }
};
```
**Java**
```
class Solution {
    private static int bisect_left(int[] nums, int target) {
        int lo = 0, hi = nums.length; 
        while (lo < hi) {
            int mid = lo + (hi - lo)/2; 
            if (nums[mid] < target) lo = mid+1; 
            else hi = mid; 
        }
        return lo; 
    }
    
    public int maximumCount(int[] nums) {
        int neg = bisect_left(nums, 0), pos = nums.length - bisect_left(nums, 1); 
        return Math.max(neg, pos); 
    }
}
```
**Python3**
```
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg = bisect_left(nums, 0)
        pos = len(nums) - bisect_right(nums, 0)
        return max(neg, pos)
```
**Complexity**
Time `O(logN)`
Space `O(1)`