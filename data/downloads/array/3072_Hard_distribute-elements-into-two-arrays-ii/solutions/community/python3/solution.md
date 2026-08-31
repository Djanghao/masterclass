# Binary indexed tree with ranks

**Author:** vilmos_prokaj
**Votes:** 5
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4814527/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4814527/)

---

# Intuition
The code below uses a binary indexed tree (BIT) to store the ranks of the elements in `arr1` and `arr2`. Then it is possible to get the `greaterCount` value in logarithmic time. 

# Complexity
- Time complexity: $$O(n\\log(n))$$
  Sorting and BIT manipulations.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$.
  For ranks, bit1, bit2, arr1, arr2.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class BIT:
    def __init__(self, n):
        self.values = [0]*(n+1)
    
    def add(self, idx):
        idx += 1
        values = self.values
        while idx > 0:
            values[idx] += 1
            idx -= idx & (-idx)
     
    def greater_count(self, idx):
        idx += 2
        values = self.values
        n = len(values)
        count = 0
        while idx < n:
            count += values[idx]
            idx += idx & (-idx)
        return count

    def __str__(self):
        counts = [self.greater_count(i) for i in range(len(self.values))]
        return f"{type(self).__name__}({counts})"


class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ranks = [0]*n
        for r, i in enumerate(sorted(range(n), key=lambda i: nums[i])): 
            ranks[i] = r
        
        bit1 = BIT(n)
        bit2 = BIT(n)
        arr1 = []
        arr2 = []

        it = zip(nums, ranks)
        a, r = next(it)
        arr1.append(a)
        bit1.add(r)
        a, r = next(it)
        arr2.append(a)
        bit2.add(r)
        
        for a, r in it:
            c1 = bit1.greater_count(r)
            c2 = bit2.greater_count(r)
            if (c1, -len(arr1)) >= (c2, -len(arr2)):
                arr1.append(a)
                bit1.add(r)
            else:
                arr2.append(a)
                bit2.add(r)

        del bit1, bit2, ranks
        arr1.extend(arr2)
        return arr1

```