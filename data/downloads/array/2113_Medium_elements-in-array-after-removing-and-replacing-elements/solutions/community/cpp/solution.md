# C++ | short

**Author:** shubhamchandra01
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/5752141/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/5752141/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []


class Solution {
public:
    vector<int> elementInNums(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), nq = queries.size();
		vector<int> ans(nq, -1);
		int n2 = 2 * n;
		for (int i = 0; i < nq; i++) {
			vector<int> q = queries[i];
			int t = q[0] % n2;
			int cnt = abs(n - t);
			if (q[1] + 1 <= cnt) {
				if (t > n) {
					ans[i] = nums[q[1]];
				} else {
					ans[i] = nums[t + q[1]];
				}
			}
		}
		return ans;
    }
};


```