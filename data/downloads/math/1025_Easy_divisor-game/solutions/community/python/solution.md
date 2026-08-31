# Solution in Python 3 (With Detailed Proof)

**Author:** junaidmansuri
**Votes:** 200
**Link:** [https://leetcode.com/problems/divisor-game/solutions/382233/](https://leetcode.com/problems/divisor-game/solutions/382233/)

---

The proof of why this works can be done formally using Mathematical Induction, specifically using <a href="https://en.wikipedia.org/wiki/Mathematical_induction#Complete_(strong)_induction">Strong Mathematical Induction</a>. However an informal proof will also suffice. Note that it is not enough to show that a player who starts on even always wins. One must also show that a player that starts on odd always loses. Otherwise there are more possible ways to guarantee winning aside from starting on even.

**Given:** The Divisor Game as outlined in the problem

**Prove:** Alice will win if and only if N % 2 == 0

_Part 1)_ If Alice starts with an even number she will always win.

If Alice has an even number, she can always subtract 1, giving Bob an odd number. Odd numbers are not divisible by 2. They are only divisible by odd numbers. Hence Bob must subtract an odd number. Since odd minus odd is even, Bob will always return an even number to Alice. Alice will thus get a smaller even number after each round of play and Bob will get a smaller odd number after each round of play. Eventually Bob will have to play the number 1 and will lose the game since he will have no options.

_Part 2)_ If Alice starts with an odd number she will always lose.

If Alice has an odd number, she has no choice but to subtract an odd number as odd numbers have no even divisors. Thus Bob will get an even number. Now using the argument from _Part 1_ above, Bob can take this even number and keep giving an odd number back to Alice by subtracting 1. Thus Bob will always get to play even and Alice will always be stuck with an odd number smaller than her previous odd number after each round. Eventually Alice will have to play the number 1 and will lose the game since she will have no options.

Thus, assuming both players play optimally, Alice will win the game if and only if she starts on an even number (i.e. N % 2 == 0).
```
class Solution:
    def divisorGame(self, N: int) -> bool:
        return N % 2 == 0
		
		
- Junaid Mansuri
(LeetCode ID)@hotmail.com