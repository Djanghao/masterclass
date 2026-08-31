# Fastest Soln.... Beats 100%.. result attached in soln.

**Author:** Success_Code
**Votes:** 68
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546015/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546015/)

---

![1000040035.jpg](./images/0.jpeg)


# Code

```python []
class Solution:

    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:

        g = [[] for _ in range(n + 1)]

        for u, v in edges:

            g[u].append(v)

            g[v].append(u)

        

        q = deque([(1, 1)])

        dist1 = [-1] * (n + 1)

        dist2 = [-1] * (n + 1)

        dist1[1] = 0

        while q:

            x, freq = q.popleft()

            t = dist1[x] if freq == 1 else dist2[x]

            if (t // change) % 2:

                t = change * (t // change + 1) + time

            else:

                t += time

            for y in g[x]:

                if dist1[y] == -1:

                    dist1[y] = t

                    q.append((y, 1))

                elif dist2[y] == -1 and dist1[y] != t:

                    if y == n:

                        return t

                    dist2[y] = t

                    q.append((y, 2))

        return 0

        
```
```C++ []
inline const auto optimize = []() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 0;
}();

class Solution {
    static constexpr int howLong(int needed, int time, int change) {
        int ans = 0;
        for (int i = 0; i < needed; i++) {
            int turn = ans / change;
            if ((turn % 2) != 0)
                ans += change - (ans % change);

            ans += time;
        }
        return ans;
    }
public:
    static int secondMinimum(int N, const vector<vector<int>>& edges, int time,
                             int change) {
        std::vector<std::vector<int>> G(N);
        for (const auto& edge : edges) {
            G[edge[0] - 1].push_back(edge[1] - 1);
            G[edge[1] - 1].push_back(edge[0] - 1);
        }

        std::deque<int> Q;
        std::vector<char> seen(N * 2);
        Q.push_front(0);
        seen[0] = true;

        int maxLength = std::numeric_limits<int>::max();

        int wave = 0;
        bool odd = true;
        while (!Q.empty()) {
            const int thisRound = Q.size();
            odd = !odd;
            for (int i = 0; i < thisRound; i++) {
                auto pos = Q.front();
                Q.pop_front();

                if (pos == N - 1) {
                    if (maxLength == std::numeric_limits<int>::max()) {
                        maxLength = wave + 2;
                        continue;
                    } else {
                        maxLength = std::min(maxLength, wave);
                        return howLong(maxLength, time, change);
                    }
                }

                for (const auto next : G[pos]) {
                    if (seen[next * 2 + !odd])
                        continue;

                    seen[next * 2 + !odd] = true;
                    Q.push_back(next);
                }
            }
            wave++;

            if (maxLength < wave)
                break;
        }

        return howLong(maxLength, time, change);
    }
};
```

```Java []
class Solution {
    public int secondMinimum(int n, int[][] edges, int time, int change) {
        /**
            1. traffic light is global
                - if a departs before b, a will always arrive first
                    - if a delays bc of red light, b will be delayed as well 
                - carry the time forward
                - round=curTime/change
                    - if round is even, then it is green
                        - nextTime=curTime+time
                    - if round is odd, then it is red
                        - wait
                        - nextTime=curTime+2*time, (round+1)*change+time
            2. the question is asking for second minimum time
                - if A->...->B1->...->C, a second minumum time would be
                    - A->...->B1->...->B2->...-->C
                    - a node can be visited twice
            3. use an timeArr to keep track of the 2nd minimum time for every node
                - bfs into next only timeArr[i]<nextTime
         */

        List<Integer>[] graph=new ArrayList[n+1];
        for(int i=0;i<n+1;i++) graph[i]=new ArrayList<>();
        for(int[] edge:edges){
            graph[edge[0]].add(edge[1]);
            graph[edge[1]].add(edge[0]);
        }
        
        Deque<int[]> deque=new LinkedList<>();
        int[] visitedNum=new int[n+1];
        int[] timeArr=new int[n+1];
        Arrays.fill(timeArr,-1);
        deque.offerLast(new int[]{1,0});
        timeArr[0]=0;

        while(deque.size()>0){
            int curSize=deque.size();
            for(int i=0;i<curSize;i++){
                int[] cur=deque.pollFirst();
                //if(cur[0]==n && visitedNum[cur[0]]==2) return cur[1];
                
                int nextTime=0;
                int curLight=cur[1]/change;
                if(curLight%2==0){
                    nextTime=cur[1]+time;
                }
                //nextTime=(curLight+1)*change+time;
                else nextTime=(curLight+1)*change+time;

                for(int nextNode:graph[cur[0]]){
                    if(visitedNum[nextNode]<2 && timeArr[nextNode]<nextTime){
                        deque.offerLast(new int[]{nextNode,nextTime});
                        visitedNum[nextNode]++;
                        timeArr[nextNode]=nextTime;
                        if(nextNode==n && visitedNum[nextNode]==2) return nextTime; 
                    }    
                }
                
            }
        }
        return -1;
    }
}
```