# Official Solution

**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solution/](https://leetcode.com/problems/reverse-words-in-a-string/solution/)

---

[TOC]

## Solution

--- 

### Overview

Different interviewers would probably expect different approaches to this problem. The holy war question is whether to use or not use built-in methods. As you may notice, most of the design problems on Leetcode are voted down because of two main reasons:

1. There was no approach with built-in methods/data structures in the article.

2. One of the approaches in the article did contain built-in methods/data structures.

Seems like the community has no common opinion yet, and in practice that means an unpredictable interview experience for some sort of problem. 
 
Here we consider three different solutions for linear time and space complexity:

1. Use built-in split and reverse. Benefits: in-place in Python (in-place, but linear space complexity!) and the simplest one to write.  

2. The most straightforward one. Trim the whitespaces, reverse the whole string, and then reverse each word. Benefits: This could be done in place for the languages with mutable strings.

3. Two passes approach with a deque. Move along the string, word by word, and push each new word in front of the deque. Convert the deque back into a string. Benefits: two passes.

### Approach 1: Built-in Split + Reverse

![fig](../Figures/151/fun2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/77APCB6k/shared" frameBorder="0" width="100%" height="500" name="77APCB6k"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$, where N is the number of characters in the input string.

* Space complexity: $$\mathcal{O}(N)$$, to store the result of split by spaces.

<br /> 
<br />


---
### Approach 2: Reverse the Whole String and Then Reverse Each Word

The implementation of this approach will be different for Java/Python (= immutable strings) and C++ (= mutable strings). 

In the case of immutable strings, one has first to convert the string into a mutable data structure, and hence it makes sense to trim all spaces during that conversion. 

![fig](../Figures/151/reverse_whole2.png)

In the case of _mutable_ strings, there is no need to allocate an additional data structure, one could get all jobs done in-place. In such a case it makes sense to reverse words and trim spaces at the same time.

![fig](../Figures/151/mutable2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/XDT8DCHk/shared" frameBorder="0" width="100%" height="500" name="XDT8DCHk"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$.

* Space complexity: $$\mathcal{O}(N)$$.
<br /> 
<br />


---
### Approach 3: Deque of Words

![fig](../Figures/151/deque2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/Wd6LnDw4/shared" frameBorder="0" width="100%" height="500" name="Wd6LnDw4"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$.

* Space complexity: $$\mathcal{O}(N)$$.