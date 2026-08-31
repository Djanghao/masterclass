# dart solution with a stack

**Author:** Nomoke
**Votes:** 3
**Link:** [https://leetcode.com/problems/car-fleet/solutions/3844577/](https://leetcode.com/problems/car-fleet/solutions/3844577/)

---

# Complexity
- Time complexity:
O(n log n) - due to sorting

- Space complexity:
O(n) - used stack

# Code
```
class Solution {
  int carFleet(int target, List<int> position, List<int> speed) {
      final len = position.length;
      final cars = <List<int>>[];

      for(int i = 0; i < len; ++i) {
        cars.add([position[i], speed[i]]);
      }
      cars.sort((a, b) => a.first.compareTo(b.first));
      final stack = <double>[];

      for(int i = len - 1; i > -1; --i) {
        stack.add((target - cars[i][0]) / cars[i][1]);
        if(stack.length > 1 && stack.last <= stack[stack.length - 2]) {
          stack.removeLast();
        } 
      }
      
      return stack.length;
  }
}
```