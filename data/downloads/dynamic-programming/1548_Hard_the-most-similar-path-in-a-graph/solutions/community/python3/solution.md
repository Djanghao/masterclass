# bottom up dynamic and dijkstra's algorithm

**Author:** ytb_algorithm
**Votes:** 14
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1053195/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1053195/)

---

This is really a note of my understanding of the two methods since I fail to come up with both solutions without help. Let's talk about the dp solution first. 
I was thinking about dp since there is edit distance concept involved and there is a question of calculating edit distance between two strings solved by dp. However, the underlying is not sting, it is graph instead. I doubted I was in the right direction and I gave up the dp solution without spending too much thinking. Then I go to hint for help. It turns out that dp is the right direction. After this confirmation and some further thinking, I figured it out. Here is the analysis. 
Let's use dp[i][j] represents shortest edit distance if we start from node i in the graph and compare with targetPath[j:]. We need to find the Bellman equation. Actually, if we start from node i, the next nodes we can go are those connecting to node i by the provided edges. Say one of them is node k. Since we are comparing to targetPath[j:], after we move to node k, we are comparing to targetPath[j+1:]. Then dp[i][j] is really related to the mininum value of dp[k][j+1], with k selecting from the available nodes node i can go. Beyond that, we also need to consider node i and targetPath[j]. If the name of node i is the same as targetPath[j], there is no extra edit distance added. Otherwise, we need to add 1 edit distance to the min value we just calculated. This gives us the following Bellman equation:
dp[i][j] = min(dp[k][j+1])+(names[i] != tagetPath[j]), with k being selected from the set of nodes connecting by some provided edges. The code is as follows:
```
class Solution:
    def mostSimilar(self, n: int, roads: List[List[int]], names: List[str], targetPath: List[str]) -> List[int]:
        def createGraph():
            for edge in roads:
                edges[edge[0]].append(edge[1])
                edges[edge[1]].append(edge[0])
            
        
        m = len(targetPath)
        dp = [[float('inf')]*m for _ in range(n)]
        paths = [[[] for _ in range(m)] for _ in range(n)]
        edges = [[] for _ in range(n)]
        createGraph()
        for i in range(n):
            dp[i][m-1] = (names[i] != targetPath[-1])
            paths[i][m-1].append(i)
        for j in range(m-2, -1, -1):
            for i in range(n):
                paths[i][j].append(i)
                min_idx = -1
                for e in edges[i]:
                    if dp[e][j+1] < dp[i][j]:
                        min_idx = e
                        dp[i][j] = dp[e][j+1]
                paths[i][j].extend(paths[min_idx][j+1])
                dp[i][j] += names[i] != targetPath[j]
        ans = None
        min_dist = float('inf')
        for i in range(n):
            if dp[i][0] < min_dist:
                ans = paths[i][0]
                min_dist = dp[i][0]
        return ans
```

Let talk about the second method. This method I realized by viewing the discuss section. It turns out a modified version of Dijkstra's algorithm. Painful one, honestly. But I find that lots of graph related questions can be solved by the algorithm, I determined to figure it out. Among the articles, I found this one most helpful: https://leetcode.com/problems/the-most-similar-path-in-a-graph/discuss/788926/Java.-Dijkstra-(70ms). Before we go to the detail, let's first talk about Dijkstra's algorithm. 
Dijkstra's algorithm (I am not even comfortabe with the pronunciation of the word) is the algorithm for finding the shortest path in a weighted graph. Here are some tips about the algorithm: 
1. maintain a priority queue. We will use it to pop the next node with minimum distance to the src each time
2. relax the node if the current calculated distance is shorter than the recorded one 
3. only positive weight is allowed. 

The confusing part is, why Dijkstra's algorithm, which is used to calculate the shortest path from src to dst in a weighted graph, can be used here? Let's compare the classical question with this question. 
shortest path in a graph:
1. edges with positive weights
2. desired path is the path with the smallest summation of weights 
3. number of edges in the desired path varies. 

This question:
1. edges are all weighted to be 1 
2. desired path is the path in the graph with the smallest edit distance to the targetPath
3. number of edges in the desired path is fixed and is the same to targetPath. 

From the comparison, it is not hard to find that we can apply Dijkstra's algorithm, with some modification fitting to this question, to find the desired path with shortest edit distance to the targetPath. First of all, we are not finding shortest distance to src, we are finding path with shortest edit distance to targetPath. This means that all length related stuff (length in priority, recorded shortest length to src by now for each node, criterial for relaxing the node ...) will be substituted to the edit distance to targetPath.  Second, as long as the length of the path (or, the number of edges in the path) is the same as targetPath, we find the solution. No more further update. Based on the analysis, 
**Note: thanks to the comment by @ramsaxena42, from which I realize this is actually a 0-1 BFS problem. The problem can be solved exactly using Dijkstra's algorithm, with an optimization that we can use a deque instead of a priority queue. This could improve the efficiency from O(E+VlogV) to O(E+V). I also modify the code accordingly.**
I have posted my implementation below:
```
class Solution:
    def mostSimilar(self, n: int, roads: List[List[int]], names: List[str], targetPath: List[str]) -> List[int]:
        def createGraph():
            for edge in roads:
                edges[edge[0]].append(edge[1])
                edges[edge[1]].append(edge[0])
            
        
        m = len(targetPath)
        edges = [[] for _ in range(n)]
        createGraph()
        # edge_to[i][j] is the previous city in the path 
        # to city i, which is jth city in the path. 
        edge_to = [[None]*m for _ in range(n)]
        # min_dist[i][j] is min dist to city i with path length of j 
        min_dists = [[float('inf')]*m for _ in range(n)]
        '''
        heap = []
        for i in range(n):
            heapq.heappush(heap, (names[i] != targetPath[0], i, 0))
        '''
        queue = deque()
        for i in range(n):
            if names[i] == targetPath[0]:
                queue.appendleft([i, 0])
                min_dists[i][0] = 0
            else:
                queue.append([i, 0])
                min_dists[i][0] = 1
        min_city = None
        while heapq:
            city_index, target_index = queue.popleft()
            # dist, city_index, target_index = heapq.heappop(heap)
            # the shortest path (actually path with with shortest edit distance) found 
            if target_index == m-1:
                min_city = city_index
                break
            for edge in edges[city_index]:
                weight = (names[edge] != targetPath[target_index+1])
                next_dist = min_dists[city_index][target_index] + weight
                # relax node edge if find shorter edit distance
                if min_dists[edge][target_index+1] > next_dist:
                    min_dists[edge][target_index+1] = next_dist
                    edge_to[edge][target_index+1] = city_index
                    # heapq.heappush(heap, (next_dist, edge, target_index+1))
                    if weight == 0:
                        queue.appendleft([edge, target_index+1])
                    else:
                        queue.append([edge, target_index+1])
        path = [min_city]
        remain_len = m-2
        while remain_len >= 0:
            prev_city = edge_to[path[-1]][remain_len+1]
            path.append(prev_city)
            cur_city = prev_city
            remain_len -= 1
        return reversed(path)
```