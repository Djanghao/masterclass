# [typescript/javascript] 3 solutions optimized from 33%, to 80% to 100% - w/ comments

**Author:** carti
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/859635/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/859635/)

---

**first solution:**
(slow, and also uses o(n) mem, beat 33% of all submissions)
```
function findDuplicates(nums: number[]): number[] {
    // set of numbers seen
    const seen: Set<number> = new Set();
    // result
    const res: number[] = [];
    // iter thru numbers
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) res.push(nums[i]);
        seen.add(nums[i]);
    }
    return res;
}
```
**second solution:**
(fast, and also uses o(1) mem, beat 80% of all submissions)
```
function findDuplicates(nums: number[]): number[] {
    // result
    const res: number[] = [];
    // iter thru numbers
    for (let i = 0; i < nums.length; i++) {
        // take current number, use as an index (since 1 <= nums[i] <= n)
        // use abs because we will be flipping signs later
        const idx: number = Math.abs(nums[i]) - 1;
        // check if we've already seen this number (flipped sign)
        if (nums[idx] < 0) res.push(idx + 1);
        // flip sign (to mark this number)
        nums[idx] = -nums[idx];
    }
    return res;
}
```
**final solution**
(this time, local copy abs() from Math
(fast, and also uses o(1) mem, beat 100% of all submissions)
```
function findDuplicates(nums: number[]): number[] {
    // local ref to abs() function
    const abs = Math.abs;
    // result
    const res: number[] = [];
    // iter thru numbers
    for (let i = 0; i < nums.length; i++) {
        // take current number, use as an index (since 1 <= nums[i] <= n)
        // use abs because we will be flipping signs later
        const idx: number = abs(nums[i]) - 1;
        // check if we've already seen this number (flipped sign)
        if (nums[idx] < 0) res.push(idx + 1);
        // flip sign (to mark this number)
        nums[idx] = -nums[idx];
    }
    return res;
}
```