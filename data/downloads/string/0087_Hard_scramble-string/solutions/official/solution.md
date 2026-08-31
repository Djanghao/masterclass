# Official Solution

**Link:** [https://leetcode.com/problems/scramble-string/solution/](https://leetcode.com/problems/scramble-string/solution/)

---

[TOC]

## Solution

---

### Approach: Dynamic Programming

#### Intuition

We have a recursive definition of scrambling a string `s`. First, we divide `s` into `x` and `y`. Then we either keep `s` as `x + y` or swap them and get `y + x`. After that, we scramble `x` and `y` independently. Let `x'` denote the scrambled `x` and `y'` denote the scrambled `y`. `s` will eventually become `x' + y'` or `y' + x'`.

![split](../Figures/87/diagram2.drawio.png)

How do we check whether a given string `t` is a scrambled string of `s`? First, we choose an index and cut `s` into `x` and `y` (`s = x + y`). Then, we see if we can cut `t` into `x'` and `y'` (`t = x' + y'` if we do not swap or `t = y' + x'` if we do). Since verifying that `x'` is a scrambled `x` and `y'` is scrambled `y` are smaller subproblems, we will solve the problem using dynamic programming.

We have two strings `s1` and `s2`.

For each given dp state, we need 3 variables: `length`, `i`, and `j`.

Each state will focus on two substrings. The first one will be a substring of `s1`, starting at index `i` with length equal to `length` - let's call this substring `s`. The second one will be a substring of `s2`, starting at index `j` with `length` - let's call this substring `t`.

Let `dp[length][i][j]` be a boolean representing whether `t` is a scrambled version of `s`.

The base case, as defined by the problem is when `length = 1`. Here we do not have to split strings into smaller ones, so we can easily compare the corresponding characters: `dp[1][i][j]` is `true` when `s1[i]` equals `s2[j]`, and `false` otherwise.

Now we need to write down the transitions of `dp`. We will use the following image as an example during the explanations.

![split](../Figures/87/diagram.drawio.png)

At each state, we need to perform a split on `s1`. We will consider all possible splits. If we are currently considering a substring with a length of `length`, then we could perform a split at any index `newLength`, where `0 < newLength < length`. (Here, `newLength` represents the length of the left string after the split). A split gives us two new strings:

- A substring of `s1` starting at index `i` and ending with index `i + newLength - 1`. This string has a length of `newLength` (Blue in the picture)

- A substring of `s1` starting at index `i + newLength` and ending at index `i + length - 1`. This string has a length of `length - newLength`. (Yellow in the picture)

For each split, we have two cases:

* Do not swap the blue and yellow parts. The corresponding substrings of `s2` must be scrambled versions of the substrings we just created by splitting `s1`. This means both `dp[newLength][i][j]` (representing the blue parts) and `dp[length - newLength][i + newLength][j + newLength]` (representing the yellow parts) must be true.
* Swap the blue and yellow parts. As you can see in the image, this misaligns the blue and yellow parts between `s1` and `s2`, but we still need the parts to match (we still need the blue part of `s1` to be a scrambled version of the blue part of `s2`, same with the yellow part). What are the new starting indices? For blue, it's `s1` starting with `i` and `s2` starting with `j + length - newLength`. For yellow, it's `s1` starting with `i + newLength` and `s2` starting with `j`. Thus, we need both `dp[newLength][i][j+length-newLength]` and `dp[length-newLength][i+newLength][j]` to be `true`.

Now we can formally write down the transitions. For `length > 1`, `dp[length][i][j]` is `true` if and only if for at least one `newLength` where `0 < newLength < length`:

`(dp[newLength][i][j] && dp[length-newLength][i+newLength][j+newLength]) || (dp[newLength][i][j+length-newLength] && dp[length-newLength][i+newLength][j])` is `true`.

Let `n` denote the length of the input strings. The answer to the problem is `dp[n][0][0]`, as starting at index `0` with length `n` is considering the entire input string.

#### Algorithm

1. Iterate `i` from `0` to `n-1`.
	* Iterate `j` from `0` to `n-1`.
		* Set `dp[1][i][j]` to the boolean value of `s1[i] == s2[j]`. (The base case of the DP).
2. Iterate `length` from `2` to `n`.
	* Iterate `i` from `0` to `n + 1 - length`.
		* Iterate `j` from `0` to `n + 1 - length`.
			* Iterate `newLength` from `1` to `length - 1`.
				* If `dp[newLength][i][j] && dp[length-newLength][i+newLength][j+newLength]) || (dp[newLength][i][j+l-newLength] && dp[l-newLength][i+newLength][j]` is `true`, set `dp[length][i][j]` to `true`.
3. Return `dp[n][0][0]`.

#### Implementation


<iframe src="https://leetcode.com/playground/XJvjmW6h/shared" frameBorder="0" width="100%" height="500" name="XJvjmW6h"></iframe>


#### Complexity Analysis

* Time complexity: $O(n^4)$.

We have four nested for loops (for `length`, `i`, `j`, `newLength`), each doing $O(n)$ iterations.

* Space complexity: $O(n^3)$.

We store the matrix `dp[n+1][n][n]` for dynamic programming.