# Swift solution, 1 line & 0ms

**Author:** FatMonkeyPi
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/1887219/](https://leetcode.com/problems/find-the-difference/solutions/1887219/)

---

```
    func findTheDifference(_ s: String, _ t: String) -> Character {
        Character(UnicodeScalar(t.unicodeScalars.reduce(s.unicodeScalars.reduce(0, {$0 ^ $1.value}), {$0 ^ $1.value}))!)
    }
```