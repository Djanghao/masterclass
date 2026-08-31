# Official Solution

**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solution/](https://leetcode.com/problems/sentence-similarity-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given two sentences, `sentence1` and `sentence2` which are each represented as a string array. We are also given an array of string pairs, `similarPairs` where `similarPairs[i] = [xi, yi]` indicates that the two words `xi` and `yi` are similar.

The problem describes two sentences are similar if:

1. They have the same length (i.e., the same number of words).
2. `sentence1[i]` and `sentence2[i]` are similar (words corresponding to each index are similar).

It is also mentioned that if the words `a` and `b` are similar, and the words `b` and `c` are similar, then `a` and `c` are similar. The similarity relation is transitive.

Our task is to determine whether `sentence1` is similar to `sentence2` or not.

---

### Approach 1: Depth First Search

#### Intuition

To check whether `sentence1` is similar to `sentence2`, we would first check the number of words in both sentences. If the number of words in both of the sentences is not equal, the sentences cannot be similar, so we return `false` in such a case.

If the number of words in both sentences is equal, we need to check if all the words corresponding to each index of the sentences are similar, i.e., whether `sentence1[i]` and `sentence2[i]` are similar.

Two words are similar if they are the same word, or if there is a way for the words to reach each other using pairs in `similarPairs` (similarity is transitive).

Let's go through the second example of the problem description, where `similarPairs = [["manga","onepiece"], ["platform","anime"], ["leetcode","platform"], ["anime","manga"]]`. We need to check whether the words `"leetcode"` and `"onepiece"` are similar. Since, there is a path from `"leetcode"` to `"anime"` using pairs in `similarPairs`, i.e., `"leetcode" --> "platform" --> "anime" --> "manga" --> "onepiece"` the words `"leetcode"` and `"anime"` are similar. This leads us to consider the problem in terms of a graph.

We can form a graph to find such a path using `similarPairs`. Each word in `similarPairs` can be thought of as a node in the graph. For every similar pair $[x_i, y_i]$, we add an undirected edge between the nodes corresponding to $x_i$ and $y_i$. Now, if there is a path from words `A` to `B` in this graph, then `A` and `B` are similar words. Since the graph is undirected, it also means `A` and `B` are similar if and only if they belong to the same component of the graph.

To create the graph, we use a hash map `adj` with string as the key and hash set of strings as the value to map the words to a set of words. For every similar pair $[x_i, y_i]$, we add $y_i$ to the `adj[$x_i$]` set and $x_i$ to the `adj[$y_i$]` set. This forms our graph.

To check whether `sentence1` and `sentence2` are similar, we iterate over every word at index `i` of the given sentences. We check if the words are the same, i.e., `sentence1[i] = sentence2[i]` or if the words form a similar pair, i.e., there is a path from `sentence1[i]` to `sentence2[i]` in the graph. To check if there is a path from a node to any other node, we use the depth first search (DFS) algorithm in this approach. If there is a path from `sentence1[i]` to `sentence2[i]`, we move on to check the next word. Otherwise, if there is no path from `sentence1[i]` to `sentence2[i]`, the words and given sentences are not similar. So, we return `false` as the answer.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

We use the `dfs` method, which takes `source, visit, adj, dest` as parameters. The parameter `source` is the word from which we start our path. `visit` is used to keep track of visited words. `adj` is the adjacency list. `dest` is the word where we want to reach. The method returns a boolean to indicate if there is path from `source` to `dest`.

In the `dfs` method, we mark `source` as visited. We then check if `source = dest` in which case we return `true`. Otherwise, we iterate over all the neighbors of `source` and recursively check if there is a path from any neighbor to reach `dest`. If there is a path to reach `dest`, we return `false`. Otherwise, if we cannot reach `dest` using any neighbor we return `false`.

Refer to the following slides as an example:

!?!../Documents/737_sentence_similarity_II.json:601,301!?!

<br>

#### Algorithm

1. Check if the number of words in `sentence1` and `sentence2` is equal. If the number of words is not equal, return `false`.
2. Create a hash map, say `adj` with string as the key and hash set of strings as the value such that `adj[x]` contains all the similar words corresponding to the word `x`.
3. For each `pair` in `similarPairs`:
    - Add the first word `pair[0]` in `adj[pair[1]]` and add the second word `pair[1]` in `adj[pair[0]]`.
4. For every word at index `i` of `sentence1`:
    - If the words are equal, i.e., `sentence1[i] == sentence2[i]`, continue to check the next word.
    - Otherwise, we perform a DFS traversal with the parameters `(sentence[i], adj, visit, sentence2[i])` to see if `sentence1[i]` and `sentence2[i]` are similar. If the words are similar, `dfs` would return `true`, in which case we move to check the next word. Otherwise, if `dfs` returns `false`, the words and sentences are not similar, so we return `false` as the answer.
5. Because we were able to match all the corresponding words of both sentences, we return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/HSz26SLE/shared" frameBorder="0" width="100%" height="500" name="HSz26SLE"></iframe>

#### Complexity Analysis

Here, $n$ is the number of words in `sentence1` and `sentence2` and $k$ is the number of similar pairs. Let $m$ be the average length of words in `sentence1`, `sentence2` as well as in `similarPairs.`

* Time complexity: $O(n \cdot k \cdot m)$

    - We iterate over all the elements of `similarPairs` and insert a pair twice into `adj`. To hash each word of length $m$, we need $O(m)$ time, and to put the same length word in the hash set, we need $O(m)$ time again. Because there are $k$ pairs of words, there can be at most $2 \cdot k$ words that can be hashed and added to the set. As a result, we require $O(k \cdot m)$ time.
    - We iterate over all of `sentence1`'s words to see if the corresponding words are equal or similar. If the words are not equal, we perform a DFS traversal over the graph with $O(k)$ nodes and edges. As we know, a single DFS traversal takes $O(V + E)$ time to traverse a graph with `V` nodes and `E`  edges. In our case, we have $O(k)$ edges and nodes, and each node is a string with an average size of $m$, so a single traversal would take $O(k \cdot m)$ time. For $n$ traversals, it would take $O(n \cdot k \cdot m)$.
    - The total amount of time required is $O(n \cdot k \cdot m + k \cdot m) = O(n \cdot k \cdot m)$.

* Space complexity: $O(k \cdot m)$

    - Because we use `similarPairs` to create the graph, the number of nodes and edges can be $O(k)$. To map $O(k)$ words of size $m$, `adj` uses $O(k \cdot m)$ space.
    - The recursion call stack used by `dfs` can have no more than $O(k)$ elements. It would take up $O(k)$ space in that case.
    - We also use a set `visit`, which requires $O(k \cdot m)$ space because it could contain $O(k)$ words in the worst case.

---

### Approach 2: Breadth First Search

#### Intuition

We can also use a breadth first search (BFS) algorithm to find if there is a path from one word to another.

A breadth-first search (BFS) is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

We create the graph in the same way as the above approach. The difference between this approach and the previous one is that instead of using DFS to determine if there is a path from one word to another, we would use BFS.

We use the `bfs` method, which takes `source, adj, dest` as parameters. The parameter `source` is the word from which we start our path. `adj` is the adjacency list. `dest` is the word we want to reach. The method returns a boolean to indicate if there is a path from `node` to `dest`.

In the method, we initialize a queue `q` and a set of strings `visit`. We push `source` into `q` and also in `visit`. We perform the BFS traversal until `q` is empty. We pop the first word `node` out of the queue. We iterate over all the neighbors of `node`. For each `neighbor`, we then check if `neighbor = dest` in which case we return `true`. Otherwise, if `neighbor` is not visited, we push it into `q` and mark it as visited. If the queue is empty, it means we cannot reach `dest` starting from `source`, we return `false`.

#### Algorithm

1. Check if the number of words in `sentence1` and `sentence2` is equal. If the number of words is not equal, return `false`.
2. Create a hash map, say `adj` with string as the key and hash set of strings as the value such that `adj[x]` contains all the similar words corresponding to the word `x`.
3. For each `pair` in `similarPairs`:
    - Add the first word `pair[0]` in `adj[pair[1]]` and add the second word `pair[1]` in `adj[pair[0]]`.
4. For every word at index `i` of `sentence1`:
    - If the words are equal, i.e., `sentence1[i] == sentence2[i]`, continue to check the next word.
    - Otherwise, we perform a BFS traversal with the parameters `(sentence[i], adj, sentence2[i])` to see if `sentence1[i]` and `sentence2[i]` are similar. If the words are similar, `bfs` would return `true`, in which case we move to check the next word. Otherwise, if `bfs` returns `false`, the words and sentences are not similar, so we return `false` as the answer.
5. Because we were able to match all the corresponding words of both sentences, we return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/6wNxkCE5/shared" frameBorder="0" width="100%" height="500" name="6wNxkCE5"></iframe>

#### Complexity Analysis

Here, $n$ is the number of words in `sentence1` and `sentence2` and $k$ is the number of similar pairs. Let $m$ be the average length of words in `sentence1`, `sentence2` as well as in `similarPairs.`

* Time complexity: $O(n \cdot k \cdot m)$

    - We iterate over all the elements of `similarPairs` and insert a pair twice into `adj`. To hash each word of length $m$, we need $O(m)$ time, and to put the same length word in the hash set, we need $O(m)$ time again. Because there are $k$ pairs of words, there can be at most $2 \cdot k$ words that can be hashed and added to the set. As a result, we require $O(k \cdot m)$ time.
    - We iterate over all of `sentence1`'s words to see if the corresponding words are equal or similar. If the words are not equal, we perform a BFS traversal over the graph with $O(k)$ nodes and edges. As we know, a single BFS traversal takes $O(V + E)$ time to traverse a graph with `V` nodes and `E`  edges. In our case, we have $O(k)$ edges and nodes, and each node is a string with an average size of $m$, so a single traversal would take $O(k \cdot m)$ time. For $n$ traversals, it would take $O(n \cdot k \cdot m)$.
    - The total amount of time required is $O(n \cdot k \cdot m + k \cdot m) = O(n \cdot k \cdot m)$.

* Space complexity: $O(k \cdot m)$

    - Because we use `similarPairs` to create the graph, the number of nodes and edges can be $O(k)$. To map $O(k)$ words of size $m$, `adj` uses $O(k \cdot m)$ space.
    - In the worst case, the queue can grow to a size linear with $k$. It would need $O(k \cdot m)$ space since each element is of length $m$.
    - We also use a set `visit`, which requires $O(k \cdot m)$ space because it could contain $O(k)$ words in the worst case.

---

### Approach 3: Union Find

#### Intuition

As discussed above, for every $i^{th}$ similar pair $[x_i, y_i]$, our task is to determine whether $x_i = y_i$ or if there exists a path from $x_i$ to $y_i$ in an undirected graph formed by using pairs in `similarPairs`. It means our task is to figure out whether $x_i$ and $y_i$ belong to the same connected component in the graph. This problem can be efficiently solved by using a union-find data structure.

A disjoint-set data structure, also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It implements two useful operations:

a) `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
b) `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

