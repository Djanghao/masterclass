# JavaScript Solutions & Notes from a Bootcamp Teacher

**Author:** 149203
**Votes:** 79
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/1996783/](https://leetcode.com/problems/number-of-1-bits/solutions/1996783/)

---

# **Hi, I'm Mike and I'm the Lead Instructor at [10x Code Camp](https://www.10xcodecamp.com/)**.

I'm going to present as many reasonable solutions as possible. I will first write pseudo-code that will work for most languages. I will include links to relevant documentation. Then I will present the code for each solution.

Note, I will not list the Runtime or Memory Usage percentages. Unfortunately, these can be inaccurate and lead learners down the wrong path. For example, you may submit a less optimal solution that gets a higher score than a more optimal one. Then you may think the less optimal one is better. LeetCode's Runtime and Memory Usage are unpredictable and cannot be relied upon to find the most optimal solution. To test this, submit a solution and note its percentages. Then submit it again. You will frequently see discrepancies.

Instead, I will display Grades for each solution. These are A through D. A is the highest grade. D is the lowest. These grades are based on Big O notation and best practices in real-world programming. I will sacrifice a millisecond of speed for a good variable name. This is a much better practice than giving variables hard-to-understand 1-letter names or cramming everything into 1 line. I'll include comments too. I've interviewed and hired many developers, and everything I teach is what I like to see in potential programmers. **Please upvote if you like this style and would like me to continue.**

# **Loop through a string | Grade: D**
* Convert the 32-bit unsigned integer to a string.
* Note: we'll have to pass a **[radix parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#parameters)** of 2 to keep it in **[base 2](https://www.expii.com/t/base-binary-numbers-9192)**.
* Create a `count` variable with a value of 0.
* Loop through every character.
* Increase your count by 1 every time you encounter a 1 in the string.
* Return your count.

```
var hammingWeight = function(int) {
    const str = int.toString(2); // pass a radix parameter of 2 to keep it in base 2.
    let count = 0;
    for (let char of str) {
        if (char === "1") count++;
    }
    return count;    
};
```

# **Filter an array of strings | Grade: D**
- Convert the 32-bit unsigned integer to a string.
- * Note: we'll have to pass a **[radix parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#parameters)** of 2 to keep it in **[base 2](https://www.expii.com/t/base-binary-numbers-9192)**.
- Create an array of each character (using `split`).
- Filter the array for 1s.
- Return the length of the filtered array.

```
var hammingWeight = function(int) {
    return int.toString(2)
              .split("")
              .filter(char => char === "1")
              .length;    
};
```

# **String matching | Grade: C**
- Convert the 32-bit unsigned integer to a string.
- Note: we'll have to pass a **[radix parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#parameters)** of 2 to keep it in **[base 2](https://www.expii.com/t/base-binary-numbers-9192)**.
- Use Regex `match` to return an array of all matches for the number 1 (`/1/g`).
- Return the length of this array.
- Remember to handle no matches (with a **[conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)** or **[optional chaining: `?.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)**).

```
var hammingWeight = function(int) {
    const str = int.toString(2)
    return str === '0' ? 0 : (str.match(/1/g)).length; 
};
```


# **Convert to string, replace zeroes | Grade: C**
- Convert the 32-bit unsigned integer to a string.
- Note: we'll have to pass a **[radix parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#parameters)** of 2 to keep it in **[base 2](https://www.expii.com/t/base-binary-numbers-9192)**.
- Remove the zeroes. Replace each zero with an empty string.
- Return the length of the resulting string.

```
var hammingWeight = function(int) {
    return int.toString(2).replaceAll("0", "").length;    
};
```


# **While loop with integer manipulation | Grade: A**
* Converting to strings and arrays is slow. We can just manipulate the bits!
* Create a `count` variable with a value of 0.
* While the integer is not `0`
	* Check if the last bit is `1`. We can use a **[bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)** to check for **[an odd bit (1) or an even bit (0)](https://catonmat.net/low-level-bit-hacks#bithack1)**.
	* If so, add it to the count.
	* Chop off the last (farthest right) bit of the integer. JavaScript has **[3 bitwise shift operators](http://speakingjs.com/es5/ch11.html#_bitwise_shift_operators)**.
	* We can use **[unsigned right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)**: `int = int >>> 1` or **[unsigned right shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)**: `int >>>= 1`
* Return the count

```
var hammingWeight = function(int) {
    let count = 0;
    while (int !== 0) {
        const bitComparison = int & 1; // 1 & 1 will return 1. 0 & 1 will return 0.
        if (bitComparison === 1) count++;
        int >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
    }  
    return count;
};
```


# **If this function is called many times, how would you optimize it?**

In theory, you could create a dictionary (also called a lookup table - in JavaScript this is an object) with all 32-bit unsigned integers as keys and all their Hamming Weights as their respective values.

You could create this programmatically once and then all future lookups would be as fast as possible.

From the Wikipedia article on **[Hamming Weight](https://en.wikipedia.org/wiki/Hamming_weight)**:

*If greater memory usage is allowed, we can calculate the Hamming weight faster than the above methods. With unlimited memory, we could simply create a large lookup table of the Hamming weight of every integer.*

The Wikipedia article also illustrates how you could compute the Hamming weight of every 32-bit integer if you have a dictionary (lookup table) of every 16-bit integer. So you could:

- Have a lookup table of all 32-bit integers (fastest, but more needs more storage for a larger table).
- Or, have a lookup table of all 16-bit integers (a little slower, but only needs half the storage).