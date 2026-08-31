# [C++ / Go] Dynamic Programming - O(nk) solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4893423/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4893423/)

---

# Approach
- `d[i][k]` is the number of subsequences with their sum equal to `k` and **can** use up to first `i` numbers.
    - Take `nums[i]` when `k >= nums[i]`: `d[i - 1][k - nums[i]]`
    - Not take `nums[i]` but still consider `i-th` element : `d[i - 1][k]`
    - Skip `i-th` element : `d[i - 1][k]` 

# Code
```C++ []
class Solution {
private:
    const int M = 1e9 + 7;
public:
    int sumOfPower(vector<int>& nums, int k) {
        vector<int> d(k + 1, 0), prev(k + 1, 0);

        prev[0] = 1;
        for (int num : nums) {
            for (int i = 0; i <= k; i++) {
                d[i] = (long long)prev[i] * 2 % M;
                d[i] %= M;

        		if (i - num >= 0) {
                    d[i] += prev[i - num];
                    d[i] %= M;
                }
        	}

            for (int i = 0; i <= k; i++) 
                prev[i] = d[i];
        }

        return prev[k];
    }
};
```
```Go []
const M = int(1e9 + 7)

func sumOfPower(nums []int, k int) int {
    d := make([]int, k + 1)
	prev := make([]int, k + 1)

	prev[0] = 1
	for _, num := range nums {
		for i := 0; i <= k; i++ {
			d[i] = (prev[i] * 2) % M
			if i - num >= 0 {
				d[i] += prev[i-num]
                d[i] %= M
			}
		}
        
		copy(prev, d)
	}

	return prev[k]
}
```

# Complexity
- Time complexity: $O(nk)$
- Space complexity: $O(k)$