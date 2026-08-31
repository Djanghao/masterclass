# Official Solution

**Link:** [https://leetcode.com/problems/count-of-matches-in-tournament/solution/](https://leetcode.com/problems/count-of-matches-in-tournament/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simulate

**Intuition**

The problem description describes what happens at each round:

- If `n` is even, `n / 2` matches are played and `n / 2` teams play next round.
- If `n` is odd, `(n - 1) / 2` matches are played and `(n - 1) / 2 + 1` teams play next round.

We can simply simulate the tournament according to the rules. We create a while loop that runs until `n = 1`.

At each iteration, we check if `n` is even or odd. If `n % 2 = 0`, then `n` is even. Otherwise, `n % 2 = 1` and `n` is odd. Here, `%` is the modulus operator.

If `n` is even, we add `n / 2` to our answer and set `n = n / 2`.

If `n` is odd, we add `(n - 1) / 2` to our answer and set `n = (n - 1) / 2 + 1`.

**Algorithm**

1. Initialize the answer `ans = 0`.
2. While `n > 1`:
    - If `n % 2 == 0`:
        - Add `n / 2` to `ans`.
        - Set `n` to `n / 2`.
    - Else:
        - Add `(n - 1) / 2` to `ans`.
        - Set `n` to `(n - 1) / 2 + 1`.
3. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/JQrHt2Ef/shared" frameBorder="0" width="100%" height="344" name="JQrHt2Ef"></iframe>

**Complexity Analysis**

* Time complexity: $$O(\log{}n)$$

    At each step in the while loop, we divide `n` or `n - 1` by two. `n` will reach `1` in approximately $$\log_2{n}$$ steps. We perform $$O(1)$$ work at each step.

* Space complexity: $$O(1)$$

    We aren't using any extra space.
    
<br/>

---

### Approach 2: Logic

**Intuition**

Instead of simulating the entire tournament, here we will directly consider the beginning and end of the tournament.

In this tournament, when a team loses, they are eliminated and will no longer play any matches.

There are `n` teams, and `1` winner. Thus, `n - 1` teams will be eliminated.

Each match is played between two teams. One team wins, one team loses. Thus, each match eliminates exactly one team.

As `n - 1` teams will be eliminated, there will be `n - 1` matches played, with each match eliminating a team.

**Algorithm**

1. Return `n - 1`.

**Implementation**

<iframe src="https://leetcode.com/playground/6h7JPTr4/shared" frameBorder="0" width="100%" height="157" name="6h7JPTr4"></iframe>

**Complexity Analysis**

* Time complexity: $$O(1)$$

* Space complexity: $$O(1)$$
    
<br/>

---