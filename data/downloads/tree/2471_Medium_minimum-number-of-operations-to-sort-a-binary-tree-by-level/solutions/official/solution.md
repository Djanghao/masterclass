# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solution/)

---

[TOC]

## Solution

---

### Approach 1: Hash Map

#### Intuition

Our first task is to traverse the tree level by level. This is known as a level order traversal of a tree. Level-order traversal involves exploring all the nodes at a given depth (or level) before moving to the next level. In other words, it prioritizes breadth-wise exploration of the tree before progressing depth-wise. To achieve this, we use Breadth-First Search (BFS).

We use a queue to perform BFS on the tree. As we process each node, we add all its children to the queue. This ensures that after all nodes at the current level are explored, the remaining elements in the queue represent all nodes at the next level. To process nodes at each level together, we can record the size of the queue at the start of each iteration and handle exactly that many nodes in the current level.

Once we retrieve the nodes at each level, our second task is to sort the values of the nodes at that level. While there are many efficient sorting algorithms, the problem specifically requires sorting the values with the minimum number of in-place swaps. The cycle sort algorithm meets our requirements perfectly.

The cycle sort algorithm works by cyclically placing each element in its correct sorted position by swapping it with the value currently in that position. For example, consider the array `[3, 0, 1]`. Since the correct position of `3` is index `2`, we swap it with the value at index `2` (i.e., `1`). After the swap, the array becomes `[1, 0, 3]`. While `3` is now in the correct position, `1` and `0` are still not. Next, we place `1` in its correct position (index `1`), and the process continues until the array is sorted. This cyclical placement gives the algorithm its name, cycle sort.

Returning to the problem, after obtaining the nodes of a level (in an arbitrary order), we create a sorted copy of this list based on the values of the nodes. This allows us to determine the correct sorted index for each value. To efficiently track the positions of nodes, we use a map that stores each value and its current index. As we iterate through the list of nodes, we check if a node is already in its correct position. If not, we perform a swap to move it to the correct position, updating the map accordingly. This process is repeated until all nodes in the level are sorted.

We accumulate the total swaps needed to sort each level. At the end of the BFS, we can return this total as our answer.

> For a more comprehensive understanding of Breadth-First Search on trees, check out the [Queue and BFS Explore Card 🔗](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1376/). This resource provides an in-depth look at the BFS algorithm, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize:
  - a `queue` to store nodes for BFS traversal.
  - a variable `totalSwaps` to track the total number of operations needed.
- Add the `root` node to the queue to begin traversal.
- While the queue is not empty:
  - Get the size of the current level using the queue size.
  - Initialize an array `levelValues` of size equal to the current level size.
  - For each node at the current level:
    - Remove the node from the queue.
    - Store the node's value in the `levelValues` array.
    - Add the left and right children of the current node to `queue` if they exist.
  - Add minimum swaps needed for the current level to `totalSwaps`.
  - Continue to the next level.
- Return `totalSwaps` as the final answer.

For calculating minimum swaps (`getMinSwaps` function):
- Initialize a variable `swaps` to track swaps needed for the current level.
- Create a copy of the input array as the `target` array.
- Sort the `target` array to get the desired order.
- Initialize a map `pos` to store current positions of values.
- Store positions of all values from the original array in the `pos` map.
- For each position in the `original` array:
  - If the value at the current position doesn't match the `target` array:
    - Increment `swaps` counter.
    - Get the position of desired value from `pos`.
    - Update the position of the current value in `pos`.
    - Update value in the `original` array at swapped position.
- Return total `swaps` needed for current level.

#### Implementation

<iframe src="https://leetcode.com/playground/ELALCbfh/shared" frameBorder="0" width="100%" height="500" name="ELALCbfh"></iframe>

#### Complexity Analysis

Let $n$ be the total number of nodes in the binary tree.

- Time complexity: $O(n \log n)$

    The BFS traversal visits each node exactly once, contributing $O(n)$. At each level, we perform sorting of the level values array which costs $O(w \log w)$ where $w$ is the width of that level. 
    
    The position mapping and swap calculations take $O(w)$ time. In the worst case when the tree is a complete binary tree, $w$ could be $n/2$, making the complexity $2 \cdot O(n) + O(n \log n) = O(n \log n)$.

