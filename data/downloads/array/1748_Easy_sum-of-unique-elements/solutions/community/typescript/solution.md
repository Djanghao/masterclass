# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/6088970/](https://leetcode.com/problems/sum-of-unique-elements/solutions/6088970/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to calculate the sum of numbers that appear only once in the array. To achieve this, we can use a nested loop to check the occurrence of each element.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use a variable `sum` initialized to 0 to keep track of the sum of unique elements.
2. For each element in the array:
   - Use a nested loop to check if the element occurs more than once.
   - If it occurs only once, add it to the sum.
3. Return the computed sum.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    for( let i=0; i<nums.length;i++){
        let flag = 0;
        for( let j=0;j<nums.length; j++){
            if(i!=j && nums[i]== nums[j]){
                flag =1;
                break
            }
        }
        if(flag==0){
            sum+=nums[i];
        }
    }
    return sum;
};
```

```typescript []
function sumOfUnique(nums: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        let flag: number = 0;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                flag = 1;
                break;
            }
        }

        if (flag === 0) {
            sum += nums[i];
        }
    }

    return sum;
}