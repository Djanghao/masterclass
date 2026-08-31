# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 11
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/500712/](https://leetcode.com/problems/permutation-sequence/solutions/500712/)

---

### The idea
1. Some facts about permutation:
	* For `n`, it has `n!` permutations
2. Use `k` to find which permutation set it's in, and keep deciding inner permutation sets.

```
n = 4, k = 9
```

| Current K: 9 |             |                   |        |
|--------------|-------------|-------------------|--------|
|  Lead Number | Permutation | # of Permutations |        |
| 1            |   [2,3,4]   |       3! = 6      |        |
| 2            |   [1,3,4]   |       3! = 6      | <----- |
| 3            |   [1,2,4]   |       3! = 6      |        |
| 4            |   [1,2,3]   |       3! = 6      |        |

| Current K: 3 |      |                   |        |
|--------------|-------------|-------------------|--------|
|  Lead Number | Permutation | # of Permutations |        |
| 1            |    [3,4]    |       2! = 2      |        |
| 3            |    [1,4]    |       2! = 2      | <----- |
| 4            |    [1,2]    |       2! = 2      |        |

| Current K: 1 |             |                   |        |
|--------------|-------------|-------------------|--------|
|  Lead Number | Permutation | # of Permutations |        |
| 1            |     [4]     |       1! = 1      | <----- |
| 4            |     [1]     |       1! = 1      |        |

| Current K: 0 |             |                   |        |
|--------------|-------------|-------------------|--------|
|  Lead Number | Permutation | # of Permutations |        |
| 4            |      []     |                   | <----- |

``` javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i=1;i<=n;i++) factorial[i]= i * factorial[i-1];

    let nums = Array.from({length: n}, (v, i) => i+1);
    let res = "";
    for (let i=n;i>0;i--) {
        index = Math.ceil(k / factorial[i - 1]); // decide to use which permutation set
        res+=nums[index - 1];
        nums.splice(index - 1, 1);
        k -= (factorial[i-1] * (index - 1));
    }
    return res;
};
```