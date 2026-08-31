# [Binary Search] - TypeScript / JavaScript

**Author:** dustinkiselbach
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/925829/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/925829/)

---

function smallestDivisor(nums: number[], threshold: number): number {

    function computeSum(i:number) {
        let sum = 0;
        for (const num of nums) {
            sum+= Math.ceil(num / i);
        }
        return sum
    }
    let lo = 1
    let hi = 2

    while (computeSum(hi) > threshold) {
        lo = hi;
        hi = hi * 2;
    }
    // now the lo and high are range of the answer
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)
        const sum = computeSum(mid)
        
        if (sum > threshold) {
            lo = mid + 1
        } else {
            hi = mid -1
        }
    }

    return lo
};