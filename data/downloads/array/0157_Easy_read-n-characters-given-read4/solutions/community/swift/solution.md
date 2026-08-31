# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/6141209/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/6141209/)

---

**Good Interview Answer (accepted answer)**
\u26A0\uFE0F - From desc: `You will need to write the results to buf[].`  Do not create a temporary buffer then set `buf` at the end, this re-allocates the array and fails the problem!! Instead, replace elements of `buf` with characters read from file.
```
class Solution : Reader4 {
    func read(_ buf: inout [Character], _ n: Int) -> Int {
        var readBuf = Array("1234")
        var index = 0
        
        while true {
            let count = read4(&readBuf)
            guard count > 0 else { return min(index, n) }
            buf.replaceSubrange(index..., with: readBuf.prefix(count))
            index += count
        }
    }
}
```