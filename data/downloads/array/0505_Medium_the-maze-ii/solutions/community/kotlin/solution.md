# Breadth-First Search Editorial approach

**Author:** vmlnt
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/4164084/](https://leetcode.com/problems/the-maze-ii/solutions/4164084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Breadth-First Search approach. Much more details may be found in Editorial. Current solution is a simple Kotlin interpretation of solution from Editorial. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(mn * mn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m * n)

# Code
```
class Solution {

    val dirs: Array<IntArray> = arrayOf(
        intArrayOf(0, 1),
        intArrayOf(0, -1),
        intArrayOf(-1, 0),
        intArrayOf(1, 0)
    )

    fun shortestDistance(maze: Array<IntArray>, start: IntArray, destination: IntArray): Int {

        val distance: Array<IntArray> = Array(maze.size) { IntArray(maze[0].size) { Integer.MAX_VALUE } }
        distance[start[0]][start[1]] = 0;

        val queue = LinkedList<IntArray>().also { it.offer(start) }

        while (!queue.isEmpty()) {
            val s = queue.poll();

            for (dir in dirs) {
                var x = s[0] + dir[0];
                var y = s[1] + dir[1];
                var count = 0;

                while (x >= 0 && y >= 0 && x < maze.size && y < maze[0].size && maze[x][y] == 0) {
                    x += dir[0];
                    y += dir[1];
                    count++;
                }

                if (distance[s[0]][s[1]] + count < distance[x - dir[0]][y - dir[1]]) {
                    distance[x - dir[0]][y - dir[1]] = distance[s[0]][s[1]] + count;
                    queue.add(intArrayOf(x - dir[0], y - dir[1]));
                }
            }
        }

        if (distance[destination[0]][destination[1]] == Integer.MAX_VALUE) { return -1 }
        return distance[destination[0]][destination[1]]
    }
}
```