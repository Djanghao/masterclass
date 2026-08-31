# for is faster than forEachIndexed?

**Author:** amolgupta1989
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/6006670/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/6006670/)

---

In the `add` function if I use `list.forEachIndexed` it gets to a. TLE, but this one works.

# Code
```kotlin []
class ProductOfNumbers() {
    val list = mutableListOf<Int>()
    fun add(num: Int) {
        (0..list.size - 1).forEach { i -> list[i] *= num }
        list.add(num)
    }
    fun getProduct(k: Int) = list[list.size - k]
}
```