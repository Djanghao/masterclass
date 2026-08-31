# Official Solution

**Link:** [https://leetcode.com/problems/longest-string-chain/solution/](https://leetcode.com/problems/longest-string-chain/solution/)

---

[TOC]

## Solution

--- 

### Overview

A word chain is a sequence of words (word1 -> word2 -> word3 -> word4 -> word5......) such that word1 is a predecessor of word2 and so on. A key point in the problem statement is that word1 can be a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. In other words, word2 should have one letter more than word1 and the position of this new letter can be anywhere. Note that _the order of the words in the list does not need to be maintained while creating the word sequence_.

Suppose that word1 is `ab` then word2 can be `ab*`, `a*b`, `*ab` where * is any lowercase English letter.   

Therefore, it is possible for a particular word to have more than one predecessor in the given list, and thus belong to more than one word sequence. Our objective is to determine the length of the longest possible word sequence.
   
Let us consider the following example : `['abcd','abc','bcd','abd','ab','ad','b']`
In this list, the immediate predecessors of `abcd` are `['abc','bcd','abd']` as all these words are missing exactly one letter from the word `abcd`.
Similarly, the immediate predecessors of `abd` are `['ab','ad']` and the predecessor of `ab` is `['b']`.

</br>

---

### Approach 1: Top-Down Dynamic Programming (Recursion + Memoization)

**Intuition**

If you're not familiar with DFS (Depth First Search), check out our [Explore Card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/).

Here we work backwards to find the longest chain, this means that we will start from a word and delete one character at a time. We continue this chain until we come across a word that is not present in the list or is one letter long. 

In the above example some of the possible word sequences are: `abcd -> abd -> ab -> b` , `abcd -> abc -> ab -> b` , `abcd -> bcd` and so on.
The possible word sequences are illustrated in Figure 1.

![fig](../Figures/1048/1048_Overview_Diagram.png)


*Figure 1. Figure demonstrating DFS to find the longest word sequence.*


In this graph, we can observe that the length of the longest possible word sequence is `4`. There are two word sequences that have the longest length : `abcd -> abd -> ab -> b`  and `abcd -> abc -> ab -> b`. (The longest path is shown in the diagram with red arrows).

Notice that a particular sequence can be a part of more than one word sequence. For example the sequence `ab -> b` is  part of both the following sequences : `abcd -> abd -> ab -> b` and `abcd -> abc -> ab -> b`. This leads to repeated calculations because every time we encounter `ab` we need to explore the subpath `ab -> a`. For a small list, this is not a problem but as the size of the list increases, the size of the graph grows exponentially.

What we can do is whenever we encounter a new word, we will find all possible sequences with this word as the last word in the sequence. Then, we will store the length of the longest possible sequence that ends with this word. 

We will use a map for this where each `key` will be an ending word and the `value` will be the length of the longest possible word sequence ending with this word. In the above example when we first encounter the word `ab` we will store the value 2 (word sequence `ab -> b`) for `key` `ab`. The next time we encounter `ab`, we will simply return the value stored against it in the map instead of going through the entire subtree again. This process is known as *memoization* and it prevents recalculation. For every word present in the list, we only need to determine the length of the longest path that ends with this word once.


**Algorithm**

1. Initialize a `set` (`wordsPresent`) and add all the words in the list to the set. This set will be used to check if a word is present in the list.

2. Initialize a map (`memo`) having `key` type as `String` and `value` type as `Integer`. This map will store the length of the longest possible word sequence where the `key` is the last word in the sequence.

3. Iterate over the list. For each word in the list perform a depth-first search.

4. In the DFS, consider the current word (`currentWord`) as the last word in the word sequence.

5. If `currentWord` was encountered previously we just return its corresponding value in the map `memo`.

6. Initialize `maxLength` to 1.

7. Iterate over the entire length of the `currentWord`. 
    * Create all possible words (`newWord`) by taking out one character at a time.
    * If `newWord` is present in the `set` perform a DFS with this word and store the intermediate result in a variable `currentLength`.
    * Update the `maxLength` so that it contains the length of the longest sequence possible where the `currentWord` is the end word.

8. Set the `maxLength` as the `value` for `currentWord` (`key`) in the map.

9. Return `maxLength`.        

**Implementation**


<iframe src="https://leetcode.com/playground/n8UKSzGV/shared" frameBorder="0" width="100%" height="500" name="n8UKSzGV"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of words in the list and $$L$$ be the maximum possible length of a word.

* Time complexity: $$O(L ^ 2 \cdot N)$$.

    Initially, we iterate over the list to store all the given words in a `set` (adds $$N$$ to the complexity).
    
    Next, we perform a DFS for each word ($$O(N)$$). For each word, we iterate over its length($$O(L)$$). At each index (`i`) we create a new word by deleting the character at position `i` from the original word ($$O(L)$$). Therefore, the overall time complexity is $$O(N + (L ^ 2 \cdot N))$$ = $$O(L ^ 2 \cdot N))$$, because the $$N$$ term is insignificant relative to the $$L ^ 2 \cdot N$$ term. Note that because of memoization we can be sure that each word in the list is traversed only once.

