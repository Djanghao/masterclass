# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 4
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/6091295/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/6091295/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem, we need to calculate two values:
1. The product of the digits of the number.
2. The sum of the digits of the number.
Finally, subtract the sum from the product. A straightforward solution involves converting the number into a string to process each digit individually.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Convert the number `n` into a string to easily access its digits.
2. Initialize two variables: `sum` to store the sum of digits and `product` to store the product of digits. Set `sum` to 0 and `product` to 1.
3. Loop through each character of the string representation of `n`:
   - Convert the character to an integer using `parseInt()`.
   - Add the digit to `sum`.
   - Multiply the digit with `product`.
4. Subtract `sum` from `product` to get the final result.
5. Return the result.

# Code
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString();
    let sum=0;
    let product =1;
    for(let i=0;i<n.length;i++){
        sum +=parseInt(n[i]);
        product *=parseInt(n[i]);
    }

    let result =product-sum ;

  \xA0\xA0return\xA0result;
};
```

```typescript []
function subtractProductAndSum(n: number): number {
    const digits = n.toString();
    let sum = 0, product = 1;
    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        sum += digit;
        product *= digit;
    }
    return product - sum;
}