# Binary Search TS

**Author:** gedaaaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/6122629/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/6122629/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

convert this question into: if we know a target number, can we make sure each child get those candies. if we can we should try some number larger.

then this can be solved by binary search where upper limit is larges pile in candies[], lower limit is 0.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(NlogK)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```typescript []
function maximumCandies(candies: number[], k: number): number {
    let upperLimit = candies[getLargestPile(candies)];
    let lowerLimit = 0;

    while(upperLimit - lowerLimit > 1) {
        const mid = Math.floor((upperLimit + lowerLimit) / 2);
        if (canDistribute(mid, candies, k)) {
            lowerLimit = mid;
        } else {
            upperLimit = mid;
        }
    }

    return canDistribute(upperLimit, candies, k) ? upperLimit : lowerLimit;
    
};

function canDistribute(candiesPerChild: number, candies: number[], k: number): boolean {
    if (candiesPerChild === 0) {
        return true;
    }

    let pileAllocated = 0;
    for (let i = 0; i < candies.length; i++) {
        const distributedPiles = Math.floor(candies[i]/candiesPerChild);
        pileAllocated += distributedPiles;
    }
    return pileAllocated >= k;
}

function getLargestPile(candies: number[]): number {
    let seenLargestPile = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > candies[seenLargestPile]) {
            seenLargestPile = i;
        }
    }
    return seenLargestPile;
}
```