# COMMENTED Go Solution w/ Binary Search (100% Runtime)

**Author:** vladiq
**Votes:** 11
**Link:** [https://leetcode.com/problems/sqrtx/solutions/2872277/](https://leetcode.com/problems/sqrtx/solutions/2872277/)

---

```
func mySqrt(x int) int {
    /*
    Define the search space:
        Min answer we can get is 0.
        Max answer is x + 1 in case x = 0 or x = 1.
    */
    left, right := 0, x + 1

    for left < right {
        mid := left + (right - left) / 2

        /*
        If we overshoot, move the right pointer to the left.
        Otherwise, move the left pointer to the right.
        */
        if mid * mid > x {
            right = mid
        } else {
            left = mid + 1
        }
    }

    /*
    At the end of the loop, the left pointer will be placed at ceil(n) such that n^2 = x.

    For example, x = 8 (sqrt is 2.82842...) and the left pointer will be at 3. 
    Return left - 1 = 3 - 1 = 2

    So we need to return (left - 1) as we are asked to round the answer down to the neares integer.
    */
    return left - 1
}

```