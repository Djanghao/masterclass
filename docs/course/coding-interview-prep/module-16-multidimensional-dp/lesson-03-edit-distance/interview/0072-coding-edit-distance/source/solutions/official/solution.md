# Official Solution

**Link:** [https://leetcode.com/problems/edit-distance/solution/](https://leetcode.com/problems/edit-distance/solution/)

---

[TOC]

## Solution

---

### Overview


Edit distance is a term used in computer science. By definition, _Edit distance_ is a string metric, a way of quantifying how dissimilar two strings (e.g. words) are to one another, measured by counting the minimum number of operations required to transform one string into the other. Source: [Wikipedia](https://en.wikipedia.org/wiki/Edit_distance).

> There are different types of "edit distance" each having different types of operations to transform one string to another. In this problem, we are referring to [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).
The Levenshtein distance finds edit distances by allowing three types of transformation operations: addition, deletions, and replacements. 

<center>
<img src="../Figures/72/transform_example.png"/>
</center>

What also makes it more interesting to solve this problem is that this problem has several real-world applications.
Think of it like this, if you want to find the similarity score between 2 strings. The lower the edit distance, the more similar they are.

> One of the real-world applications of this algorithm is the auto-correct feature used in text editors. When you make a spelling mistake, the text editor (a few advanced ones like Microsoft word) highlights the nearest matching words to the typed word. The list of words with the least edit distance from the dictionary would pop up for suggestions.

<center>
<img src="../Figures/72/text_editor_example.png"/>
</center>

Furthermore, there are applications in fields like computational biology and natural language processing. [Edit Distance Applications](https://en.wikipedia.org/wiki/Edit_distance#Applications)

The goal is to find the edit distance between 2 given strings, `word1` and `word2`. Let us now discuss the approaches to solving this problem. 

---

### Approach 1: Recursion

#### Intuition

Let us start by first identifying the ground rules.

1. "If the two strings are the same, the edit distance is zero".

`word1 = "abcd"`, `word2 = "abcd"`

Edit Distance = 0  
word1 is equal to word2; no need to add, remove or replace any character.

2. "The operations (add/delete/replace) are performed if and only if a character at a certain position in `word1` is not equal to the corresponding character in `word2`".

Example, 

`word1 = "abc"`, `word2 = "abe"`

The words are not the same. 
The character at $$3^{rd}$$ position in word1 `c` is different than the character in word2 `e`. 


In this case, we have to perform some operation in `word1` to transform it into `word2`. There are 3 options, 

Option 1 - Delete `c` from `word1`. 

Option 2 - Insert `e` into `word1`. 

Option 3 - Replace `c` with `e` in `word1`.

The goal is to choose an option such that `word1` is transformed into `word2` by applying the minimum number of operations. How can we do that? For that, let's try to perform each operation one by one. 

> Before reading ahead, take a pen and paper and transform `word1'  'abc'  to `word2`  'abe' by applying operations in each of the above options. 

<center>
<img src="../Figures/72/all_illustrations.png"/>
</center>

From the above illustrations, it is clear that Option 1 and Option 2 transform `word1` to `word2` in 2 operations.  Thus, the edit distance is 2. And, Option 3 transforms `word1` to `word2` in just 1 operation, thus edit distance is 1.

Thus, in this case, we will choose Option 3 and the edit distance would be 1. 

From this, we can conclude that,

```
Edit distance to transform "word1" to "word2" =

Minimum (Number of operations after deleting e from "word1", 
Number of operations after inserting c in "word1",
Number operations after replacing e with c in "word1") + 1
```

The +1 in the end, is for the current operation.

> When it comes to trying all possible solutions and finding the most optimal solution, recursion is the most natural way to implement such solutions. More details are in the Algorithm section.

Similarly, whenever there is a mismatch between 2 characters in the string, we have to try all possible operations and choose the best among all. 

Let us look at the algorithm to implement this solution.

#### Algorithm

There are two input strings, `word1` and `word2`. Start by comparing every character in `word1` and `word2`. Let's track the current character index as `word1Index` and `word2Index`. 
Here, we are comparing the last index of both strings.
For every comparison, there are two possibilities,
 - The characters in the current position match

           `word1[word1Index] = word2[word2Index]`
   
    Move to the next index. No operation is performed.

 - The characters in their current position do not match

           `word1[word1Index] != word2[word2Index]`
   
    In this case, we must delete, insert or replace a character in `word1`.
    From intuition, we have deduced that we must try all three operations and find the minimum.
    One of the intuitive ways to implement such problems is by using recursion.

    Let's define the recursive function `minDistanceRecur`, which finds the edit distance for `word1` ending at index  `word1Index` and `word2` ending at `word2Index`.
  
       `minDistanceRecur(word1, word2, word1Index, word2Index)`
    
      Next, let's derive the recurrence relation for each possible operation.
      Let `word1 = "abc"` and `word2 = "abe"`

      1. Replace the character at `word1Index` in `word1` with the character at `word2Index` in `word2`.

         <center>
               <img src="../Figures/72/replace_illustration.png"/>
         </center>

         Recurrence Relation: ```minDistanceRecur(word1, word2, word1Index - 1, word2Index - 1) + 1```

      2. Inserting the character at `word2Index` in `word2` in `word1`.

         <center>
               <img src="../Figures/72/insert_illustration.png"/>
         </center>

         Recurrence Relation: ```minDistanceRecur(word1, word2, word1Index, word2Index - 1) + 1```

      3. Deleting the character at `word1Index` in `word1`.

         <center>
               <img src="../Figures/72/delete_illustration.png"/>
         </center>

         Recurrence Relation: ```minDistanceRecur(word1, word2, word1Index - 1, word2Index) + 1```

    In the end, the minimum of all the above operations will be the minimum edit distance. 

    Thus, we can define the overall recurrence relation as, 
 
```
    if word1[word1Index] != word2[word2Index]:

     minDistanceRecur(word1, word2, word1Index, word2Index) =
       minimum (
            minDistanceRecur(word1, word2, word1Index - 1, word2Index - 1),
            minDistanceRecur(word1, word2, word1Index, word2Index - 1),
            minDistanceRecur(word1, word2, word1Index - 1, word2Index)
         ) + 1

     else if word1[word1Index] == word2[word2Index]:

            minDistanceRecur(word1, word2, word1Index - 1, word2Index - 1)
 ```      

   _Base Case_

  The base case is the terminating condition for the recursive function when there are no other paths to explore. In this problem, let us define all possible base cases, 

1. `word1` is empty 

      If `word1` is an empty string, there could be zero or more characters left in `word2`. The only possible operation is to add the characters of `word2` in `word1`. The edit distance is the number of characters in `word2`.

2. `word2` is empty

      If `word2` is an empty string, there could be zero or more characters left in `word1`. The only possible operation is to delete all the remaining characters in `word1`. The edit distance is the number of characters in `word1`.

#### Implementation

<iframe src="https://leetcode.com/playground/NZM6Cy73/shared" frameBorder="0" width="100%" height="500" name="NZM6Cy73"></iframe>

#### Complexity Analysis

Let $K$ be the length of string `word1` and $N$ be the length of string `word2`. Let $M = max(K, N)$.

* Time Complexity: $\mathcal{O}(3 ^ {M})$           
  - The time complexity is exponential. For every pair of `word1` and `word2`, if the characters do not match, we recursively explore three possibilities. In the worst case, if none of the characters match, we will end up exploring $\mathcal{O}(3 ^ {M})$ possibilities. 

* Space Complexity: $\mathcal{O}(M)$          
  - The recursion uses an internal call stack equal to the depth of the recursion tree. The recursive process will terminate when either `word1` or `word2` is empty. 

---
### Approach 2: Memoization: Top-Down Dynamic Programming

#### Intuition

So far, we have discussed the recursive solution in _Approach 1_. The solution works well but is pretty exhaustive. For further understanding, let us look at the following recursive tree.

> Take a pen and paper and try to draw the recursive tree for the _Approach 1_ and encircle the repetitive calculations. 

<center>
<img src="../Figures/72/edit_distance_tree.png"/>
</center>

There is a substring combination of `word1` and `word2` evaluated multiple times (highlighted in the same color in the above illustration). There is no need for this repeated computation. 

> Can we find a way to optimize these recursive calls? 

If we can find that a certain sub-problem has been computed before, we can re-use that result and terminate it. For this, we must store the results of every computed sub-problem. 

In a way, we enable the algorithm to cache or memorize the result of every operation, so that every time before computing the result for a problem, we can look if the result is already present in the cache. 

This brings us to understand a widely used programming paradigm, [Dynamic Programming](https://leetcode.com/explore/featured/card/dynamic-programming/630/an-introduction-to-dynamic-programming/). In this approach, we use Top Down Dynamic Programming approach also called as [Memoization](https://en.wikipedia.org/wiki/Memoization).

Let us look at the algorithm to implement this problem.

#### Algorithm

The top-down dynamic programming approach is implemented by adding caching in the recursive function calls. 

  For example, in a recursive call, we will have the following parameters, 
`word1 = abc` and `word2 = ad` and `word1Index = 2` (0-indexed) and `word2Index = 1` (0-indexed)

 To cache the result of this sub-problem, we must use a data structure that stores the result of `word1` ending at index `word1Index`, that is 2, and `word2` ending at `word2Index`, that is 1. One possible way to implement this is by using a 2-dimensional array say, `memo` where `memo[word1Index][word2Index]` caches the result of `word1` ending at `word1Index` and `word2` ending at `word2Index`.

The `word1Index` and `word2Index` points at the current character for strings `word1` and `word2` respectively. The algorithm is implemented by following the recursive function implementation as discussed in _Approach 1_ with the following additions,

- Before computing the result of the subproblem, check if it is already present in `memo[word1Index][word2Index]`. If yes, return the stored result. 

- After computing the result of every sub-problem, store the result in a `memo` for future reference.

#### Implementation

<iframe src="https://leetcode.com/playground/deucH7hx/shared" frameBorder="0" width="100%" height="500" name="deucH7hx"></iframe>

#### Complexity Analysis

Let $M$ be the length of string `word1` and $N$ be the length of string `word2`.

* Time Complexity: $\mathcal{O}(M \cdot N)$ 

  - As the memoization approach uses the cache, for every combination of `word1` and `word2` the result is computed only once.

* Space Complexity: $\mathcal{O}(M \cdot N)$ 

  - The space is for the additional 2-dimensional array `memo` of size $(M \cdot N)$.

---

### Approach 3: Bottom-Up Dynamic Programming: Tabulation

#### Intuition

In this approach, we discuss the bottom-up approach to solving the dynamic programming problem. As the name suggests, the algorithm starts from the bottom, that is, the smallest sub-problem, and iteratively computes the results of the larger sub-problem.

In this problem, the smallest sub-problem is the base case where `word1` or `word2` is empty. Furthermore, the larger sub-problems are built by adding a character one by one to each of the words. 
The results of smaller sub-problems can be used to compute the results of larger ones. For this purpose, we must store the results of every sub-problem in a 2D array `dp`.


#### Algorithm

Let `word1Length` be the length of string `word1` and `word2Length` be the length of string `word2`.
- Build a 2D array `dp` of size `word1Length * word2Length` that stores the result of every sub-problem.
- Calculate the edit distance for each sub-problem. 

Base Cases:
The approach starts by computing the result of the smallest subproblem and filling in the `dp` array.
 - If `word1` is empty, the edit distance is equal to the length of `word2`.
 - If `word2` is empty, the edit distance is equal to the length of `word1`.

<center>
<img src="../Figures/72/dp_base_case.png"/>
</center>

- Use a nested for-loop to iterate over each combination of input strings `word1` and `word2`. The edit distance is calculated as follows:

- Track the current character in `word1` and `word2` using pointers `word1Index` and `word2Index` respectively. 
`dp[word1Index][word2Index]` stores the edit distance of strings `word1` ending at `word1Index` and `word2` ending at `word2Index`. 

- If the characters at current indexes in `word1` and `word2` are the same,

The edit distance will be the same as the result of `word1` ending at `word1Index - 1` and word2 ending at `word2Index - 1`.

<center>
<img src="../Figures/72/dp_equal_characters.png"/>
</center>

- If the characters at current indexes in `word1` and `word2` are different,
Example, `word1` = `a` and `word2` = `aq`.

     <center>
     <img src="../Figures/72/dp_character_not_equal.png"/>
     </center>

The edit distance will be a minimum of 3 operations, 

  i. Add a character at `word1Index` in `word1`. 

   "If we add `q` in `word1`, the edit distance for `word1` = `a` and `word2` = `aq` will be equal to the edit distance for `word1` = `a` and `word2` = `a` plus one".

  The result of the sub-problem `word1` = `a` and `word2` = `a` can be referred from `dp[word1Index][word2Index - 1]`.

  <center>
    <img src="../Figures/72/dp_add_operation.png"/>
    </center>
          
   ii. Delete the character at `word1Index` in `word1`.

   "If we delete `a` in `word1`, the edit distance for `word1` = `a` and `word2` = `aq` will be equal to the edit distance for `word1` = `" "` and `word2` = `aq` plus one".

   The result of the sub-problem `word1` = `" "` and `word2` = `aq` can be referred from `dp[word1Index - 1][word2Index]`.

   <center>
     <img src="../Figures/72/dp_delete_operation.png"/>
   </center>

   iii. Replace a character at `word1Index` in `word1`.

   "If we replace `a` in `word1`, the edit distance for `word1` = `a` and `word2` = `aq` will be equal to the edit distance for `word1` = `" "` and `word2` = `a` plus one".

   The result of the sub-problem `word1` = `" "` and `word2` = `a` can be referred from `dp[word1Index - 1][word2Index - 1]`.


   <center>
     <img src="../Figures/72/dp_replace_operation.png"/>
   </center>


   <center>
     <img src="../Figures/72/dp_all_operations.png"/>
   </center>

#### Implementation

<iframe src="https://leetcode.com/playground/Q5ceDDzn/shared" frameBorder="0" width="100%" height="500" name="Q5ceDDzn"></iframe>

#### Complexity Analysis

Let $M$ be the length of string `word1` and $N$ be the length of string `word2`.

* Time Complexity: $\mathcal{O}(M \cdot N)$

  - In the nested `for` loop, the outer loop iterates $M$ times, and the inner loop iterates $N$ times.

Thus, the time complexity is $\mathcal{O}(M \cdot N)$.

 * Space Complexity: $\mathcal{O}(M \cdot N)$
 
   - The space is for the additional 2-dimensional array `dp` of size $(M \cdot N)$.

---