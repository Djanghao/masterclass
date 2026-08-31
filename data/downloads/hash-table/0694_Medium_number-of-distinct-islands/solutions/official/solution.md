# Official Solution

**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solution/](https://leetcode.com/problems/number-of-distinct-islands/solution/)

---

[TOC]

## Video Solution

<div>
  <div class="video-container">
    <iframe src="https://player.vimeo.com/video/509042230" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
</div>

</br>

## Solution Article

---

### Overview

There are two parts to this problem.

1. Finding every island. We can do this with a straightforward depth-first search (DFS). Check out our relevant [Explore Card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/1377/) if you are not already familiar with DFS.
2. Determining whether or not two islands are the same. This part is more difficult and is the focus of this article. 

</br>

---

### Approach 1: Brute Force

**Intuition**

Assume we've already used a DFS to make a list of islands, where each island is represented as a list of coordinates. We now need to determine how many of these islands actually have a unique shape. 

Since two islands are the same if one can be translated to the other, we can translate each island so that it is as pushed as far into the top left as possible. By doing this, two islands that are the same shape, but in different locations, will now have identical coordinates. For example, if an island is made from cells `[(2, 1), (3, 1), (1, 2), (2, 2)]`, it would become `[(1, 0), (2, 0), (0, 1), (1,1)]` when anchored at the top-left corner.

![The 4-cell island described above is moved as far up and left as possible.](../Figures/694/image_1.png)

Similarly, the island made from cells `[(2, 0), (3, 0), (1, 1), (2, 1)]` will also become `[(1, 0), (2, 0), (0, 1), (1,1)]`. 

![The 4-cell island described above is moved as far up and left as possible.](../Figures/694/image_2.png)

**Algorithm**

1. Use DFS to make a list of islands, where each island is a list of coordinates. 
3. Initialize a `count` of the number of unique islands to `0`.
3. For each island, compare it cell-by-cell to every other island. If it is found to be unique, increment `count` by 1.
4. Return the value of `count`.

Order doesn't matter, so the two islands `[(0, 1), (0, 2)]` and `[(0, 2), (0, 1)]` should be considered as identical. However, we can avoid the need to worry about order by ensuring that two islands of the same shape are initially discovered from the same relative cell. Then from there, the DFS will always visit the cells in the same relative order. This is easy to do: we can simply search for islands by iterating left to right, top to bottom. This way, each island will always be discovered from the leftmost cell in its top row. The diagram below shows the first cell discovered for each island, using this traversal order. Notice that islands of the same shape are first discovered from the same relative cell.

![Various islands, and their first cell that will be discovered is marked.](../Figures/694/image_3.png)

We can also make one other clever observation: we can simply translate each island so that *the first cell of the island that is discovered is on `(0, 0)`*. If, for example, an island contains the cells `[(2, 3), (2, 4), (2, 5), (3, 5)]`, we subtract `(2, 3)` off each cell to get `[(0, 0), (0, 1), (0, 2), (1, 2)]`.

<iframe src="https://leetcode.com/playground/fCE5TcvQ/shared" frameBorder="0" width="100%" height="500" name="fCE5TcvQ"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(M^2 \cdot N^2)$$.

    In the worst case, we would have a large grid, with many unique islands all of the same size, and the islands packed as closely together as possible. This would mean that for each island we discover, we'd be looping over the cells of all the other islands we've discovered so far. For example, here's a grid with $$M = 10$$, $$N = 10$$, and islands all of size 5.

    ![A 10-by-10 grid with 12 pentominoes (islands with 5 cells) fitted into it.](../Figures/694/image_4.png)

    A detailed analysis of this approach is well beyond the scope of LeetCode and job interviews. So the remainder of this discussion is an informal introduction to the key ideas that you would need to investigate in order to prove the time complexity and is provided only for interest purposes.

    Shapes that are made by connecting square-shaped cells together are called [polyominos](https://en.wikipedia.org/wiki/Polyomino). Polynominos are grouped into sets of particular sizes. For example, the set of all polyominos made of 5 square cells (like the ones in the example just above) is called [pentominoes](https://en.wikipedia.org/wiki/Pentomino). 

    In worst cases use the smallest possible polyomino size that allows tiling at least half of the grid with all unique islands. This maximizes the number of times that we have to iterate over all cells of all islands. 

    So, how many polyominos are there of each size? The answer to this is given by [OEIS:A001168](https://oeis.org/A001168). As you can see, this is a very fast-growing sequence - there are $$36446$$ polyominos of size $$10$$! Just by looking at this, you can hopefully see that as the size of the grid we want to put islands in grows, the size of the islands we'll need to use grows *very* slowly! This relatively small size maximizes the amount of repeated iteration we'll need to do over the island list.

* Space complexity: $$O(N \cdot M)$$. 

    The `seen` set requires $$O(N \cdot M)$$ memory. Additionally, each cell with land requires $$O(1)$$ space in the `islands` array. 

</br>

---

### Approach 2: Hash By Local Coordinates 

**Intuition**

The previous approach is *inefficient* because the operation for determining whether or not an island is unique requires looping through every coordinate of every island discovered so far. 

Instead of comparing islands by looping over coordinates, we could simply calculate a **hash** for each island in such a way that ensures two identical islands have the same hash value. These hashes could then be put into a hash set. Since sets don't store duplicates, the number of islands in the hash set once we're done would be equal to the number of unique islands.

> **Words of Advice:** Confused by this approach? If you don't have much experience with hashing algorithms, it's unlikely that you would have been able to come up with this approach on your own. As practice makes perfect, we recommend checking out our [Explore Card on Hash Tables](https://leetcode.com/explore/learn/card/hash-table/) once you're done with this problem. Hashing is a very powerful technique for reducing time complexities and is an important part of designing complicated real-world algorithms in many areas, such as artificial intelligence. 

**Implementation**

The best way of implementing this is language-dependent. 

In Java, we can actually represent each island as a `HashSet` of `Pair`s, with one `Pair` for each cell. We can then put all of the islands into another `HashSet`, and this will hash the `HashSet`s that represent the islands. 

In Python, there is a data structure called a [`frozenset`](https://docs.python.org/3/library/stdtypes.html#frozenset) that we have to use instead, as unlike Java, Python doesn't allow inserting a `set` into another `set`. A `frozenset` is an immutable `set`.

<iframe src="https://leetcode.com/playground/YzCT7HLJ/shared" frameBorder="0" width="100%" height="500" name="YzCT7HLJ"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows, and $$N$$ be the number of columns.

* Time Complexity: $$O(M \cdot N)$$. 

    We're inserting each cell into a hash table (corresponding to the island it is a part of), and then inserting each of those hash tables into another hash table. 
    
    The cost of inserting each of the $$M \cdot N$$ cells into its initial hash table is $$O(1)$$, so those insertions have a total complexity of $$O(M \cdot N)$$. 

    To insert the "island" hash tables into the final hash table, each of them has to (within the library code) be hashed by a hash function. While often we assume that the process of hashing is $$O(1)$$, in this we can't as the inputs to be hashed could be arbitrarily large. So instead, the cost of hashing them is linearly proportional to the number of cells in the hash table being hashed. Each cell is essentially getting hashed once in this process too though (as each can only be a part of one island), and so this part is also $$O(M \cdot N)$$.

    As both phases have a time complexity of $$O(M \cdot N)$$, this is the total time complexity.

    Be aware that the time complexity of this approach is *dependent on a good hash function*. The built-in hash functions for Java and Python seem okay, but I recommend being very careful. A poor hash function would lead to performance comparable to Approach 1. 

* Space complexity: $$O(M \cdot N)$$. The `seen` set is the biggest use of additional memory.


</br>

---

### Approach 3: Hash By Path Signature

**Intuition**

Remember how we didn't need to sort islands in Approach 1? When we start a depth-first search on the top-left square of some island, the path taken by our depth-first search will be the same if, and only if, the shape is the same. We can exploit this by using the path as a hash. 

**Algorithm**

Each time we discover the first cell in a new island, we initialize an empty string. Then each time `dfs` is called for that island, we first determine whether or not the cell being entered is un-visited land, in the same way as before. If it is, then we append the direction we entered it from to the string. For example, this is the path that our algorithm would follow to explore the following island.

![The path taken to explore a large island.](../Figures/694/image_5.png)

This path will be encoded as `"RDDRUURRUL"`. 

There's one thing we need to be cautious of. The three islands below would have the same encoding of `RDDDR`.

![3 islands that hash to the same path, using the scheme described above.](../Figures/694/image_6.png)

The solution to this is that we also need to record where we *backtracked*. This occurs each time we *exit* a call to the `dfs(...)` function. We'll do this by appending a `0` to the string.

![The same 3 islands as above, also showing the back movements.](../Figures/694/image_7.png)

In this way, the islands will now have the encodings of `RDDDR`, `RDDD0R`, and `RDDD00R`.

<iframe src="https://leetcode.com/playground/383CepV9/shared" frameBorder="0" width="100%" height="500" name="383CepV9"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of rows, and $$N$$ be the number of columns.

* Time Complexity: $$O(M \cdot N)$$. Same as Approach 2.

* Space complexity: $$O(M \cdot N)$$. Same as Approach 2.