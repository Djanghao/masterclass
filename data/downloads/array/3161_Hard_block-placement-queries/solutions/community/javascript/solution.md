# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/block-placement-queries/solutions/5207056/](https://leetcode.com/problems/block-placement-queries/solutions/5207056/)

---

# Code
```
/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
    let main = [];
    let larg = [];
    let ans = [];

    for (const q of queries) {
        if (q[0] === 1) {
            let ind = bisect(main, q[1]);

            if (ind === 0) {
                main.splice(0, 0, q[1]);
                larg.splice(0, 0, q[1]);
            } else {
                main.splice(ind, 0, q[1]);
                larg.splice(ind, 0, Math.max(larg[ind - 1], (main[ind] - main[ind - 1])));
            }

            ind += 1;

            while (ind < main.length) {
                if (larg[ind] === larg[ind - 1]) {
                    break;
                }
                larg[ind] = Math.max(larg[ind - 1], (main[ind] - main[ind - 1]));
                ind += 1;
            }
        } else {
            if (q[2] > q[1]) {
                ans.push(false);
            } else {
                let ind = bisect(main, q[1]);
                let lim;

                if (ind === 0) {
                    lim = q[1];
                } else if (main[ind - 1] === q[1]) {
                    lim = larg[ind - 1];
                } else {
                    lim = Math.max(larg[ind - 1], (q[1] - main[ind - 1]));
                }

                ans.push(q[2] <= lim);
            }
        }
    }

    return ans;
};

// Helper function to simulate bisect_left from Python's bisect module
function bisect(arr, x) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

```