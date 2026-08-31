# Official Solution

**Link:** [https://leetcode.com/problems/chunk-array/solution/](https://leetcode.com/problems/chunk-array/solution/)

---

[TOC]


## Overview:
The task is to take an array `arr` and a chunk size `size` as input, and return a chunked array. The chunked array should contain subarrays of length `size`, formed from the elements of the original array `arr`. The last subarray may have a length less than `size` if the length of `arr` is not evenly divisible by `size`.

---

## Use Cases:

**Pagination:** 
* When implementing pagination in a web application, you often need to split a large list of items into smaller chunks or pages. The chunking operation allows you to divide the items into manageable portions, making it easier to display and navigate through the data.
* In the example usage, let's say we have an array of `10` items and want to display `3` items per page. We specify the current page number as `2`. The function will be called with these parameters, and the resulting chunked array (representing the items for the second page) should be logged to the console. 
    ```js
    function paginateArray(array, pageSize, pageNumber) {
    // Calculate the starting index of the current page
    const startIndex = (pageNumber - 1) * pageSize;
    
    // Create a chunk of the array based on the page size
    const chunkedArray = array.slice(startIndex, startIndex + pageSize);
    
    return chunkedArray;
    }

    // Example usage
    const data = [
    'Racoon 1', 'Racoon 2', 'Racoon 3', 'Racoon 4', 'Racoon 5',
    'Racoon 6', 'Racoon 7', 'Racoon 8', 'Racoon 9', 'Racoon 10'
    ];

    const pageSize = 3; // Number of items per page
    const pageNumber = 2; // Current page number

    const result = paginateArray(data, pageSize, pageNumber);
    console.log(result);
    ```

**Parallel Processing:** 
* In parallel computing or distributed systems, data is often divided into chunks and processed simultaneously by multiple processors or nodes. Chunking the data allows for efficient distribution and parallel execution of tasks, improving overall performance.

**Image Processing:** 
* In image processing applications, large images are often divided into smaller blocks or tiles to enable processing and analysis at a more granular level. Each tile can be independently processed, allowing for parallelization and efficient utilization of computational resources.

**Data Analysis and Aggregation:** 
* When dealing with large datasets, it can be beneficial to divide the data into smaller chunks for analysis and aggregation purposes. This approach allows for parallel or distributed processing, enabling faster data processing and efficient resource utilization.

**File Upload and Transfer:** 
* When uploading or transferring large files, the data is typically sent in smaller chunks to handle potential network limitations and ensure reliable delivery. The receiving end can process each chunk independently and reassemble them to reconstruct the original file.

---

## Approach 1: Using Brute Force
### Intuition:
we can use nested while loops to iterate through the input array and form chunks of the specified size. The outer loop can control the index of the input array, while the inner loop can add elements to a temporary array until the desired chunk size is reached or the end of the input array is reached. Then the temporary array can be added to the chunked array. This process continues until all elements are processed.

### Algorithm:
* Initialize the `chunkedArray` as an empty array.
* We use a `while` loop with the condition `i < arr.length` to iterate through the array.
* In each iteration, a `temp` array is created to hold the elements of each chunk.
* Use a nested `while` loop with the condition `len-- > 0 && i < arr.length` to add elements to the `temp` array.
* Check if the end of the array is reached while adding elements to `temp` to handle the last chunk.
* Now add the `temp` array as a subarray to the `chunkedArray`.
* Return the `chunkedArray`.
In summary: It uses nested `while` loops to iterate through the array and form chunks.

### Implementation:


<iframe src="https://leetcode.com/playground/7LPjpGmx/shared" frameBorder="0" width="100%" height="463" name="7LPjpGmx"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n)`, Where `n` is the length or size of the input array.

**Space Complexity:** `O(n)`, Where `n` is the length or size of the input array.

---

## Approach 2: Using Slicing
### Intuition:
We can use the `slice` method to extract a chunk of the input array based on the current index and the specified size. The `slice` method creates a shallow copy of the portion of the array starting from the current index up to the current index plus the chunk size. The chunk is then added to the chunked array, and the index is incremented by the chunk size. This process continues until all elements are processed.

### Algorithm:
* We can iterate through the array using a `while` loop.
* After iterating add the sliced chunk to the `chunkedArray` using `arr.slice(index, index + size)`.
* Now increment the `index` by the `size` after each iteration.
* After incrementing continue until the end of the array is reached.
* Finally, return the `chunkedArray`.
In summary: We can use the `slice` method to extract chunks from the array based on the `index` and `size`.

### Implementation:

<iframe src="https://leetcode.com/playground/PsksPbV9/shared" frameBorder="0" width="100%" height="327" name="PsksPbV9"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n)`, Where `n` is the length or size of the input array.

**Space Complexity:** `O(1)`.

---

## Approach 3: Using Splice and Slice
### Intuition:
we can use nested loops to iterate through the input array and form chunks. The outer loop increments the index by the chunk size, while the inner loop adds elements to a temporary array by using the `splice` method. If the end of the input array is reached, the remaining elements in the temporary array are removed using `splice`. The temporary array is then added to the chunked array. After the loops end, the first empty subarray in the chunked array is removed using `slice(1)`.

