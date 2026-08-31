# Python | Prefix Product | Simple Solution With Explanation

**Author:** akash3anup
**Votes:** 23
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/1568231/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/1568231/)

---

## Logic:
1. Initialize an array with value 1 and is used to store the prefix product.
2. Whenever a new number is added, append the **prefix** with **(prefix[-1] x num)**
3. Product of last k numbers would be **(prefix[-1] // prefix[-1-k])**

The above algorithm will work fine iff **0** is never encountered.
To accommodate **0** also, we need to slightly tweak the algorithm.
Let us say that whenever **0** is encountered, **prefix** reinitialize with **[1]** and again prefix product is calculated for next numbers.
And now when the prod of last k elements is needed, we can check whether the length of prefix is greater than or equal to k. 
 - If it is then the above formula will work to get the product.
 - Else, simply return **0** because there must be atleast one 0 in last k elements and that is why the length of prefix is less than k.


```
class ProductOfNumbers:

    def __init__(self):
        self.prefix = [1]

    def add(self, num: int) -> None:
        if num == 0:
            self.prefix = [1]
        else:
            self.prefix.append(self.prefix[-1] * num)

    def getProduct(self, k: int) -> int:
        if k >= len(self.prefix):
            return 0

        return self.prefix[-1] // self.prefix[-1 - k]


# Your ProductOfNumbers object will be instantiated and called as such:
# obj = ProductOfNumbers()
# obj.add(num)
# param_2 = obj.getProduct(k)
# nums = [1,2,3,4,5]
# prod = [1,1,2,6,24,120]
# last 2
```

***If you liked the above solution then please upvote!***