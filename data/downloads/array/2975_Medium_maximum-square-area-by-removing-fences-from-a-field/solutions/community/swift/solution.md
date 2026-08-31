# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5370565/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/5370565/)

---


```
class Solution {
    func maximizeSquareArea(_ m: Int, _ n: Int, _ hFences: [Int], _ vFences: [Int]) -> Int {
        let MOD = 1_000_000_007
        
        // Include boundaries and sort the fences
        var hFences = hFences + [1, m]
        var vFences = vFences + [1, n]
        
        hFences.sort()
        vFences.sort()
        
        // Collect all possible distances between horizontal fences
        var hDistances = Set<Int>()
        for i in 0..<hFences.count {
            for j in (i + 1)..<hFences.count {
                hDistances.insert(hFences[j] - hFences[i])
            }
        }
        
        // Collect all possible distances between vertical fences
        var vDistances = Set<Int>()
        for i in 0..<vFences.count {
            for j in (i + 1)..<vFences.count {
                vDistances.insert(vFences[j] - vFences[i])
            }
        }
        
        // Find the intersection of both sets and the maximum common distance
        let commonDistances = hDistances.intersection(vDistances)
        
        // If there's no common distance, return -1
        if commonDistances.isEmpty {
            return -1
        }
        
        // Get the largest common distance
        let maxSide = commonDistances.max()!
        
        // Calculate the area of the square
        let maxArea = (maxSide * maxSide) % MOD
        
        return maxArea
    }
}
```