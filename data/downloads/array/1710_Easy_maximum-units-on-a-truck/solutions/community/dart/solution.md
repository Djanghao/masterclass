# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/5141287/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/5141287/)

---

# Code
```
class Solution {
  int maximumUnits(List<List<int>> boxTypes, int truckSize) {
    boxTypes = boxTypes..sort((a, b) => b[1].compareTo(a[1]));
    
    int ans = 0;
    for (var box in boxTypes) {
      while (box[0] > 0) {
        ans += box[1];
        box[0]--;
        truckSize--;
        if (truckSize == 0) return ans;
      }
    }
    return ans;
  }
}

```