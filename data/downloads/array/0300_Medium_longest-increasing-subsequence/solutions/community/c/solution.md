# ✅ Optimization From Brute-Force to Dynamic Programming Explained!

**Author:** archit91
**Votes:** 1319
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/1326552/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/1326552/)

---

\u274C ***Solution - I (Brute-Force)***

We need to find maximum increasing subsequence length. In the brute-force approach, we can model this problem as - 
1. If the current element is greater than the previous element, then we can either pick it or dont pick it because we may get a smaller element somewhere ahead which is greater than previous and picking that would be optimal. So we try both options.
2. If the current element is smaller or equal to previous element, it can't be picked.

```
class Solution {
public:
    int lengthOfLIS(vector<int>& nums, int i = 0, int prev = INT_MIN) {
        if(i == size(nums)) return 0;
        return max(lengthOfLIS(nums, i + 1, prev), (nums[i] > prev) + lengthOfLIS(nums, i + 1, max(nums[i], prev)));
    }
};
```

A better and more understandable way of writing the same code as above -

```
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        return solve(nums, 0, INT_MIN);
    }
    int solve(vector<int>& nums, int i, int prev) {
        if(i >= size(nums)) return 0;                                // cant pick any more elements
        int take = 0, dontTake = solve(nums, i + 1, prev);           // try skipping the current element
        if(nums[i] > prev) take = 1 + solve(nums, i + 1, nums[i]);   // or pick it if it is greater than previous picked element
        return max(take, dontTake);                                  // return whichever choice gives max LIS
    }
};
```

***Time Complexity :*** **<code>O(2<sup>N</sup>)</code>**, where `N` is the size of *`nums`*. At each index, we have choice to either take or not take the element and we explore both ways. So, we `2 * 2 * 2...N times = O(2^N)`
***Space Complexity :*** **`O(N)`**, max recursive stack depth.

--- 

\u2714\uFE0F ***Solution - II (Dynamic Programming - Memoization)***

There are many unnecessary repeated calculations in the brute-force approach. We can observe that the length of increasing subsequence starting at `i`th element with previously picked element `prev` will always be the same. So we can use **dynamic programming** to store the results for this state and reuse again in the future.

But it wouldn't be scalable to store the state as `(i, prev)` because `prev` element can be any number in <code>[-10<sup>4</sup>, 10<sup>4</sup>]</code> meaning we would need to declare a matrix `dp[n][1e8]` which won't be possible <details>

<summary>DP with <code>(i, prev)</code> as state</summary>

```
class Solution {
public:
    vector<unordered_map<int, int>> dp;
    int lengthOfLIS(vector<int>& nums) {
        dp.resize(size(nums));
        return solve(nums, 0, INT_MIN);
    }
    int solve(vector<int>& nums, int i, int prev) {
        if(i >= size(nums)) return 0;
        if(dp[i].count(prev)) return dp[i][prev];
        int take = 0, dontTake = solve(nums, i + 1, prev);
        if(nums[i] > prev) take = 1 + solve(nums, i + 1, nums[i]);
        return dp[i][prev] = max(take, dontTake);
    }
};
```

</details>

Instead, we could store the state of `(i, prev_i)`, where `prev_i` denotes the index of previous chosen element. Thus we would use a `dp` matrix where `dp[i][j]` will denote the longest increasing subsequence from index `i` when previous chosen element's index is `j`.



```
class Solution {
public:
    vector<vector<int>> dp;
    int lengthOfLIS(vector<int>& nums) {
        dp.resize(size(nums), vector<int>(1+size(nums), -1));   // dp[i][j] denotes max LIS starting from i when nums[j] is previous picked element
        return solve(nums, 0, -1);
    }
    int solve(vector<int>& nums, int i, int prev_i) {
        if(i >= size(nums)) return 0;
        if(dp[i][prev_i+1] != -1) return dp[i][prev_i+1];
        int take = 0, dontTake = solve(nums, i + 1, prev_i);
        if(prev_i == -1 || nums[i] > nums[prev_i]) take = 1 + solve(nums, i + 1, i); // try picking current element if no previous element is chosen or current > nums[prev_i]
        return dp[i][prev_i+1] = max(take, dontTake);
    }
};
```

