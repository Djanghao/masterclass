# Python Easy understanding

**Author:** SaiRakesh
**Votes:** 16
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/969581/](https://leetcode.com/problems/stone-game-vi/solutions/969581/)

---

Simple logic, greedy approach, sort based on maximum sum of pairs.
* The best approach is not only to pick the stone with maximum value, but the one where you could hurt your opponent's chances by picking an optimal value.
* So by picking a stone, you get x points and you affect bob's chances by -y points, so the impact inflicted by picking a given stone is a-(-b) = a+b. 
* So sorting based on sum, you get the maximum impact you could inflict.

For example, 
alice=[2,3] and bob=[5,3]
Normally it would be nice for alice to pick 3 to increase her chances, but when she picks 2, she could hurt bob's chances by not allowing him to pick 5, so instead of selecting the maximum one, find the one where you could hurt your opponents chances(Greedy).
```
class Solution:
    def stoneGameVI(self, alice: List[int], bob: List[int]) -> int:
        t=list(zip(alice,bob))
        t=sorted(t,key=lambda x: sum(x),reverse=True)
        al=sum([i[0] for i in t[::2]])
        bb=sum([i[1] for i in t[1::2]])
        if al>bb:
            return 1
        elif al<bb:
            return -1
        return 0
```