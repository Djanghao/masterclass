# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4864880/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4864880/)

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
class Solution {
    List<int> findingUsersActiveMinutes(List<List<int>> logs, int k) {
        Map<int, Set<int>> users = {};
        Map<int, int> uam = {};
        final List<int> res = List.filled(k, 0);
        for (final log in logs) {
            final id = log.first;
            final time = log.last;
            if (!users.containsKey(id)) {
                users[id] = Set();
                users[id]!.add(time);
            } else {
                users[id]!.add(time);
            }
        }

        for (final entry in users.entries) {
            final id = entry.key;
            final uamSize = entry.value.length;
            if (!uam.containsKey(uamSize)) {
                uam[uamSize] = 1;
            } else {
                uam[uamSize] = uam[uamSize]! + 1;
            }
        }

        for (final entry in uam.entries) {
            final uamSize = entry.key;
            final count = entry.value;
            res[uamSize - 1] = count;
        }

        return res;
    }
}
```