# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/4821746/](https://leetcode.com/problems/tree-diameter/solutions/4821746/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private List<Integer>[] graph;
    private int totalNodes;
    private int diameter;

    public int treeDiameter(int[][] edges) {
        if (edges.length == 0) {
            return 0;
        }

        totalNodes = edges.length + 1;
        createGraph(edges);
        depthFirstSearch(0, new boolean[totalNodes]);

        return diameter;
    }

    private int depthFirstSearch(int node, boolean[] visited) {
        int largestDistance = 0;
        int secondLargestDistance = 0;

        visited[node] = true;

        for (int nextNode : graph[node]) {
            int currentDistance = 0;

            if (!visited[nextNode]) {
                currentDistance = 1 + depthFirstSearch(nextNode, visited);
            }

            if (currentDistance > largestDistance) {
                secondLargestDistance = largestDistance;
                largestDistance = currentDistance;
            } else if (currentDistance > secondLargestDistance) {
                secondLargestDistance = currentDistance;
            }
            diameter = Math.max(diameter, largestDistance + secondLargestDistance);
        }
        return largestDistance;
    }

    private void createGraph(int[][] edges) {
        graph = new List[totalNodes + 1];
        for (int i = 0; i < graph.length; ++i) {
            graph[i] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            int firstNode = edge[0];
            int secondNode = edge[1];

            graph[firstNode].add(secondNode);
            graph[secondNode].add(firstNode);
        }
    }
}
```
```JavaScript []
/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
    if (edges.length === 0) {
        return 0;
    }

    this.totalNodes = edges.length + 1;
    this.diameter = 0;
    this.graph = Array.from(new Array(this.totalNodes + 1), () => new Array());

    createGraph(edges);
    depthFirstSearch(0, new Array(this.totalNodes));

    return this.diameter;
};

/**
 * @param {number} node
 * @param {boolean[]}visited
 * @return {number}
 */
function depthFirstSearch(node, visited) {
    let largestDistance = 0;
    let secondLargestDistance = 0;

    visited[node] = true;

    for (let nextNode of this.graph[node]) {
        let currentDistance = 0;
        if (!visited[nextNode]) {
            currentDistance = 1 + depthFirstSearch(nextNode, visited);
        }

        if (currentDistance > largestDistance) {
            secondLargestDistance = largestDistance;
            largestDistance = currentDistance;
        } else if (currentDistance > secondLargestDistance) {
            secondLargestDistance = currentDistance;
        }
        this.diameter = Math.max(this.diameter, largestDistance + secondLargestDistance);
    }
    return largestDistance;
}

/**
 * @param {number[][]} edges
 * @return {void}
 */
function createGraph(edges) {
    for (let [firstNode, secondNode] of edges) {
        this.graph[firstNode].push(secondNode);
        this.graph[secondNode].push(firstNode);
    }
}
```
```C++ []
#include <span>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    vector<vector<int>> graph;
    int totalNodes = 0;
    int diameter = 0;

public:
    int treeDiameter(const vector<vector<int>>& edges) {
        if (edges.empty()) {
            return 0;
        }
        totalNodes = edges.size() + 1;
        createGraph(edges);

        vector<bool> visited(totalNodes);
        depthFirstSearch(0, visited);
        return diameter;
    }

private:
    int depthFirstSearch(int node, vector<bool>& visited) {
        int largestDistance = 0;
        int secondLargestDistance = 0;

        visited[node] = true;

        for (const auto& nextNode : graph[node]) {
            int currentDistance = 0;

            if (!visited[nextNode]) {
                currentDistance = 1 + depthFirstSearch(nextNode, visited);
            }

            if (currentDistance > largestDistance) {
                secondLargestDistance = largestDistance;
                largestDistance = currentDistance;
            }
            else if (currentDistance > secondLargestDistance) {
                secondLargestDistance = currentDistance;
            }
            diameter = max(diameter, largestDistance + secondLargestDistance);
        }
        return largestDistance;
    }

    void createGraph(span<const vector<int>> edges) {
        graph.resize(totalNodes + 1);

        for (const auto& edge : edges) {
            int firstNode = edge[0];
            int secondNode = edge[1];

            graph[firstNode].push_back(secondNode);
            graph[secondNode].push_back(firstNode);
        }
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private IList<int>[]? graph;
    private int totalNodes;
    private int diameter;

    public int TreeDiameter(int[][] edges)
    {
        if (edges.Length == 0)
        {
            return 0;
        }

        totalNodes = edges.Length + 1;
        createGraph(edges);
        depthFirstSearch(0, new bool[totalNodes]);

        return diameter;
    }

    private int depthFirstSearch(int node, bool[] visited)
    {
        int largestDistance = 0;
        int secondLargestDistance = 0;

        visited[node] = true;

        foreach (int nextNode in graph[node])
        {
            int currentDistance = 0;

            if (!visited[nextNode])
            {
                currentDistance = 1 + depthFirstSearch(nextNode, visited);
            }

            if (currentDistance > largestDistance)
            {
                secondLargestDistance = largestDistance;
                largestDistance = currentDistance;
            }
            else if (currentDistance > secondLargestDistance)
            {
                secondLargestDistance = currentDistance;
            }
            diameter = Math.Max(diameter, largestDistance + secondLargestDistance);
        }
        return largestDistance;
    }

    private void createGraph(int[][] edges)
    {
        graph = new List<int>[totalNodes + 1];
        for (int i = 0; i < graph.Length; ++i)
        {
            graph[i] = new List<int>();
        }

        foreach (int[] edge in edges)
        {
            int firstNode = edge[0];
            int secondNode = edge[1];

            graph[firstNode].Add(secondNode);
            graph[secondNode].Add(firstNode);
        }
    }
}
```
