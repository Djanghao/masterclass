# Python | Runtime 305 ms Beats 96.6%

**Author:** elaks
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/3356409/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/3356409/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class TwoSum:

    def __init__(self):
        self.nums={}

    def add(self, number: int) -> None:
        if number in self.nums:
            self.nums[number]+=1
        else:
            self.nums[number]=1

    def find(self, value: int) -> bool:
        for i in self.nums:
            if value-i in self.nums:
                if i==value-i and self.nums[i]==1:
                    continue
                return True
        return False


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)
```