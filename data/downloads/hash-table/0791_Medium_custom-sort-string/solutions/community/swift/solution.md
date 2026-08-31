# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4861673/](https://leetcode.com/problems/custom-sort-string/solutions/4861673/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func customSortString(_ order: String, _ s: String) -> String {
        var position = [Character: String.Index]()
        var ind = order.startIndex
        while ind < order.endIndex {
            position[order[ind]] = ind
            ind = order.index(after: ind)
        }
        return String(s.sorted { position[$0, default: order.startIndex] < position[$1, default: order.startIndex] })
    }
}
```