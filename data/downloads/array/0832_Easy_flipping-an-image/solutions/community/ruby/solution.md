# [Ruby] OneLiner | using XOR

**Author:** mdshahnawaz459
**Votes:** 1
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/931024/](https://leetcode.com/problems/flipping-an-image/solutions/931024/)

---

```
def flip_and_invert_image(a)
    a.map { |row| row.reverse.map { |col| col ^= 1}}
end