# Official Solution

**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solution/](https://leetcode.com/problems/count-sorted-vowel-strings/solution/)

---

[TOC]

## Solution
---

#### Overview ####

The problem is to build all the string combinations of given length $$n$$ using 5 vowels(`a, e ,i ,o ,u`) in sorted order. If you have solved the common backtracking problems before like [Combination Sum](https://leetcode.com/problems/combination-sum/) or [Combinations](https://leetcode.com/problems/combinations/), it is easier to come up with the Backtracking solution with few changes. However, there are also other interesting ways to solve the problem.

Let's look at the different approaches in detail.

---

#### Approach 1: Brute Force Using Backtracking

**Intuition**
> [Backtracking](https://en.wikipedia.org/wiki/Backtracking) is a general approach that works by identifying potential candidates and incrementally builds the solution using depth first search. Once the required goal is reached, we backtrack to explore another potential candidate.

The backtracking solution for the given problem would be, to begin with, the first vowel character, continue using the same vowel until we build a string of length $$n$$. Post that, backtrack and use the next character.

 As we are picking up each vowel character in alphabetically sorted order (first `a`, then `e`, then `i`, and so on), we know that the resultant string is always lexicographically sorted.

Example,
For `n = 3`, pick the first vowel `a`, continue picking up the same vowel until we reach $$n$$. The resultant string would be `aaa`. Now that we have found our first combination, backtrack and pick up the next character `e`. Our next string would be `aae`. The process continues until all the vowel characters are explored.  

**Algorithm**

- As we start with the first vowel `a` then `e` and so on, we need a way to determine the current vowel in a recursive function. We use an integer variable `vowel` for that purpose, where `1` denotes `a`, `2` denotes `e`, and so on.
- We begin with $$n$$ positions and first vowel `a`(1) and use method `countVowelStringUtil ` to recursively compute all the combinations.
- On every recursion, we decrement `n` by 1 as we have used up that position and continue passing the same vowel. On the backtrack, we move on to the next vowel.

_Base Case_

If $$n = 0$$, we have reached the end of the string and found one combination. Hence, we return 1 and backtrack.

<iframe src="https://leetcode.com/playground/FmXWNp72/shared" frameBorder="0" width="100%" height="361" name="FmXWNp72"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n^{5})$$. We have to calculate the size of the recursion tree. Let's analyze the number of nodes generated at each level. The following figure illustrates the number of enumerations at level $$2$$.

![img](../Figures/5555/timeComplexityBruteForce.png)

   Mathematically, the total number of enumerations at each level can be analyzed as follows,
1) 	If we choose vowel `a` for $$i^{th}$$ position, we have $$i-1$$ positions left and we could choose from one of the $$5$$ vowels `(a, e, i, o, u)` as next vowel character.

    Thus, from $$5$$ vowels, we could choose $$i-1$$ vowels with repetitions ([K - Combinations With Repetitions](https://en.wikipedia.org/wiki/Combination#Number_of_combinations_with_repetition)), which can be written as,

      $$\left(\!\!{5\choose i-1}\!\!\right)$$ $$= \frac{(5 + (i - 1)-1)}{(5-1)! \cdot (i-1)!} = \frac{(i)\cdot (i+1) \cdot (i+2) \cdot (i+3)}{24} $$

2) If we choose vowel `e` for $$i^{th}$$ position, we have $$i-1$$ positions left and we could choose from one of the $$4$$ vowels `(e, i, o, u)` as next vowel character.

    $$\left(\!\!{4\choose i-1}\!\!\right)$$ $$= \frac{(4 + (i - 1)-1)!}{(4-1)! \cdot (i-1)!} = \frac{(i)\cdot (i+1) \cdot (i+2)}{6} $$

3) Similarly, if we choose vowel `i` for $$i^{th}$$ position, we are left with  3 vowels `(i, o, u)` for $$i-1$$ positions.

    $$\left(\!\!{3\choose i-1}\!\!\right)$$ $$= \frac{(3 + (i - 1)-1)!}{(3-1)! \cdot (i-1)!} = \frac{(i)\cdot (i+1)}{2} $$

4) Similarly, if we choose vowel `o` for $$i^{th}$$ position, we are left with  2 vowels `(o, u)` for $$i-1$$ positions.

    $$\left(\!\!{2\choose i-1}\!\!\right)$$ $$= \frac{(2 + (i - 1)-1)!}{(2-1)! \cdot (i-1)!} = i $$