***Time Complexity :*** **<code>O(N<sup>2</sup>)</code>**
***Space Complexity :*** **<code>O(N<sup>2</sup>)</code>**

Depending on the mood of OJ, it may decide to accept your solution or give TLE for the above solution.

----

\u2714\uFE0F ***Solution - III (DP - Memoization - Space Optimized)***

We can do better and further reduce the state stored using DP. It's redundant to store states for all `i` having `prev` as its previous element index. The length will always be greatest for the state `(prev, prev)` since no more elements before `prev` can be taken. So we can just use a linear DP where `dp[i]` denotes the LIS starting at index `i`

```
class Solution {
public:
    vector<int> dp;
    int lengthOfLIS(vector<int>& nums) {
        dp.resize(size(nums)+1, -1);
        return solve(nums, 0, -1);
    }
    int solve(vector<int>& nums, int i, int prev_i) {
        if(i >= size(nums)) return 0;
        if(dp[prev_i+1] != -1) return dp[prev_i+1];
        int take = 0, dontTake = solve(nums, i + 1, prev_i);
        if(prev_i == -1 || nums[i] > nums[prev_i])
            take = 1 + solve(nums, i + 1, i);
        return dp[prev_i+1] = max(take, dontTake);
    }
};
```

***Time Complexity :*** **<code>O(N<sup>2</sup>)</code>**
***Space Complexity :*** **<code>O(N)</code>**

---

\u2714\uFE0F ***Solution - IV (Dynamic Programming - Tabulation)***

We can solve it iteratively as well. Here, we use `dp` array where `dp[i]` denotes the LIS ending at index `i`. We can always pick a single element and hence all `dp[i]` will be initialized to 1. 

For each element `nums[i]`, if there's an smaller element `nums[j]` before it, the result will be maximum of current LIS length ending at `i`: `dp[i]`, and LIS ending at that `j` + 1: `dp[j]` + 1. `+1 ` because we are including the current element and extending the LIS ending at `j`.

```
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int ans = 1, n = size(nums);
        vector<int> dp(n, 1);
        for(int i = 0; i < n; i++) 
            for(int j = 0; j < i; j++) 
                if(nums[i] > nums[j]) 
				    dp[i] = max(dp[i], dp[j] + 1), ans = max(ans, dp[i]);
        return ans;
    }
};
```

***Time Complexity :*** **<code>O(N<sup>2</sup>)</code>**
***Space Complexity :*** **<code>O(N)</code>**

---

\u2714\uFE0F ***Solution - V (Binary Search)***

In the brute-force approach, we were not sure if an element should be included or not to form the longest increasing subsequence and thus we explored both options. The problem lies in knowing if an element must be included in the sequence formed till now. Let's instead try an approach where we include element whenever possible to maximize the length and if it's not possible, then create a new subsequence and include it.

Consider an example - `[1,7,8,4,5,6,-1,9]`:

1. Let's pick first element - `1` and form the subseqeunce **`sub1=[1]`**.
2. `7` is greater than previous element so extend the sequence by picking it. &nbsp; **`sub1=[1,7]`**. 
3. Similarly, we pick `8` as well since it's greater than `7`. &nbsp; **`sub1=[1,7,8]`**
4. Now we cant extend it further. We can't simply discard previous sequence and start with `4` nor can we discard `7,8` and place `4` instead of them because we don't know if future increasing subsequence will be of more length or not. So we keep both previous subsequence as well as try picking `4` by forming a new subsequence. It's better to form new subsequence and place `4` after `1` to maximize new sequence length. So we have **`sub1=[1,7,8]`** and **`sub2=[1,4]`**
5. Can we add `5` in any of the sequence? Yes we can add it to `sub2`. If it wasn't possible we would have tried the same approach as in 4th step and created another subsequence list.  &nbsp; **`sub1=[1,7,8], sub2=[1,4,5]`**
6. Similarly, add `6` to only possible list - `cur2`. &nbsp; **`sub1=[1,7,8], sub2=[1,4,5,6]`**
7. Now, `-1` cant extend any of the existing subsequence. So we need to form another sequence. Notice we cant copy and use any elements from existing subsequences before `-1` either, since `-1` is lowest. **`sub1=[1,7,8], sub2=[1,4,5,6], sub3=[-1]`**
7. Now, `9` can be used to extend all of the list. At last, we get &nbsp; **`sub1=[1,7,8,9], sub2=[1,4,5,6,9], sub3=[-1,9]`**

