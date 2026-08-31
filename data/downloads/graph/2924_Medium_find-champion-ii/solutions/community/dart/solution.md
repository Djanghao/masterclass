# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6084961/](https://leetcode.com/problems/find-champion-ii/solutions/6084961/)

---

![image.png](./images/0.png)



---

### Intuition
The problem is to find the "champion" of a tournament based on directed edges. Each edge represents a win (from the first node to the second), and the champion will not lose to any other player. To determine the champion:
1. Use a set of all players as initial candidates.
2. Remove players from the set who lose a match.

If only one candidate remains, that is the champion. Otherwise, no champion exists.

---

### Approach
1. Create a set of all players (`candidates`).
2. Traverse through the edges:
   - For each edge, remove the loser (second node) from the set of candidates.
3. After processing all edges:
   - If the set has exactly one element, return it (the champion).
   - Otherwise, return `-1` (no champion).

---

### Complexity
- **Time Complexity**:  
  \\(O(m)\\), where \\(m\\) is the number of edges (as we process each edge once).  
  Creating the set of candidates takes \\(O(n)\\), so the total complexity is \\(O(n + m)\\).
  
- **Space Complexity**:  
  \\(O(n)\\), where \\(n\\) is the number of players (to store the candidates).

---

### Code
```dart []
class Solution {
  int findChampion(int n, List<List<int>> edges) {
    final candidates = Set<int>.from(List.generate(n, (index) => index));

    for (final edge in edges) {
      final loser = edge[1];
      candidates.remove(loser);
    }

    return candidates.length == 1 ? candidates.first : -1;
  }
}
```

```java []
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public int findChampion(int n, List<int[]> edges) {
        Set<Integer> candidates = new HashSet<>();
        for (int i = 0; i < n; i++) {
            candidates.add(i);
        }

        for (int[] edge : edges) {
            candidates.remove(edge[1]); // Remove the loser
        }

        return candidates.size() == 1 ? candidates.iterator().next() : -1;
    }
}
```

```javascript []
var findChampion = function(n, edges) {
    let candidates = new Set([...Array(n).keys()]);

    for (let edge of edges) {
        candidates.delete(edge[1]); // Remove the loser
    }

    return candidates.size === 1 ? [...candidates][0] : -1;
};
```

```python []
def findChampion(n, edges):
    candidates = set(range(n))

    for edge in edges:
        loser = edge[1]
        candidates.discard(loser)  # Remove the loser

    return next(iter(candidates)) if len(candidates) == 1 else -1
```

```cpp []
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int findChampion(int n, vector<vector<int>>& edges) {
        unordered_set<int> candidates;
        for (int i = 0; i < n; i++) {
            candidates.insert(i);
        }

        for (const auto& edge : edges) {
            candidates.erase(edge[1]); // Remove the loser
        }

        return candidates.size() == 1 ? *candidates.begin() : -1;
    }
};
```

```go []
func findChampion(n int, edges [][]int) int {
    candidates := make(map[int]bool)
    for i := 0; i < n; i++ {
        candidates[i] = true
    }

    for _, edge := range edges {
        loser := edge[1]
        delete(candidates, loser) // Remove the loser
    }

    if len(candidates) == 1 {
        for champion := range candidates {
            return champion
        }
    }
    return -1
}
```

---

