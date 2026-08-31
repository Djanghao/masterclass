# Official Solution

**Link:** [https://leetcode.com/problems/to-lower-case/solution/](https://leetcode.com/problems/to-lower-case/solution/)

---

[TOC]

## Solution

--- 

### Overview

One could solve the problem using built-in functions. 

<iframe src="https://leetcode.com/playground/DnS2zfu4/shared" frameBorder="0" width="100%" height="140" name="DnS2zfu4"></iframe>

Since these functions are well-known, most probably the interviewees will ask to implement them. In this article we will consider two solutions:

- Usage of hashmap `A --> a, B --> b, ..., Z --> z`.

- Implementation of Python function `lower`, which uses the fact that the ASCII code of a small letter is equal to the ASCII code of the corresponding capital letter + $$2^5$$.

<br /> 
<br />


---
### Approach 1: HashMap

**Algorithm**

- Build hashmap uppercase letter --> lowercase letter.

- Parse the string. If the current character is an uppercase letter, _i.e._ it's in the hashmap, then replace it with the hashmap value. Otherwise, keep it unchanged.

![fig](../Figures/709/hashmap.png)

**Implementation**

<iframe src="https://leetcode.com/playground/9xiafkkC/shared" frameBorder="0" width="100%" height="327" name="9xiafkkC"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N)$$ to parse the input string. 

* Space complexity: $$O(N)$$ to keep the output.
<br /> 
<br />


---
### Approach 2: Implementation of Python Function lower

Let's reproduce the [implementation of Python function `lower`](https://github.com/python/cpython/blob/e42b705188271da108de42b55d9344642170aa2b/Objects/unicodectype.c#L223).

For that, we need two functions.

The first one, `is_upper`, simply checks if the character is between `A` and `Z` characters.

The second one, `to_lower`, should convert the uppercase letter into the corresponding lowercase one. 

> It's based on the fact that the ASCII code of a small letter is equal to the ASCII code of the corresponding capital letter + $$2^5$$: `ord('a') = ord('A') + 32`, or `ord('a') = ord('A') | 32`.

![fig](../Figures/709/shift.png)

**Implementation**

!?!../Documents/709_LIS.json:1000,327!?!

<iframe src="https://leetcode.com/playground/7toqXCSd/shared" frameBorder="0" width="100%" height="344" name="7toqXCSd"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N)$$ to parse the input string. 

* Space complexity: $$O(N)$$ to keep the output.
<br /> 
<br />