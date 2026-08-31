# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/4623517/](https://leetcode.com/problems/split-array-with-same-average/solutions/4623517/)

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
const findSum = (targetSum: number, remainingLen: number, choices: number[]): number[][] =>  {
    if (remainingLen === 0) {
        return targetSum === 0 ? [[]] : [];
    }
    if (choices.length === 0) {
        return [];
    }
    if (choices.length === 1) {
        return choices[0] === targetSum && remainingLen === 1 ? [[choices[0]]] : [];
    }
    const lessChoices = choices.filter(j => j <= targetSum);
    if (lessChoices.length === 0) {
        return [];
    }
    if (lessChoices.length === 1) {
        return lessChoices[0] === targetSum && remainingLen === 1 ? [[lessChoices[0]]] : [];
    }
    const evenLessChoices = lessChoices.slice(0, lessChoices.length - 1);
    const with_a = findSum(targetSum - lessChoices[lessChoices.length - 1], remainingLen - 1, evenLessChoices);
    if (with_a.length > 0) {
        return with_a.map(s => [...s, lessChoices[lessChoices.length - 1]]);
    } else {
        return findSum(targetSum, remainingLen, evenLessChoices);
    }
}

function splitArraySameAverage(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b, 0);
    const len = nums.length;


    const gcd = (a: number, b: number): number => {
        if (a === 0) {
            return b;
        }
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    const fgcd = gcd(sum, len);
    const reduced_sum = sum / fgcd;
    const reduced_len = len / fgcd;



    if (reduced_len === len) {
        return false;
    }
    for (let l = 1; l <= Math.floor(len / 2) + 1; l++) {
        const target_sum = l * reduced_sum;
        const target_len = l * reduced_len;
        if (target_len === 1) {
            if (nums.includes(target_sum)) {
                return true;
            }
            if (nums.filter(m => m > target_sum).length === 1) {
                return false;
            }
        }
        const filtered_sum = nums.filter(m => m <= target_sum).reduce((a, b) => a + b, 0);
        if (filtered_sum < target_sum) {
            continue;
        }
        if (target_len >= len) {
            return false;
        }
        const found_sum = findSum(target_sum, target_len, nums);
        if (found_sum.length > 0) {
            return true;
        }
    }
    return false;
}


```