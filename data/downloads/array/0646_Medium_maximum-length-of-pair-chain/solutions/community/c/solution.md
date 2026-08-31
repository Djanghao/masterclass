# C++ Simple and Clean Solution [With Comments]

**Author:** not_a_cp_coder
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/816741/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/816741/)

---

### **My DP Solution (Bottom up approach)**

The Problem is quite similar to the [**LIS**](https://leetcode.com/problems/longest-increasing-subsequence/)(Longest Increasing Subsequence) Problem.
I highly recommend you to solve that problem before going through the solution.

```
class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        if(!pairs.size()) return 0;
        sort(pairs.begin(), pairs.end());
		// LIS array initialized as 1. As, every element is itself an answer
        vector<int> lis(pairs.size(), 1);
        int longestChainNum = 1;
		// Finding LIS in [0-----j]i for each 'i'
        for(int i=1;i<pairs.size();i++){
            for(int j=0;j<i;j++){
				// Condition similar to LIS
                if((pairs[j][1] < pairs[i][0]) && (lis[i] < lis[j] + 1)){
                    lis[i] = lis[j] + 1;
					// Updating maximum
                    longestChainNum = max(longestChainNum, lis[i]);
                }
            }
        }
        return longestChainNum;
    }
};
```
If you have any **doubts**, feel free to ask in the **comment** section.
If you like this solution, do **UPVOTE**.
Happy Coding :)