# Recursion | Detailed Explanation

**Author:** sourasb
**Votes:** 19
**Link:** [https://leetcode.com/problems/array-of-objects-to-matrix/solutions/3554211/](https://leetcode.com/problems/array-of-objects-to-matrix/solutions/3554211/)

---

### \u2705\u2705\uD83D\uDD1D\uD83D\uDD1DPlease Upvote if you find this helpful. \uD83D\uDD1D\uD83D\uDD1D\u2705\u2705

## Approach:

Here we want to convert an array of objects into a matrix representation. In this matrix, each row corresponds to an object from the input array, and the columns represent the keys present in the objects.

1. **Extracting Keys:**

    1.  We first determine all the unique keys present in the objects of the input array. We can use recursion to traverse the objects and their properties, collecting the keys.
    2. Starting with the first object, we examines each property and checks if it contains nested objects. For nested objects we recursively explore its properties to extract the nested keys.
The keys are collected in an array, using dot notation to represent the nesting hierarchy.

2. **Sorting and Preparing the Keys:**

    1. After extracting the keys, we need to sort them in ascending order to ensure consistent ordering in the resulting matrix. This will guarantee that the columns in the matrix will follow the same order for all objects.
    
3. **Retrieving Values:**

    1. Once we have the keys, we can populate the values in the matrix. For each key we extract the corresponding value based on the key paths. If the current value is an object, we continue traversing the nested properties. Once the end of a key path is reached, the code retrieves the final value for that key.

4. **Matrix Construction:**
    1. With the keys and value retrieval mechanism ready, we construct the matrix, typically represented as an array of arrays, where the first row consists of the sorted keys serving as column headers, and each subsequent row represents an object from the input array.
    2. We iterate through the objects, retrieving the corresponding values for the keys and populating the matrix row by row, resulting in a complete matrix representation of the objects.
    
## Code Explanation:
1. The `isObject` function checks if a value is an object by ensuring it's not `null` and has a type of `'object'`.

2. The `getKeys` function recursively extracts keys from nested objects. It takes an object as input and returns an array of keys. It iterates through the object's properties and recursively calls itself for nested objects. If the value is not an object, it returns an empty key. It appends child keys with dot notation to handle nested objects.

3. The `keys` array is created by reducing the input array of objects (`arr`). The `reduce` method is used to iterate through each object in `arr` and accumulate all unique keys using the `getKeys` function. The resulting keys are converted to a set to remove duplicates and then sorted in alphabetical order.

4. The `getValue` function takes an object (`obj`) and a key path (`path`) and retrieves the corresponding value. It splits the key path into individual keys and iterates through them, checking if the value is an object at each level. If the value is found, it returns the final value. Otherwise, it returns an empty string.

5. The `matrix` variable is initialized with the first row as the `keys` array.

6. The `forEach` loop iterates through each object `in` arr. For each object, it maps the `keys` array and retrieves the corresponding values using the `getValue` function. The resulting array of values for each object is pushed as a new row to the `matrix`.

7. Finally, the `matrix` is returned as the output of the `jsonToMatrix` function.

# Code
```
/**
 * @param {Array} arr
 * @return {Matrix}
 */

const jsonToMatrix = function(arr) {
  // Helper function to check if a value is an object
  const isObject = x => (x !== null && typeof x === 'object');

  // Recursive function to extract keys from nested objects
  const getKeys = object => {
    if (!isObject(object)) return ['']; // If the value is not an object, return an empty key
    const result = [];
    for (const key of Object.keys(object)) {
      const childKeys = getKeys(object[key]); // Recursively get keys from nested objects
      for (const childKey of childKeys) {
        result.push(childKey ? `${key}.${childKey}` : key); // Append child keys with dot notation
      }
    }
    return result;
  };

  // Extract all unique keys from the array of objects and sort them
  const keys = Array.from(new Set(arr.reduce((acc, curr) => {
    getKeys(curr).forEach(k => acc.add(k));
    return acc;
  }, new Set()))).sort();

  // Retrieve the value for a given key path in an object
  const getValue = (obj, path) => {
    const paths = path.split('.');
    let i = 0;
    let value = obj;
    while (i < paths.length && isObject(value)) {
      value = value[paths[i++]];
    }
    // If the value is not found or is an object, return an empty string
    return i < paths.length || isObject(value) || value === undefined ? '' : value;
  };

  // Create the matrix representation with keys as the first row and values as subsequent rows
  const matrix = [keys];
  arr.forEach(obj => {
    matrix.push(keys.map(key => getValue(obj, key)));
  });

  return matrix;
};

```

### \u2705\u2705\uD83D\uDD1D\uD83D\uDD1DPlease Upvote if you find this helpful. \uD83D\uDD1D\uD83D\uDD1D\u2705\u2705