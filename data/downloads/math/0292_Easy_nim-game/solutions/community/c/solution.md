# C++ solution  with explaination

**Author:** ar_u
**Votes:** 19
**Link:** [https://leetcode.com/problems/nim-game/solutions/1216565/](https://leetcode.com/problems/nim-game/solutions/1216565/)

---

**Reasoning**

Let us think of the small cases. It is clear that if there are only one, two, or three stones in the pile, and it is your turn, you can win the game by taking all of them. Like the problem description says, if there are exactly four stones in the pile, you will lose. Because no matter how many you take, you will leave some stones behind for your opponent to take and win the game. So in order to win, you have to ensure that you never reach the situation where there are exactly four stones on the pile on your turn.

Similarly, if there are five, six, or seven stones you can win by taking just enough to leave four stones for your opponent so that they lose. But if there are eight stones on the pile, you will inevitably lose, because regardless whether you pick one, two or three stones from the pile, your opponent can pick three, two or one stone to ensure that, again, four stones will be left to you on your turn.

It is obvious that the same pattern repeats itself for n=4,8,12,16,\\dotsn=4,8,12,16,\u2026, basically all multiples of 44

```
class Solution {
public:
    bool canWinNim(int n) {
        return n%4!=0;
    }
};
```
**Complexity Analysis**

Time complexity is O(1)O(1), since only one check is performed. No additional space is used, so space complexity is also O(1)O(1).


**References**

Lecture on Nim Games from University of Maryland: MATH 199: Math, Game Theory and the Theory of Games, Summer 2006.
