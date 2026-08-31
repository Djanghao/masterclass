# 💥💥TypeScript | 100% beats runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/5809873/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/5809873/)

---



# Intuition
To solve the problem, I realized that if I can find a common factor among all numbers in the array, it tells me something about whether I can make the number 1 from these numbers. If the greatest common divisor (GCD) of the entire array is 1, then it means I can indeed form the number 1 using some combination of these numbers and their multipliers.


# Approach
Calculate the GCD: Start with the first number and iteratively find the GCD of it with each subsequent number in the array.


Check the Result: If the GCD ever becomes 1, I know it's possible to form the number 1, so I return true. If the loop finishes and the GCD is still greater than 1, return false.


# Complexity
- Time complexity:
O(n * log(max)) where n is the number of elements in the array and max is the maximum number in the array. This is because computing the GCD takes O(log(max)) time, and I do this for each element.

- Space complexity:
O(1). I only need a few extra variables to store the GCD and perform calculations, so the space used doesn\u2019t depend on the size of the input.

# Code
```typescript []
function isGoodArray(nums: number[]): boolean {
    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    let currentGCD = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentGCD = gcd(currentGCD, nums[i]);
        if (currentGCD === 1) {
            return true;
        }
    }
    return currentGCD === 1;
}

```