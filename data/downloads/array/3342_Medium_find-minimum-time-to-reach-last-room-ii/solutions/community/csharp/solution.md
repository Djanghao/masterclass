# via Priority Queue

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6095130/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6095130/)

---

# Complexity
- Time complexity:
$$O((n * m).log(n * m))$$

- Space complexity:
$$O(n * m)$$

# Code
```csharp []
public class Solution {
    public int MinTimeToReach(int[][] moveTime) {
        int n = moveTime.Length;
        int m = moveTime[0].Length;

        HashSet<(int, int)> directions = new HashSet<(int, int)>() { (1, 0), (-1, 0), (0, 1), (0, -1) };
        PriorityQueue<(int, int, int, int), int> queue = new PriorityQueue<(int, int, int, int), int>();
        HashSet<(int, int)> visited = new HashSet<(int, int)>();

        queue.Enqueue((0, 0, 0, 0), 0);
        visited.Add((0, 0));

        while (queue.Count > 0) {
            var (x, y, time, last) = queue.Dequeue();
            
            if (x == n - 1 && y == m - 1) {
                return time;
            }

            if (last == 1) {
                last = 2;
            }
            else {
                last = 1;
            }

            foreach (var (dx, dy) in directions) {
                int newX = x + dx;
                int newY = y + dy;

                if (newX < 0 || newX >= n || newY < 0 || newY >= m) {
                    continue;
                }

                if (visited.Contains((newX, newY))) {
                    continue;
                }

                int next = Math.Max(time, moveTime[newX][newY]) + last;

                queue.Enqueue((newX, newY, next, last), next);
                visited.Add((newX, newY));
            }
        }

        return -1;
    }
}
```