# hash map, O(n log n) sum,  O(1) addScore.

**Author:** goodgoodwish
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/1180095/](https://leetcode.com/problems/design-a-leaderboard/solutions/1180095/)

---

```
class Leaderboard {
    ps: any;
    constructor() {
        this.ps = {};
    }

    addScore(playerId: number, score: number): void {
        // this.ps[playerId] = 0;
        this.ps[playerId] = (this.ps[playerId]||0) + score;
    }

    top(K: number): number {
        let A = []
        for (const k in this.ps) {
            A.push(this.ps[k]);
        }
        A.sort((a,b) => b-a)
        const ans = A.slice(0,K).reduce((a, c) => a + c)
        return ans;
    }

    reset(playerId: number): void {
        delete this.ps[playerId]
    }
}
```