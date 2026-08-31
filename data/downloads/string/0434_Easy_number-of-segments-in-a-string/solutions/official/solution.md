# Official Solution

**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solution/](https://leetcode.com/problems/number-of-segments-in-a-string/solution/)

---

[TOC]

### Approach #1 Using Language Builtins [Accepted]

**Intuition**

In a situation where raw efficiency is less important than code legibility,
it is likely better to use language-idiomatic builtin functions to solve this
problem.

**Algorithm**

There are a few corner cases that you can get snagged on in this problem, at
least in Java. First, one or more leading spaces will cause `split` to deduce
an erroneous `""` token at the beginning of the string, so we use the builtin
`trim` method to remove leading and trailing spaces. Then, if the resulting
string is the empty string, then we can simply output `0`. This is necessary due
to the following behavior of the `split` method:

```java
String[] tokens = "".split("\\s++");
tokens.length; // 1
tokens[0]; // ""
```

If we reach the final return statement, we `split` the trimmed string on
sequences of one or more whitespace characters (`split` can take a regular
expression) and return the length of the resulting array.

The Python solution is trivially short because Python's `split` has a lot of
default behavior that makes it perfect for this sort of problem. Notably, it
returns an empty list when `split`ting an empty string, it splits on
whitespace by default, and it implicitly `trim`s (`strip`s, in Python lingo)
the string beforehand.

<iframe src="https://leetcode.com/playground/9TKJamrA/shared" frameBorder="0" width="100%" height="208" name="9TKJamrA"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(n)$$

    All builtin language functionality used here (in both the Java and Python
    examples) runs in either $$\mathcal{O}(n)$$ or $$\mathcal{O}(1)$$ time, so the entire algorithm
    runs in linear time.

* Space complexity : $$\mathcal{O}(n)$$

    `split` (in both languages) returns an array/list of $$\mathcal{O}(n)$$ length, so
    the algorithm uses linear additional space.

---

### Approach #2 In-place [Accepted]

**Intuition**

If we cannot afford to allocate linear additional space, a fairly simple
algorithm can deduce the number of segments in linear time and constant
space.

**Algorithm**

To count the number of segments, it is equivalent to count the number of
string indices at which a segment begins. Therefore, by formally defining the
characteristics of such an index, we can simply iterate over the string and
test each index in turn. Such a definition is as follows: a string index
begins a segment if it is preceded by whitespace (or is the first index) and
is not whitespace itself, which can be checked in constant time. Finally, we
simply return the number of indices for which the condition is satisfied.

<iframe src="https://leetcode.com/playground/Vm2hu6P3/shared" frameBorder="0" width="100%" height="276" name="Vm2hu6P3"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(n)$$

    We do a constant time check for each of the string's $$n$$ indices, so the
    runtime is overall linear.

* Space complexity : $$\mathcal{O}(1)$$

    There are only a few integers allocated, so the memory footprint is
    constant.