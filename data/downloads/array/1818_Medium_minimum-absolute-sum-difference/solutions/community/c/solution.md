# ✅ Short & Easy w/ Explanation | Binary Search solution

**Author:** archit91
**Votes:** 46
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1141337/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1141337/)

---

We are given two arrays `nums1` and `nums2`. We have original **Absolute Sum Difference** (ASD). Lets call this `origDiff`. We need to minimize it by replacing an element of `nums1` with some other element from same array.

We can iterate over each index of `nums1` and try to find the **best replacement for that index which minimizes the ASD**. At last, return the minimum ASD that we were able to achieve.

To find best replacement efficiently we need to sort `nums1` and use binary search to find the closest value to `nums2[i]` at each iteration. 

```
int minAbsoluteSumDiff(vector<int>& nums1, vector<int>& nums2) {
	long origDiff = 0, n = size(nums1), minDiff;
	// calculating original difference without any replacement
	for(int i = 0; i < n; i++) origDiff += abs(nums1[i] - nums2[i]);
	minDiff = origDiff;
	// sorted nums1 needed for using binary search
	vector<int>arr = nums1;
	sort(begin(arr), end(arr));        
	for(int i = 0; i < n; i++){
		// find the newDiff after replacement
		long newDiff = origDiff - abs(nums1[i] - nums2[i]) + abs(bs(arr, nums2[i]) - nums2[i]);
		// minDiff will store minimum possible sum of difference after replacements
		minDiff = min(minDiff, newDiff);
	}
	return minDiff % 1000000007;
}
// bs will return the element closest to k in arr.
int bs(vector<int>& arr, int k){               
	int n = size(arr), l = 0, r = n - 1, m, closest;
	while(l <= r){
		m = (l + r) / 2;
		if(arr[m] == k) return arr[m];
		if(arr[m] > k) r = m - 1;            
		else l = m + 1;              
	}
	closest = arr[m];
	if(m - 1 >= 0 && abs(arr[m - 1] - k) < abs(arr[m] - k)) closest = arr[m - 1];
	if(m + 1 <  n && abs(arr[m + 1] - k) < abs(arr[m] - k)) closest = arr[m + 1];
	return closest;
}
```

***Time Complexity :*** **`O(NlogN)`**
***Space Complexity :*** **`O(N)`**

-----

A more compact and commented code referred from @votrubac's solution - 
```
int minAbsoluteSumDiff(vector<int>& nums1, vector<int>& nums2) {
	// originalDiffSum - will accumulate sum of difference without replacement
	// maxDecrement - will store max decrement possible after replacement at any index of nums1
	long n = size(nums1), originalDiffSum = 0, maxDecrement = 0;
	set<int> s(begin(nums1), end(nums1));   // sorted nums1
	for(int i = 0; i < n; i++){
		long currDiff = abs(nums1[i] - nums2[i]);   // original difference for current index without replacement
		originalDiffSum += currDiff;
		// find closest element to nums2[i] so that after replacement, diff is minimized
		// lower_bound will return smallest number greater than or equal to nums2[i]. 
		// So we also need to check previous value of lower_bound in s which may further minimize the absolute difference.
		auto it = s.lower_bound(nums2[i]);
		if(it != begin(s)) maxDecrement = max(maxDecrement, currDiff - abs(*prev(it) - nums2[i]));
		if(it != end(s)) maxDecrement = max(maxDecrement, currDiff - abs(*it - nums2[i]));            
	}
	// finally apply the maximum decrement that can be done after replacement
	return (originalDiffSum - maxDecrement) % 1000000007;
}
```