- Space complexity: $O(n)$

    The queue used for BFS will store at most $w$ nodes at any time, where $w$ is the maximum width of the tree at any level. The `levelValues` array also stores $w$ elements for the current level. The map in `getMinSwaps` stores positions for $w$ elements. 
    
    The temporary arrays (`original` and `target`) also use $O(w)$ space. Since all these data structures are bounded by the maximum width of the tree, the overall space complexity is $O(w)$. In the worst case of a complete binary tree, this becomes $O(n)$.

---

### Approach 2: Bit Manipulation

#### Intuition

In the previous solution, we used two arrays - one for the original values and one for the sorted values. Additionally, we needed a map to keep track of the current positions of each value. This required maintaining three separate data structures and constantly updating the hash map during swaps. This approach was cumbersome and took up a lot of redundant space. Let's try to make the swapping process more space-efficient.

The key insight in this new approach is that we can combine a node's value and its position into a single number using bit manipulation. Since the problem guarantees that the values and positions won't exceed $2^{20}$, 20 bits are enough to store either piece of information. Therefore, a 40-bit long integer is technically enough to store both the value and position of a node, where the high 20 bits store the value and the low 20 bits store the original position. Let's see how the encoding works with a concrete example. Say we have a node with value 9 at position 6. To encode this:

1. First, we shift 9 left by 20 bits: $9 << 20$. This moves all the bits of 9 to the left by 20 positions, leaving 20 zeros on the right.
2. Then we add the position: $(9 << 20) + 6$. The 6 fills in some of those right-most zeros.

![](../Figures/2471/encoding.png)

When we need to get back the original position, we use a `MASK` (0xFFFFF). In binary, this mask has twenty 1's. When we perform an AND operation with the encoded value, it's like using a filter that only lets through the rightmost 20 bits — exactly where we stored our position.

![](../Figures/2471/decoding.png)

The rest of the algorithm is similar to the previous approach, with some simplifications to the swapping process. We iterate through the sorted array, and for each position `i`, we check if the original position (extracted using the `MASK`) matches `i`. If it doesn't match, we know we need a swap. We perform the swap and decrement `i` to recheck the current position, as the newly swapped number might also need to be moved. We keep counting the swaps over the entire BFS and return the total count at the end as our answer.

> For a more comprehensive understanding of bit manipulation techniques, check out the [Bit Manipulation Explore Card 🔗](https://leetcode.com/explore/learn/card/bit-manipulation/). This resource provides an in-depth look at the various bit manipulation techniques and their applications in a variety of problems.

#### Algorithm

- Initialize constants `SHIFT` and `MASK` for bit manipulation operations.

- Initialize:
  - a `queue` to store nodes for BFS traversal.
  - a variable `swaps` to track the total number of operations needed.
- Add the `root` node to `queue` to begin traversal.
- While the `queue` is not empty:
  - Get the size of the current level using the `queue` size.
  - Initialize an array `nodes` of type long to store encoded values and positions.
  - For each node at the current level:
    - Remove the node from the `queue`.
    - Encode the node's value and current position into a single long integer:
      - Shift the value left by 20 bits.
      - Add the current position in the lower 20 bits.
    - Store the encoded value in the `nodes` array.
    - Add the left and right children to the `queue` if they exist.
  - Sort the `nodes` array by values (using the higher 20 bits).
  - For each position `i` in the sorted array:
    - Extract the original position from the lower 20 bits using the AND operation with `MASK`.
    - If the original position doesn't match the current position:
      - Swap the nodes at the current and original positions.
      - Decrement `i` to recheck current position.
      - Increment the `swaps` counter.
    - Continue until all the nodes are in the correct positions.
- Return the total `swaps` as the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/nvkiMUoN/shared" frameBorder="0" width="100%" height="500" name="nvkiMUoN"></iframe>

#### Complexity Analysis

Let $n$ be the total number of nodes in the binary tree.

- Time complexity: $O(n \log n)$

    The BFS traversal visits each node exactly once, contributing $O(n)$. At each level, we sort the `nodes` array which takes $O(w \log w)$ time, where $w$ is the width of that level. 
    
    The swapping phase at each level takes $O(w)$ time. In the worst case of a complete binary tree, $w$ could be $n/2$, making the complexity $O(n) + O(n \log n) = O(n \log n)$.

- Space complexity: $O(n)$

    The `queue` used for the BFS will store at most $w$ nodes at any time, where $w$ is the maximum width of the tree at any level. The `nodes` array stores $w$ encoded values for the current level being processed. No additional data structures are needed since positions are encoded within the values themselves. 
    
    Since all space usage is bounded by the maximum width of the tree, the overall space complexity is $O(w)$. In the worst case of a complete binary tree, this becomes $O(n)$.

---