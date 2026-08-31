# C++ O(N) Solution Explained

**Author:** ahsan83
**Votes:** 13
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/866118/](https://leetcode.com/problems/smallest-range-i/solutions/866118/)

---

Runtime: 32 ms, faster than 92.61% of C++ online submissions for Smallest Range I.
Memory Usage: 15.8 MB, less than 5.97% of C++ online submissions for Smallest Range I.

```
class Solution {
public:
    int smallestRangeI(vector<int>& A, int K) {
        
        // get max and min value in array
        int maxv = *max_element(A.begin(),A.end());
        int minv = *min_element(A.begin(),A.end());
        
        // possible smallest max value => maxv - K
        // possible largest min value => minv + K
        // possible smallest diff between max and min = possible smallest max - possible largest min value = maxv -K - (minv + K) = maxv-K-minv-K
        // This equation holds true if maxv-K > minv+K, otherwise maxv-K won't be max and minv+K won't be min and we will get a negative difference
        
		// EX: A = [1,3,6], K = 3 => maxv-K =6-3=3 < minv+K = 1+3 = 4 =>(maxv-K) - (minv+K) = 3-4 = -1 => negative result
        // Corner Case: If maxv-K < minv+K then maxv-K is not a max value any more and minv+K is not a min value any more which gives negative result
        // even their absolute difference can give a positive result which is not minimum difference 
        // In this case, we can think that A array is updated in a way that all values of B are equal as minv+K > maxv-K
		// and the smallest possible difference will be 0
        // So we comapre the result (maxv-K-minv-K) with 0 and return the max between them
        return max(0,maxv-K-minv-K);
    }
};
```