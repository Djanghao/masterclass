# Official Solution

**Link:** [https://leetcode.com/problems/alien-dictionary/solution/](https://leetcode.com/problems/alien-dictionary/solution/)

---

[TOC]

## Solution

---

This article assumes you already have some confidence with **graph algorithms**, such as **breadth-first search** and **depth-first searching**. If you're familiar with those, but not with **topological sort** (the topic tag for this problem), don't panic, as you should still be able to make sense of it. It is one of the many more advanced algorithms that keen programmers tend to "invent" themselves before realizing it's already a widely known and used algorithm. There are a couple of approaches to topological sort; [Kahn's Algorithm](https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm) and DFS.

A few things to keep in mind:

- The letters *within a word* don't tell us anything about the relative order. For example, the presence of the word `kitten` in the list does *not* tell us that the letter `k` is before the letter `i`. 
- The input can contain words followed by their prefix, for example, `abcd` and then `ab`. These cases will never result in a valid alphabet (because in a valid alphabet, prefixes are always first). You'll need to make sure your solution detects these cases correctly.
- There can be more than one valid alphabet ordering. It is fine for your algorithm to return any one of them.
- Your output string must contain *all* unique letters that were within the input list, including those that could be in any position within the ordering. It should *not* contain any additional letters that were *not* in the input.

<br/>

---

### Overview of Approaches

All approaches break the problem into three steps.

1. Extracting dependency rules from the input. For example "A must be before C", "X must be before D", or "E must be before B". 
2. Putting the dependency rules into a graph with letters as nodes and dependencies as edges (an adjacency list is best).
3. Topologically sorting the graph nodes.

We encourage you to go and have another go at implementing these steps yourself if you think you now know what to do. If this all sounded overwhelming and confusing though, don't panic, because we're going to work through it all in detail.

<br/>

---

### Approach 1: Breadth-First Search

**Intuition**

There are three parts to this problem. 

1. Getting as much information about the alphabet order as we can out of the input word list.
2. Representing that information in a meaningful way.
3. Assembling a valid alphabet ordering.

***Part 1: Extracting Information***

Let's start with a large example of a dictionary in an "alien language", and see how much we can conclude with some simple reasoning. This is likely to be your first step in tackling this question in a programming interview.

![List of alien words:  wxqkj, whqg, cckgh, cdxg, cdxdt, cdht, ktgxt, ktgch, ktdw, ktdc, jqw, jmc, jmg](../Figures/269/words.png)

Remember that in an ordinary English dictionary, all the words starting with `a` are at the start, followed by all the ones starting with `b`, then `c`, `d`, `e`, and at the very end, `z`.  In the "alien dictionary", we also expect the first letters of each word to be in alphabetical order. So, let's look at them.

![First letters of each word: w, w, c, c, c, c, k, k, k, k, j, and j](../Figures/269/first_letters.png)

Removing the duplicates, we get:

![First letters of each word without duplicates: w, c, k, and j](../Figures/269/first_letters_no_duplicates.png)

Going by this, we know the *relative order* of four letters in the "alien dictionary". However, we don't know how these four letters fit in with the other seven letters, or even how those other seven letters fit in with each other. To get more information, we'll need to look further.

Going back to the English dictionary analogy, the word `abacus` will appear before `algorithm`. This is because when the first letter of two words is the same, we instead look at the second letter; `b` and `l` in this case. `b` is before `l` in the alphabet. 

Let's take a closer look at the first two words of the "alien dictionary"; `wxqkj` and `whgg`. Seeing as the first letters are the same, `w`, we look at the second letters. The first word has `x`, and the second word has `h`. Therefore, we know that `x` is before `h` in the alien dictionary. We know have two fragments of the letter-order.

![First two sequences, w, c, k, j and x, h](../Figures/269/first_two_sequences.png)

We don't know yet how these two fragments could fit together into a single ordering. For example, we don't know whether `w` is before `x`, or `x` is before `w`, or even whether or not there's enough information available in the input for us to know.

Anyway, we've now gotten all the information we can out of the first two words. All letters after `x` in `wxqkj`, and after `h` in `whqg`, should be ignored because they did not impact the relative ordering of the two words (if you're confused, think back to `abacus` and `algorithm`. Because `b > l`, the `gorithm` and `acus` parts are unimportant for determining alphabetical ordering).

Hopefully, you're starting to see a pattern here. Where two words are adjacent, we need to look for the *first difference* between them. That difference tells us the relative order between two letters. Let's have a look at all the relations we can find by comparing adjacent words.

