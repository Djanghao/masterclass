# Solution with stack, beats 70%

**Author:** hardey261996
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5312866/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5312866/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
create a stack with items in sorted order and frequency, Use another stack to manage the K items while finding the consecutives ones and rebalance the main stack (removing items with count usage exhausted)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isPossibleDivide(nums: number[], k: number): boolean {
    if(k > nums.length) return false;
    nums.sort((a, b) => a-b);
    let stack = [];

    for(let i=nums.length-1; i>=0; i--) {
        let curr = nums[i];

        let lastStackElement = stack[stack.length-1];
        if (lastStackElement && lastStackElement[0]===curr) {
            lastStackElement[1]++;
        } else {
            stack.push([curr, 1]);
        }
    }


    let supportStack = [];
    while(stack.length > 0) {
        let prev = -1;
        if (stack.length - k < 0) {
            return false
        }
        for(let i=0; i<k && stack.length > 0; i++) {
            let item = stack.pop();
            let no = item[0];
            let count = --item[1];
            if(prev!== -1 && no-1!==prev) {
                return false;
            }
            if(count>0) {
                supportStack.push(item);
            }
            prev = no;
        }

        while(supportStack.length > 0) {
            stack.push(supportStack.pop());
        }
    }

    return true;
};
```