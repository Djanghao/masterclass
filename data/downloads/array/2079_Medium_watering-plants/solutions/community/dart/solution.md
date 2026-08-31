# [Dart] - Simple solution

**Author:** karp_in_sky
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/5937213/](https://leetcode.com/problems/watering-plants/solutions/5937213/)

---

# Code
```dart []
class Solution {
  int wateringPlants(List<int> plants, int capacity) {
    int steps = 0;
    int currCap = capacity;
    for (int i = 0; i < plants.length; i++) {
      if (currCap >= plants[i]) {
        steps++;
        currCap -= plants[i];
      } else {
        steps += 2 * i + 1;
        currCap = capacity - plants[i];
      }
    }
    return steps;
  }
}
```