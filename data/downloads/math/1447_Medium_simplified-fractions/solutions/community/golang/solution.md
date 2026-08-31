# [Java/Golang] 95%/100% Simple GCD Solution Detailed Explanation

**Author:** jim_jingbo
**Votes:** 1
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/669028/](https://leetcode.com/problems/simplified-fractions/solutions/669028/)

---

Java
```
/**
 * Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator
 * is less-than-or-equal-to n. The fractions can be in any order.
 *
 * Example 1:
 * Input: n = 2
 * Output: ["1/2"]
 * Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
 *
 * Example 2:
 * Input: n = 3
 * Output: ["1/2","1/3","2/3"]
 *
 * Example 3:
 * Input: n = 4
 * Output: ["1/2","1/3","1/4","2/3","3/4"]
 * Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
 *
 * Example 4:
 * Input: n = 1
 * Output: []
 *
 * Constraints:
 * 1 <= n <= 100
 */

class Solution {
    public List<String> simplifiedFractions(int n) {
        List<String> res = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                if (!existCommonFactor(i, j) || j == 1) {
                    res.add(j + "/" + i);
                }
            }
        }
        return res;
    }

    private boolean existCommonFactor(int a, int b) {
        while (b > 1) {
            int tempb = a % b;
            a = b;
            b = tempb;
        }
        return b == 0;
    }
}

/**
 * Time: O(n^2 log(max(a, b)))
 * -> iteration over possible denominator and nunominators is O(n^2), in existCommonFactor,
 * the worse case is either a or b is approximately halved after each division
 *
 * Space: O(n^2) -> res list contains possibility n denominators and n-1 nunominators each
 *
 * Intuition:
 * 1. start simple, have to iterate over the denominators and the nunominators to check
 * 2. checking if it is simplified means checking if the two numbers are co-primes. A method called GCD is built for
 * this, which is similar to what I have here
 */
```

Go
```
func simplifiedFractions(n int) []string {
    var res []string
    for i := 2; i <= n; i++ {
        for j := 1; j < i; j++ {
            if (isCoprime(i,j)) {
                res = append(res, strconv.Itoa(j) + "/" + strconv.Itoa(i))
            }
        }
    }
    return res
}

func isCoprime(a, b int) bool {
    if (a == 1 || b == 1) {
        return true
    }

    for b > 1 {
        tempb := a % b
        a = b
        b = tempb
    }

    return b == 1
}
```