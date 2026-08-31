# [C++] DP with "ternary digit" mask

**Author:** rh137
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766768/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/1766768/)

---

- Definition
	- Let `n` denotes the size of `nums`.
	- Let `k` denotes the number of slots (which is `numSlots` in the original description).
- Hint
	- Think about how to solve the simplified version, where each slot could contain **at most one** number.
	- Try to generalize it to the original problem.
- How to solve the simplied version?
	- It is intuitive to use **Dynamic Programming** (or DFS + memoization) and maintain a **bit mask**, where bit `i` is set if and only if the `i`-th slot is occupied by some number.
	- the definition of DP table should be like:
		- `dp[start][mask] :=` the maximum AND sum of `nums[start, ..., n-1]`, where `mask` indicates the availabilities of the slots.
	- the base case is:
		- `dp[n][mask] = 0`, since `nums[n, ..., n-1]` represents an empty array (which means we've put every number into some slot.)
	- and the transition would be:
		- `dp[start][mask] = max((nums[start] & i) + dp[start+1][mask|(1<<i)])` for all `i \\in [1, k]` s.t. the `i`-th bit is off in `mask` (i.e. `(mask & (1<<i)) == 0`, which means the `i`-th slot is avaliable).
	- there are `O(n * 2^k)` states, the transition for each state is `O(k)`, so the total complexity would be `O(nk 2^k)` (actually `O(k 2^k)`, but we just ignore this at this moment).
- Come back to the original problem
	- the idea is the same, but now at each slot there can be **at most two** numbers, which means one bit is not enough to encode the state for one slot.
	- but similarly, we can encode the availabilities of the slots using a **base-3 system**, in which the numbers would be like:
		- `0120112...`
	- so each digit would represent the **current # of numbers** in that slot.
	- but now we can't use the bit operations to check a slot's availability! how can we do this now?
		- note that each `d`-digit number in base-3 can be represented as `a_{d-1} * 3^(d-1) + a_{d-2} * 3^(d-2) + ... + a_1 * 3^1 + a_0 * 3^0`
		- for example, `121001` in base-3 is `1 * 3^5 + 2 * 3^4 + 1 * 3^3 + 0 * 3^2 + 0 * 3^1 + 1 * 3^0`
		- to check a slot `i`, we have to know what `a_i` is in this number, which can be obtained by
			- `a_i = floor( (mask % 3^(i+1)) / 3^i )`
	- so that conclues the method, the definition and base case of `dp` is the same as before, and the transition becomes:
		- `dp[start][mask] = max((nums[start] & i) + dp[start+1][mask + 3^i]` for all `i \\in [1, k]` s.t. `a_i <= 1` (which means the `i`-th slot is not full).
- Code (C++)
```
class Solution {
private:
    int dp[20][60000];
    vector<int> a;
    int n;
    int k;
    // n numbers, k slots
    int ans;
    int h[12];  // h[i] == 3^i
    int search(int start, int mask) {
        if (start == n) return 0;
        if (dp[start][mask] != -1) return dp[start][mask];
        // try to push a[start] into slot 1 ~ k
        for (int i = 1; i <= k; i++) {
            int cnt = (mask % h[i+1]) / h[i];
            if (cnt <= 1) {
                dp[start][mask] = max(dp[start][mask], (a[start] & i) + search(start+1, mask + h[i]));
            }
        }
        return dp[start][mask];
    }
public:
    int maximumANDSum(vector<int>& nums, int numSlots) {
        // states: at most 3^k
        // search: k
        a.assign(nums.begin(), nums.end());
        memset(dp, -1, sizeof(dp));
        // dp[i][mask]: the answer for nums[i:] with mask   (based-3)
        // a 3^1 + b 3^2 + c 3^3 + ...
        n = nums.size();
        k = numSlots;
        ans = 0;
        h[0] = 1;
        for (int i = 1; i < 12; i++)
			h[i] = h[i-1] * 3;
        return search(0, 0);
    }
};
```
- Time Complexity: `O(k 3^k)` (try to figure out why it's not `O(nk 3^k)`)
- Space Complexity: `O(n 3^k)`, can be improved to `O(3^k)` since the first dimension of `dp` is redundant.
- Code (space optimized)
```
class Solution {
private:
	int dp[20000];   // we don't need the first dimension!
    vector<int> a;
    int n;
    int k;
    // n numbers, k slots
    int ans;
    int h[10];  // h[i] == 3^i
    int search(int start, int mask) {
        if (start == n) return 0;
        if (dp[mask] != -1) return dp[mask];
        // try to push a[start] into slot 1 ~ k
        for (int i = 1; i <= k; i++) {
            int cnt = (mask % h[i]) / h[i-1];
            if (cnt <= 1) {
                dp[mask] = max(dp[mask], (a[start] & i) + search(start+1, mask + h[i-1]));
            }
        }
        return dp[mask];
    }
public:
    int maximumANDSum(vector<int>& nums, int numSlots) {
        // states: at most 3^k
        // search: k
        a.assign(nums.begin(), nums.end());
        memset(dp, -1, sizeof(dp));
        // dp[i][mask]: the answer for nums[i:] with mask   (based-3)
        // a 3^0 + b 3^1 + c 3^2 + ...
        n = nums.size();
        k = numSlots;
        ans = 0;
        h[0] = 1;
        for (int i = 1; i < 10; i++)
            h[i] = h[i-1] * 3;
        return search(0, 0);
    }
};
```