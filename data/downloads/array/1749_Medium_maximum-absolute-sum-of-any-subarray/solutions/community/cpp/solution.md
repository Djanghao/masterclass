# C++ | TC : O(n) | Kadane's Algo |100%faster | Easy to Understand

**Author:** scortier
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1052779/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1052779/)

---

**Approach :**
Apply Kadane's Algorithm to find Maximum Sum Subarray (i.e maxm_sum) and Minimum Sum Subarray (i.e minm_sum)
**Solution** :  `return max( abs(maxm_sum) , abs(minm_sum ));`

```
int maxAbsoluteSum(vector<int>& a) {
	int maxm_sum = INT_MIN, max_ending_here = 0; 
	int size = a.size();
	for (int i = 0; i < size; i++) 
	{ 
		max_ending_here += a[i]; 
		maxm_sum = max(maxm_sum, max_ending_here); 
		if (max_ending_here < 0) 
			max_ending_here = 0; 
	}  

	int min_ending_here = 0, minm_sum = INT_MAX; 

	for (int i=0; i<size; i++) 
	{ 
		min_ending_here += a[i]; 
		minm_sum = min(minm_sum, min_ending_here);  
		if(min_ending_here > 0)
			min_ending_here = 0;
	} 

	return max(abs(maxm_sum), abs(minm_sum)); 
}
```

***If you like the solution. Do Upvote it.***