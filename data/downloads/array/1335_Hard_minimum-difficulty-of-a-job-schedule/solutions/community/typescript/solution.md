# Javascript | Typescript - Explain detail Dynamic Programing solution

**Author:** nhandqDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2714726/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/2714726/)

---

The ideal is "In any position You could **leave the day with that position** or **wait for next position**"
With that ideal you could alway split the solution into two way

```
function minDifficulty(jobDifficulty: number[], d: number): number {
    if (d > jobDifficulty.length) return -1;
    if (d === 1) return Math.max(...jobDifficulty)
    let memo: {[key in string]: number} = {};

    const dp = (jobs: number[], days: number, idx: number, globalIndex: number): number => {
        if (days > jobs.length - idx) {
            memo[`${days}-${idx}-${globalIndex}`] = Number.MAX_SAFE_INTEGER;
        };
        if (memo[`${days}-${idx}-${globalIndex}`] === undefined) {
            switch (days) {
                case jobs.length - idx:
                    memo[`${days}-${idx}-${globalIndex}`] = Math.max(...jobs.slice(0,idx+1)) + jobs.slice(idx+1).reduce((pre, curr) => pre+curr, 0);
                    break;
                case 1:
                    memo[`${days}-${idx}-${globalIndex}`] = Math.max(...jobs);
                    break;

                default:
                    memo[`${days}-${idx}-${globalIndex}`] = Math.min(
                        dp(jobs, days, idx+1, globalIndex+1), //wait for next position
                        Math.max(...jobs.slice(0, idx+1)) + dp(jobs.slice(idx+1), days-1, 0, globalIndex+1) //leave the day with that position
                    );
                    break;
            }
        }

        return memo[`${days}-${idx}-${globalIndex}`];
    }

    return Math.min(
        dp(jobDifficulty, d, 1, 1), //wait for next position
        jobDifficulty[0] + dp(jobDifficulty.slice(1), d-1, 0, 1) //leave the day with that position
    );
};
```

For example with the test case `jobDifficulty = [11,111,22,222,33,333,44,444]` and the `d = 6` we could have the tree like this.
**Pattern**:
"Level of Node"
(Left Node) Leave the day with that position - last day value, current jobs left, days left, current index, global index
(Right Node) Wait for next position - current jobs left, days left, current index, global index.

"lv0" 
11,  [111, 22, 222, 33, 333, 44, 444],  5,  0,  1 
[11, 111, 22, 222, 33, 333, 44, 444],  6,  1,  1 
"lv1" 
[111],  [22, 222, 33, 333, 44, 444],  4,  0,  2 
[111, 22, 222, 33, 333, 44, 444],  5,  1,  2 
"lv2" 
[22],  [222, 33, 333, 44, 444],  3,  0,  3 
[22, 222, 33, 333, 44, 444],  4,  1,  3 
"lv3" 
[222],  [33, 333, 44, 444],  2,  0,  4 
[222, 33, 333, 44, 444],  3,  1,  4 
"lv4" 
[33],  [333, 44, 444],  1,  0,  5 
[33, 333, 44, 444],  2,  1,  5 
"lv5" 
[33, 333],  [44, 444],  1,  0,  6 
[33, 333, 44, 444],  2,  2,  6 
"lv4" 
[222, 33],  [333, 44, 444],  2,  0,  5 
[222, 33, 333, 44, 444],  3,  2,  5 
"lv5" 
[333],  [44, 444],  1,  0,  6 
[333, 44, 444],  2,  1,  6 
"lv3" 
[22, 222],  [33, 333, 44, 444],  3,  0,  4 
[22, 222, 33, 333, 44, 444],  4,  2,  4 
"lv4" 
[33],  [333, 44, 444],  2,  0,  5 
[33, 333, 44, 444],  3,  1,  5 
"lv2" 
[111, 22],  [222, 33, 333, 44, 444],  4,  0,  3 
[111, 22, 222, 33, 333, 44, 444],  5,  2,  3 
"lv3" 
[222],  [33, 333, 44, 444],  3,  0,  4 
[222, 33, 333, 44, 444],  4,  1,  4 
"lv1" 
[11, 111],  [22, 222, 33, 333, 44, 444],  5,  0,  2 
[11, 111, 22, 222, 33, 333, 44, 444],  6,  2,  2 
"lv2" 
[22],  [222, 33, 333, 44, 444],  4,  0,  3 
[22, 222, 33, 333, 44, 444],  5,  1,  3 
843 


```
Runtime: 3995 ms
Memory Usage: 92.4 MB
```