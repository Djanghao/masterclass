# Official Solution

**Link:** [https://leetcode.com/problems/graph-valid-tree/solution/](https://leetcode.com/problems/graph-valid-tree/solution/)

---

[TOC]

## Solution

---

For this article, we'll assume that you've already learned the basics of graph theory, and how to perform a simple depth-first search. Most text books on algorithms or discrete math have a section on it.

There are a *lot* of different ways to solve this problem, and it's impossible to cover them all. For that reason, I've tried to split the ways into a few general approaches, and then for each I discuss a few additional variants. Some of the ideas that were covered in Approach 1 might apply to Approach 2 as well.

</br>

---

### Approach 1: Graph Theory + Iterative Depth-First Search

**Intuition**

*Note that this same approach also works with recursive depth-first search and iterative breadth-first search. We'll look at these briefly in the Algorithm section.*

Recall that a graph, `G`, **is a tree iff** the following two conditions are met:

1. `G` is fully connected. In other words, for every pair of nodes in `G`, there is a path between them.
2. `G` contains no cycles. In other words, there is exactly *one* path between each pair of nodes in `G`.

**Depth-first search** is a classic graph-traversal algorithm that can be used to check for both of these conditions:

1. `G` is fully connected if, and only if, we started a depth-first search from a single source and discovered *all* nodes in `G` during it.
2. `G` contains no cycles if, and only if, the depth-first search never goes back to an already discovered node. We need to be careful though not to count trivial cycles of the form `A → B → A` that occur with most implementations of undirected edges.

Depth-first search requires being able to look up the *adjacent* (immediate neighbours) of a given node. Like many graph interview problems though, the input format we're given doesn't allow us to quickly get the neighbours of a node. Therefore, our first step is to convert the input into an **adjacency list**. Recall that an **adjacency list** is where we have a list of sub-lists, where each sub-list is the list of the immediate neighbours for the i'th node.

<iframe src="https://leetcode.com/playground/RQExqiW2/shared" frameBorder="0" width="100%" height="242" name="RQExqiW2"></iframe>

Before we move onto actually carrying out the depth-first search, let's quickly reassure ourselves that an **adjacency list** was the best graph representation for this problem. The other 2 choices would have been an **adjacency matrix** or a **linked representation**.

- An **adjacency matrix** would be an acceptable, although not ideal, representation for this problem. Often, we'd only use an adjacency matrix if we *know* that the number of edges is substantially higher than the number of nodes. We have no reason to believe that is the case here. Approach 2 will also provide some useful insight into this.
- A **linked representation**, where you make actual nodes objects, would be an overly complicated representation and could suggest to an interviewer that you have a limited understanding of adjacency lists and adjacency matrices. They are not commonly used in interview questions.

Anyway, let's get started on the **depth-first search**. Recall that most depth-first searches follow a template like the one below for **iterative depth-first search**. Note that this *doesn't yet solve the problem of determining whether or not the input graph is a tree*—we're simply using it as a step towards building up a solution.

<iframe src="https://leetcode.com/playground/gESuAd5i/shared" frameBorder="0" width="100%" height="429" name="gESuAd5i"></iframe>

If you're now really confused, we recommend checking out the [chapter on DFS in the Stack and Queue Explore Card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/). The common templates for depth-first search are given and explained in the card.

Let's now figure out how we can modify the basic depth-first search template to do the two checks we need.

The first check is straightforward. **If the graph is fully connected**, then every node must have been seen. This means that all nodes must be in the `seen` set at the end. Because a set removes duplicates, and the only values going into it were valid node numbers, then we know that the graph was fully connected *if, and only if,* the   `seen` set contains `n` values at the end.

<iframe src="https://leetcode.com/playground/AdpudgVv/shared" frameBorder="0" width="100%" height="89" name="AdpudgVv"></iframe>

For the second check, you might be thinking: can't we just modify the above algorithm to return `false` when a neighbour *is* in visited? i.e.

<iframe src="https://leetcode.com/playground/ESj8uNrZ/shared" frameBorder="0" width="100%" height="106" name="ESj8uNrZ"></iframe>

This, however, would only work on a *directed* graph. On an *undirected* graph, like the one we're working with here, trivial "cycles" will be detected. For example, if there's an undirected edge between node `A` and node `B`, a detected cycle will include `A → B → A`. This is because an undirected edge is actually *2* edges in the adjacency list, and so forms a trivial cycle.

![All undirected graphs are actually two way directed graphs.](../Figures/261/trivial_cycles.png)

There are several strategies of detecting whether or not an *undirected* graph contains cycles, while excluding the trivial cycles. Most rely on the idea that a depth-first search should only go along each edge *once*, and therefore only in *one* direction. This means that when we go along an edge, we should do something to ensure that we don't then later go back along it in the opposite direction. Here are a couple of ways of achieving this.

The first strategy is to simply delete the opposite direction edges from the adjacency list. In other words, when we follow an edge `A → B`, we should lookup `B`s adjacency list and delete `A` from it, effectively removing the opposite edge of `B → A`.

<iframe src="https://leetcode.com/playground/ZzX3MbYK/shared" frameBorder="0" width="100%" height="344" name="ZzX3MbYK"></iframe>

The second strategy is, instead of using a `seen` set, to use a `seen` *map* that also keeps track of the "parent" node that we got to a node from. We'll call this map `parent`. Then, when we iterate through the neighbours of a node, we ignore the "parent" node as otherwise it'll be detected as a trivial cycle (and we know that the parent node has already been visited by this point anyway). The starting node (`0` in this implementation) has no "parent", so put it as `-1`.

At first, it's a little more difficult to understand why this strategy even works. A good way to think about it is to remember that like the first approach, we just want to avoid going along edges we've already been on (in the opposite direction). The parent links prevent that, as each node is only entered for exploration *once*. So, imagine you're walking through a maze, with the condition that you're not allowed to go back along *any* path you've already been on. If you still somehow end up somewhere you were previously, there must have been a cycle!

<iframe src="https://leetcode.com/playground/kVdsny3o/shared" frameBorder="0" width="100%" height="446" name="kVdsny3o"></iframe>

The best strategy for this problem is probably the second one, because it doesn't require modifying the adjacency list. For more complex graph problems, the first strategy can be useful though.
 
**Algorithm**

In the example, we used an *iterative depth-first search*. Here is the complete code for this.

<iframe src="https://leetcode.com/playground/4nHopoyH/shared" frameBorder="0" width="100%" height="500" name="4nHopoyH"></iframe>

Alternatively, you could use recursion, as long as you're fairly confident with it. The recursive approach is more elegant, but is considered *inferior* to the iterative version in some programming languages, such as Python. This is because the space used by run-time stacks varies between programming languages. 

On the plus side, we can use a simple `seen` set and just pass a `parent` parameter. This makes the code a bit simpler!

<iframe src="https://leetcode.com/playground/6knVDyGW/shared" frameBorder="0" width="100%" height="500" name="6knVDyGW"></iframe>

Yet another variant is to use *iterative breadth-first search*. Recall that *breadth-first search* and *depth-first search* are almost the same algorithm, just with a different data structure.

<iframe src="https://leetcode.com/playground/JEAuv4yR/shared" frameBorder="0" width="100%" height="500" name="JEAuv4yR"></iframe>

**Complexity Analysis**

Let $$E$$ be the number of edges, and $$N$$ be the number of nodes.

- Time Complexity : $$O(N + E)$$.
    
    Creating the adjacency list requires initialising a list of length $$N$$, with a cost of $$O(N)$$, and then iterating over and inserting $$E$$ edges, for a cost of $$O(E)$$. This gives us $$O(E) + O(N) = O(N + E)$$.

    Each node is added to the data structure *once*. This means that the outer loop will run $$N$$ times. For each of the $$N$$ nodes, its adjacent edges is iterated over once. In total, this means that all $$E$$ edges are iterated over once by the inner loop. This, therefore, gives a total time complexity of $$O(N + E)$$.

    Because both parts are the same, we get a final time complexity of $$O(N + E)$$.


- Space Complexity : $$O(N + E)$$.

    The adjacency list is a list of length $$N$$, with inner lists with lengths that add to a total of $$E$$. This gives a total of $$O(N + E)$$ space.

    In the worst case, the stack/ queue will have all $$N$$ nodes on it at the same time, giving a total of $$O(N)$$ space.

    In total, this gives us $$O(E + N)$$ space.

</br>

---

### Approach 2: Advanced Graph Theory + Iterative Depth-First Search

**Intuition**

Depending on how much graph theory you know, there's a better definition for determining whether or not a given graph is a tree.

For the graph to be a valid tree, it must have *exactly* `n - 1` edges. Any less, and it can't possibly be fully connected. Any more, and it *has* to contain cycles. Additionally, if the graph is fully connected *and* contains exactly `n - 1` edges, it can't *possibly* contain a cycle, and therefore must be a tree! 

These facts are fairly straightforward to prove. We won't go into why they are true here, but if you're not familiar with these facts, then we recommend reading up on graph theory. It is *very important* to be confident with graph theory in-order to pass the interviews at a top tech company.

Going by this definition, our algorithm needs to do the following:

1. Check whether or not there are `n - 1` edges. If there's not, then return `false`.
2. Check whether or not the graph is *fully connected*. Return `true` if it is, `false` if otherwise.

Recall that the most complicated part of Approach 1 was in checking whether or not the graph contained cycles. This was because in an undirected graph, we needed to be careful of *trivial cycles*. Checking whether or not a graph is fully connected is straightforward—we simply checked if all nodes were reachable from a search starting at a single node.

Like before, we can check for connectivity using recursive depth-first search, iterative depth-first search, or iterative breadth-first search. We still need to use a `seen` set to prevent the algorithm from getting caught in an infinite loop if there are indeed cycles (and to prevent looping on the trivial cycles).

**Algorithm**

Again, we've provided code for all three variants.

Iterative Depth-First Search.

<iframe src="https://leetcode.com/playground/AjgbX4sR/shared" frameBorder="0" width="100%" height="500" name="AjgbX4sR"></iframe>

Recursive Depth-First Search.

<iframe src="https://leetcode.com/playground/jtwbwFAU/shared" frameBorder="0" width="100%" height="500" name="jtwbwFAU"></iframe>

Iterative Breadth-First Search.

<iframe src="https://leetcode.com/playground/JWxEXwRN/shared" frameBorder="0" width="100%" height="500" name="JWxEXwRN"></iframe>

**Complexity Analysis**

Let $$E$$ be the number of edges, and $$N$$ be the number of nodes.

- Time Complexity : $$O(N)$$.

    When $$E ≠ N - 1$$, we simply return `false`. Therefore, the worst case is when $$E = N - 1$$. Because $$E$$ is proportional to $$N$$, we'll say $$E = N$$ to simplify the analysis.

    As said above, creating an adjacency list has a time complexity of $$O(N + E)$$. Because $$E$$ is now bounded by $$N$$, we can reduce this slightly to $$O(N + N) = O(N)$$.

    The iterative breadth-first search and depth-first search are almost identical. Each node is put onto the queue/stack *once*, ensured by the `seen` set. Therefore, the inner "neighbour" loop runs once for each node. Across all nodes, the number of cycles this loop does is the same as the number of edges, which is simply $$N$$. Therefore, these two algorithms have a time complexity of $$O(N)$$.

    The recursive depth-first search's "neighbour" loop runs only once for each node. Therefore, in total, the function is called once for each edge. So it is called $$E = N$$$$$E = N$$ times, and $$N$$ of those times, it actually enters the "neighbour" loop. Collectively, the total number of iterations of the "neighbour" loop is $$E = N$$. So we get $$O(N)$$, as these all simply add.


- Space Complexity : $$O(N)$$.

    Previously, we determined that the adjacency list took $$O(E + N)$$ space. We now know this is simply $$O(N)$$.

    In the worst case, the search algorithms will require an additional $$O(N)$$ space; this is if *all* nodes were on the stack/queue at the same time.

    So again we get a total of $$O(N)$$.

</br>

---

### Approach 3:  Advanced Graph Theory + Union Find

**Intuition**

In Approach 2, we used this definition for a tree:

> For the graph to be a valid tree, it must have *exactly* `n - 1` edges. Any less, and it can't possibly be fully connected. Any more, and it *has* to contain cycles. Additionally, if the graph is fully connected *and* contains exactly `n - 1` edges, it can't *possibly* contain a cycle, and therefore must be a tree! 

This definition simplified the problem down to checking whether or not the graph is fully connected. If it is, and if it contains `n - 1` edges, then we know it's a tree. In the previous approaches, we used graph search algorithms to check whether or not all nodes were reachable, starting from a single source node.

Another way we could approach the problem is by considering each connected component to be a set of nodes. When an edge is put between two separate connected components, they are merged into a single connected component.  We'll use the example `n = 6` and `edges = [(0, 5), (4, 0), (1, 2), (4, 5), (3, 2)]`. Before we look at the edges, we have `6` sets.

![Each of the nodes is in a separate set to start with.](../Figures/261/6_sets.png)

We can then go through the list of edges, and merge sets together. For example, because the first edge is `(0, 5)`, we merge the sets with `0` and `5`. This means that we now have five connected components.

![0 and 5 are merged into a single set, leaving 5 sets.](../Figures/261/5_sets.png)

The next edge is `(4, 0)`. Therefore, we merge the sets `{0, 5}` and `{4}` (remember that because `0` and `5` are connected, and `4` and `0` are connected, this means that `4` and `5` must also be connected).

![{0, 5} and {4} are merged into a single set, leaving 4 sets.](../Figures/261/4_sets.png)

We can continue this same process until we've gone through all the edges. Here is an animation showing this.

!?!../Documents/261_union_find_1.json:480,105!?!

The conclusion we can draw for this example is that the edges are *not* in a single connected component, and therefore must contain a cycle. The algorithm should return `false`.

And here is another example where the edges *do* form a single connected component.

!?!../Documents/261_union_find_2.json:480,105!?!

Did you notice that in the second animation, every edge resulted in a merge operation, but in the first animation, some didn't? This was because of cycles in the graph. Each time there was no merge, it was because we were adding an edge between two nodes that were already connected via a path. This means there is now an additional path between them—which is the definition of a cycle. Therefore, *as soon as this happens*, we can terminate the algorithm and return `false`.

Now, how should we implement this? Well, we could create a list of `Set`s and then carry out the algorithm as it was done in the animation. There is, however, a better way; a really clever algorithm we call **union find**. I'll give a brief introduction to the algorithm here, however, if you aren't familiar with it, I strongly recommend reading up on it out of a good algorithm textbook. We don't *yet* have an explore card on union find (at the time of writing this!). Union find is a very useful algorithm that can be used to solve many graph problems.

Union find represents each of the sets as a directed tree, with the edges pointing *towards* the root node. For example, consider this graph from our first example above (the one that was *not* a valid tree).

![Example of a graph](../Figures/261/graph_1.png)

One way its connected components could be represented by union find is as follows:

![Trees representation for graph 1.](../Figures/261/directed_trees_1.png)

Union find is a **data structure** with 3 methods; `makeset(A)`, `find(A)` and `union(A, B)`.

- The `makeset(A)` method is the simplest. It creates a new size-1 set containing just element `A`. 

- The `find(A)` method starts at `A`, and traces parent links up until it gets to `A`'s tree root. It then returns the tree root ID. Two nodes that are in the same connected component have the same root. If they're in different connected components, then they will have different roots. For the above example, `find(0)`, `find(4)`, and `find(5)` will all return `5`. Whereas `find(1)`, `find(2)` and `find(3)` will all return `1`. This method can be used to check whether or not 2 elements are in the same connected component, and is also used by the `union(A, B)` method, as we're about to see.

- The `union(A, B)` method works by finding the root for `A` and the root for `B`, using the `find(...)` operation. It then sets `B`s parent to be `A`, thus combining the two trees into one. For example, if we add the edge `(4, 3)` to the example above, the algorithm will find that the root of `4` is `5`, and the root of `3` is `1`, and merge those subtrees. Once this is done, all of the nodes have the same root of `5`, and therefore we know they all belong to the same connected component.

![Merging the two trees with the edge (4, 3).](../Figures/261/directed_trees_2.png)

We don't need to use linked nodes to represent this structure; we can simply maintain an array of parent pointers. For example, here's how the above tree is represented as an array.

![Parent pointers for the above tree.](../Figures/261/parent_pointers.png)

Notice how `5` simply points to itself, as it's the root. The `find(...)` operation works its way up parent links until it finds a node that points back to itself.

This algorithm might not seem very efficient, after all, the `find(...)` operation could be $$O(n)$$ in the worst case. However, there are two straightforward optimizations we can apply that bring the amortized time close to $$O(1)$$ for both `union(...)` and `find(...)`.

1. Tracking the sizes of each set; this helps to ensure the tree depth is minimised, as we can ensure the smaller set is attached onto the larger set, and not the other way around. The modifications for this are in the `union(...)` method. 

2. When doing a `find(...)`, keeping track of all the nodes along the path so that afterwards we can make each point *directly* at the root, so that next time any of those nodes are searched for, it is $$O(1)$$. The modifications for this are all in the `find(...)` method.

Variants of these also exist, that result in the same overall time complexity.

**Algorithm**

Firstly, here's the code *without* the optimizations. Below, I've also included the code with the optimizations. If you're new to union find, then I recommend reading the code without optimizations first, as it's a lot easier to understand!

<iframe src="https://leetcode.com/playground/G9uUXxxq/shared" frameBorder="0" width="100%" height="500" name="G9uUXxxq"></iframe>

These are the solutions using the optimizations *path compression* and *union by size*.

<iframe src="https://leetcode.com/playground/MdAo8oCM/shared" frameBorder="0" width="100%" height="500" name="MdAo8oCM"></iframe>


**Complexity Analysis**

Let $$E$$ be the number of edges, and $$N$$ be the number of nodes.

$$α(N)$$ is the [Inverse Ackermann Function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse).

- Time Complexity : $$O(N \cdot α(N))$$.
    
    When $$E ≠ N - 1$$, we simply return `false`. Therefore, the worst case is when $$E = N - 1$$. Because $$E$$ is proportional to $$N$$, we'll say $$E = N$$ to simplify the analysis. 
    
    We are putting each of the $$N$$ edges into the `UnionFind` data structure, using the `union(...)` method. The `union(...)` method itself has no loops or recursion, so the entire cost of calling it is dependent on the cost of the `find(...)` method that it calls. 
    
    `find(...)`'s cost is dependent on how far the node it was searching for is from the root. Using the naïve implementation of union find, this depth could be $$N$$. If this was the case for all of the calls, we'd have a final cost of $$O(N^2)$$. 

    However, remember those optimizations we did? Those keep the tree depths very shallow. It turns out that `find(...)` *amortizes* to $$O(α(N))$$, where α is the [Inverse Ackermann Function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse). The incredible thing about this function is that it grows *so slowly* that $$N$$ will *never* go higher than $$4$$ in the universe as we know it! So while in "practice" it is effectively $$O(1)$$, in "theory" it is not. 

    Actually *proving* this upper bound on the depth is a very advanced proof, which I'd certainly *hope* you'd never need to do in an interview! If you're interested though, I recommend looking in a good algorithm's text book or paper.

    Anyway, this gives us a total of $$N \cdot O(α(N)) = O(N \cdot α(N))$$.

- Space Complexity : $$O(N)$$.

    The UnionFind data structure requires $$O(N)$$ space to store the arrays it uses.

*So, why is this better than Approach 2?*

Complexity analysis ignores constants. For example, $$O(10 \cdot N) = O(N)$$. Even $$O(10000 \cdot N) = O(N)$$. Sometimes the constants we're ignoring in the analysis are still having a big impact on the run-time in practice.

Approach 2 had a lot of overhead in needing to create an adjacency list with the edges before it could even begin the depth-first search. This is all treated as a constant, as it ultimately had the same time complexity as the depth-first search itself.

Approach 3 doesn't need to change the input format, it can just get straight to determining whether or not there is a cycle. Additionally the bit that stops it being constant, the $$α(N)$$, will *never* have a value larger than $$4$$. So in practice, it behaves as a constant too—and a far smaller one at that!

When weighing up the pros and cons of different algorithms for solving problems, it's best to treat union find's operations as $$O(1)$$ to get a fair and accurate comparison.

</br>