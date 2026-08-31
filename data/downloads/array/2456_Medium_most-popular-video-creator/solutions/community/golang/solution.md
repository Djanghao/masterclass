# Go Solution

**Author:** d901203
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/2758591/](https://leetcode.com/problems/most-popular-video-creator/solutions/2758591/)

---

```
func mostPopularCreator(A []string, B []string, C []int) [][]string {
    N, m1, m2, mx := len(A), make(map[string]int), make(map[string]int), 0
    result := make([][]string, 0)
    for i := 0; i < N; i++ {
        m1[A[i]] += C[i]
        if m1[A[i]] > mx {
            mx = m1[A[i]]
        }
    }
    for i := 0; i < N; i++ {
        if m1[A[i]] == mx {
            if v, ok := m2[A[i]]; ok {
                if (C[i] > C[v]) || (C[i] == C[v] && B[i] < B[v]) {
                    m2[A[i]] = i
                }
            } else {
                m2[A[i]] = i
            }
        }
    }
    for _, v := range m2 {
        result = append(result, []string{A[v], B[v]})
    }
    return result
}
```