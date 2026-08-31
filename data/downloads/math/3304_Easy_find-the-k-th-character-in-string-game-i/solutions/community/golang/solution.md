# Go golang clean solution

**Author:** Leaf_Peng
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/6027231/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/6027231/)

---

```go
func kthCharacter(k int) byte {
    A := []byte{ 'a' }
    for len(A) < k {
        tmp := make([]byte, len(A))
        copy(tmp, A)
        for _, c := range tmp {
            if c < 'z' {
                A = append(A, c + 1)
            } else {
                A = append(A, 'a')
            }
        }
    }
    return A[k - 1]
}
```