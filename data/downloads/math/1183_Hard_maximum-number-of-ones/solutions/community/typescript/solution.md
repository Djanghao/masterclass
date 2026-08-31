# Typescript | Concise O(1) solution

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/3985787/](https://leetcode.com/problems/maximum-number-of-ones/solutions/3985787/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript
function maximumNumberOfOnes(width: number, height: number, sideLength: number, maxOnes: number): number {
    let temp: number;

    // Make sure width >= height
    if (width < height) {
        temp = width;
        width = height;
        height = temp;
    }
    
    const modH = height % sideLength;
    const divH = (height - modH) / sideLength;
    const modW = width % sideLength;
    const divW = (width - modW) / sideLength;
    
    // Add ones in full squares
    let count = maxOnes * divH * divW;

    // Add ones in top left section of all incomplete squares
    temp = Math.min(maxOnes, modH * modW);
    count += temp * (1 + divH + divW);
    maxOnes -= temp;

    // Add ones in remaining section of bottom incomplete squares
    temp = Math.min(maxOnes, modH * (sideLength - modW));
    count += temp * divW;
    maxOnes -= temp;

    // Add ones in remaining section of right incomplete squares
    temp = Math.min(maxOnes, modW * (sideLength - modH));
    count += temp * divH;

    return count;
};

/*
// Time: O(MNlog(MN))
// Space: O(MN)
function maximumNumberOfOnes(width: number, height: number, sideLength: number, maxOnes: number): number {
    const counts: number[] = [];
    for (let y = 1; y <= sideLength; ++y) {
        const h = 1 + Math.floor((height - y) / sideLength);
        for (let x = 1; x <= sideLength; ++x) {
            const w = 1 + Math.floor((width - x) / sideLength);
            counts.push(w * h);
        }
    }
    counts.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < maxOnes; sum += counts[i++]) {}
    return sum;
}
*/
```