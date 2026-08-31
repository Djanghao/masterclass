# Go 🐼 Kahn's Topological Sort 💀 O(n) time, O(1) space

**Author:** aaronthangnguyen
**Votes:** 1
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/3278296/](https://leetcode.com/problems/alien-dictionary/solutions/3278296/)

---

# Complexity
- Time complexity:
$$O(n)$$, $$n$$: sum lengths of words

- Space complexity:
$$O(1)$$

# Code
```
func alienOrder(W []string) string {
    graph := make(map[byte]map[byte]bool)
    deg := map[byte]int{}

    /* Build in-degree */
    for _, w := range W {
        for _, r := range []byte(w) {
            deg[r] = 0
        }
    }

    /* Build graph */
    n := len(W)
    for i := 1; i < n; i++ {
        w1, w2 := W[i - 1], W[i]
        i1, i2 := 0, 0
        n1, n2 := len(w1), len(w2)
        for i1 < n1 && i2 < n2 {
            if w1[i1] == w2[i2] {
                i1, i2 = i1 + 1, i2 + 1
            } else {
                break
            }
        }
        if i1 == n1 {
            continue // identical prefixes, skip
        }
        if i2 == n2 {
            return "" // error, w2 should be longer than w1
        }
        r1, r2 := w1[i1], w2[i2]
        if graph[r1] == nil || !graph[r1][r2] {
            // increase if (r1, r2) appears the first time
            deg[r2] += 1
        }
        if _, ok := graph[r1]; !ok {
            graph[r1] = map[byte]bool{}
        }
        graph[r1][r2] = true
    }

    // Build queue of elements with zero degree
    q := NewQueue()
    for k, v := range deg {
        if v == 0 {
            q.Enqueue(k)
        }
    }

    b := strings.Builder{}
    for len(*q) > 0 {
        r, _ := q.Dequeue()
        b.WriteByte(r)
        for next, _ := range graph[r] {
            deg[next] -= 1
            if deg[next] == 0 {
                q.Enqueue(next)
            }
        }
    }

    if b.Len() < len(deg) {
        return ""
    }
    return b.String()
}

/* Queue */
type Queue []byte

func NewQueue() *Queue {
    return &Queue{}
}

func (q *Queue) Enqueue(v byte) {
    *q = append(*q, v)
}

func (q *Queue) Dequeue() (byte, bool) {
    if len(*q) == 0 {
        return *new(byte), false
    }
    v := (*q)[0]
    *q = (*q)[1:]
    return v, true
}
```