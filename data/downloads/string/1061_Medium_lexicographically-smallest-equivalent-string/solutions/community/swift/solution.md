# Swift💯Union Find

**Author:** OrchidHunter
**Votes:** 8
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047529/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047529/)

---

**Union-Find approach (accepted answer)**
```
class Solution {
    func smallestEquivalentString(_ s1: String, _ s2: String, _ baseStr: String) -> String {
        var groups = Dictionary(uniqueKeysWithValues: "abcdefghijklmnopqrstuvwxyz".map {($0,$0)})
        
        func find(_ x: Character) -> Character {
            if x != groups[x] { groups[x] = find(groups[x]!) }  // path compression, if needed
            return groups[x]!
        }
        
        for (a, b) in zip(s1, s2) { 
            let (x,y) = (find(a), find(b))
            groups[max(x,y)] = min(x,y) // make union of letter pairs from `s1` and `s2`, lowest value ranked highest
        }
        
        return String(baseStr.map(find)) 
    }
}
```