In our union–find data structure, we also add two methods: `addWords` and `isWordPresent`. The method `addWords(x)` adds a new set with the word `x`, if `x` is not already present in the data structure. The method `isWordPresent(x)` returns a boolean indicating if the word `x` is present in the data structure.

We initialize an instance of `UnionFind`, say `dsu`. We iterate over `similarPairs` and for every $i^{th}$ pair, $[x_i, y_i]$, we add $x_i$ and $y_i$ to `dsu` using the `addWords` method. We then perform the `union` of $x_i$ and $y_i$ to move them to the same set.

To check whether `sentence1` and `sentence2` are similar, we iterate over every word at index `i` of the given sentences. We check if the words are the same, i.e., `sentence1[i] = sentence2[i]` or if the words form a similar pair. The words are similar if both of them belong to the same set. The set of a word can be found by using the `find` operation on the word. If the words are similar, we continue to the next word. Otherwise, the words and the given sentences are not similar, so we return `false` as the answer.

#### Algorithm

1. Check if the number of words in `sentence1` and `sentence2` is equal. If the number of words is not equal, return `false`.
2. Create an instance of `UnionFind`, say `dsu`.
3. For every `pair` in `similarPairs`:
    - Add the first word `pair[0]` to `dsu`.
    - Add the second word `pair[1]` to `dsu`.
    - Perform `union` of `pair[0` and `pair[1]`.
