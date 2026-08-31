# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4780581/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4780581/)

---

# Complexity
- Time complexity: $$O(n * log(maxValue))$$
<!-- Add your time complexity here, e.g. $$O(n * log(maxValue))$$ -->

- Space complexity: $$O(maxValue)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private static let maxValue = 100_001

    private static let sieve: [Int] = {
        var sieve = Array(repeating: 0, count: maxValue)
        for i in 2 ..< maxValue where sieve[i] == .zero {
            var next = i
            while next < maxValue {
                sieve[next] = i
                next += i
            }
        }
        return sieve
    }()

    func canTraverseAllPairs(_ nums: [Int]) -> Bool {
        let numsSet = Set(nums)
        guard nums.count > 1 else { return true }
        guard !numsSet.contains(1) else { return false }

        let dsu = DSU(size: Solution.maxValue)
        for num in numsSet {
            var subNum = num
            while subNum > 1 {
                let divisor = Solution.sieve[subNum]
                dsu.unionSets(num, divisor)
                while subNum % divisor == .zero {
                    subNum /= divisor
                }
            }
        }

        var commonParent: Int?
        for num in numsSet {
            let parent = dsu.findSet(num)
            if commonParent == nil {
                commonParent = parent
            } else if commonParent != parent {
                return false
            }
        }
        return true
    }
}

// MARK: - Disjoint set union

private final class DSU {
    private var parents: [Int]
    private var ranks: [Int]

    init(size: Int) {
        var parents = [Int]()
        var ranks = [Int]()
        for i in 0 ..< size {
            parents.append(i)
            ranks.append(0)
        }

        self.parents = parents
        self.ranks = ranks
    }

    @discardableResult
    func findSet(_ v: Int) -> Int {
        if parents[v] == v {
            return v
        }
        let parent = findSet(parents[v])
        parents[v] = parent
        return parent
    }

    func unionSets(_ a: Int, _ b: Int) {
        let aS = findSet(a)
        let bS = findSet(b)
        if aS != bS {
            let minR: Int
            let maxR: Int
            if ranks[aS] < ranks[bS] {
                minR = aS
                maxR = bS
            } else {
                minR = bS
                maxR = aS
            }
            parents[minR] = maxR
            if ranks[minR] == ranks[maxR] {
                ranks[maxR] += 1
            }
        }
    }
}
```