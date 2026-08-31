# ✅98.44%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 85
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/4180303/](https://leetcode.com/problems/parallel-courses-iii/solutions/4180303/)

---

# Problem Explanation: \uD83E\uDDAF

##### You are given a list of courses with prerequisites and a duration for each course. You want to complete all the courses while adhering to the prerequisites. The goal is to minimize the time it takes to complete all the courses.

---

# DFS + Memoization (Top-Down DP): \uD83D\uDE80

##### 1. Create a graph to represent the prerequisites using an adjacency list.

##### 2. Create a memoization table (an array) to store the minimum time needed to complete each course.
##### 3. Define a recursive function to calculate the minimum time to complete a course:
- a. If the course has already been calculated, return its value from the memoization table.
- b. If the course has no prerequisites, its time is simply its own duration.
- c. Otherwise, calculate the time to complete this course as the maximum time among its prerequisites plus its own duration.
- d. Store this calculated time in the memoization table and return it.


##### 4. Initialize a variable to keep track of the overall minimum time.
##### 5. For each course, calculate its minimum time using the recursive function and update the overall minimum time if necessary.
##### 6. The overall minimum time is the answer.
---

# Time and Space Complexity Analysis: \u23F2\uFE0F

- **Time Complexity:** $$O(V + E)$$, where V is the number of courses and E is the number of prerequisite relations. The memoization table ensures that each course's time is calculated only once.
- **Space Complexity:** $$O(V)$$ for the memoization table and $$O(E)$$ for the graph.
---

# Code

```python []
class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        graph = [[] for _ in range(n)]

        for prev, next in relations:
            graph[prev - 1].append(next - 1)

        memo = [-1] * n

        def calculateTime(course):
            if memo[course] != -1:
                return memo[course]

            if not graph[course]:
                memo[course] = time[course]
                return memo[course]

            max_prerequisite_time = 0
            for prereq in graph[course]:
                max_prerequisite_time = max(max_prerequisite_time, calculateTime(prereq))

            memo[course] = max_prerequisite_time + time[course]
            return memo[course]

        overall_min_time = 0
        for course in range(n):
            overall_min_time = max(overall_min_time, calculateTime(course))

        return overall_min_time

```
```C++ []
class Solution {
public:
    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {
        vector<vector<int>> graph(n);

        for (const vector<int>& relation : relations) {
            int prev = relation[0] - 1;
            int next = relation[1] - 1;
            graph[prev].push_back(next);
        }

        vector<int> memo(n, -1);

        function<int(int)> calculateTime = [&](int course) {
            if (memo[course] != -1) {
                return memo[course];
            }

            if (graph[course].empty()) {
                memo[course] = time[course];
                return memo[course];
            }

            int maxPrerequisiteTime = 0;
            for (int prereq : graph[course]) {
                maxPrerequisiteTime = max(maxPrerequisiteTime, calculateTime(prereq));
            }

            memo[course] = maxPrerequisiteTime + time[course];
            return memo[course];
        };

        int overallMinTime = 0;
        for (int course = 0; course < n; course++) {
            overallMinTime = max(overallMinTime, calculateTime(course));
        }

        return overallMinTime;
    }
};

```
```javascript []
var minimumTime = function(n, relations, time) {
    const graph = Array(n).fill(null).map(() => []);
    
    for (const [prev, next] of relations) {
        graph[next - 1].push(prev - 1);
    }
    
    const memo = new Array(n).fill(0);
    let overallMinTime = 0;
    
    for (let course = 0; course < n; course++) {
        overallMinTime = Math.max(overallMinTime, calculateTime(course, graph, time, memo));
    }
    
    return overallMinTime;
    
    function calculateTime(course, graph, time, memo) {
        if (memo[course] !== 0) {
            return memo[course];
        }
        
        let maxPrerequisiteTime = 0;
        for (const prereq of graph[course]) {
            maxPrerequisiteTime = Math.max(maxPrerequisiteTime, calculateTime(prereq, graph, time, memo));
        }
        
        memo[course] = maxPrerequisiteTime + time[course];
        return memo[course];
    }
};

```
```java []

public class Solution {
    public int minimumTime(int n, int[][] relations, int[] time) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] relation : relations) {
            int prev = relation[0] - 1;
            int next = relation[1] - 1;
            graph.get(next).add(prev);
        }

        int[] memo = new int[n];
        int overallMinTime = 0;

        for (int i = 0; i < n; i++) {
            overallMinTime = Math.max(overallMinTime, calculateTime(i, graph, time, memo));
        }

        return overallMinTime;
    }

    private int calculateTime(int course, List<List<Integer> > graph, int[] time, int[] memo) {
        if (memo[course] != 0) {
            return memo[course];
        }

        int maxPrerequisiteTime = 0;
        for (int prereq : graph.get(course)) {
            maxPrerequisiteTime = Math.max(maxPrerequisiteTime, calculateTime(prereq, graph, time, memo));
        }

        memo[course] = maxPrerequisiteTime + time[course];
        return memo[course];
    }
}

```
```C# []
public class Solution {
    public int MinimumTime(int n, int[][] relations, int[] time) {
        List<List<int>> graph = new List<List<int>>();
        for (int i = 0; i < n; i++) {
            graph.Add(new List<int>());
        }

        foreach (int[] relation in relations) {
            int prev = relation[0] - 1;
            int next = relation[1] - 1;
            graph[next].Add(prev);
        }

        int[] memo = new int[n];
        int overallMinTime = 0;

        for (int course = 0; course < n; course++) {
            overallMinTime = Math.Max(overallMinTime, CalculateTime(course, graph, time, memo));
        }

        return overallMinTime;
    }

    private int CalculateTime(int course, List<List<int>> graph, int[] time, int[] memo) {
        if (memo[course] != 0) {
            return memo[course];
        }

        int maxPrerequisiteTime = 0;
        foreach (int prereq in graph[course]) {
            maxPrerequisiteTime = Math.Max(maxPrerequisiteTime, CalculateTime(prereq, graph, time, memo));
        }

        memo[course] = maxPrerequisiteTime + time[course];
        return memo[course];
    }
}

```
---
![9c6f9412-c860-47d6-9a2e-7fcf37ff3321_1686334926.180891.png](./images/0.png)

---


