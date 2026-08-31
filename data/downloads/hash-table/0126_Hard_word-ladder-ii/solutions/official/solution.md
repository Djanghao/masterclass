# Official Solution

**Link:** [https://leetcode.com/problems/word-ladder-ii/solution/](https://leetcode.com/problems/word-ladder-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is an extension of the problem [Word Ladder](https://leetcode.com/problems/word-ladder/), where we only need to find the minimum number of words in the transformation from `beginWord` to `endWord`. Here, we need to find all the transformations that exist between `beginWord` and `endWord` that are the minimum length. We can use BFS to find the minimum number of words in the transformation, however, finding all such transformations is tricky because the number of transformations may be enormous.
</br>

---

### Approach 1: Breadth-First Search (BFS) + Backtracking

#### Intuition

The problem can be correlated with the graph data structure. We can represent the words as the vertices and an edge can be used to connect two words which differ by a single letter.

Before diving further let's see how we can find all the direct connections of a particular word. To find the adjacent words for a particular word, one approach is to traverse all of the other words and add an edge for those that differ by a single letter. This approach requires $$O(N\cdot K)$$ time where $$N$$ is the number of words given and $$K$$ is the maximum length of a word. The observation behind the optimal approach is that the words only consist of lowercase English letters. Hence we can change each character of the word to all other English lowercase characters and check whether or not that word exists in the `wordList`(this particular check operation takes $$O(1)$$ in C++ while in Java it will take $$O(K)$$ due to the immutable nature of Strings).This way the number of operations will be $$(25\cdot K*K + 1)$$, hence the time complexity will be $$O(K^2)$$.

Thus we can find all the words that are directly connected.  Now, the task is to find all of the shortest paths from `beginWord` to `endWord`. 

The naive way to do this is to use backtracking. We will start from `beginWord`, then traverse all the adjacent words until we reach the `endWord`. When we reach the `endWord`, we can compare the path length and find all the paths that have the minimum path length. This method however is extremely inefficient because the number of paths between two vertices can be enormous.

Let's try to optimize our approach. Somehow, we need to reduce the number of traversed paths. Let's say the number of shortest paths that exist between `beginWord` and `endWord` is `x` and the number of paths that we must traverse to find these shortest paths is `y`. The closer the value `y` gets to the value `x`,  the more efficient our approach will be.

The diagram below shows the graph that represents the connectivity among words. As shown in the diagram we want to go from `red` to `tax`.  While backtracking on this graph, we will also cover the edges upwards that is from the `tad` to `ted` similarly from `tex` we will traverse to `ted` as well as `rex`. The key observation here is that going back in the upward direction will never lead us to the shortest path. We should always traverse the edges in the direction of `beginWord` to `endWord`. 
![fig](../Figures/126/126A.png)
To ensure that we never traverse up the ladder, let's use directed edges to connect the words. The edges in the graph below are all directed towards `endWord`. Also, notice that graphs produced by BFS do not contain cycles.  Thus, the graph will be a Directed Acyclic Graph (DAG).
![fig](../Figures/126/126B.png)
Now for the easy part, think of the previous graph as a bunch of layers and observe that once we reach a particular layer we don't want the future words to have the connection back to this layer. We will build our DAG using BFS.  We will then add all the directed edges from the words present in the current layer and once all words in this layer have been traversed, we will remove them from the `wordList`. This way we will avoid adding any edges that point towards `beginWord`.

After constructing the graph, we can use our same backtracking approach to find the shortest paths between `beginWord` and `endWord`. Also, note that in the graph all paths between `beginWord` and `endWord`, obtained through BFS, will be the shortest possible. This is because all the edges in the graph will be directed in the direction of `beginWord` to `endWord`. Furthermore, there will not be any edge between the words that are on the same level.  Therefore, iterating over any edge will bring us one step closer to the `endWord`, thus there is no need to compare the length of the path each time we reach the `endWord`.

#### Algorithm

1. Store the words present in `wordList` in an unordered set so that the words can be efficiently removed during the breadth-first search.

2. Perform the BFS, and add the edges to the adjacency list `adjList`. Also once a level is finished remove the `visited` words from the `wordList`.

3. Start from `beginWord` and while keep tracking of the current path as `currPath` traverse all the possible paths, whenever the path leads to the `endWord` store the path in `shortestPaths`.

#### Implementation

> **NOTE:**
>
> In the following implementation, for convineince, instead for go from `beginWord` to `endWord`, we go from `endWord` to `beginWord`.

<iframe src="https://leetcode.com/playground/U2AzNMfC/shared" frameBorder="0" width="100%" height="500" name="U2AzNMfC"></iframe>


#### Complexity Analysis

* Time complexity: $$O(NK^2 + α)$$.

    Here $$N$$ is the number of words in `wordList`, $$K$$ is the maximum length of a word, $$α$$ is the number of possible paths from `beginWord` to `endWord` in the directed graph we have.

    Copying the `wordList` into the set will take $${O}(N)$$.

    In BFS, every word will be traversed and for each word, we will find the neighbors using the function `findNeighbors` which has a time complexity of $$O(K^2)$$. Therefore the total complexity for all the `N` words will be $$O(NK^2)$$. Also, each word will be enqueued and will be removed from the set hence it will take $${O}(N)$$. The total time complexity of BFS will therefore be equal to $$O(NK^2)$$.

    While backtracking, we will essentially be finding all the paths from `beginWord` to 
    `endWord`. Thus the time complexity will be equal to $$O(α)$$.

    We can estimate the upper bound for $$α$$ by assuming that every layer except the first and the last layer in the DAG has $$x$$ number of words and is fully connected to the next layer. Let $$h$$ represent the height of the DAG, so the total number of paths will be $$x^h$$ (because we can choose any one word out of $$x$$ words in each layer and each choice will be part of a valid shortest path that leads to the `endWord`). Here, $$h$$ equals $$(N-2)/x$$. This would result in $$x^{(N-2)/x}$$ total paths, which is maximized when $$x = 2.718$$, which we will round to $$3$$ because $$x$$ must be an integer. Thus the upper bound for $$α$$ is $$3^{(N/3)}$$, however, this is a very loose bound because the nature of this problem precludes the possibility of a DAG where every layer is fully connected to the next layer.

  The total time complexity is therefore equal to $$O(NK^2 + α)$$.

* Space complexity: $${O}(NK)$$.
  
    Here $$N$$ is the Number of words in `wordList`, $$K$$ is the Maximum length of a word.
    
    Storing the words in a set will take $${O}(NK)$$ space.
    
    To build the adjacency list $${O}(N)$$ space is required as the BFS will produce a directed 
    graph and hence there will be at max $$(N - 1)$$ edges.
    
    In backtracking, stack space will be consumed which will be equal to the maximum number of active functions in the stack which is equal to the $N$ as the path can have all the words in the `wordList`. Hence space required is $${O}(N)$$.

    The total space complexity is therefore equal to $${O}(NK)$$.

---

### Approach 2: Bidirectional Breadth-First Search (BFS) + Backtracking (**Time Limit Exceeded**)

#### Intuition

This approach is very similar to the previous one in that both approaches will use the same Directed Acyclic Graph (DAG). The difference lies in the way that the graph is produced, which is better optimized in this case.

Begin by storing all the words in `wordList` in an unordered set. This allows for efficient lookups and removal of words during the BFS traversal. Using a set ensures that checking whether a word exists in the list is $O(1)$, which is crucial for the performance of the BFS.

We perform a bidirectional breadth-first search (BFS). Initialize two queues: `forwardQueue`, which starts with the `beginWord`, and `backwardQueue`, which starts with the `endWord`. The idea is to explore the graph from both ends, meeting somewhere in the middle. This helps to reduce the search space compared to a traditional unidirectional BFS.

In each BFS iteration, we always expand the smaller of the two queues, i.e., if `forwardQueue` is larger, we swap the queues so that we expand from the smaller queue. This minimizes the number of words to process at each level, improving efficiency.

For each word processed from the queue, we find all its valid neighbors (words that differ by exactly one character). We then add these neighbors to the adjacency list (`adjList`) as edges, and the direction of edges depends on which queue is being expanded:

* If expanding from the `forwardQueue`, the edge points toward the `endWord` (down the ladder).
* If expanding from the `backwardQueue`, the edge points toward the `beginWord` (up the ladder).

After each level of BFS, we also remove the processed words from the `wordList` to avoid revisiting them and to prevent infinite loops.

After performing the bidirectional BFS, check if the two queues have intersected. If they haven’t, it means no valid transformation sequence exists between `beginWord` and `endWord`, and we can return an empty list immediately.

If the queues do overlap, it indicates that a path between `beginWord` and `endWord` exists, and we can proceed to reconstruct the shortest paths.

Once the BFS completes and the graph is fully constructed, we backtrack from `beginWord` to `endWord` to find all possible shortest transformation sequences. Starting from the `beginWord`, we recursively explore the graph, keeping track of the current path (`currPath`). Each time we reach the `endWord`, we store the current path in the `shortestPaths` list.

This backtracking step ensures that all valid paths are found, and since BFS guarantees that the first time we reach the `endWord` we’re on the shortest path, no need to worry about longer paths being included. Once all paths are found, we return `shortestPaths`.

##### Time Limit Exceeded Root Cause Analysis:

Although this is more optimized than the previous approach we still encounter a Time Limit Exceeded (TLE). In theory, bidirectional BFS should help by reducing the search space, since we’re expanding from both `beginWord` and `endWord` towards the middle. However, there are some real-world challenges that makes this approach inefficient.

Even though we’re halving the search space, each BFS iteration still involves checking all the neighbors for every word in the queue. The operation of finding these neighbors can be costly because we need to compare every word in the word list to see if it differs by exactly one letter. This can add up quickly, especially if the word list is large.

Additionally, managing the two queues (`forwardQueue` and `backwardQueue`), as well as maintaining the adjacency list (`adjList`), comes with its own overhead. For each level in BFS, we have to carefully update these structures, and in some cases, we might revisit the same words multiple times. The complexity of these updates can slow down the process, especially if we’re working with a large number of words.

While we try to optimize by always expanding the smaller queue, there’s still a significant amount of work happening behind the scenes. The cost of traversing neighbors, updating our adjacency list, and managing the state of both queues starts to build up. This leads to performance issues when we’re dealing with large inputs.

Lastly, once the BFS traversal is done, we still need to backtrack to find all possible paths. If there are many valid paths, this backtracking step can add more time, particularly when the graph is large.

#### Algorithm

1. Store the words present in `wordList` in an unordered set so that the words can be efficiently removed during the breadth-first search.

2. Perform a bidirectional BFS. Initialize two queues, `forwardQueue` with `beginWord` and `backwardQueue` with `endWord`. At each iteration add the edges to the adjacency list `adjList` by extending the shorter queue. The parameter `direction` is used to decide in which direction the edges should be connected, where `1` indicates towards `endWord` (down the ladder) and vice versa. Also once a level is finished, remove the `forwardQueue` words from the `wordList`.

3. If a sequence connecting `beginWord` to `endWord` does not exist, return an empty list. Otherwise, start from `beginWord` and while keeping track of the current path as `currPath` traverse all the possible paths, whenever the path leads to the `endWord` store the path in `shortestPaths`.

#### Implementation

> **NOTE:**
>
> Due to the larger constant factor, this approach is likely to yield *Time Limit Exceeded* in the current platform.

<iframe src="https://leetcode.com/playground/DCrsZz7X/shared" frameBorder="0" width="100%" height="500" name="DCrsZz7X"></iframe>


#### Complexity Analysis

* Time complexity: $$O(NK^2 + α)$$.

    Here $$N$$ is the Number of words in `wordList`, $$K$$ is the maximum length of a word, $$α$$ is the Number of possible paths from `beginWord` to `endWord` in the directed graph we have.

    Copying the `wordList` into the set will take $${O}(N)$$.

    In the worst-case scenario, the number of operations in the bidirectional BFS will be equal to the BFS approach discussed before. However, in some cases, this approach will perform better because the search space is reduced by selecting the shorter queue at each iteration. In bidirectional BFS, at most, every word will be traversed once, and for each word, we will find the neighbors using the function `findNeighbors` which has a time complexity of $$O(K^2)$$. Therefore the total complexity for all the $$N$$ words will be $$O(NK^2)$$. Also, each word will be enqueued and will be removed from the set which will take $${O}(N)$$. Thus, the total time complexity of bidirectional BFS will be $$O(NK^2)$$.

    In the backtracking process, we will essentially find all of the paths from `beginWord` to `endWord`. Thus, the time complexity is equal to $$O(α)$$.

    We can estimate the upper bound for $$α$$ by assuming that every layer except the first and the last layer in the DAG has $$x$$ number of words and is fully connected to the next layer. Let $$h$$ represent the height of the DAG, so the total number of paths will be $$x^h$$ (because we can choose any one word out of $$x$$ words in each layer and each choice will be part of a valid shortest path that leads to the `endWord`). Here, $$h$$ equals $$(N-2)/x$$. This would result in $$x^{(N-2)/x}$$ total paths, which is maximized when $$x = 2.718$$, which we will round to $$3$$ because $$x$$ must be an integer. Thus the upper bound for $$α$$ is $$3^{(N/3)}$$, however, this is a very loose bound because the nature of this problem precludes the possibility of a DAG where every layer is fully connected to the next layer.

    The total time complexity is therefore equal to $$O(NK^2 + α)$$.

* Space complexity: $${O}(NK)$$.
  
    Here $$N$$ is the Number of words in `wordList`, $$K$$ is the Maximum length of a word.
    
    Storing the words in a set will take $${O}(NK)$$ space.
    
    To build the adjacency list $${O}(N)$$ space is required as the BFS will produce a directed graph and hence there will be at most $$(N - 1)$$ edges. Also, in the worst-case scenario, the combined size of both queues will be equal to $$N$$.
    
    In backtracking, stack space will be consumed which will be equal to the maximum number of active functions in the stack, which is equal to the $$N$$ as the path can have all the words in the `wordList`. Hence the space required is $${O}(N)$$.

    The total space complexity is therefore equal to $${O}(NK)$$.

---