# Solution with one loop reduceRight and sort

**Author:** Insufficient-skill
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/6091273/](https://leetcode.com/problems/minimum-absolute-difference/solutions/6091273/)

---

# Complexity
- Time complexity: O(n*logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function minimumAbsDifference(arr: number[]): number[][] {
    let minDiff = Infinity;
    arr.sort((a, b) => b - a);

    return arr.reduceRight<number[][]>((res, current, i) => {
        const prev = arr[i - 1];
        const currentDiff = prev - current;
        
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            res = [[current, prev]];
        } else if (currentDiff === minDiff) {
            res.push([current, prev]);
        }

        return res;
    }, []);
};
```