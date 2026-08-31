# Javascript Solution || Straightforward || Super Understandable

**Author:** a-fr0stbite
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2171386/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2171386/)

---

**Loop from 1 to 10 and check the last numbers and if `k*i` is `<= num` or `> num`.**
```
var minimumNumbers = function(num, k) {
    if (num === 0) return 0;
    for (let i = 1; i <= 10; i++) {
        if (k*i % 10 === num % 10 && k*i <= num) return i;
        if (k*i > num) return -1
    } return -1;
};
```