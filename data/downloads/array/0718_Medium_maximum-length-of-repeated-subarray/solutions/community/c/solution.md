# ✅ Optimization from Brute-Force to DP to Space-Optimized DP Explained!

**Author:** archit91
**Votes:** 134
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1324737/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1324737/)

---

\u274C ***Solution - I (Brute-Force)***

We need to find maximum length of common subarray between `A` and `B`. Let's try solving it starting with brute-force approach. 

We know that the maximum common subarray will start at some indices `i` and `j` of array `A` and `B` respectively. So, we will just simply take each possible pair `(i, j)` and try to extend it from there to get maximum common subarray starting at that index pair. Finally, we will return the max length found after trying out all pairs

* **Recursive Version :** 
	```
	class Solution {
	public:
		int ans = 0;
		int findLength(vector<int>& A, vector<int>& B) {
			solve(A, B, 0, 0);
			return ans;
		}
		int solve(vector<int>& A, vector<int>& B, int i, int j) {
			if(i >= size(A) || j >= size(B)) return 0;
			solve(A, B, i+1, j), solve(A, B, i, j+1);                   // recurse to solve for each possible (i, j)
			int common = A[i] == B[j] ? 1 + solve(A, B, i+1, j+1) : 0;  // longest common subarray starting at A[i] & B[j]
			ans = max(ans, common);                                     // update ans to hold max length found till now
			return common;
		}
	};	
	```
	
	***Time Complexity :***  <b><code>O(3<sup>M + N</sup>)</code></b>, where `M` is size of `A` and `N` is size of `B`. We have 3 choices at each recursion and max recursion depth is `M+N`.
	***Space Complexity :***  **`O(M + N)`**, max depth of recursive stack. 
	
	---

* **Iterative Version :**

	```
	class Solution {
	public:
		int findLength(vector<int>& A, vector<int>& B) {
			int m = size(A), n = size(B), ans = 0;
			for(int i = 0; i < m; i++) {
				for(int j = 0; j < n; j++) {
					int len = 0;
					while(i + len < m and j + len < n and A[i+len] == B[j+len]) len++; // get length of longest common subarray starting at A[i] & B[j]
					ans = max(ans, len);  // update ans to hold max length found till now
				}
			}
			return ans;
		}
	};	
	```
	
	***Time Complexity :***  **`O(M * N * min(M,N))`**, Here, at each possible `(i, j)` we find longest common subarray. There at total of `M*N` pairs and we can extend at max `O(min(M, N))` from each pair.
	***Space Complexity :***  **`O(1)`**


	


---

\u2714\uFE0F ***Solution - II (Dynamic Programming)***

We can see that the length of common subarray starting at `A[i]` and `B[i]` will always be same. But we are still re-calculating the same multiple times in the brute force approaches. Instead, we could store the answer for a given pair of indices and re-use it in the future instead of re-calculating over and over. Thus, we can apply dynamic programming here.

Here, we are using `dp` matrix where `dp[i][j]` will denote longest common subarray starting at `A[i]` and `B[j]`. Once we calculate the result for `dp[i][j]`, it can be re-used whenever required in the future recursive calls / iterations.

* **Recursive DP - Memoization :**

	```
	class Solution {
	public:
		vector<vector<int>>dp;
		int ans = 0;
		int findLength(vector<int>& A, vector<int>& B) {
			dp.resize(size(A), vector<int>(size(B), -1));
			solve(A, B, 0, 0);
			return ans;
		}
		int solve(vector<int>& A, vector<int>& B, int i, int j) {
			if(i >= size(A) || j >= size(B)) return 0;
			if(dp[i][j] != -1) return dp[i][j];
			solve(A, B, i+1, j), solve(A, B, i, j+1);
			dp[i][j] = A[i] == B[j] ? solve(A, B, i+1, j+1) + 1 : 0;  // store the result for state (i, j) for future
			ans = max(ans, dp[i][j]);
			return dp[i][j];
		}
	};	
	```
	
	---
	
