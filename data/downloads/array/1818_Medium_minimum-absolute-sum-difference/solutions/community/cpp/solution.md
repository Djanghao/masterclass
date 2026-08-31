# C++  | Binary Search | Easy to Understand

**Author:** saivenky031996
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1363743/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1363743/)

---

**Solution**
We can use binary search for finding the element to replace in nums1.
1. Calculate the base sum difference.
2. Loop Through each element and try to minimize `|nums2[i] - nums1[i]|`.
**Reason for doing this** 
The closer the number is to nums2[i], the lesser the difference.
`|5-4| < |5-3|`
		`|5-6| < |5-7|`
		**How to do this**
Use Binary Search to find the closest number of `nums2[i]` in sorted `nums1`.
Track the minimum difference in each step.
**Note** -  Ensure the base sum is used in every step as we are allowed to change atmost one element.
```
class Solution {
public:
    int minAbsoluteSumDiff(vector<int>& nums1, vector<int>& nums2) {
      long sum=0, minSum;
      vector<int> nums=nums1;
      int n=nums.size();
	  // Calculate the current sum of differences.
      for(int i=0;i<n;i++) sum+=abs(nums1[i]-nums2[i]);
      
      sort(nums.begin(), nums.end());
      minSum=sum;
      
      for(int i=0;i<n;i++) {
        int dist=abs(nums1[i]-nums2[i]);
        int l=0, h=n-1;
        
		// Find the number closest to nums2[i]. 
		// The closer the element, the smaller the difference.
        while(l<h) {
          int m=l+(h-l)/2;
          if(nums[m]>nums2[i]) {
            h=m;
          } else {
            l=m+1;
          }
          dist=min(dist, abs(nums2[i]-nums[m]));
        }
        dist=min(dist, abs(nums2[i]-nums[l]));
        minSum = min(minSum, sum - abs(nums1[i]-nums2[i]) + dist);
      }
      
      return minSum % 1000000007;
    }
};

```
**Complexity**:
Time: `O(nlog(n))`
Space: `O(n)` 
Pl upvote if this was useful :).