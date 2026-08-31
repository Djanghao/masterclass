# swift - easy to understand using asciiValue

**Author:** umam
**Votes:** 1
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/2853062/](https://leetcode.com/problems/group-shifted-strings/solutions/2853062/)

---



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    func groupStrings(_ strings: [String]) -> [[String]] {
        var dict: [[Int: [Int]]: [String]] = [:]
        
        for s in strings {
            let S = Array(s)
            let count = s.count
            var distance: [Int] = []

            for i in 0..<S.count - 1 {
                let cur = Int(S[i].asciiValue!)
                let next = Int(S[i+1].asciiValue!)
                let d = cur > next ? 26 - abs(next - cur) : next - cur
                distance.append(d)
            }

            dict[[count: distance], default: []].append(s)
        }

        return Array(dict.values)
    }
}
```