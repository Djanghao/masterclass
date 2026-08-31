# Swift Solution | basic storing & sorting

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/4702188/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/4702188/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
N * (E * log(E))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxStarSum(_ vals: [Int], _ edges: [[Int]], _ k: Int) -> Int {
        var storeConnections = [Int: [Int]]()
        var edgesLength = edges.count
        var numberOfElements = vals.count

        for edge in edges {
            if let _ = storeConnections[edge[0]] {
                storeConnections[edge[0]]!.append(vals[edge[1]])
            } else {
                storeConnections[edge[0]] = [Int]()
                storeConnections[edge[0]]!.append(vals[edge[1]])
            }

            if let _ = storeConnections[edge[1]] {
                storeConnections[edge[1]]!.append(vals[edge[0]])
            } else {
                storeConnections[edge[1]] = [Int]()
                storeConnections[edge[1]]!.append(vals[edge[0]])
            }
        }

        var ans = Int.min
        for val in 0..<numberOfElements {
            var temp = vals[val]
            ans = max(ans,temp)
            
            if let _ = storeConnections[val] {
                var sortedResult = storeConnections[val]!.sorted {
                    $0 > $1
                }
                storeConnections[val]! = sortedResult
                
                var elements = storeConnections[val]!.count
                for index in 0..<min(k,elements) {
                    temp = temp + storeConnections[val]![index]
                    ans = max(ans,temp)
                }
            }
        }
        return ans
    }
}
```