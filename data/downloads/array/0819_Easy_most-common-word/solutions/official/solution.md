# Official Solution

**Link:** [https://leetcode.com/problems/most-common-word/solution/](https://leetcode.com/problems/most-common-word/solution/)

---

[TOC]

## Solution

---
### Overview

This problem is a good exercise to brush up one's skills on string manipulation.

The String data type is almost omnipresent in all programming languages.
However, each language has its own implementation of String type, as well as various APIs for string manipulation.
For instance, String is _mutable_ in C++, while immutable in Python and Java.

The problem is not difficult. But due to the diversity of String type and string manipulation APIs, one could come up many different solutions.

Here we give two general approaches in the following sections.

- In one approach, we will construct a pipeline to process strings in several stages, where naturally each string would be traversed for several times.

- In another approach, we will traverse the input string _once and only once_, on the character base and do the processing _**on-the-fly**_.
<br/>
<br/>

---
### Approach 1: String Processing in Pipeline

**Intuition**

We can solve the problem by breaking it into a series of _sequential tasks_.
Each task functions like a stage in a pipeline, which takes the input from the previous stage and then channels its output to the next stage.

More specifically, for this problem, we could break it down into the following stages:

![string processing pipeline](../Figures/819/819_pipeline_.png)

1. We replace all the punctuations with spaces and at the same time convert each letter to its lowercase. One could also accomplish this in two stages. Here we merge them together in one stage.

2. We split the output in the above step into words, with the separator of spaces.

3. We then iterate through the words to count the appearance of each unique word, excluding the words from the banned list.

4. With the hashmap of `{word->count}`, we then walk through all the items to find the word with the highest frequency.

**Algorithm**

Following the stages we explained before, here are some sample implementations.

<iframe src="https://leetcode.com/playground/jSM7y4ka/shared" frameBorder="0" width="100%" height="480" name="jSM7y4ka"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of characters in the input string and $$M$$ be the number of characters in the banned list.

- Time Complexity: $$\mathcal{O}(N + M)$$.

    - It would take $$\mathcal{O}(N)$$ time to process each stage of the pipeline as we built.

    - In addition, we built a set out of the list of banned words, which would take $$\mathcal{O}(M)$$ time.

    - Hence, the overall time complexity of the algorithm is $$\mathcal{O}(N + M)$$.

- Space Complexity: $$\mathcal{O}(N + M)$$.

    - We built a hashmap to count the frequency of each unique word, whose space would be of $$\mathcal{O}(N)$$.

    - Similarly, we built a set out of the banned word list, which would consume additional $$\mathcal{O}(M)$$ space.

    - Therefore, the overall space complexity of the algorithm is $$\mathcal{O}(N + M)$$.
<br/>
<br/>

---
### Approach 2: Character Processing in One-Pass

**Intuition**

With the approach of String manipulation pipeline, it is clear and easy to debug, since we could locate and inspect each stage if anything goes wrong.

However, one might argue that it is probably not the most efficient way to solve the problem, since we scan the input string multiple times.

Indeed, it is possible to process the input string once and only once to accomplish the tasks.

>We could iterate through the string character by character, and do the processing _**on-the-fly**_, rather than delaying the processing to the latter stages of the pipeline.

The idea is that we consume the input string on the character base.
At the moment we reach the end of one word, we can then start to perform the word-based logics such as checking if the word is in the banned list, updating the frequency of the word and also updating the most frequent word we've seen so far _etc._

**Algorithm**

We could implement the algorithm in one single loop, over the characters of the input string.

- At each iteration, the character is either of letter (maybe digit), or punctuation or space in other cases.

![character pointers](../Figures/819/819_character_pointers_.png)

- Further more, we could divide it into the following two cases:

    - **Case (1):** we are in the middle of a word.

    - **Case (2):** we in in-between the words, _e.g._ punctuations between the words or at the end of the paragraph.

- We then can organize the logics into the above two cases.

    - In case (1), we simply append the character into the word buffer.

    - In case (2), we do the rest of the logics, as follows:

        - check if the word is enlisted in the banned list.

        - if not, update the frequency of the word.

        - update the most common word that we've seen so far.

<iframe src="https://leetcode.com/playground/Yoz4mHVK/shared" frameBorder="0" width="100%" height="500" name="Yoz4mHVK"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of characters in the input string and $$M$$ be the number of characters in the banned list.

- Time Complexity: $$\mathcal{O}(N + M)$$.

    - We traverse each character in the input string once and only once. At each iteration, it takes constant time to perform the operations, except the operation that we build a new string out of the buffer. Excluding the cost of string-building out of the iteration, we can consider the cost of iterations as $$\mathcal{O}(N)$$.

    - If we combine all the string-building operations all together, in total it would take another $$\mathcal{O}(N)$$ time.

    - In addition, we built a set out of the list of banned words, which would take $$\mathcal{O}(M)$$ time.

    - Hence, the overall time complexity of the algorithm is $$\mathcal{O}(N) + \mathcal{O}(N) + \mathcal{O}(M) = \mathcal{O}(N + M)$$.

- Space Complexity: $$\mathcal{O}(N + M)$$.

    - We built a hashmap to count the frequency of each unique word, whose space would be of $$\mathcal{O}(N)$$.

    - Similarly, we built a set out of the banned word list, which would consume additional $$\mathcal{O}(M)$$ space.

    - Therefore, the overall space complexity of the algorithm is $$\mathcal{O}(N + M)$$.

---