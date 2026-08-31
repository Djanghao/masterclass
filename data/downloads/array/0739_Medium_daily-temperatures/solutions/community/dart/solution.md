# Solution using Monotonic Stack in Dart

**Author:** An0num
**Votes:** 0
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/5660029/](https://leetcode.com/problems/daily-temperatures/solutions/5660029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Monotonick stack

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```dart []
import 'dart:collection';

class Solution {
  List<int> dailyTemperatures(List<int> temperatures) {
    final result = List<int>.filled(temperatures.length, 0);
    final queue = Queue<int>();

    for (int i = 0; i < temperatures.length; i++) {
        while (queue.isNotEmpty && temperatures[i] > temperatures[queue.last]) {
            int prevIndex = queue.removeLast();
            result[prevIndex] = i - prevIndex;
        }
        queue.add(i);
    }

    return result;
  }
}
```