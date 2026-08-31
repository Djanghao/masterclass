# 2 different approaches with explanations and examples

**Author:** dimasiandro
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5858141/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5858141/)

---

# Approach 1. Recursion
Not all of the operations are important for k-th character. Any operation which is applied to the string that already has length of k will not change the result, so we will apply only first $$n$$ operations.

Let's think what character was used on previous step to generate k-th one. After n-th operation, length of the string is $$2 ^ n$$. And on previous step it was $$2 ^ {n - 1}$$. Kth character lays on the second half of the string, because it wasn't present in $$2 ^ {n - 1}$$ length string. 
K-th character took its value from $$k - 2^{n - 1} $$ character, and shifted char code by value of n-th operation. Given that, we can generate a recursion: 
```
rec(k) = rec(k - 2 ^ (n - 1)) + operation[n - 1]
rec(1) = 0 // 1st character is always 'a' (shift = 0)
```
# Code
```typescript []
function kthCharacter(k: number, operations: number[]): string {
    function findShift(k: number){
        if(k == 1) return 0;
        let n = Math.ceil(Math.log2(k));
        return findShift(k - 2 ** (n - 1)) + operations[n - 1];
    }
    return String.fromCharCode('a'.charCodeAt(0) + findShift(k) % 26) ;
};
```
# Approach 2. Bitmask
To reach k-th character, we need to extend initial string 'a' with k - 1 characters. After i-th operation we add $$2 ^ i$$ characters (which can be represented by i-th bit), and we shift them by value of i-th operation.
```typescript []
function kthCharacter(k: number, operations: number[]): string {
    const bitMask = [...(k - 1).toString(2)].map(Number).reverse();
    const shift = bitMask.reduce((shift, bit, i) => shift + bit * operations[i], 0);
    return String.fromCharCode('a'.charCodeAt(0) + shift % 26) ;
};
```