# Go 22ms Solution

**Author:** MJMTG
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3645639/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3645639/)

---

# Approach
Recursive function (compute): This function divides the given array into two sub-arrays (namely 'smaller' and 'larger') based on the first element, simulating the creation of a BST. If there is only one or no element left, it simply returns 1 (base case of recursion). It then recursively calculates the number of ways for both the 'smaller' and 'larger' sub-arrays and multiplies them together. Lastly, it multiplies the result by the number of ways to choose the elements for the sub-arrays (calculated by the choose function), which gives the total number of ways to reorder the given array.

Choosing function (choose): This function calculates the number of ways to choose k elements from n elements (i.e., binomial coefficient). It does this using the [multiplicative inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) method, which is a common way to handle large factorials while avoiding overflow. Here, the multiplicative inverse is calculated using the ModInverse function from the math/big package in Go.

# Complexity
- Time complexity:
$$O(n^2)$$ Each call to compute triggers $$O(n)$$ calls to itself.and this could happen up to n times 

- Space complexity:
$$O(n)$$ as there would be $$n$$ recursive calls.

# Code
```
const mod = 1e9 + 7
var cache = make([][]int, 1001)

func init() {
    for i := range cache {
        cache[i] = make([]int, 1001)
    }
}

func numOfWays(nums []int) int {
    return compute(nums) - 1
}

func compute(nums []int) int {
    if len(nums) <= 1 {
        return 1
    }

    smaller, larger := splitNums(nums)

    n := len(nums) - 1
    k := len(larger)
    
    kn := choose(n, k)
    small := compute(smaller) % mod
    large := compute(larger) % mod

    res := ((small * large % mod) * kn) % mod
    return res
}

func splitNums(nums []int) (smaller, larger []int) {
    for _, x := range nums[1:] {
        if x > nums[0] {
            larger = append(larger, x)
        }
        if x < nums[0] {
            smaller = append(smaller, x)
        }
    }
    return smaller, larger
}

func choose(n, k int) int {
    if k == 0 || k == n {
        return 1
    }
    if cache[n][k] != 0 {
        return cache[n][k]
    }

    a, b := 1, 1

    for x := n; x > k; x-- {
        a = (a * x) % mod
    }
    for x := n - k; x > 1; x-- {
        b = (b * x) % mod
    }

    inv := big.NewInt(int64(b)).ModInverse(big.NewInt(int64(b)), big.NewInt(int64(mod)))
    modinv := inv.Int64()

    cache[n][k] = (a * int(modinv)) % mod
    return cache[n][k]
}

```