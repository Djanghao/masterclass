# Easy Binary search solution with TypeScript

**Author:** prashantmalav2
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/5100395/](https://leetcode.com/problems/split-array-largest-sum/solutions/5100395/)

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
function isValid(nums: number[], n: number, k: number, mid: number): boolean {
    let stu: number = 1;
    let sum: number = 0;

    for (let i: number = 0; i < n; i++) {
        sum += nums[i];
        
        if (sum > mid) {
            stu++;
            sum = nums[i];
        }
    }

    if(stu>k){
        return false;
    }
    return true;
}

function splitArray(nums: number[], k: number): number {
    let end: number = 0;
    let start: number = 0;
    const n: number = nums.length;

    for (let i: number = 0; i < n; i++) {
        end += nums[i];
        start = Math.max(start, nums[i]);
    }

    let res: number = -1;
    while (start <= end) {
        let mid: number = Math.floor((start + end) / 2);

        if (isValid(nums, n, k, mid)) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res;
}

```