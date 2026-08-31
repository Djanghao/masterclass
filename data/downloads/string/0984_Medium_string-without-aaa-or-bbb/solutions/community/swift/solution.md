# ✅ 2 ms Beats 100%, 13.5 MB Beats 100%

**Author:** swifterswifty
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3352827/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3352827/)

---

# Code
```
func strWithout3a3b(_ a: Int, _ b: Int) -> String {
    var (na, nb) = a > b ? (a, b) : (b, a)
    let (ca, cb) = a > b ? ("a", "b") : ("b", "a")
    var str = ""
    while na > 0 && nb > 0 {
        if na <= 1 + 2 * nb {
            str.append("\\(ca)\\(cb)")
            na -= 1
            nb -= 1
        } else {
            str.append("\\(ca)\\(ca)\\(cb)")
            na -= 2
            nb -= 1
        }
    }
    if na == 1 {
        str.append(ca)
    } else if na == 2 {
        str.append("\\(ca)\\(ca)")
    } else if nb == 1 {
        str.append(cb)
    }
    return str
}
```