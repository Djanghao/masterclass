# A short and sweet Python solution with a not so short and not so sweet explanation

**Author:** weiluntong
**Votes:** 26
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/573666/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/573666/)

---

```python
from math import inf as oo


class Solution:
    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
        total = sum(arr)
        kadanes = self.maxSubArraySum(arr)
        if (k < 2): return kadanes%(10**9+7)
        if (total > 0): return (kadanes + (k-1)*total)%(10**9+7)
        stitchedKadanes = self.maxSubArraySum(arr*2)
        return stitchedKadanes%(10**9+7)
    
    
    def maxSubArraySum(self, a):
        size = len(a)
        max_so_far = -oo
        max_ending_here = 0
        
        for i in a:
            max_ending_here += i
            if max_ending_here < 0: max_ending_here=0
            max_so_far = max(max_so_far, max_ending_here)

        return max_so_far
```

Ok here we go, the first thing to note is Kadane's Algorithm. I literally yoinked it from ***.org. It's a pretty easy to memorize algorithm that is useful here because it can find a maximum sum of a contiguous subarray. That's the entire point of this problem. Now, if we didn't have memory contraints, we could have done this: `return max(0, self.maxSubArraySum(arr*k)`, which would copy the array k times, and send it over to Kadane's algorithm to find the largest subarray sum in `n*k` time. However `n <= 10**5` and `k <= 10**5`, so `n*k == 10**10` number of elements are way too many elements to store. Even if these were simply ints you would need at least 38GB of *free* RAM to store that many elements. The second option is to just modify kadane's with a little bit of modular arithmetic:
```python
def kConcatenationMaxSum(self, a: List[int], k: int) -> int:
    size = len(a)
    max_so_far = -oo
    max_ending_here = 0

    for i in range(size*k): 
        max_ending_here += a[i%size]
        if max_ending_here < 0: max_ending_here=0
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
```

But now we get to discuss runtime complexity. Again, this algorithm runs in `n*k` time, so that can be as long as `10**10`. If you want, try running this on your own:

```python
from time import time as t
from math import inf as oo


def kConcatenationMaxSum(a, k):
    size = len(a)
    max_so_far = -oo
    max_ending_here = 0

    for i in range(size*k): 
        max_ending_here += a[i%size]
        if max_ending_here < 0: max_ending_here=0
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far


l = list(range(10**5))
for i in range(6):
    num = 10**i
    start = t()
    kConcatenationMaxSum(l, num)
    print(t()-start)
```

Given a list of `10**5` elements, it'll run `kConcatenationMaxSum` it'll do a for looping testing k = 10\\*\\*0, 10\\*\\*1, 10\\*\\*2, 10\\*\\*3, 10\\*\\*4, and 10\\*\\*5, and print the time it took to run, if you're patient enough to wait that is. Regardless though, I don't think LeetCode will give you enough time and we can do better anyway.

So let's start with the case where `k=1`
When k = 1, we don't have to do any copying, so we know that the sum Kadane's returns will be our maximum sum.

Let's move on to all the other cases where `k >= 2`.

