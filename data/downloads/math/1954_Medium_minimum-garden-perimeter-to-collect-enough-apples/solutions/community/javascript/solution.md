# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/4842137/](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/solutions/4842137/)

---

# Code
```
var minimumPerimeter = function (neededApples) {
    let total = 0, x = 0;
    while (total < neededApples) {
        x += 1;
        total += 12 * x ** 2;
    }
    return 8 * x;
};
```