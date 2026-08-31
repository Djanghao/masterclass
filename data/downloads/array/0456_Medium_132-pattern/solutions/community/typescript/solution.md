# Typescript: 2 stack solutions

**Author:** alexgavrilov
**Votes:** 2
**Link:** [https://leetcode.com/problems/132-pattern/solutions/4109760/](https://leetcode.com/problems/132-pattern/solutions/4109760/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function find132pattern(nums: number[]): boolean {
    const stack: number[] = [];
    let middle = Number.MIN_SAFE_INTEGER;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < middle) {
            return true;
        } 
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            middle = stack.pop()!;
        }
        stack.push(nums[i]);
    }

    return false;
}

function find132patternStack2(nums: number[]): boolean {
    const n: number = nums.length;
    if (n < 3) {
        return false;
    }
    const minArr: number[] = new Array(n).fill(0);
    minArr[0] = nums[0];

    for (let i = 1; i < n; i++) {
        minArr[i] = Math.min(minArr[i - 1], nums[i]);
    }

    const stack: number[] = [];
    for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] <= minArr[j]) {
            continue;
        }
        while (stack.length > 0 && stack[stack.length - 1] <= minArr[j]) {
            stack.pop();
        }
        if (stack.length > 0 && stack[stack.length - 1] < nums[j]) {
            return true;
        }
        stack.push(nums[j]);
    }

    return false;
};
```