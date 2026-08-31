# Easy intuitive solutions using cache beats 100% speed and memory

**Author:** juncker
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/4911945/](https://leetcode.com/problems/count-servers-that-communicate/solutions/4911945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countServers(grid: number[][]): number {
    let res = 0;

    let cache = {
        row: {},
        col: {}
    };



    for ( let i = 0; i< grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 1) continue;
            if (cache.row[i]){
                res+=1;
                continue;
            }
            if (cache.col[j]){
                res+=1;
                continue;
            }

            let tmp = 0;
            for (let m = 0; m < grid.length; m++) {
                if(grid[m][j] === 1 && m!== i) {
                    tmp+=1;
                    cache.row[i] = true;
                    continue;
                    }
            }
            if(tmp > 0) {res+=1; continue;}
            for (let n = 0; n < grid[0].length; n++) {
                if(grid[i][n] === 1 && n!== j) {
                    tmp+=1;
                    cache.col[j] = true;
                    continue;
                    }
            }
            

            if(tmp > 0) res+=1;
        }
    }

    return res;
};
```