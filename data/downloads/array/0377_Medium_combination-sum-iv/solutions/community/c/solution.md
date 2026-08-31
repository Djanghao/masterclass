# ✅ Short & Easy w/ Explanation | Optimization from Brute Force to DP Solution

**Author:** archit91
**Votes:** 189
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/1166177/](https://leetcode.com/problems/combination-sum-iv/solutions/1166177/)

---

The problem asks us to find the number of possible combinations(and all permutations of that combination as well) of elements from *`nums`* that add up to *`target`*

---

\u274C ***Solution - I (Brute Force)***

Let's start with the most basic approach. At each index, if the element is less than target, then we can always form a combination by picking the current element. The brute force is just based on this idea -

```
int combinationSum4(vector<int>& nums, int target) {
	if(target == 0) return 1;
	int ans = 0;
	for(auto& num : nums)
		// pick an element if it is less than target to be achieved and recurse for remaining amount.
		if(num <= target) ans += combinationSum4(nums, target - num);
	return ans;  
}
```

***Time Complexity :*** **`O(N^T)`**. Please comment below if there's a tighter upper bound.

***Space Complexity :*** **`O(T)`**. 

---

\u2714\uFE0F ***Solution - II (Top-Down Dynamic Programming)***

By drawing the recursion tree, we can see that for a target, we do the same calculations over and over again. This could be avoided by storing the number of combination obtained for a given target so that we don't waste time recalculating it at each recursion.

This can be done by maintain a dp array where **`dp[i]`** will denote the number of combinations possible with `target = i`. Initially, all elements in `dp` will be initialized to -1 denoting that the number of combinations for those target aren't calculated yet. 

Once the number of combinations for subtarget = *`i`* (where `0<i<=target`) is calculated, it will be stored in *`dp[i]`* and the next time any recursive call asks for the same value, *`dp[i]`* will be returned directly instead of doing recomputation.

```
int combinationSum4(vector<int>& nums, int target) {
	vector<int> dp(target + 1, -1);  // at start, none of the values are computed
	return helper(nums, target, dp);
}
int helper(vector<int>& nums, int target, vector<int>& dp){
	if(target == 0) return 1;  // base condition
	if(dp[target] != -1) return dp[target];  // if already computed for this value
	// recursive code starts -
	dp[target] = 0;
	// check for every element of nums. An element can only be taken if it is less than target.
	// If an element is chosen, recurse for remaining value.
	for(auto& num : nums) 
		if(num <= target) dp[target] += helper(nums, target - num, dp);
	return dp[target];
}
```

***Time Complexity :*** **`O(N * T)`**, where *`N`* is the number of elements in `nums` and *`T`* is equal to the given `target` value.

***Space Complexity :*** **`O(T)`**. We need `O(T)` to maintain the dp array and in the worst case, we would have to do *`T`* numbers of recursive calls of helper. So, the overall space complexity becomes `O(T)`.

---

\u2714\uFE0F ***Solution - III (Bottom-up Dynamic Programming)***

The idea in this approach is also the same. We just start filling dp from *`curTarget = 1`* all the way up to *`curTarget = target`*. At each `curTarget`, an element will be chosen if its value is less that target needed. 

```
int combinationSum4(vector<int>& nums, int target) {
	vector<uint> dp(target + 1); dp[0] = 1;
	// start filling the dp array from bottom, i.e curTarget = 1 till target.
	for (int curTarget = 1; curTarget <= target; curTarget++) 
        for (auto& num : nums)     // check for all elements from nums
            if (num <= curTarget)  // an element will only be taken if it is less than target to be achieved
                // the optimal answer(no. of combination) of remaining value is added to dp[curTarget]
				dp[curTarget] += dp[curTarget - num];   
    return dp[target];
}
```

***Time Complexity :*** **`O(N * T)`**

***Space Complexity :*** **`O(T)`**. Although the space complexity remains the same, we are saving the space requried by implicit recursive stack.

----

\u2714\uFE0F ***Solution IV (Slightly efficient version of Solution - III)***

The above solution will always loop for `N` times for each *`curtarget`* from *`1`* to *`target`*. We could achieve slightly better performance if we sort the array at start and break as soon as `nums[i]` becomes greater than `curTarget` in the inner loop. The same optimization can be done for Top-Down approach of Solution - II as well.

```
int combinationSum4(vector<int>& nums, int target) {
	sort(begin(nums), end(nums));
    vector<uint> dp(target + 1); dp[0] = 1;
	for (int curTarget = 1; curTarget <= target; curTarget++) 
        for (auto& num : nums) 
            if (num <= curTarget)  dp[curTarget] += dp[curTarget - num];
            else break;
    return dp[target];
}
```

***Time Complexity :*** **`O(N*T)`**. Although the time complexity remains same, the performance would be better in most cases since we wouldn't need to loop *`N`* times for every *`curTarget`*

***Space Complexity :*** **`O(T)`**


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any questions or mistakes in my post, please do comment below \uD83D\uDC47 

---
---
