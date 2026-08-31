# Golang solution faster than 100% with quick explanation

**Author:** nathannaveen
**Votes:** 7
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1159844/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1159844/)

---

[1822. Sign of the Product of an Array](https://leetcode.com/problems/sign-of-the-product-of-an-array/)


The idea of this solution is elementary:

* If the current number in `nums` is negative, then we can flip the sign
* If the current number in `nums` is equal to `0`, we can return `0` because any number multiplied by `0` is `0`. You might think that we can check for `if num == 0` after we have iterated, but that won't work because we only switch the sign and don't multiply by `0`, so we will never know whether there is a `0` in the array.

``` go
func arraySign(nums []int) int {
    sign := 1

    for _, num := range nums {
        if num <= -1 {
            sign = - sign
        } else if num == 0 {
            return 0
        }
    }

    return sign
}
```