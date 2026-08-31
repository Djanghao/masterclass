# O(n) worst case time + O(n) space (no sorting)

**Author:** 1greatte1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4331996/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4331996/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Go for best time possible. As o(log(n)) is not the case for worst case scenario (we have no prior knowledge about the bars arrays), go for for o(n) time complexity. As bars arrays are pretty finite - store them in a hashmap and scan it later with increasing window approach(we have the knowledge that keys are distinct integer numbers, we can just scan them left and right on a hashmap), finding the biggest consecutive line of numbers and marking already visited numbers. You can do similar approach with the bucket sort, but it will be in a much wider range, so go with a hashmap approach.

some local improvement can be done to the time, but worst case will still be the same

# Complexity
- Time complexity:
    o(n), n being the max length between lengths of bars arrays

- Space complexity:
    o(n), n being the max length between lengths of bars arrays
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//setup function before, not to consume more ram
function arrToMap(arr: number[]): Map<number, boolean> {
    let res = new Map();
    for (let i = 0; i < arr.length; i++) {
        res.set(arr[i], false)
    }
    return res
}


function findMaxConsecutiveNumbers(someMap: Map<number, boolean>, currentFoundMax) {
    let max = 0;
    let current = 0;
    someMap.forEach((item, index, mapStore) => {
        if (!item) {
            current = 1;
            let right = 1, left = 1;

            while (mapStore.has(index + right)) {
                mapStore.set(index + right, true)
                right++;
                current++;
            }

            while (mapStore.has(index - left)) {
                mapStore.set(index - left, true)
                left++;
                current++;
            }
            max = max < current ? current : max
            //if max is bigger then current found maximum - return it, 
            //as it will not matter to further scan the array. 
            //you can check it it each while also, but that wont be pretty
            if (max >= currentFoundMax) return max;
        }
    })
    return max;
}


function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    
    // so - not all bars are present in h/vbars
    //first - see at the current limits
    //this is the theoretical maximum
    const maxPossible = n > m ? (m + 1) * (m + 1) : (n + 1) * (n + 1)
    //if all vbars and hbars are presented, just return current maximum
    if (hBars.length === n && vBars.length === m) return maxPossible

    //basically - as each line always intersect another one, the biggest square will always be on intersection
    //of min of max  consecutive numbers length between both arrays

    const hMap = arrToMap(hBars)
    const hmapMax = findMaxConsecutiveNumbers(hMap, maxPossible)
    if (!hmapMax) return hmapMax
    //we dont care about the second array, as we need at least one intersection 
    //in a case when we have only one bar to remove
    //just to save some time and space
    if (hmapMax === 1 && hBars.length) return 4
    const vMap = arrToMap(vBars)
    const vmapMax = findMaxConsecutiveNumbers(vMap, hmapMax)
    return hmapMax > vmapMax ? (vmapMax + 1) * (vmapMax + 1) : (hmapMax + 1) * (hmapMax + 1);
}

```