# backtracking Swift Solution

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/5158653/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/5158653/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    var permutations = Set<String>()
    var n = 0
    var singles = [Character]()
    
    func generatePalindromes(_ s: String) -> [String] {
        guard s.count > 1 else {
            return [s]
        }
        
        let arr = Array(s)
        n = s.count
        var map = [Character: Int]()
        for c in arr {
            map[c, default: 0] += 1
        }
                
        map.keys.forEach {
            if map[$0] == 1 {
                singles.append($0)
                map[$0]! -= 1
            }
            if map[$0]! % 2 == 1 {
                singles.append($0)
                map[$0]! -= 1
            }
        }
        if singles.count > 1 { return [] }
        
        let filterdMap = map.filter {
            return $0.value > 1
        }
        let updatedMap = filterdMap.mapValues { $0 / 2 }
        
        permutations(updatedMap, [])
        
        return Array(permutations)
    }
    
    func permutations(_ map: [Character: Int], _ charArr: [Character]) {
        if charArr.count == n / 2 {
            if n % 2 == 0 {
                permutations.insert(String(charArr) + String(charArr.reversed()))
            } else {
                singles.forEach { char in
                    permutations.insert(String(charArr) + String(char) + String(charArr.reversed()))
                }
            }
            return
        }
       
        for char in map.keys {
            var updatedCharArr = charArr
            updatedCharArr.append(char)
            let updatedValue = map[char]! - 1
            var updatedMap = map
            updatedMap[char] = updatedValue
            updatedMap = updatedMap.filter { $0.value > 0 }
            permutations(updatedMap, updatedCharArr)
        }
    }
}
```