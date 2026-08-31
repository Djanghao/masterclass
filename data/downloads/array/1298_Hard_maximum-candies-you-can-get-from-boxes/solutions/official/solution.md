# Official Solution

**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solution/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solution/)

---

[TOC]

## Solution

--- 

### Approach: Breadth-First Search

#### Intuition

We can solve this problem using **breadth-first search** combined with a **queue**.

For the $\textit{i}$-th box, we can only obtain the candies inside if we own the box (either from the beginning or from some other box) and can open it (either it is already open from the beginning or we have obtained the key to it). We use the array $\text{hasBox}$ to indicate whether each box is owned, and the array $\text{canOpen}$ to indicate whether each box can be opened. Before the search begins, we only have the boxes listed in the array $\textit{initialBoxes}$, and can open those boxes corresponding to $\textit{status}$ array values of $\textit{1}$. Any box that meets these two conditions before the search starts is placed into the queue.

During the breadth-first search, in each iteration, we take the box at the front of the queue, $\textit{k}$, open it, and obtain the candies inside, the boxes in $\textit{containedBoxes}[\textit{k}]$, and the keys in $\textit{keys}[\textit{k}]$. We add the candies to the answer and then iterate over each box and each key. When enumerating boxes, if a box can be opened, we add it to the end of the queue; similarly, when enumerating keys, if the corresponding box is already owned, we add that box to the end of the queue. When the queue is empty, the search ends, and we have obtained the maximum number of candies possible.

#### Implementation

<iframe src="https://leetcode.com/playground/JTrKBp4c/shared" frameBorder="0" width="100%" height="500" name="JTrKBp4c"></iframe>

#### Complexity Analysis

+ Time complexity: $O(n^2)$.
  
  The problem does not guarantee that each key appears no more than once across all boxes. While each list of keys is unique per box, the same key can appear in multiple boxes. Similarly, boxes in `containedBoxes` can also repeat. Therefore, during the breadth-first search, we may process up to $O(n^2)$ total keys and contained boxes, resulting in a worst-case time complexity of $O(n^2)$.

+ Space complexity: $O(n)$.
  
  We need to use several arrays and queues, each of length $n$.