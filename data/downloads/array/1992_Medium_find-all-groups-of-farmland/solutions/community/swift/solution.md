# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5050124/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5050124/)

---

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findFarmland(_ land: [[Int]]) -> [[Int]] {
        var result = [[Int]]()
        var farmlands = Array(repeating: (r1: Int, c2: Int, r2: Int)?.none, count: land[0].count)
        for rowInd in 0 ..< land.count {
            var ind = 0
            while ind < land[rowInd].count {
                if land[rowInd][ind] == 1 {
                    if var farmland = farmlands[ind] {
                        farmland.r2 = rowInd
                        farmlands[ind] = farmland
                        ind = farmland.c2 + 1
                    } else {
                        let c1 = ind
                        while ind < land[rowInd].count && land[rowInd][ind] == 1 {
                            ind += 1
                        }
                        farmlands[c1] = (r1: rowInd, c2: ind - 1, r2: rowInd)
                    }
                } else {
                    if let farmland = farmlands[ind] {
                        result.append([farmland.r1, ind, farmland.r2, farmland.c2])
                        farmlands[ind] = nil
                        ind = farmland.c2 + 1
                    } else {
                        ind += 1
                    }
                }
            }
        }
        for i in 0 ..< farmlands.count {
            if let farmland = farmlands[i] {
                result.append([farmland.r1, i, farmland.r2, farmland.c2])
            }
        }
        return result
    }
}
```