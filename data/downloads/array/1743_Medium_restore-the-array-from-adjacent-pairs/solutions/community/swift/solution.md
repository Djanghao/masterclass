# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271756/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271756/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func restoreArray(_ adjacentPairs: [[Int]]) -> [Int] {
        var ends = Set<Int>()
        var neighs = [Int: [Int]]()
        for adjacentPair in adjacentPairs {
            let a = adjacentPair[0]
            let b = adjacentPair[1]

            if ends.contains(a) {
                ends.remove(a)
            } else {
                ends.insert(a)
            }
            if ends.contains(b) {
                ends.remove(b)
            } else {
                ends.insert(b)
            }

            neighs[a, default: []].append(b)
            neighs[b, default: []].append(a)
        }

        var result = [ends.randomElement()!]
        var visited = Set(result)
        while let last = result.last, let newNode = neighs[last]?.first(where: { !visited.contains($0) }) {
            result.append(newNode)
            visited.insert(newNode)
        }
        return result
    }
}

```