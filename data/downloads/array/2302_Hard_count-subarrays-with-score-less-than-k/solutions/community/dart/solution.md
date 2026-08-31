# Direct Approach || Using Dart

**Author:** logith_04
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3965377/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3965377/)

---



# Dart Code
```
class Solution {
  int countSubarrays(List<int> nums, int k) {
        int ans = 0, count = 0;
        for (int j = 0, i = 0; j < nums.length; j++) {
            count += nums[j];
            while (count * (j - i + 1) >= k)
                count -= nums[i++];
            ans += j - i + 1;
        }
        return ans;
  }
}
```