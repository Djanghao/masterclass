# Solution with simple O(n) iteration

**Author:** amikudev11
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5225782/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5225782/)

---

# Intuition
Keep doing gcd of array, till you do not get 1, increase count of answer by it.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumSplits(nums: number[]): number {
    let currentGcd = nums[0];
    let ans = 0;

    for (let i = 1; i < nums.length; i++) {
        currentGcd = gcd(nums[i], currentGcd);
        if (currentGcd === 1) {
            ans++;
            currentGcd = nums[i];
        }
        console.log(`${i}, ${currentGcd}`);
    }

    if(currentGcd !== 1) {
        ans++;
    }

    return ans;
};

function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```