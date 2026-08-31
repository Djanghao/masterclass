# ✅ [TS] 103ms | Beats 96.88% of users with TypeScript | HashMap | Easy to understand

**Author:** viniciusteixeiradias
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/2822388/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/2822388/)

---

```ts
// Time complexity: O(n)
// Space complexity: O(n)
const minimumCardPickup = (cards: number[]): number => {
    const map = new Map<number, number>();
    let ans: number = Infinity;

    for (let i = 0; i < cards.length; i++) {
        const num = cards[i];

        if (map.has(num)) {
            ans = Math.min(ans, (i + 1 - map.get(num)!))
        }

        map.set(num, i)
    }

    return ans === Infinity ? -1 : ans;
}
```
Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.