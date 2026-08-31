# Clean binary search solution in C++

**Author:** _noexcuses
**Votes:** 11
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/1004218/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/1004218/)

---

```
  int waysToSplit(vector<int>& nums) {
    int ans = 0, m = 1e9+7, leftsum, totalsum;
    vector<int> sums(nums.size()); // prefix sums
    partial_sum(nums.begin(), nums.end(), sums.begin());
    totalsum = *sums.rbegin();
    
    // i: iterator to the last element of left
    // j: iterator to the left-most last element of mid
    // k: iterator to the right-most last element of mid
    for (auto i = sums.begin(); i < sums.end() - 2; i++) {
      leftsum = *i;
      int midsum_max = (totalsum - leftsum) / 2;
      if (leftsum > midsum_max) break;
      auto j = lower_bound(i+1, sums.end()-1, 2*leftsum);
      auto k = upper_bound(i+1, sums.end()-1, leftsum + midsum_max);
      ans = (ans + k - j) % m;
    }
    return ans;
  }
  ```