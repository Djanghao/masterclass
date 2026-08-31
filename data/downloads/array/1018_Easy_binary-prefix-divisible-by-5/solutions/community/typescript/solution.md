# The reason you should read hints ;) | O(n) | TypeScript ^ JavaScript ^ Python ^-^

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/5333418/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/5333418/)

---

> Read your hints people!
If X is the first i digits of the array as a binary number, then 2X + A[i] is the first i+1 digits.
# Intial *(wrong)* Approach
```
function prefixesDivBy5(nums: number[]): boolean[] {
    const n = nums.length;
    const result: boolean[] = new Array<boolean>()
    let remainder = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (remainder === 0 || result[i - 1] === true) result.push(true);
            else result.push(false);
            continue;
        }
        let currentRemainder = Math.pow(2, n - i);
        remainder += (currentRemainder % 5);
        if (remainder % 5 === 0) result.push(true);
        else result.push(false);
    }

    return result;
};
```
## Intuition
- The code attempts to determine if the binary numbers formed by subarrays of nums are divisible by 5 by keeping track of remainders.
## Approach
1. Initialize an empty result array and a **remainder** variable.
2. Loop through each element in **nums**:
    - If the element is **0**:
        - Check if the current **remainder** is **0** or if the previous result was **true**, then push **true** to the result array, otherwise push **false**.
        - Continue to the next iteration.
    - Calculate the **currentRemainder** by raising 2 to the power of the position in the array.
    - Add the **currentRemainder** modulo 5 to the **remainder**.
    - Check if the **remainder** modulo 5 is 0 and push the result accordingly.
## Time Complexity
- **O(n):** The function iterates through the **nums** array once.
## Space Complexity
- **O(n):** The result array stores a boolean value for each element in **nums**.

## Why it simply doesn't work ?
- The code misinterprets the problem of forming binary numbers and updating the remainder. Specifically:
    - The use of `Math.pow(2, n - i)` incorrectly calculates the power of 2 based on the length of nums rather than the current position.
    - The check ``result[i - 1] === true`` is redundant and incorrect since it can lead to index out of bounds errors and does not properly handle the accumulation of the binary value.
    - Adding `currentRemainder % 5` directly to remainder does not correctly update the binary number's value and its remainder.

# Correct Approach
```
function prefixesDivBy5(nums: number[]): boolean[] {
    const result: boolean[] = [];
    let remainder = 0;

    for (let i = 0; i < nums.length; i++) {
        remainder = (remainder * 2 + nums[i]) % 5;
        result.push(remainder === 0);
    }

    return result;
};
```
## Intuition
- This code correctly updates the binary number's value and checks if it is divisible by 5 by using a cumulative remainder approach.Intuition
## Approach 
1. Initialize an empty result array and a remainder variable.
2. Loop through each element in nums:   
    - Update the remainder by multiplying it by 2 and adding the current element. Then, take the modulo 5 of the updated remainder.
    - Push true to the result array if the remainder is 0, otherwise push false.
## Time complexity:
- **O(n):** The function iterates through the **nums** array once.
## Space complexity:
- **O(n):** The result array stores a boolean value for each element in **nums**.
## Why it works ?
- The correct code:
    - Accurately accumulates the binary value by shifting the remainder and adding the current bit.
    - Ensures the remainder stays within bounds by using modulo 5 at each step.
    - Correctly determines if the accumulated binary value is divisible by 5 by checking if the remainder is 0.
- This approach correctly mimics how binary numbers are formed and ensures accurate checking of divisibility by 5.



