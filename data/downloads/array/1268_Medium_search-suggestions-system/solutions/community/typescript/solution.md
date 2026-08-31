# [TypeScript] Too tired to care about efficiency.

**Author:** tarcjf
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/2170791/](https://leetcode.com/problems/search-suggestions-system/solutions/2170791/)

---

The daily problems in these two weeks are full of DP, which either totally don't know how to write, or TLE. Totally a torture to my life and soul.

I'm too tired to care about efficiency today.... But I'm also a little shocked that why my solution doesn't TLE..., even faster than 78%?

```typescript
function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort()
    const ans: string[][] = []
    for (let i = 0;i < searchWord.length;i++) {
        const remainsCandidates = ans.length ? ans[ans.length - 1] : products
        ans.push(remainsCandidates.filter(s => s[i] === searchWord[i]))
    }
    return ans.map(a => a.slice(0, 3))
}
```