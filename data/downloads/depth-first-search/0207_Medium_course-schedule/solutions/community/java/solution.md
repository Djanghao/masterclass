# ✅Beat's 100% || TOPO || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 290
**Link:** [https://leetcode.com/problems/course-schedule/solutions/3756938/](https://leetcode.com/problems/course-schedule/solutions/3756938/)

---

# Intuition:
The intuition behind this approach is that if there is a cycle in the graph, there will be at least one node that cannot be visited since it will always have a nonzero indegree. On the other hand, if there are no cycles, all the nodes can be visited by starting from the nodes with no incoming edges and removing their outgoing edges one by one. If all the nodes are visited in the end, it means that it is possible to finish all the courses.

# Explanation:
The code aims to solve the problem of determining whether it is possible to finish all the given courses without any cyclic dependencies. It uses the topological sort algorithm, specifically Kahn's algorithm, to solve this problem.

1. **Initialization:**
   - Create an empty adjacency list to represent the directed graph. Each node in the graph represents a course, and the edges represent the prerequisites.
   - Create an array called `indegree` of size `n` (number of courses) and initialize all its elements to 0. The `indegree` array will keep track of the number of incoming edges to each course.
   - Create an empty `ans` vector to store the topological order of the courses.

2.**Building the Graph:**
   - Iterate over the `prerequisites` vector, which contains pairs of courses indicating the prerequisites.
   - For each pair [a, b], add an edge in the adjacency list from b to a. This indicates that course b must be completed before course a.
   - Increment the `indegree` of course a by 1, as it has one more prerequisite.

3. **Performing Topological Sort using Kahn's Algorithm:**
   - Create an empty queue called `q` to store the nodes to visit.
   - Iterate over all the courses (0 to n-1) and enqueue the courses with an `indegree` of 0 into the queue. These courses have no prerequisites and can be started immediately.

   - While the queue is not empty, do the following:
     - Dequeue the front element from the queue and store it in a variable `t`.
     - Add `t` to the `ans` vector to keep track of the topological order.
     - For each neighbor `x` of `t` in the adjacency list:
       - Decrement the `indegree` of `x` by 1 since we are removing the prerequisite `t`.
       - If the `indegree` of `x` becomes 0, enqueue `x` into the queue. This means that all the prerequisites of course `x` have been completed.

4. **Checking the Result:**
   - After the topological sort is complete, check if the size of the `ans` vector is equal to the total number of courses (`n`).
     - If they are equal, it means that all the courses can be finished without any cyclic dependencies. Return `true`.
     - If the sizes are different, it implies that there is a cycle in the graph, and it is not possible to complete all the courses. Return `false`.


# Code
```C++ []
class Solution {
public:
    bool canFinish(int n, vector<vector<int>>& prerequisites) {
        vector<int> adj[n];
        vector<int> indegree(n, 0);
        vector<int> ans;

        for(auto x: prerequisites){
            adj[x[0]].push_back(x[1]);
            indegree[x[1]]++;
        }

        queue<int> q;
        for(int i = 0; i < n; i++){
            if(indegree[i] == 0){
                q.push(i);
            }
        }

        while(!q.empty()){
            auto t = q.front();
            ans.push_back(t);
            q.pop();

            for(auto x: adj[t]){
                indegree[x]--;
                if(indegree[x] == 0){
                    q.push(x);
                }
            }
        }
        return ans.size() == n;
    }
};
```
```Java []
class Solution {
    public boolean canFinish(int n, int[][] prerequisites) {
        List<Integer>[] adj = new List[n];
        int[] indegree = new int[n];
        List<Integer> ans = new ArrayList<>();

        for (int[] pair : prerequisites) {
            int course = pair[0];
            int prerequisite = pair[1];
            if (adj[prerequisite] == null) {
                adj[prerequisite] = new ArrayList<>();
            }
            adj[prerequisite].add(course);
            indegree[course]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        while (!queue.isEmpty()) {
            int current = queue.poll();
            ans.add(current);

            if (adj[current] != null) {
                for (int next : adj[current]) {
                    indegree[next]--;
                    if (indegree[next] == 0) {
                        queue.offer(next);
                    }
                }
            }
        }

        return ans.size() == n;
    }
}
```
```Python3 []
class Solution:
    def canFinish(self, n: int, prerequisites: List[List[int]]) -> bool:
        adj = [[] for _ in range(n)]
        indegree = [0] * n
        ans = []

        for pair in prerequisites:
            course = pair[0]
            prerequisite = pair[1]
            adj[prerequisite].append(course)
            indegree[course] += 1

        queue = deque()
        for i in range(n):
            if indegree[i] == 0:
                queue.append(i)

        while queue:
            current = queue.popleft()
            ans.append(current)

            for next_course in adj[current]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)

        return len(ans) == n
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

