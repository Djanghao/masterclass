# Official Solution

**Link:** [https://leetcode.com/problems/convert-object-to-json-string/solution/](https://leetcode.com/problems/convert-object-to-json-string/solution/)

---

[TOC]


## Overview:
The problem requires us to convert an object into a valid JSON string representation. We are given an object that may contain strings, integers, arrays, objects, booleans, and null values. We need to convert this object into a JSON string without using the built-in `JSON.stringify` method. The resulting string should have the same key order as returned by `Object.keys()` and should not contain extra spaces.

A valid JSON string follow some rules that are given below: 
* All property names (keys) must be enclosed in double quotes.
* String values must be enclosed in double quotes.
* Numeric values can be written without quotes.
* Boolean values and the null value are written without quotes, using the keywords `true`, `false`, and `null`, respectively.
* Arrays are enclosed in square brackets `[]`, and values inside the array are separated by commas.
* Objects are enclosed in curly braces `{}`, and key-value pairs inside the object are separated by commas. The key and value are separated by a colon `:`.
* For example:
    ```js
    {
    "name": "Phantom",
    "age": 20,
    "hobbies": ["chess", "sitting_idle"],
    "address": {
        "street": "123 Main St",
        "city": "Mumbattan"
    },
    "active": true,
    "score": null
    }
    ```
> Note: The JSON format does not allow trailing commas, so make sure to remove any unnecessary commas when constructing a JSON string representation.
---

## Use Cases:
* **API Data Serialization:** When building web applications that communicate with APIs, objects often need to be converted to JSON strings before sending them as data in **HTTP** requests. This allows the data to be properly serialized and transmitted in a format that APIs understand.
    ```js
    // Creating an object to be sent as data in an HTTP request
    const data = { name: 'Racoon', age: 9, email: 'racoon@example.com' };

    // Converting the object to a JSON string
    const jsonData = JSON.stringify(data);
    // jsonData: '{"name":"Racoon","age":9,"email":"racoon@example.com"}'

    // Sending an HTTP POST request with the JSON data as the request body
    fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => response.json())
      .then(responseData => {
        // Handling the response data received from the server
        console.log(responseData);
      })
      .catch(error => {
        // Handling any errors that occurred during the request
        console.error(error);
      });
    ```

* **Local Storage:** In web development, the **localStorage** or **sessionStorage** APIs are commonly used to store data locally within the browser. Since these APIs only accept string values, converting objects to JSON strings is necessary to store complex data structures and retrieve them later.
    ```js
    const user = { name: 'RocketRacoon', id: 8913, isAdmin: false };
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);

    // Retrieve the user from local storage and parse it back to an object
    const storedUser = localStorage.getItem('user');
    const parsedUser = JSON.parse(storedUser);
    console.log(parsedUser.name); // Output: "RocketRacoon"
    ```

* **Logging:** When logging data or generating log files, converting objects to JSON strings provides a structured and readable format for storing logs. It allows for easy analysis, searching, and processing of log data.
    ```js
    const logData = { timestamp: new Date(), level: 'info', message: 'User logged in' };
    const jsonLogData = JSON.stringify(logData);

    // Store the jsonLogData in log files or send it to a logging service
    // ...
    ```

* **Configuration Files:** JSON is commonly used for configuration files in various applications. Converting objects to JSON strings allows for easy storage and retrieval of configuration settings, enabling customization and flexibility in application behavior.
    ```js
    const config = { apiUrl: 'https://api.example.com', maxRetries: 3, timeout: 5000 };
    const jsonConfig = JSON.stringify(config);

    // Save the jsonConfig to a configuration file
    // ...
    ```

---

## Approach 1: Using JSON-like String Concatenation
### Intuition:
* We can manually build a valid JSON string representation by iterating over the object's properties, handling each value based on its type, and concatenating the strings together. 

### Algorithm:
* First we need to check if the input object is `null` and if yes then return the string `null`. This is because in JavaScript, the `typeof null` returns `object` .
* Next, we check if the object is an array using the `Array.isArray()` method. It takes one argument and returns true if the argument is an array.
  * If it is an array, iterate over each element and recursively call the `jsonStringify` function on each element to properly handle nested objects or arrays within the array.
  * The resulting JSON string representation of each element is stored in the elements array.
  * Finally, we join the elements together with commas`(',')` using the `join()` method and enclosed in square brackets`('[]')` to represent the array in JSON.
* Now, If the object is not an array but an object with key-value pairs, it iterates over the object's keys using `Object.keys()`.
  * For each key, we recursively call the `jsonStringify` function on the corresponding value and store the resulting JSON string representation in the `keyValuePairs` array.
  * The `keyValuePairs` array contains strings representing each key-value pair.
  * Finally, the key-value pairs are joined together with commas`(',')` using the `join()` method and enclosed in curly braces to represent the object in JSON.
* If the object is a string, we will wrap the string value in double quotes to represent it properly in JSON.
* For other types of values (numbers, booleans), they are converted to strings using the `String()` function.
* In the end the resulting JSON string representation is returned.

### Implementation:

<iframe src="https://leetcode.com/playground/Vfu45QZx/shared" frameBorder="0" width="100%" height="497" name="Vfu45QZx"></iframe>

### Complexity Analysis:

**Time Complexity:**
* In the worst case, when the object has nested structures, such as nested objects or arrays, the time complexity is `O(n)`, where `n` represents the total number of elements in the object.
* Recursive calls are made for nested values, but the total number of iterations remains proportional to the size of the input object.

**Space Complexity:**
* The space complexity is also `O(n)` in the worst case, where n is the total number of elements in the object.
* For each level of recursion, new arrays (`elements` and `keyValuePairs`) are created to store the intermediate JSON string representations.
* Thus the space required grows linearly with the depth of the recursion and the number of elements in the object.

---

## Approach 2: Using Switch Case
### Intuition: 
We can use the same intuition as explained in the earlier approach but instead of `if-else` statements we can use `switch case` statements.

### Algorithm: 
* We can use switch statement in `jsonStringify` function to handle different value types based on their typeof.
* For the case of `object`, it checks if the object is an array using `Array.isArray(object)`.
  * If it is an array, it recursively calls `jsonStringify` on each element of the array using the `map()` method.
  * It then joins the resulting array of string representations with commas and encloses it in square brackets to form the JSON array representation.
  * Returns the final string representation.
  * If it is not an array but a non-null object, it retrieves the keys of the object using `Object.keys(object)`.
  * It then maps over each key to format key-value pairs as `"<key>": <value>"`.
  * The key-value pairs are joined with commas and enclosed in curly braces to create the JSON object representation.
  * Returns the final string representation.
  * If the object is `null`, it returns the string `"null"`.
* For the value types of boolean, number, and string, they are directly converted to their respective string representations.
* For any other value type, it returns an empty string.
> Funfact: Switch case statement have fallthrough mechanism in them. you can read them more in this [Wikipedia article](https://en.wikipedia.org/wiki/Switch_statement#Fallthrough)

### Implementation: 

<iframe src="https://leetcode.com/playground/YFZjvbDa/shared" frameBorder="0" width="100%" height="497" name="YFZjvbDa"></iframe>

### Complexity Analysis:

**Time Complexity:**
* In the worst case, when the object has nested structures, such as nested objects or arrays, the time complexity is `O(n)`, where `n` represents the total number of elements in the object.
* Recursive calls are made for nested values, but the total number of iterations remains proportional to the size of the input object.

**Space Complexity:**
* The space complexity is also `O(n)` in the worst case, where `n` is the total number of elements in the object.
* For each level of recursion, new arrays (`elements` and `keyValuePairs`) are created to store the intermediate JSON string representations.
* Thus the space required grows linearly with the depth of the recursion and the number of elements in the object.

---

## Approach 3: Using Ternary Operator
### Intuition:
We can use a **ternary operator** to do the same thing that we can do with **if-else** and **switch case** statements.

### Algorithm:
* If the `object` is of type `string`, it is a primitive string value. In this case, we wrap the string with double quotes `("")` and return it.
* If the `object` is `null` or its type is not `'object'`, it is either a primitive value (number, boolean, etc.) or `null` itself. In both cases, the we return the `object` as is.
* If the `object` is an array then we use `reduce()` method to iterate over each element in the array and recursively calls the `jsonStringify()` function on each element.
  * The accumulator `(acc)` starts as an empty string `('')`.
  * For each element `(x)` in the array, we concatenate the accumulated string `(acc)` with the result of recursively calling `jsonStringify(x)`, followed by a comma `(,)`.
  * The `slice(0, -1)` method is used to remove the trailing comma from the accumulated string.
  * The resulting string is wrapped in square brackets `([])` to form the JSON array representation.
* If the `object` is an object then we use `reduce()` method along with `Object.entries()` to iterate over the key-value pairs of the object.
  * The accumulator `(acc)` starts as an empty string `('')`.
  * For each key-value pair `(x)` in the object, we concatenate the accumulated string `(acc)` with the result of recursively calling `jsonStringify(x[0])` (for the key) and `jsonStringify(x[1])` (for the value), separated by a colon `(:)`, followed by a comma `(,)`.
  * The `slice(0, -1)` method is used to remove the trailing comma from the accumulated string.
  * The resulting string is wrapped in curly braces `({})` to form the JSON object representation.

> #### Note:
>* `reduce()` method is used for **Array concatenation** and **Object concatenation**. 
>* The `reduce()` method takes a `callback` function as its first argument and an optional `initial value` as the second argument like this "`array.reduce(callback, initialValue)`".
>* The `reduce()` method executes the `callback` function for each element in the array, passing the current element and the accumulated value. The result of each callback execution is then used as the accumulated value for the next iteration. The final value of the accumulator is returned as the result of the `reduce()` method.
>* Also, it's worth noting that nesting ternaries (conditional expressions) can reduce code readability. It is often recommended to use explicit `if-else` statements or separate the logic into individual conditional blocks for better code clarity and maintainability.

### Implementation:

<iframe src="https://leetcode.com/playground/bSRwKSTg/shared" frameBorder="0" width="100%" height="225" name="bSRwKSTg"></iframe>


### Complexity Analysis:

**Time Complexity:** 
* In the worst case, when the object has deeply nested structures, the time complexity can be considered `O(n)`, where `n` is the total number of elements in the object.

**Space Complexity:** 
* In the worst case, if the object has deeply nested structures, the space complexity can be considered `O(d)`, where `d` is the maximum depth of recursion.

---

## Interview Tips:
* Why would you need to convert an object to a JSON string representation and What is the purpose of the `JSON.stringify()`?
  * Converting an object to a JSON string representation allows you to serialize the object and send it over a network or store it in a file.
  * The purpose of `JSON.stringify()` method in JavaScript is that it converts a JavaScript object to a JSON string representation.

* What are some potential challenges or edge cases to consider when converting an object to a JSON string representation?
Some challenges and edge cases to consider include:
  * Handling special characters or escape sequences within string values to ensure valid JSON syntax.
  * Handling non-serializable values, such as functions or undefined, and deciding how to represent them in the JSON string as when converting a JSON string back to an object, if you have used non-JSON serializable constructs (such as functions or undefined), they will not be preserved in the resulting object. It's advisable to use JSON serializable constructs to ensure accurate serialization and deserialization processes.
  * Preserving the precision of numeric values, especially when dealing with large numbers or floating-point values.
  * Handling sparse arrays and deciding whether to represent missing elements as null or exclude them from the JSON string entirely.

* How would you handle circular references or cyclic dependencies when converting an object to a JSON string representation?
  * Circular references occur when there is a loop in the object structure, causing infinite recursion during conversion. To handle circular references, you can track visited objects using a set or a map to ensure that you don't revisit an object during recursion. 
  * If a circular reference is detected, you can handle it by representing the reference with a placeholder value or by omitting the circular reference from the final JSON string.
---