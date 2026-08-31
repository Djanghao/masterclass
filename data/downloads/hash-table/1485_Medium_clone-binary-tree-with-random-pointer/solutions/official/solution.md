# Official Solution

**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solution/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solution/)

---

[TOC]

## Solution

### Overview

In this problem, we are given a binary tree root. Each node of the tree has an integer value `val`, and three pointers `left`, `right`, and `random` pointing to other nodes.

Our task is to make a deep copy of this tree, i.e. copy every node and make similar connections between the new nodes as the given tree has.

--- 

### Approach 1: Depth-First Search On Binary Tree (2 Passes)

#### Intuition

Let's start with an easy problem, if we had a normal binary tree with only `left` and `right` pointers, then how do you think we could solve this problem?    
As we need to make copies of all nodes we just need to traverse all the nodes of the given tree recursively using depth-first search and create respective new nodes for each traversed node, thus creating a deep copy.

> If you are new to DFS: we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.   
> When we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch and recursively call the `dfs` function to take this next node as the 'starting node' and solve the subproblem (i.e. traverse on its neighbors).  <br />    
> If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!


!?!../Documents/1485/slideshow1.json:1024,768!?!


Similarly, in this problem, if we generate a new tree similar to the given tree without connecting the new tree's node's random pointers, then our only remaining task will be to connect the new tree's node's random pointers to their respective nodes.

We know which node the random pointer of any current node (node of the given tree) points to,   
and if we store what is the respective new node (the copied node) for any old node (we can use a hash map mapping old nodes to their respective new copied node).  
Then we can easily tell which node the random pointer of the new node should point to, like this: 

