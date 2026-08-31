# Dynamic Programming || O(n^2) time || O(n) space

**Author:** xkatianx
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5915914/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5915914/)

---

# Intuition
If Bob loses, `-1` score.
`dp[i][c]` means at `i`-th turn Bob plays `c`, the content is an array `arr` representing there are `arr[s]` way to have `s` score.
`dp[i + 1][c1]` is merging `dp[i][c2]` and `dp[i][c3]` with a shift of `score(i, c1)`.



# Complexity
- Time complexity: $O(n^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function countWinningSequences(s: string): number {
    const M = 10**9 + 7
    const add = (a: number, b: number) => (a + b) % M
    const score = (i: number, c: string) => "FWEF".slice(i, i + 2).indexOf(c)

    class Data {
        arr = [1]
        constructor (public offset: number) {}
        count () {
            return this.arr
                .slice(Math.max(0, this.offset + 1))
                .reduce(add, 0)
        }
    }

    function merge(offset: number, a: Data, b: Data) {
        if (b.offset < a.offset) [a, b] = [b, a]
        const c = new Data(b.offset + offset)
        c.arr = b.arr.slice()
        a.arr.forEach((v, i) => {
            const j = i + b.offset - a.offset
            c.arr[j] = add(c.arr[j] ?? 0, v ?? 0)
        })
        return c
    }

    let arr = [0, 1, 2].map(v => new Data(score(v, s[0])))
    for (let i = 1; i < s.length; i++) {
        arr = [0, 1, 2].map(v => 
            merge(score(v, s[i]), arr[++v % 3], arr[++v % 3])
        )
    }
    
    return arr.map(v => v.count()).reduce(add)
}

```