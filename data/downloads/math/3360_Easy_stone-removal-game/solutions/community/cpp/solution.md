# Python3 || 4 lines, with explanation  || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6076267/](https://leetcode.com/problems/stone-removal-game/solutions/6076267/)

---

Here's the intuition:
- Let's ignore the arbitrary constraint  *n* <= 50 and solve this problem for any positive number of stones.

- Consider the game in terms of *rounds*, in which we define a *round* as both Alice and Bob are able to complete a turn. To complete the first round *n* must be greater than 10 + 9 = 19. If so, we move on to the second round with *n* - 19 stones on the table. 
- We can complete a second round if an only if there are 8 + 7 = 15 stones on the table, and if so, there are *n* - 34 stones left for the next round. And so on.
- If we reach a round which cannot be completed, we test whether at least Alice can complete her turn.
- If we complete 5 rounds (which is 10 turns, or 55 stones taken), then Alice wins because Bob cannot take -1 stones. (This scenaro is not in the test cases because of the arbitrary constraint *n* <= 50.)
 ___

```python3 []
class Solution:
    def canAliceWin(self, n: int) -> bool:
        
        for stones in (19, 15, 11, 7, 3):

            if n >= stones: n-= stones
               
            else: return n >= stones//2 +1

        return True
```
```cpp []
class Solution {
public:
    bool canAliceWin(int n) {
        int stones[] = {19, 15, 11, 7, 3};
        for (int stone : stones) {
            if (n >= stone) {
                n -= stone;} 
            else {
                return n >= (stone / 2) + 1;}
        }
        return true;}
}
```
```java []
class Solution {
    public boolean canAliceWin(int n) {

        int[] stones = {19, 15, 11, 7, 3};
        for (int stone : stones) {
            if (n >= stone) {
                n -= stone;
            } else {
                return n >= (stone / 2) + 1;}
        }
        return true; }
}

```
[https://leetcode.com/problems/stone-removal-game/submissions/1462779974/?submissionId=1461027364](https://leetcode.com/problems/stone-removal-game/submissions/1462779974/?submissionId=1461027364)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).