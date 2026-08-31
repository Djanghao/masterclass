# Dart, concise solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/5010034/](https://leetcode.com/problems/trapping-rain-water/solutions/5010034/)

---

# Code
```
class Solution {
  int trap(List<int> heigth) {
    int left = 0,
        right = heigth.length - 1,
        leftMax = 0,
        rightMax = 0,
        water = 0;
    while (left < right) {
      leftMax = max(leftMax, heigth[left]);
      rightMax = max(rightMax, heigth[right]);
      water += leftMax < rightMax
          ? leftMax - heigth[left++]
          : rightMax - heigth[right--];
    }
    return water;
  }
}
```