# Brute Force

**Author:** smcrncic
**Votes:** 0
**Link:** [https://leetcode.com/problems/image-overlap/solutions/5158065/](https://leetcode.com/problems/image-overlap/solutions/5158065/)

---


# Approach
Moving img2 across img 1 using offset.


# Code
```
// 12:25
function largestOverlap(img1: number[][], img2: number[][]): number {
    if(img1.length === 1 && img1[0].length === 1) {
        return img1[0][0] === 1 && img2[0][0] === 1 ? 1 : 0;
    }
    let overlap = 0
    let maxCount = 0
    //offsets
    for(let offseti = -1 * (img1[0].length - 1); offseti <= img1[0].length - 1; offseti++) {
        for(let offsetj = -1 * (img1.length - 1); offsetj <= img1.length - 1; offsetj++) {
            let currCountR = 0;
            for(let i = 0; i <= img1[0].length - 1; i++) {
                for(let j = 0; j <= img1.length - 1; j++) {
                    if(i + offseti >= 0 && i + offseti <= img1[0].length - 1 && j + offsetj >= 0 && j + offsetj <= img1.length - 1
                        && img1[j][i] === 1 && img2[j + offsetj][i + offseti] === 1){
                        currCountR++;
                    }
                }
            }
            maxCount = Math.max(maxCount, currCountR)
        }
    }
    return maxCount
};


```