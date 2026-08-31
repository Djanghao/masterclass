# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5988901/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/5988901/)

---



![image.png](./images/0.png)



---

### Intuition
The problem involves finding an optimal pairing between robots and factories to minimize the total distance traveled by robots. Observing that each factory has a certain capacity of robots it can handle and each robot has an initial position, the problem translates into finding minimum cost through dynamic programming by calculating the cost of assigning robots to the nearest feasible factories.

### Approach
1. **Sort Robots and Factories**: Begin by sorting the robots and factories based on positions to streamline the distance calculation.
2. **Prefix Sum Array**: Create a prefix sum array for factory capacities, which helps quickly check if assigning a specific number of robots to factories is feasible.
3. **Dynamic Programming with Memoization**: Use DFS with memoization to check for the minimum distance cost recursively:
   - For each factory, calculate the minimum cost by trying to assign different numbers of robots.
   - Track the assigned robots in `dfs` calls and add costs incrementally, updating the minimum cost in the memoization table.

### Complexity
- **Time Complexity**: \\( O(F \	imes R^2) \\), where \\( F \\) is the number of factories and \\( R \\) is the number of robots.
- **Space Complexity**: \\( O(F \	imes R) \\), due to the memoization table used in the dynamic programming approach.

---

### Code Implementations

```dart []
import 'dart:math';

class Solution {
  int minimumTotalDistance(List<int> robot, List<List<int>> factory) {
    const MAX = 1 << 60;
    robot.sort();
    factory.sort((a, b) => a[0] - b[0]);
    List<int> prefix = [0];
    for (final f in factory) {
      prefix.add(prefix.last + f[1]);
    }

    final F = factory.length, R = robot.length;
    final memo = List.generate(F + 1, (_) => List.filled(R + 1, -1));

    int dfs(int facs, int robs) {
      if (robs == 0) return 0;
      if (prefix[facs] < robs) return MAX;
      if (memo[facs][robs] == -1) {
        final myLoc = factory[facs - 1][0];
        var myLimit = factory[facs - 1][1];
        var tmp = dfs(facs - 1, robs);
        var myCost = 0;
        for (int r = robs - 1; r >= 0 && myLimit > 0; r--, myLimit--) {
          myCost += (robot[r] - myLoc).abs();
          tmp = min(tmp, myCost + dfs(facs - 1, r));
        }
        memo[facs][robs] = tmp;
      }
      return memo[facs][robs];
    }

    return dfs(F, R);
  }
}
```

```java []
import java.util.*;

class Solution {
    public int minimumTotalDistance(List<Integer> robot, List<int[]> factory) {
        final long MAX = (1L << 60);
        Collections.sort(robot);
        factory.sort(Comparator.comparingInt(a -> a[0]));
        
        List<Long> prefix = new ArrayList<>(Collections.nCopies(factory.size() + 1, 0L));
        for (int i = 0; i < factory.size(); i++) {
            prefix.set(i + 1, prefix.get(i) + factory.get(i)[1]);
        }

        int F = factory.size(), R = robot.size();
        long[][] memo = new long[F + 1][R + 1];
        for (long[] row : memo) Arrays.fill(row, -1);

        return (int) dfs(F, R, robot, factory, prefix, memo);
    }

    private long dfs(int facs, int robs, List<Integer> robot, List<int[]> factory, List<Long> prefix, long[][] memo) {
        if (robs == 0) return 0;
        if (prefix.get(facs) < robs) return Long.MAX_VALUE;
        if (memo[facs][robs] != -1) return memo[facs][robs];

        long tmp = dfs(facs - 1, robs, robot, factory, prefix, memo);
        long myCost = 0;
        for (int r = robs - 1; r >= 0 && factory.get(facs - 1)[1] > 0; r--, factory.get(facs - 1)[1]--) {
            myCost += Math.abs(robot.get(r) - factory.get(facs - 1)[0]);
            tmp = Math.min(tmp, myCost + dfs(facs - 1, r, robot, factory, prefix, memo));
        }
        return memo[facs][robs] = tmp;
    }
}
```

