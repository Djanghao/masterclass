# Official Solution

**Link:** [https://leetcode.com/problems/group-anagrams/solution/](https://leetcode.com/problems/group-anagrams/solution/)

---

[TOC]

## Video Solution

---

<div>
     <div class="video-container">
         <iframe src="https://player.vimeo.com/video/548141577?texttrack=en" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
     </div>
 </div>

 <div>&nbsp;
 </div>

## Solution Article

---

### Approach 1: Categorize by Sorted String

**Intuition**

Two strings are anagrams if and only if their sorted strings are equal.

**Algorithm**

Maintain a map `ans: {String -> List}` where each key $$\text{K}$$ is a sorted string, and each value is the list of strings from the initial input that when sorted, are equal to $$\text{K}$$.

In Java, we will store the key as a string, eg. `code`.  In Python, we will store the key as a hashable tuple, eg. `('c', 'o', 'd', 'e')`.

![Anagrams](../Figures/49_groupanagrams1.png)

<iframe src="https://leetcode.com/playground/cGLuE43i/shared" frameBorder="0" width="100%" height="500" name="cGLuE43i"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(NK \log K)$$, where $$N$$ is the length of `strs`, and $$K$$ is the maximum length of a string in `strs`.  The outer loop has complexity $$O(N)$$ as we iterate through each string.  Then, we sort each string in $$O(K \log K)$$ time.

* Space Complexity: $$O(NK)$$, the total information content stored in `ans`.
<br />
<br />

---

### Approach 2: Categorize by Count

**Intuition**

Two strings are anagrams if and only if their character counts (respective number of occurrences of each character) are the same.

**Algorithm**

We can transform each string $$\text{s}$$ into a character count, $$\text{count}$$, consisting of 26 non-negative integers representing the number of $$\text{a}$$'s, $$\text{b}$$'s, $$\text{c}$$'s, etc.  We use these counts as the basis for our hash map.

In Java, the hashable representation of our count will be a string delimited with '**#**' characters. For example, `abbccc` will be `#1#2#3#0#0#0...#0` where there are 26 entries total. In python, the representation will be a tuple of the counts. For example, `abbccc` will be `(1, 2, 3, 0, 0, ..., 0)`, where again there are 26 entries total.

![Anagrams](../Figures/49_groupanagrams2.png)

<iframe src="https://leetcode.com/playground/PX7vVSzL/shared" frameBorder="0" width="100%" height="500" name="PX7vVSzL"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(NK)$$, where $$N$$ is the length of `strs`, and $$K$$ is the maximum length of a string in `strs`. Counting each string is linear in the size of the string, and we count every string.

* Space Complexity: $$O(NK)$$, the total information content stored in `ans`.