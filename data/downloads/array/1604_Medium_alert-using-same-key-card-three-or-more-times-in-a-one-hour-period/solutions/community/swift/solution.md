# Swift solution with window of 3s

**Author:** kuuhaku0
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/4174102/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/4174102/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
put everyone and their check in time into buckets
check window of 3 times and get the delta

# Complexity
- Time complexity:
   O(n * m) due to using replacingOcurrences and 24H has max 5 characters

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
    func alertNames(_ keyName: [String], _ keyTime: [String]) -> [String] {
        var dict = [String: [Int]]()
        var output = Set<String>()
        
        let zip = zip(keyName, keyTime)
            .sorted { $0.1 < $1.1 }
            .compactMap { ($0.0, Int($0.1.replacingOccurrences(of: ":", with: ""))) }
        
        zip.forEach { dict[$0.0, default: [Int]()].append($0.1 ?? 0) }
        
        for (k, v) in dict {
            var i = 0, j = i + 2
            guard v.count >= 3 else { continue }
            while j < v.count {
                let diff = v[j] - v[i]
                if diff <= 100 { output.insert(k) }
                i += 1
                j += 1
            }
        }
        
        return Array(output).sorted { $0 < $1 }
    }
}
```