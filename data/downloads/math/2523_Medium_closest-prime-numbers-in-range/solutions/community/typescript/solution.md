# for-loop, 318ms (Beats 100%) 77.22MB(33.33%)

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/4785912/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/4785912/)

---

# Intuition


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function closestPrimes(left: number, right: number): number[] {
    let findPrimes = (s: number, n: number): number[] => {
        let primes: boolean[] = new Array(n + 1).fill(true);
        primes[0] = false;
        primes[1] = false;

        for (let i = 2; i <= Math.sqrt(n); i++) 
            if (primes[i])
                for (let j = i * i; j <= n; j += i) 
                    primes[j] = false;

        const result: number[] = [];
        for (let i = s; i <= n; i++) 
            if (primes[i]) result.push(i);

        return result;
    };

    let primes: number[] = findPrimes(left, right);

    if (primes.length <= 1) return [-1, -1];

    let ans: number[] = [primes[0], primes[1]];

    for (let i: number = 1; i < primes.length; i++)
        if (primes[i] - primes[i - 1] < ans[1] - ans[0])
            ans = [primes[i - 1], primes[i]];

    return ans;
};
```
![Screenshot 2024-02-26 at 11.59.01 PM.png](./images/0.png)
