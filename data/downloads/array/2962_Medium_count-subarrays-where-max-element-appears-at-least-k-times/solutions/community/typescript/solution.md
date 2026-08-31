# JS/TS solution

**Author:** 00nkul
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940582/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940582/)

---

# Approach
- We look at all the numbers and find the biggest one. This helps us understand the range we're dealing with.
- We start at the left side of the board and slowly move to the right, adding up numbers as we go.
- Whenever we add a number that is the biggest one, we keep track of it. This helps us know if we're getting closer to our target or not.
- If the sum of the numbers we've added so far equals or exceeds our target, we start removing numbers from the left side until we're back under the target.
- Each time we find a group of numbers that meets our target, we count it.
- We keep doing this until we've looked at all the numbers on the board.
- Finally, we count up all the groups we found, and that's our answer!
# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 

# Code
```
function countSubarrays(nums: number[], k: number): number {
    let max = Math.max(...nums);
    let n = nums.length;
    let currCount = 0, left = 0, ans = 0;

    for(let right = 0; right <n; right++){
        currCount += (nums[right] === max ? 1 : 0);

        while(currCount >= k){
            currCount -= (nums[left] === max ? 1 : 0);
            left++;
        }
        ans += left;
    }


    return ans;
};
```