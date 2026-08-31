# Official Solution

**Link:** [https://leetcode.com/problems/ipo/solution/](https://leetcode.com/problems/ipo/solution/)

---

[TOC]

## Solution

--- 

### A Greedy Approach

#### Intuition

When you don't know how to solve the problem completely, think of its simpler subproblems.

Consider a particular case $k=1$. What project is the best to choose when we can finish only one? We want the one that yields the maximum profit. However, the choice is constrained – the project is available only if it requires capital that is not larger than our initial capital. Thus the optimal project is the most profitable among those for which we have enough money to start. If no project is available, we don't have the option to begin any, and the answer is `0`.

It can be generalized for arbitrary $k$. First, we greedily choose the most profitable available project. Then our capital increases by the profit of this project, and some new projects that were unavailable before might become available now. If we choose a project other than the most profitable one, our capital increases by a value less than the maximum possible, and fewer new options become available. It means we should greedily choose the maximum profit every time. We can repeat this process of choosing the most profitable project and then updating the projects we can afford until we finish $k$ projects or cannot afford any new ones.

Now the problem breaks into two parts: finding new available projects after finishing the previous one and finding the most profitable available project.

To handle the first part, we make the following observation: when our capital grows, we have more options to choose from, and the smaller `capital` a project requires, the sooner it becomes available. Thus we can sort the projects by increasing `capital` and keep a pointer to the first unavailable project. As we gain more money, we can increment this pointer to unlock more projects.

For the second part of the problem, we need a data structure for maintaining available projects that can perform the following operations:
* insert an element (for adding a new available project),
* get the maximum element (for choosing the best project),
* delete the maximum element (for finishing the best project).

The data structure with the above properties is a [priority queue](https://en.wikipedia.org/wiki/Priority_queue). The priority of a project is its profit.

It leads us to the following algorithm.

#### Algorithm

1. Sort the projects by increasing `capital`. Keep a pointer `ptr` to the first unavailable project in the sorted array.
2. Maintain a priority queue for the profits of available projects. Initially, the priority queue is empty.
3. Do the following $k$ times:
	* Add to the priority queue the profits of the newly available projects. We move the pointer through the sorted array when new projects become available.
	* If the priority queue is empty, terminate the algorithm.
	* The maximum value in the priority queue is the profit of the project we will start now. Increase our capital by this value. Delete it so since we can not use it anymore.


#### Implementation


<iframe src="https://leetcode.com/playground/48fU2vMo/shared" frameBorder="0" width="100%" height="500" name="48fU2vMo"></iframe>

#### Complexity Analysis

Let $n$ be the number of projects.

* Time complexity: $O(n \log n)$. Sorting the projects by increasing `capital` takes $O(n \log n)$ time. Also, we perform $O(n)$ operations with the priority queue, each in $O(\log n)$.

* Space complexity: $O(n)$. The sorted array of projects and the priority queue take linear space.