```javascript []
function minimumTotalDistance(robot, factory) {
    const MAX = Number.MAX_SAFE_INTEGER;
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const prefix = new Array(factory.length + 1).fill(0);
    for (let i = 0; i < factory.length; i++) {
        prefix[i + 1] = prefix[i] + factory[i][1];
    }

    const memo = Array.from({ length: factory.length + 1 }, () => Array(robot.length + 1).fill(-1));

    function dfs(facs, robs) {
        if (robs === 0) return 0;
        if (prefix[facs] < robs) return MAX;
        if (memo[facs][robs] !== -1) return memo[facs][robs];

        let tmp = dfs(facs - 1, robs);
        let myCost = 0;
        for (let r = robs - 1, limit = factory[facs - 1][1]; r >= 0 && limit > 0; r--, limit--) {
            myCost += Math.abs(robot[r] - factory[facs - 1][0]);
            tmp = Math.min(tmp, myCost + dfs(facs - 1, r));
        }
        return memo[facs][robs] = tmp;
    }

    return dfs(factory.length, robot.length);
}
```

```python []
def minimumTotalDistance(robot, factory):
    MAX = float('inf')
    robot.sort()
    factory.sort()
    
    prefix = [0]
    for f in factory:
        prefix.append(prefix[-1] + f[1])
        
    F, R = len(factory), len(robot)
    memo = [[-1] * (R + 1) for _ in range(F + 1)]

    def dfs(facs, robs):
        if robs == 0:
            return 0
        if prefix[facs] < robs:
            return MAX
        if memo[facs][robs] != -1:
            return memo[facs][robs]

        tmp = dfs(facs - 1, robs)
        my_cost = 0
        for r in range(robs - 1, -1, -1):
            my_cost += abs(robot[r] - factory[facs - 1][0])
            tmp = min(tmp, my_cost + dfs(facs - 1, r))
        memo[facs][robs] = tmp
        return tmp

    return dfs(F, R)
```

```cpp []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minimumTotalDistance(vector<int>& robot, vector<vector<int>>& factory) {
        const long MAX = 1LL << 60;
        sort(robot.begin(), robot.end());
        sort(factory.begin(), factory.end());
        
        vector<long> prefix(factory.size() + 1, 0);
        for (size_t i = 0; i < factory.size(); ++i) {
            prefix[i + 1] = prefix[i] + factory[i][1];
        }
        
        int F = factory.size(), R = robot.size();
        vector<vector<long>> memo(F + 1, vector<long>(R + 1, -1));

        return dfs(F, R, robot, factory, prefix, memo);
    }

    long dfs(int facs, int robs, vector<int>& robot, vector<vector<int>>& factory, vector<long>& prefix, vector<vector<long>>& memo) {
        if (robs == 0) return 0;
        if (prefix[facs] < robs) return LLONG_MAX;
        if (memo[facs][robs] != -1) return memo[facs][robs];

        long tmp = dfs(facs - 1, robs, robot, factory, prefix, memo);
        long myCost = 0;
        for (int r = robs - 1; r >= 0 && factory[facs - 1][1] > 0; r--, factory[facs - 1][1]--) {
            myCost += abs(robot[r] - factory[facs - 1][0]);
            tmp = min(tmp, myCost + dfs(facs - 1, r, robot, factory, prefix, memo));
        }
        return memo[facs][robs] = tmp;
    }
};
```

```go []
package main

import (
    "math"
    "sort"
)

func minimumTotalDistance(robot []int, factory [][]int) int

 {
    const MAX = math.MaxInt64
    sort.Ints(robot)
    sort.Slice(factory, func(i, j int) bool { return factory[i][0] < factory[j][0] })

    prefix := make([]int, len(factory)+1)
    for i, f := range factory {
        prefix[i+1] = prefix[i] + f[1]
    }

    memo := make([][]int, len(factory)+1)
    for i := range memo {
        memo[i] = make([]int, len(robot)+1)
        for j := range memo[i] {
            memo[i][j] = -1
        }
    }

    var dfs func(facs, robs int) int
    dfs = func(facs, robs int) int {
        if robs == 0 {
            return 0
        }
        if prefix[facs] < robs {
            return MAX
        }
        if memo[facs][robs] != -1 {
            return memo[facs][robs]
        }

        tmp := dfs(facs-1, robs)
        myCost := 0
        for r := robs - 1; r >= 0 && factory[facs-1][1] > 0; r-- {
            myCost += int(math.Abs(float64(robot[r] - factory[facs-1][0])))
            tmp = min(tmp, myCost+dfs(facs-1, r))
            factory[facs-1][1]--
        }
        memo[facs][robs] = tmp
        return tmp
    }

    return dfs(len(factory), len(robot))
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

---

![image.png](./images/1.png) {:style='width:250px'}