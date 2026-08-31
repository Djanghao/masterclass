# 2 Methods || Greedy +DP || Similar question  || Very Easy Code || C++ || Java || Python

**Author:** shivam-727
**Votes:** 47
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3960577/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3960577/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

** `Why Sorting Helps` ** 
Sorting the pairs based on their ending values is a crucial step in this algorithm, and it helps to ensure that the subsequent logic of selecting the longest chain of pairs works correctly. Here's why sorting is important in this scenario:

 The core idea of the algorithm is to select pairs for the longest chain in a greedy manner. By sorting the pairs based on their ending values, we can ensure that when iterating through the sorted pairs, we are always considering pairs with the smallest ending values first. This greedy selection helps maximize the chances of including as many pairs as possible in the chain.

 `for detailed explanation you can refer to my youtube channel ` 

[ Video in Hindi click here](https://youtube.com/@LetsCodeTogether72/videos)

or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation.

** `checkout similar type questions in comment `**

# Approach
<!-- Describe your approach to solving the problem. -->
   - `sort(pairs.begin(), pairs.end(), compare);`: The pairs are sorted using the custom comparison function `compare`. This sorting is done based on the ending values of the pairs in ascending order.

   - Initialize `prev` to 0 and `res` to 1:
     - `prev` keeps track of the index of the last selected pair that was added to the chain.
     - `res` represents the length of the current longest chain, initialized to 1 because the first pair is always included.

   - Loop through the pairs starting from the second pair (index `1`):
     - If the ending value of the pair at index `prev` is less than the starting value of the current pair, it means that the current pair can be added to the chain. Increase the `res` count and update `prev` to the current index (`i`).

   - Return the final value of `res`, which represents the length of the longest chain of pairs.

# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
 static bool compare(vector<int>&v1,vector<int>&v2){
        return v1[1]<v2[1];
        
    }
    int findLongestChain(vector<vector<int>>& pairs) {
         sort(pairs.begin(),pairs.end(),compare);
        int prev=0;
        int res=1;
        for(int i=1;i<pairs.size();i++){
            if(pairs[prev][1]<pairs[i][0]){
                prev=i;
                res++;
            }
        }
        return res;
    }
};
```
```java []

class Solution {
    public int findLongestChain(int[][] pairs) {
        Arrays.sort(pairs, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                return Integer.compare(a[1], b[1]);
            }
        });

        int prev = 0;
        int res = 1;

        for (int i = 1; i < pairs.length; i++) {
            if (pairs[prev][1] < pairs[i][0]) {
                prev = i;
                res++;
            }
        }

        return res;
    }
}

```
```python []
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[1])
        
        prev = 0
        res = 1
        
        for i in range(1, len(pairs)):
            if pairs[prev][1] < pairs[i][0]:
                prev = i
                res += 1
        
        return res

```
# Code 2

# Approach 
  
just sort according to start and explore the options Ie pick / not pick and memoize the code for code optimization.

```
class Solution {
public:
	int solve(int i,int prev,vector<vector<int>>& pairs,int n,vector<vector<int>>& dp){
		if(i==n) return 0;

		if(dp[i][prev+1]!=-1) return dp[i][prev+1];

		int pick=-1e9;

		if(prev==-1 || pairs[prev][1]<pairs[i][0])pick=1+solve(i+1,i,pairs,n,dp);
		int not_pick=solve(i+1,prev,pairs,n,dp);

		return dp[i][prev+1]=max(pick,not_pick);
	}

	int findLongestChain(vector<vector<int>>& pairs) {
		int n=pairs.size();
		sort(pairs.begin(),pairs.end());
		vector<vector<int>> dp(n,vector<int>(n+1,-1));
		return solve(0,-1,pairs,n,dp);
	}
};
```
# Complexity
- Time complexity:$$O(n*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->