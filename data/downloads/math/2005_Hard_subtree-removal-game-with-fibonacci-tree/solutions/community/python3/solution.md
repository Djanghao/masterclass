# Sprague-Grundy Theory approach

**Author:** hy_li23
**Votes:** 3
**Link:** [https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3275030/](https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3275030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key is to identify sub-games. The Sprague-Grundy theory of impartial normal games is explained in detail in, for instance, 
https://leetcode.com/problems/flip-game-ii/solutions/73954/theory-matters-from-backtracking-128ms-to-dp-0ms/?orderBy=most_votes
also see the references mentioned in the link above, or search for the Sprague-Grundy theory.
And also
https://leetcode.com/problems/game-of-nim/editorial/


# Approach
<!-- Describe your approach to solving the problem. -->
Upon inspection, we may decompose the game into two subgames, corresponding to clipping the right- and left-subtrees respectively. Whenever a player takes a node (necessarily not the root before forced to), take the corresponding node in the sub-games instead.
It is easy to see that the sink (only root node left, hence the final losing state) of the gameplay DAG of the full game is obtained if and only if both sub-games are left with the root, i.e., at the sinks of their gameplay DAG.

Now we need to calculate the Grundy number of the subgames. 

In fact, if $T$ is a tree, and newRoot-$T$ is the tree obtained by attaching $T$'s root to a newRoot, then $g(T)+1 = g(\	ext{newRoot}-T)$. This can be seen by induction. If the configurations $\\{T_k\\}$ can be obtained from $T$, and for all $T_k$, $g(T_k)+1 = g(\	ext{newRoot}-T_k)$, then necessarily $g(T)+1 = g(\	ext{newRoot}-T)$. Note that since we can always attain the state of a single newRoot from newRoot-$T$, there is always $g(\	ext{newRoot}-T) > 0$, since $g(*) = 0$ where * stands for a single node.

Now check the base case $T$ only has one node, and $g(T) =0$, and $g(\	ext{newRoot}-T)=1$ since it is identical to the order-2 Fibonacci tree.

By induction we are done.

So let $g_n$ denote the Grundy number of order-$n$ Fibonacci tree, from SG theory, we have
$$
g_n = (g_{n-1} + 1) \\oplus(g_{n-2} + 1)
$$
where $\\oplus$ stands for the bitwise XOR operation.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$\\mathcal O(n)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Can be made O(1).

# Code
```
class Solution:
    def findGameWinner(self, n: int) -> bool:
        if n==1:
            return False
        elif n==2:
            return True
        g = [1] + [0 for _ in range(n)]
        g[1] = 0
        g[2] = 1
        for i in range(3,n+1):
            g[i] = (g[i-1]+1)^(g[i-2]+1)
        return g[n]!=0
```