# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/3418865/](https://leetcode.com/problems/brace-expansion-ii/solutions/3418865/)

---

```
class Solution {
    func braceExpansionII(_ s: String) -> [String] {
        
        func parse(_ s: String) -> [String] {
            
            func split(_ s: String) -> [String] {
                
                var res = [[Character]()]
                var ind = 0
                
                for c in s {
                    res[res.count - 1].append(c)
                    switch c {
                    case "{" where ind == 0 && res.last?.isEmpty == false:
                        res[res.count - 1].removeLast()
                        res.append([])
                        res[res.count - 1].append(c)
                        fallthrough
                    case "{":
                        ind += 1
                    case "}" where ind == 1:
                        res.append([])
                        fallthrough
                    case "}":
                        ind -= 1
                    default:
                        break
                    }
                }
                
                return res
                    .filter { !$0.isEmpty }
                    .map { String($0) }
            }
            
            func choices(_ s: String) -> [String] {
                
                let op: String
                
                if s.first == "{", s.last == "}" {
                    op = String(s.dropFirst().dropLast())
                }
                else {
                    op = s
                }
                
                var res = [[Character]()]
                var ind = 0
                
                for c in op {
                    res[res.count - 1].append(c)
                    switch c {
                    case "{":
                        ind += 1
                    case "}":
                        ind -= 1
                    case "," where ind == 0:
                        res[res.count - 1].removeLast()
                        res.append([])
                    default:
                        break
                    }
                }
                
                return res
                    .filter { !$0.isEmpty }
                    .map { String($0) }
            }
            
            let parts = split(s)
            
            guard parts.count == 1 else {
                return split(s).reduce(into: [String]()) { $0 = m($0, parse($1)) }
            }

            return choices(s).flatMap { $0.contains("{") ? parse($0) : [$0] }
        }
        
        func m(_ a: [String], _ b: [String]) -> [String] {
            guard !a.isEmpty else { return b }
            guard !b.isEmpty else { return a }
            
            var res = Array(repeating: "", count: a.count * b.count)
            var i = 0
            
            for sa in a {
                for sb in b {
                    res[i] = sa + sb
                    i += 1
                }
            }
            
            return res
        }
        
        return Set(parse(s)).sorted()
    }
}
```