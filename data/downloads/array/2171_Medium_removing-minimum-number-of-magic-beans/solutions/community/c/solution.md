# [C++] || Time: O(NLogN) || Space: O(N) -> O(1)

**Author:** amitdhakite
**Votes:** 10
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766910/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766910/)

---

**I.** **Time: O(NLogN) || Space: O(N)**


**Intuition:**
To calculate the minimum number of operations for a particular index such as **i** (in the sorted array),
we need to make all the entries before it as **0** (as all the entries in this range are smaller than **v[i]**, so we can't increase the beans, hence we have to make all of them **zero**) and all the entries from index **i** to the end of the array equal to **v[i]** (by `sumOfElementsInRange  -  numberOfElementsInRange * v[i]`)

**Steps:** 
1. Sort the array.
2. Calculate prefix and suffix sums.
3. Iterate over the array, and consider each v[i] as the resulting same number.


```
    long long minimumRemoval(vector<int>& v) 
    {
        int n = v.size();
        sort(v.begin(), v.end());
        if(n == 1) return 0;    
		
		// Calculating prefix and suffix sums
        vector<long long> pref(n, 0), suf(n, 0);
        for(int i = 0; i < n; i++)
        {
            if(i == 0) 
                pref[i] = v[i];
            else 
                pref[i] = pref[i-1] + v[i];
        }
        for(int i = n-1; i >= 0; i--)
        {
            if(i == n-1) 
                suf[i] = v[i];
            else 
                suf[i] = suf[i+1] + v[i];
        }
       
		long long res = 1e13;
       
		// Required calculation for minimum number of operations
		for(int i = 0; i < n; i++)
        {
            long long prevSum = ((i == 0) ? 0 : pref[i-1]);
            long long aheadSum = suf[i];
            long long temp = prevSum + aheadSum - (long long)(n-i)*(long long)v[i];
            res = min(res, temp);
        }
        return res;
    }
```

**II. Time: O(NLogN) || Space: O(1): Optimising to constant space:**
In the above approach, we are using prefix and suffix sums for finding the **sums** for subarrays `v[0] -> v[i-1]` and `v[i] -> v[n-1]`, where `n = v.size()`.
But, we could also do this in constant space using the **left sum** and **right sum**.

```
    long long minimumRemoval(vector<int>& v) 
    {
        int n = v.size();
        sort(v.begin(), v.end());
        
		//rightSum = total sum of elements, leftSum = 0 at start
		long long rightSum = accumulate(v.begin(), v.end(), 0LL), leftSum = 0, res = 1e13;
        
        for(int i = 0; i < n; i++)
        {
			// leftSum for making the preceding elements to zero
			// rightSum - (n-i)*(v[i]) for making the succeeding elements equal to v[i]
			// In short we could also use total sum instead of leftSum and rightSum.
			
            long long temp = leftSum + rightSum - (n-i)*(long long)v[i];
            res = min(res, temp);
            leftSum += v[i];
            rightSum -= v[i];
        }
        return res;
    }
```
