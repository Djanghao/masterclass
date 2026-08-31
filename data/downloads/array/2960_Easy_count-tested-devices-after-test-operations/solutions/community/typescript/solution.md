# TypeScript | One-Pass Reduce

**Author:** Matt_HackerMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5271030/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5271030/)

---

```typescript
function countTestedDevices(bP: number[]): number {
    let d = 0;
    return bP.reduce((t: number, x: number): number => {
        if (x - d > 0) {
            ++d;
            ++t;
        }
        return t;
    }, 0);
};
```