# Official Solution

**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solution/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solution/)

---

[TOC]

## Solution

---
### Overview

Like many grid search problems where the goal is to find the shortest path, the key to solve this problem is to apply the Breadth-First Search algorithm, as opposed to the Depth-First Search (DFS) algorithm.
In this article, we will start with a classic BFS solution.
Then on top of BFS, we will introduce a heuristic (greedy) strategy to speed up the algorithm, which eventually transforms our classic BFS algorithm into another classic algorithm called the [A* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm).


---
### Approach 1: BFS (Breadth-First Search)

**Intuition**

In this problem, we must traverse the grid to reach a *target* cell, while the grid contains some obstacles.
If the problem ends here, one could probably tell that this is a classic grid search problem, _e.g._ the problem of [1730. Shortest Path to Get Food](https://leetcode.com/problems/shortest-path-to-get-food/) fits the bill exactly.

However, the particularity of this problem is that one can eliminate obstacles to a certain extent.
This constraint complicates our problem.
First of all, if there were no limit on how many obstacles we can eliminate, then the shortest distance to reach the target cell would be the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) between the starting cell and the target cell.
Likewise, if the quota to eliminate the obstacles is greater than the Manhattan distance, then the shortest distance is guaranteed to be the Manhattan distance.
However, we do have a limit on the number of obstacles that we can eliminate along the way.
As a result, rather than taking a *straightforward* path to reach the target, we have to take some _detour_ in certain cases, which implies that we need to **explore** all possible directions while respecting the constraint.

>By *exploring*, we refer to the BFS strategy, rather than DFS.
The BFS algorithm works like detecting an object with sonar.
A sound wave propagages in all directions with equal speed.
At any given moment, all the objects that the sound wave reaches have the same distance to the source of the sound.
On the other hand, as soon as the sound wave reaches the object, the path is guaranteed to be the **shortest**, since the distance is proportional to the time, the more time it takes, the longer the distance is.

![BFS demo](../Figures/1293/1293_bfs.png)

Given the above intuition of the BFS algorithm, we can rest assured that as soon as we reach the target, the path that leads to the target is the shortest.
This is also the rationale for why we should employ the BFS strategy rather than DFS.

**Algorithm**

In the canonical implementation of the BFS algorithm, we would employ a **queue** data structure to maintain the order of exploration.
Each element in the queue normally contains two pieces of information: the current position and the distance traveled so far from the starting point.

>However, in our problem here, we need another piece of information, which is the **remaining** quota that we can use to eliminate the obstacles.

Together with the coordinates, the obstacle elimination quota uniquely constitutes a **_state_** during our BFS exploration.
For example, in the following graph, we demonstrate two different paths between the start cell and an intermediate cell.

![BFS with two paths](../Figures/1293/1293_bfs_two_paths.png)

Without the obstacle elimination quota, we would only visit the intermediate cell once, while only one of the two paths can lead us to the target, since in one of the paths we don't have sufficient quota to get through.
Therefore, it is critical to keep the quota information, so that we can revisit the same cell with different quotas.

**Implementation**

There are several ways to implement a BFS algorithm.
We provide [a template](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) to do so in the Queue and Stack Explore Card.

In this section, we provide some sample implementations together with the tweak we mentioned in the above section.

We can break down the algorithm into the following steps:

1. The main body of the BFS algorithm consists of a loop around a `queue`, as well as a set called `seen` which keeps track of all the states visited along the way so that we don't visit the same _state_ twice. A _state_ refers to a unique combination of coordinates and the remaining quota.

2. At each iteration of the loop, we pop out one element from the queue. The element contains the distance from the starting point as well as the current `state` which includes the current coordinate and the remaining quotas to eliminate obstacles.

3. Within the same iteration, we evaluate the next moves starting from the popped element. Each move results in a new state and the state is valid if it is within the grid boundaries and has not been visited before. Each valid state is pushed into the queue for later iterations. Meanwhile, we also need to mark the state as _visited_ by adding the state to the `seen` states set.

4. At any iteration, if we have reached our `target`, we can return immediately from the loop.

**_Note:_** before running the BFS traversal, we also perform a quick check to see if we have sufficient quotas to take the most direct path from start to finish regardless of the number of obstacles.
If so, the shortest distance to reach the target is the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) between the starting cell and the target cell.

<iframe src="https://leetcode.com/playground/RbaWf83A/shared" frameBorder="0" width="100%" height="500" name="RbaWf83A"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of cells in the grid, and $$K$$ be the quota to eliminate obstacles.

- Time Complexity: $$O(N \cdot K)$$

    - We conduct a BFS traversal in the grid. In the worst case, we will visit each cell in the grid. And for each cell, at most, it will be visited $$K$$ times, with different quotas of obstacle elimination.

    - Thus, the overall time complexity of the algorithm is $$O(N \cdot K)$$.

- Space Complexity: $$O(N \cdot K)$$

    - We used a `queue` to maintain the order of visited states. In the worst case, the queue will contain the majority of the possible states that we need to visit, which in total is $$N \cdot K$$ as we discussed in the time complexity analysis. Thus, the space complexity of the `queue` is $$O(N \cdot K)$$.

    - Other than the `queue`, we also used a set variable (named `seen`) to keep track of all the visited states along the way. Same as the `queue`, the space complexity of this set is also $$O(N \cdot K)$$.

    - To sum up, the overall space complexity of the algorithm is $$O(N \cdot K)$$.


---
### Approach 2: A* (A Star) Algorithm

**Intuition**

In the above BFS approach, one might notice that when at any specific position, we would _systematically_ explore the surrounding neighbors in all four directions, due to the nature of BFS.

However, the action might seem *conterintuitive* or **sub-optimal**.
Since the destination is located in the lower-right corner of the grid, in order to find the shortest path, the optimal directions to explore should be either **_right_** or **_down_**, rather than left or up.

