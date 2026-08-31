# Swift | O(1)

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205368/](https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205368/)

---

"Medium" difficulty. \uD83E\uDD23 

**Parity of Bit Count (accepted answer)** 
```
class Solution {
    func kthGrammar(_ : Int, _ k: Int) -> Int {
        (k-1).nonzeroBitCount&1
    }
}
```