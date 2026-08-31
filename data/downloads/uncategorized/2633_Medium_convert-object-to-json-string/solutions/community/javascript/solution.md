# Without using the built-in JSON.stringify method | Recursive solution

**Author:** _MohitBhatt_
**Votes:** 35
**Link:** [https://leetcode.com/problems/convert-object-to-json-string/solutions/3406872/](https://leetcode.com/problems/convert-object-to-json-string/solutions/3406872/)

---

# Intuition
The problem requires us to convert a given object to a valid JSON string without using the built-in JSON.stringify method. We can approach this problem recursively, by checking the type of each value in the object and converting it to the appropriate JSON string representation.

# Approach
In the function, we will handle four cases:

- If the object is null, return the string "null".
- If the object is a string, return the string value surrounded by double quotes.
- If the object is a number or a boolean, return its string representation using String(object).
- If the object is an array or an object, recursively convert each item or value to a JSON string and join them with commas, then surround the result with square or curly brackets to create the final JSON string.

# Complexity
- Time complexity:
The time complexity of our jsonStringify function depends on the size of the input object. Since we are recursively traversing the object and processing each value individually, the time complexity is proportional to the number of values in the object. Therefore, the time complexity is O(n), where n is the number of values in the input object.

- Space complexity:
The space complexity of our jsonStringify function also depends on the size of the input object, but this time on the depth of its nesting. Since we are using a recursive approach, the space complexity is proportional to the maximum depth of the object's nesting. Therefore, the space complexity is O(d), where d is the maximum depth of the input object.

# Code
```
var jsonStringify = function(object) {
  if (object === null) {
    return 'null';
  }
  if (typeof object === 'string') {
    // return the string value surrounded by double quotes.
    return '"' + object + '"';
  }
  if (typeof object === 'number' || typeof object === 'boolean') {
    // return its string representation.
    return String(object);
  }
  if (Array.isArray(object)) {
    // Recursively convert each item to a JSON string and join them with commas.
    const items = object.map(item => jsonStringify(item)).join(',');
    return '[' + items + ']';
  }
  // Recursively convert each value to a JSON string and pair it with the corresponding key.
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const items = keys.map(key => '"' + key + '":' + jsonStringify(object[key]));
    return '{' + items.join(',') + '}';
  }
};

```