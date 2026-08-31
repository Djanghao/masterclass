# [Python/C++] DP O(n)

**Author:** delphih
**Votes:** 15
**Link:** [https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1097266/](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/solutions/1097266/)

---

## Insight:
`XOR[1, k] == XOR[2, k+1] == 0` means `nums[1] == nums[k+1]`

Hence for any `i`, we have `nums[i] == nums[k+i] == nums[2*k+i] ...`.

The final list should be repeating of a list of length `k`.

## Solution:
For every `nums[i]`, put it in `group[i % k]`. And we need to choose k numbers, one from each group.

* Case 1: one of these `k` numbers are not from `nums`. 
    
    This is easy.

* Case 2: all `k` numbers are from `nums`

    During looping `i` through `0~k-1` (choosing the `i`th number), we maintain a dict `d` where `d[j]` is the maximal total count of chosen numbers in `nums` while `XOR[1, i] == j`.
	Then the final minimum number of elements to change is `n - d[0]` in this case.

### Time complexity:
Time complexity of case 1 is `O(k)`.

In case 2, if only looking at the nested loops, you might think there could be more than `44^44 \u2248 2e72 (2000^0.5 \u2248 44.7)` items in `d`.
But since the result of XOR cannot have more bits set than its operands and any `nums[i]` are limited to 10 bits, so items in `d` won't be more than `2^10`. (Thanks to @yaroslav-repeta pointing out my mistake.)

So the time complexity of case 2 is `O(k * n/k * 2^10) = O(n)`.

In total, the time complexity is `O(n)`.

### Python code:
```py
def minChanges(self, A: List[int], k: int) -> int:
    n = len(A)
    cnts = [collections.Counter(A[j] for j in range(i, n, k)) for i in range(k)]
    
    # case 1: one number is not from list
    mxs = [cnts[i].most_common(1)[0][1] for i in range(k)]
    ans = n - (sum(mxs) - min(mxs))
    
    # case 2: all k numbers are from list
    d = cnts[0]
    for i in range(1, k):
        d2 = collections.defaultdict(int)
        for x in d:
            for y in cnts[i]:
                t = x^y
                d2[t] = max(d2[t], d[x] + cnts[i][y])
        d = d2
    
    return min(ans, n - d[0])
```

### C++ code:
```
int minChanges(vector<int>& nums, int k) {
	int n = nums.size();
	vector<unordered_map<int, int>> cnts(k);
	for (int i=0; i<n; ++i)
		++cnts[i%k][nums[i]];

	// case 1: one number is not from list
	vector<int> mxs;
	int tot_mx = 0, mn = INT_MAX;
	auto comp = [](auto x, auto y) { return x.second < y.second; };
	for (int i=0; i<k; ++i) {
		int mx = max_element(begin(cnts[i]), end(cnts[i]), comp)->second;
		tot_mx += mx;
		mn = min(mn, mx);
	}
	int case1 = n - (tot_mx - mn);

	// case 2: all k numbers are from list
	unordered_map<int, int> dp{{0, 0}}, dp2;
	for (int i=0; i<k; ++i) {
		dp2.clear();
		for (auto &x : dp)
			for (auto &y : cnts[i]) {
				int t = x.first ^ y.first;
				dp2[t] = max(dp2[t], x.second + y.second);
			}
		dp.swap(dp2);
	}

	return min(case1, n - dp[0]);
}
```