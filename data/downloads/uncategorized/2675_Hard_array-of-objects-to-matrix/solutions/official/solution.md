# Official Solution

**Link:** [https://leetcode.com/problems/array-of-objects-to-matrix/solution/](https://leetcode.com/problems/array-of-objects-to-matrix/solution/)

---

[TOC]


## Overview:
* The task is to write a function that converts an array of objects `arr` into a matrix `m`. The array `arr` can contain objects or arrays, which can be deeply nested and may contain various data types such as numbers, strings, booleans, and null values. 
* The matrix `m` should have the first row as column names, where the column names are either unique keys within the objects (if there is no nesting) or the respective paths in the object separated by `"."` (if there is nesting). 
* The remaining rows of the matrix correspond to the objects in `arr`, and each value in the matrix corresponds to a value in the object. 
* If a given object doesn't have a value for a specific column, the corresponding cell in the matrix should contain an empty string `""`.

> Note: The columns in the matrix should be sorted in lexicographically ascending order. 
> It is an arrangement of characters, words, or numbers in alphabetical order, similar to searching for a particular word in an actual dictionary thus sometimes its also called as dictionary order.

---

## Use Cases:
* **Data Analysis:** Converting the array of objects into a matrix format can be useful for performing various data analysis tasks. It allows you to organize and structure the data in a tabular format, making it easier to perform calculations, aggregations, and statistical analysis.
* **Database Operations:** When interacting with databases, it is often necessary to convert the retrieved data into a matrix format to manipulate or display it. The matrix representation provides a structured format that can be easily integrated with database operations and queries.
* **Data Export:** If you need to export data from your application or system, converting it into a matrix format can be beneficial. Many data interchange formats, such as CSV (Comma-Separated Values) or Excel spreadsheets, follow a tabular structure similar to a matrix. Converting the data into a matrix makes it compatible with these formats, simplifying the exporting process.
* **Visualization:** Matrices are commonly used as input for various visualization techniques, such as charts, graphs, and heatmaps. By converting the array of objects into a matrix, you can feed the data directly into visualization libraries or tools, enabling you to create meaningful visual representations of the data.

---

## Approach 1: Recursive Approach
### Intuition:
* We can traverse the nested structure of the JSON array and identify all unique keys at each level of nesting using recursion.
* After getting the keys we can retrieve the value of a given key path from an object recursively and collect the values for each object and combine them row-by-row.
* Finally, we get the matrix representation with the extracted values.
* In conclusion, By recursively traversing the nested structure, we can identify the keys and retrieve the values at each level. This allows us to collect the values for each object and organize them row-by-row, resulting in the desired matrix representation.

### Algorithm:
* Define a helper function, `getKeys`, that takes an argument `arg`. This function recursively traverses the nested structure and returns an array of all unique keys found.
  * Base case: If `arg` is not an object, return an array containing an empty string `([''])`.
  * Recursive case: Use `Object.keys` to get the keys of `arg`. For each key, recursively call `getKeys` on the corresponding value and map the results. If the key is truthy, append it to the current key with a dot `(.)` separator. Otherwise, use only the current key. Flatten the mapped results using `Array.prototype.push`.
  * Return the flattened array of keys.
* Create a variable `keys` by applying the `reduce` function to the input array `arr`. The reducer function uses the `getKeys` helper function to collect all unique keys across the nested structure into a `Set` data structure. Convert the `Set` to an array and sort it.
* Define another helper function, `getValue`, that takes an object `obj` and a key path `path`. This function retrieves the value corresponding to the given key path from the object.
  * Split the key path into an array of individual keys using the dot `(.)` separator.
  * Initialize variables `i` (for tracking the current key index) and `value` (for storing the current value).
  * Use a `while` loop to iterate through the keys until `i` reaches the end or the value is not an object.
  * If the loop ends prematurely or the value is an object or undefined, return an empty string `('')`. Otherwise, return the final value.
* Use the `reduce` function on the input array `arr` to construct the matrix representation.
  * Initialize the accumulator with an array containing the `keys` array obtained earlier.
  * For each object `curr` in `arr`, map each `key` in `keys` to the corresponding value by calling the `getValue` function.
  * Push the mapped values into the accumulator array.
  * Return the resulting matrix.

In summary: It extracts the unique keys, retrieves the corresponding values, and constructs the matrix representation by mapping the values to their respective keys.


### Implementation:


<iframe src="https://leetcode.com/playground/N7fkFfeZ/shared" frameBorder="0" width="100%" height="500" name="N7fkFfeZ"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* In the worst case, where all objects are deeply nested, the time complexity can be exponential, `O(N * L)`, where `N` is the number of objects in the array and `L` is the size of the JSON objects.
* The time complexity of the recursive approach depends on the size and nesting depth of the input array of objects.

**Space Complexity:** 
* The space complexity is typically `O(N * L)`, where `N` is the number of objects in the array and `L` is the average length of the paths (strings) representing the keys. The space complexity is determined by the depth of recursion, which is proportional to the length of the paths.
---

## Approach 2: Selective Iterative Approach with Map:
### Intuition:
* The iterative approach with a map replaces recursion by utilizing a map data structure to store the key-value pairs of the flattened structure. It allows us to extract column values easily without the need for recursion twice.
* First, we use recursion only once to traverse the nested structure and map keys to their corresponding values. This recursive traversal helps flatten the structure.
* Next, we extract column names from the keys of the map, ensuring uniqueness. This step differs from the previous recursive approach, as we no longer rely on recursion to obtain the column names.
* We then iterate over the array and populate the matrix with the extracted values. By leveraging the map, we can easily retrieve the values based on the column names.
* Throughout the traversal process, we handle nested objects and arrays, ensuring all elements are correctly processed and mapped.

Overall, the iterative approach with a map simplifies the extraction of column values and eliminates the need for recursive function calls to retrieve column names, providing an efficient and concise solution.


### Algorithm:
* Define a helper function `getSub` that takes an object as input and recursively maps its properties to their corresponding values using a `Map` data structure. If the property value is not an object, directly set the `key-value pair` in the map. If it is an object, recursively call `getSub` on the property value and map its sub-properties to their values.
* In the main function `jsonToMatrix`, create an empty `Map` called `map` to store the `key-value pairs` of the flattened structure.
* Call the `getSub` function with the input array `arr` to populate the `map` with all the `key-value pairs` derived from the nested structure.
* Create a `Set` called `set` to store unique column names. Iterate over the keys of the map and extract the column names by removing the prefix before the dot (if any). Add each extracted column name to the `set`.
* Convert the `set` of column names into an array `keys` and sort it in ascending order. This will give us the final order of the columns in the resulting matrix.
* Determine the length `len` of the input array `arr`.
* Create an empty `matrix` array and set its first row as the `keys` array, representing the column names.
* Iterate over the input array `arr` from index `1` to `len`. For each index `i`, iterate over the `keys` array. Retrieve the corresponding value from the `map` using the `key` in the format `${i - 1}.${key}`. If the value exists, assign it to the respective position in the `matrix`. If the value doesn't exist for a particular column, assign an empty string `""` instead.
* After populating all the rows of the `matrix`, return the resulting matrix.

In summary: The Iterative Approach with Map eliminates the need for recursive function calls to flatten the structure and retrieve column names. It utilizes a `Map` data structure to store key-value pairs and provides an efficient way to extract values based on column names. The algorithm iterates over the input array only twice, resulting in improved performance compared to recursive approaches.

### Implementation:


<iframe src="https://leetcode.com/playground/chqqgV5k/shared" frameBorder="0" width="100%" height="500" name="chqqgV5k"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* The time complexity of the iterative approach with Map is `O(N * L)`, where `N` is the number of objects in the array and `L` as the size of the JSON objects.
* Constructing the map and populating it with key-value pairs has a time complexity of `O(N * L)` since each property of the JSON objects needs to be processed.
* Sorting the keys has a time complexity of `O(L * log L)` in the worst case.
* Overall, the time complexity is dominated by the step that constructs the map, resulting in `O(N * L)` time complexity.

**Space Complexity:** 
* The space complexity is typically `O(N * L)`, where `N` is the number of objects in the array and `L` is the average length of the paths (strings) representing the keys. The space complexity is determined by the number of key-value pairs, which is proportional to the number of objects in the array.

---

## Approach 3: Stack Approach
### Intuition:
* We can use a stack as using a stack we can handle nested objects and arrays efficiently. 
* During the traversal, we can track the paths and column names, which are then used to set the values in the matrix. 
* Finally in the end we can sort the columns of the matrix ensuring they are in the lexographically ascending order. 

### Algorithm:
* Create an empty map called `colMap` to store column names and their corresponding indices.
* Create an empty matrix called `res` to store the resulting values. Initialize it with an empty array as the first row.
* Define a helper function called `sortCols` that sorts the columns of the matrix based on the column names. This ensures that the columns are in the desired order.
  * That is in this case, a comparator function `a.localeCompare(b)` is passed as an argument to the `sort()` method. This comparator function compares two strings `a` and `b` using the `localeCompare()` method. The `localeCompare()` method performs a locale-sensitive string comparison.
  * By using `a.localeCompare(b)` as the comparator function, the `sort()` method ensures that the column names in the `sortedColNames` array are sorted in lexicographic order according to the current locale.
* Start iterating over the input array,`arr`, using a for loop.
* For each element in `arr`, create an empty stack called `stack` and push the element along with an empty path onto the stack.
* Create an empty row in the `res` matrix with the same length as the number of columns in `colMap`. This represents a row for the current element being processed.
* While the stack is not empty, do the following steps:
  * Pop the top element from the stack, which consists of the front element and its path.
  * Check if the front element is an object. If it is, iterate over its keys in reverse order and push each key-value pair onto the stack with an updated path.
  * If the front element is an array, iterate over its elements in reverse order and push each element onto the stack with an updated path.
  * If the front element is a leaf node (neither an object nor an array), set the path as a string and check if it exists in `colMap`.
    * If the path does not exist in `colMap`, add it as a new column name to the first row of `res` and update `colMap` with the new column name and its corresponding index.
    * Initialize the value of the new column as an empty string for each row in `res`.
    * Retrieve the column index from `colMap` for the current path.
    * Set the value of the corresponding cell in `res` with the front element's value.
* After processing all elements in `arr`, call the `sortCols` function to sort the columns of `res` based on the column names.
* Return the sorted `res` matrix as the final result.

In summary: This Iterative Approach using a stack allows us to traverse the nested structure iteratively, handling objects, arrays, and leaf nodes efficiently. The stack helps us explore the nested structure in a depth-first manner. The `colMap` data structure helps track and maintain unique column names and their corresponding indices. The resulting matrix is then sorted to match the desired column order. This approach provides an alternative to recursive solutions, offering better control and understanding of the traversal process.

### Implementation:


<iframe src="https://leetcode.com/playground/KciXcB4g/shared" frameBorder="0" width="100%" height="500" name="KciXcB4g"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* The time complexity of the iterative approach is linear, `O(N * L)`, where `N` is the number of objects in the array and `L` represents the average size of the JSON objects.
*  It involves traversing each object in the array once and performing necessary operations.

**Space Complexity:** 
* The space complexity depends on the depth of nested objects in the JSON structure. In the worst case, if the JSON objects are deeply nested, the memory complexity can be considered as `O(D)`, where `D` is the maximum depth of nested objects.


---

## Approach 4: Backtracking Approach
### Intuition:
* We can use a backtracking approach to use less memory space as backtracking can be more efficient in terms of space complexity compared to recursive approach. In the backtracking approach, we build the matrix incrementally by adding rows as we reach leaf nodes (a value that is not an object or an array), and we backtrack by removing the last key from the path.
* This allows us to avoid storing intermediate results and reduces the overall space complexity.
We start with an empty matrix and an empty path. It recursively explores each object encountered in the JSON array. At each step, it makes a choice by adding the current key to the path and continues exploring the nested structure.

### Algorithm:
* The `flattenBacktracking` function takes four parameters: `ele` (the current element), path (the current path in the nested structure), `object` (the resulting flattened object), and `columns` (a set to store unique column names).
* If `ele` is an object (including arrays), the function recursively calls itself for each key-value pair. It concatenates the current key to the `path` using dot notation and passes the updated `path`, `object`, and `columns`.
* If `ele` is not an object (a leaf node), it assigns the value to the `object` using the `path` as the key. It also adds the `path` to the `columns` set to keep track of unique column names.
* The function returns the `object` containing the flattened structure.
* In the `jsonToMatrix` function, an empty `matrix` array and a `columns` set are initialized.
* The `arr` is mapped using the `flattenBacktracking` function to flatten each element in the array. This process populates the `matrix`, updates the `columns` set, and returns the flattened objects.
* The first row of the `matrix` is created by converting the `columns` set to an array and sorting it.
* The `columnsIdx` object is created to store the index of each column name for efficient lookup.
* For each flattened object in the `arr`, a new row is added to the `matrix` with an array of empty strings. The entries of the current object are assigned to the corresponding column index in the `matrix` based on the `columnsIdx` lookup.
* The final `matrix` is returned, representing the flattened JSON structure in matrix form

### Implementation:


<iframe src="https://leetcode.com/playground/7MMqzB2e/shared" frameBorder="0" width="100%" height="500" name="7MMqzB2e"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* In the worst case, the algorithm visits each key-value pair once, which contributes to the `N` factor, where `N` is the total number of key-value pairs in the object. For each key-value pair, the algorithm performs operations such as concatenation and accessing the path string, which takes time proportional to the length of the path `(L)`. Therefore, the overall time complexity is `O(N * L)`.
* The time complexity of the backtracking approach depends on the size and nesting depth of the input array of objects. 

**Space Complexity:** 
* The space complexity is typically `O(N * L)`, where `N` is the number of objects in the array and `L` is the average length of the paths (strings) representing the keys. The space complexity is determined by the number of key-value pairs and the depth of recursion, which is proportional to the length of the paths.

---

## Approach 5: Using Generator Function
### Intuition:
By using the generator function , we can efficiently extract the nested keys and values from the input object, handling its complex structure in a recursive and on-demand manner. This approach helps in generating the necessary data for the subsequent steps of converting the input JSON into a matrix representation.s

> Note: A generator function has properties like
> * **Lazy Evaluation:** Generator functions follow the concept of lazy evaluation, where values are generated one at a time as requested. This can be beneficial when dealing with large datasets or computationally expensive operations because it avoids unnecessary computation upfront.
> * **Memory Efficiency:** Since generator functions generate values on-demand, they can be memory-efficient compared to generating and storing all values in memory at once. This is particularly useful when dealing with infinite or very large sequences.
> * **Iteration Control:** Generator functions provide fine-grained control over iteration. By using the `yield` keyword, you can pause the execution and yield a value, allowing the caller to consume the yielded value and decide when to resume the generator function.
> * **Simplified Iteration Logic:** Generator functions encapsulate the iteration logic within the function itself. This makes the code more readable and maintainable by separating the logic for generating values from the logic for consuming those values.
> * **Asynchronous Operations:** Generator functions can also be used with asynchronous operations by combining them with Promises or async/await syntax. This allows you to write asynchronous code in a more sequential and readable manner, making it easier to handle complex asynchronous workflows. 

### Algorithm:
We will have two functions named as `getNestedColumn` and the parent function as `jsonToMatrix`.

In `getNestedColumn` Function:
* This function is a generator function, denoted by the `function*` syntax.
* It takes two parameters: `obj` (the object to be processed) and `prefixes` (an array that keeps track of the nested column prefixes).
* The function recursively iterates over the nested properties of the `obj` parameter.
* If the obj is not null and is an array (`Array.isArray(obj)` check), it enters the first conditional block.
  * It iterates over the array elements using a `for` loop and pushes the index `key` into the `prefixes` array to keep track of the nested column.
  * Then, it yields the nested column by recursively calling `getNestedColumn` on the current array element.
  * After the recursive call, it removes the last element from the `prefixes` array using `prefixes.pop()` to backtrack.
* If the `obj` is not null and is an object (`typeof obj === 'object'` check), it enters the second conditional block.
  * It iterates over the object keys using a `for-of` loop and pushes the key into the `prefixes` array.
  * Then, it yields the nested column by recursively calling `getNestedColumn` on the current object property.
  * After the recursive call, it removes the last element from the `prefixes` array to backtrack.
* If none of the previous conditions match, it means the function has reached a leaf node of the nested structure.
  * It checks if the `prefixes` array has any elements, indicating a nested column.
  * If so, it joins the elements of the `prefixes` array with `'.'` delimiter to form the column key.
  * Then, it yields the [key, value] pair by using the `prefixes.join('.')` as the key and the current `obj` as the value.
* This function allows for an iterative traversal of the nested columns, generating key-value pairs at each level.

In Parent `jsonToMatrix` Function:
* This function takes an array `arr` as input and converts it into a matrix format.
* It initializes three variables: `output` (the resulting matrix), rows (an array of Maps to store row-wise key-value pairs), and `uniqueColumns` (a Set to store unique column keys).
* It starts a `for` loop to iterate over each row in the `arr` input array.
* Within the loop, it calls the `getNestedColumn` function on the current array element to obtain the nested columns as key-value pairs.
  * It populates the `rows` array with the key-value pairs for the current row.
  * It adds the column keys to the `uniqueColumns` set to ensure uniqueness.
* After iterating over all the `rows`, it converts the `uniqueColumns` set to an array and sorts it to obtain the column order.
* It assigns the sorted column keys as the first row of the `output` matrix.
* It starts another `for` loop to populate the remaining rows of the `output` matrix.
  * For each column key in the sorted column array, it checks if the current row's Map (`rows[row]`) has a value for that column.
  * If it does, it pushes the value into the corresponding column of the current row in the `output` matrix.
  * If the column is missing in the current row, it pushes an empty string to maintain the structure.
* Finally, it returns the resulting `output` matrix.


### Implementation:


<iframe src="https://leetcode.com/playground/MXoTpXAV/shared" frameBorder="0" width="100%" height="500" name="MXoTpXAV"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* The time complexity of the `jsonToMatrix` function mainly depends on the size of the input array `(arr)` and the number of nested properties within each object in the array. 
* The `getNestedColumn` generator function iterates over the nested properties, and the time complexity for this iteration is typically proportional to the number of nested properties in the input. 
* Therefore, the time complexity can be considered as `O(N*L)`,where `N` is the number of objects in the array and `L` is the average length of the paths (strings).

**Space Complexity:** 
* The space complexity of the jsonToMatrix function depends on the size of the input array `(arr)` and the number of unique nested properties within the objects. 
* The output matrix `(output)` will have dimensions `(N+1) x L`, where `N` is the number of objects and `L` is the average length of the paths. 
* Additionally, the `rows` array and `uniqueColumns` set are used to store intermediate data during the conversion process. Therefore, the space complexity can be considered as `O(N*L)` in the worst case.

---


## Interview Tips:
* How would you approach solving this problem?
  * I would start by understanding the requirements and constraints of the problem. Then, I would consider different approaches, such as recursion, iteration, or a combination of both, to convert the array of objects to a matrix. Additionally, I would analyze the nesting of objects and arrays and how it affects the column names and values in the matrix.

* How would you handle the column names in the matrix?
  * If there is no nesting, the column names would be the unique keys within the objects. However, if there is nesting, the column names would be the respective paths in the object separated by `"."`. I would ensure that the column names are sorted in lexicographically ascending order.

* How would you handle the values in the matrix when a given object doesn't contain a value for a given column?
  * If a given object doesn't contain a value for a given column, the cell in the matrix should contain an empty string `""`. I would make sure to populate the matrix accordingly, considering the presence or absence of values for each column in each object.

---