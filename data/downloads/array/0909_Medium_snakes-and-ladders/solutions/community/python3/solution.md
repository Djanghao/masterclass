# 🚀Beats 100%(2ms)🚀 ||✅Easy Solutions✅||🔥Fully Explained🔥|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 35
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3092663/](https://leetcode.com/problems/snakes-and-ladders/solutions/3092663/)

---

# Intuition :
 1. For each step we do the following:

    - roll dice (and check all 6 possible values, marking each as visited)
    - check if we land on a ladder and take it (no possibility to skip it, we must take it)
    - remember where to continue next time (add the new position to the queue)
2. Now let\u2019s take a look at scenarios:

    - Just step starting from square 1 with a dice where 6 is the best 
<!-- Describe your first thoughts on how to solve this problem. -->


# Complexity
- Time complexity :O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# If you find this solution easy to understand and helpful, then Please Upvote\uD83D\uDC4D\uD83D\uDC4D

![ezgif-3-22a360561c.gif](./images/0.gif)

# Code [C++| Java| Python3] - [With Comments]\u2B07\uFE0F\u2B07\uFE0F\u2B07\uFE0F
```C++ []
typedef pair<int,int> Pi;
class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        int rows=board.size(), cols = board[0].size(), target=rows*cols, r, c, p;
        vector<int> visited(rows*cols + 1); // cells on board start from 1
        // queue contains <priority, square> sorted ascending by priority
        // prio = #steps * 1000 + (500 - square);
        // number of steps is critical and adds 1000; 500 is selected as it is higher than the max cell (20*20=400)
        priority_queue<Pi, vector<Pi>, greater<Pi>> q;
        q.push(make_pair(0,1)); // 0 steps to position 1
        visited[1] = true;
        while(q.size())
        {
            auto step_pos = q.top(); q.pop();
            int s = step_pos.first/1000 + 1;
            
            for(int i=1; i<=6; i++)
            {
                auto p = step_pos.second+i;
                if(visited[p]) continue;
                visited[p] = true;
                
                r = rows - (p-1) / cols - 1;
                c = (p-1) % cols;
                if((rows-r-1)%2) c = cols - c - 1; // change direction for odd lines
                int ladder = board[r][c];
                if(ladder>0 && ladder<=target)
                    p = ladder; // no update for steps. allow to come here again with a dice
                    
                if(p == target) return s;
                q.push(make_pair(s*1000+500-p, p));
            }
        }
        return -1;
    }
};
```
```Java []
import java.util.*;
class Solution 
{
    public int snakesAndLadders(int[][] board) 
    {
        int rows = board.length, cols = board[0].length, target = rows * cols, r, c, p;
        boolean[] visited = new boolean[rows * cols + 1]; // cells on board start from 1
        // queue contains <priority, square> sorted ascending by priority
        // prio = #steps * 1000 + (500 - square);
        // number of steps is critical and adds 1000; 500 is selected as it is higher than the max cell (20*20=400)
        PriorityQueue<int[]> q = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        q.offer(new int[] {0, 1}); // 0 steps to position 1
        visited[1] = true;

        while (!q.isEmpty()) 
        {
            int[] step_pos = q.poll();
            int s = step_pos[0] / 1000 + 1;
            for (int i = 1; i <= 6; i++) 
            {
                p = step_pos[1] + i;
                if (visited[p]) continue;
                visited[p] = true;

                r = rows - (p - 1) / cols - 1;
                c = (p - 1) % cols;
                if ((rows - r - 1) % 2 == 1) 
                    c = cols - c - 1; // change direction for odd lines
                int ladder = board[r][c];
                
                if (ladder > 0 && ladder <= target)
                    p = ladder; // no update for steps. allow to come here again with a dice
                if (p == target) 
                    return s;
                q.offer(new int[] {s * 1000 + 500 - p, p});
            }
        }
        return -1;
    }
}
```
```Python3 []
class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        def label_to_position(label):
            r, c = divmod(label-1, n)
            if r % 2 == 0:
                return n-1-r, c
            else:
                return n-1-r, n-1-c
            
        seen = set()
        queue = collections.deque()
        queue.append((1, 0))
        while queue:
            label, step = queue.popleft()
            r, c = label_to_position(label)
            if board[r][c] != -1:
                label = board[r][c]
            if label == n*n:
                return step
            for x in range(1, 7):
                new_label = label + x
                if new_label <= n*n and new_label not in seen:
                    seen.add(new_label)
                    queue.append((new_label, step+1))
        return -1
```
