# Ruby in-place solution O(n) time and O(1) space

**Author:** coolsoftwaredev
**Votes:** 2
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/1165765/](https://leetcode.com/problems/duplicate-zeros/solutions/1165765/)

---

## Description 

Given a fixed length array `arr` of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

## Solution 

It took me a few days to wrap my head around this solution, which modifies the array in-place. I understood the [naive solution]() a little easier to start. The naive solution takes up extra space by using a reference array to reconstruct the array. 

But we can solve it without using extra space, which is good, because using a reference array would use twice the space.

First, think about what the array might look like if we extended it to contain all the elements, including the duplicate zeros. It would be an array of length `arr.length + number_of_zeros_in_the_array`. 

Take this example: 

```
[1,0,2,3,0,4,5,0]
```

If we had an array that could contain the dulicate zeros and the existing elements, it would look like this: 

```
[1,0,0,2,3,0,0,4,5,0,0]
```

The length of the first array is 8. The length of the second array is 11. There are 3 zeros in the original array, and 11 - 8 = 3. 

So the "return" value (in quotes, since we're modifying in place and not really returning anything), would look like this: 

```
[1,0,0,2,3,0,0,4]
```

Which is the first 8 (remember: the length of the input array) elements of our thought-exercise array #2 (the one that was 11 elements long). 

So we can modify the array in-place without overwriting values by walking backwards from the "end" of our "imaginary array". We have to keep track of three things: 

1. An iterator that starts at the "end" of the "imaginary" array and moves towards the beginning of the input array. Call that `j`
1. An iterator that starts at the end of the input array. Call that `i`.
1. For convenience, let's keep track of the length of the original array. 

We'll set up a loop that decrements `i`, and writes to the array in position `j`, but **only if `j` is pointing to an position that exists within the input array**. It will write the value at `arr[i]`. 

Each time we perform this action, we check if that value is `0`. If it is, we need to duplicate the `0` value in our writing to the original array. We can do that by decrementing the `j` iterator *one more time*. This means that `j` will move faster than `i` (assuming there are 1 or more `0`s in the array), and eventually catch up with it - writing the appropriate duplicate `0` values. 

All along the way, we use `n` to make sure we never try and write to the array at a position in the longer, imaginary array. We decrement both `i` and `j` each time to keep moving backwards through the array until we hit position `0`. 

I found it a little hard to keep the two iterators straight in my head, so here's a table that illustrates the process for `[1,0,2,3,0,4,5,0]`:

| Iteration | i | j | Write to arr[j]? | Decrement j twice? | Write 0 twice? |
| --- | ----------- | ---- | ----- | --- | ---- |
| 0 | 7 | 10 | No, j > 7 | Yes, arr[7] == 0 | No, j > |
| 1 | 6 | 8 | No, j > 7 | No, arr[6] != 0 | No, arr[6] != 0 |
| 2 | 5 | 7 | Yes, j == 7 | No, arr[5] != 0 | No, arr[5] != 0 |
| 3 | 4 | 6 | Yes, j < 7 | Yes, arr[4] == 0 | Yes, arr[4] == 0 && j < 7 |
| 4 | 3 | 4 | Yes, j < 7 | No, arr[3] != 0 | No arr[3] != 0 |
| 5 | 2 | 3 | Yes, j < 7 | No, arr[2] != 0 | No arr[2] != 0 |
| 6 | 1 | 2 | Yes, j < 7 | Yes, arr[1] == 0 | Yes, arr[1] == 0 && j < 7 |
| 7 | 0 | 0 | N/A | N/A | N/A|

Two things to notice in the last row of this table: 

1. `i == j`, which is important. Since `j` moves faster than `i`, but we move through the array backwards with `i` which started at a position closer to the beginning, we eventually need the two of these values to converge. 
1. We don't actually need to take any action in the final iteration, because the first element of the array will always be the same. We can loop until we hit that first element with `j`. 

## Code

```rb
# @param {Integer[]} arr
# @return {Void} Do not return anything, modify arr in-place instead.
def duplicate_zeros(arr)
    # Determine the number of zeros in the array 
    number_of_zeros = arr.count(0)
    
    # Set up a variable to represent the length of the array
    n = arr.length
    
    # Initialize iterator i to the end of the array
    i = n - 1
    
    # Initialize iterator j to be the end of the array + number of zeros
    j = n + number_of_zeros - 1
    
    # Count backwards from j to the beginning of the array
    while j > 0 do 
    # arr[j] = arr[i] if j is within the range of the array (less than n)
        arr[j] = arr[i] if j < n
        # If that number is 0, decrement j an extra time
        # This means j will move faster than i until they meet
        if arr[i] == 0 
            j -= 1
            # This is where we duplicate the zero - 
            # write to arr[j] if j is within the range of the array.
            arr[j] = arr[i] if j < n
        end
    # Decrement both i and j during each loop - 
    # we want both of them to be counting down.
    i -= 1
    j -= 1
    end
end
```
