# Go O(n) solution with explanation

**Author:** BitSailor
**Votes:** 25
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1477544/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1477544/)

---

**Explanation - Code at bottom**
We know that a non-decreasing array means that the numbers will be sorted from the smallest to the largest - with the lowest negative number on the far left, and the greatest positive number on the far right.

Take a look at example 1 from the problem: nums = [-4, -1, 0, 3, 10].

Let's explore those numbers in the array to see if we can identify a pattern. 

If we square every number in the list we arrive at [16, 1, 0, 9, 100]. We can see that squared negative numbers results in a positive integer - so whether we square the negatives or we square the absolute values, we arrive at the same result.

Squaring the absolute values [4, 1, 0, 3, 10] gives us a new array of [16, 1, 0, 9, 100].
Squaring the negative values [-4, -1, 0, 3, 10] gives us a new array of [16, 1, 0, 9, 100]

Again, because the given array is in non-decreasing order we know that the largest value will always be either the absolute value of the first number of the given array or the absolute value of the last number of the given array.

Knowing this, we can start off by comparing the absolute values of the first and last indices of the given array to determine which is larger. We can then append the largest of the two to the last index of our new array.

So, is the absolute value of -4 less than the absolute value of 10? Yes, because 16 is less than 100. So we can add the square of 10 to the last index in our new array.

[null, null, null, null, 100]

Now that we have added the last index of the given array, we can ignore that index from here on out. 

[-4, -1, 0, 3]

The largest absolute value on the right is now 3. Let's compare the squared absolute value of 3 to the outermost index on the left - again, this is -4.

(abs(-4))^2 = 16
(abs(93))^2 = 9

16 is greater than 9, so the next number to be added to our new array is 16.

[null, null, null, 16, 100]

We now ignore the initial first index, as it's square has already been placed in our new array, and focus on the remaining given array. 

[-1, 0, 3]

Again, we know the next largest squared number will come from one of the two outside numbers. So let's find it.

(abs(-1))^2 = 1
(abs(3))^2 = 9

9 is greater than 1 so let's add it to our new array.

[null, null, 9, 16, 100]

That means our given array is now

[-1, 0]

Again, we are going to compare the left-most and right-most indices.

(abs(-1))^2 = 1
(abs(0))^2 - 0

1 is greater than 0 so let's add it to our new array.

[null, 1, 9, 16, 100]

We have one remaining index from our given array so let's add it.

[0, 1, 9, 16, 100]

We have taken each index from the given array, squared it, then placed it sorted within a new array.

*Of note, we can square the numbers before or after the comparison and get the same result.*

absolute(-4) < absolute(10) and (absolute(-4))^2 < (absolute(10))^2

**Let's code this algorithm in Go.**

Start by getting the length of whatever the input array is.

`n := len(nums)`

Next, create our new slice, of type int and size n, that will contain the sorted squares. We can call it result. 

`result := make([]int, n)`

We can now create our left and right pointers.

`left, right := 0, n - 1`

*Note: We are using n - 1 here because there are n items in the array, starting at 1, but the index always starts with 0. So the final index of the array is n - 1.*

We can now start filling in our new array from the last index to the start. So, from n - 1 to 0.

Let's declare a square variable.

`square := 0`

Now we need to compare the absolute values. We can use the math package, but I will just create our own function that returns the absolute value:

```
// function to get the absolute value
func Abs(x int) int {
    if x < 0 {
        return -x
    }
    
    return x
}
```

Within our for loop iterating over our new slice in reverse, let's compare the absolute values of each pointer and set square to the largest one and adjust the pointer at that value.

```
for i := n - 1; i >= 0; i-- {
        square := 0
        
        if Abs(nums[left]) < Abs(nums[right]) {
            square = nums[right]
            right--
        } else {
            square = nums[left]
            left ++
        }
    }
```

**Here is the final code with comments:**

```
// function to get the absolute value
func Abs(x int) int {
    if x < 0 {
        return -x
    }
    
    return x
}

// main function to get the sorted squares array
func sortedSquares(nums []int) []int {
    
    n := len(nums) // get the length of the given array
    result := make([]int, n) // create a new slice of type int that can hold n values
    
    // left and right pointers
    left, right := 0, n - 1
    
    // iterate through our new slice (result) in reverse as we will be adding numbers from largest to smallest
    for i := n - 1; i >= 0; i-- {
        square := 0 // the variable that will store the largest absolute value of the two pointers
        
        // if the absolute value of the left pointer is less than the absolute value of the right pointer, 
        // set square to the larger number from the right pointer and move the right pointer one left.
        // Else set square to the larger number from the left pointer and move the left pointer one right.
        if Abs(nums[left]) < Abs(nums[right]) {
            square = nums[right]
            right--
        } else {
            square = nums[left]
            left ++
        }
        
        // square the value and add it to the appropriate index
        result[i] = square * square
    }
    
    // return the sorted array with the squared values
    return result
}
```