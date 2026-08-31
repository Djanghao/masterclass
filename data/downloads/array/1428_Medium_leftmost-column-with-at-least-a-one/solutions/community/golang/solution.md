# Golang solution with explanation and images

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1513188/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1513188/)

---

This solution uses the fact that all rows are sorted. So, all the ones in every row will be at the end. 

Basically, to not call `binaryMatrix.Get(i, j)` too many times. We can't loop through all values of the matrix. 

Since `1 <= rows, cols <= 100` the max number of elements in the matrix is `100 * 100, 10000`. And the problem says that the max number of calls to `binaryMatrix.Get(i, j)` is `1000`.

We could start with the approach of looping through every column in every row, starting at the end column and working down until we hit the first `0`. Like in the following image:

![](https://i.imgur.com/QXwBecO.png)

But if we had a `100*100` matrix of ones up to the one before the last column, we would have to call `binaryMatrix.Get(i, j)` a lot more than `1000` times.

***

But if we did a solution where we didn't have to loop through every `1`, we could get a smaller amount of calls to `binaryMatrix.Get()`. 

So, I got a solution to loop through the matrix starting at the top row right-most column. We can loop through the following conditions:

* If the element on the left of our current position is `0`, we can move our position down.
* Else if the element on the left is a `1`, we can move our position left.

Then we can return the left-most index.

If you don't understand, the following image might help:

![](https://i.imgur.com/6zctkTP.png)

***

Now we can talk about our worst-case scenario considering `binaryMatrix.Get()`. Our worst-case scenario is a matrix of `100 * 100` filled with ones for the last `len(matrix) - 1` rows. Like the following image except as a `100 * 100` matrix, instead of a `4 * 4`:

![](https://i.imgur.com/d76itjZ.png)

Note: I consider this the worst-case solution instead of the full matrix of ones because someone's code could check whether the number of ones is equal to the dimensions and, if so, just return. I also haven't made the bottom row all ones because someone might just loop from bottom to top.

If we solved it with the first solution, we would be getting `99 * 100 = 9900` calls to `binaryMatrix.Get()`.

But if we use the second solution to do this, we will get `100 + 98 = 198` instead of `9900`. If you don't understand, here is a scaled-down version: 

![](https://i.imgur.com/uQdLbVM.png)

***

**The Code:**

``` go
func leftMostColumnWithOne(binaryMatrix BinaryMatrix) int {
    d := binaryMatrix.Dimensions()
    first := d[1] - 1
    found := false
    
    for i := 0; i < d[0]; i++ {
        for j := first; j >= 0; j-- {
            if binaryMatrix.Get(i, j) == 0 { break } // move down a row
            first = j // move left by a column
            found = true // checking whether there is a 1 in the whole matrix
        }
    }
    if !found { return -1 }
    
    return first
}
```