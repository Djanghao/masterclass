# Simple Java Solution explained

**Author:** bonam
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298626/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298626/)

---

Find the maximum alternating sum of a subsequence in a given array of positive elements.

The idea here is to find the difference of local maxima (sum of peaks) and the local mimima (sum of lows) at every point.
To obtain the maximum difference between the sum of alteranting numbers, the following input array can be visulalized as,

arr = [4,2,5,3]
```
|                              5
|        4                    /\\
|       /\\                  /   \\         3
|     /   \\        2      /      \\       /\\
|   /       \\     /\\    /         \\    /   \\
| /           \\ /    \\/             \\/      \\
--------------------------------------------------

The possible subsequences are,

	SUM           SEQUENCE
	4        	   4
	2		       4-2
	7		       4-2+5
	4		       4-2+5-3
```

The time complexity for this solution is O(N) and the space complexity is O(1)

```
public long maxAlternatingSum(int[] nums) {
        long peak = 0;
        long low = 0;
        long ans = 0;
		
        for(int i=0; i<nums.length-1;) {            
            while(i<nums.length-1 && nums[i] <= nums[i+1]) {
                i++;
            }
			// Found peak
            peak += nums[i];
            ans = Math.max(ans, peak - low);
			
            int j=i;
            while(j<nums.length-1 && nums[j] >= nums[j+1]) {
                j++;
            }
            
            if(i != j) {
                // Found low
                low += nums[j];
                i = j;
            }
            
            ans = Math.max(ans, peak - low);
        }
        
        return ans;
    }
```