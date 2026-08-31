# 🔥[Python3] Short and easy using Set || beats 100%🥷🏼

**Author:** yourick
**Votes:** 8
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3737328/](https://leetcode.com/problems/relocate-marbles/solutions/3737328/)

---

```python3 []
class Solution:
    def relocateMarbles(self, nums: List[int], moveFrom: List[int], moveTo: List[int]) -> List[int]:
        nums = set(nums)
        for start, end in zip(moveFrom, moveTo):
            nums.discard(start)
            nums.add(end)
        
        return sorted(nums)
```
![Screenshot 2023-07-08 at 23.25.13.png](./images/0.png)


