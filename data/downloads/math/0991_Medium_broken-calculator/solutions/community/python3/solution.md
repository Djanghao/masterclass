# [Python] O(logn) solution starting from startValue with detailed explanation

**Author:** 8by8
**Votes:** 5
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1697185/](https://leetcode.com/problems/broken-calculator/solutions/1697185/)

---

## 991 Broken Calculator

[https://leetcode.com/problems/broken-calculator/](https://leetcode.com/problems/broken-calculator/)

Instead of doing the smart thing and thinking about the problem from the target backwards as explained [here](https://leetcode.com/problems/broken-calculator/discuss/1076042/Python-C%2B%2B-Explanation-with-illustration-why-we-should-work-with-Y-not-X), I chose to tackle the problem from the startValue upwards.

The general idea is double the startValue until it is greater than target, and it's important to note that the optimal solution **always** requires this many doublings.

Now our task is to figure out when to decrease the value so that it minimizes our number of steps.

**Case 1:**

![case1](https://i.imgur.com/t1ZwSZF.png)

In this example, the difference from the number we get after only doubling and the target is 12. We can see that using the decrease operation at differnce times affects the results differently. The effect of reduction on the final number doubles after every doubling. Decreasing 14 to 13 decreases the final result by 8, since there are 3 doublings after the decrease. This corresponds to 2^3, and so the effects of decreases can be calculated by 2 to the power of the number of doublings remaining. Similarly, there are 2 doublings after the deduction from 26 to 25, and that decreases the final result by 2^2.

Therefore, any difference between the number we get from doubling to the target can be broken down into powers of 2, and those powers of 2 then tells us when and how many times to decrease. In this case, the difference of 12 (112-100) can be broken down into 2^3 + 2^2, telling us that we should decrease once with 3 doublings left and once with 2 doublings left.

The final result would be the number of doubles + the number of decreases.

**Case 2:**

![case2](https://i.imgur.com/laZO199.png)

In this case we have to decrease before we double. The difference of 12 (28-16) can be made up of 2^3 + 2^2. However we can't decrease 3 doublings before the end, since we don't double 3 times. In this case, the earlier we can decrease only affects the final result by 4 (2^2) every time. Therefore the difference can still be broken down into powers of 2, but any powers greater than 2^(max doubles) must be broken down into powers no greater than 2^(max doubles). Here we break the difference down into 3*2^2, meaning we decrease 3 times at 2 doublings before the end.

**Case 3:**

This is the case where the start is greater than the target. In this case the result is simply target - start.

e.g. 
start = 20, target = 5
result = 15 (20-5)

**Implementation:**

Breaking down the difference into powers of 2 is simply converting the int to binary.

```python
def brokenCalc(self, startValue: int, target: int) -> int:
```
Case 3
```python
    if startValue>target:
        return startValue - target
```

Calculate doublings and difference
x is the value we get if we only apply doubling

```python
    doublings = 0
    x = startValue
    while x < target:
        x *= 2
        doublings += 1
    diff = bin(x-target)[2:] #saves difference as binary representation
```

Final result res is the number of doublings and the number of decreases
```python
    res = doublings
    #Adds decreases that happen **before** doubling
    if diff[:-doublings]:
        res += int(diff[:-doublings],2)
    #Adds decreases that happen **after** first doubling
    if diff[-doublings:]:
        res += sum(int(i) for i in diff[-doublings:])
    return res
```

Time: O(logn)

Space: O(1)
