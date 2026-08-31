# Fastest and simplest solution >100% perfomance, > 100% memory

**Author:** yxasika
**Votes:** 2
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5660640/](https://leetcode.com/problems/2-keys-keyboard/solutions/5660640/)

---

# Intuition
Given any numerb $$n$$ we need to find its lowest divisor $$n_d$$ and calculate the necessary amount of instruction $$res = minSteps(n_d)$$ from it to our result. Per each result we need to define the $$minSteps$$ until our provided parameter is equal to 1. Using the lowest divisor will minimize our result.

# Approach
For this approach, i created a recursive function. This makes the solution quite readable and we can save bounded `for-loop`s. Per each call, we need to find the highest divisor starting from $$num/2$$ with $$2$$ being the lowest possible integer divisor. If we have a hit, we need to add the multiplier to the `minStep` value as we basically do consecutive copy-actions.


# Code
```typescript []
function minSteps(num: number): number {
    if (num === 1) return 0;
    for (let j = num >> 1; j > 0; --j) {
        if (num % j) continue;
        return (num / j) + minSteps(j);
    }
};

```
```Go []
func minSteps(n int) int {
	if n == 1 {
		return 0;
	}
	for i := n >> 1; i > 0; i-- {
		if (n % i) == 0 {
			return n / i + minSteps(i)
		}
	}
	return -1
}

```