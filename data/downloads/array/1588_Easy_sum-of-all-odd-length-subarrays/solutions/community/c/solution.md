# [C++] O(N) -Single Line Logic

**Author:** rahulanandyadav2000
**Votes:** 250
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/854304/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/854304/)

---

	Just see number of times every position occurs in all the odd length subarray.
	Multiply the contribution of position with element at that position.
	
	How to calculate contribution?
	Every element will contribute size of array to its right (n-i) * size of array to its left(i+1)
	Since here we only consider odd length divide it by two (ceil divison)
	
	
	Example 
	Given array: arr = [1, 2, 3, 4, 5] (n = 5) and formula (i + 1) * (n - i)
	i = 0, contribution = 1 * 5 = 5
	i = 1, contribution = 2 * 4 = 8
	i = 2, contribution = 3 * 3 = 9
	i = 3, contribution = 4 * 2 = 8
	i = 4, contribution = 5 * 1 = 5

	For detailed explanation on example refer to comment below
	Please upvote if you like the approach :)

```
int sumOddLengthSubarrays(vector<int>& arr) {
        int ans = 0,n=arr.size(),i;
        for(i =0;i<n;i++)
		{
            int contribution = ceil((i+1)*(n-i)/2.0);
            ans+=(contribution*arr[i]);
        }
        return ans;
    }
```

	Time Complexity O(N)