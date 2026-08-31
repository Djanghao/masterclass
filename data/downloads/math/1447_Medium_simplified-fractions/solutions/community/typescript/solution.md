# Without Set or GCD

**Author:** knotri
**Votes:** 1
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/5223009/](https://leetcode.com/problems/simplified-fractions/solutions/5223009/)

---

# Approach
Iterate for every denominator (start with 2)
For every denominator calculate factorization
For every denominator iterate every numerator
Check that current denominator cannot be divided by any factorization

# Complexity
- Time complexity: $$O(N^2 * sqrt(N))$$
```
We iterate `den`  from 2 -> N 
 - for each `den`  we check `sqrt(den)` factor.
 - for each `den`  we iterate `num` 1 -> `den`
 - for each `num` we check every factor 
```

<!-- Add your time complexity here, e.g. $$O(N*2.5)$$ -->

- Space complexity: besides results $$O(sqrt(n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function simplifiedFractions(n: number): string[] {
    const results = [];
    for(let den = 2; den <= n; den++) {
        let factor = []
        for(let i = 2; i*i <= den; i++) {
            if ( Number.isInteger(den / i)) {
                factor.push(i)
                factor.push(den / i)
            }
        }
        results.push(`1/${den}`)
        for(let t = 2; t < den; t++) {
            if (factor.every(f => !Number.isInteger(t/f))) {
                results.push(`${t}/${den}`)
            }
        }
    }
    return results
};
```