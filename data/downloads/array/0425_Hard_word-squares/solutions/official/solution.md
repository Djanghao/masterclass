# Official Solution

**Link:** [https://leetcode.com/problems/word-squares/solution/](https://leetcode.com/problems/word-squares/solution/)

---

[TOC]

## Solution

---

Before diving into the solutions, it could be helpful to take a step back and clarify the requirements of the problem first.

Given a list of non-duplicate words, we are asked to construct all possible combinations of word squares. And here is the definition of _**word square**_.

>A sequence of words forms a valid _word square_, if and only if each string ($$H_k$$) that is formed horizontally from the kth row equals to the string ($$V_k$$) that is formed vertically from the kth column, _i.e._
$$
H_k == V_k \qquad \forall{k} \quad 0 ≤ k < \max(\text{numRows}, \text{numColumns}).
$$

![pic](../Figures/425/425_valid_word_square.png)

As we can see from the definition, for a word square with equal-sized row and column, the resulting letter matrix should be **symmetrical** across its diagonal. 

In other words, if we know the upper-right part of the word square, we could infer its lower-left part, and vice versa. This symmetric property of the word square could also be interpreted as the **constraint** of the problem (as in the _constraint programming_), which could help us to narrow down the valid combinations. 
<br/>
<br/>

---

#### Algorithm: Backtracking 

Given a list of words, we are asked to find a combination of words upon with we could construct a _word square_. The backbone of the algorithm to solve the above problem could be surprisingly simple.

>The idea is that we construct the word square **_row by row_** from top to down. At each row, we simply do _trial and error_, _i.e._ we try with one word, if it does not meet the constraint then we try another one.

As one might notice, the above idea of the algorithm is actually known as [backtracking](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/), which is often associated with _recursion_ and _DFS_ (Depth-First Search) as well.

Let us illustrate the idea with an example. Given a list of words `[ball, able, area, lead, lady]`, we should pile up 4 words together in order to build a word square.

![pic](../Figures/425/425_backtrack.png)

- Let us start with the word `ball` as the first word in the word square, _i.e._ the word that we would put in the first row.

- We then move on to the second row. Given the _symmetric_ property of the word square, we now know the letters that we should fill on the first _column_ of the second row. In other words, we know that the word in the second row should start with the _prefix_ `a`.

- Among the list of words, there are two words with prefix `a` (_i.e._ `able`, `area`). Both of them could be the candidates to fill the second row of the square. We then should try both of them in the next step. 

- In the next step (1), let us fill the second row with the word `able`. Then we could move on to the third row. Again, due to the symmetric property, we know that the word in the third row should start with the prefix `ll`. Unfortunately, we do not find any word start with `ll`. As a result, we could no longer move forwards. We then abandon this path, and **_backtrack_** to the previous state (with the first row filled).

- As an alternative next step (1), we could try with the word `area` in the second row. Once we fill the second row, we would know that in the next row, the word to be filled should start with the prefix `le`. And this time, we find the candidate (_i.e._ `lead`).

- As a result, in the next step (2), we fill the third row with the word `lead`. So on and so forth.

- _At the end, if one repeats the above steps with each word as the starting word, one would exhaust all the possibilities to construct a valid word square_.

One could follow the [code template of backtracking](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2793/) from our Explore card to implement the above algorithm. Here is one example.

<iframe src="https://leetcode.com/playground/i7Woyia2/shared" frameBorder="0" width="100%" height="500" name="i7Woyia2"></iframe>

At the first glance of the code, the problem does not seem to be as daunting as it is labeled. Actually if one could come up the skeleton of code in the interview, it would be fair to say that one has _scored_ the interview.

The above implementation is correct and would pass most of the test cases in the online judge. However, it would run into `Time Limit Exceeded` exception for certain test cases with large input.
But, there is no need for dismay, since we've already figured out the _hard_ part of the algorithm. We just need to iron out the last bit of _optimization_ which actually could be a followup question during the interview.
<br/>
<br/>

---

### Approach 1: Backtracking with HashTable

**Intuition**

As one might notice in the above backtracking algorithm, the bottleneck lies in the function `getWordsWithPrefix()` which is to find all words with the given prefix. At each invocation of the function, we were iterating through the entire input list of words, which is of linear time complexity $$\mathcal{O}(N)$$.

>One of the ideas to optimize the `getWordsWithPrefix()` function would be to process the words beforehand and to build a data structure that could speed up the lookup procedure later.

As one might recall, one of the data structures that provide a fast lookup operation is called _**hashtable**_ or dictionary. We could simply build a hashtable with all possible prefixes as _keys_ and the words that are associated with the prefix as the _values_ in the table. Later, given the prefix, we should be able to list all the words with the given prefix in constant time $$\mathcal{O}(1)$$.

**Algorithm**

- We build upon the backtracking algorithm that we listed above, and tweak two parts.

- In the first part, we add a new function `buildPrefixHashTable(words)` to build a hashtable out of the input words.

- Then in the second part, in the function `getWordsWithPrefix()` we simply query the hashtable to retrieve all the words that possess the given prefix.

Here are some sample implementations. The idea is inspired by the post of [gabbu](https://leetcode.com/problems/word-squares/discuss/91360/3-Python-Solutions-with-very-detailed-explanations) in the discussion forum. 

<iframe src="https://leetcode.com/playground/dkafZ2PJ/shared" frameBorder="0" width="100%" height="500" name="dkafZ2PJ"></iframe>


**Complexity Analysis**

- Time complexity: $$\mathcal{O}(N\cdot26^{L})$$, where $$N$$ is the number of input words and $$L$$ is the length of a single word.

    - It is tricky to calculate the exact number of operations in the backtracking algorithm. We know that the trace of the backtrack would form a n-ary tree. Therefore, the upper bound of the operations would be the total number of nodes in a full-blossom n-ary tree.
    
    - In our case, at any node of the trace, at maximum it could have 26 branches (_i.e._ 26 alphabet letters). Therefore, the maximum number of nodes in a 26-ary tree would be approximately $$26^L$$. 

    - In the loop around the backtracking function, we enumerate the possibility of having each word as the starting word in the word square. As a result, in total the overall time complexity of the algorithm should be $$\mathcal{O}(N\cdot26^{L})$$.

    - As large as the time complexity might appear, in reality, the actual trace of the backtracking is much smaller than its upper bound, thanks to the _constraint_ checking (symmetric of word square) which greatly prunes the trace of the backtracking.

- Space Complexity: $$\mathcal{O}(N\cdot{L} + N\cdot\frac{L}{2}) = \mathcal{O}(N\cdot{L})$$ where $$N$$ is the number of words and $$L$$ is the length of a single word.

    - The first half of the space complexity (_i.e._ $$N\cdot{L}$$) is the values in the hashtable, where we store $$L$$ times all words in the hashtable.

    - The second half of the space complexity (_i.e._ $$N\cdot\frac{L}{2}$$) is the space took by the keys of the hashtable, which include all prefixes of all words.

    - In total, we could say that the overall space of the algorithm is proportional to the total words times the length of a single word.

<br/>
<br/>

---

### Approach 2: Backtracking with Trie

**Intuition**

Speaking about prefix, there is another data structure called **_Trie_** (also known as **_prefix tree_**), which could find its use in this problem.

In the above approach, we have reduce the time complexity of retrieving a list of words with a given prefix from the linear $$\mathcal{O}(N)$$ to the constant time $$\mathcal{O}(1)$$. In exchange, we have to spend some extra space to store all the prefixes of each words.

>The Trie data structure provides a _compact_ and yet still _fast_ way to retrieve words with a given prefix.

In the following graph, we show an example on how we can build a Trie from a list of words.

![pic](../Figures/425/425_trie.png)

As we can see, basically Trie is a n-aray tree, where each node represents a character in a prefix. The Trie data structure is **compact** to store the prefixes, since it deduplicate the redundant prefixes, _e.g._ the prefixes of `le` and `la` would share one node. And yet it is still fast to retrieve words from the Trie. It takes $$\mathcal{O}(L)$$ to retrieve a word, where $$L$$ is the length of the word, which is much faster than the brute-force enumeration.

**Algorithm**

- We build upon the backtracking algorithm that we listed above, and tweak two parts.

- In the first part, we add a new function `buildTrie(words)` to build a Trie out of the input words.

- Then in the second part, in the function `getWordsWithPrefix(prefix)` we simply query the Trie to retrieve all the words that possess the given prefix.

Here are some sample implementations. Note that, we tweak the Trie data structure a bit, in order to further optimize the time and space complexity.

* Instead of labeling the word at the leaf node of the Trie, we label the word at each node so that we don't need to perform a further traversal once we reach the last node in the prefix. This trick could help us with the time complexity.

* Instead of storing the actual words in the Trie, we keep only the index of the word, which could greatly save the space.

<iframe src="https://leetcode.com/playground/Q5Q3PVXr/shared" frameBorder="0" width="100%" height="500" name="Q5Q3PVXr"></iframe>


**Complexity Analysis**

- Time complexity: $$\mathcal{O}(N\cdot26^{L}\cdot{L})$$, where $$N$$ is the number of input words and $$L$$ is the length of a single word.

    - Basically, the time complexity is same with the Approach #1 ($$\mathcal{O}(N\cdot26^{L})$$), except that instead of the constant-time access for the function `getWordsWithPrefix(prefix)`, we now need $$\mathcal{O}(L)$$.

- Space Complexity: $$\mathcal{O}(N\cdot{L} + N\cdot\frac{L}{2}) = \mathcal{O}(N\cdot{L})$$ where $$N$$ is the number of words and $$L$$ is the length of a single word.

    - The first half of the space complexity (_i.e._ $$N\cdot{L}$$) is the word indice that we store in the Trie, where we store $$L$$ times the index for each word.

    - The second half of the space complexity (_i.e._ $$N\cdot\frac{L}{2}$$) is the space took by the  prefixes of all words. In the worst case, we have no overlapping among the prefixes.

    - Overall, this approach has the same space complexity as the previous approach. Yet, in running time, it would consume less memory thanks to all the optimization that we have done.

<br/>
<br/>