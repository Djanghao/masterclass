# ✅BFS✅ || ✅Striver's Video Added || C++ || Java || Python

**Author:** AnishKrSingh
**Votes:** 45
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518331/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518331/)

---

# Intuition 
**```Since we need to find minimum number of attempts, we can do BFS as it will store the minimum attempts to reach a particular value ```**

# Approach
**Make a queue of pair of integers to store a particular value and the turns it takes, also initialize a hashSet to keep a record of previously visited values, and just perform BFS.** 

# Similar Problems
**https://leetcode.com/problems/minimum-operations-to-convert-number/description/**

**Striver's Video for explanation of this approach**
**https://www.youtube.com/watch?v=_BvEJ3VIDWw&ab_channel=takeUforward**

# Code (C++)
```
class Solution {
public:
    int minimumOperationsToMakeEqual(int x, int y) {
        unordered_set<int> vis;
        queue<pair<int, int>> q;
        q.push({x, 0});
        vis.insert(x);
        while (!q.empty())
        {
            auto curr = q.front();
            q.pop();
            
            int num = curr.first, turn = curr.second;
            if (num == y)
                return turn;
            if (vis.find(num + 1) == vis.end())
            {
                q.push({num + 1, turn + 1});
                vis.insert(num + 1);
            }
            if (vis.find(num - 1) == vis.end() && num - 1 >= 0)
            {
                q.push({num - 1, turn + 1});
                vis.insert(num - 1);
            }
            if (num % 11 == 0 && vis.find(num / 11) == vis.end())
            {
                q.push({num / 11, turn + 1});
                vis.insert(num / 11);
            }
            if (num % 5 == 0 && vis.find(num / 5) == vis.end())
            {
                q.push({num / 5, turn + 1});
                vis.insert(num / 5);
            }
        }
        return -1;
    }
};
```
# Code (Java)
```
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

public class Solution {
    public int minimumOperationsToMakeEqual(int x, int y) {
        Set<Integer> vis = new HashSet<>();
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{x, 0});
        vis.add(x);

        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int num = curr[0];
            int turn = curr[1];

            if (num == y) {
                return turn;
            }

            if (!vis.contains(num + 1)) {
                q.add(new int[]{num + 1, turn + 1});
                vis.add(num + 1);
            }

            if (num - 1 >= 0 && !vis.contains(num - 1)) {
                q.add(new int[]{num - 1, turn + 1});
                vis.add(num - 1);
            }

            if (num % 11 == 0 && !vis.contains(num / 11)) {
                q.add(new int[]{num / 11, turn + 1});
                vis.add(num / 11);
            }

            if (num % 5 == 0 && !vis.contains(num / 5)) {
                q.add(new int[]{num / 5, turn + 1});
                vis.add(num / 5);
            }
        }

        return -1;
    }
}
```
# Code (Python)
```
from collections import deque

class Solution:
    def minimumOperationsToMakeEqual(self, x, y):
        vis = set()
        q = deque([(x, 0)])
        vis.add(x)

        while q:
            num, turn = q.popleft()

            if num == y:
                return turn

            if num + 1 not in vis:
                q.append((num + 1, turn + 1))
                vis.add(num + 1)

            if num - 1 >= 0 and num - 1 not in vis:
                q.append((num - 1, turn + 1))
                vis.add(num - 1)

            if num % 11 == 0 and num // 11 not in vis:
                q.append((num // 11, turn + 1))
                vis.add(num // 11)

            if num % 5 == 0 and num // 5 not in vis:
                q.append((num // 5, turn + 1))
                vis.add(num // 5)

        return -1

```
``` Please Upvote if it was helpful ```