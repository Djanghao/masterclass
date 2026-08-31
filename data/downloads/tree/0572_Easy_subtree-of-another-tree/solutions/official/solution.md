# Official Solution

**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solution/](https://leetcode.com/problems/subtree-of-another-tree/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given roots of two binary trees, `root` and `subRoot`. We need to check if there is a subtree in the "tree rooted at `root`" such that the structure and node value of that subtree is the same as the "tree rooted at `subRoot`".

Throughout the article we will use the following notation:

- $N$ is the number of nodes in the tree rooted at the `root`  

- $M$ is the number of nodes in the tree rooted at `subRoot`

Note that for the tree rooted at `subRoot` to be a subtree of the tree rooted at `root`, $N \geq M$. However, we don't know $M$ and $N$ beforehand. So, we can't immediately return `false` if $N < M$.

Thus, whatever may be the approach, we ultimately have to compare both trees. In the article, we will see how to make this comparison optimal.

---

### Approach 1: Depth First Search

#### Intuition

Let's consider the most naive approach first. We can traverse the tree rooted at `root` (using Depth First Search) and for each `node` in the tree, check if the "tree rooted at that `node`" is identical to the "tree rooted at `subRoot`". If we find such a `node`, we can return `true`. If traversing the entire tree rooted at `root` doesn't yield any such `node`, we can return `false`.

Since we have to check for identicality, again and again, we can write a function `isIdentical` which takes two roots of two trees and returns `true` if the trees are identical and `false` otherwise.

Checking the identicality of two trees is a classical task. We can use the same approach as the one in [Same Tree](https://leetcode.com/problems/same-tree/) Problem. We can traverse both trees simultaneously and  

- if any of the two nodes being checked is `null`, then for trees to be identical, both the nodes should be `null`. Otherwise, the trees are not identical.  

- if both nodes are non-empty. Then for the tree to be identical, ensure that  
  - values of the nodes are the same  
  - left subtrees are identical  
  - right subtrees are identical  

#### Algorithm

1. Create a function `dfs` that takes `node` as the argument. This function will return `true` if the "tree rooted at `node`" is identical to the "tree rooted at `subRoot`" and `false` otherwise.    
   
    Now, if for any `node`, "tree rooted at `node`" is identical to the "tree rooted at `subRoot`", then we can be sure that there is a subtree in the "tree rooted at `root`" which is identical to the "tree rooted at `subRoot`".

2. For `dfs`,   
   
    - if `node` is `null`, we can return `false` because the `null` node cannot be identical to a tree rooted at `subRoot`, which as per constraints is not `null`.
 
    - else if, check for the identicality of the "tree rooted at `node`" and the "tree rooted at `subRoot`" using the function `isIdentical`, if trees are identical, return `true`.
   
    - otherwise, call the `dfs` function for the left child of `node`, and the right child of `node`. If either of them returns `true`, return `true`. Otherwise, return `false`.    
  
3. Create the function `isIdentical` which takes two roots of two trees (namely `node1` and `node2`) and returns `true` if the trees are identical and `false` otherwise. 
   
4. For `isIdentical`,  
   
    - if any one of the two nodes is `null`, then both should be `null` for the trees to be identical. Otherwise, the trees are not identical, and we can return `false`.
  
    - if both nodes are not `null`, then for trees to be identical, all three conditions should be met.   

        - the values of the nodes should be the same. This can be checked by `node1->val == node2->val`

        - left subtrees should be identical. This can be checked by `isIdentical(node1->left, node2->left)`
       
        - right subtrees should be identical. This can be checked by `isIdentical(node1->right, node2->right)`  


5. Now, call the function `dfs` for the root of the tree rooted at `root`. If it returns `true`, return `true`. Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/Wi96RGYS/shared" frameBorder="0" width="100%" height="500" name="Wi96RGYS"></iframe>

#### Complexity Analysis

* Time complexity: $O(MN)$. For every $N$ `node` in the tree, we check if the tree rooted at `node` is identical to `subRoot`. This check takes $O(M)$ time, where $M$ is the number of nodes in `subRoot`. Hence, the overall time complexity is $O(MN)$.
    
* Space complexity: $O(M+N)$.   
    
    There will be at most $N$ recursive call to `dfs` ( or `isSubtree`). Now, each of these calls will have $M$ recursive calls to `isIdentical`. Before calling `isIdentical`, our call stack has at most $O(N)$ elements and might increase to $O(N + M)$ during the call. After calling `isIdentical`, it will be back to at most $O(N)$ since all elements made by `isIdentical` are popped out. Hence, the maximum number of elements in the call stack will be $M+N$. 

---

### Approach 2: String Matching

#### Intuition

In this problem, what we are doing can be broadly labeled as pattern matching. We are trying to match the "tree rooted at `root`" portion with the "tree rooted at `subRoot`". As you may recall, [String Matching](https://leetcode.com/tag/string-matching/) is a famous field in pattern matching, and we have many classical algorithms in this field. Particularly, we have a very similar problem but with strings: [finding if a string is a substring of another string](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/).

> **Can we somehow port the String Matching to this problem?**   
Yes, we can if there is a mechanism to convert the trees into strings and then use string-matching algorithms to solve this problem. After that, the problem boils down to [finding if a string is a substring of another string](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/). 

The task now is to find a mechanism to transform the trees into strings. This comes under the standard [Tree Serialization Problem](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) problem.

What we can do is convert the trees into strings. Let `r` be the string corresponding to the tree rooted at `root` and `s` be the string corresponding to the tree rooted at `subRoot`. Then, we can check if `s` is a substring of `r`. If it is, then `subRoot` is a subtree of `root`. If not, then `subRoot` is not a subtree of `root`.

However, there are multiple pitfalls in this approach. 

**How to serialize a tree into a string?**  
_Note that serialization contains information about the node values as well as information about the tree structure._

##### Tree Traversals [Incorrect]

The most intuitive way is to traverse the tree and add each node's value to the string. Now, there are multiple ways to [traverse the tree](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/). We can either do a pre-order traversal, in-order traversal, post-order traversal, or can even do a level-order traversal. However, it turns out that none of them is sufficient to uniquely identify a tree. This can be understood by the following examples:

Let our tree rooted at `root` be `t`

![t](../Documents/572/572_root_tree_t.svg){:align="center"}

1. [Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) of `t` is `[1, 2, 3, 4, 5]`, serialized as `12345`.
    Consider these two trees `p` and `q`

    ![level_fp](../Documents/572/572_level_pre.svg){:align="center"}

    Both have level order traversals as `345`, hence level order traversal of both trees is a substring of `12345`. However, `p` is a subtree of `t`, but `q` is not a subtree of `t`. It is a case of False Positive.

    Moreover, consider tree `x`. 

    ![level_fn](../Documents/572/572_root_tree_x.svg){:align="center"}

    From the diagram, we can see that `p` is a subtree of `x`. Now, the level-order traversal of `x` is `123645`. But, the string of `p`, `345`, is not a substring of `123645`. It is a case of False Negative. 

2. [Pre Order Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) of `t` is `12345`.
    Consider these two trees `p` and `q`

    ![pre](../Documents/572/572_level_pre.svg){:align="center"}

    Both have pre-order traversals as `345`, hence pre-order traversal of both trees is a substring of `12345`. However, `p` is a subtree of `t`, but `q` is not a subtree of `t`. 

3. [Post Order Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) of `t` is `24531`.
    Consider these two trees `p` and `q`

    ![post](../Documents/572/572_post.svg){:align="center"}

    Both have post-order traversals as `453`, hence post-order traversal of both trees is a substring of `24531`. However, `p` is a subtree of `t`, but `q` is not a subtree of `t`. 

4. [In Order Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) of `t` is `21435`.
   Consider these two trees `p` and `q`

    ![in](../Documents/572/572_in.svg){:align="center"}

    Both have in order traversals as `435`, hence in order traversal of both trees is a substring of `21435`. However, `p` is a subtree of `t`, but `q` is not a subtree of `t`.
   
Thus, a single traversal is not sufficient, since inorder, preorder, or postorder traversal of different binary trees can be the same.

##### Two Traversals [Incorrect]

> For Constructing a Unique Binary Tree from traversal, we necessarily need to know its Inorder Traversal along with either [Preorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) or [Postorder](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) Traversal. 
> 
> Note that we can't construct a unique binary tree from only Preorder or Postorder Traversal, inorder traversal is necessary.    
> 
> Suppose we are given preorder as `XY` and postorder as `YX`. It is clear that `X` is the root, but we can't find out whether `Y` is the left child or right child of `X`.

Using the above fact, one might induce to include both Inorder and Preorder (or Inorder and Postorder) Traversal in the string. However, this is not sufficient either. Consider these examples

1. Tree might contain duplicate nodes. Hence, the "inorder and preorder (or inorder and postorder)" traversal of two different trees can be the same.    
        
    **q**  

       
         3
        / \
       2   4

       Inorder  : 234
       Preorder : 324
         
   
    **t**   
         
      
             1
            / \
           4   4
          / \ 
         2   2
        / \ 
       1   3

       Inorder  : 1234214
       Preorder : 1421324
         

    Now, `234` is contained in `1234214`, **and** `324` is contained in `1421324`. However, as visible `q` is not a subtree of `t`.

2. Even if node values are unique, we can't use "inorder and preorder (or inorder and postorder)" traversal. Consider this example.

    **q**     
        
         4
        / \
       3   5

       Inorder  : 345
       Preorder : 435
        
   
    **t**    
       
         2  
        / \ 
       1   4
          / \
         3   5
              \
               6

       Inorder  : 123456
       Preorder : 214356
       
    Now, `345` is contained in `123456`, **and** `435` is contained in `214356`. However, `q` is not a subtree of `t`.

    Another simple example of the same  
    **a**
       
         1
        / \
       2   3

       Inorder  : 213
       Preorder : 123
        
   
    **b**
         
         1  
        / \ 
       2   3
            \
             4

       Inorder  : 2134
       Preorder : 1234
        
    
    Again, `213` is contained in `2134`, **and** `123` is contained in `1234`. However, `a` is not a subtree of `b`.

    One might get confused that why `a` is not a subtree of `b`. The reason is that, in `b`, `3` has a right child `4`, but in `a`, `3` doesn't have any right child. Hence, `a` is not a subtree of `b`.   
    More technically, left and right children of `3` of `a` are not the same as the left and right children of `3` of `b`. A similar case holds for `5` of `q` and `5` of `t` of Example-2.

##### Correct Serialization Method

It turns out that if we include `#` or any other character for the `null` node while serializing, then **we can uniquely identify a tree**, that too with only one traversal (either preorder or postorder). 

> **Preorder Traversal (or postorder traversal) with markers for `null` node unique determines Binary Tree**    
>
> In preorder traversal, we are sure that the first node is the root node. Now, the next node in the serialized is the root of the left subtree. If the next node is  
> 
> - `#` node, it means that the root node doesn't have any left child. The node after `#` will be the root of the right subtree. 
>  
> - non-`#` node, which means that the root node has a left child. The node after the left child will be the root of the left subtree of the left child. If the next node is  
>  
>   - `#` node, it means that the left child doesn't have any left child. The node after `#` will be the root of the right subtree of the left child.
>   - non-`#` node, which means that the left child has a left child. The node after the left child will be the root of the left subtree of the left child of the left child. And so on.
> 
> Thus, with preorder traversal, we can determine the root, and its left and right subtree.
>
> _As an exercise, readers can verify for all examples discussed so far that if we include `#` for NULL Node, then [pre-order](https://leetcode.com/problems/subtree-of-another-tree/) (or post-order) traversal is unique._

<!--  -->

> Please note that **only** in-order traversal (with markers for NULL Node) is still **not** sufficient to uniquely identify, as it is difficult to locate the root node in the serialized string as the root is visited in between the left and right subtree. Consider these two trees.
>
>   ```   
>            1                   2
>           /  \                /  \
>          2    2              1    4
>              /  \           / \  
>             3    4         2   3 
>   ```   
>
> Both have in-order traversal as `#2#1#3#2#4#`.

Now, if we have $N$ nodes in a tree, then there will be $N+1$ `null` nodes in the tree. Hence, the serialized string will have $2N+1$ characters. 

However, there is again one minute limitation. Consider these two single-node trees.

```
    2               22
```

They have serialized pre-order strings as `2##` and `22##` respectively. Now, since `2##` is a substring of `22##`, our approach will conclude that the first tree is a subtree of the second tree. However, this is not the case.

We can overcome this by adding a character (let it be `^`, or simply space ` `) before adding the node's value. Now, `^2##` is not a substring of `^22##`.   
*(Has it been postorder traversal, we need to add `^` after adding the node's value.)*

##### String Matching Algorithms

After serializing both the trees, with the above-mentioned approach, we need to check if the string corresponding to `subRoot`, named as `s` is in string corresponding to `root`, named as `r`. This comes under the classic [string matching](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) problem. 

> The naive approach for string matching is $O(R \times S)$, where $R$ is the length of string `r` and $S$ is the length of string `s`. However, there are better algorithms like the **Knuth-Morris-Pratt** algorithm, which can do it in $O(R + S)$ time. For understanding KMP, one may check this [editorial](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial)

Hence, concluding we will serialize two trees into strings, and then check if the string corresponding to `subRoot` is a substring of the string corresponding to `root` using the Knuth-Morris-Pratt algorithm.

#### Algorithm

1. Define a function `serialize` which takes a `node`, and a string/list `tree_str` and serializes the node by appending it to that list. This function will serialize the tree in preorder traversal and will add `^` before adding the node's value. For `null` nodes, it will add `#`. 

2. Serialize `root` and `subRoot` into strings `r` and `s` respectively.

3. Check if `s` is a substring of `r`. There are multiple ways of doing so.
   
    - one can use inbuilt `indexOf` function in Java, or `find` function in Python, or `index` function in C++.  
 
    - one can use [Naive approach]((https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial)).
 
    - one can use the linear Knuth-Morris-Pratt algorithm, which is discussed in [this editorial](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial).

4. Return `true` if `s` is a substring of `r`, else return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/SJbStznB/shared" frameBorder="0" width="100%" height="500" name="SJbStznB"></iframe>

**Implementation Notes**     

- While serializing one should avoid concatenating strings in programming languages where strings are immutable because concatenating strings takes linear time. Instead, one should use a `StringBuilder` or `StringBuffer` in Java, or `list` in Python. If we concatenate a string of length $O(N)$ about $O(N)$ times, then the total time complexity will be $O(N^2)$.

- Now, `string` in C++ is mutable, so we can concatenate strings. The `+` operator wouldn't create a new string each time. It would just append the new string to the existing string. Therefore, we can use the `+` operator to concatenate strings in C++.

#### Complexity Analysis

* Time complexity: $O(M+N)$. 

    - The function `serialize` is similar to the preorder traversal of the tree. So, it takes $O(N)$ time for `root` and $O(M)$ time for `subRoot`.

    - If there are $N$ nodes in `root`, then serialized string `r` will have 
        - $O(N)$ integers _(Note that it will not be exactly $N$ because if any node's value is 10000, then it is contributing 5 characters, however, since `-10⁴ <= root.val <= 10⁴`, there can be at most $5N$ integer characters)_, 
        - $N+1$ `#` characters corresponding to `null` nodes, 
        - $N$ `^` characters, and 
        - at most $N$ `-` character, for negative numbers. 
        - So, the total number of characters in `r` will be $O(N+N+1+N+N)$, which is $O(N)$.  
      
      Similarly, for `subRoot`, the total number of characters in `s` will be $O(M)$.
    
    - The function `kmp` takes $O(M+N)$ time.
    
    - Hence, the total time complexity is $O(N+M+N+M)$, which is $O(N+M)$.
* Space complexity: $O(M+N)$. 
    
    This is because of the recursive calls in the `serialize` function. The maximum depth of the recursive calls will be $O(N)$ for `root` and $O(M)$ for `subRoot`. So, the total space complexity is $O(N+M)$. Moreover, `kmp` also requires $O(M)$ space.

---


### Approach 3: Tree Hash

#### Intuition

It turns out that tree comparison is expensive. In the very first approach, we need to perform the comparison for at most $N$ nodes, and each comparison cost $O(M)$. If we can somehow reduce the cost of comparison, then we can reduce the overall time complexity

You may recall that the cost of comparison of two integers is constant. As a result, if we can somehow transform the subtree rooted at each `node` to a unique integer, then we can compare two trees in constant time. 

> **Is there any way to transform a tree into an integer?**    
> Yes, there is. We can use the concept of [**Hashing**](https://leetcode.com/explore/learn/card/hash-table/).

We want to hash (map) each subtree to a unique value. We want to do this in such a way that if two trees are identical, then their hash values are equal. And, if two trees are not identical, then their hash values are not equal. This hashing can be used to compare two trees in $O(1)$ time.

We will build the hash of each node depending on the hash of its left and right child. The hash of the `root` node will represent the hash of the whole tree because to build the hash of the `root` node, we used (directly, or indirectly) the hash values of all the nodes in its subtree.

If any `node` in "tree rooted at `root`" has hash value equal to the hash value of "tree rooted at `subRoot`", then "tree rooted at `subRoot`" is a subtree of "tree rooted at `root`", provided our hashing mechanism maps nodes to unique values.

There can be multiple ways of hashing the tree. We want to use that mechanism which is   

- Simple to calculate 
- Efficient
- Has minimum spurious hits

> **Spurious Hits:** If hash values of two trees are equal, and still they are not identical, then we call it a spurious hit. A spurious hit is a case of False Positive. 

One can use any hashing function which guarantees minimum spurious hits and is calculated in $O(1)$ time. We will use the following hashing function.   

- If it's a `null` node, then hash it to `3`. (We can use any prime number here)
  
- Else,   
    - left shift the hash value of the left node by some fixed value.  
    - left shift hash value of right node by 1  
    - add these shifted values with this `node->val` to get the hash of this node.
  
Please note that one should avoid concatenating strings for hash value purposes because it will take $O(N)$ time to concatenate strings.

To ensure minimum spurious hits, we can map each node to two hash values, thus getting one hash pair for each node. Trees rooted at `s` and Tree rooted at `t` will have the same hash pair **iff** they are identical, provided our hashing technique maps nodes to unique hash pairs. 

> One can read more about this in [Editorial](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial) of [28. Find the Index of the First Occurrence of a String in Another String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial).

#### Algorithm

1. Define two constants `MOD_1` and `MOD_2` as two large prime numbers. 
   
2. Initialize a `memo` set to memoize hash values of each node in the tree rooted at `root`. Please ensure that the data structure for memoizing has constant time insertion.
   
3. Define function `hashSubtreeAtNode` which takes two parameter, `node` and `needToAdd`. It essentially returns the hash pair of the subtree rooted at `node`.  

    - If `node` is `null`, then return hash pair `(3, 7)`. Note that we can return any two values.  

    - Else, compute the hash pair of this node using the left and right child's hash pair.    
    - For the first hash of the pair   
      - left shift the first hash of the left node by some fixed value.
      - left shift the first hash of the right node by 1 (or some other fixed value)
      - add these shifted values with this node's value to get the first hash of this node.
      - take `MOD_1` at each step to avoid overflow. 
    - For the second hash of the pair   
      - left shift the second hash of the left node by some fixed value (different from what was used for the first element of the pair).
      - left shift the second hash of the right node by 1 (or some other fixed value)
      - add these shifted values with this node's value to get the second hash of this node.
      - take `MOD_2` at each step to avoid overflow. 
    - If `needToAdd` is `true`, then add this hash pair to `memo`.
    - Return the hash pair of this node.

4. Call `hashSubtreeAtNode(root, true)`, for calculating the hash of `root`, we will calculate the hash of every node in the tree rooted at `root`. The `true` value of `needToAdd` means we will add every computed hash to the `memo`.

5. Now, call `hashSubtreeAtNode(subRoot, false)`. This will calculate the hash of `subRoot` and will not add it to the `memo`. If the hash pair of `subRoot` is present in `memo`, then `subRoot` is a subtree of `root`. Hence, return if `hashSubtreeAtNode(subRoot, false)` is present in `memo` or not.


#### Implementation

<iframe src="https://leetcode.com/playground/eeCo9LGA/shared" frameBorder="0" width="100%" height="500" name="eeCo9LGA"></iframe>

- We have avoided using `set` in C++ and `TreeSet` in Java because adding values to these data structures takes logarithmic time. However, it is possible to write a custom hash function so that `unordered_set` in C++ and `HashSet` in Java can be used, which takes constant time. Here, we just use a `vector` in C++ and `List` in Java since we only need to look up once.   
- In Python, we have used `set` because adding to `set` takes constant time. And thus we can avoid linear time checks. Although, the overall time complexity will be the same.
- In C++, we have used `unsigned long long` to avoid overflow. Notice that `left[1]` can be at most $MOD_2 - 1 = (2^{31} - 1) - 1$. Since we need to left shift $7$ during hash, we may have $(2^{31}-2) \times 2^7 \approx 2^{38}$. Thus, we need a data type of size of at least $38$ bits. In [C++](https://en.cppreference.com/w/cpp/language/types), the standard ensures `unsigned long long` is at least $64$ bits, which can store $2^{64}-1$, and it is much larger than $2^{38}$.     
  Similar constraint is fulfilled by `long` in [Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)


#### Complexity Analysis

* Time complexity: $O(M+N)$. 
    
    We are traversing the tree rooted at `root` in $O(N)$ time. We are also traversing the tree rooted at `subRoot` in $O(M)$ time. For each node, we are doing constant time operations. After traversing, for lookup we are either doing $O(1)$ operations, or $O(N)$ operations. Hence, the overall time complexity is $O(N+M)$.

* Space complexity: $O(M+N)$. 
  
    We are using `memo` to store the hash pair of each node in the tree rooted at `root`. Hence, for this, we need $O(N)$ space.  
    Moreover, since we are using recursion, the space required for the recursion stack will be $O(N)$ for `hashSubtreeAtNode(root, true)` and $O(M)$ for `hashSubtreeAtNode(subRoot, false)`.  
    Hence, overall space complexity is $O(M+N)$.

---