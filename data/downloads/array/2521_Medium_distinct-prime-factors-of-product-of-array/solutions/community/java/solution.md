# [Java] | 🔥🔥 8ms | Optimized

**Author:** byegates
**Votes:** 8
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2994472/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2994472/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Find all primes within range (2 to max in array)
- to calculate product of all numbers will overflow, so we have to check all prime factors each number one by one
- Optimization, to get all prime factors for each number only once 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: (m+n)*sqrt(m)
    - get all primes: m*sqrt(m), where m is max of array (int this case, 1000)
    - Get all Prime Factors: n*sqrt(m), n is the length of array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java
class Solution {
    public int distinctPrimeFactors(int[] a) {
        int max = 0;
        for (int x : a) if (x > max) max = x; // find max to get all primes for all values

        // get all primes <= max
        List<Integer> primes = allPrimes(max);

        boolean[] used = new boolean[max+1]; // mark Prime Factors used
        boolean[] visited = new boolean[max+1]; // do not calc same number in array twice
        for (int v : a)
            if (!visited[v]) {
                allPrimeFactors(v, primes, used); // check result for each of them
                visited[v] = true;
            }

        int res = 0;
        for (int x = 2; x <= max; x++) if (used[x]) res++; // count all results

        return res;
    }

    private void allPrimeFactors(int v, List<Integer> primes, boolean[] used) {
        for (int p : primes) {
            if (p > v) break;
            if (v % p == 0) {
                used[p] = true;
                while (v % p == 0) v /= p;
            }

        }
    }

    public List<Integer> allPrimes(int n) {
        boolean[] notP = _allPrimes(n);
        List<Integer> res = new ArrayList<>();
        for (int x = 2; x <= n; x++) if (!notP[x]) res.add(x);
        return res;
    }

    private boolean[] _allPrimes(int n) {
        boolean[] notP = new boolean[n+1];
        for (int x = 4; x <= n; x++) for (int y = 2; y*y <= x; y++)
            if (!notP[y] && x % y == 0) {
                notP[x] = true;
                break;
            }

        return notP;
    }
}
```