* **Iterative DP - Tabulation :**
	
	```
	class Solution {
	public:
		int findLength(vector<int>& A, vector<int>& B) {
			int m = size(A), n = size(B), ans = 0, dp[m+1][n+1]; 
			memset(dp, -1, sizeof dp);
			for(int i = 0; i < m; i++) {
				for(int j = 0, len = 0; j < n; j++) {
					if(dp[i][j] == -1) {
						while(i + len < m and j + len < n and A[i+len] == B[j+len]) len++;
						while(len) dp[i + len][j + len] = len--;  // store the result for states (i, j) : 
																  // we know results for all states from (i, j) - (i+len, j+len)
					}
					ans = max(ans, dp[i][j]);
				}
			}
			return ans;
		}
	};	
	```
   
     I have mentioned the above approach as a direct DP integration into brute-force solution. It can be seen that it's probably better to start from the end of both array so that we don't need to forward iterate once (for finding longest subarray length) and then re-iterate backward again (for storing the results in `dp`). The above code can be re-written as -
	 
	 ```
	class Solution {
	public:
		int findLength(vector<int>& A, vector<int>& B) {
			int m = size(A), n = size(B), ans = 0, dp[m+1][n+1]; 
			memset(dp, 0, sizeof dp);
			for(int i = m-1; ~i; i--) 
				for(int j = n-1; ~j; j--) 
					dp[i][j] = A[i-1] == B[j-1] ? dp[i+1][j+1] + 1 : 0,
					ans = max(ans, dp[i][j]);
				
			return ans;
		}
	};		 
	 ```

***Time Complexity :***  **`O(M * N)`**, In both the approaches, we calculate the result for an index pair `(i, j)` only once
***Space Complexity :***  **`O(M * N)`**, required to store `dp` matrix.

---

\u2714\uFE0F ***Solution - III (Another DP Variant)***

We can solve this using dp in another way. Instead of storing the longest common substring starting at `(i, j)` index pair (i.e longest common prefix subarray), we can store the longest common substring ending at `(i, j)` as well (i.e longest common suffix subarray). Here `dp[i][j]` will denote longest subarray ending at `A[i]` and `B[j]` -

```
class Solution {
public:
    int findLength(vector<int>& A, vector<int>& B) {
        int m = size(A), n = size(B), ans = 0;
		int dp[m+1][n+1]; memset(dp, 0, sizeof dp);
        for(int i = 1; i <= m; i++) 
            for(int j = 1; j <= n; j++) 
                dp[i][j] = A[i-1] == B[j-1] ? dp[i-1][j-1] + 1 : 0,
                ans = max(ans, dp[i][j]);
            
        return ans;
    }
};
```

***Time Complexity :***  **`O(M * N)`**
***Space Complexity :***  **`O(M * N)`**

---

\u2714\uFE0F ***Solution - IV (Space-Optimized DP)***

We can see that in both the dp variants, we are only ever accessing the current previous rows of the `dp` matrix. So we don't need to store all the dp matrix throughout our program. We just need to store the current row and the previous row of `dp` at any given point of time. Thus we can optimize the space usage to linear complexity.

A common way to optimize from 2D DP to 1D DP is to just declare a two row matrix and alternate between the rows at each iteration. We declare two variables `cur` and `prev` and alternate them for each row.

* **1st DP Variant - Space Optimized :**

	```
	class Solution {
	public:
	   int findLength(vector<int>& A, vector<int>& B) {
		if(size(A) < size(B)) A.swap(B);   // ensures dp length is min(M, N)
		int m = size(A), n = size(B), ans = 0, dp[2][n+1]; 
		memset(dp, 0, sizeof dp);
		for(int i = m-1, cur=i&1, next=!(i&1); ~i; i--, cur ^= 1, next ^= 1) // ~i ends loop when i goes -ve, ^= 1 used to flip bit
			for(int j = n-1; ~j; j--) 
				dp[cur][j] = A[i] == B[j] ? dp[next][j+1] + 1 : 0,
				ans = max(ans, dp[cur][j]);
			
		return ans;
	   }
	};		
	```
	
	---

* **2nd DP Variant - Space Optimized :**

	```
	class Solution {
	public:
		int findLength(vector<int>& A, vector<int>& B) {
			if(size(A) < size(B)) A.swap(B); 
			int m = size(A), n = size(B), ans = 0, dp[2][n+1]; 
			memset(dp, 0, sizeof dp);
			for(int i = 1, cur = 1, prev{}; i <= m; i++, cur ^= 1, prev ^= 1) 
				for(int j = 1; j <= n; j++) 
					dp[cur][j] = A[i-1] == B[j-1] ? dp[prev][j-1] + 1 : 0,
					ans = max(ans, dp[cur][j]);

			return ans;
		}
	};	
	```
	



***Time Complexity :***  **`O(M * N)`**
***Space Complexity :***  **`O(min(M, N))`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, comment below \uD83D\uDC47 

---
---