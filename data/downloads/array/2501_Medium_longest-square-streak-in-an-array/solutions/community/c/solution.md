# Short DP (C++/Java) || LIS type

**Author:** Rowque
**Votes:** 58
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/2899678/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/2899678/)

---

+ # For every number we reach, we just check if its a `perfect square`:
   + If its a `Perfect Square`, we pair up with its `Square Root`.
   + Else, we keep it in `dp` array with length as `1`, for pairing up its `square number` later.
 
 Similar Question : [1218. Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/#:~:text=Input%3A%20arr%20%3D%20%5B1%2C,subsequence%20is%20any%20single%20element.)
# C++    
	int longestSquareStreak(vector<int>& A) {
        unordered_map<int, int> dp;
        int res = 0;
        sort(begin(A), end(A));
        for(auto i : A){
            int root = sqrt(i);
            if(root * root == i)
			   dp[i] = 1 + dp[root];
			else 
			   dp[i] = 1;
            res = max(res, dp[i]);
        }
        return res < 2 ? -1 : res;
    }
# Java
    public int longestSquareStreak(int[] A) {
        HashMap<Integer, Integer> dp = new HashMap<>();
        int res = 0;
        Arrays.sort(A);
        for(var i : A){
            int root = (int)Math.sqrt(i);
            if(root * root == i)  
			   dp.put(i, dp.getOrDefault(root, 0) + 1);
            else  
			   dp.put(i, 1);
            res = Math.max(res, dp.get(i));
        }
        return res < 2 ? -1 : res;
    }
> Time : O(nlogn)

> Space - O(n)