6. For every word at index `i` of `sentence1`:
    - If the words are equal, i.e., `sentence1[i] == sentence2[i]`, continue to check the next word.
    - Otherwise, use the `find` operation to find the set of both words. If the words are in the same set, `dsu.find(entence1[i]) == dsu.find(sentence2[i])`, it means they are similar. In this case, we proceed to the next word. Otherwise, if they belong to different sets, the words and sentences are not similar, so we return `false` as the answer.
7. Because we were able to match all the corresponding words of both sentences, we return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/NXAaSg5W/shared" frameBorder="0" width="100%" height="500" name="NXAaSg5W"></iframe>

#### Complexity Analysis

Here, $n$ is the number of words in `sentence1` and `sentence2` and $k$ is the number of similar pairs. Let $m$ be the average length of words in `sentence1`, `sentence2` as well as in `similarPairs.`

* Time complexity: $O((n + k) \cdot m)$

    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression with union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$. Since, we are performing `union` and `find` of strings with average length $m$, we consider it to be $O(m)$.
    -  We iterate over all the elements of `similarPairs` and add both the words in `pair` to `dsu` which takes $O(m)$ each. We then perform `union` which also takes $O(m)$ time per operation. Because there are $k$ pairs, this step will take $O(k \cdot m)$ time for all the pairs. 
    - We iterate over all of `sentence1`'s words to see if the words are equal. Because each word is of $m$ length, this would take $O(m)$ time for each word. It will take $O(n \cdot m)$ time in total because there are $n$ words. If the words are not equal, we perform a `find` operation that takes $O(m)$ per find operation. It would take $O(n \cdot m)$ time for $n$ words.
    - As a result, the total time would be $O((n + k) \cdot m + k \cdot m) = O((n + k) \cdot m)$.

* Space complexity: $O(k \cdot m)$

    - Because there can be $k$ similar pairs, there are $O(k)$ words that are inserted in `dsu`. Since each word has average length $m$, `parent` and `rank` maps would take up $O(k \cdot m)$ space.