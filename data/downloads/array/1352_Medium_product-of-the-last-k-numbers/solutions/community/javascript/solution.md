# O(1) Human Readable JavaScript (original prototype plus ES6 class Syntax)

**Author:** ChaoWan_2021
**Votes:** 7
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/522355/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/522355/)

---

This is the original answer with memoization;
```
var ProductOfNumbers = function() {
    this.numsArr = [1];
};

ProductOfNumbers.prototype.add = function(num) {
        if(!num) {
            this.numsArr = [1];
        } else {
            this.numsArr.unshift(num * (this.numsArr[0] || 1));
        }
};


ProductOfNumbers.prototype.getProduct = function(k) {
    return (this.numsArr[0] / this.numsArr[k]) || 0;
};
```

Here is ES6 class syntax if interview needed(sadly, leetcode doesn't support):

```
class ProductOfNumbers {
    constructor(){
        this.numsArr = [1];
    }
    add(num) {
        if(!num) {
            this.numsArr = [1];
        } else {
            this.numsArr.unshift(num * (this.numsArr[0] || 1));
        }
    }
    getProduct(k) {
        return (this.numsArr[0] / this.numsArr[k]) || 0;
    }
}
```
