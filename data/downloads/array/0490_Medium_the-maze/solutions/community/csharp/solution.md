# BFS. Clean/Simple code

**Author:** laihm6
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze/solutions/4070628/](https://leetcode.com/problems/the-maze/solutions/4070628/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
BFS. 
Base case: ball stop at postion a, move the ball up/down/left/right until hit another wall and add that new position to the queue.


# Complexity
- Time complexity:
$$O((M*N) * (M+N))$$

- Space complexity:
$$O(M*N)$$

# Code
```
public class Solution {
    public bool HasPath(int[][] maze, int[] start, int[] destination) {
        List<(int x, int y)> dirs = new List<(int x, int y)>{(-1,0),(1,0),(0,-1),(0,1)};
        HashSet<(int x, int y)> visited = new();
        Queue<(int x, int y)> moves = new();

        moves.Enqueue((start[0], start[1]));
        while(moves.Count>0){
            var move = moves.Dequeue();
            if(visited.Contains(move))
                continue;
            visited.Add(move);

            foreach(var dir in dirs){
                (int x, int y) next = (move.x, move.y);
                while((next.x>=0 && next.x < maze.Length && next.y>=0 && next.y<maze[0].Length) && (maze[next.x][next.y] == 0))
                {
                    next.x += dir.x;
                    next.y += dir.y;
                }
                //Back one step before hitting the wall
                next.x -= dir.x;
                next.y -= dir.y;
                if(next.x == destination[0] && next.y == destination[1])
                    return true;
                if(!visited.Contains(next)){
                    moves.Enqueue(next);
                }
            }
        }

        return false;
    }
}
```