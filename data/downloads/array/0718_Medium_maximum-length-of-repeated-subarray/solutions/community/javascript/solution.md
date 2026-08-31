# Maximum Length of Repeated Subarray Javascript Simple Solution

**Author:** eslamelkholy1
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1324994/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1324994/)

---

Using Dynamic Programming to Find The Maximum Length of Repeated Subarray

<h3>Code Block</h3>

```javascript
var findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0)); // 1- Initialize 2D Array

  let maxLength = 0; // 2- Set Max Length to Zero
  for (let i = 1; i <= nums1.length; i++)
    for (let j = 1; j <= nums2.length; j++)
      if (nums1[i - 1] == nums2[j - 1]) { // 3- Compare if both Equals
        dp[i][j] = 1 + dp[i - 1][j - 1]; // 4- Added Plus Previous One
        maxLength = Math.max(maxLength, dp[i][j]); // 5- Find Max Between maxLength and Current Value
      }

  return maxLength;
};
```

Up Vote if you Find it Useful