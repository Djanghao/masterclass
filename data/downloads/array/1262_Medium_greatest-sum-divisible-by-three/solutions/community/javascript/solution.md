# Easy to understand JavaScript solution

**Author:** tzuyi0817
**Votes:** 1
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/3567033/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/3567033/)

---

```
var maxSumDivThree = function(nums) {
    let remainOne = remainTwo = 10 ** 4;
    let sum = 0;

    nums.forEach(num => {
        sum += num;
        if (num % 3 === 1) {
            remainTwo = Math.min(remainTwo, remainOne + num);
            remainOne = Math.min(remainOne, num);
        } else if (num % 3 === 2) {
            remainOne = Math.min(remainOne, remainTwo + num);
            remainTwo = Math.min(remainTwo, num);
        }
    });

    const remainSum = sum % 3;

    if (remainSum === 0) return sum;
    if (remainSum === 1) return sum - remainOne;
    return sum - remainTwo;
};
```