![BFS with two paths](../Figures/1293/1293_next_steps.png)

As depicted in the above image, the optimal steps to explore should be the ones in green (right and down), rather than the ones in orange.

>Therefore, one idea to improve our BFS approach is to **_prioritize_** exploring the most _promising_ directions at each step. Through prioritization, we can speed up the algorithm by reducing the time spent exploring less promising paths.

This idea leads us to the [A* search algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm), which is yet another classic path finding algorithm that uses a **_heuristic_**.


Note: we cannot **exclude** (or prune) those less promising directions, otherwise we might miss the correct path because sometimes we have to take a **_detour_** in order to reach the destination.

**Algorithm**

A* (pronounced as A star) is also known as an [informed search algorithm](https://en.wikipedia.org/wiki/Search_algorithm#Informed_search) or [best-first search](https://en.wikipedia.org/wiki/Best-first_search).
Because at each step of exploration, it makes the **_best_** and **_informed_** decision on the next steps, _i.e._ it _prioritizes_ the steps that are the most promising.
Specifically, this prioritization strategy can be expressed as _A* selects a path that minimizes the following function_:$$f(n) = g(n) + h(n)$$

- $$n$$: a specific step during the exploration.

- $$g(n)$$: the cost to reach the step $$n$$. Here, the cost refers to the distance traveled so far to the step $$n$$.

- $$h(n)$$: a heuristic **_estimation_** on the cost to reach the destination from the step $$n$$. Here, the cost refers to the distance ahead.

- $$f(n)$$: the _estimated_ total cost to reach the destination if one takes the step $$n$$.

>With the defined function, A* algorithm has a deterministic way to **_evaluate_** each potential step, and then make what it believes to be the _best_ decision at each step.

The problem boils down to defining the above functions for our scenario, in order to apply the A* algorithm.
Specifically, $$g(n)$$ would be the number of steps that one has taken to reach $$n$$.
And $$h(n)$$ would be the [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) from $$n$$ to the destination, which is the **_shortest_** path to reach the destination.

>The most important property of our heuristic $$h(n)$$ function is that the function should be [admissible](https://en.wikipedia.org/wiki/Admissible_heuristic), _i.e._ it never **_overestimates_** the cost.
Otherwise, it could not guarantee that the path we find is the shortest one.

To understand the _admissible_ property, let us take a metaphor. In a football tournament, we want to select the best team in the end.
If we __overestimate__ the incompetence of a team, _i.e._ we downplay the potential of the team, we might _prematurely_ disqualify or ignore the team.
As a result, we may predict that a _not-so-good_ team will win the championship, while in reality, the team we disqualified or ignored happens to be the best team.


**Implementation**

The A* algorithm provides a more optimized path selection strategy, on top of the BFS approach.
Therefore, we can implement the A* algorithm while keeping the bulk of our previous BFS approach intact.
We will still use a `queue` to keep track of the order of visits.
And we will still use a `set` to keep track of the visited states so that we do not revisit any previously explored paths.

Additionally, here are the modifications that we will make:

- Rather than using a normal queue, we use a [priority queue](https://en.wikipedia.org/wiki/Priority_queue) to store the order of visits. The order of visits is based on the estimated total cost function $$f(n)$$ that we defined. With the priority queue, the step that has potentially the _lowest_ cost will be visited first.

- For each element in the queue, we add one more piece of information which is the _**estimated total cost**_ to reach the destination at each step. This estimation will be used to prioritize each potential next step.

- We add another **_heuristic condition_** that allows us to determine the length of the shortest path without exploration. The condition is as follows:

  - At any step, if the remaining quota to eliminate the obstacles is larger than the length of the estimated shortest path (_i.e._ manhattan distance between the current step and the destination), then the length of the remaining path is the manhattan distance.

  - The condition can also be interpreted as if we have sufficient capacity to remove any obstacle along the way, we will simply take the shortest path to reach the destination, without the need for further exploration.

  - We apply the condition at the beginning of each iteration of the loop.


<iframe src="https://leetcode.com/playground/Jwc7mhYq/shared" frameBorder="0" width="100%" height="500" name="Jwc7mhYq"></iframe>



**Complexity Analysis**

Let $$N$$ be the number of cells in the grid, and $$K$$ be the quota to eliminate obstacles.

- Time Complexity: $$O\big(N \cdot K \cdot \log{(N \cdot K)} \big)$$

    - We conduct a BFS traversal in the grid. In the worst case, we will visit each cell in the grid. And each cell can be visited at most $$K$$ times, with different quotas of obstacle elimination. Therefore, the total number of visits would be $$N \cdot K$$.

    - For each visit, we perform one push and one pop operation in the priority queue, which takes $$O\big(\log{(N \cdot K)} \big)$$ time.

    - Thus, the overall time complexity of the algorithm is $$O\big(N \cdot K \cdot \log{(N \cdot K)} \big)$$.

    - Although the upper bound for the time complexity of the this algorithm is higher than the previous BFS approach, on average, the A* algorithm will outperform the previous BFS approach when there exists any relatively direct path from the source to the target.


- Space Complexity: $$O(N \cdot K)$$

    - We use a `queue` to maintain the order of visited states. In the worst case, the queue could contain the majority of the possible states that we must visit, which in total is $$N \cdot K$$, as we discussed in the time complexity analysis. Thus, the space complexity of the `queue` is $$O(N \cdot K)$$.

    - Other than the `queue`, we also used a set variable (named `seen`) to keep track of all the states we visited along the way. Again, the space complexity of this set is also $$O(N \cdot K)$$.

    - To sum up, the overall space complexity of the algorithm is $$O(N \cdot K)$$.



---