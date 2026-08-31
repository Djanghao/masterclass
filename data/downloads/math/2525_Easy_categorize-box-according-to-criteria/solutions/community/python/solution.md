# [Python] straightforward

**Author:** pbelskiy
**Votes:** 4
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3014990/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3014990/)

---

```python
class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        volume = length * width * height
        category = []
        
        if length >= 10**4 or width >= 10**4 or height >= 10**4 or volume >= 10**9:
            category.append("Bulky")

        if mass >= 100:
            category.append("Heavy")

        if "Bulky" in category and "Heavy" in category:
            return "Both"

        if not category:
            return "Neither"

        return category[0]
```