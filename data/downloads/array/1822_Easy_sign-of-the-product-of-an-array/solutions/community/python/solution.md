# Python multiple solutions: Tracking sign, lazy evaluation, branchless, and one-liners

**Author:** kingjonathan310
**Votes:** 17
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1155733/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1155733/)

---

Using a loop, terminate early if a zero is encountered. Otherwise, invert the sign each time a negative value is encountered. This is the optimal solution in terms of complexity with O(N) ***in the worst case***.
```
    def arraySign(self, nums: List[int]) -> int:
        sign = 1
        for num in nums:
            if num == 0:
				return  0
            elif num < 0:
				sign *= -1
        return sign
```
However, since we are using python, it is sometimes just as fast or faster to compute a list product if done correctly, even though computing the list product has complexity O(N) even if `nums` contains zeros. The best way to do this is to trade lazy evaluation in pure python for the blazing speed of functions pre-compiled in `Standard C`.

We can use `math.prod` to do this
```
    def arraySign(self, nums: List[int]) -> int:
		product = prod(nums)
        return 1 if product > 0 else -1 if product < 0 else 0
```

The walrus assignment operator (`:=`) in `Python 3.8+` allows us to do this in one-line
```
    def arraySign(self, nums: List[int]) -> int:
        return 1 if (product := prod(nums)) > 0 else -1 if product < 0 else 0
```

Another built-in way to compute list products is to use `functools.reduce` with the `mul` operator
```
    def arraySign(self, nums: List[int]) -> int:
        return 1 if (product := reduce(mul, nums)) > 0 else -1 if product < 0 else 0
```

Use can also define your own multiplication operator to use with `reduce` using lambdas
```
    def arraySign(self, nums: List[int]) -> int:
        return 1 if (product := reduce(lambda x, y: x * y, nums)) > 0 else -1 if product < 0 else 0
```

And finally, we can use a `generator comprehension` inside whichever list product method you like.
```
    def arraySign(self, nums: List[int]) -> int:
        return prod(1 if num > 0 else -1 if num < 0 else 0 for num in nums)
```