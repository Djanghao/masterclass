# Official Solution

**Link:** [https://leetcode.com/problems/game-of-nim/solution/](https://leetcode.com/problems/game-of-nim/solution/)

---

[TOC]

## Solution

---

### Overview

Nim is a classic strategy game for two players. Variants of this game have existed since ancient times.

!?!../Documents/1908/example-play.json:960,540!?!

<br />

In this game version, we are given $n$ piles of stones. Two players take turns alternatively. In one turn, a player can choose a non-empty stack and remove one or more stones from that stack. The player that takes the last turn wins the game. Since each move results in at least one less stone, the game ends after a finite number of moves.

We present two ways to solve this problem. One that's more intuitive to come up with but less efficient. The other one is much more efficient and extremely easy to implement but difficult to come up with. From an interview perspective, the first approach is more reasonable.

---

### Approach 1: Simulation - Dynamic Programming

#### Intuition

From the problem description, there are a few observations we can make.

1. Each turn, a player must pick at least one stone. So the number of stones decreases as the game progresses. This means the game definitely has an end; in other words, it has a finite number of moves. The game ends when all the piles have zero stones. The player to make the last move is deemed the winner.
2. If a player wins, this means the opponent loses. There is no situation where the game ties or draws.

The question also states that both players are rational. While in casual use, the word 'rational' may have different interpretations; it has a precise meaning in the context of a game. If the players are rational, we assume they won't make any "mistakes". The result of the game is determined by the initial conditions because the players play perfectly.

Say you are playing a game for real, and five different moves are available on your turn. In four of those moves, you can see that your opponent will win the game. But in the remaining one, you end up winning the game. Would you make a winning move or a move that ends up in a loss? Obviously, you don't want to lose the game by making a mistake here. So, you make the right move, and you win the game.

Now, take another condition. You have five moves available, but the opponent finds a way to win in all of them. In other words, there is no way for you to win. So you lose the game.

Let's put these conditions more formally here -

1. A player wins if at least one move exists where the opponent loses.
2. A player loses if the opponent wins in all the moves available.
3. A player loses when they have no moves available.

!?!../Documents/1908/game-of-nim-conditions.json:960,540!?!

<br />

With these conditions, we are well-equipped to move forward. In this approach, we try to peek into the future by trying out all possible scenarios. This also gives us a hint that we are going to use recursion. We define the current state and enumerate all possible moves and the resulting state from those moves. We do it until all the piles are reduced to $0$; that's our base case.

The following pseudocode might work as the skeleton of our algorithm:

```
isWinner(state)
    # termination condition, when all the piles are zero
    # the current player loses the game
    if all piles are zero
        return false
    for each nextState in allNextStates
        # nextState is for the next player's turn
        # if the next player loses, the current player wins
        if not isWinner(nextState)
            return true
    
    # the next player wins in all states after a move
    # so the current player loses the game
    return false
```

##### Defining the state

We define the current state using the heights of the piles taken together. So, $[1, 2, 1]$ defines a state where the first pile has $1$ stone, the second pile has $2$ stones, and the third pile has $1$ stone. In this state, there are four moves available:

1. Pick one stone from the first pile. The resulting state - $[0, 2, 1]$.
2. Pick one stone from the second pile. The resulting state - $[1, 1, 1]$.
3. Pick two stones from the second pile. The resulting state - $[1, 0, 1]$.
4. Pick one stone from the third pile. The resulting state - $[1, 2, 0]$.

Let's visualize the gameplay and all possibilities using a tree. Each node of the tree represents a specific state of the gameplay. The root represents the given state of the game. When we make a move, the state changes and all possible states after a move are displayed as the children of the respective node in the tree.

!?!../Documents/1908/game-tree.json:960,540!?!

We can observe that if there are $n$ piles with $m$ stones in each stack, its sums up to $m \cdot n$ stones in total. We can remove any number of stones from a pile of our choice. This means there are $m \cdot n$ possible states after a move. As a result, this generates $m \cdot n$ children for the given node. At every turn, we have to make at least one move. So, the depth of the recursion tree would be equal to the number of stones, i.e., $m \cdot n$.

The total number of nodes in the whole tree will have an upper bound of $(m \cdot n) ^{m \cdot n}$. To find an answer, our algorithm will need to pass through these many nodes, so the time complexity will also be $O((m \cdot n) ^{m \cdot n})$. Can we optimize it, though?

##### Memoization

Memoization is a technique where we store the result of a given state in a hash. The hash key represents a state, and its corresponding value represents the computed result for that state. This technique could be helpful if we find the same state appearing multiple times in the recursion tree. It saves us repeated calculations by storing the result of the earlier calculations.

You might have noticed that the state $[1, 0, 1]$ appears multiple times in the example given above. So rather than computing its result again by going down the subtree, we can store its result in a hash `memo` when we come across the state for the first time. In the subsequent visits, the same result can be used again.

!?!../Documents/1908/nim-memoization.json:960,540!?!

<br />

Memoization brings the number of nodes significantly down. For $m$ number of stones in each pile, there are $m + 1$ configurations of each pile (assuming $0$ as one combination). For $n$ piles, there are $(m + 1) ^ {n}$ configurations or states possible. We can generate a maximum of $m \cdot n$ child nodes in each of these states. So the time complexity comes down from $O((m \cdot n) ^ {m \cdot n})$ to $O(n \cdot m ^ {n + 1})$.

Can we do better?

Notice in this approach, we are counting different permutations of an arrangement of piles as separate states. e.g., From the starting state of $[2, 2, 2]$, if we remove one stone from every pile, we get the following states - $[1, 2, 2]$, $[2, 1, 2]$, $[2, 2, 1]$. These might be counted as three different moves, but the outcome in all three cases will be the same since the order of piles doesn't matter here. So, these are equivalent states, and we should ideally treat them as one state. To do so, we sort the pile in increasing order and then see if we have come across the state before.

This involves the additional overhead of sorting the piles, but it saves us from computing the subtrees of equivalent states multiple times.

#### Algorithm

1. We create a hash map for memoization. We store the game's results for a given state in the hash map. In other words, the hash map stores whether a player wins or loses the game for a given state.
2. We create a recursive function determining whether the current player wins the game. The function takes in the state of the piles as an argument. We name this function `isNextPersonWinner` because we always call it from the context of the other player.
3. We check if the state is already in our hash map. If it is, we return the result stored in the hash map.
4. Otherwise, we check if all the piles are zero. If they are, the current player loses the game, and we return false.
5. If the piles are not zero, we check all the next possible states.
6. For all the following states, we sort the next state before making the recursive call. Sorting the piles ensures that the order of the piles does not affect the result. For example, if there are three piles, [1, 0, 0], [0, 1, 0], and [0, 0, 1], we only need to check the first pile. If the first pile is zero, the piles become [0, 0, 0] for the next player. We check if the next player wins in the next state. If the next player loses, the current player wins, and we return true.
7. If the next player wins in all states after a move, the current player loses the game, and we return false.


#### Implementation

<iframe src="https://leetcode.com/playground/jBeHWX3J/shared" frameBorder="0" width="100%" height="500" name="jBeHWX3J"></iframe>

#### Complexity Analysis

Let $n$ be the number of piles, and $m$ be the maximum number of stones in a heap.

* Time complexity: $O(n^2 \cdot m \cdot C_{n}^{n + m - 1} \cdot \log n)$
    
  * The number of states in the game tree - we have $n$ places to fill with $m$ possible values. Each value can be repeated. The order of these values does not matter (as explained above in the context of equivalent states). Thus, determining the number of states is similar to determining the number of ways of [choosing $n$ objects from $m$ different kinds of objects with repetitions](https://math.libretexts.org/Courses/Monroe_Community_College/MTH_220_Discrete_Math/7%3A_Combinatorics/7.5%3A_Combinations_WITH_Repetitions#Combination_with_Repetition_formula). Thus, the number of states is $C_{n}^{n + m - 1}$ ($C$ stands for [binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient)).

  * For each state, we have to check all possible future states. This would take $O(m \cdot n)$ time.
  * We sort the piles in each state. It takes $O(n \log n)$ time.
  * So, the total time complexity is the product of all three - $O(n \cdot m \cdot C_{n}^{n + m - 1} \cdot n \log n)$, which is $O(n^2 \cdot m \cdot C_{n}^{n + m - 1} \cdot \log n)$.

* Space complexity: $O(n \cdot C_{n}^{n + m - 1})$
  
  * Number of states in the game tree is $C_{n}^{n + m - 1}$. These states occupy space on the memo table in the form of key value pairs. The key is a string of $n$ numbers, and the value is a boolean. So, each state occupies $O(n)$ space. Thus, the total space occupied by the memo table is $O(n \cdot C_{n}^{n + m - 1})$.
  * In addition, the recursive implementation takes up space on the implicit stack. The stack's maximum depth is the game tree's height, which is $n \cdot m$. We create a copy of the `piles` array in each call, which takes up $O(n)$ space. So, the total space occupied on the implicit stack is $O(n^2 \cdot m)$.
  * Out of two terms, the first one is much larger than the second one. So, the total space complexity is $O(n \cdot C_{n}^{n + m - 1})$.

---

### Approach 2: Mathematical / Bit Manipulation

#### Intuition

The nim game is a classical problem. Its solution has existed for a long time. The theory upon which the current approach is based was [presented by Charles Bouton](https://www.jstor.org/stable/1967631) in 1901. While we can prove that the theory works, developing an intuition for it takes work. After reading the proceeding section, it is absolutely fine if you see yourself as unable to come up with intuition. Although in contrast, the implementation is equally easy. We recommend trying this approach here but suggest using the recursion-based approach for an interview setting.

The optimal strategy to win the nim game is based on the bitwise XOR sum of all the stacks. Let's take an example. Say we have three stacks of stones with 3, 2, and 5 stones in them. We can express 3 in base 2 as $11_{2}$, 2 as $10_{2}$, and 5 as $101_{2}$. The bitwise XOR sum of all the piles, also called the **nim-sum**, is $11_{2} \oplus 10_{2} \oplus 101_{2} = 100_{2}$. This is the same as $4_{10}$.

The nim-sum of a state is the key to finding the winner of the game. A game can only be in one of the two states - *(1)* a state with nim-sum zero and *(2)* a state with nim-sum non-zero. This is similar to saying a number could either be zero or non-zero.

If the nim-sum of the current state is not zero, then the current player makes a move so that the resulting state has a nim-sum of zero (we can show that such a move is always available). A player from a state with zero nim-sum can only move to a non-zero nim-sum state (in the proof below, we'll show that from a zero nim-sum state, a player can move only to a non-zero nim-sum state). Please note that the nim-sum of the state with no stones is zero. The game continues in this manner until all the piles have no stones left. The player who makes the last move wins the game.

This means a player who starts the game in a non-zero nim-sum state will always find themselves in a non-zero nim-sum state after the next player's turn. And thus, will win the game. In contrast, players who start the game in a zero nim-sum state will always find themselves in a zero nim-sum state. And thus will always lose the game (we again assume that the players are rational).

##### Theorem

The winning strategy in the game of nim is to finish every move with a zero nim-sum state.

We call a state with non-zero nim-sum a winning state. And a state with zero nim-sum, a losing state.

Why does it work?

From a winning state, there is always at least one move available to reach a losing state. Similarly, from a losing state, all the moves lead to a winning state. So, if the game starts in a winning state, the first person is also the last to move. The game ends with the first player winning it. If the game begins in a losing state, it ends in a losing state. Let's prove both points now.

**Lemma 1**: If a player is in a zero nim-sum state, they can move only to a non-zero nim-sum state.

**Proof**

Let's say we have a zero nim-sum state. The current player has $k$ piles with $n_1, n_2, \dots, n_k$ stones. The player removes $x$ stones from the $i^{th}$ pile. The resulting state will have $k$ piles with $n_1, n_2, \dots, n_k$ stones in them, except for the $i^{th}$ pile, which will have $n_i - x$ stones in it.

The nim-sum of the game before the move is 0 ($\oplus$ represents XOR operation between two numbers)

$$n_1 \oplus n_2 \oplus \dots \oplus n_i \dots \oplus n_k = 0$$

this means

$$n_1 \oplus n_2 \oplus \dots \oplus n_k = n_i$$

Let's say the nim-sum of the game after the move is s

$$n_1 \oplus n_2 \oplus \dots \oplus (n_i - x) \oplus \dots \oplus n_k = s$$

$$n_i \oplus (n_i - x) = s$$

Recall that the XOR sum of two values can be $0$ only if both are equal. So $s$ can be zero only if both $n_i$ and $n_i - x$ are equal. But $x$ is a non-zero quantity because at least one stone has to be removed from the pile. So, $s$ is always non-zero.

We can also see this with an example.

Let's say we have four piles with $2$, $3$, $4$, and $5$ stones. The nim-sum of the state is $2 \oplus 3 \oplus 4 \oplus 5 = 0$. If we remove a stone from the second pile, the resulting state will have $2$, $2$, $4$, and $5$ stones. The nim-sum of the state is $2 \oplus 2 \oplus 4 \oplus 5 = 1$. Similarly, we can try removing any number of stones from any pile, and the resulting nim-sum will always be non-zero.

**Lemma 2**: Moving from a non-zero nim-sum state to a zero nim-sum state is always possible.

**Proof**

Let's say we have a non-zero nim-sum state. The current player has $k$ piles with $n_1, n_2, \dots, n_k$ stones. Its nim-sum is $s$. We find the position of the leftmost set bit (most significant bit) in $s$. Now let's select a pile $n_i$, which also has a set bit at the same position. Because the most significant bits in both $s$ and $n_i$ are set, the XOR sum $y$ of these two numbers will be less than $n_i$. So, we can remove $n_i - y$ stones from the pile $n_i$.

$$n_1 \oplus n_2 \oplus \dots \oplus n_i \dots \oplus n_k = s$$

$$y_i = s \oplus n_i$$

The new XOR sum $t$ after making a move

$$n_1 \oplus n_2 \oplus \dots \oplus y \dots \oplus n_k = t$$

$$n_1 \oplus n_2 \oplus \dots \oplus s \oplus n_i \dots \oplus n_k = t$$

Move everything other than $s$

$$n_1 \oplus n_2 \oplus \dots \oplus n_i \dots \oplus n_k \oplus s = t$$

$$s + s = t$$

$$t = 0$$

This means there is always a move available to reach a zero nim-sum state.

Let's take an example to understand this.

Let's say we have three piles with $2, 3$, and $4$ stones. The nim-sum of the state is $2 \oplus 3 \oplus 4 = 5$. In base $2$ representation it is $010_2 \oplus 011_2 \oplus 100_2 = 101_2$. The leftmost set bit of the nim-sum $101_2$ is at the third position from the right. So, we can select the pile with $4$ (In base $2$, it is $100_2$) stones in it because $100_2$ has its most significant bit at the same position as the nim-sum $101_2$. The XOR sum of $5$ and $4$ is 1. So, we can remove $4 - 1 = 3$ stone from the pile with $4$ stones. The resulting state will have $2$, $3$, and $1$ stones. The nim-sum of the state is $2 \oplus 3 \oplus 1 = 0$.

!?!../Documents/1908/nim-proof.json:960,540!?!

<br />

#### Algorithm

1. Initialize `nimSum` to 0.
2. Iterate over all the piles. For each pile `p`, update `nimSum` as the XOR sum of `nimSum` and `p`.
3. In the end, if `nimSum` is non-zero, the first player wins. Otherwise, the second player wins.

#### Implementation

<iframe src="https://leetcode.com/playground/ToYwnBRz/shared" frameBorder="0" width="100%" height="208" name="ToYwnBRz"></iframe>

#### Complexity Analysis

Let $n$ be the number of piles, and $m$ be the maximum number of stones in a heap.

* Time Complexity - $O(n)$. We iterate over all the piles. In each iteration, we perform an XOR operation. XOR operation takes $O(1)$ time.

* Space Complexity - $O(1)$. We use a constant amount of space.

### References

1. [MIT Lecture - Theory of impartial games](https://web.mit.edu/sp.268/www/nim.pdf)
2. [Wikipedia](https://en.wikipedia.org/wiki/Nim)

Other game theory-related problems on LeetCode

1. Stone Game - https://leetcode.com/problems/stone-game/
2. Nim Game (single heap) - https://leetcode.com/problems/nim-game/
3. Can I Win - https://leetcode.com/problems/can-i-win/