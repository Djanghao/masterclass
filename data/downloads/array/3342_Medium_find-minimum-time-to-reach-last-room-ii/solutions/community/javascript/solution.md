# Easy Dijkstra's solution using min heap

**Author:** be_fighter
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6001222/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6001222/)

---

# Intution
Using Dijkstras 
1. For finding the shortest path from starting point  to ending point , the first approach comes in mind is dijkstras shortest path algorithm
2. There is slight modification in algorithm according the question 
3. In even move it take +2 seconds and on odd +1 seconds
4. We have take min heap to stor {time, row, column,turn};
Other all is similar to normal dijkstras's algoirthm

# Complexity
- Time complexity:
O(m * n * log(m * n))

- Space complexity:
O(m * n)

# Code
```cpp []
class Solution {
public:

    int minTimeToReach(vector<vector<int>>& moveTime) {
    int n=moveTime.size();
    int m=moveTime[0].size();

    priority_queue<pair<long long,pair<long long,pair<long long,long long>>>,vector<pair<long long,pair<long long,pair<long long,long long>>>>,greater<pair<long long,pair<long long,pair<long long,long long>>>>>pq;
        
    vector<vector<long long>>dist(n,vector<long long>(m,INT_MAX));

    pq.push({0,{0,{0,1}}});
    dist[0][0]=0;

    while(!pq.empty()){
        long long time=pq.top().first;
        int row=pq.top().second.first;
        int col=pq.top().second.second.first;
        int turn=pq.top().second.second.second;
        pq.pop();

        if(row==n-1 && col==m-1){
            return time;
        }

        int drow[4]={-1,0,1,0};
        int dcol[4]={0,1,0,-1};

        for(int i=0;i<4;i++){
            int nrow=row+drow[i];
            int ncol=col+dcol[i];
          
            if(nrow>=0 && ncol>=0 && nrow<n && ncol<m){
                long long maxtime;
                if(turn==1){
                maxtime=max(time,1ll*moveTime[nrow][ncol])+1;
                }
                else{
                maxtime=max(time,1ll*moveTime[nrow][ncol])+2;
                }
                 
                if( dist[nrow][ncol]>maxtime){
                dist[nrow][ncol]=maxtime;
                pq.push({maxtime,{nrow,{ncol,!turn}}});

                }
            }
            }
        }
        return -1;
    }
};
```
```java []
import java.util.PriorityQueue;

class Solution {
    public int minTimeToReach(int[][] moveTime) {
        int n = moveTime.length;
        int m = moveTime[0].length;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
        long[][] dist = new long[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                dist[i][j] = Long.MAX_VALUE;
            }
        }

        pq.offer(new int[]{0, 0, 0, 1}); // {time, row, col, turn}
        dist[0][0] = 0;

        int[] drow = {-1, 0, 1, 0};
        int[] dcol = {0, 1, 0, -1};

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            long time = curr[0];
            int row = curr[1];
            int col = curr[2];
            int turn = curr[3];

            if (row == n - 1 && col == m - 1) {
                return (int) time;
            }

            for (int i = 0; i < 4; i++) {
                int nrow = row + drow[i];
                int ncol = col + dcol[i];

                if (nrow >= 0 && ncol >= 0 && nrow < n && ncol < m) {
                    long maxTime = (turn == 1) ? Math.max(time, moveTime[nrow][ncol]) + 1 : Math.max(time, moveTime[nrow][ncol]) + 2;

                    if (dist[nrow][ncol] > maxTime) {
                        dist[nrow][ncol] = maxTime;
                        pq.offer(new int[]{(int) maxTime, nrow, ncol, 1 - turn});
                    }
                }
            }
        }
        return -1;
    }
}

```
```python []
import heapq
import sys

class Solution:
    def minTimeToReach(self, moveTime):
        n, m = len(moveTime), len(moveTime[0])
        pq = []
        heapq.heappush(pq, (0, 0, 0, 1))  # (time, row, col, turn)
        dist = [[sys.maxsize] * m for _ in range(n)]
        dist[0][0] = 0

        drow = [-1, 0, 1, 0]
        dcol = [0, 1, 0, -1]

        while pq:
            time, row, col, turn = heapq.heappop(pq)

            if row == n - 1 and col == m - 1:
                return time

            for i in range(4):
                nrow, ncol = row + drow[i], col + dcol[i]

                if 0 <= nrow < n and 0 <= ncol < m:
                    maxtime = max(time, moveTime[nrow][ncol]) + (1 if turn == 1 else 2)

                    if dist[nrow][ncol] > maxtime:
                        dist[nrow][ncol] = maxtime
                        heapq.heappush(pq, (maxtime, nrow, ncol, 1 - turn))

        return -1

```
```javascript []
class Solution {
    minTimeToReach(moveTime) {
        const n = moveTime.length;
        const m = moveTime[0].length;
        
        const pq = new MinPriorityQueue({ priority: x => x[0] });
        const dist = Array.from({ length: n }, () => Array(m).fill(Number.MAX_SAFE_INTEGER));
        
        pq.enqueue([0, 0, 0, 1]); // [time, row, col, turn]
        dist[0][0] = 0;

        const drow = [-1, 0, 1, 0];
        const dcol = [0, 1, 0, -1];

        while (!pq.isEmpty()) {
            const [time, row, col, turn] = pq.dequeue().element;

            if (row === n - 1 && col === m - 1) {
                return time;
            }

            for (let i = 0; i < 4; i++) {
                const nrow = row + drow[i];
                const ncol = col + dcol[i];

                if (nrow >= 0 && ncol >= 0 && nrow < n && ncol < m) {
                    const maxtime = Math.max(time, moveTime[nrow][ncol]) + (turn === 1 ? 1 : 2);

                    if (dist[nrow][ncol] > maxtime) {
                        dist[nrow][ncol] = maxtime;
                        pq.enqueue([maxtime, nrow, ncol, 1 - turn]);
                    }
                }
            }
        }
        return -1;
    }
}

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)
