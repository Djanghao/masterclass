# Official Solution

**Link:** [https://leetcode.com/problems/convert-json-string-to-object/solution/](https://leetcode.com/problems/convert-json-string-to-object/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, you are tasked with writing a JavaScript function that parses a JSON string without using the built-in `JSON.parse` method. The provided string is guaranteed to be a valid JSON string containing strings, numbers, arrays, objects, booleans, and null values. The function should return the parsed JavaScript value or object corresponding to the given JSON string.

To tackle this challenge, you will need a deep understanding of string manipulation, control flow structures, and recursive functions. Since JSON is a recursive data structure (arrays or objects can contain other arrays or objects), your function will likely need to call itself to parse nested structures. Additionally, you'll need to handle various edge cases like negative numbers and floats, as well as reserved keywords like `true`, `false`, and `null`.

For a deeper understanding of the JSON format and its intricacies, you can refer to the [MDN Web Docs on JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON). 

### Use Cases of `JSON.parse()`

In this question, we are essentially implementing our own version of the built-in JavaScript function `JSON.parse()` from scratch. The `JSON.parse()` function is a crucial utility in JavaScript for converting JSON formatted strings into JavaScript objects. Given the prevalence of JSON in web and application development, understanding the inner workings of `JSON.parse()` can offer deeper insights into data handling in JavaScript.

1. **Parsing Server Responses**

   When making AJAX calls or interacting with APIs, the data sent back from the server is often in JSON format. To use this data in our JavaScript applications, we can utilize the `response.json()` method when working with the Fetch API. This method internally uses `JSON.parse()` to transform the response body into a JavaScript object.

   > **Note:** Always ensure the received data is in valid JSON format to avoid errors during parsing.

    ```javascript
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
    ```

2. **Local Storage Data Retrieval**

   Web browsers provide local storage capabilities where data is stored as strings. When storing objects or arrays, they are first converted to JSON strings. When retrieving this data, `JSON.parse()` can be used to get the data back in its original format.

    ```javascript
    const user = {
        name: 'John Doe',
        age: 30
    };

    // Storing data
    localStorage.setItem('user', JSON.stringify(user));

    // Retrieving data
    const retrievedData = localStorage.getItem('user');
    const parsedUser = JSON.parse(retrievedData);
    console.log(parsedUser);
    ```

3. **Configuration Files Reading**

   Many applications use configuration files in JSON format. To apply these configurations in a JavaScript environment, the file contents are parsed using `JSON.parse()`.

    ```javascript
    const fs = require('fs');

    fs.readFile('/path/to/config.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const config = JSON.parse(data);
        console.log(config);
    });
    ```

---

### Approach 1: Recursive Descent Parsing

#### Intuition
In this problem, our goal is to implement our own version of the built-in JavaScript method, `JSON.parse()`. 

Our custom implementation will employ a recursive descent parsing technique to navigate and interpret the structure of the given JSON string. This approach will allow us to delve deeper into nested objects and arrays, and convert them into their respective JavaScript representations.

#### Algorithm
1. Initialize a pointer `i` to traverse the string.
2. Begin with the `parseValue` function that will act as a dispatcher. Depending on the current character, it will decide which type of value needs to be parsed (e.g., object, array, string, number, or keyword) and potentially call itself or other parsing functions recursively.
3. For parsing numbers:
    - Check for an optional negative sign.
    - Parse digits for the integer part.
    - If a decimal point is encountered, parse digits for the fractional part.
    - Convert the substring corresponding to the number into a JavaScript number using the built-in `Number` constructor.
4. For parsing strings:
    - Look for the starting and ending double quotes. Extract the value in between as the string.
5. For parsing objects:
    - Look for opening and closing curly braces.
    - Within the braces, strings followed by colons indicate keys, and the values after the colons can be any valid JSON values (object, array, string, number, or keyword).
    - Repeat for each key-value pair and add them to the resultant object.
6. For parsing arrays:
    - Look for opening and closing square brackets.
    - Values within the brackets are separated by commas and can be any valid JSON values.
    - Repeat for each value and add them to the resultant array.
7. For parsing keywords (`true`, `false`, and `null`):
    - Match the exact keyword and return the corresponding JavaScript value.
8. As the parsing progresses, move the pointer `i` accordingly to keep track of the current position in the string.
9. If all operations succeed, return the parsed JavaScript value or object. If there's a mismatch or unexpected character, throw an appropriate error.

By employing recursive descent parsing, this approach elegantly handles nested structures and ensures accurate conversion of the JSON string to its JavaScript counterpart.

#### Implementation

#### Implementation 1

<iframe src="https://leetcode.com/playground/k3f94zsU/shared" frameBorder="0" width="100%" height="500" name="k3f94zsU"></iframe>

#### Implementation 2: Object-Oriented Recursive Descent Parsing

<iframe src="https://leetcode.com/playground/HzxVNT5S/shared" frameBorder="0" width="100%" height="500" name="HzxVNT5S"></iframe>

#### Complexity Analysis

**Time complexity**: $O(N)$, where $N$ is the length of the input string `str`. The parsing process involves a single traversal of the string to convert it into its corresponding JavaScript object, array, or primitive value. Every character in the string is visited and processed exactly once, making the time complexity linear with respect to the length of the string.

**Space complexity**: $O(N + M)$, where $N$ is the length of the input string and $M$ is the maximum depth of nesting in the JSON structure. The constructed JavaScript value (be it an object, array, or primitive) will require space proportional to the size of the input string, which contributes to the $O(N)$ term. The recursive descent parsing approach can lead to a depth of recursion (or call stack depth) proportional to the maximum depth of nesting in the JSON structure, contributing an $O(M)$ term.

Note: In deeply nested JSON structures, the depth $M$ can become a significant factor. In most practical scenarios, however, $M$ is much smaller than $N$.

### Approach 2: Iterative Parsing with Stack

#### Intuition
In this problem, our goal remains to implement our own version of the built-in JavaScript method, `JSON.parse()`. Iterative parsing with a stack is another technique to interpret and convert a JSON string into native JavaScript objects and values. This approach is particularly useful when dealing with deeply nested structures which could otherwise result in a stack overflow when using a recursive approach.

By using a stack, we can keep track of the depth and type (array or object) of each structure we encounter, allowing us to maintain the state and hierarchy of the parsed data. The iterative approach, while more verbose than its recursive counterpart, can be more efficient for handling large or deeply nested JSON strings.

#### Algorithm
1. Initialize a pointer `i` to traverse the string.
2. Define a stack to maintain the hierarchy of nested structures.
3. Use a `currentStruct` variable to keep track of the current structure (object or array) being parsed and a `currentKey` variable for object keys.
4. Iterate through the string character by character:
   - If the character is a comma, skip it.
   - If the character marks the beginning of an array (`[`) or object (`{`), push the current structure to the stack, create a new structure, and update `currentStruct` to this new structure.
   - If the character marks the end of an array (`]`) or object (`}`), pop the previous structure from the stack and set it as the `currentStruct`.
   - For strings, look for double quotes and extract the value between them.
   - For numbers, capture digits, handling negative signs and decimal points.
   - For keywords (`true`, `false`, and `null`), match the exact keyword and assign the corresponding JavaScript value.
   - If the character after a parsed value is a colon, it indicates that the parsed value was a key for an object.
   - Update the current structure (`currentStruct`) with the parsed values or keys.
5. Return the root structure after processing the entire string.

#### Implementation

<iframe src="https://leetcode.com/playground/42juXwHu/shared" frameBorder="0" width="100%" height="500" name="42juXwHu"></iframe>

#### Complexity Analysis

**Time complexity**: $O(N)$, where $N$ is the length of the input string `str`. Every character in the string is visited and processed exactly once, making the time complexity linear with respect to the length of the string.

**Space complexity**: $O(N + M)$, where $N$ is the length of the input string and $M$ is the maximum depth of nesting in the JSON structure. The constructed JavaScript value (be it an object, array, or primitive) will often require space proportional to the size of the input string, which contributes to the $O(N)$ term. The stack used in the parsing process can grow up to a size of $M$, which is the maximum depth of nesting. In most cases, $M$ will be much smaller than $N$, but in the worst-case scenario (deeply nested structures), $M$ can be a significant contributor.


### Security Considerations

Ensuring the security of a custom JSON parsing function is paramount to prevent potential vulnerabilities. While the problem statement ensures a valid JSON input string, in real-world applications, several security considerations come into play:

- **Input Validation and Escaping**: Always validate incoming JSON strings against the expected JSON format and escape special characters. This ensures that they are not misinterpreted by the parser or any subsequent processing of the parsed data, thus preventing potential injection attacks.

- **Recursion Depth**: It's crucial to enforce a limit on the maximum recursion depth when parsing nested JSON structures. Malicious actors could craft deeply nested JSON structures intended to cause a stack overflow in parsers that don't have a recursion depth limit. It's important to anticipate such scenarios and implement protective measures.

- **Third-party Libraries**: If you opt for third-party libraries to assist in JSON parsing, ensure they are trustworthy, well-maintained, and frequently updated. Libraries with known vulnerabilities can introduce security risks.

## Interview Tips:

* Can you explain the structure of a JSON string?
   * A JSON (JavaScript Object Notation) string is a lightweight data-interchange format that is easy for humans to read and write. It is easy for machines to parse and generate. A JSON can contain objects (unordered sets of key-value pairs), arrays (ordered lists of values), numbers, strings, booleans (`true` or `false`), and `null`.

* What challenges can arise when parsing a JSON string without using built-in functions?
   * Parsing a JSON string manually can be challenging due to the nested structures of objects and arrays. Care must be taken to handle the different data types correctly, maintain the hierarchy of nested structures, and manage potential edge cases.

* How do you differentiate between different data types in a JSON string, such as objects, arrays, numbers, and strings?
   * Differentiating between data types in a JSON string involves recognizing specific characters or sequences. Objects start and end with `{` and `}`, arrays with `[` and `]`, strings are enclosed in double quotes, numbers are digits that may include a decimal point or negative sign, and booleans are represented by the keywords `true` and `false`.

* Why might the recursive descent parsing technique be suitable for this problem?
   * Recursive descent parsing is a top-down parsing technique that starts with the highest-level syntax rule and recursively breaks down the input into its components. Given that a JSON structure is inherently hierarchical with potential nested objects and arrays, recursive descent parsing is a natural fit for such structures. It allows for a straightforward approach to break down and process the nested components of the JSON string.

* How do you handle potential edge cases or malformed JSON strings?
   * For this specific problem, we can assume the input string is a valid JSON string. However, in a real-world scenario, it's essential to handle unexpected characters, unmatched braces or brackets, and other malformed structures by throwing appropriate errors or providing meaningful feedback to the user.