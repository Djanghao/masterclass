# Simple🔥Beginner Friendly Explanation💯| Step-By-Step DFS Implementation🔥🌟

**Author:** atharvaparab9160
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5877248/](https://leetcode.com/problems/remove-methods-from-project/solutions/5877248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be seen as tracking how a buggy method (k) affects other methods in a project, which is like navigating a graph. Here's the simple intuition:

1. **Graph Representation:**
Each method is a node, and each invocation is a directed edge. If method a invokes method b, there's a directed edge from a to b.
2. **Mark Suspicious Methods:**
Start from the buggy method k and use DFS (depth-first search) to mark all methods that k directly or indirectly invokes as "suspicious."
3. **Check for Dependencies:**
Ensure no non-suspicious method depends on a suspicious one. If such a dependency exists, we can't safely remove anything.
4. **Final Output:**
If no external dependencies are found, return the remaining safe methods (those not marked suspicious).

*In short: We find all methods affected by the buggy one using DFS, then check if it\u2019s safe to remove them based on external dependencies.*

# Approach
<!-- Describe your approach to solving the problem. -->
### Steps in the Code:
1. **Graph Representation:**
```
adjacency_list = [[] for _ in range(n)]
for invocation in invocations:
    adjacency_list[invocation[0]].append(invocation[1])
```
- An adjacency list is used to represent the graph where each method (node) can invoke other methods (edges).
- `adjacency_list[a]` stores all methods that method `a` invokes, based on the `invocations` array.
2. **Mark Suspicious Methods Using DFS**:

```
suspicious = [False] * n
stack = deque([k])
suspicious[k] = True
```
- An array `suspicious` is initialized to track which methods are suspicious (i.e., either method `k` or methods that are invoked by `k` directly or indirectly).
- A stack is used to perform a depth-first search (DFS) starting from method `k` to mark all connected methods as suspicious.
3. **Depth-First Search (DFS):**


```
while stack:
    current_method = stack.pop()

    for connected_method in adjacency_list[current_method]:
        if suspicious[connected_method] == False:
            suspicious[connected_method] = True
            stack.append(connected_method)
```
- The DFS starts from method `k`, marking all methods that `k` can reach (directly or indirectly) as suspicious.
- Each time a connected method is found, it is marked as suspicious and added to the stack for further exploration.
- This ensures all methods that can be invoked by method `k` are identified.
4. **Check for External Dependencies**:

```
for method in range(n):
    if suspicious[method] == False:
        for connected_method in adjacency_list[method]:
            if suspicious[connected_method]:
                return list(range(n))
```
- After marking suspicious methods, the code checks if there is any non-suspicious method that invokes a suspicious method.
- If such an external dependency exists (i.e., a non-suspicious method invokes a suspicious method), it's impossible to safely remove the suspicious methods, so the function returns all methods (list(range(n))).
5. **Return Non-Suspicious Methods**:


```
remaining_methods = []
for method in range(n):
    if suspicious[method] == False:
        remaining_methods.append(method)
return remaining_methods
```
- If no external dependencies are found, the code collects and returns the list of non-suspicious methods that can remain in the project.


# Complexity
- **Time complexity:**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. Building the Graph (Adjacency List)  : $$O(m)$$.
2. DFS Traversal : $$O(n + m)$$.
3. Checking for External Dependencies :  $$O(n + m)$$.
4. Total Time Complexity:
***The total time complexity is the sum of the three steps: O(m) + O(n + m) + O(n + m), which simplifies to **$$O(n + m)$$**.***

- **Space complexity:**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

***The space required is O(n + m) for the adjacency list and O(n) for the stack and suspicious array, so the total space complexity is **$$O(n + m)$$*****.

# Code
```python []
from collections import deque

class Solution:
    def remainingMethods(self, n: int, k: int, invocations: List[List[int]]) -> List[int]:
        # Initialize an adjacency list to represent the graph of method invocations
        adjacency_list = [[] for _ in range(n)]

        # Fill the adjacency list with the provided method invocations
        for invocation in invocations:
            adjacency_list[invocation[0]].append(invocation[1])

        # 'suspicious' will track whether a method has been invoked either directly or indirectly
        suspicious = [False] * n
        
        # Stack to perform DFS starting from the given k
        stack = deque([k])
        suspicious[k] = True

        # DFS to mark all reachable methods/node invoked either directly or indirectly starting from 'k'th method ( as k is given as suspicious )
        while stack:
            current_method = stack.pop()

            for connected_method in adjacency_list[current_method]:
                if suspicious[connected_method] == False:
                    suspicious[connected_method] = True
                    stack.append(connected_method)



        # Check if there are any nodes (methods/node) that could connect a suspicious node but are not suspicious themselves
        for method in range(n):
            if suspicious[method] == False:
                for connected_method in adjacency_list[method]:
                    if suspicious[connected_method]:
                        # if we find any node which is connected to a suspicious then we return list of all nodes/mrthods
                        return list(range(n))

        # if we don't find any non suspicioius method connecting a suspicious method then Return the remaining non-suspicious methods/node
        remaining_methods = []
        for method in range(n):
            if suspicious[method] == False:
                remaining_methods.append(method)
        
        return remaining_methods
```
```C++ []
#include <vector>
#include <deque>

using namespace std;

class Solution {
public:
    vector<int> remainingMethods(int n, int k, vector<vector<int>>& invocations) {
        // Initialize an adjacency list to represent the graph of method invocations
        vector<vector<int>> adjacency_list(n);

        // Fill the adjacency list with the provided method invocations
        for (const auto& invocation : invocations) {
            adjacency_list[invocation[0]].push_back(invocation[1]);
        }

        // 'suspicious' will track whether a method has been invoked either directly or indirectly
        vector<bool> suspicious(n, false);
        
        // Stack to perform DFS starting from the given k
        deque<int> stack;
        stack.push_back(k);
        suspicious[k] = true;

        // DFS to mark all reachable methods invoked either directly or indirectly starting from 'k'
        while (!stack.empty()) {
            int current_method = stack.back();
            stack.pop_back();

            for (int connected_method : adjacency_list[current_method]) {
                if (!suspicious[connected_method]) {
                    suspicious[connected_method] = true;
                    stack.push_back(connected_method);
                }
            }
        }

        // Check if there are any nodes (methods) that could connect a suspicious node but are not suspicious themselves
        for (int method = 0; method < n; ++method) {
            if (!suspicious[method]) {
                for (int connected_method : adjacency_list[method]) {
                    if (suspicious[connected_method]) {
                        // If we find any node connected to a suspicious node, return all nodes/methods
                        return generateRange(n); // Generate array [0, 1, ..., n-1]
                    }
                }
            }
        }

        // If we don't find any non-suspicious method connecting a suspicious method, return the remaining non-suspicious methods
        vector<int> remaining_methods;
        for (int method = 0; method < n; ++method) {
            if (!suspicious[method]) {
                remaining_methods.push_back(method);
            }
        }

        return remaining_methods;
    }

private:
    // Function to generate an array [0, 1, ..., n-1]
    vector<int> generateRange(int n) {
        vector<int> range(n);
        for (int i = 0; i < n; ++i) {
            range[i] = i;
        }
        return range;
    }
};
```
```Java []
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

class Solution {
    public List<Integer> remainingMethods(int n, int k, int[][] invocations) {
        // Initialize an adjacency list to represent the graph of method invocations
        List<List<Integer>> adjacencyList = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }

        // Fill the adjacency list with the provided method invocations
        for (int[] invocation : invocations) {
            adjacencyList.get(invocation[0]).add(invocation[1]);
        }

        // 'suspicious' will track whether a method has been invoked either directly or indirectly
        boolean[] suspicious = new boolean[n];

        // Stack to perform DFS starting from the given k
        Deque<Integer> stack = new LinkedList<>();
        stack.push(k);
        suspicious[k] = true;

        // DFS to mark all reachable methods invoked either directly or indirectly starting from 'k'
        while (!stack.isEmpty()) {
            int currentMethod = stack.pop();

            for (int connectedMethod : adjacencyList.get(currentMethod)) {
                if (!suspicious[connectedMethod]) {
                    suspicious[connectedMethod] = true;
                    stack.push(connectedMethod);
                }
            }
        }

        // Check if there are any nodes (methods) that could connect a suspicious node but are not suspicious themselves
        for (int method = 0; method < n; method++) {
            if (!suspicious[method]) {
                for (int connectedMethod : adjacencyList.get(method)) {
                    if (suspicious[connectedMethod]) {
                        // If we find any node connected to a suspicious node, return all nodes/methods
                        List<Integer> allMethods = new ArrayList<>();
                        for (int i = 0; i < n; i++) {
                            allMethods.add(i);
                        }
                        return allMethods;
                    }
                }
            }
        }

        // If we don't find any non-suspicious method connecting a suspicious method, return the remaining non-suspicious methods
        List<Integer> remainingMethods = new ArrayList<>();
        for (int method = 0; method < n; method++) {
            if (!suspicious[method]) {
                remainingMethods.add(method);
            }
        }

        return remainingMethods;
    }
}
```

