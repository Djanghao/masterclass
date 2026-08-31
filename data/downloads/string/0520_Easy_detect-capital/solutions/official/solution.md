# Official Solution

**Link:** [https://leetcode.com/problems/detect-capital/solution/](https://leetcode.com/problems/detect-capital/solution/)

---

[TOC]

## Solution

---

### Overview

It's a fairly easy problem because it does not require you to use any special trick, and all you need to do is to implement the solution step by step. 

However, it would take some time if you want to make your code easily readable, beautiful, and short. Below two approaches are introduced, they are *"Character by Character"* method and *"Regex"* method.

---

### Approach 1: Character by Character

**Intuition**

Recall (part of) the description of the problem:

>We define the usage of capitals in a word to be right when one of the following cases holds:
>
> 1. All letters in this word are capitals, like "USA".
> 2. All letters in this word are not capitals, like "leetcode".
> 3. Only the first letter in this word is capital, like "Google".

The problem gives us three patterns, and ask if the given `word` matches any of them. It would be easy to think of checking the cases one by one. In each case, we can just use the most simple method to check if `word` matches the pattern -- **check the char one by one**.

**Algorithm**

We need three bool variables to store if the pattern matches or not. We set the variables to be true at the beginning, and when the pattern doesn't match, we turn the variables into false. You can also do it otherwise, but the code would be a little longer.

The code is a little long... **Don't be afraid!** It's fairly easy to understand, and we will shorten it later.

<iframe src="https://leetcode.com/playground/Sn67Z7XR/shared" frameBorder="0" width="100%" height="500" name="Sn67Z7XR"></iframe>

There are a few points you should notice from the code above:

 1. We use the built-in function `isUpperCase` (in `Java`) and `isupper` (in `Python`) to check whether a char is upper case. You can also use the [ASCII](https://en.wikipedia.org/wiki/ASCII) to do that. Just use something like `word.charAt(i) >= 'A' && word.charAt(i) <= 'Z'`.

 2. We use `break` after we find matching failed because there is no need to check whether the further char is valid.

 3. You can combine the three `match` variables into one by reusing it after each case, but I prefer to separate it into three for better readability.

OK! Now we have solved this problem. The time complexity is $$O(n)$$ (where $$n$$ is word length) because we need to check each char at most three times. This time complexity is great, and there is no too much we can do to improve it. 

However, we can make the code looks better and shorter, without reducing the readability.

**Improvement**

Where to start? The biggest problem of the code above is that there are too many cases. What if we can combine them? Notice that the biggest difference between case 2 and case 3 is the condition of the first char. 

By combining case 2 and case 3, we get a new pattern: No matter what first char is, the rest should be lowercase. 

<iframe src="https://leetcode.com/playground/Jd9wzGgS/shared" frameBorder="0" width="100%" height="500" name="Jd9wzGgS"></iframe>

Still, there are a few points you should notice from the code above:

 1. We check the length of the word firstly because we need to use the first two char to check if the word matches case1. Fortunately, a word with 1 length would always match either case2 or case3.

 2. You can count the number of uppercase/lowercase letters in the word instead of checking it one by one and return immediately. That can also work.

 3. Some programming languages have built-in methods to check if the word matches certain case, such as `istitle()` in `Python` and `word.toUpperCase().equals(word)` in `Java`. Those methods are doing the same things as our code above. It would be great if you can know both these APIs and how they implemented.

**Complexity Analysis**

* Time complexity: $$O(n)$$, where n is the length of the word. We only need to check each char at most constant times.


* Space complexity : $$O(1)$$. We only need constant spaces to store our variables.

<br />

---

### Approach 2: Regex

**Intuition**

Hey, if we want to do pattern matching, why don't we use [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) (Regex)? Regex is a great way to match a given pattern to a string.

**Algorithm**

The pattern of case 1 in regex is $$ [A-Z]* $$, where $$ [A-Z] $$ matches one char from 'A' to 'Z',  $$ * $$ represents repeat the pattern before it at least 0 times. Therefore, this pattern represents "All capital".

The pattern of case 2 in regex is $$ [a-z]* $$, where similarly, $$ [a-z] $$ matches one char from 'a' to 'z'. Therefore, this pattern represents "All not capital".

Similarly, the pattern of case 3 in regex is $$ [A-Z][a-z]* $$.

Take these three pattern together, we have $$ [A-Z]*|[a-z]*|[A-Z][a-z]* $$, where "|" represents "or".

Still, we can combine case 2 and case 3, and we get $$ .[a-z]* $$, where "." can matches any char.

Therefore, the final pattern is $$ [A-Z]*|.[a-z]* $$.

<iframe src="https://leetcode.com/playground/PNF2FrED/shared" frameBorder="0" width="100%" height="140" name="PNF2FrED"></iframe>

However, it is worth pointing out that the speed of regex is highly dependent on its pattern and its implementation, and the time complexity can vary from $$O(1)$$ to $$O(2^n)$$. If you want to control the speed yourself, using Approach 1 would be better.

**Complexity Analysis**

* Time complexity: Basically $$O(n)$$, but depends on implementation.

* Space complexity : $$O(1)$$. We only need constant spaces to store our pattern.