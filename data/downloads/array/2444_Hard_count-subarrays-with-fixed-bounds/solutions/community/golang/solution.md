# [C++ / Go] Sliding Window - O(n) time + O(1) space solution

**Author:** mikazuki4712
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949109/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949109/)

---

# Approach
- Maintain the longest sliding window containing all elements in range `[minK .. maxK]`.
    - The `l` pointer indicates the first, farthest element in the range `[minK .. maxK]` within the current window.
    - `pmin` and `pmax` is the recent positions of `minK` and `maxK` in the current window.
- When sliding to position `r`:
    - If `nums[r]` is out of range `[minK .. maxK]`, reset the window:
        - Reset `l` to `r + 1`
        - Reset `pmin`, `pmax` to not found.
    - If `nums[r] = minK` or  `nums[r] = maxK` then update `pmin` or `pmax` accordingly.
    - Get `p` is min of `pmin` and `pmax` (if both elements are found)
        - Subarray from `p` to `r` is the first subarray in the current window containing all elements in range `[minK .. maxK]` and end at `r`. Add every elements in front of that subarray back to `l` to it will create another suitable subarray.
    => Add to result with `min(pmin, pmax) - l + 1` suitable subarrays ending at `r`.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```C++ []
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        long long res = 0;
        int left = 0;
        int pmin = -1;
        int pmax = -1;

        for (int right = 0; right < nums.size(); right++) {
            int num = nums[right];
            if (num < minK || num > maxK) {
                left = right + 1;
                pmin = -1;
                pmax = -1;
            } else {
                if (num == minK) pmin = right;
                if (num == maxK) pmax = right;
                res += max(0, min(pmin, pmax) - left + 1);
            }   
        }

        return res;
    }
};
```
```Go []
func countSubarrays(nums []int, minK int, maxK int) int64 {
    var res int64
	left := 0
	pmin := -1
	pmax := -1

	for right, num := range nums {
		if num < minK || num > maxK {
			left = right + 1
			pmin = -1
			pmax = -1
		} else {
			if num == minK {
				pmin = right
			}
			if num == maxK {
				pmax = right
			}
			res += int64(max(0, min(pmin, pmax) - left + 1))
		}
	}

	return res
}
```