# Swift | HashMap | 9 SLOC

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3177901/](https://leetcode.com/problems/substring-xor-queries/solutions/3177901/)

---

**See Also:** [**ALT APPROACH USING TRIES**](https://leetcode.com/problems/substring-xor-queries/discuss/3177837/Swift-or-Trie)

---

**HashMap, hardcoded window width of 30, which handles all test cases (accepted answer)**
```
class Solution {
    func substringXorQueries(_ s: String, _ queries: [[Int]]) -> [[Int]] {
        let s = Array(s), zeroIndex = s.firstIndex(of: "0") ?? -1
        var hashMap = [0: [zeroIndex, zeroIndex]]
        
        for left in s.indices where s[left] != "0" {
            for right in left ..< min(left + 30, s.count) {
                let key = s[left...right].reduce(0) { key, ch in (key << 1) + (ch == "1" ? 1 : 0) }
                hashMap[key] = hashMap[key] ?? [left, right] 
            }
        }
        
        return queries.map { query in hashMap[query[0] ^ query[1]] ?? [-1,-1] }
    }
}
```

----

**HashMap, calculating minimum window width (accepted answer)**
```
class Solution {
    func substringXorQueries(_ s: String, _ queries: [[Int]]) -> [[Int]] {
        let s = Array(s), zeroIndex = s.firstIndex(of: "0") ?? -1
        var hashMap = [0: [zeroIndex, zeroIndex]]
        
        let qMax = queries.reduce(0) { qMax, query in max(qMax, query[0] ^ query[1]) }
        var windowWidth = 1
        while 1 << windowWidth <= qMax {
            windowWidth += 1
        }
        
        for left in s.indices where s[left] != "0" {
            for right in left ..< min(left + windowWidth, s.count) {
                let key = s[left...right].reduce(0) { key, ch in (key << 1) + (ch == "1" ? 1 : 0)}
                hashMap[key] = hashMap[key] ?? [left, right] 
            }
        }
        
        return queries.map { query in hashMap[query[0] ^ query[1]] ?? [-1,-1] }
    }
}
```
