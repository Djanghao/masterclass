# Official Solution

**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solution/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/493564000?texttrack=en" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

**DFS vs. BFS**

There are two ways to traverse the tree: DFS _depth first search_ and BFS _breadth first search_. Here is a small summary

![diff](../Figures/1602/traversals.png)

BFS traverses level by level, and DFS first goes to the leaves.

![diff](../Figures/1602/dfs_bfs2.png)

> Which approach to choose, BFS or DFS?

- The problem is to return the nearest node on the same level that is to the right of `u`, so it's way more natural to implement BFS here.

- Time complexity is the same $$\mathcal{O}(N)$$ both for DFS and BFS since one has to visit all nodes.

- Space complexity is $$\mathcal{O}(H)$$ for DFS and $$\mathcal{O}(D)$$ for BFS, where $$H$$ is a tree height, and $$D$$ is a tree diameter. They both result in $$\mathcal{O}(N)$$ space in the worst-case scenarios: skewed tree for DFS and complete tree for BFS.

Let's use the opportunity to check out three different BFS implementations with the queue, Approach 1 - Approach 3.

If you prefer to use DFS on the interviews - check Approach 4.

**BFS implementation**

All three implementations use the queue in a standard BFS way:

- Push the root into the queue.

- Pop-out a node from the _left_.

- Push the _left_ child into the queue, and then push the _right_ child.

![diff](../Figures/1602/implem2.png)

**Three BFS approaches**

The difference is how to identify the end of the level:

- Two queues, one for the previous level and one for the current.

- One queue with a sentinel to mark the end of the level.

- One queue + level size measurement.

<br />
<br />


---
### Approach 1: BFS: Two Queues

Let's use two queues: one for the current level, and one for the next. The idea is to pop the nodes one by one from the current level and push their children into the next level queue.

![diff](../Figures/1602/levels.png)

**Algorithm**

- Initiate two queues: one for the current level, and one for the next. Add root into `nextLevel` queue.

- While `nextLevel` queue is not empty:

    - Initiate the current level: `currLevel = nextLevel`, and empty the next level `nextLevel`.

    - While the current level queue is not empty:

        - Pop-out a node from the current level queue.

        - If this node is `u`, return the next node from the queue. If there are no more nodes in `nextLevel` queue, return `null`.

        - Add first _left_ and then _right_ child node into `nextLevel` queue.

**Implementation**

<iframe src="https://leetcode.com/playground/CPT8KcAd/shared" frameBorder="0" width="100%" height="500" name="CPT8KcAd"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node.

* Space complexity: $$\mathcal{O}(D)$$ to keep the queues, where $$D$$ is a tree diameter. Let's use the last level to estimate the queue size. This level could contain up to $$N/2$$ tree nodes in the case of [complete binary tree](https://leetcode.com/problems/count-complete-tree-nodes/).
<br />
<br />


---
### Approach 2: BFS: One Queue + Sentinel

Another approach is to push all the nodes in one queue and to use a [sentinel node](https://en.wikipedia.org/wiki/Sentinel_node) to separate the levels. Typically, one could use `null` as a sentinel.

![diff](../Figures/1602/sentinel.png)

The first step is to initiate the first level: `root` + `null` as a sentinel. Once it's done, continue to pop the nodes one by one from the left and push their children to the right. Stop each time the current node is `null` because it means we hit the end of the current level. Each stop is a time to push `null` in the queue to mark the end of the next level.

**Algorithm**

- Initiate the queue by adding a root. Add `null` sentinel to mark the end of the first level.

- Initiate the current node as `root`.

- While the queue is not empty:

    - Pop the current node from the queue `curr = queue.poll()`.

    - If this node is `u`, return the next node from the queue. If there are no more nodes in the queue, return `null`.

    - If the current node is not `null`:

        - Add first _left_ and then _right_ child node into the queue.

        - Update the current node: `curr = queue.poll()`.

    - Now, the current node is null, _i.e._ we reached the end of the current level. If the queue is not empty, push the null node as a sentinel, to mark the end of the next level.

**Implementation**

Note that `ArrayDeque` in Java doesn't support null elements, and hence the data structure to use here is `LinkedList`.

<iframe src="https://leetcode.com/playground/4yUuC3po/shared" frameBorder="0" width="100%" height="500" name="4yUuC3po"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node.

* Space complexity: $$\mathcal{O}(D)$$ to keep the queues, where $$D$$ is a tree diameter. Let's use the last level to estimate the queue size. This level could contain up to $$N/2$$ tree nodes in the case of [complete binary tree](https://leetcode.com/problems/count-complete-tree-nodes/).
<br />
<br />


---
### Approach 3: BFS: One Queue + Level Size Measurements

Instead of using the sentinel, we could write down the length of the current level.

![diff](../Figures/1602/length.png)

**Algorithm**

- Initiate the queue by adding a root.

- While the queue is not empty:

    - Write down the length of the current level: `levelLength = queue.size()`.

    - Iterate over `i` from `0` to `level_length - 1`:

        - Pop the current node from the queue: `node = queue.poll()`.

        - If this node is `u`, return the next node from the queue. Check that the next node is on the same level: `i != levelLength - 1`, otherwise return `null`.

        - Add first _left_ and then _right_ child node into the queue.

**Implementation**

<iframe src="https://leetcode.com/playground/Hcdr6xaE/shared" frameBorder="0" width="100%" height="500" name="Hcdr6xaE"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node.

* Space complexity: $$\mathcal{O}(D)$$ to keep the queues, where $$D$$ is a tree diameter. Let's use the last level to estimate the queue size. This level could contain up to $$N/2$$ tree nodes in the case of [complete binary tree](https://leetcode.com/problems/count-complete-tree-nodes/).
<br />
<br />


___
### Approach 4: Recursive DFS: Preorder Traversal

Everyone likes recursive DFS because of its simplicity, so let's add it here as well. The idea is straightforward: to perform a standard preorder traversal of the tree, starting each time from the leftmost child.

**Implementation**

<iframe src="https://leetcode.com/playground/WxtAbVra/shared" frameBorder="0" width="100%" height="500" name="WxtAbVra"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since one has to visit each node.

* Space complexity: $$\mathcal{O}(H)$$ to keep the recursion stack, where $$H$$ is the tree height. The worst-case situation is a skewed tree when $$H = N$$.