5) Lastly, if we choose vowel `u` for $$i^{th}$$ position, we are left with only one vowel `(u)` for $$i-1$$ positions.

    $$\left(\!\!{1\choose i-1}\!\!\right)$$ $$= \frac{(1 + (i - 1)-1)!}{(1-1)! \cdot (i-1)!} = 1 $$


   Adding above equations we get,
             $$\frac{(i)\cdot (i+1) \cdot (i+2) \cdot (i+3)}{24} + \frac{(i)\cdot (i+1) \cdot (i+2)}{6} +\frac{(i)\cdot (i+1)}{2} + i + 1 $$.

   Thus, we could say that at each level $$i$$, there would be roughly $$i^{4}$$ possible branches in the recursion tree. Since, the maximum depth of recursion would be $$n$$, the total number of nodes can be calculated as,

   $$\sum\limits_{i=1}^n i^4 = \mathcal{O}(n^{4+1}) = \mathcal{O}(n^5)$$.

   This gives us total time complexity as $$\mathcal{O}(n^{5})$$.
- Space Complexity: $$\mathcal{O}(n)$$. This space will be used to store the recursion stack. We can’t have more than $$n$$ recursive calls on the call stack at any time.

---

#### Approach 2: Decoding the Pattern, Using Recursion

**Intuition**

If we observe, the problem follows a specific pattern. For any given $$n$$ and number of $$\text{vowels}$$ , the number of combinations is always equal to the _sum_ of following,
 - Number of combinations for previous $$n$$ i.e $$n-1$$  and same number of $$vowels$$
- Number of combinations for $$vowels-1$$ and same $$n$$.

The following figure illustrates this idea using an example.

![img](../Figures/5555/combinationPattern.png)

Thus, the recurrence relation can be written as,
```
countVowelStrings (n, vowels) = isSum(n - 1, vowels) + isSum(n, vowels - 1)
```

**Algorithm**

- We start with given $$n$$ and vowels as $$5$$. `{a, e, i, o, u}`.
- Recursively calculate the result for every $$n$$ and $$\text{vowels}$$ using above recurrence relation.
- We must backtrack on the following base cases,
    - If $$n = 1$$, we have only one position left. Here, we must return the current number of vowels.

      _Example_, if $$n = 1$$ and $$\text{vowels} = 3$$. As there could be 3 combinations `a, e, i`, the result would be 3.

   - If $$\text{vowels} = 1$$, we must return $$1$$.

     _Example_, if $$n=3$$, and only 1 vowel `u` is left, there could be only one combination `uuu`.

**Implementation**

<iframe src="https://leetcode.com/playground/Yr6gcTt7/shared" frameBorder="0" width="100%" height="327" name="Yr6gcTt7"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n^{5})$$, as for a given $$n$$ and $$5$$ vowels (`a`, `e`, `i`, `o`, `u`), there are roughly $$n^{5}$$ possible candidates (Refer time complexity of _Approach 1_).This gives us time complexity as $$\mathcal{O}(n^{5})$$.

- Space Complexity: $$\mathcal{O}(n)$$. This space will be used to store the recursion stack. As the maximum depth of recursion would be $$\max(n,5)$$, the space required for internal call stack would roughly $$\mathcal{O}(n)$$.

---

#### Approach 3: Using Recursion + Memoization, Top Down Dynamic Programming

**Intuition**

If you have solved problems on [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) before, it is pretty easy to optimize the _Approach 2_  using Memoization. In the above approach, the problem can be broken down into subproblems. On drawing the recursion tree, it is evident that the same subproblems are computed multiple times.

![img](../Figures/5555/vowelRecursionTree.png)