$A_{old} \text{'s random node} \rightarrow X_{old}$      
$A_{old} \text{'s respective new node} \rightarrow A_{new}$       
$X_{old} \text{'s respective new node} \rightarrow X_{new}$       

Thus, this implies,   
$A_{new} \text{'s random node} \rightarrow X_{new}$


![random_node](../Figures/1485/Slide29.PNG)


Thus, first, we will iterate on the given tree to make a new tree without connecting its random pointers, and   
storing the respective old and new node pairs in a hash map `newOldPairs`.

Then we will iterate over the given tree again to find the respective new node's random node using the hash map `newOldPairs`.


#### Algorithm

1. Initialize a hash map `newOldPairs` which maps the old tree's nodes with the respective new tree's node. 
2. Create a function `deepCopy(root)` which takes the given tree's root as a parameter and returns the new tree's root:
    - If `root` is `NULL`, then the respective new tree's node will also be `NULL`.
    - Create a new node `newRoot` with the same values as `root`.
    - Call `deepCopy(root->left)` and `deepCopy(root->right)` to create left and right nodes of `newRoot` and attach them to it.
   - Store the `root` and `newRoot` pair in hash map `newOldPairs` and return the new tree's root, `newRoot`.
3. Create a function `mapRandomPointers(oldNode)` which takes the given tree's root as a parameter:
    - If `oldNode` is `NULL`, then there is no need to proceed further.
    - We find the random node `newRootRandom` of `newRoot` as discussed previously and make the connection.
    - Call `mapRandomPointers` on its left and right subtrees.
4. Create a deep copy of the tree with root `root` using the function `deepCopy(root)`.
5. Map all random pointers of the new tree using function `mapRandomPointers(root)`.
6. Return `newRoot`.

#### Implementation


<iframe src="https://leetcode.com/playground/gmVyaeru/shared" frameBorder="0" width="100%" height="500" name="gmVyaeru"></iframe>


#### Complexity Analysis

Here, $n$ is the number of nodes in the given tree.

* Time complexity: $O(n)$   
  - We traverse each node of the given tree twice using functions `deepCopy` and `mapRandomPointers`.   
    Thus, it will take us $O(n)$ time.
* Space complexity:  $O(n)$    
  - We store all $n$ nodes of the given tree in the hash map `newOldPairs` as key.    
  - And the recursive stack might have $n$ elements in it.    
    Thus, we use $O(n)$ space.

---

### Approach 2: Depth-First Search On Graph (1 Pass)

#### Intuition

Let's say we were given a graph to be cloned (the difference between a graph and a tree is that we could have loops and disconnected components in graphs).

As in the previous approach, we saw to clone a binary tree we traverse each node once and make a clone of that node. Similarly, if we had a graph then we just need to traverse each node once and clone it. If we traverse on the same node again (as loops are possible in the graph), then we won't copy it again and stop.

Thus the given binary tree with a random pointer can also be considered a graph with only one component and at most 3 edges from each node. So we just need to traverse each node once using DFS and clone them.

![dfs](../Figures/1485/Slide31.PNG)

To mark if a node is already visited or not, we will use a hash map `seen`, which returns the respective new node if the node of the given tree was already cloned before.

We are attaching the following slideshow to show how depth-first search works on our graph:

!?!../Documents/1485/slideshow2.json:1024,768!?!


#### Algorithm

1. Initialize a hash map `seen` which stores the new node if the old node was already traversed before. 
2. Create a function `dfs(root)` which takes the given tree's root as a parameter and returns the new tree's root:
    - If `root` is `NULL`, then the respective new tree's node will also be `NULL`.
    - If `root` is already present in the hash map `seen`, it was already traversed, thus we return the respective new node `seen[root]` we created earlier.
    - Create a new node `newRoot` with the same value as `root`.
   - Store the `root` and `newRoot` pair in the hash map `seen` to mark `root` as visited.
    - Call `dfs` on left, right, and random edges of `root` and attach the returned new nodes to the `newRoot`.
3. Create a deep copy of the tree with root `root` using the function `dfs(root)` and return it.


#### Implementation


<iframe src="https://leetcode.com/playground/A6mJihe4/shared" frameBorder="0" width="100%" height="500" name="A6mJihe4"></iframe>


#### Complexity Analysis

Here, $n$ is the number of nodes in the given tree.

* Time complexity: $O(n)$   
  - We traverse each node and edge of the given graph using the function `dfs`.  There will be $n$ nodes and $3n$ edges in the worst case.   
  - Thus, it will take us $O(n + 3n) = O(n)$ time.
* Space complexity:  $O(n)$    
  - We store all $n$ nodes of the given graph in the hash map `newOldPairs` as key.
  - And in the worst case, the recursive stack may have $n$ elements in it.
  - Thus, we use $O(n)$ space.

---


### Approach 3: Breadth-First Search on Graph

#### Intuition

Just like the previous approach, we can also use a breadth-first search to traverse all the nodes and edges of our graph and clone them.

> BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `L`) are explored before moving on to the nodes at the next level (`L + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.  <br />   
> If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).


#### Algorithm

1. Initialize a hash map `seen` which stores the new node if the old node was already traversed before. 
2. Create a function `bfs(root)` which takes the given tree's root as a parameter and returns the new tree's root:
    - If `root` is `NULL`, then the respective new tree's node will also be `NULL`.
    - We create a queue `pending`, push the `root` node in it and store it with its respective new node in the hash map `seen` to mark it as visited.
    - While we have nodes in our `pending` queue:
        - We get the current node `oldNode` from queue and current node's respective new node `newNode` from hash map.
        - If `oldNode`'s left child exists and it is not present in the `seen` hash map then we create a new node, put it in the hash map and queue, and attach the `newNode`'s left pointer with this newly created node.
        - Similarly, we repeat the above step for `oldNode`'s right and random pointer nodes. 
        - Thus, we will attach the left, right and random pointers and will only push unvisited nodes in the `pending` queue.
        - We return the respective new node of `root` using hash map `seen`.
3. Create a deep copy of the tree with root `root` using the function `bfs(root)` and return it.

#### Implementation


<iframe src="https://leetcode.com/playground/UUzzPA7f/shared" frameBorder="0" width="100%" height="500" name="UUzzPA7f"></iframe>


#### Complexity Analysis

Here, $n$ is the number of nodes in the given tree.

* Time complexity: $O(n)$   
  - We traverse each node and edge of the given tree using the function `bfs`.  There will be $n$ nodes and $3n$ edges in the worst case.   
  - Thus, it will take us $O(n + 3n) = O(n)$ time.
* Space complexity:  $O(n)$    
  - We store all $n$ nodes of the given tree in the hash map `newOldPairs` as key.       
  - And in the worst case, the `pending` queue may have $n$ elements in it.
  - Thus, we use $O(n)$ space.

---