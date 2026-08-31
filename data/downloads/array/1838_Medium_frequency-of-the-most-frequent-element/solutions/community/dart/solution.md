# Fast Dart

**Author:** qai
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300785/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300785/)

---

# Intuition

Sliding window.

# Code
```
class Solution {
  int maxFrequency(List<int> nums, int k) {
    nums.sort();
    int res=1;
    for (int i=0, j=1;j<nums.length;j++) {
      while ((j-i)*(nums[j]-nums[j-1])>k)
        k+=nums[j-1]-nums[i++];
      k=k-(j-i)*(nums[j]-nums[j-1]);
      res=max(res,j+1-i);
    }
    return res;
  }
}

```

Please upvote. Thank you!