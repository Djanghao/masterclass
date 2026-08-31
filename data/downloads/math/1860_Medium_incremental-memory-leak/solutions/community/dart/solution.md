# Simple solution on Dart | O(1)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/5829158/](https://leetcode.com/problems/incremental-memory-leak/solutions/5829158/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> memLeak(int memory1, int memory2) {
    int memory = 1;

    while (memory1 >= 0 && memory2 >= 0) {
        if (memory2 > memory1) {
            if (memory2 - memory < 0) break;
            memory2 -= memory;
        } else if (memory1 >= memory2) {
            if (memory1 - memory < 0) break;
            memory1 -= memory;
        }

        memory++;
    }

    return [memory, memory1, memory2];
  }
}
```