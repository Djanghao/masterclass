# Same Fastest Approach in Typescript

**Author:** Kchoen
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/4389606/](https://leetcode.com/problems/closest-divisors/solutions/4389606/)

---


# Approach
Same as others' code but in Typescript

@```if pair [p1,p2] which p1<=p2 && (p1*p2==n+2 || p1*p2==n+1)```
Select `i` as the largest possible `p1`, which will be $$\\sqrt{n+2}$$
Check `i` as $$\\sqrt{n+2}$$ ~ $$1$$ ----> $$[\\sqrt{n+2} ,\\sqrt{n+2}]$$ ~ $$[1,\\ n+2]$$


If the pair can be both integers which will be the solution.


# Complexity
- Time complexity:
$$O(\\sqrt{n}\\ )$$

# Code
```
function closestDivisors(num: number): number[] {
  for (let i: number = Math.floor((num + 2) ** 0.5); i > 0; i--) {
    if ((num + 1) % i == 0) return [i, (num + 1) / i];
    if ((num + 2) % i == 0) return [i, (num + 2) / i];
  }
}

```