We have two more cases, first: `total > 0`
`total` in this case is the sum of the entire input array. For this case, where `total > 0`, let's look at this example:
```python
arr = [-1,-2,8,12,3,9,-2,-1]
k = 2
```
The sum of `arr` is 26. So `total = 26 > 0`.
Let's find our kadane's array: `kadanesArr = [8,12,3,9]`. Note that `kadanesSum = sum(kadanesArr) = 32
Now let's extend copy our array so that it matches `k`:
```python
arrK2 = [-1,-2,8,12,3,9,-2,-1,-1,-2,8,12,3,9,-2,-1]
```
Now let's find our kadane's array here: `[8,12,3,9,-2,-1,-1,-2,8,12,3,9]`
Let's break that into two arrays: `subArr1 = [8,12,3,9]` and `subArr2 = [-2,-1,-1,-2,8,12,3,9]`
Finally, let's rearrange `subArr2`: `[-1,-2,8,12,3,9,-2,-1]` Notice that now `arr == subArr2`! Which means `sum(subArr2) == sum(arr)`. Also, notice that `subArr1 == kadanesArr`.
So if we put all that together, that means *every element between our first kadane's array and our last kadane's array on the kth array copy will increase our sum*. So in this case, every element from our **first** 8 to our **last** 9 is useful, let's pretend k is 3 instead of 2 and extend our array one last time to drive home the point:
```python
arrK3 = [-1,-2,8,12,3,9,-2,-1,-1,-2,8,12,3,9,-2,-1,-1,-2,8,12,3,9,-2,-1]
```
If we use our logic we've uncovered, then every element from our first 8 at position 2, to our last 9 at position 22 is useful, and the sum of this subarray from position 2 through 22 then is 84. Let's break out our subarray from position 8 to position 22 into 3 sub arrays:
```python
subarrA = [8,12,3,9]
subarrB = [-2,-1,-1,-2,8,12,3,9]
subarrC = [-2,-1,-1,-2,8,12,3,9]
```
Again, notice `sum(subarrA) == kadanesSum`, and `sum(subarrB) == sum(subarrC) == sum(arr) == total`. so in this case then, `sum(subarrA) + sum(subarrB) + sum(subarrC) == kadanesSum + total + total == kadanesSum + 2*total == kadanesSum + (k-1)*total == 84`. Perfect!

Finally, the last case: `total <= 0`
There's an observation to be made here, Let's look at an example which I will purposefully obfuscate numbers:
```python
arrTotNotPositive = [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]
newK = 3
```
Let's say our kadane's array is: `greekKadanesArr = [\u03B4,\u03B5]`
and our `greekKadanesSum = \u03A3`
Let's say that `sum(arrTotNotPositive) == greekTotal == 0`
Then we know that if we tried: `[\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]` we'd simply get `\u03A3`, because `greekKadanesSum + greekTotal == \u03A3 + 0 == \u03A3`. So what if we tried only a piece of the second array instead? `[\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3,\u03B4]` Notice here that it's still just `arrTotNotPositive + [\u03B4]`, so the sum is `\u03A3 + \u03B4`.  However, I can guarantee that this is less than `[\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]`, why? Because `sum([\u03B4,\u03B5])` is guaranteed to be the largest subarray sum by kadanes, so therefore, `\u03B4 + \u03B5 > \u03B4` or else kadanes would not have included `\u03B5`. Therefore, `\u03A3 + \u03B4 + \u03B5 > \u03A3 + \u03B4`. So moving on, let's drop one more, `[\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3]`, this is just `arrTotNotPositive` so therefore this total is just `greekTotal == 0`. Again, let's drop one more, `[\u03B4,\u03B5] + [\u03B1,\u03B2]`. Finally, we're somewhere interesting. Because this is `greekKadanesSum + sum([\u03B1,\u03B2])`. We don't know if `sum([\u03B1,\u03B2])` is positive or not. But we can find out real easily, by making a copy of k, and sending through kadane's, by calling `stitchedKadanes = maxSubArraySum([\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5])`. If `stitchedKadanes != kadanes`, it obviously means that either `greekKadanesSum + sum([\u03B1,\u03B2]) > greekKadanesSum` or `greekKadanesSum + \u03B1 > greekKadanesSum`, since we've covered all the other cases. Let's just choose one to work with for this example, `stitchedKadanes = greekKadanesSum + sum([\u03B1,\u03B2])`. Here, let's remember that `newK = 3`, however let's remember that `greekTotal == 0` as well, so let's look at our `arrTotNotPositive` after 3 copies:
```python
arrTotNotPositiveK3 = [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]
```
So if we ran Kadane's on `arrTotNotPositiveK3`, we'd get this:
```python
greekK3 = [\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2]
```
Let's break `greekK3` into subarrays again. 
```python
subGreekA = [\u03B4,\u03B5] => \u03A3
subGreekB = [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5] => 0
subGreekC = [\u03B1,\u03B2] => sum([\u03B1,\u03B2])
```
Notice the sum total, it's `\u03A3 + 0 + sum([\u03B1,\u03B2]) == \u03A3 + sum([\u03B1,\u03B2]) == stitchedKadanes`. Therefore, no matter what `newK` is, for how many times we copy `arrTotNotPositive`, it will always just be `stitchedKadanes + 0*(newK-1)`.
Let's keep using this example:
```python
arrTotNotPositive = [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]
newK = 3
```
and these stay the same:
kadane's array is: `greekKadanesArr = [\u03B4,\u03B5]`
and `greekKadanesSum = \u03A3`
but now,
Let's say that `sum(arrTotNotPositive) == greekNegTotal < 0`
So let's first start by trying to add one whole copy to our greekKadanesArr again: `[\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]` Then we know this is `\u03A3 + greekNegTotal < \u03A3` because `greekNegTotal < 0`. Let's try dropping one again resulting in : `sum([\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3,\u03B4]) == sum([\u03B4,\u03B5,\u03B1,\u03B2,\u03B3] + [\u03B4]) == sum([\u03B1,\u03B2,\u03B3,\u03B4,\u03B5] + [\u03B4]) == greekNegTotal + \u03B4`. Once again, `greekNegTotal + \u03B4 < greekNegTotal + \u03B4 + \u03B5`, because we know that `\u03B4 < \u03B4 + \u03B5`. Drop one more, `sum([\u03B4,\u03B5] + [\u03B1,\u03B2,\u03B3])` and we just get `greekNegTotal` which is obviously less than `\u03A3` because Kadane's only returns subarray sums >= 0 (at least the way this one is written). One more time, `sum([\u03B4,\u03B5] + [\u03B1,\u03B2])`, and notice that we can determine if this is larger than `\u03A3` with `stitchedKadanes = maxSubArraySum([\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5])`. We'll pretend again that this returned `[\u03B4,\u03B5,\u03B1,\u03B2]`. Now let's look at `newK = 3` again. Here's a reminder of `arrTotNotPositiveK3`
```python
arrTotNotPositiveK3 = [\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5,\u03B1,\u03B2,\u03B3,\u03B4,\u03B5]
```
Let's break down this array directly:
```python
garbage = [\u03B1,\u03B2,\u03B3]
subK3A = [\u03B4,\u03B5,\u03B1,\u03B2] => stitchedKadanes
subK3B = [\u03B3,\u03B4,\u03B5,\u03B1,\u03B2] => greekNegTotal
subK3C = [\u03B3,\u03B4,\u03B5] => The rest of the array
```
We're ignoring `garbage` because its part of our very first copy of our `arrTotNotPositive`, since we performed Kadane's on the very first copy, we know that adding any more elements from `garbage` to kadane's is only going to make lower the sum of our normal kadane's. Following is `subK3A`, which is just the subarray that `stitchedKadanes` returned, so we know this is the subarray that creates the maximum subarray. Next, we have `subK3B`, Notice that it's just a repeat of our entire array again, so it's sum is `greekNegTotal`, and since that is less than zero, we don't want to add it to our `stitchedKadanes` sum because it's just going to drop the sum of our stitched kadane's. Since we don't add it, we can't reach `subK3C` because we would no longer be contiguous. Meaning any copy of our input array past this point isn't going to be touched either. Therefore, if `total <= 0`, the observation to be made is that *you will never need more than two copies of the input array*. With that knowledge, you can apply Kadane's to the array because it's bounded by `2n`.

Let me know if this helps you. I'm trying to get better at my explanations, so feel free to leave a comment with your constructive criticism.