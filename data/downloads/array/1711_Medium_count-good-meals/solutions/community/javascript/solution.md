# Javascript | Simple Map Solution w/ Explanation | beats 100% / 70%

**Author:** sgallivan
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/1003645/](https://leetcode.com/problems/count-good-meals/solutions/1003645/)

---

***Idea:***

The straightforward, brute-force approach would be to check each number against each other number at a time complexity of **O(n^2)**. With a range of **0 <= D[i] <= 2e20**, that means the range of pair sums is **0 <= D[i] + D[j] <= 2e21**, which also means that there are only 22 possible target sums **(2e0 - 2e21)**. So rather than checking if each pair sums to a power of 2, we can more efficiently check each number to see if there are any matching pair numbers for the 22 target sums at a time complexity of **O(n)**.

In order to do this, we'll first need to convert the data to be value-based, rather than index-based, and with such a large range of values, that suggests a **Map()**.

The best result for the code below is **120ms / 53.3MB**.

` `
***Implementation:***

The first step is to pass **D** into a standard **frequency map**. After that, we can process each **[key, value]** pair, and iterate through each of the power sums looking for a match. To do this more efficiently, we can make use of **bitwise shifts**. Shifting downward from **i =1 << 21** (**2^21**) will also simplify the final eding condition to just **i** (**0**).

When we iterate through all **k** values, we'll duplicate pairs, since each pair **k1 + k2 = i** will find a match when checking both **k1** and **k2**. To avoid this, we can add a secondary ending condition **i >= 2 * k** which will limit the checks to only allow matches that are larger than **k**.

First we'll want to see if the checked number is a match to itself (**i === 2 * k**), and if so we'll use the "n choose 2" formula (**v * (v - 1) / 2**) to find the amount of pairs we should add to **ans**. Otherwise, when we find a match, we'll want to add the product of those two numbers' frequencies (**v * m.get(i - k)**) to our **ans**.

And after all the iterations are done, we can return **ans**.

` `
***Code:***
```
var countPairs = function(D) {
    let m = new Map(), ans = 0
    for (let n of D) m.set(n, (m.get(n) || 0) + 1)           // Push D into a standard frequency map
    for (let [k,v] of m)                                     // For each [key, value] pair
        for (let i = 1 << 21; i >= 2 * k && i; i >>= 1)      // Iterate through power sums using bitwise shifts
            if (i === 2 * k) ans += v * (v - 1) / 2          // If  k is its own matching number, add pairs to ans
            else if (m.has(i - k)) ans += m.get(i - k) * v   // Otherwise, add product with matching number freq.
    return ans % 1000000007
};
```