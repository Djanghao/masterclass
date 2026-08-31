# Easy Ts/Js crunch | beats 94% 🚀

**Author:** adiathasan
**Votes:** 3
**Link:** [https://leetcode.com/problems/array-prototype-last/solutions/3518713/](https://leetcode.com/problems/array-prototype-last/solutions/3518713/)

---

# Code
```ts
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    if(!this.length) return -1

    return this[this.length - 1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
```