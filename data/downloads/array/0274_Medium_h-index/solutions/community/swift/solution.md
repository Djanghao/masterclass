# Swift solution using sorting

**Author:** Prasann_1433
**Votes:** 3
**Link:** [https://leetcode.com/problems/h-index/solutions/3959453/](https://leetcode.com/problems/h-index/solutions/3959453/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sort in decending order and then keep moving to index till we have 
`sortedCitations[i] > i` and next index will be the answer, since the value at `index + 1` should be the min value present in all citations.

# Complexity
- Time complexity:
$$ 0(2n) ~ sorting will also take 0(n)

- Space complexity:
$$0(1)

# Code
```
class Solution {
    func hIndex(_ citations: [Int]) -> Int {
        let sortedCitations = citations.sorted {$0 > $1}

        var i = 0 
        var hIndex = 0 

        while i < sortedCitations.count {
            if sortedCitations[i] > i {
                hIndex = i + 1
            }

            i += 1
        }

        return hIndex
    }
}
```