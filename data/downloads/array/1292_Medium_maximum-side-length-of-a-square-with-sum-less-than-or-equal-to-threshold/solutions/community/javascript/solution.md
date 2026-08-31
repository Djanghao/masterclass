# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4567845/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4567845/)

---

# Code
```
let g, n, m, limit;
const maxSideLength = (mat, threshold) => {
    g = mat, n = g.length, m = g[0].length, limit = threshold;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER);
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

const possible = (side) => { // check if the square exists with edge == side  brute fore, may improve
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i + side - 1 < n && j + side - 1 < m) {
                let sum = 0;
                for (let x = i; x <= i + side - 1; x++) {
                    for (let y = j; y <= j + side - 1; y++) {
                        sum += g[x][y];
                    }
                }
                if (sum <= limit) return true;
            }
        }
    }
    return false;
};
```