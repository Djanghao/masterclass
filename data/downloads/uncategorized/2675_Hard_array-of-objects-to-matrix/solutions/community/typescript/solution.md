# Javascript / Typescript | Recursive | Detail Explanation | Beats 98.77% ✅ ✅ ✅ ✅

**Author:** kushhingol
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-of-objects-to-matrix/solutions/3558552/](https://leetcode.com/problems/array-of-objects-to-matrix/solutions/3558552/)

---

# \u2B06\uFE0F \u2B06\uFE0F \u2B06\uFE0F Please upvote if you like the detailed explanation \u2B06\uFE0F \u2B06\uFE0F \u2B06\uFE0F

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Looking at the problem statement, it was straight forward that we need recursion here
- So I decided to use closure and to create a separate recursive method which will help to keep our main method clean and solution oriented
- While parsing I understood that its important to maintain / store the parent key so that we can concatinate them while parsing its own children.
- But while following the above point, initially I made a mistake of managing it with closure (This was my biggest mistake \uD83E\uDD72)
- So while debugging, I passed the currentParentKey as a parameter in the closure method.
- The recusive method created a good object result which helped to understand which key contains which value and also helps to create any output structure as required.
```JS
e.g:
result = {
    "a.b": [1,2],
    "b.c": [2,1]
}
```
- Once validating the object, created the output structure using `structureOutput` method

# Approach
- Step 1: Create an empty object and array
- Step 2: Create a recursive method which will parse objects or array if any type other than object or array, the method will insert the value in the closure object
- Step 3: Step 2 will be repeated if the nested values are of type object or array
- Step 4: Once the object is created, which will be sole truth of storing the result, we can construct the result in any format we want

For me description follow `Intution` section

# Complexity
- Time complexity: O(nk)

Explanation

1. The function `manageObjectParsing` is called recursively for each object in the input array `arr`. For each object, it iterates over its keys and performs constant time operations. If the value associated with a key is an object, it recursively calls `manageObjectParsing` again. Therefore, the time complexity of `manageObjectParsing` can be considered as O(n), where n is the total number of objects and keys in the input array.

2. The function `jsonToMatrixParser` iterates over the input array `arr` and calls `manageObjectParsing` for each element. Since `manageObjectParsing` has a time complexity of O(n), the time complexity of `jsonToMatrixParser` is also O(n), where n is the length of `arr`.

3. The function `structureOutput` first sorts the column keys of the `result` object, which takes O(k log k) time, where k is the number of unique column keys. Then, it iterates over the input array `arr` and the sorted column keys to populate the `resultArray`. The inner loop performs constant time operations for each column key. Therefore, the time complexity of `structureOutput` can be considered as O(nk), where n is the length of `arr` and k is the number of unique column keys.

4. Finally, the `jsonToMatrix` function calls `jsonToMatrixParser` and `structureOutput`, both of which have linear time complexity. Therefore, the overall time complexity of the `jsonToMatrix` function can be considered as O(2nk) => O(nk), where n is the length of the input array `arr` and k is the number of unique column keys.

In summary, the time complexity of the given code is O(nk), where n is the length of the input array `arr` and k is the number of unique column keys in the resulting matrix.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(kn)

Explanation


1. The `result` object is used to store the intermediate results while parsing the input array `arr`. The space used by `result` depends on the number of unique column keys and the number of elements in each column. Therefore, the space complexity for `result` can be considered as O(kn), where k is the number of unique column keys and n is the length of `arr`.

2. The `resultArray` array is used to store the final output matrix. It contains the column keys as the first element and the corresponding values in subsequent rows. The size of `resultArray` is determined by the number of rows in `arr` and the number of unique column keys. Therefore, the space complexity for `resultArray` can also be considered as O(kn), where k is the number of unique column keys and n is the length of `arr`.

3. Other than `result` and `resultArray`, the code uses a few variables and function parameters that occupy constant space. These do not depend on the size of the input array and can be considered as O(1) space complexity.

In summary, the overall space complexity of the given code is O(kn), where k is the number of unique column keys and n is the length of the input array `arr`.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function jsonToMatrix(arr: any[]): (string | number | boolean | null)[] {
  const result = {};
  const resultArray = [];

  function getKey(currentParentKey: string, key: string) {
    return currentParentKey ? `${currentParentKey}.${key}` : key;
  }

  // recursive method to manage object parsing and to manage an object structure
  function manageObjectParsing(object: any, index, currentParentKey = "") {
    const keys = Object.keys(object);
    for (let key of keys) {
      const value = object[key];
      const isObjectType = value !== null && typeof value === "object";
      if (isObjectType) {
        const parentKey = getKey(currentParentKey, key);
        manageObjectParsing(value, index, parentKey);
      } else {
        const columnKey = currentParentKey ? `${currentParentKey}.${key}` : key;
        const row = result[columnKey] ?? [];
        row[index] = value;
        result[columnKey] = row;
      }
    }
  }

  // will call the recursive method for each object or array of the input
  function jsonToMatrixParser() {
    for (let i = 0; i < arr.length; i++) {
      manageObjectParsing(arr[i], i);
    }
  }

  // used to prepare output structure
  function structureOutput() {
    const colKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));
    //inserting first row with column in resultArray
    resultArray.push(colKeys);
    for (let i = 0; i < arr.length; i++) {
      const row = [];
      for (let columnKey of colKeys) {
        const isValue = result?.[columnKey]?.[i] !== undefined;
        const value = isValue ? result?.[columnKey]?.[i] : "";
        row.push(value);
      }
      resultArray.push(row);
    }
  }

  jsonToMatrixParser();
  structureOutput();
  return resultArray;
}
```