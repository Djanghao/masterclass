# ✅ Typescript solution O(n log n). Beats 100% time and space

**Author:** bikerguy
**Votes:** 0
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3924837/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/3924837/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)

- Space complexity:
O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function getFirstIndexGreater(arr: number[], k: number): number | undefined {
    if (arr.length === 0) {
        return undefined
    }
    if (k > arr[arr.length - 1]) {
        return undefined
    }

    let low = 0
    let high = arr.length - 1

    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if (arr[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low

}


function avoidFlood(rains: number[]): number[] {
    const filledLakesMap = new Map<number, number>()
    const dryDays = []
    const result = []

    for (let i = 0; i < rains.length; i++) {
        if (rains[i] === 0) {
            dryDays.push(i)
            result.push(1)
        } else {
            if (!filledLakesMap.has(rains[i])) {
                result.push(-1)
                filledLakesMap.set(rains[i], i)
            } else {
                const dryIndex = getFirstIndexGreater(dryDays, filledLakesMap.get(rains[i]))
                
                if (dryIndex !== undefined) {
                    const [dryDay] = dryDays.splice(dryIndex, 1)
                    result[dryDay] = rains[i]
                    filledLakesMap.set(rains[i], i)
                    result.push(-1)
                } else {
                    return []
                }
            }
        }
    }
    return result
}


```