# JS/TS Solution Floyd-Warshall Algorithm

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5795650/](https://leetcode.com/problems/course-schedule-iv/solutions/5795650/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
Floyd-Warshall Algorithm
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity: O(N ^ 3)
- The time complexity of this solution is O(n^3) where n is the number of courses. This is because we are using the Floyd-Warshall algorithm to compute the transitive closure of the graph, which has a time complexity of O(n^3). 

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(N * N)
- The space complexity is O(n^2) because we are using a 2D array of size n x n to store the adjacency matrix for the prerequisite graph. 

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */

var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    // Step 1: Create the adjacency matrix for the prerequisite graph
    let dp = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

    // Fill the adjacency matrix with direct prerequisites
    for (let [a, b] of prerequisites) {
        dp[a][b] = true; // a is a prerequisite of b
    }

    // Step 2: Use Floyd-Warshall to compute the transitive closure
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (dp[i][k] && dp[k][j]) {
                    dp[i][j] = true;  
                }
            }
        }
    }

    // Step 3: Answer each query in constant time
    let answer = [];
    for (let [a, b] of queries) {
        answer.push(dp[a][b]);
    }

    return answer;
};

```