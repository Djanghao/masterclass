# From brute force GCD to factors, counting, and binary search

**Author:** pippin2343
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5888479/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5888479/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The most basic solution below works for most cases, but you can try to memoize or inline your `gcd` function and will still result in TLE.

```
import Algorithms

class Solution {
    func gcdValues(_ nums: [Int], _ queries: [Int]) -> [Int] {
        
        var p: [Int] = []

        // n * (n - 1) / 2 pairs
        for n in nums.combinations(ofCount: 2) {
            // gcd() not provided, copy from swift-numerics
            p.append(gcd(n[0], n[1]))
        }

        p.sort()

        return queries.map {
            p[$0]
        }
    }
}
```

The runtime and space is at least `O(n^2)` so we need to reduce this in order to have a valid solution for large `n`.

# Approach
<!-- Describe your approach to solving the problem. -->

Reference solutions: [Puneet7373](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875685/c-divisors-counting-and-binary-search-o-n-sqrt-maxelement-easy-to-understand), [poiuyt123](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5876586/comments-and-dry-run)

Instead of calculating the `gcd` of each pair, we can calculate the number of elements that have `i` as a factor, up to the maximum of `nums` as the `gcd` of a pair of numbers cannot be more than the maximum of all of `nums`.

In the range of `1 ... squareRoot(nums[i])`, we determine if `i` or `nums[i] / i` divides `nums[i]` and keep the count of number of elements that have those values as factors.

Going from the maximum in `nums` to `0`, we count how many elements have `i` as a factor. The number of pairs is the combination `count[i] C 2` to remove `(j, i)` (per problem description).

However, not all of these pairs may have a `gcd = i` but may have a `gcd = x * i` (multiple of `i`). Subtract out the factors that are multiples of `i` starting at `2 * i`. This is why we iterate down from the maximum to `0`.

For example, if `i = 2` and `nums = [6, 12]`, then `factorCount[2] == 2`, but that is not the correct `gcd` for that pair (`6`). We must remove the number of elements that have a multiple of `2` as a factor, where eventually we will subtract `count[i * 3 = 6] = 2` from the `gcd` count.

At this point, we have already reduced our runtime to somewhere around `O(n * sqrt(m) + m)` where `n = nums.count` and `m = nums.max()`. Per problem constraints, this will be less than `O(n^2)`.

For queries, we compute the prefix sum of 0-based ranks which allows us to perform binary search on the count-space.

Overall runtime is somewhere around: `O(n * sqrt(m) + m + q * log(m))`. Might be missing an `n` somewhere.

# Code

Variable names differ from explanation but applies same logic.

```swift []
class Solution {
    func gcdValues(_ nums: [Int], _ queries: [Int]) -> [Int] {
        
        // d[i] == # of elements that have
        // factor of i
        let m = nums.max()!
        var d = Array(repeating: 0, count: m + 1)

        for i in 0 ..< nums.count {
            let c = nums[i]

            // get all factors of c
            for j in 1 ... Int(Double(c).squareRoot()) {
                // j divides c
                if c % j == 0 {
                    d[j] += 1

                    // c / j divides c
                    // example: c = 12, j = 4, c / j = 3
                    if j != c / j {
                        d[c / j] += 1
                    }
                }
            }
        }

        // gcdCount[i] == # of elements who have gcd of i
        var gcdCount = Array(repeating: 0, count: m + 1)

        for i in stride(from: m, to: 0, by: -1) {

            // # of pairs with factor == i = (c * (c - 1)) / 2
            // (combination)
            let c = d[i]
            gcdCount[i] = (c * (c - 1)) / 2

            // remove pairs who have factors as a multiple of i,
            // so they actually have a gcd > i
            var j = 2 * i

            while j <= m {
                gcdCount[i] -= gcdCount[j]
                j += i
            }
        }

        // build prefix sum for ranks and use
        // binary search for queries
        var preSum = Array(repeating: 0, count: m + 1)
        preSum[0] = gcdCount[0]

        for i in 1 ... m {
            preSum[i] = preSum[i - 1] + gcdCount[i]
        }

        var t: [Int] = []

        for q in queries {
            var l = 1
            var r = m
            var c = 0

            while l <= r {
                let m = l + (r - l) / 2

                if preSum[m] > q {
                    c = m
                    r = m - 1
                } else {
                    l = m + 1
                }
            }

            t.append(c)
        }

        return t
    }
}
```