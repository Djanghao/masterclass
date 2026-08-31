# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/4611134/](https://leetcode.com/problems/dota2-senate/solutions/4611134/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {
  String predictPartyVictory(String senate) {
    Queue<int> r = Queue();
    Queue<int> d = Queue();
    var size = senate.length;

    for (int i = 0; i < size; i++) {
        if (senate[i] == "R") {
            r.add(i);
        } else {
            d.add(i);
        }
    }

    while (r.isNotEmpty && d.isNotEmpty) {
        final rPower = r.removeFirst();
        final dPower = d.removeFirst();
        if (rPower < dPower) {
            r.add(size++);
        } else {
            d.add(size++);
        }
    }

    return r.isEmpty ? "Dire" : "Radiant";
  }
}

```