* Space complexity: $$O(N)$$. 

    The extra space is used by the recursion call stack. In worst case all the words are a part of the longest word sequence which requires a recursion stack size of $$N$$.

    Also, we use a `set` to store all distinct words (size $$N$$) and a `map` to store intermediate results (size $$N$$). Since the maximum number of distinct words will be $$N$$ (when there is no repetition) the overall space complexity is $$O(2 \cdot N)$$ which in Big O notation equals $$O(N)$$.
    

<br/>

---

### Approach 2: Bottom-Up Dynamic Programming

**Intuition**

In this solution, we will create the word sequence by adding one letter at a time to the last word in the sequence. Thus the resulting word sequence will be a series of words where each word has one more letter than its predecessor. 

If we know the length (`previousLength`) of the longest word sequence that ends with a word we can use this value to find the length of the longest word sequence for its successor(`newLength = previousLength + 1`).

Let us again consider the above example `['abcd','abc','bcd','abd','ab','ad','b']`. 
The longest word sequence with the word `b` is 1. Thus the length of the longest word sequence with the word `ab` will be `1 + 1 = 2` (`ab -> b`). This result can in turn be used to find the length of the longest word sequence for the word `abc` (`2 + 1 = 3` for sequence `abc -> ab -> b`). 

The length of the words in a sequence increases as we move from left to right.  Also, we know that the order of the words in the list doesn't matter. So we can sort the words in ascending order based on their length. Next, we can iterate over the sorted list and calculate the length of the longest sequence possible where the word at index $$i$$ is the end word. We store this result in a map where `key` is the word and `value` is the sequence length. By doing this we ensure that, for each word that we encounter, we already know the result of all of its possible predecessors. This process is demonstrated in the following animation.

!?!../Documents/1048_Longest_String_Chain.json:960,540!?!

</br>

**Algorithm**

1. Initialize a map where `key` is the word and `value` is the length of the longest word sequence possible with the `key` as the end word.

2. Sort the word list in increasing order of the word length.

3. Initialize `longestWordSequenceLength` to 1. This variable holds the length of the longest word sequence possible.

4. Iterate over the sorted list.

5. For each word initialize `presentLength` to 1.

6. Iterate over the entire length of each word.
    - Delete the character at $$i^{th}$$ position from the current word and assign the new word to the variable `predecessor`.
    - Check if `predecessor` is present in the list or not.
    - If the `predecessor` is present, then assign its mapped value to `previousLength`. Update the `presentLength` if `previousLength + 1` is greater than the `presentLength`. 

7. After terminating the inner `for` loop, assign `presentLength` to the current word in the map `dp`.

8. Update the `longestWordSequenceLength` if the longest word sequence formed with the current word as the end word is longer than the previously considered word sequence.

9. After terminating the outer `for` loop, return `longestWordSequenceLength`.

**Implementation**


<iframe src="https://leetcode.com/playground/cBRfswo3/shared" frameBorder="0" width="100%" height="500" name="cBRfswo3"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of words in the list and $$L$$ be the maximum possible length of a word.

* Time complexity: $$O(N \cdot (\log N + L ^ 2))$$.

    Sorting a list of size $$N$$ takes $$O(N \log N)$$ time. Next, we use two for loops in which the outer loop runs for $$O(N)$$ iterations and the inner loop runs for $$O(L ^ 2)$$ iterations in the worst case scenario.  The first $$L$$ is for the inner loop and the second $$L$$ is for creating each `predecessor`. Thus the overall time complexity is $$O(N \log N + (N \cdot L ^ 2))$$ which equals $$O(N \cdot (\log N + L ^ 2))$$.

* Space complexity: $$O(N)$$. 

    We use a map to store the length of the longest sequence formed with each of the $$N$$ words as the end word.
    

<br/>

---