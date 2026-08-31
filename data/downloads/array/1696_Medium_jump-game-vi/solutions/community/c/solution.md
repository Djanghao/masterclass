# ✅ Optimizations from Brute-Force to Dynamic Programming w/ Explanation

**Author:** archit91
**Votes:** 586
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1260737/](https://leetcode.com/problems/jump-game-vi/solutions/1260737/)

---

Most other posts have provided direct optimized solutions. In this post, I will try to explain the thought-process and how you can optimize from brute-force to dynamic-programming to optimized DP solution.

---

\u274C ***Solution - I (Brute-Force)***

Let's start with doing just what the questions asks us. For any index *`i`* (such that *`i < n-1`*), we can jump atmost k-steps forward and we need to reach `n-1` index such that we maximise the sum of scores of intermediate jumps.

For all the indices, we will just try each jump of lengths from `1...k` and return the one which maximises the score at the end. Since we cannot go outside array bounds, we will return `nums[n-1]` (last index we can reach) when we reach `i >= n-1`. 

```
int maxResult(vector<int>& nums, int k, int i = 0) {
	if(i >= size(nums) - 1) return nums.back();
	int score = INT_MIN;
	for(int j = 1; j <= k; j++) 
		score = max(score, nums[i] + maxResult(nums, k, i + j));
	return score;
}
```

***Time Complexity :*** **`O(k^N)`**, where *`N`* is the size of array and *`k`* is max jump length. We have k choices at each index and we are trying out each choice everytime and recursing for remaining indices. So overall time complexity becomes *`k*k*k*...N times`* = *`O(k^N)`*
***Space Complexity :*** **`O(N)`**, required by the recursive stack.

---

\u274C ***Solution - II (Dynamic Programming (Memoization)- Top-Down Approach)***

In the above brute force approach, **we are re-calculating for the same index multiple times**. But we can observe that the maximum score which we can obtain by starting from an index *`i`* will always remain the same. 

So, instead of doing unnecessary repeated calculations, we can use **dynamic programming** to store the calculated results and directly return it whenever required in the future calculations. Here, we will maintain an dp array, where ***`dp[i]`* will denote the maximum score that we can obtain starting from `i`th index**. We will initialize *`dp[n-1] = nums[n-1]`* (since that's the only score we can obtain starting at `n-1`th index) and rest of `dp[i]`  to *`-infinity`* denoting that they have not been computed yet.

Now, for each *`i`*, we have the choice to make jumps of lengths *`1,2...k`* and we will store the maximum score in *`dp[i]`* after trying out  jump of each length. If *`dp[i]`* is already computed once, we will just return it without doing any re-computations.

```
int maxResult(vector<int>& nums, int k) {
	vector<int> dp(size(nums), INT_MIN);
	dp.back() = nums.back();  // dp[n-1]=nums[n-1]
	return solve(nums, dp, k, 0);
}
// recursive solver which finds max score to reach n-1 starting from ith index
int solve(vector<int>& nums, vector<int>& dp, int k, int i) {
	if(dp[i] != INT_MIN) return dp[i];   // already calculated result for index i
	for(int j = 1; j <= k; j++)          // try jumps of all length and choose the one which maximises the score
		if(i + j < size(nums))
			dp[i] = max(dp[i], nums[i] + solve(nums, dp, k, i + j));
	return dp[i];
}
```

***Time Complexity :*** **`O(k*N)`** For each index, we are trying out `k` jumps and storing the results to avoid future recomputations. Overall, the time complexity required is *`k+k+k...N times`* = `O(k*N)`
***Space Complexity :*** **`O(N)`**

---

\u274C ***Solution - III (Dynamic Programming (Tabulation) - Bottom-Up Approach)***

The above solution still leads to **TLE** with the given constraints. Let's see the iterative (bottom-up) version of the above code before moving to the optimized solution.

Here, *`dp[i]`* denotes maximum achievable score to reach *`dp[i]`* starting from 0th index. We start with *`dp[0] = nums[0]`* and make our way till the end. Finally `dp[n-1]` will give the maximum score we can obtain starting from *`i=0`*.

```
int maxResult(vector<int>& nums, int k) {
	vector<int> dp(size(nums), INT_MIN);
	dp[0] = nums[0];
	for(int i = 1; i < size(nums); i++) 
		for(int j = 1; j <= k && i - j >= 0; j++)      // try all jumps length
			dp[i] = max(dp[i], dp[i - j] + nums[i]);   // choose the jump from previous index which maximises score       
	return dp.back();
}
```

***Time Complexity :*** **`O(k*N)`** 
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - IV (Optimized Dynamic Programming)***

In the above dynamic programming approach, we can observe that in the equation *`dp[i] = max(dp[i], dp[i - j] + nums[i])`*, **we are always choosing the `dp[i-j]` which has the maximum score**. 

So, instead of iterating `k` times, we can just store the maximum amongst the previous *`dp[i-1], dp[i-2], ...dp[i-k]`* and use it directly in the equation. For this, we can make use of a **multiset** to maintain the results of max score for previous k indices in a sorted order. That is, we are storing `dp[i-1], dp[i-2],..., dp[i-k]` in a sorted order in the multiset.

Whenever we reach *`i > k`*, the `dp[i-k - 1]` will be useless to us, since there's no way we can reach current index `i` from `i-k - 1`th index. So, we will just remove it from our set. Finally, the above equation - *`dp[i] = max(dp[i], dp[i - j] + nums[i])`*,  can now be solved in **`O(logk)`** instead of `O(k)`.

```
int maxResult(vector<int>& nums, int k) {
	vector<int> dp(size(nums), INT_MIN);
    multiset<int> s ({ dp[0] = nums[0] });         // set dp[0] = nums[0] and insert it into set
	for(int i = 1; i < size(nums); i++) {
        if(i > k) s.erase(s.find(dp[i - k - 1]));  // erase elements from which we cant jump to current index
        s.insert(dp[i] = *rbegin(s) + nums[i]);    // choose element with max score and jump from that to the current index
    }
	return dp.back();
}
```

***Time Complexity :*** **`O(N*log(k))`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - V (Further Optimized DP)***

We can maintain a simple double-side queue in a sorted order to reduce the max previous score lookup from `O(logk)` down to `O(1)`. Here we will store the indices instead of `dp[i]` in the queue.

Just as in above approach, we will pop `i-k-1`th index from queue since it will be useless to us. Along with that, we will also pop those indices which will never have any chance of being chosen in the future. So for eg., if the score for current index - `dp[i]` is greater than some indices stored in the queue, it will always be optimal to choose `dp[i]` instead of those other indices. So, we will just pop those indices from queue since they won't ever be used.

```
int maxResult(vector<int>& nums, int k) {
	vector<int> dp(size(nums));
	dp[0] = nums[0];
	deque<int> q{ 0 };
	for(int i = 1; i < size(nums); i++) {
		if(q.front() < i - k) q.pop_front();         // can't reach current index from index stored in q     
		dp[i] = nums[i] + dp[q.front()];             // update max score for current index
		while(!q.empty() && dp[q.back()] <= dp[i])   // pop indices which won't be ever chosen in the future
		    q.pop_back();
		q.push_back(i);                              // insert current index
	}
	return dp.back();
}
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(N)`** required for `dp` and `q`. You can optimize it down to `O(K)` if you use *`nums`* itself as the `dp` array (if you are allowed to modify the given input)

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---
