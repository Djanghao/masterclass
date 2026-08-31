# Official Solution

**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solution/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solution/)

---

[TOC]

## Solution

--- 
### Overview

There are $N$ employees in a company with IDs from $0$ to $N - 1$; the company forms a tree structure with the root as `headID`.  Each employee except the `headID` has a manager, which is present in the array `manager`. Also, each employee needs some time to inform their subordinates of any piece of information, which is provided by the array `informTime`. An employee passes on the information to all the subordinates at the same time. We need to find out how long it takes for all the employees to receive the information from the head employee.

If we know when each employee will know the information, we can just find the maximum of all and return that. Hence, we need to find a way to iterate over all the employees with keeping the time they were made aware of the information. In this article, we will discuss two ways of iterating with the constraints we need.

The image below is showing a tree structure with thirteen employees, each having an informing time as shown in the array. The numbers above each node are when they receive the information, hence the `headID` has the information at `0`, and its subordinates get it at `informTime[headID]` and so on.

![fig](../Figures/1376/1376A.png)
</br>

---


### Approach 1: Depth-First Search (DFS)

**Intuition**

Before we use any iterating algorithm, we need to prepare the tree in a way we can iterate quickly. The information starts from the `headID` at time `0`, then it traverses to its subordinates at the time `informTime[headID]`, and then their subordinates pass it on to their subordinates, and so on. Therefore, we need the parent-to-child relationship to iterate instead of the child-to-parent relationship that we have in the input. To do this, we would create an edge from `manager[i]` to `i` when the `manager[i]` isn't `-1`.

We start the DFS from the root node, i.e. `headID` with the `time` as `0`, then we iterate over its subordinates with `time` as `time + informTime[parent]`. Before we iterate over the subordinates, we update the variable `maxTime`, which is the maximum `time` we have seen so far. In the end, we can just return the `maxTime`, which is the time for the employee that got the information at last.

Note that we don't have to keep track of the nodes we have traversed, as the structure we are traversing over is a directed tree without any cycles. Hence, we will never visit a node twice.

**Algorithm**

1. Create an adjacency list `adjList`; the $$i^{th}$$ index here would store the adjacent nodes to the employee with ID `i`.
2. Iterate over the employees from `0` to `N - 1`, and for each employee `i`, store an edge `manager[i] -> i` if `manager[i]` isn't `-1`.
3. Start the DFS with node `headID` and `time` as `0` for each node as `curr`:

   i. Update the maximum time we have seen, `maxTime`, by comparing it with `time`.

   ii. Iterate over the adjacent nodes of `curr`, and for each adjacent node, perform DFS with time as `time + informTime[curr]`.
4. When the DFS is finished, return `maxTime`.

**Implementation**


<iframe src="https://leetcode.com/playground/PwtqvsQS/shared" frameBorder="0" width="100%" height="500" name="PwtqvsQS"></iframe>


**Complexity Analysis**

Here, $N$ is the number of employees.

* Time complexity: $O(N)$.

  We first iterate over the employees to create the adjacency list; then, we perform the DFS, where we iterate over each node once to find when they get the information from `headID`.

* Space complexity: $O(N)$.

  The size of the adjacency list is $N$, and there will be only $N - 1$ edges in the tree. There will be some stack space needed for DFS. The maximum active stack calls would equal the number of nodes for a skewed tree. Hence the total space complexity would be $O(N)$.
  <br/>

---
### Approach 2: Breadth-First Search (BFS)

**Intuition**

The other way to iterate over nodes while keeping the time it takes to get information is using Breadth-First Search (BFS). We can start from the `headID` with time as `0` and for each child node, put all the subordinates in the queue with time as `informTime[parent]`. Then similar to the DFS approach, we will update the maximum time we have seen so far, `maxTime` each time we extract a node from the queue. Also, we don't need to keep track of visited nodes just like we didn't in DFS, as there aren't any cycles.

**Algorithm**

1. Create an adjacency list `adjList`; the $$i^{th}$$ index here would store the adjacent nodes to the employee with ID `i`.
2. Iterate over the employees from `0` to `N - 1`, and for each employee `i`, store an edge `manager[i] -> i` if `manager[i]` isn't `-1`.
3. Initialize a queue `q` of pairs of integers. The first integer is the ID of an employee, and the second integer is the time at which this employee gets the information.
4. Insert the first entry into the queue as `(headID, 0)`.
5. Keep extracting pairs from the queue until it's empty. For each pair, update the `maxTime` first and then push each subordinate of the current employee with the additional time required to inform the subordinates via `informTime`.
6. Return `maxTime` when the BFS is finished.

**Implementation**


<iframe src="https://leetcode.com/playground/QdbNiyej/shared" frameBorder="0" width="100%" height="500" name="QdbNiyej"></iframe>


**Complexity Analysis**

Here, $N$ is the number of employees.

* Time complexity: $O(N)$.

  We first iterate over the employees to create the adjacency list; then, we perform the BFS, where we iterate over each node once to find when they get the information from `headID`.

* Space complexity: $O(N)$.

  The size of the adjacency list is $N$, and there will be only $N - 1$ edges in the tree. Also, the size of the queue could be at max $O(N)$. Hence the total space complexity would be $O(N)$.
  <br/>

---