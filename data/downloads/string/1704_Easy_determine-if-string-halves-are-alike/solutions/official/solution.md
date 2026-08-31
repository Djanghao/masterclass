# Official Solution

**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solution/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solution/)

---

[TOC]

## Solution

---

#### Overview

The key to solving this problem is to find out what "Alike" means. Once you know that, the problem becomes a basic training of iteration and counting.

Below, three approaches are introduced. 

The first one *Approach 1: Count Vowels* is a basic solution to the problem, and the following *Approach 2: Count Vowels (In Place)* and *Approach 3: Count Vowels (In Place + Function)* are two progressive improvements to the first approach.

---

#### Approach 1: Count Vowels

**Intuition**

Let's check the problem in detail.

First, we are given a string `s`, and we need to:

> Split this string into two halves of equal lengths, and let `a` be the first half and `b` be the second half.

This is easy. We can use some built-in methods such as `substring` to extract `a` and `b`.

Second, we need to check:

> Two strings are alike if they have the same number of vowels

To achieve this, we need to iterate `a` and `b` and count the number of vowels. 

If the numbers of vowels are equal, then they are alike.

![Figure 1.1](../Documents/5637/5637_1_1.drawio.svg)

**Algorithm**

*Step 1:* Initialize substring `a` and substring `b`.

*Step 2:* Iterate over `a` and `b`, and count the number of vowels respectively.

*Step 3:* Return if the numbers of vowels equal.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/3ChGfeaF/shared" frameBorder="0" width="100%" height="497" name="3ChGfeaF"></iframe>

> Note: In the above implementation, we check whether a character is a vowel by checking whether the character is in the string `"aeiouAEIOU"`. One can also use some long "OR" expression instead.

**Complexity Analysis**

Let $$N$$ be the length of `s`. 

* Time Complexity: $$\mathcal{O}(N)$$, since we need to iterate substring `a` and `b`.

* Space Complexity: $$\mathcal{O}(N)$$, since we need to store substring `a` and `b`.

--

#### Approach 2: Count Vowels (In Place)

**Intuition**

> This approach is an improvement based on *Approach 1*.

In *Approach 1*, we successfully implement a workable solution. Can we make it better?

Notice that we built two new strings `a` and `b`, which costs $$\mathcal{O}(N)$$ time and $$\mathcal{O}(N)$$ space, given that $$N$$ is the length of `s`.

In fact, we do not need to build new strings, we only need the number of vowels in each string.

We can iterate the first half of the `s` and consider it as `a`, and similarly, iterate the second half of the `s`, and consider it as `b`.

With this method, we erase the step of building new strings.

![Figure 2.1](../Documents/5637/5637_2_1.drawio.svg)

**Algorithm**

*Step 1:* Iterate over the first half of `s` (i.e., `a`) and the second half of `s` (i.e., `b`). Count the number of vowels respectively.

*Step 2:* Return if the numbers of vowels equal.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/8MW3Ngev/shared" frameBorder="0" width="100%" height="463" name="8MW3Ngev"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `s`. 

* Time Complexity: $$\mathcal{O}(N)$$, since we need to iterate substring `a` and `b`.

* Space Complexity: $$\mathcal{O}(1)$$, since we do not need extra space. Here we do not take the input `s` into consideration.

---

#### Approach 3: Count Vowels (In Place + Function)

**Intuition**

> This approach is an improvement based on *Approach 2*.

*Approach 2* is great. However, a problem is that there are almost 2 same pieces of code in the implementation.

Take this pseudo-code as an example:

```python
n = len(s)

a_vowel_count = 0
for i in 0...n//2:
    if s[i] is vowel:
        a_vowel_count += 1

b_vowel_count = 0
for i in n//2...n:
    if s[i] is vowel:
        b_vowel_count += 1

return a_vowel_count == b_vowel_count
```

The code of counting the numbers of vowels in `a` and `b` are almost the same.

According to the principle DRY ([Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)), it is not a good practice.

One way to simplify the code is to extract out the same part as a function.

> In this particular problem, there might be a trivial difference between using a function and writing it twice. (They both can pass!) However, it is helpful to inform the interviewer that you know the DRY principle.

**Algorithm**

*Step 1:* Initialize a function that counts vowels.

*Step 2:* Count the number of vowels of the first half of `s` (i.e., `a`) and the second half of `s` (i.e., `b`) with that function.

*Step 3:* Return if the number of vowels equals.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/ghBbdBL8/shared" frameBorder="0" width="100%" height="361" name="ghBbdBL8"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `s`. 

* Time Complexity: $$\mathcal{O}(N)$$, since we need to iterate substring `a` and `b`.

* Space Complexity: $$\mathcal{O}(1)$$, since we do not need extra space. Here we do not take the input `s` into consideration.