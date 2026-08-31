# Python3 Bottom Up O(N) Solution | Very Short

**Author:** yiseboge
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/1388024/](https://leetcode.com/problems/stone-game-viii/solutions/1388024/)

---

The concept
* Collect a ```prefix sum``` of the stone values to refer to later at constant time
* Generate ```dp``` array with the total sum of stone values (aka, score if all the stones are picked)
* Iterate backwards on the ```dp``` array keeping track of the biggest result seen so far
* For ```current result```, pick ```max``` of the ```biggest``` seen (choosing to go right to it and pick it), or the ```current prefix sum minus biggest``` seen (choosing to pick the ```current``` and the next opponent picks the ```biggest``` when playing optimally)
* Return result of the second element as the game cannot start by picking one stone

Time Complexity - O(```N```)
Space Complexity - O(```N```)
```
class Solution:
    def stoneGameVIII(self, stones: List[int]) -> int:
        sums, memory, n = [0], {}, len(stones)
        for s in stones:
            sums.append(s + sums[-1])
        
        memory, biggest = [sums[-1]] * n, sums[-1] 
        for start in range(n - 2, -1, -1):
            memory[start] = max(biggest, sums[start + 1] - biggest)
            biggest = max(biggest, memory[start])
        return memory[1]

```