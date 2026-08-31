# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/5878984/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/5878984/)

---

```
class Solution {
  bool canMakeArithmeticProgression(List<int> arr) {
    arr.sort();
    int dif = arr[1] - arr.first;
    for(int i = 1; i < arr.length-1; i++){
        if(arr[i+1] - arr[i] != dif) return false;
    }
    return true;
  }
}
```