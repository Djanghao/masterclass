# Simple Go solution

**Author:** dsantos747
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/4758204/](https://leetcode.com/problems/closest-divisors/solutions/4758204/)

---

Read comments for explanation of the solution.
Maybe other solutions have their own strengths, but in mine I wrote b/j at one point so you choose which you think is best.

# Code
```
func closestDivisors(num int) []int {
    // Predefine variables for clarity
    // Note, we take the sqrt of a then floor it, to find the
    // next smallest integer smaller than or equal to the sqrt.
    a,b := num + 1, num + 2
    aS := int(math.Floor(math.Sqrt(float64(a))))
    bS := int(math.Floor(math.Sqrt(float64(b))))
    aRes, bRes := []int{1,a}, []int{1,b}

    // For a and it's floored sqrt, check if modulo is 0.
    // If not, reduce divisor i by one and try again.
    // If modulo returns 0, that's a successful divisor, so
    //      we update aRes and break out. 
    for i := bS; i > 1; i-- {
        if i <= aS && a % i == 0 {
            aRes = []int{i, a/i}
            break
        }
    }

    // Repeat above process for b
    for j := bS; j > 1; j-- {
        if b % j == 0 {
            bRes = []int{j, b/j}
            break
        }
    }

    // Compare which of aRes or bRes has the smaller absolute difference.
    // Remember, aRes[1] > ares[0] always (and same for bRes).
    if aRes[1] - aRes[0] < bRes[1] - bRes[0] {
        return aRes
    }
    return bRes
}
```