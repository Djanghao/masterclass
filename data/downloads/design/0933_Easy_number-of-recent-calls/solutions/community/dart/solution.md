# Queue

**Author:** o41rov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/4171430/](https://leetcode.com/problems/number-of-recent-calls/solutions/4171430/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class RecentCounter {
    late int counter;
    late Queue<int> requests;
    int past = 3000;

    RecentCounter() {
        counter = 0;
        requests = Queue();
    }
  
    int ping(int t) {
        requests.add(t);
        while(t - requests.first > past){
            requests.removeFirst();
        }
        counter = requests.length;
        return counter;
    }
}
```