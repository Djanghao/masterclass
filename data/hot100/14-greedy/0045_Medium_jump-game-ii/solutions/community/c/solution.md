# ✅ Easy Solutions w/ Explanation | Optimizations from Brute-Force to DP to Greedy BFS

**Author:** archit91
**Votes:** 948
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/1192401/](https://leetcode.com/problems/jump-game-ii/solutions/1192401/)

---

\u274C ***Solution - I (Brute Force) [Rejected]***

We start at index 0 and are required to reach index `n - 1` (where `n = nums.size()`). We can't always do the maximum jump at each index. This can be easily verified by looking at the example test cases.

So, at each position, we can use a jump size of anywhere in the range *`[1, nums[pos]]`*. The final answer will be the minimum jumps required. We can recursively solve this problem as -

* If we reach index *`n-1`* return 0, signifying that we need 0 more jumps.
* Else recurse for each jump size possible from the current index and return the answer in which we require the minimum number of jumps


```
int jump(vector<int>& nums, int pos = 0) {
	if(pos >= size(nums) - 1) return 0;        
	int minJumps = 10001;  // initialising to max possible jumps + 1
	for(int j = 1; j <= nums[pos]; j++)  // explore all possible jump sizes from current position
		minJumps = min(minJumps, 1 + jump(nums, pos + j));        
	return minJumps;
}
```

***Time Complexity :*** **`O(N!)`**. At each index `i` we have `N-i` choices and we recursively explore each of them till end. So we require `O(N*(N-1)*(N-2)...1) = O(N!)`. 
***Space Complexity :*** **`O(N)`**

---


\u2714\uFE0F ***Solution - II (Recursive Dynamic Programming - Memoization) [Accepted]***

We can see that for a given position, we are repeatedly calculating the same answer over and over again. The jumps required to reach for a given index on the path remains fixed and can be stored in *`dp`* array to avoid re-calculations.

The solution is similar as the brute force with just the change that we are storing the solutions for each *`pos`* and returning it if it is already calculated.

```
int jump(vector<int>& nums) {
	vector<int> dp(size(nums), 10001); // initialise all to max possible jumps + 1 denoting dp[i] hasn't been computed yet
	return solve(nums, dp, 0);
}
// recursive solver to find min jumps to reach end
int solve(vector<int>& nums, vector<int>& dp, int pos) {
	if(pos >= size(nums) - 1) return 0;    // when we reach end, return 0 denoting no more jumps required
	if(dp[pos] != 10001) return dp[pos];    // number of jumps from pos to end is already calculated, so just return it
	// explore all possible jump sizes from current position. Store & return min jumps required
	for(int j = 1; j <= nums[pos]; j++)
		dp[pos] = min(dp[pos], 1 + solve(nums, dp, pos + j));        
	return dp[pos];
}
```

***Time Complexity :*** **`O(N^2)`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - III (Iterative Dynamic Programming - Tabulation) [Accepted]***

We can solve this iteratively as well. For this, we start from the last index. We need 0 jumps from `nums[n-1]` to reach the end. We store this as *`dp[n - 1] = 0`* and then iteratively solve this for each previous index till the 0th index. Here *`dp[i]`* denotes minimum jumps required from current index to reach till the end.

1. For each index, we explore all the possible jump sizes available with us. 
2. The minimum jumps required to reach the end from the current index would be - **`min(dp[jumpLen])`**, where *`1 <= jumpLen <= nums[currentPostion]`*

```
int jump(vector<int>& nums) {
	int n = size(nums);
	vector<int> dp(n, 10001);
	dp[n - 1] = 0;  // start from last index. No jumps required to reach end if we are already here
	// same as above. For each index, explore all jump sizes and use the one requiring minimum jumps to reach end
	for(int i = n - 2; i >= 0; i--) 
		for(int jumpLen = 1; jumpLen <= nums[i]; jumpLen++) 
			dp[i] = min(dp[i], 1 + dp[min(n - 1, i + jumpLen)]);  // min(n-1, i + jumpLen) for bounds handling
	return dp[0];
}
```

***Time Complexity :*** **`O(N^2)`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution IV (Greedy BFS)***

We can iterate over all indices maintaining the furthest reachable position from current index - *`maxReachable`* and currently furthest reached position - *`lastJumpedPos`*. Everytime we will try to update *`lastJumpedPos`* to furthest possible reachable index - `maxReachable`.

Updating the `lastJumpedPos` separately from *`maxReachable`* allows us to maintain track of minimum *`jumps`* required. Each time `lastJumpedPos` is updated, ***`jumps`*** will also be updated and store the minimum jumps required to reach `lastJumpedPos` (On the contrary, updating `jumps` with `maxReachable` won't give the optimal (minimum possible) value of jumps required). 

We will just return it as soon as *`lastJumpedPos`* reaches(or exceeds) last index.

We can try to understand the steps in code below as analogous to those in BFS as -

1. **`maxReachable = max(maxReachable, i + nums[i])`** : Updating the range of next level. Similar to  *`queue.push(node)`* step of BFS but here we are only greedily storing the max reachable index on next level.


2. **`i == lastJumpedPos`** :  When it becomes true, current level iteration has been completed.
3. **`lastJumpedPos = maxReachable`** : Set range till which we need to iterate the next level
4. **`jumps++`** : Move on to the next level.

5. **`return jumps`** : The final answer will be number of levels in BFS traversal.

For eg. Take the example : `nums = [2,3,1,4,1,1,1,2]`. This approach proceeds as illustrated in image below -

<p align=center>
<img src=https://assets.leetcode.com/users/images/4e5cbbb4-a6d0-4523-a945-261ee4b53f72_1620216977.5849538.png /></p>


```
int jump(vector<int>& nums) {
	int n = size(nums), i = 0, maxReachable = 0, lastJumpedPos = 0, jumps = 0;
	while(lastJumpedPos < n - 1) {  // loop till last jump hasn't taken us till the end
		maxReachable = max(maxReachable, i + nums[i]);  // furthest index reachable on the next level from current level
		if(i == lastJumpedPos) {			  // current level has been iterated & maxReachable position on next level has been finalised
			lastJumpedPos = maxReachable;     // so just move to that maxReachable position
			jumps++;                          // and increment the level
	// NOTE: jump^ only gets updated after we iterate all possible jumps from previous level
	//       This ensures jumps will only store minimum jump required to reach lastJumpedPos
		}            
		i++;
	}
	return jumps;
}
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---