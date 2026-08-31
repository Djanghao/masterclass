# I'm not sure how but it works

**Author:** dimadidyk0
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910591/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910591/)

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
```typescript []
function maxKelements(nums: number[], k: number): number {
    let result = 0;
    nums.sort((a,b) => b - a);

    if (k === 1) {
        return nums[0];
    }

    

    for (let i = 0, index = 0; i < k; i++) {
        // console.log(nums);
        let [a,b,c] = [nums[index], nums[index + 1], nums[0]];
        if (a >= b && a >= c) {
            result+=a;
            nums[index] = Math.ceil(a / 3);
        } else if (b > a && b > c) {
            index++;
            result+=b;
            nums[index] = Math.ceil(b / 3);
        } else {
            nums.sort((a,b) => b - a);
            index = 0;
            result+=c;
            nums[0] = Math.ceil(c / 3);
        }
    }

    return result;
};
```