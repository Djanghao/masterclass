# Official Solution

**Link:** [https://leetcode.com/problems/balanced-binary-tree/solution/](https://leetcode.com/problems/balanced-binary-tree/solution/)

---

[TOC]

## Solution

---

### Overview

Given the definition of a balanced tree
we know that a tree $$T$$ is *not* balanced if and only if there is some node
$$p\in T$$ such that $$|\texttt{height}(p.left) - \texttt{height}(p.right)| > 1$$. 
The tree below has each node labeled by its height, 
as well as the unbalanced subtree highlighted.

<center>

![pic](../Figures/110/110-unbalanced-wheight-highlighted.png)

</center>

> The balanced subtree definition hints at the fact that we should treat each 
> subtree as a subproblem. The question is: in which order should we solve the 
> subproblems?

---

### Approach 1: Top-down recursion

#### Algorithm

First we define a function $$\texttt{height}$$ such that for any node $$p\in T$$

$$ \texttt{height}(p) = \begin{cases} -1 & p \text{ is an empty subtree i.e. } \texttt{null}\\ 1 + \max(\texttt{height}(p.left), \texttt{height}(p.right)) & \text{ otherwise} \end{cases} $$

Now that we have a method for determining the height of a tree, 
all that remains is to compare the height of every node's children. A tree $$T$$ 
rooted at $$r$$ is balanced if and only if the height of its two children are within
1 of each other and the subtrees at each child are also balanced. Therefore, we can 
compare the two child subtrees' heights then recurse on each one. 

```
isBalanced(root):
    if (root == NULL):
        return true
    if (abs(height(root.left) - height(root.right)) > 1):
        return false
    else:
        return isBalanced(root.left) && isBalanced(root.right)

```

#### Implementation

<iframe src="https://leetcode.com/playground/USH5nvSm/shared" frameBorder="0" width="100%" height="500" name="USH5nvSm"></iframe>

<center>

!?!../Documents/110_Balanced_Binary_Tree_topdown.json:1000,500!?!

</center>

#### Complexity Analysis

* Time complexity : $$\mathcal{O}(n\log n)$$
    * For a node $$p$$ at depth $$d$$, $$\texttt{height}(p)$$ will be called $$d$$ times.

    * We first need to obtain a bound on the height of a balanced tree. Let
    $$f(h)$$ represent the minimum number of nodes in a balanced tree with height $$h$$. 
    We have the relation

    $$f(h) = f(h - 1) + f(h - 2) + 1$$

    which looks nearly identical to the Fibonacci recurrence relation. In 
    fact, the complexity analysis for $$f(h)$$ is similar and we claim that the lower 
    bound is $$f(h) = \Omega\left(\left(\frac{3}{2}\right)^h\right)$$. 
       
    $$
    \begin{aligned}
    f(h+1) &= f(h) + f(h-1) + 1 \\
        &> f(h) + f(h-1) \quad \text{(obviously, since we added 1)} \\
        &\text{This is the Fibonacci recurrence, so} \\
        &\geq \left(\frac{3}{2}\right)^h + \left(\frac{3}{2}\right)^{h-1} \quad \text{(via our claim)} \\
        &= \left(\frac{3}{2}\right)^{h-1} \left( \frac{3}{2} + 1 \right) \\
        &= \left(\frac{3}{2}\right)^{h-1} \cdot \frac{5}{2} \\
        &> \left(\frac{3}{2}\right)^{h-1} \cdot \frac{9}{4} \quad \text{(since } \frac{5}{2} > \frac{9}{4} \text{)} \\
        &= \left(\frac{3}{2}\right)^{h+1}
    \end{aligned}
    $$                                                                          
    
    Therefore, the height $$h$$ of a balanced tree
    is bounded by $$\mathcal{O}(\log_{1.5}(n))$$. With this bound we can guarantee that 
    $$\texttt{height}$$ will be called
    on each node $$\mathcal{O}(\log n)$$ times.

    * If our algorithm didn't have any early-stopping, we may end up having 
    $$\mathcal{O}(n^2)$$ complexity if our tree is skewed since height is bounded by $$\mathcal{O}(n)$$.
    However, it is important to note that we stop recursion as soon as the 
    height of a node's children are not within 1. In fact, in the skewed-tree
    case our algorithm is bounded by $$\mathcal{O}(n)$$, as it only checks the height of 
    the first two subtrees.
        
* Space complexity : $$\mathcal{O}(n)$$. The recursion stack may contain all nodes if the 
    tree is skewed.

**Fun fact**: $$f(n) = f(n-1) + f(n-2) + 1$$ is known as a [Fibonacci meanders](http://oeis.org/wiki/User:Peter_Luschny/FibonacciMeanders)
sequence.


<br />

---

### Approach 2: Bottom-up recursion

#### Intuition

In approach 1, we perform redundant calculations when computing $$\texttt{height}$$.
In each call to $$\texttt{height}$$, we require that the subtree's heights also be
computed. Therefore, when working top down we will compute the height of a subtree
once for every parent. We can remove the redundancy by first recursing on the
children of the current node and then using their computed height to determine 
whether the current node is balanced.

#### Algorithm

We will use the same $$\texttt{height}$$ defined in the first approach. The 
bottom-up approach is a reverse of the logic of the top-down approach
since we *first* check if the child subtrees are balanced *before*
comparing their heights. The algorithm is as follows: 

> Check if the child subtrees are balanced. If they are, use their
> heights to determine if the current subtree is balanced as well as to calculate
> the current subtree's height.

#### Implementation

<iframe src="https://leetcode.com/playground/WPwvhodc/shared" frameBorder="0" width="100%" height="500" name="WPwvhodc"></iframe>

<center>

!?!../Documents/110_Balanced_Binary_Tree_bottomup.json:1000,500!?!

</center>

#### Complexity Analysis

* Time complexity : $$\mathcal{O}(n)$$

    For every subtree, we compute its height in constant time as well as 
    compare the height of its children. 
* Space complexity : $$\mathcal{O}(n)$$. The recursion stack may go up to $$\mathcal{O}(n)$$ if the tree is unbalanced.


<br />