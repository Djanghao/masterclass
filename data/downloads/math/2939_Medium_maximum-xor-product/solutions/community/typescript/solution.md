# TypeScript O(n) solution

**Author:** NKeil
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-product/solutions/4312327/](https://leetcode.com/problems/maximum-xor-product/solutions/4312327/)

---

# Approach
We can solve this problem using O(n) runtime and O(1) space by interating through all the possible `n` XOR bits from greatest to least, and greedily flipping the ones that increase the final product. This works because each possible change in a more significant bit will always have a greater effect than all lower significant bits combined.

In JavaScript/TypeScript, we need to use BigInts, since bitwise operations will [*cutoff any bits over 32*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR). A shorthand to create a BigInt is to postfix an `n` like in `10n`.

# Code
```
function maximumXorProduct(_a: number, _b: number, _n: number): number {
    let [a, b, n] = [BigInt(_a), BigInt(_b), BigInt(_n)];
    for (let x = 2n ** n >> 1n; x > 0; x >>= 1n) {
        if ((a ^ x) * (b ^ x) > a * b) {
            a ^= x;
            b ^= x;
        }
    }
    return Number((a * b) % (10n ** 9n + 7n));
};
```