# Functional approach using Swift | DFS

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5880053/](https://leetcode.com/problems/remove-methods-from-project/solutions/5880053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Create two graphs (Dictionary), for one and reverse directions.
2. Create two sets: suspicious and visited for dfs.
3. Run dfs from k to see what values are directly or indirectly touched from k. So it will mean all of the are suspicious.
4. If suspicious has any value which has ancesstors that not included in suspicious set then return all possible values. Because of `A group of methods can only be removed if no method outside the group invokes any methods within it.`
5. Return all possible values that are not suspicious.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
func remainingMethods(_ n: Int, _ k: Int, _ invocations: [[Int]]) -> [Int] {
    let (g1, g2) = invocations.reduce(into: (g1: [Int: [Int]](), g2: [Int: [Int]]())) { into, inv in
        into.g1[inv[0], default: []].append(inv[1])
        into.g2[inv[1], default: []].append(inv[0])
    }

    var (suspicious, visited) = (Set<Int>(), Set<Int>())
    func dfs(_ m: Int) {
        guard !visited.contains(m) else { return }
        visited.insert(m)
        suspicious.insert(m)
        g1[m]?.forEach(dfs)
    }
    dfs(k)

    guard !suspicious.contains(where: { m in
        g2[m]?.contains(where: { !suspicious.contains($0) }) == true
    }) else { return Array(0..<n) }

    return (0..<n).filter { !suspicious.contains($0) }
}

```