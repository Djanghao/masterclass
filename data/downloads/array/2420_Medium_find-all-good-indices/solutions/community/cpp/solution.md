# Probably the easiest solution || Two Pass O(n) || Without DP || CPP

**Author:** array2002
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2621069/](https://leetcode.com/problems/find-all-good-indices/solutions/2621069/)

---

**Logic - FInd all the indexes which have k non increasing elements before them. Similarly find the indexes which have k non increasing elements after them. Find the common indexes between these two.**

```
		// Store the indexes which have k non increasing elements before them
		vector<int> nonInc;
        int cnt = 0;
        for(int i = 0; i < nums.size(); i++){
            if(i==0 || nums[i]<=nums[i-1]){
                cnt++;
            }
            else{
                cnt = 1;
            }
			// count equals k means we have seen k non increasing elements till now, so the element next to current element will have k non increasing elements before it.
            if(cnt >= k){
                nonInc.push_back(i+1);
            }
        }
		// Store the indexes which have k non decreasing elements before them
        vector<int> nonDec;
        cnt = 0;
        for(int i = nums.size()-1; i >= 0; i--){
            if(i==nums.size()-1 || nums[i]<=nums[i+1]){
                cnt++;
            }
            else{
                cnt = 1;
            }
            if(cnt >= k){
                nonDec.push_back(i-1);
            }
        }
		// The vector nonInc will be sorted in increasing order while nonDec will be sorted in decreasing order.
        vector<int> ans;
        for(auto it : nonDec){
		// Checking if current value is present in nonInc vector or not.
            if(binary_search(nonInc.begin(), nonInc.end(), it)){
			// If it is present this means, the element is present in both the vectors and hence is a solution.
                ans.push_back(it);
            }
        }
        reverse(ans.begin(), ans.end());
        return ans;
```

***Do upvote if you liked the solution.***