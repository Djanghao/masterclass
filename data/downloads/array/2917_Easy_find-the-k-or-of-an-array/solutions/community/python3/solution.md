# count set bits

**Author:** nkrishk
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220766/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220766/)

---

# Approach

##### Let,
`dp[0]` is count of num in nums with `0`th bit set (least significant)
`dp[1]` is count of num in nums with `1`st bit set 
.
.
.
`dp[31]` is count of num in nums with `31`st bit set 

##### For and while loop

Update (increment if a bit is set) dp for each num in nums

Accumulate `dp`,  if `count >= k`

#### Note:
`2^i` represents only `i`'th bit set in binary system
`num & 1` will get you if the last bit is set in num (same can be used to find if a num is odd or even)
`num>>1` will right sift num by 1 bit. equivalent to divison by 2

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# [Python3] Sol 1 (Python3)
```
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        
        dp = [0]*31
        
        for num in nums:
            i = 0    
            while num > 0:
                if num & 1 == 1:
                    dp[i] += 1
                i += 1
                num = num >> 1

        ans = 0
        for i,count in enumerate(dp):
            if count >= k:
                ans += 2**i
                
        return ans
```

# [Python3] Sol 2 (optimizing 2**i)
```
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        
        dp = [0]*31
        
        for num in nums:
            i = 0    
            while num > 0:
                if num & 1 == 1:
                    dp[i] += 1
                i += 1
                num = num >> 1

        ans = 0
        bit = 2**0
        for i,count in enumerate(dp):
            if count >= k:
                ans |= bit # we can OR , since we are only dealing with powers of 2 
            bit <<= 1
                
        return ans
```
# C++
```Cpp
class Solution {
public:
    int findKOr(vector<int>& nums, int k) {
        vector<int> dp(31, 0);

        for (int num : nums) {
            int i = 0;
            while (num > 0) {
                if (num & 1) dp[i] += 1;
                i += 1;
                num = num >> 1;
            }
        }
        int ans = 0;
        for (int i = 0; i < 31; ++i) {
            if (dp[i] >= k) ans |= (1 << i);
        }
        return ans;
    }
};
```
# Java
```
class Solution {
    public int findKOr(int[] nums, int k) {
        int[] dp = new int[31];

        for (int num : nums) {
            int i = 0;
            while (num > 0) {
                if ((num & 1) == 1) {
                    dp[i] += 1;
                }
                i += 1;
                num = num >> 1;
            }
        }
        int ans = 0;
        for (int i = 0; i < 31; i++) {
            if (dp[i] >= k) {
                ans += (1 << i);
            }
        }
        return ans;
    }
}
```

# Go
```
func findKOr(nums []int, k int) int {
	dp := make([]int, 31)

	for _, num := range nums {
		i := 0
		for num > 0 {
			if num&1 == 1 {
				dp[i]++
			}
			i++
			num >>= 1
		}
	}

	ans := 0
	for i, count := range dp {
		if count >= k {
			ans += 1 << uint(i)
		}
	}

	return ans
}
```