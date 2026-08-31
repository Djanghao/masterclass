# Official Solution

**Link:** [https://leetcode.com/problems/length-of-last-word/solution/](https://leetcode.com/problems/length-of-last-word/solution/)

---

[TOC]

## Solution

---
### Approach 1: String Index Manipulation

**Intuition**

There is no doubt that this is an easy problem. Yet, it could be a good exercise for one to practice string manipulation, which is definitely common during interviews.

In this article, we start with some approaches that manipulate string indexes, then we look at how to use the built-in string functions to solve the problem.

>The intuition is simple, as it pretty much given away from the name of the problem, _i.e._ first we **locate** the last word, then we **count** the length of the last word.

One should pay attention to some edge cases though:

- The input string could be empty.
<br>

- There could be some trailing spaces in the input string, _e.g._ `hello <space>`.
<br/>

- There might only be one word in the given string.

The challenge is to build a *concise* yet *comprehensive* solution that could handle all above cases.

**Algorithm**

One can break down the solution into two steps:

- First, we would try to locate the last word, starting from the end of the string. We iterate the string in reverse order, consuming the empty spaces. When we first come across a non-space character, we know that we are at the last character of the last word.
<br/>
- Second, once we locate the last word. We count its length, starting from its last character. Again, we could use a loop here.

![two loop](../Figures/58/58_two_loops.png)

Here is what it looks like, a solution with **two loops**:

<iframe src="https://leetcode.com/playground/i2yFApEN/shared" frameBorder="0" width="100%" height="361" name="i2yFApEN"></iframe>



**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the length of the input string.

    In the worst case, the input string might contain only a single word, which implies that we would need to iterate through the entire string to obtain the result.

- Space Complexity: $$\mathcal{O}(1)$$, only constant memory is consumed, regardless the input.
<br/>
<br/>

---
### Approach 2: One-loop Iteration

**Intuition**

In the above approach, we applied two loops. One is used to locate the last word, and the other one to calculate its length.

>We could actually complete the same tasks within a single loop.

The trick is that we could define a condition, _i.e._ the precise moment that we should start to count the length of the word.

![one loop](../Figures/58/58_one_loop.png)

In the following animation, we demonstrate how the above algorithm works.

!?!../Documents/58_LIS.json:1000,219!?!


**Algorithm**

Here are some sample implementations with comments.

<iframe src="https://leetcode.com/playground/LDU34sxB/shared" frameBorder="0" width="100%" height="361" name="LDU34sxB"></iframe>

**Complexity**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the length of the input string.

    This approach has the same time complexity as the previous approach. The only difference is that we combined two loops into one.

- Space Complexity: $$\mathcal{O}(1)$$, again a constant memory is consumed, regardless the input.
<br/>
<br/>

---
### Approach 3: Built-in String Functions

**Intuition**

As we mentioned at the beginning of the article, we could also resort to the **_built-in_** functions of the String data structure, in order to solve the problem.

In fact, String is such an important data type in many programming languages, that often it comes with a rich set of _built-in_ functions that can help one to accomplish many common tasks, such as trimming the empty spaces in the string _etc._

It would be really helpful to get proficient with those built-in functions.

**Algorithm**

In different programming languages, the sets of built-in functions associated with String are different though. In this section, we showcase some examples.

In Python, we would use the following built-in functions to accomplish the tasks:

- `str.isspace()`: this function determines if the `str` contains only spaces.
<br/>

- `str.split(delimiter)`:  this function could split the input string into several substrings, based on the given _delimiter_ (by default, the delimiter is space).

One can find the list of built-in functions in Python from the [official documentation](https://docs.python.org/3/library/stdtypes.html#str).

In Java, here is a list of built-in functions that we would use:

- `String.trim()`: this function returns a copy of the string, with the leading and trailing whitespaces trimmed.
<br/>

- `String.length()`: this function returns the length of the string.
<br/>

- `String.lastIndexOf(char)`: this function returns the index of the last occurrence of the given character.

Again, one can find more details about the APIs for the String data structure in Java, from the [official documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html).


<iframe src="https://leetcode.com/playground/RNFz7hCf/shared" frameBorder="0" width="100%" height="310" name="RNFz7hCf"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the length of the input string.

    Since we use some built-in function from the String data type, we should look into the complexity of each built-in function that we used, in order to obtain the overall time complexity of our algorithm.
  
    It would be safe to assume the time complexity of the methods such as `str.split()` and `String.lastIndexOf()` to be $$\mathcal{O}(N)$$, since in the worst case we would need to scan the entire string for both methods.

- Space Complexity: $$\mathcal{O}(N)$$. Again, we should look into the built-in functions that we used in the algorithm.

    In the Java implementation, we used the function `String.trim()` which returns a _**copy**_ of the input string without leading and trailing whitespace. Therefore, we would need $$\mathcal{O}(N)$$ space for our algorithm to hold this copy.

    In the Python implementation, we used `str.split()`, which returns a list of **_substrings_** that are separated by the space delimiter. As a result, we would need $$\mathcal{O}(N)$$ space for our algorithm to store this list.