# Official Solution

**Link:** [https://leetcode.com/problems/brace-expansion/solution/](https://leetcode.com/problems/brace-expansion/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Recursion

**Intuition**

Given a string $$s$$, suppose the first character could be one of $$k$$ options, where $$(k \geq 1)$$. For the rest of the string, we have a list of say $$n$$ words with us. Can we generate all the words corresponding to the whole string? For each of these $$n$$ words, we could choose any one of the $$k$$ characters to place at the beginning, and hence we will have $$n * k$$ words in total.

We can leverage the above observation to solve this problem. First, we must find the options for the first character in the string. Then we can pair each character option with the list of words that we can make for the rest of the string. How do we get the list of words for the rest of the string? By finding the character options for the second index of the string and pairing each of those options with the list of words that we can make for the rest of the string. And so the process repeats. Thus, we can use recursion to construct all of the possible strings. The recursion will stop when the remaining string is empty, and we return a list with an empty string.

Remember, we have been instructed to return these words in ascending order. One way is to generate the entire list of strings, then sort the whole list. This will work, but it may be costly. A more efficient method is to generate the list in sorted order. Assume the list of suffixes returned from the recursive function is sorted. Before adding new characters to the beginning of each word, we can sort the list of first character options. Then, when we iterate over the first character options and add each one to the beginning of each word in the list, the sorted list we received from the recursive call will still be sorted after adding one character. The reason we first iterate over characters and not the words is that we will add the character at the beginning of the word, and hence it will have the maximum priority in lexicographic order.

The diagram below shows the process

![fig](../Figures/1087/Slide1.PNG)

**Algorithm**

1. Call the function `findAllWords(String, Integer)` with the given string `s` in input and `startPos` as `0`. `startPos` represents our current position in the given string `s`.
2. If the string we need to consider is empty `(startPos == S.length())` we can return a list that contains an empty string.
3. Call the function `storeFirstOptions` with the string `s` and integer `startPos` and an empty list `firstOptions` as input, here we will:

    - Find the set of characters starting at `startPos`, and store them in the list `firstOptions`. This could be a single character or all characters between the braces. Then sort the list `firstOptions`.
    - Return the updated value of `startPos,` which is now pointing to the first index of the next group of characters in string `s` that we will consider. Store this value in the variable `remStringStartPos`.
4. Make a recursive call to `findAllWords(String, Integer)` with the string `s` and `remStringStartPos`. Store the returned list of words in `wordsWithRemString`.
5. Iterate over `firstOptions` and for each character:

    - Iterate over the words in `wordsWithRemString` and add the above character at the beginning of each word and store the new string in the list `expandedWords`.
6. Return the list `expandedWords`.


**Implementation**


<iframe src="https://leetcode.com/playground/746SPcbe/shared" frameBorder="0" width="100%" height="500" name="746SPcbe"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the given string.

* Time complexity: $$O(N * 3^{N/7})$$
  
  The time complexity can be calculated by multiplying the maximum possible number of words that can be produced by the time required to produce each word. If we have $$K$$ indices in each word, the number of strings would be equal to the product of the number of possible characters for each of these $$K$$ indices. For example, in the image above, we have $$K = 4$$ indices, two indices have 1 possible character and two indices have 2 possible characters, so we create $$1 * 2 * 1 * 2 = 4$$ words.
  
  If the number of possible characters for each index is the same, say $$X$$, then the number of words produced would be $$O(X^K)$$. The maximum number of words produced occurs when there are $$3$$ character options per index ($$X = 3$$) and $$ N / 7 $$ indices ($$K = N / 7$$), which results in $$3 ^ {N / 7}$$ words. To learn why these values ($$X = 3$$ and $$K = N / 7$$) results in the maximum number of words, you can click the arrow below for more details. 
  
  Also, the time required to create each word is $$O(K)$$, hence the time complexity becomes $$O(K * 3^{N/7})$$ which is equivalent to $$O(N * 3^{N/7})$$. We are also sorting the individual set of characters, the time complexity of which is bounded by $$O(N \log N$$). 
  
  Thus the total time complexity is equal to $$O(N * 3^{N/7})$$ as this is the dominant term.
  
  <details>
  
  <summary>Click here for more details on the complexity analysis.</summary>
  
  <br>
  Let's say the words that will be formed from the given string $$s$$ will be of length $$K$$ each. Thus, there will be $$K$$ indices and for each index, there will be one or more character options that can be placed at that index. Let the set {$$a_{0}$$, $$a_{1}$$, $$a_{2}$$,..........$$a_{K-1}$$} denote the number of options we have for each index in the range $$[0, K - 1]$$. 

  
    For convenience, let's represent the time required by the function `findAllWords` as $$F(x)$$ where $$x$$ is the starting index from where we need to consider the given string $$s$$. We need to find the value of $$F(0)$$ as we need to consider the whole string from index $$0$$.


  We can say $$F(0) = a_{0} \log a_{0} + F(1) + K * a_{0} * (a_{1} * a_{2} * ...... a_{K-1})$$, here the term $$a_{0} \log a_{0}$$ comes from the sorting in the function `storeFirstOptions` and the term $$ a_{0} * (a{1} * a_{2} * ...... a_{K-1})$$ comes from multiplying two lists, one of characters for the first index (length $$a_{0}$$) and the second list of words that recursive function returned, the third factor $$K$$ comes for the operations to save the words in the list `expandedWords` and, the third term $$F(1)$$ is for the recursion. We can derive the total time complexity as below:

      $$F(0) = a_{0} \log a_{0} + F(1) + K * a_{0} * (a_{1} * a_{2} * ...... a_{K-1})$$
      $$F(1) = a_{1} \log a_{1} + F(2) + (K - 1) * a_{1} * (a_{2} * a_{3} * ...... a_{K-1})$$
      $$F(2) = a_{2} \log a_{2} + F(3) + (K - 2) * a_{2} * ( a_{3} * ...... a_{K-1})$$
      .
      .
      .
      .
      $$F(K-1) = a_{K-1} \log a_{K-1} + F(K) + 1 * a_{K-1} * (1)$$
      $$F(K) = 1$$

      Adding all the above equations we will get:

      $$F(0) = \sum_{i=0}^{K-1}a_{i} \log a_{i} + (a_{K-1}) + (2 * a_{K-2} * a_{K-1}) +.......+K * a_{0} *a_{1} * a_{2} * a_{3} * ...... *a_{K-1} + 1$$
     
  - $$\sum_{i=0}^{K-1}a_{i} \log a_{i}$$ is bounded by $$N\log N$$, using the inequality $$x \log x + y \log y \leq (x+y) \log (x+y)$$ and, 
  - $$(a_{k-1}) + 2 * (a_{K-2} * a_{K-1}) +.......+K * a_{0} *a_{1} * a_{2} * a_{3} * ...... *a_{K-1}$$ is bounded by $$O(K * \prod_{i=0}^{K-1} a_{i})$$.

  The maximum value of $$\prod_{i=0}^{K-1} a_{i}$$ is achieved by choosing each $$a_{i} = X$$. This is because the AM-GM inequality:

  $$\prod_{i=0}^{K-1} a_{i} \leq (\sum_{i=0}^{k-1}a_{i}/K)^K = (X)^K$$, here equality holds only if $$a_{0}  = a_{1} = a_{2} = a_{3} = ...... = a_{K-1} = X$$. 

  A relationship between $$N$$ and $$K$$ can be established as $$N = K * (2 * X + 1)$$. This is because the total length of the string is $$N$$ and we have $$K$$ indices for each word, and for each index, there might be some character options like `{a, b, c,...}`. Note that strings with $$X$$ character options will have $$2*X+1$$ length. Because for $$X$$ characters there will be $$X-1$$ commas and $$2$$ curly braces, hence total $$ X + X -1 +2 = 2*X+1$$ characters.

  A rough estimation of maximum value of $$\prod_{i=0}^{K-1} a_{i}$$ (which is equal to $$(\prod_{i=0}^{N/(2*X+1) - 1} a_{i})$$) can be determined by setting all $$a_{i}$$ values equal to $$(X)$$, as `{1, 2, 3.....}`. Doing so, we can see that the maximum value occurs when $$X$$ equals $$3$$. Thus, the maximum value is $$3^{K}$$.

  Now we know, that having $$X = 3$$ character options for each index produces the maximum number of words. Thus, using $$N = K * (2 * X + 1)$$ we can say $$N = K*7$$ or $$K = N/7$$. Therefore, in the worst-case scenario, the time required is equal to $$O(K * 3^{K} + N \log N)$$ and since $$K = N/7$$, we can write it as $$O(N * 3^{N/7})$$.</details>
  </br>

* Space complexity: $$O(N * 3^{N/7})$$

  We will only consider the space that is required to build the result list, we won't count the output space that `expandedWords` will take. Stack space in the recursion is equal to the maximum number of active functions. The maximum number of active functions can be equal to $$N$$ i.e., for every character in the string. To produce the result we use the list `wordsWithRemString`. The maximum space used by `wordsWithRemString` is equal to the maximum number of words possible i.e., $$O(3^{N/7})$$ times the length of each word. Each word has the length $$K$$ $$(K = N/7)$$. Hence, the space complexity is equal to $$O(N * 3^{N/7})$$.
<br/>

---

### Approach 2: Iteration

**Intuition**

An alternative to the above approach is to follow similar steps iteratively. This way, we can reduce the amount of stack space used. 

In this approach, we will build our answer from left to right. We will start with a list that contains an empty string. Then, for each group of characters in the input string, we will extract the character options (the same way we did in the previous approach). Then, for each word we have found so far, we will create a new word for every character in the current group of characters (by appending the character to the **end** of the word).

To obtain the list of words in sorted order, we could simply sort the list after traversing the whole string. However, there is a more efficient way that is similar to what we did in the previous approach. While adding the character options for the current index to the existing list of words, we will iterate over each word, and for each word, we will iterate over the character options (in sorted order) and add each character to the end of the word. This way the already sorted list will remain sorted after the addition of a character to each word. The reason we first iterate over words and not characters is that the character will be appended at the end of words and hence will have the least priority in lexicographic order.

The diagram below shows the process

![fig](../Figures/1087/Slide2.PNG)

**Algorithm**

1. Initialize the index `startPos` as $$0$$.
2. While `startPos` is less than the length of a given string do the following:
  
    - Call the function `storeFirstOptions` with the string `s` and integer `startPos` and an empty list `firstOptions` as input, here we:

         - Find the set of characters for the first index and store them in the list `firstOptions`. Sort the list `firstOptions`.
         - Return the updated value of `startPos` which is now pointing to the character we need to consider next in the string. Store this index in `remStringStartPos`.
   - Iterate over the strings in `expandedWords` and for each word iterate over the characters in `firstOptions`. Add each character in `firstOptions` to the end of the string in `expandedWords`. Store these newly created strings in the list `currWords`.
    - Assign the list `currWords` to `expandedWords`. `expandedWords` will now contain all of the words that have been created up to the current index.
    - Update the value of `startPos` to `remStringStartPos`. So that at the next iteration, we will consider the next group of starting characters.

3. Return `expandedWords`.

 

**Implementation**


<iframe src="https://leetcode.com/playground/CQoYqaf8/shared" frameBorder="0" width="100%" height="500" name="CQoYqaf8"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the given string.

* Time complexity: $$O(N * 3^{N/7})$$

  This approach is similar to the previous approach, except that it is implemented in an iterative manner. Thus, like the previous approach, we can have at most $$3^{N/7}$$ words, and each word will require $$O(K)$$ time to create. Hence the time complexity is equal to $$O(N * 3^{N/7})$$ (Click the above arrow for additional information).

  <details>

  <summary>Click here for more details on the complexity analysis.</summary>

  <br>

   Let's say the words that will be formed from the given string $$s$$ will be of length $$K$$ each. Thus, there will be one or more character options that can be placed at that index. Let the set {$$a_{0}$$, $$a_{1}$$, $$a_{2}$$,..........$$a_{K-1}$$} denote the number of options we have for each index in $$[0, K - 1]$$.

  For each index from $$0$$ to $$K-1$$ we would be calling the `storeFirstOptions` as well as also creating the new words by concatenating each character in `firstOptions` to each word in `expandedWords`. Hence the time for the $$i_{th} (i \geq  0)$$ call would be $$(a_{i} \log a_{i} + i * \prod_{j=0}^{i} a_{j})$$. Therefore, the total time complexity would be $$\sum_{i=0}^{K-1}(a_{i} \log a_{i} + i * \prod_{j=0}^{i} a_{j})$$. This is equivalent to the expression in the previous approach's time complexity analysis. Hence, we can say that the time complexity for this approach is $$O(N * 3^{N/7})$$.</details>
  
 </br>


* Space complexity: $$O(N * 3^{N/7})$$
   
  We will only consider the space that is required to build the result list, we won't count the output space that `expandedWords` will take. To produce the result we use the list `currWords`. The maximum space used by `currWords` is equal to the maximum number of words possible i.e., $$O(3^{N/7})$$ times the length of each word. Each word has the length $$K$$ $$(K = N/7)$$. Hence, the space complexity is equal to $$O(N * 3^{N/7})$$.
<br/>

---

### Approach 3: Backtracking

**Intuition**

In the previous approaches, we had the list of words ready (suffixes in Approach 1 and prefixes in Approach 2) and we used this list to create a new list containing the product of the current words and all of the next character options. 

In this approach, rather than constructing all of the words at the same time, we will construct the list of words, one word at a time. We will sequentially choose one character from each of the character groups to build the string. We will be performing this process recursively, using backtracking. Suppose the words in the list have length $$k$$, we will traverse the character options for a particular index in ascending order, add a character to the current string, and make a recursive call for the next index. Once we return from the recursive call, we will backtrack (remove the last added character), add the next character in the options, and repeat the process until the string length becomes equal to $$k$$. Each time the string length becomes equal to $$k$$, we add the current string to our list of expanded words.


**Algorithm**

1. Extract the character options for different indices and store them in the list `allOptions` using the function `storeAllOptions`. Unlike the previous approaches, we find the options for all indices beforehand because if we find the options while backtracking, we will end up finding the options for the same index multiple times.
2. Call the function `generateWords` with the given string $$s$$ and an empty string as the current string `currString`.
3. If the string `currString` is complete i.e., the length of the `currString` becomes equal to the number of options in `allOptions` add the string to the list `expandedWords` and return.
4. Fetch the character options for the current index in `currOptions`. Iterate over the characters in the list `currOptions` and for each character:

   - Add the character to `currString`.
   - Recursively call the function `generateWords` with the updated string `currString`.
   - Backtrack by removing the last added character.

5. Return `expandedWords`.

**Implementation**


<iframe src="https://leetcode.com/playground/2WdJGHwN/shared" frameBorder="0" width="100%" height="500" name="2WdJGHwN"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the given string and $$K$$ is the length of a formed word.

* Time complexity: $$O(N * 3^{N/7})$$

  We can break down the time complexity into three parts. The time required to find all of the character options, the time required to store all of the words, and the time required to build all of the words. Let's go over the parts in that order. 
  
  In the function `storeAllOptions` we traverse over the string and sort the individual list of options for each index. Hence, similar to the previous approaches, the complexity is bounded by $$O(N\log N)$$, using the inequality $$x \log x + y \log y \leq (x+y) \log (x+y)$$.

  Also similar to the previous approaches, in the worst-case scenario, we will create $$3^{N/7}$$ words. In this implementation, we use a mutable data structure to build each word at a time. Thus, once the word is of length $$K$$ we must make a deep copy of the word in order to store it. If we did not create a deep copy, then when we remove the last character from the mutable data structure, it would also affect the word in our result list. Creating each copy will take $$O(K)$$ time. Thus, storing all of the words will require $$O(K * 3 ^ {N / 7})$$ time. 

  Finally, for this approach, adding a character to or removing a character from `currString` requires only constant time. Since each word is built only once, building all of the strings will not require more than $$O(K * 3 ^ {N / 7})$$ time (which is the maximum number of characters in all of the words). 

  Therefore, the dominant term in the time complexity is $$O(K * 3^K)$$, and as shown in the previous approaches, in the worst-case scenario, $$K = N / 7$$. Thus, the complexity can be written as $$O(N * 3^{N/7})$$.


* Space complexity: $$O(N)$$

  `expandedWords` is only used to store the output and is not used for any intermediate operations, so it does not count towards the space complexity. This is different from the previous approaches where `expandedWords` temporarily stored strings shorter than length $$K$$. Instead, the backtracking approach stores each intermediate string in `currString`, which uses $$O(N)$$ space. Likewise, stack space in the recursion equals the maximum number of active functions, and the maximum possible number of active functions is $$N$$. Hence, the space complexity equals $$O(N)$$.

<br/>

---