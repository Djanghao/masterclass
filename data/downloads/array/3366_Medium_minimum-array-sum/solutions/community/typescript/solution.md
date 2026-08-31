# Take away notes for not TLE is using array index rather than reconstruct nums.

**Author:** kkfnpdc123
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-sum/solutions/6080040/](https://leetcode.com/problems/minimum-array-sum/solutions/6080040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Here are few strategies to speed up and avoid TLE:
1. use DP array to return computed results rather then recompute
   1.1. use key `${index}-${o1}-${o2}` & map to avoid multi-D array.
2. put more conditions to avoid entering recursive functions.
3. Avoid reconstruct new arrays if you could just pass down index instead.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function minArraySum(
    nums: number[],
    k: number,
    op1: number,
    op2: number
): number {

    const length = nums.length;

    const dp = new Map<string, number>();
    const processNum = (index: number, o1: number, o2: number): number => {
        // console.log("arr", arr, o1, o2);
        // if (o1 < 0 || o2 < 0) {
        //     return Infinity;
        // }

        const key = `${index}-${o1}-${o2}`;

        if (dp.has(key)) {
            return dp.get(key);
        }

        if (index === length) {
            return 0;
        }



        if (o1 === 0 && o2 === 0) {
            return nums.slice(index).reduce((sum, curr) => sum + curr, 0);
        }

        //    const [first, ...rest] = arr;
        const first = nums[index];
        const rest = index + 1;
        // let t1 = Infinity;
        // const half = Math.round(first / 2);
        // console.log(`k=${k}, first=${first}, half=${half}, o1=${o1}, o2=${o2}`);
        // if (o1 > 0) {
        //     if (half >= k && o2 > 0) {
        //         t1 = processNum(rest, o1 - 1, o2 - 1) + half - k;
        //     } else if (first >= k && o2 > 0) {
        //         t1 = Math.min(processNum(rest, o1, o2 - 1) + first - k, processNum(rest, o1 - 1, o2) + half);
        //     } else {
        //         t1 = processNum(rest, o1 - 1, o2) + half;
        //     }
        // } else {
        //     if (first >= k && o2 > 0) {
        //         t1 = processNum(rest, o1, o2 - 1) + first - k;
        //     } else if (o2 === 0) {
        //         t1 = nums.slice(index).reduce((sum, curr) => sum + curr, 0);
        //     } else if (first < k) {
        //         t1 = processNum(rest, o1, o2) + first;
        //     }
        // }

        // dp.set(key, t1);

        // console.log('result', key, dp.get(key), arr)


        let p1 = Infinity, p4 = Infinity, p5=Infinity,
            p2 = Infinity;

        if (first >= k && o2 > 0 && o1>0){
            p4 = processNum(rest, o1-1, o2-1) + Math.round((first - k) / 2);
        }
         if (Math.round(first/2) >= k && o2 > 0 && o1>0){
            p5 = processNum(rest, o1-1, o2-1) + Math.round(first/2) - k;
        }
        if (first >= k && o2 > 0) {
            p1 = processNum(rest, o1, o2-1) + first - k;
        }
        if (o1 > 0) {
            p2 = processNum(rest, o1-1, o2) + Math.round(first / 2);
        }
        const p3 = processNum(rest, o1, o2) + first;


        // console.log("p1=", p1, "p2=", p2, "p3=", p3);

        dp.set(key, Math.min(p1, p2, p3, p4, p5));

        return dp.get(key);
        // return Math.min(processNum(rest, o1 - 1, o2) + first - k, processNum(rest, o1, o2-1) + Math.round(first/2))
    };

    // const start = performance.now();
    // nums.sort((a, b) => b - a);
    const result = processNum(0, op1, op2);
    // console.log('duration', performance.now() - start);
    return result;
}
// dp,
// backtracking

```