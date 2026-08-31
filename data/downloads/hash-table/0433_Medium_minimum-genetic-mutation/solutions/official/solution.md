# Official Solution

**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solution/](https://leetcode.com/problems/minimum-genetic-mutation/solution/)

---

[TOC]

## Solution

---

### Approach: BFS (Breadth-First Search)

**Intuition**

We can imagine the problem as a graph. Each gene string is a node, and mutations are the edges. Two nodes have an edge (are neighbors) if they differ by one character. The added constraints are that the characters must be one of `"ACGT"`, and each node must be in `bank`.

Then, the problem is simplified: what is the shortest path between `start` and `end`? When a graph problem involves finding a shortest path, BFS should be used over DFS. This is because with BFS, all nodes at distance `x` from `start` will be visited before any node at distance `x + 1` will be visited. Once we find the target (`end`), we know that we found it in the shortest number of steps possible.

**Algorithm**

Perform a BFS starting from node `start`. Keep track of the number of steps taken so far and return that number of steps when we find `end`. Only traverse to nodes that are in `bank`. Neighbors can be found by iterating over each `node` and replacing one of the characters with a character from `"ACGT"`.

To check if a node is in `bank`, we would normally first convert `bank` to a set to have $$O(1)$$ checking. However, the problem's constraints state that `0 <= bank.length <= 10`. With such a small constraint, it may actually be slower to use a set due to the overhead associated with hashing. Therefore, we will keep `bank` as an array.

1. Initialize a queue `queue` and a set `seen`. The queue will be used for BFS and the set will be used to prevent visiting a node more than once. Initially, the queue and set should hold `start`.

2. Perform a BFS. At each `node`, if `node == end`, return the number of steps so far. Otherwise, iterate over all the neighbors. For each `neighbor`, if `neighbor` is not in `seen` and `neighbor` is in `bank`, add it to `queue` and `seen`.

3. If we finish the BFS and did not find `end`, then the task is impossible. Return `-1`.

**Implementation**

<iframe src="https://leetcode.com/playground/frH7oTFv/shared" frameBorder="0" width="100%" height="500" name="frH7oTFv"></iframe>


**Complexity Analysis**

* Time complexity: $$O(B)$$, where $$B$$ = `bank.length`.

    As stated before, this is because we are not converting `bank` to a set due to the low size. If we did convert bank to a set however, it would still cost $$O(B)$$ to do so. Checking if a `neighbor` is in the `bank` costs $$O(B)$$ with an array.

    Technically, the BFS runs in constant time because the problem limits the length of the gene strings to `8` and the strings can only have `4` characters. However, let's say the gene strings could have length $$n$$ and could have $$m$$ kind of characters. In this problem, we have $$n=8$$ and $$m=4$$. Then, how many possible nodes are there? There would be $$m^n$$ possible nodes, because for each of the $$n$$ characters, there are $$m$$ options.

    If we are to analyze the complexity like this, let's assume that we are converting `bank` to a set prior to the BFS. In that case, the time complexity would be $$O(nB + m^n \cdot n^2 \cdot m)$$. Converting `bank` costs $$O(nB)$$, then there are $$m^n$$ states that we could visit. At each state, we perform a nested for loop which iterates $$n \cdot m$$ times, and also perform string operations which cost $$O(n)$$.

* Space complexity: $$O(1)$$

    Same logic as before, because the problem limits the input explicitly, we technically use constant space.

    However, with the same scenario as above, the space complexity would be $$O(nB + m^n)$$. Converting `bank` to a set would create a set that takes up $$O(nB)$$ space, and then the `seen` set could grow to $$m^n$$ size if all states are visited.
    
<br/>

---