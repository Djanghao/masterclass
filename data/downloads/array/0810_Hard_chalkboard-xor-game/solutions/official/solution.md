# Official Solution

**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solution/](https://leetcode.com/problems/chalkboard-xor-game/solution/)

---

[TOC]

---
### Approach #1: Mathematical [Accepted]

**Intuition and Algorithm**

As in the problem statement, if the `XOR` of the entire array is `0`, then Alice wins.

If the `XOR` condition is never triggered, then clearly Alice wins if and only if there are an even number of elements, as every player always has a move.

Now for the big leap in intuition.  Actually, Alice always has a move when there are an even number of elements.  If $$ S = x_1 \oplus x_2 \oplus \cdots x_n \neq 0 $$, but there are no possible moves ($$ S \oplus x_i = 0 $$), then $$(S \oplus x_1) \oplus (S \oplus x_2) \oplus \cdots \oplus (S \oplus x_n) = (S \oplus \cdots \oplus S) \oplus (x_1 \oplus x_2 \oplus \cdots \oplus x_n) = 0 \oplus S \neq 0$$, a contradiction.

Similarly, if there are an odd number of elements, then Bob always faces an even number of elements, and has a move.  So the answer is just the parity of the number of elements in the array.

Those that are familiar with the Sprague-Grundy theorem may know that this game is a misère-form game, meaning the theorem does not apply, and giving a big hint that there may exist a simpler solution.


<iframe src="https://leetcode.com/playground/75ZhyqTe/shared" frameBorder="0" width="100%" height="174" name="75ZhyqTe"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `nums`.

* Space Complexity: $$O(1)$$.