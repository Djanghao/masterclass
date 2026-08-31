# [Golang] Two pointers. Time: O(n), Space: O(1)

**Author:** lacfo
**Votes:** 2
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/1383320/](https://leetcode.com/problems/strobogrammatic-number/solutions/1383320/)

---

```
func isStrobogrammatic(num string) bool {
    m := map[byte]byte {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6',
    }
    n := len(num)
    i, j := 0, n-1
    for i <= j {
        k1, e1 := m[num[i]]
        _, e2 := m[num[j]]
        if !e1 || !e2 {
            return false
        }
        if k1 != num[j] {
            return false
        }
        i++
        j--
    }
    return true
}
```