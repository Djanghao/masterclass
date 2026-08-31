# Official Solution

**Link:** [https://leetcode.com/problems/clone-graph/solution/](https://leetcode.com/problems/clone-graph/solution/)

---

[TOC]

## Solution
---

### Approach 1: Depth First Search

**Intuition**

> Note: As we can see this question has garnered a lot of negative reviews. It has a lot more dislikes than the likes. We have tried to improve the problem statement to make it more understandable. However, these are the kinds of situations you might get into in an interview when the problem statement might look a little absurd. What is important then is to ask the interviewer to clarify the problem. This problem statement was confusing to me as well initially and that's why I decided to write the solution hoping to clarify most of the doubts that the readers might have had.

The basic intuition for this problem is to just copy as we go. We need to understand that we are dealing with a graph and this means a node could have any number of neighbors. This is why `neighbors` is a list. What is also crucial to understand is that we don't want to get stuck in a cycle while we are traversing the graph. According to the problem statement, any given undirected edge could be represented as two directional edges. So, if there is an undirected edge between node `A` and node `B`, the graph representation for it would have a `directed` edge from `A to B` and another from `B to A`. After all, an undirected graph is a set of nodes that are connected together, where all the edges are bidirectional. How else would you say that `A` could be reached from `B` and `B` could be reached from `A`?

<center>
<img src="../Figures/133/133_Clone_Graph_1.png" width="200"/>
</center>

To avoid getting stuck in a loop we would need some way to keep track of the nodes which have already been copied. By doing this we don't end up traversing them again.

**Algorithm**

1. Start traversing the graph from the given node.

2. We would take a hash map to store the reference of the copy of all the nodes that have already been visited and cloned. The `key` for the hash map would be the node of the original graph and corresponding `value` would be the corresponding cloned node of the cloned graph. If the node already exists in the `visited` we return corresponding stored reference of the cloned node.

    For a given edge `A - B`, since `A` is connected to `B` and `B` is also connected to `A` if we don't use `visited` we will get stuck in a cycle.

    <center>
    <img src="../Figures/133/133_Clone_Graph_2.png" width="600"/>
    </center>

3. If we don't find the node in the `visited` hash map, we create a copy of it and put it in the hash map. Note, how it's important to create a copy of the node and add to the hash map before entering recursion.

    <pre>
      clone_node = Node(node.val, [])
      visited[node] = clone_node
    </pre>

    In the absence of such an ordering, we would be caught in the recursion because on encountering the node again in somewhere down the recursion again, we will be traversing it again thus getting into cycles.

    <center>
    <img src="../Figures/133/133_Clone_Graph_3.png" width="600"/>
    </center>

4. Now make the recursive call for the neighbors of the `node`. Pay attention to how many recursion calls we will be making for any given `node`. For a given `node` the number of recursive calls would be equal to the number of its neighbors. Each recursive call made would return the clone of a neighbor. We will prepare the list of these clones returned and put into neighbors of clone `node` which we had created earlier. This way we will have cloned the given `node` and it's `neighbors`.

> Tip: Recursion could get a bit cumbersome to grasp, if you try to get into every call yourself and try to see what's happening. And why look at every call when every call does the same thing with different inputs. So, you just worry about ONE such call and let the recursion do the rest. And of course always handle the base case or the termination condition of the recursion. Otherwise how would it end?
<br>

<iframe src="https://leetcode.com/playground/EXxjKSET/shared" frameBorder="0" width="100%" height="500" name="EXxjKSET"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N + M)$$, where $$N$$ is a number of nodes (vertices) and $$M$$ is a number of edges.  
* Space Complexity: $$O(N)$$. This space is occupied by the `visited` hash map and in addition to that, space would also be occupied by the recursion stack since we are adopting a recursive approach here. The space occupied by the recursion stack would be equal to $$O(H)$$ where $$H$$ is the height of the graph. Overall, the space complexity would be $$O(N)$$.
<br/>
<br/>

---

### Approach 2: Breadth First Search

**Intuition**

We could agree DFS is a good enough solution for this problem. However, if the recursion stack is what we are worried about then DFS is not our best bet. Sure, we can write an iterative version of depth first search by using our own stack. However, we also have the BFS way of doing iterative traversal of the graph and we'll be exploring that solution as well.

<center>
<img src="../Figures/133/133_Clone_Graph_4.png" width="600"/>
</center>

The difference is only in the traversal of DFS and BFS. As the name says it all, DFS explores the depths of the graph first and BFS explores the breadth. Based on the kind of graph we are expecting we can chose one over the other. We would need the `visited` hash map in both the approaches to avoid cycles.

**Algorithm**

1. We will use a hash map to store the reference of the copy of all the nodes that have already been visited and copied. The `key` for the hash map would be the node of the original graph and corresponding `value` would be the corresponding cloned node of the cloned graph. The `visited` is used to prevent cycles and get the cloned copy of a node.

2. Add the first node to the queue. Clone the first node and add it to `visited` hash map.

3. Do the BFS traversal.
    - Pop a node from the front of the queue.
    - Visit all the neighbors of this node.
    - If any of the neighbors was already visited then it must be present in the `visited` dictionary. Get the clone of this neighbor from `visited` in that case.
    - Otherwise, create a clone and store in the `visited`.
    - Add the clones of the neighbors to the corresponding list of the clone node.

<iframe src="https://leetcode.com/playground/TNJFUEe7/shared" frameBorder="0" width="100%" height="500" name="TNJFUEe7"></iframe>

**Complexity Analysis**

* Time Complexity : $$O(N + M)$$, where $$N$$ is a number of nodes (vertices) and $$M$$ is a number of edges.

* Space Complexity : $$O(N)$$. This space is occupied by the `visited` dictionary and in addition to that, space would also be occupied by the queue since we are adopting the BFS approach here. The space occupied by the queue would be equal to $$O(W)$$ where $$W$$ is the width of the graph. Overall, the space complexity would be $$O(N)$$.
<br/>