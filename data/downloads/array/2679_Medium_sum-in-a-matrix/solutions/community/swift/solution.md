# Swift: Sorting with O(n*m*logm) time in O(1) space - Full explanation

**Author:** ilikeswift
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/4787546/](https://leetcode.com/problems/sum-in-a-matrix/solutions/4787546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to know for each iteration what the maximum is of each row, and then find the maximums of that maximum. At the very least, this will require exploring all values in the matrix, $$O(nm)$$, where the matrix's dimensions are `n` rows by `m` columns.

# Approach 1: Brute Force searching
<!-- Describe your approach to solving the problem. -->
For each row in the array, we find the max value in that row and remove it. Then for the rows' max values, we find the max of that and add it to the final score.

Here is some pseudo-code:

```
while rows have elements in them:
    for each row in the matrix:
         find max in the row, remove it, and add to final score
```

# Complexity
- Time complexity: $$O(n*m^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Looking at this, we know that we have to remove all element in all rows to finish looping. Since each row has the same number of elements, we have to remove from each row `m` times. Therefore, the outer loop is $$O(m)$$.

The inner loop runs for each row, so that is $$O(n)$$.

The third line of finding the max on an unsorted row is $$O(m)$$. Removing that value is also $$O(m)$$ if the array behaves like an ArrayList.

Since these are nested and each line of logic is done for each iteration of each loop, the time complexity is multiplicative and therefore $$O(m*m*n)$$ or $$O(n*m^2)$$.

- Space complexity: $$O(1)$$

If we only need the max of each row's max in each iteration of the outermost loop, then we only need a single variable to hold the running max of a row, a single variable to hold the running max of the matrix, and a single variable for the final score. Therefore, we only need a constant 3 variables for storage.


# Approach 2: Sorting Rows - Divide and Conquer Sorts
<!-- Describe your approach to solving the problem. -->
While the above is okay, let's look at some ways to improve. 

Finding the max of a row every iteration is costly at $$O(m)$$ each time. Instead, we can sort each row in $$O(m*logm)$$ time. Then, getting the max each time is as simple as looking at the back of the row in $$O(1)$$ time. We will figure out what this means for time complexity later.

Here is some pseudo-code:

```
sortedNums = nums with each row sorted
while rows have elements in them:
    for each row in the matrix:
        remove the last element in the row and see if it is our new max element
    add the running max to the final score

```

# Complexity
- Time complexity: $$O(n*m*logm)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
As I said above, sorting a row is going to be $$O(m*logm)$$. So sorting the matrix will be $$O(n*m*logm)$$.

The outer loop will run $$O(m)$$ times.

The inner loop runs for each row, so that is $$O(n)$$.

The third line of finding the max on an unsorted row is now $$O(1)$$ since we always know where in the array the largest element is.

Now we have to determine which is the larger bound: Sorting the matrix, or doing the actual logic for the function with the loops.

The first as we already said is $$O(n*m*logm)$$. The second is a multiplication of the levels of our loops, e.g. $$O(m) * O(n) * O(1)$$

Since sorting, $$O(n*m*logm)$$, is larger than the looping, $$O(n*m)$$, our final complexity is $$O(n*m*logm)$$.

- Space complexity: $$O(1)$$*

If we only need the max of each row's max in each iteration of the outermost loop, then we only need a single variable to hold the running max and a single variable for the final score. Therefore, we only need a constant 2 variables for storage.

As far as auxillary space for the sorting, this depends on what we do for sorting. If we did an in-place sort such as an in-place quicksort or a heapsort, we are looking at O(1) space. But if an out-of-place sort is used, like quicksort, we get a possible worst case of $$O(m)$$ with an average case of $$O(logm)$$*. My code has the latter as Swift doesn't have a built-in heap, or at least one we can import on leetcode.


*For heap sort, we can consider each row was a heap built with the $$O(m)$$ building method and each call to find the max is $$O(logm)$$. This still retains a bound of $$O(m*logm)$$ for each row's set of operations.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func matrixSum(_ nums: [[Int]]) -> Int {
        guard nums.count > 1 else {
            return nums.first?.reduce(0, +) ?? 0
        }

        let sortedNums = nums.map { $0.sorted() }
        var i = sortedNums[0].count - 1
        var sum = 0
        while i >= 0 {
            var max = -1
            for row in sortedNums {
                if max < row[i] {
                    max = row[i]
                }
            }
            sum += max
            i -= 1
        }

        return sum
    }
}
```