![Relations between words](../Figures/269/words_relations_fix.png)

You might notice that we haven't included some rules, such as `w → j`. This is fine though, as we can still derive it from the rules we have: `w → c`, `c → k`, `k → j`.

This completes the first part. There is no further information we can extract from the input. Therefore, our task is now to put together what we know.

***Part 2: Representing the Relations***

We now have a set of relations stating how pairs of letters are ordered relative to each other.

![Relations: x → h, w → c, c → d, g → d, c → k, x → c, k → j, q → m, and c → g](../Figures/269/relations.png)

How could we put these together? You may be tempted to start trying to build "chains" out of them. Here are a few possible chains.

![Some combined chains: w→c→k→j, w→c→d, x→c→k→j, and q→m](../Figures/269/chains.png)

The problem here though is that some letters are in more than one chain. Simply putting the chains into the output list one-after-the-other won't work. Some letters will be duplicated, which invalidates the ordering. Simply deleting the duplicates will not work either.

When we have a set of relations, often drawing a graph is the best way to visualize them. The nodes are the letters, and an edge between two letters, `A` and `B` represents that `A` is before `B` in the "alien alphabet". 

![Graph with sources highlighted](../Figures/269/graph_bfs_step_1.png)

***Part 3: Assembling a Valid Ordering***

