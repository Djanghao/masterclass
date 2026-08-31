# Easiest python solution with zip, O(n) time

**Author:** it_bilim
**Votes:** 120
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/675110/](https://leetcode.com/problems/shuffle-the-array/solutions/675110/)

---

I divide the array into two parts, iterate items in one loop and return the result.
 
```
def shuffle(self, nums: List[int], n: int) -> List[int]:
 \xA0 \xA0 \xA0 \xA0res = []
 \xA0 \xA0 \xA0 \xA0for i, j in zip(nums[:n],nums[n:]):
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0res += [i,j]
        return res
```