### Algorithm:
* Initialize the `chunkedArray` as an array containing an empty subarray `[[]]`.
* Maintain a temporary array `temp` to hold the elements of each chunk.
* Outer loop iterates over the array starting from `j` and increments by `size`.
* Inner loop iterates over the current chunk size `size` and adds elements to the `temp` array using `arr[j + i]`.
* Now check if the end of the array is reached while adding elements to `temp` and uses `temp.splice(j)` to remove any remaining elements in `temp`.
* Now add the `temp` array as a subarray to the `chunkedArray` using the spread operator `[...b, [...a]]`.
* Finally return the `chunkedArray` with the first empty subarray removed using `b.slice(1)`.
In summary: Uses `splice` and `slice` and `while` loop to iterate through the array and form chunks.

### Implementation:


<iframe src="https://leetcode.com/playground/UAFB6eyb/shared" frameBorder="0" width="100%" height="429" name="UAFB6eyb"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n^2)`, Where `n` is the length or size of the input array.

**Space Complexity:** `O(n)`, Where `n` is the length or size of the input array.

---

## Approach 4: Using Reduce
### Intuition:
In this method we use the `reduce` function to iterate over the input array and build the chunked array. The `reduce` function takes an initial value of an empty array `([])` and a `callback` function. The `callback` function checks the last chunk in the chunked array. If the last chunk doesn't exist or its length is equal to the chunk size, a new chunk is created with the current element. Otherwise, the current element is added to the last chunk. The updated chunked array is returned in each iteration.

### Algorithm:
* Initialize the `chunkedArray` as an empty array.
* In each iteration of the `reduce` function:
  * Checks the last chunk in the `chunkedArray` using `chunkedArray[chunkedArray.length - 1]`.
  * If the last chunk doesn't exist or its length is equal to the `size`:
    * Create a new chunk `chunk` with the current element and adds it to the `chunkedArray`.
  * Otherwise:
    * Append the current element to the last chunk.
* Finally return the final `chunkedArray`.
In summary: It uses the `reduce` function to iterate over the array and build the `chunkedArray`.

### Implementation:


<iframe src="https://leetcode.com/playground/MXRbykmu/shared" frameBorder="0" width="100%" height="327" name="MXRbykmu"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n)`, Where `n` is the length or size of the input array.

**Space Complexity:** `O(1)`.

---

## Approach 5: Using Push
### Intuition:
In this method we iterate through the input array using a `for...of` loop. It maintains a `currentChunk` array to hold the elements of the current chunk. When the `currentChunk` reaches the desired size, it is added to the `result` array, and a new `currentChunk` is created. At the end of the loop, any remaining elements in the `currentChunk` are added to the `result` array if it is not empty.

### Algorithm:
* Maintain a result array to hold the `chunkedArray`.
* We use a `currentChunk` array to store the elements of the current chunk being constructed.
* For each `element` in the array:
  * If the `currentChunk` reaches the desired `size`:
    * Push the `currentChunk` to the `result` array.
    * Create a new `currentChunk` and adds the element to it.
  * Otherwise, appends the `element` to the `currentChunk`.
* If there are any leftover elements in the `currentChunk`, they are added to the `result` array.
* Finally return the `result` array.
In summary: It iterates through the array using a `for...of` loop and uses `push` method for pushing chunks.

### Implementation:


<iframe src="https://leetcode.com/playground/Yn9paRQe/shared" frameBorder="0" width="100%" height="395" name="Yn9paRQe"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n)`, Where `n` is the length or size of the input array.

**Space Complexity:** `O(n)`, Where `n` is the length or size of the input array.

---

## Approach 6: Using Ceiling
### Intuition:
In this method, we use the `Array.from` method to create a new array based on the number of chunks needed, which is determined by dividing the length of the input array by the chunk size and rounding up using `Math.ceil`. The `Array.from` method also accepts a mapping function that creates each chunk by using slice to extract the corresponding portion of the input array based on the index and chunk size.

### Algorithm:
* We use `Array.from` to create an array of length equal to the number of chunks.
* Now map each element of the new array using a `callback` function that creates each chunk.
* The `callback` function uses `arr.slice(index * size, index * size + size)` to extract the corresponding portion of the array for each chunk.
* Finally return the resulting chunked array.
In summary: It determines the number of chunks needed using `Math.ceil(arr.length / size)`.

### Implementation:


<iframe src="https://leetcode.com/playground/4H2kfwJz/shared" frameBorder="0" width="100%" height="225" name="4H2kfwJz"></iframe>


### Complexity Analysis:

**Time Complexity:** `O(n)`, Where `n` is the length or size of the input array

**Space Complexity:** `O(1)`

---

## Interview Tips:

* What is the purpose of chunking an array?
  * Chunking an array allows us to divide a large array into smaller, more manageable subarrays. This can be useful in various scenarios such as pagination, parallel processing, or dividing data for distributed systems.

* How would you approach chunking an array without using built-in library functions like _.chunk?
  * One approach is to use loops and array manipulation techniques. Another approach is to utilize the slice or splice methods to extract chunks of the array. Alternatively, you can use the reduce function to iterate over the array and create subarrays of the desired size.

* Can you explain the difference between chunking an array and splitting an array?
  * Chunking an array involves dividing it into smaller subarrays of equal or specified size, while splitting an array typically involves separating it into two or more separate arrays at a given index or based on a condition.

* How would you handle edge cases where the array length is not evenly divisible by the chunk size?
  * In such cases, the last subarray may have a length that is less than the specified chunk size. This can be handled by checking the remaining elements and including them in the last subarray.

---