As we can see from the graph, four of the letters have no arrows going into them. What this means is that there are no letters that *have* to be before any of these four (remember that the question states there could be multiple valid orderings, and if there are, then it's fine for us to return any of them). 

Therefore, a valid start to the ordering we return would be:

![First group ordering: q w t x](../Figures/269/one_group_ordering.png)

We can now remove these letters and edges from the graph, because any other letters that required them first will now have this requirement satisfied.

![Graph after first step with new sources highlighted](../Figures/269/graph_bfs_step_2.png)

On this new graph, there are now three new letters that have no in-arrows. We can add these to our output list.

![Two groups ordering: q w t x, m h c](../Figures/269/two_groups_ordering.png)

Again, we can remove these from the graph.

![Graph after second step with new sources highlighted](../Figures/269/graph_bfs_step_3.png)

Then add the two new letters with no in-arrows.

![Three groups ordering: q w t x, m h c, g k](../Figures/269/three_groups_ordering.png)

Which leaves the following graph.

![Graph after third step with new sources highlighted](../Figures/269/graph_bfs_step_4.png)

With the final two letters.

![All groups ordering: q w t x, m h c, g k, j d](../Figures/269/all_groups_ordering.png)

Which is a valid ordering that we can return.

As a side note, each of the four groups of letters we picked off could have been in any order within themselves (as another side note, it's not too difficult to calculate *how many* valid orderings there are. Have a think about this if you want, determining how many valid alphabet orderings there are is an interesting follow-up question!)

**Algorithm**

Now that we have come up with an approach, we need to figure out how to implement it efficiently. 

The first and second parts are straightforward; we'll leave you to look at the code for these. It should extract the order relations and then insert them into an **adjacency list**. The only thing we need to be careful of is ensuring that we've handled the "prefix" edge case correctly.

![Adjacency list](../Figures/269/adjacency_list.png)

The third part is more complicated. We need to somehow identify which letters have no incoming links left. With the adjacency list format above, this is a bit annoying to do, because determining whether or not a particular letter has any incoming links requires repeatedly checking over the adjacency lists of all the other letters to see whether or not they feature that letter.

A naïve solution would be to do exactly this. While this would be efficient enough with at most `26` letters, it may result in your interviewer quickly telling you that we might want to use the same algorithm on an "alien language" with millions of unique letters.

An alternative is to keep two adjacency lists; one the same as above, and another that is the reverse, showing the *incoming* links. Then, each time we traverse an edge, we could remove the corresponding edge in the reverse adjacency list. Seeing when a letter has no more incoming links would now be straightforward.

![Reverse adjacency list](../Figures/269/reverse_adjacency_list.png)

However, we can do even better than that. Instead of keeping track of all the other letters that must be before a particular letter, we only need to keep track of *how many* of them there are! While building the forward adjacency list, we can also count up how many incoming edges each letter has. We call the number of incoming edges the **indegree** of a node.

![Count list](../Figures/269/indegree_count_list.png)

Then, instead of removing an edge from a reverse adjacency list, we can simply decrement the count by 1. Once the count reaches 0, this is equivalent to there being no incoming edges left in the reverse adjacency list.

We'll do a BFS for all letters that are reachable, adding each letter to the output as soon as it's reachable. A letter is reachable once all of the letters that need to be before it have been added to the output. To do a BFS, recall that we use a queue. We should initially put all letters with an in-degree of `0` onto that queue. Each time a letter gets down to an in-degree of `0`, it is added to the queue.

We continue this until the queue is empty. After that, we check whether or not all letters were put in the output list. If some are missing, this is because we got to a point where all remaining letters had at least one edge going in; this means there must be a cycle! In that case, we should return `""` as per the problem description. Otherwise, we should return the complete ordering we found.

One edge case we need to be careful of is where a word is *followed by* its own prefix. In these cases, it is impossible to come up with a valid ordering and so we should return `""`. The best place to detect it is in the loop that compares each adjacent pair of words.

Also, remember that not all letters will necessarily have an edge going into or out of them. These letters can go *anywhere* in the output. But we need to be careful to not forget about them in our implementation.

Here is an animation showing the entire algorithm on our example from earlier.

!?!../Documents/269_bfs_animation.json:960,540!?!

<iframe src="https://leetcode.com/playground/KACJmTAZ/shared" frameBorder="0" width="100%" height="500" name="KACJmTAZ"></iframe>


**Complexity Analysis**

Let $$N$$ be the total number of strings in the input list.

Let $$C$$ be the total length of all the words in the input list, added together. 

Let $$U$$ be the total number of unique letters in the alien alphabet. While this is limited to $$26$$ in the question description, we'll still look at how it would impact the complexity if it was not limited (as this could potentially be a follow-up question).

- Time complexity : $$O(C)$$.

    There were three parts to the algorithm; identifying all the relations, putting them into an adjacency list, and then converting it into a valid alphabet ordering.

    In the worst case, the first and second parts require checking every letter of every word (if the difference between two words was always in the last letter). This is $$O(C)$$.

    For the third part, recall that a breadth-first search has a cost of $$O(V + E)$$, where $$V$$ is the number of vertices and $$E$$ is the number of edges. Our algorithm has the same cost as BFS, as it too is visiting each edge and node once (a node is visited once *all* of its edges are visited, unlike the traditional BFS where it is visited once one edge is visited). Therefore, determining the cost of our algorithm requires determining how many nodes and edges there are in the graph.

    *Nodes:* We know that there is one vertex for each unique letter, i.e. $$O(U)$$ vertices.

    *Edges:* Each edge in the graph was generated from comparing two adjacent words in the input list. There are $$N - 1$$ pairs of adjacent words, and only *one* edge can be generated from each pair. This might initially seem a bit surprising, so let's quickly look at an example. We'll use English words.

    ```
    abacus
    algorithm
    ```

    The *only* conclusion we can draw is that *b is before l*. This is the reason `abacus` appears before `algorithm` in an English dictionary. The characters afterward are irrelevant. It is the same for the "alien" alphabets we're working with here. The only rule we can draw is the one based on the *first difference* between the two words.

    Also, remember that we are only generating rules for adjacent words. We are not adding the "implied" rules to the adjacency list. For example, assume we have the following word list.

    ```
    rgh
    xcd
    tny
    bcd
    ```

    We are only generating the following 3 edges.

    ```
    r -> x
    x -> t
    t -> b
    ```

    We are *not* generating these implied rules (the graph structure shows them indirectly).

    ```
    r -> t
    r -> b
    x -> b
    ```

    So with this, we know that there are *at most `N - 1` edges*. 

    There is an additional upper limit on the number of edges too—it is impossible for there to be more than one edge between each pair of nodes. With $$U$$ nodes, this means there can't be more than $$U^2$$ edges.

    It's not common in complexity analysis that we get two separate upper bounds like this. Because the number of edges has to be *lower than both $$N - 1$$ and $$U^2$$*, we know it is at *most* the *smallest* of these two values. Mathematically, we can say this is $$\min(U^2, N - 1)$$.

    Going all the way back to the cost of breadth first search, we can now substiute in the number of nodes and the number of edges: $$V = U$$ and $$E = \min(U^2, N - 1)$$. This gives us:
    
    $$O(V + E) = O(U + \min(U^2, N - 1)) = O(U + \min(U^2, N))$$.

    Finally, we need to combine the two parts: $$O(C)$$ for the first and second parts, and $$O(U + \min(U^2, N))$$ for the third part. When we have two independent parts, we add the costs together, as we don't necessarily know which is larger. After we've done this, we should look at the final formula and see whether or not we can actually draw any conclusions about which is larger. Adding them together, we initially get the following:
    
    $$O(C) + O(U + \min(U^2, N)) = O(C + U + \min(U^2, N))$$. 

    So, what do we know about the relative values of $$N$$, $$C$$, and $$U$$? Well, we know that $$N < C$$, as each word contains at least one character (remember, $$C$$ is total characters across the words, not *unique* characters). Additionally, $$U < C$$ because there can't be more unique characters than there are characters. 

    In summary, $$C$$ is the biggest of the three, and $$N$$ and $$U$$ are smaller, although we don't know which is smaller out of those two.

    So for starters, we know that the $$U$$ bit is insignificant compared to the $$C$$. Therefore, we can just remove it:
    
    $$O(C + U + \min(U^2, N))  →  O(C + \min(U^2, N))$$
    
    Now, to simplify the rest, consider two cases:

    1. If $$U^2$$ is smaller than $$N$$, then $$\min(U^2, N) = U^2$$. By definition, we've just said that $$U^2$$ is smaller than $$N$$, which is in turn smaller than $$C$$, and so $$U^2$$ is definitely less than $$C$$. This leaves us with $$O(C)$$. 
    
    2. If $$U^2$$ is larger than $$N$$, then $$\min(U^2, N) = N$$. Because $$C > N$$, we're left with $$O(C)$$.
    
    <br/>

    So in all cases, we know that $$C > \min(U^2, N)$$. This gives us a final time complexity of $$O(C)$$.
    
- Space complexity : $$O(1)$$ or $$O(U + \min(U^2, N))$$.

    The adjacency list uses the most auxiliary memory. This list uses $$O(V + E)$$ memory, where $$V$$ is the number of unique letters, and $$E$$ is the number of relations.
    
    The number of vertices is simply $$U$$; the number of unique letters.
    
    The number of edges in the worst case is $$\min(U^2, N)$$, as explained in the time complexity analysis.

    So in total the adjacency list takes $$O(U + \min(U^2, N))$$ space.

    So for the question we're given, where $$U$$ is a constant fixed at a maximum of $$26$$, the space complexity is simply $$O(1)$$. This is because $$U$$ is fixed at $$26$$, and the number of relations is fixed at $$26^2$$, so $$O(\min(26^2, N)) = O(26^2) = O(1)$$.

    But when we consider an arbitrarily large number of possible letters, we use the size of the adjacency list; $$O(U + \min(U^2, N))$$.

<br/>

---

### Approach 2: Depth-First Search

**Intuition**

Another approach to the third part is to use a depth-first search. We still need to extract relations and then generate an adjacency list in the same way as before, but this time we don't need the `indegrees` map.

Recall that in a depth-first search, nodes are returned once they either have no outgoing links left, or all their outgoing links have been visited. Therefore, the order in which nodes are returned by the depth-first search will be the reverse of a valid alphabet order.

**Algorithm**

If we made a reverse adjacency list instead of a forward one, the output order would be correct (without needing to be reversed). Remember that when we reverse the edges of a directed graph, the nodes with no incoming edges became the ones with no outgoing edges. This means that the ones at the start of the alphabet will now be the ones returned first.

One issue we need to be careful of is cycles. In directed graphs, we often detect cycles by using **graph coloring**. All nodes start as white, and then once they're first visited they become grey, and then once all their outgoing nodes have been fully explored, they become black. We know there is a cycle if we *enter* a node that is currently grey (it works because all nodes that are currently on the stack are grey. Nodes are changed to black when they are removed from the stack).

Here is an animation showing the DFS, starting from a reverse adjacency list of the input.

!?!../Documents/269_dfs_animation.json:960,540!?!

<iframe src="https://leetcode.com/playground/KTgSrbtH/shared" frameBorder="0" width="100%" height="500" name="KTgSrbtH"></iframe>

**Complexity Analysis**

- Time complexity : $$O(C)$$.

    Building the adjacency list has a time complexity of $$O(C)$$ for the same reason as in Approach 1.

    Again, like in Approach 1, we traverse every "edge", but this time we're using depth-first-search.

- Space complexity : $$O(1)$$ or $$O(U + \min(U^2, N))$$.

    Like in Approach 1, we build an adjacency list. Even though this one is a reversed adjacency list, it still contains the same number of relations.


<br/>