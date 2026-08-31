# [C++ / Go] Sliding Window - O(n) time + O(m) space solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4905642/](https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4905642/)

---

# Intuition
### Choosing a Starting Position
- Select a starting position which is already `1`.
=> Reduce target to k - 1.
### Earning Point Ways
- There are 2 ways to earn points:
    - Use multiple **type 1 actions** to swap another `1` to current position.
    => Cost equals distance between that `1` and the current position.
    - Use a **type 2 action** to convert an adjacent elements to `1` and then use a **type 1 action** to swap to current position.
    => Cost equals 2 actions and 1 change.
### Type 2 actions is more optimal in most of cases.
- Use most of **Type 2 Actions** for better cost:
    - There are corner case that the two adjacent elements of current position is already `1`, so the cost just 1.
    - Do not use more changes than the target.
    => The number of used **type 2 actions** ranges from from `maxChanges - 2` to `maxChanges`
### Gathering Remaining Ones:
- The remaining `1` elements are collected from both sides of the starting position to minimize the overall cost.

# Approach
- Extract an array of all positions of `1`.
- For each number of used type 2 actions, there are `r` remaining `1`s.
    - Use a sliding window of size `r` in the new array.
    - Gather `1` to middle of sliding window, calculate the cost efficiently using **prefix sum**, **suffix sum**
    - Another cost is change cost.

# Code
```C++ []
class Solution {
public:
    long long minimumMoves(vector<int>& nums, int k, int maxChanges) {
        vector<int> pos;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                pos.push_back(i);
            }
        }

        if (pos.empty())
            return 2 * k;

        if (k == 1)
            return 0;

        int m = pos.size();
        vector<long long> prefixSum(m);
        prefixSum[0] = pos[0];
        for (int i = 1; i < m; i++)
            prefixSum[i] = prefixSum[i - 1] + pos[i];

        vector<long long> suffixSum(m);
        suffixSum[m - 1] = 0;
        for (int i = m - 2; i >= 0; i--)
            suffixSum[i] = suffixSum[i + 1] + (pos[m - 1] - pos[i]);

        long long res = LLONG_MAX;
        maxChanges = min(maxChanges, k - 1);
        for (int change = max(0, maxChanges - 2); change <= maxChanges; change++) {
            int required = k - change;
            long long changeCost = change * 2;

            int l = 0;
            int r = l + required - 1;
            int mid = (l + r) / 2;
            while (r < m) {
                long long tmp = changeCost;
                tmp += suffixSum[l] - suffixSum[mid] - (long long)(mid - l) * (pos[m - 1] - pos[mid]);
                tmp += prefixSum[r] - prefixSum[mid] - (long long)(r - mid) * pos[mid];

                res = min(res, tmp);

                l++;
                r++;
                mid++;
            }
        }
        return res;
    }
};
```
```Go []
func minimumMoves(nums []int, k int, maxChanges int) int64 {
    pos := make([]int, 0)
	for i, num := range nums {
		if num != 0 {
			pos = append(pos, i)
		}
	}

	if len(pos) == 0 {
		return int64(2 * k)
	}

	if k == 1 {
		return int64(0)
	}

    m := len(pos)
	prefixSum := make([]int64, m)
	prefixSum[0] = int64(pos[0])
	for i := 1; i < m; i++ {
		prefixSum[i] = prefixSum[i - 1] + int64(pos[i])
	}

	suffixSum := make([]int64, m)
	for i := m - 2; i >= 0; i-- {
		suffixSum[i] = suffixSum[i + 1] + int64(pos[m - 1] - pos[i])
	}

    res := int64(math.MaxInt64)
	maxChanges = min(maxChanges, k - 1)
	for change := max(0, maxChanges - 2); change <= maxChanges; change++ {
		required := k - change
		changeCost := int64(change * 2)

		l := 0
		r := l + required - 1
		mid := (l + r) / 2
		for r < m {
			tmp := changeCost
			tmp += suffixSum[l] - suffixSum[mid] - int64(mid - l) * int64(pos[m - 1] - pos[mid])
			tmp += prefixSum[r] - prefixSum[mid] - int64(r - mid) * int64(pos[mid])

			res = min64(res, tmp)

			l++
			r++
			mid++
		}
	}
	return res
}

func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}

func max(x, y int) int {
    if x < y {
        return y
    }
    return x
}

func min64(x, y int64) int64 {
    if x < y {
        return x
    }
    return y
}
```

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(m)$, `m` is number of `1` elements