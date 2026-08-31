# 🟢🔴🟢 Beats 100.00%👏 Best Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5938118/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5938118/)

---

```dart
class Solution {
  List<int> findKDistantIndices(List<int> nums, int key, int k) {
    List<int> res = [];
    for(int i = 0; i < nums.length; i++){
        for(int j = 0; j < nums.length; j++){
            if((i - j).abs() <= k && nums[j] == key) res.add(i);
        }
    }
    return res.toSet().toList();
  }
}
```