In the above recursion tree, we could see that subproblems `(2, 4)`, `(2, 3)` and `(1, 2)` are computed multiple times and the result would be always the same. The problem has [Overlapping Subproblem](https://en.wikipedia.org/wiki/Overlapping_subproblems) and can be solved using _Dynamic Programming_.

**Algorithm**

 We could have stored the results of our computation for the first time and used it later.
 This technique of computing once and returning the stored value is called [Memoization](https://en.wikipedia.org/wiki/Memoization).

As we must store results for every $$n$$ and $$\text{vowels}$$, we use a two dimensional array $$\text{memo}$$ of size $$n \cdot 5$$ and follow the following steps for each recursive call :
- Check in the memo if we have already calculated results for a given $$n$$ and $$\text{vowels}$$ and return the result stored in the memo.
- Save the results of any calculations to $$\text{memo}$$.

> Since arrays are 0-indexed, we initialize the array of size (n + 1, 5 + 1) and use the range 1..n and 1..5 for easier understanding and keeping it consistent with the previous approach.

**Implementation**

<iframe src="https://leetcode.com/playground/2Mw75kD5/shared" frameBorder="0" width="100%" height="412" name="2Mw75kD5"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n)$$, as for every $$n$$ and $$\text{vowels}$$ we calculate result only once, the total number of nodes in the recursion tree would be $$n \cdot 5$$, which is roughly equal to $$n$$.

- Space Complexity : $$\mathcal{O}(n)$$, as we use a 2D array $$\text{memo}$$ of size $$n \cdot 5$$ and the size of internal call stack would also be $$n$$ (As explained in _Approach 2_), the space complexity would be $$\mathcal{O}(n+n) = \mathcal{O}(n+n)$$.

---

#### Approach 4: Bottom Up Dynamic Programming, Tabulation

**Intuition**

This is another approach to solve the Dynamic Programming problems. We use the iterative approach and store the result of subproblems in bottom-up fashion also known as Tabulation. We store the results of previous computations in tabular format and use those results for the next computations.

**Algorithm**

We maintain a 2D array , $$\text{dp}$$ of size $$n \cdot 5$$ where, $$\text{dp[n][vowels]}$$ denotes the total number of combinations for given $$n$$ and number of $$\text{vowels}$$. Using the recurrence relation established in _Approach 2_, we could iteratively calculate the value for $$\text{dp[n][vowels]}$$ as,  

```
dp[n][vowels] = dp[n - 1][vowels] + dp[n][vowels - 1]
```
As this is the Bottom Up approach to solve the problem, we must initialize the table for the base cases. The base cases are the same as in _Approach 2_.

-  If $$n = 1$$, the number of combinations are always equal to number of $$\text{vowels}$$. Hence, we initialize all the values of $$\text{dp[1][vowels]}$$ with $$\text{vowels}$$.  
-  If $$vowels = 1$$, the number of combinations are always equal to 1. Hence, we initialize all the values of $$\text{dp[n][1]}$$ with $$1$$.  

**Implementation**

<iframe src="https://leetcode.com/playground/YtzrvsiD/shared" frameBorder="0" width="100%" height="327" name="YtzrvsiD"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n)$$, as we iterate $$5 \cdot n$$ times to fill the $$\text{dp}$$ array, the time complexity is approximately $$\mathcal{O}(5 \cdot n) =\mathcal{O}(n)$$.

- Space Complexity : $$\mathcal{O}(n)$$, as we use a 2D array of size $$n \cdot 5$$, the space complexity would be $$\mathcal{O}(n)$$.
---

#### Approach 5: Math

**Intuition and Algorithm**

The problem is a variant of finding [Combinations](https://en.wikipedia.org/wiki/Combination). Mathematically, the problem can be described as, given 5 vowels (let $$k = 5$$), we want to find the number of combinations using only $$n$$ vowels. Also, we can repeat each of those vowels multiple times.

> In other words, from $$k$$ vowels ($$k = 5$$), we can choose $$n$$ vowels with repetition. Denoted as $$\left(\!\!{k \choose n}\!\!\right)$$, the formulae for [Combination with Repetition ](https://en.wikipedia.org/wiki/Combination#Number_of_combinations_with_repetition) is given by,
>
> $$\left(\!\!{k \choose n}\!\!\right)$$ $$= \frac{(k + n - 1)!}{ (k - 1)! n!}$$
>

We know that the $$k$$ value is $$5$$ as there are always $$5$$ vowels to choose from. Substituting $$k$$ as $$5$$ in above formulae,

$$\left(\!\!{5\choose n}\!\!\right)$$ $$= \frac{(n+4) \cdot (n+3) \cdot (n+2) \cdot (n+1)}{24}$$

The derivation can be illustrated as follows.

![img](../Figures/5555/mathematicalDerivation.png)


**Implementation**

<iframe src="https://leetcode.com/playground/9jnHdcHL/shared" frameBorder="0" width="100%" height="157" name="9jnHdcHL"></iframe>

**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(1)$$, as the approach runs in constant time.

- Space Complexity: $$\mathcal{O}(1)$$, as the approach uses constant extra space.