# C++ | | Easy Solution | | BFS | | Topological Sort | | With Explanation

**Author:** yash8589
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/5453290/](https://leetcode.com/problems/parallel-courses/solutions/5453290/)

---

# Code
```
class Solution {
public:
    int minimumSemesters(int n, vector<vector<int>>& relations) {
        // Step 1: Create the graph and in-degree map
        unordered_map<int, vector<int>> graph;  // Adjacency list for the graph
        unordered_map<int, int> indeg;  // In-degree of each course

        // Initialize in-degree for all nodes
        for (int i = 1; i <= n; i++) {
            indeg[i] = 0;
        }
        // Build the graph and update in-degrees
        for (const auto& r : relations) {
            int u = r[0];  // Prerequisite course
            int v = r[1];  // Course that depends on the prerequisite
            graph[u].push_back(v);
            indeg[v]++;
        }

        // Step 2: Initialize the queue for BFS with nodes that have zero in-degrees
        queue<int> q;
        for (const auto& [key, value] : indeg) {
            if (value == 0) {
                q.push(key);
            }
        }

        int semesters = 0;  // Number of semesters needed
        int processedCourses = 0;  // Number of courses that have been processed

        // Step 3: Perform BFS to calculate the minimum semesters
        while (!q.empty()) {
            int size = q.size();
            semesters++;  // Increase the semester count for each level in BFS

            for (int i = 0; i < size; i++) {
                int cur = q.front();
                q.pop();
                processedCourses++;  // Count this course as processed
                for (int child : graph[cur]) {
                    indeg[child]--;  // Reduce the in-degree of the dependent course
                    if (indeg[child] == 0) {
                        q.push(child);  // Add the course to the queue if its in-degree is now zero
                    }
                }
            }
        }

        // Step 4: Check if all courses are processed
        if (processedCourses == n) {
            return semesters;  // Return the number of semesters needed
        } else {
            return -1;  // Return -1 if it is not possible to complete all courses
        }
    }
};
```