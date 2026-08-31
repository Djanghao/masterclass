# Swift one line solution O(nlogn)

**Author:** AndreevIVdev
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/2622312/](https://leetcode.com/problems/sort-the-people/solutions/2622312/)

---

```
class Solution {
    func sortPeople(_ names: [String], _ heights: [Int]) -> [String] {
        zip(names, heights).sorted(by: { $0.1 > $1.1 }).map(\\.0)
    }
}
```