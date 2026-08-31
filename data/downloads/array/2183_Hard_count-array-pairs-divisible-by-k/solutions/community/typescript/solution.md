# (–TypeScript–) Explained with 2 Loops and Hash Map

**Author:** cat24
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/5537892/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/5537892/)

---

# Intuition

The first solution that comes to mind is to use two loops; one inner loop and one outer loop so that for each element `nums[i]` we will compute all the products with the aid of the inner loop so that we can check if `nums[i] * nums[j] % k === 0`.

Of course, this approach will take $$O(n^2)$$ time and we can do slightly better.

# Approach

## Math Logic

We start from the idea that any integer that will be divisible by `k`, that is: `integer % k === 0`, will need to contain `k` a certain amount of times equal to the quotient of the division operation.

This integer is the product of `nums[i]` and `nums[j]`.

If the integer or product is composed by `nums[i]` and `nums[j]` that means that `k` will be found in both of `nums[i]` and `nums[j]` and united together as the whole `k` only when we calculate `nums[i] * nums[j]`.

In other words, `k` is composed from or found in both `nums[i]` and `nums[j]`. When we calculate `nums[i] * nums[j]` the result(product) will contain the entire `k`.

> One more thing to add: it will contain the entire `k` only if the product of `nums[i]` and `nums[j]` is divisible by `k`.

To decompose an integer we calculate its prime factors. For example, let's take the integer `10` and `8`:

The prime factors of `10` are:
`10 = 2 * 5`

The prime factors of `8` are:
`8 = 2 * 2 * 2 = 2^3` 

When we lay out the prime factors like this, we can have a look at both of the numbers and select the greatest common divisor, which in the case of `8` and `10` is `2`. This means that the largest number that divides both `8` and `10` is `2`.

## Code Logic

We will calculate the greatest common divisor of `k` and each number in the `nums` array, like so: 

```typescript
function gcd(a: number, b: number){
    if (b === 0) return a;
    else return gcd(b, a % b);    
}
```

Then we will add each *gcd* to a map where we will incremet the *gcd* value when we find the same *gcd* again.

At the same time we have a smaller loop which grows as our algorithm progresses, which checks if the `currentGcd` multiplied by all the previous ones and divided by `k` equals `0`. If it does, we increment the `pairs` value with the value of how many times we had the same *gcd* previously.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
function countPairs(nums: number[], k: number): number {
    const gcdCount = new Map<number, number>();
    let pairs = 0;

    for(let num of nums) {
        const currentGcd = gcd(num, k);
        for(let [storedGcd, count] of gcdCount){
            if((currentGcd * storedGcd) % k === 0){
                pairs += count;
            }
        }
        gcdCount.set(currentGcd, gcdCount.get(currentGcd) + 1 || 1);
    }
    return pairs;
};

function gcd(a: number, b: number){
    if (b === 0) return a;
    else return gcd(b, a % b);    
}
```