We finally pick the maximum length of all lists formed till now. This approach works and gets us the correct LIS but it seems like just another **inefficient approach because it's costly to maintain multiple lists and search through all of them when including a new element or making a new list**. Is there a way to speed up this process? Yes. We can just maintain a single list and mark multiple lists inside it. Again, an example will better explain this.

Consider the same example as above - `[1,7,8,4,5,6,-1,9]`:

1. Pick first element - `1` and form the subseqeunce **`sub=[1]`**.
2. `7` is greater than `1` so extend the existing subsequence by picking it. &nbsp; **`sub=[1,7]`**. 
3. Similarly, we pick `8` as well since it's greater than `7`. &nbsp; **`sub=[1,7,8]`**
4. **Now comes the main part**. We can't extend any existing sequence with `4`. So we need to create a new subsequence following 4th step previous approach but this time we will create it inside `sub` itself by replacing smallest element larger than `4` (Similar to 4th step above where we formed a new sequence after picking smaller elements than `4` from existing sequence).
	```
	    [1,    4,      8]
	           ^sub2   ^sub1
	
	This replacement technique works because replaced elements dont matter to us
	We only used end elements of existing lists to check if they can be extended otherwise form newer lists
	And since we have replaced a bigger element with smaller one it wont affect the 
	step of creating new list after taking some part of existing list (see step 4 in above approach)
	```
5. Now, we can't extend with `5` either. We follow the same approach as step 4.
	```
	    [1,    4,    5]
					 ^sub2
		
	Think of it as extending sub2 in 5th step of above appraoch
	Also, we can see sub2 replaced sub1 meaning any subsequence formed with sub2 always
	has better chance of being LIS than sub1.
	```
6. We get `6` now and we can extend the `sub` list by picking it.
	```
	    [1,    4,    5,    6]
					       ^sub2	
	```

7. Cant extend with `-1`. So, Replace -
	```
	    [-1,    4,    5,   6]
		  ^sub3		       ^sub2	
	
	We have again formed a new list internally by replacing smallest element larger than -1 from exisiting list
	```
8. We get `9`  which is greater than the end of our list and thus can be used to extend the list
	```
	    [-1,    4,    5,    6,    9]
		  ^sub3		              ^sub2	
	```
	<br/>
	Finally the length of our maintained list will denote the LIS length = `5`. Do note that it wont give the LIS itself but just correct length of it. 

The optimization which improves this approach over DP is applying **Binary search** when we can't extend the sequence and need to replace some element from maintained list - `sub`. The list always remains sorted and thus binary search gives us the correct index of element in list which will be replaced by current element under iteration.

Basically, we will compare end element of `sub` with element under iteration `cur`. If `cur` is bigger than it, we just extend our list. Otherwise, we will simply apply binary search to find the smallest element >= cur and replace it. Understanding the explanation till now was the hard part...the approach is very easy to code\uD83D\uDE42 .

I have used the input array itself as my maintained list. Use an auxillary array if you're restricted from modifying the input.

```
class Solution {
public:
    int lengthOfLIS(vector<int>& A) {
        int len = 0;
        for(auto cur : A) 
            if(len == 0 || A[len-1] < cur) A[len++] = cur;             // extend
            else *lower_bound(begin(A), begin(A) + len, cur) = cur;    // replace
        return len;
    }
};
```

***Time Complexity :*** **`O(NlogN)`**
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, comment below \uD83D\uDC47 

---
---