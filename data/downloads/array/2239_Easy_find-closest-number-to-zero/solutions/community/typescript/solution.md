# findClosestNumber

**Author:** KaroMuradyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/5832579/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/5832579/)

---

# Code
```typescript []
function findClosestNumber(nums: number[]): number {
    let clos = nums[0];
    
    for (let v of nums) {
        if (Math.abs(v) < Math.abs(clos)) {
            clos = v;
        }
        else if (Math.abs(v) === Math.abs(clos)) {
            clos = Math.max(clos, v);
        }
    }
    return clos;
}

```