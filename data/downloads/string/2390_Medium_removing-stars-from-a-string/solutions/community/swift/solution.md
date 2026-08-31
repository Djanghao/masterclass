# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 6
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402518/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402518/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func removeStars(_ s: String) -> String {
       s.reduce(into: "") {if $1=="*" {$0.removeLast()} else {$0.append($1)}}
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func removeStars(_ s: String) -> String {
        s.reduce(into: "") { stack, ch in
            if ch == "*" {
                stack.removeLast()
            } else {
                stack.append(ch)
            }
        }
    }
}
```