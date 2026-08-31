# Easy scala solution

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1842112/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1842112/)

---

```
def maximumEvenSplit(finalSum: Long): List[Long] =
  if(finalSum % 2 == 0) go(2, finalSum, List.empty)
  else List.empty

def go(currNum: Long, remSum: Long, acc: List[Long]): List[Long] =
  if(remSum < currNum) acc.head + remSum :: acc.tail
  else go(currNum + 2, remSum - currNum, currNum :: acc)
```