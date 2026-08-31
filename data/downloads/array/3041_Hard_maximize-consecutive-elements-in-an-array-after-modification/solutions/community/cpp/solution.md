# Intution + Approach DP & Sorting

**Author:** codeanzh
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742550/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742550/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intution for this problem was to consider every number to stay in two states, this is `num[i], or nums[i] + 1`, now consider the defination of `DP` variable as **`DP[a]` = maximum length of consicutive nums we can create by considering `a` as the end of that sequence**

# Approach
<!-- Describe your approach to solving the problem. -->
Now if you sort the `nums` and apply iteratively the upper defination of DP and keep on finding the maximum value for `DP[nums[i]]` or `DP[nums[i] + 1]` by this approach `DP[nums[i]] = max(DP[nums[i] - 1], DP[nums[i]])` you can find the ans, by taking max of `DP`.

# Example
`nums = [2,1,5,1,1]`
sort nums
`nums = [1,1,1,2,5]`
`i = 0`: `DP[nums[i]] i.e. DP[1] = 1, and DP[2] = 1`, `ans = 1`
`i = 1`: `DP[1] = 1, and DP[2] = 2` `ans = 2`
`i = 2`: `DP[1] = 1, and DP[2] = 2` `ans = 2`
`i = 3`: `DP[1] = 1, DP[2] = 2, and DP[3] = 3` `ans = 3`
`i = 4`: `DP[1] = 1, DP[2] = 2, DP[3] = 3, DP[5] = 1, and DP[6] = 1` `ans = 3`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
**C++**
```
class Solution {
public:
    Solution() {
        ios::sync_with_stdio(false);
    }

    int maxSelectedElements(vector<int>& nums) {
        int n = nums.size(), ans = 1;
        sort(nums.begin(), nums.end());
        map<int, int> DP;

        for (int i = 0; i < n; i++) {
            int a = 1, b = 1;

            if (DP.find(nums[i] - 1) != DP.end()) {
                a = DP[nums[i] - 1] + 1;
            }
            
            if (DP.find(nums[i]) != DP.end()) {
                b = DP[nums[i]] + 1;
            }
            
            if (DP.find(nums[i]) == DP.end()) DP[nums[i]] = a; else DP[nums[i]] = max(DP[nums[i]], a);
            if (DP.find(nums[i] + 1) == DP.end()) DP[nums[i] + 1] = b; else DP[nums[i] + 1] = max(DP[nums[i] + 1], b);
            
            ans = max(max(DP[nums[i]], DP[nums[i] + 1]), ans);
        }
        
        return ans;
    }
};
```
**Python**
```
class Solution:
    def maxSelectedElements(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        ans = 1
        DP = {}
        
        for num in nums:
            a, b = 1, 1
            if num - 1 in DP:
                a = DP[num - 1] + 1
            
            if num in DP:
                b = DP[num] + 1
                
            DP[num] = max(DP.get(num, 0), a)
            DP[num + 1] = max(DP.get(num + 1, 0), b)
            
            ans = max(ans, max(DP[num], DP[num + 1]))
        
        return ans
        
```