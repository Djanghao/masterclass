# O(n) Math Solution with Explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1923633/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1923633/)

---

This solution is mathematical and uses the formula `(n * (n + 1)) / 2`. This formula is used for finding the sum of elements from `1` to `n`.


An explanation of `(n * (n + 1)) / 2` is shown below:

> `s` is a variable I am using that is equal to the sum of elements from `1` to `n`.
> We can first sum up the first `n` numbers: 
> `s = 1 + 2 + 3 + ... + (n - 2) + (n - 1) + (n)`
> Then we can do the same thing again except backward:
> `s = (n) + (n - 1) + (n - 2) + ... + 3 + 2 + 1`
> Now we can put both of them together (Do not forget the `2 * s`):
> `2 * s = (n + 1) + (n - 1 + 2) + (n - 2 + 3) + ... + (3 + n - 2) + (2 + n - 1) + (n - 1)`
> And if we simplify this we get:
> `2 * s = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1) + (n + 1)`
> `2 * s = n * (n + 1)`
> `s = (n * (n + 1)) / 2`

***

Now to find the sum of numbers from `m` to `n` we can do `(n * (n - 1) / 2) - (m * (m - 1) / 2)`.

> An example of this is the sum of elements from `5` to `10`.
> 
> We can first do the sum of elements from `1` to `10`:
> 
> `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55`
> 
> Then we can subtract the sum of elements from `1` to `5 - 1 = 4`:
> 
> `(1 - 1) + (2 - 2) + (3 - 3) + (4 - 4) + 5 + 6 + 7 + 8 + 9 + 10 = 45`.
> 
> Simplified this is:
> 
> `0 + 0 + 0 + 0 + 5 + 6 + 7 + 8 + 9 + 10 =` **`5 + 6 + 7 + 8 + 9 + 10 = 45`**

***

This solution sums up the first `x + n - 1` elements and then subtracts the sum of the first `x - 1` elements to get the sum of the elements from `x` to `x + n - 1`. If the sum of all elements from `nums` is equal to the difference, we know we have all elements from `x` to `x + n - 1`.

***

An example of this could be:

Let us say that we have the example `nums = [3, 7, 5, 4, 6]`. To solve this we want the sum of numbers from `3` to `7`, we can do `3 + 4 + 5 + 6 + 7 = 25` to get our expected answer. But in the actual solution we do:

* `(7 * (7 + 1)) / 2 = 28`
* And then we can do `(2 * (2 + 1)) / 2 = 3`.
* Then we can subtract `3` from `28` to get `25` our expected answer.

Now, why does this work?

Let us keep the same example of finding all the elements from `3` to `7`.

We can use the elements:

`1 2 3 4 5 6 7`

But we only want:

`_ _ 3 4 5 6 7`

So to get this, we can sum up all the numbers:

`1+2+3+4+5+6+7 = 28`

And then subtract the first `2` numbers:

`1+2 _ _ _ _ _ = 3`

`28 - 3 = 25`

Since `25` equals the sum of elements in `nums`, we can return `true`.

***

This is great, but this won't work for some test cases, for example: `[0, 3, 0, 3]`.

If we sum up all the elements we get `6`, and we want `6` because the minimum element is `0`, and `0 + 4 = 4`, so `0 + 1 + 2 + 3 = 6`. But this won't work, so we have a `visited` map to keep track of repeated elements. 

## **Golang Solution:**

``` go
func isConsecutive(nums []int) bool {
    min := 100000
    sum := 0
    visited := map[int] bool {}
    
    for _, num := range nums {
        sum += num
        if num < min {
            min = num
        }
        if visited[num] {
            return false
        }
        visited[num] = true
    }
    
    n := min + len(nums) - 1
    m := min - 1
    
    return (n * (n + 1) / 2 - m * (m + 1) / 2) == sum
}
```

I would also put a solution using `sigma`, but Golangs math package doesn't have it. Feel free to put one in the comment.

**If this Solution Helps, Please Upvote :)**