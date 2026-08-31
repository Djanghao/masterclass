# Key Idea Explained, Prefix Sum Python

**Author:** sarthakBhandari
**Votes:** 3
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/4475934/](https://leetcode.com/problems/super-washing-machines/solutions/4475934/)

---

## Intuition
When the sum is not divisble by the number of machines, return -1
At the end all elements will have the `final value = average(machines)`

Elements above the average value can only decrement by 1 per move
Elements below the average can increment no more than 2 per move

## Explanation
Let `total_moves` represent the number of moves it takes to balance elemens`[0 ... i]`
- Because elements above the average can only decrement by 1 per move
`diff[i] = nums[i] - average`
`diff[i] <= total_moves`

- Consider an element at the beginning of array `machines[0]`,
`machines[0] <= total_moves` because it can only increase or decrease from 1 side.

- If we calculate prefix sum of differences `preix += average - machines[i]`,
`abs(prefix) <= total_moves`, same logic as previous point.

If we combine the above statements, we have a full solution
`total_moves = max(total_moves, abs(prefix), diff[i])`

```
def findMinMoves(self, machines: List[int]) -> int:
    n = len(machines)
    Sum = sum(machines)

    if Sum % n:
        return -1
    
    final = Sum//n
    
    moves = prefix = 0
    for i in machines:
        diff = i - final
        prefix += diff
        moves = max(moves, abs(prefix), diff)
    return moves
```