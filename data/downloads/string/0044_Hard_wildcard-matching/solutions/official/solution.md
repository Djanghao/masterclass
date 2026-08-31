# Official Solution

**Link:** [https://leetcode.com/problems/wildcard-matching/solution/](https://leetcode.com/problems/wildcard-matching/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Recursion with Memoization

**Intuition**

The first idea here is a recursion. It is a relatively straightforward approach but quite time-consuming because of the huge recursion depth for long input strings.

- If the strings are equal (`p == s`), then return `True`.

- If the pattern matches any string (`p == '*'`), then return `True`.

- If `p` is empty, or `s` is empty, return `False`.

- If the current characters match (`p[0] == s[0]` or `p[0] == '?'`), then compare the next ones and return `isMatch(s[1:], p[1:])`.

- If the current pattern character is a star (`p[0] == '*'`), then there are two possible situations:

    - The star matches no characters, and hence the answer is `isMatch(s, p[1:])`.
    
    - The star matches one or more characters, and so the answer is `isMatch(s[1:], p)`.
    
- If `p[0] != s[0]`, return `False`.

![pic](../Figures/44/stupid.png)

The problem with this algorithm is that it doesn't pass all test cases because of time limit issues, and hence has to be optimized. Here is what could be done:

1. _Memoization_. That is a standard way to optimize the recursion. Let's have a memoization hashmap using pair `(s, p)` as a key and match/don't match as a boolean value. One could keep all already checked pairs `(s, p)` in this hashmap, so that if there are any duplicate checks, the answer is right here, and there is no need to proceed to the computations again.

2. _Clean up of the input data_. Whether the patterns with multiple stars in a row `a****bc**cc` are valid wildcards or not, they could be simplified without any data loss to `a*bc*cc`. Such a cleanup helps to decrease the recursion depth. 

**Algorithm**

Here is the algorithm.

- Clean up the input by replacing more than one star in a row with a single star: `p = remove_duplicate_stars(p)`.

- Initiate the memoization hashmap `dp`.

- Return the helper function with a cleaned input: `helper(s, p)`.

- `helper(s, p)`:

    - If `(s, p)` is already known and stored in `dp`, return the value.

    - If the strings are equal (`p == s`), or the pattern matches any string (`p == '*'`), add `dp[(s, p)] = True`.
    
    - Else if `p` is empty, or `s` is empty, add `dp[(s, p)] = False`.
    
    - Else if the current characters match (`p[0] == s[0]` or `p[0] == '?'`), then compare the next ones and add `dp[(s, p)] = helper(s[1:], p[1:])`.
    
    - Else if the current pattern character is a star (`p[0] == '*'`), then there are two possible situations: the star matches no characters, and the star matches one or more characters: `dp[(s, p)] = helper(s, p[1:]) or helper(s[1:], p)`.
        
    - Else `p[0] != s[0]`, then add `dp[(s, p)] = False`.
    
    - Now when the value is computed, return it: `dp[(s, p)]`.

**Implementation**   

<iframe src="https://leetcode.com/playground/C8VDAToH/shared" frameBorder="0" width="100%" height="500" name="C8VDAToH"></iframe>

**Complexity Analysis**

* Time complexity: $$O(S \cdot P \cdot (S + P))$$
	
    * Removing duplicate stars requires us to traverse the string `p` once, this requires $$O(P)$$ time. 
	
    *  Regarding the helper function, every non-memoized recursive call we will: 
        1. Check if `helper(s, p)` has already been calculated.  This takes $$O(S + P)$$ time to create a hash of the tuple `(s, p)` the first time and $$O(1)$$ time to check if the result has already been cached.

        2. Go through our if statements.  If `(s, p)` is one of the base cases, this will take $$O(min(S, P))$$ time for the string equality check or just $$O(1)$$ time for other checks, otherwise, it will take $$O(S + P)$$ time to create a substring `s[1:]` and a substring `p[1:]`.  Here, let's assume the worst-case scenario where most of the non-memoized recursive calls require $$O(S + P)$$ time.  

        3. Then we will cache our result, which takes $$O(1)$$ time since the hash for tuple `(s, p)` was already created when we checked if the result for `(s, p)` is already cached.
	      
        So in total, we spend $$O(2 \cdot (S + P)) = O(S + P)$$ time on every non-memoized call ($$S + P$$ for creating a hash and $$S + P$$ for creating substrings).  We can only have as many non-memoized calls as there are combinations of `s` and `p`. Therefore, in the worst case, we can have $$S \cdot P$$ non-memoized calls. This gives us a total time spent on non-memoized calls of $$O(S \cdot P \cdot (S + P))$$.
	      
    * As for the memoized calls, for each non-memoized call, we can make at most 2 additional calls to `helper`.  This means that there will be at most $$S \cdot P$$ memoized calls.  Each memoized call takes $$O(S + P)$$ time to create the hash for `(s, p)` and $$O(1)$$ time to get the cached result.  So the total time spent on memoized calls is $$O(S \cdot P \cdot (S + P))$$ which is a loose upper bound. 

    * Adding all 3 time complexities together we get: $$O(P + 2 \cdot S \cdot P \cdot (S + P)) = O(S \cdot P \cdot (S + P))$$.
	
        > Note: This approach can be optimized by using two pointers to track the current position on `s` and `p` instead of passing substrings of `s` and `p` as arguments.  To improve readability, this was not implemented here, however, doing so will reduce the time complexity to $$O(S \cdot P)$$ since hashing two integers takes $$O(1)$$ time and each recursive call to `helper` would no longer require creating new substrings which takes linear time.  Thus the total time complexity is $$O(1)$$ per call for a maximum of $$S \cdot P$$ non-memoized calls and $$S \cdot P$$ memoized calls.

* Space complexity: $$O(S \cdot P)$$. Creating a new string `p` requires $$O(P)$$ space. The recursion call stack may exceed `max(S, P)` in cases such as `(s, p)` = `(aaab, *a*b)`, however, it is bounded by $$O(S + P)$$.  Lastly, the hashmap requires $$O(S \cdot P)$$ space to memoize the result of each call to `helper`.
<br />
<br />


---
### Approach 2: Dynamic Programming 

**Intuition**

The recursion approach above shows how painful the large recursion depth could be, so let's try something more iterative. 

Memoization from the first approach gives an idea to try dynamic programming. The problem is very similar to [Edit Distance problem](https://leetcode.com/problems/edit-distance/solution/), so let's use exactly the same approach here.

The idea would be to reduce the problem to simple ones. For example, there is a string `adcebdk` and pattern `*a*b?k`, and we want to compute if there is a match for them: `D = True/False`. One could notice that it seems to be more simple for short strings and patterns and so it would be logical to relate a match `D[p_len][s_len]` with the lengths `p_len` and `s_len` of input pattern and string correspondingly.

Let's go further and introduce a match `D[p_idx][s_idx]` which is a match between the first `p_idx` characters of the pattern and the first `s_idx` characters of the string.

![pic](../Figures/44/dp_match2_fixed.png)

It turns out that one could compute `D[p_idx][s_idx]`, knowing a match without the last characters `D[p_idx - 1][s_idx - 1]`.

If the last characters are the same or the pattern character is '?', then 

> $$D[p_{idx}][s_{idx}] = D[p_{idx} - 1][s_{idx} - 1] \qquad (1)$$

![pic](../Figures/44/word_match3.png)

If the pattern character is '*' and there was a match on the previous step `D[p_idx - 1][s_idx - 1] = True`, then 

- The star at the end of the pattern still results in a match. 

- The star could match as many characters as you wish.

> $$D[p_{idx} - 1][i] = \textrm{True}, i \ge s_{idx} - 1 \qquad(2)$$


So each step of the computation would be done based on the previous ones, as follows: 

![pic](../Figures/44/if_match.png)

![pic](../Figures/44/dpstar.png)

**Algorithm**

- Start from the table `D` filled with `False` everywhere but `D[0][0] = True`.

- Apply rules (1) and (2) in a loop and return `D[p_len][s_len]` as an answer.

![pic](../Figures/44/fixed.png)

**Implementation**

<iframe src="https://leetcode.com/playground/AVMvpQ67/shared" frameBorder="0" width="100%" height="500" name="AVMvpQ67"></iframe>

**Complexity Analysis**

* Time complexity: $$O(S \cdot P)$$ where $$S$$ and $$P$$ are lengths of the input string and the pattern respectively. 
* Space complexity: $$O(S \cdot P)$$ to store the matrix.
<br />
<br />


---
### Approach 3: Backtracking

**Intuition**

Complexity $$O(S \cdot P)$$ is much better than $$O(S \cdot P \cdot (S + P))$$, but still could be improved. There is no need to compute the entire matrix, i.e., to check all the possibilities for each star:

- Star matches zero characters.
- Star matches one character.
- Star matches two characters. 

...

- Star matches all remaining characters.  

Let's just pick up the first opportunity "matches zero characters" and proceed further. If this assumption would lead to "no match" situation, then _backtrack_: come back to the previous star, assume now that it matches one more character (one), and proceed again. Again "no match" situation? _Backtrack again_: come back to the previous star, and assume now that it matches one more character (two), etc. 

![pic](../Figures/44/backtrack.png)

**Algorithm**

Here is the algorithm.

- Let's use two pointers here: `s_idx` to iterate over the string, and `p_idx` to iterate over the pattern. While `s_idx < s_len`:

    - If there are still characters in the pattern (`p_idx < p_len`) and the characters under the pointers match (`p[p_idx] == s[s_idx]` or `p[p_idx] == '?'`), then move forward by increasing both pointers.
    
    - Otherwise, if there are still characters in the pattern (`p_idx < p_len`), and `p[p_idx] == '*'`, then first check "match zero characters" situation, i.e., increase only pattern pointer `p_idx++`. Write down for a possible backtrack the star position in `star_idx` variable, and the current string pointer in `s_tmp_idx` variable.
    
    - Else if there is "no match" situation: the pattern is used up `p_idx < p_len` or the characters under the pointers don't match. 
    
        - If there were no stars in the pattern, i.e., no `star_idx`, return `False`.
        
        - If there was a star, then backtrack: set pattern pointer just after the last star `p_idx = star_idx + 1`, and string pointer `s_idx = s_tmp_idx + 1`, i.e., assume that this time the star matches _one more character_. Save the current string pointer for the possible backtrack `s_tmp_idx = s_idx`.
        
- Return `True` if all remaining characters in the pattern are stars. 

**Implementation**

<iframe src="https://leetcode.com/playground/Wnff39GC/shared" frameBorder="0" width="100%" height="500" name="Wnff39GC"></iframe>

**Complexity Analysis**

* Time complexity: $$O(\min(S, P))$$ for the best case and better than $$O(S \log P)$$ for the average case, where $$S$$ and $$P$$ are lengths of the input string and the pattern correspondingly. Please refer to [this article](https://arxiv.org/pdf/1407.0950.pdf) for detailed proof. However, in the worst-case scenario, this algorithm requires $$O(S \cdot P)$$ time.
* Space complexity: $$O(1)$$ since it's a constant space solution.
<br />
<br />


---
### Further reading

There are a lot of search-related questions around this problem that could pop up during the interview. To prepare, you could read about [string searching algorithm](https://en.wikipedia.org/wiki/String-searching_algorithm) and [KMP algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm).