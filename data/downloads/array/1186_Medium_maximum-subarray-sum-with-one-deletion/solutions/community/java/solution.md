# Very clean and easy to understand DP solution

**Author:** S_24
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/2137263/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/2137263/)

---

```
class Solution {
    public int maximumSum(int[] arr) {
        int n = arr.length;
        
        if(n == 1) return arr[0];
        
        int possibleLargest = -1;
        
        int[] prefixSum = new int[n];
        int[] suffixSum = new int[n];
        
        prefixSum[0] = arr[0];
        suffixSum[n-1] = arr[n-1];
        
        for (int i = 1; i < n; i++) {
            prefixSum[i] = Math.max(prefixSum[i-1] + arr[i], arr[i]);
            possibleLargest = Math.max(possibleLargest, prefixSum[i]);
        }
        for (int i = n-2; i >=0; i--) {
            suffixSum[i] = Math.max(suffixSum[i+1] + arr[i], arr[i]);
            possibleLargest = Math.max(possibleLargest, suffixSum[i]);
        }
        
        for(int i=1; i <= n - 2; i++)
        {
            possibleLargest = Math.max(prefixSum[i-1] + suffixSum[i+1], possibleLargest);
        }
        
        return possibleLargest;
    }
}
```

	PLEASE PLEASE UPVOTE IT