# Optimised binary search

**Author:** pioneer10
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5028077/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5028077/)

---

# Intuition
Let's use binary search to find the answer. For that, we would have two pointers $$(l, r)$$ such that count of numbers in the range $$[1,l]$$ and divisible by some of $$coins[i]$$ is strictly less than $$k$$, and the count of numbers in the range $$[1,r]$$ and divisible by some of $$coins[j]$$ is greater than or equal to $$k$$.

We have to be able to determine the count of numbers in the range $$[1,N]$$ which are divisible by some of $$coins[i]$$. Of course, some of these numbers might be divisible by two or more denominations from $$coins$$.

It can be shown that the desired count is sum of counts of numbers divisible by every single $$coins[i]$$, minus sum of counts of numbers divisible by every pair from $$coins$$, plus sum of counts of numbers divisible by every triple from $$coins$$, etc.

A number is divisible by two denominations $$a$$ and $$b$$ if and only if it is divisible by $$lcm(a, b)$$, where $$lcm$$ is least common multiple.

So, for every subset of $$coins$$ we calculate least common multiple of the number in this subset and also determine the sign ("+" for subsets of odd elements, and "-" for subsets of even elements).

# Approach
We would have $$2^{|coins|}$$, and at each step of binary search we would need for every such number to count its multiples in the range $$[1,N]$$. Initially, we can take $$r=k * min(coins)$$.

This looks doable. But how can we improve? Obviously, most likely there would be duplicates among least common multiples, so we can count these numbers (taking into account the sign of course) and then multiply the counts correspondingly.

Let's just estimate how many distinct least common multiples we can have. The array $$coins$$ (giving the constraints) can include the following prime numbers: $$2,3,5,7,11,13,17,19,23$$. The $$7$$ and above can only be in the first power (second power is at least $$49$$ which exceeds the constraints). There might be up to fourth power of $$2$$, and up to second power of $$3$$ and $$5$$. So, $$2^4*3^2*5^2*7*11*13*17*19*23$$ is maximum possible least common multiple. Moreover, for any subset of $$coins$$ its least common multiple is a divisor of that number. The number of divisors of $$2^4*3^2*5^2*7*11*13*17*19*23$$ is equal to $$(4+1)(2+1)(2+1)(1+1)(1+1)(1+1)(1+1)(1+1)(1+1)=2880$$ which is much less than $$2^{15}$$.

# Complexity
- Time complexity: $$O(2^{|coins|}*log(k*min(coins)))$$

- Space complexity: $$O(2^{|coins|})$$

# Code
```
func findKthSmallest(coins []int, k int) int64 {
    sort.Ints(coins)
    switch {
        case coins[0] == 1:
        return int64(k)
        case len(coins) == 1:
        return int64(k) * int64(coins[0])
        case k == 1:
        return int64(coins[0])
    }
    h := make(map[int64]int)
    // we use bitmask to represent the subset
    // so, we iterate subsets except of 0, i.e. empty subset
    for i, n := 1, 1 << len(coins); i < n; i++ {
        j, lcm := 0, int64(1)
        for b, d := range coins {
            if i & (1 << b) != 0 {
                j ^= 1
                lcm = lcm * (int64(d) / gcd(lcm, int64(d)))
            }
        }
        h[lcm] += 2 * j - 1 // +1 if subset consists of odd number of elements, -1 otherwise
    }
    d := []int64{}
    for m, c := range h {
        if c != 0 { // skip those which have the same number with + and - signs
            d = append(d, m)
        }
    }
    l, r := int64(coins[0]), int64(coins[0]) * int64(k)
    for r - l > 1 {
        m := (l + r) / 2
        if cnt(d, h, m) >= int64(k) {
            r = m
        } else {
            l = m
        }
    }
    return r
}

func gcd(a, b int64) int64 {
    if a < b {
        a, b = b, a
    }
    for b != 0 {
        a, b = b, a % b
    }
    return a
}

func cnt(d []int64, h map[int64]int, m int64) int64 {
    res := int64(0)
    for _, a := range d {
        res += (m / a) * int64(h[a])
    }
    return res
}
```