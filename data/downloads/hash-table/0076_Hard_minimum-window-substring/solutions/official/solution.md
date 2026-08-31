# Official Solution

**Link:** [https://leetcode.com/problems/minimum-window-substring/solution/](https://leetcode.com/problems/minimum-window-substring/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sliding Window

#### Intuition

The question asks us to return the minimum window from the string $S$ which has all the characters of the string $T$. Let us call a window `desirable` if it has all the characters from $T$.

We can use a simple sliding window approach to solve this problem.

In any sliding window based problem we have two pointers. One $right$ pointer whose job is to expand the current window and then we have the $left$ pointer whose job is to contract a given window. At any point in time only one of these pointers move and the other one remains fixed.

The solution is pretty intuitive. We keep expanding the window by moving the right pointer. When the window has all the desired characters, we contract (if possible) and save the smallest window till now.

The answer is the smallest desirable window.

For eg. ` S = "ABAACBAB" T = "ABC"`. Then our answer window is `"ACB"` and shown below is one of the possible desirable windows.
<center>
<img src="../Figures/76/76_Minimum_Window_Substring_1.png" width="500"/>
</center>
<br>

#### Algorithm

1. We start with two pointers, $left$ and $right$ initially pointing to the first element of the string $S$.

2. We use the $right$ pointer to expand the window until we get a desirable window i.e. a window that contains all of the characters of $T$.

3. Once we have a window with all the characters, we can move the left pointer ahead one by one. If the window is still a desirable one we keep on updating the minimum window size.

4. If the window is not desirable any more, we repeat $step \; 2$ onwards.

<center>
<img src="../Figures/76/76_Minimum_Window_Substring_2.png" width="500"/>
</center>

The above steps are repeated until we have looked at all the windows. The smallest window is returned.

<center>
<img src="../Figures/76/76_Minimum_Window_Substring_3.png" width="500"/>
</center>
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/gXfparKj/shared" frameBorder="0" width="100%" height="500" name="gXfparKj"></iframe>

#### Complexity Analysis

* Time Complexity: $O(|S| + |T|)$ where |S| and |T| represent the lengths of strings $S$ and $T$.
In the worst case we might end up visiting every element of string $S$ twice, once by left pointer and once by right pointer. $|T|$ represents the length of string $T$.

* Space Complexity: $O(|S| + |T|)$. $|S|$ when the window size is equal to the entire string $S$. $|T|$ when $T$ has all unique characters.

---

### Approach 2: Optimized Sliding Window

#### Intuition

A small improvement to the above approach can reduce the time complexity of the algorithm to $O(2*|filtered\_S| + |S| + |T|)$, where $filtered\_S$ is the string formed from S by removing all the elements not present in $T$.

This complexity reduction is evident when $|filtered\_S| <<< |S|$.

This kind of scenario might happen when length of string $T$ is way too small than the length of string $S$ and string $S$ consists of numerous characters which are not present in $T$.

#### Algorithm

We create a list called $filtered\_S$ which has all the characters from string $S$ along with their indices in $S$, but these characters should be present in $T$.

<pre>
  S = "ABCDDDDDDEEAFFBC" T = "ABC"
  filtered_S = [(0, 'A'), (1, 'B'), (2, 'C'), (11, 'A'), (14, 'B'), (15, 'C')]
  Here (0, 'A') means in string S character A is at index 0.
</pre>


We can now follow our sliding window approach on the smaller string $filtered\_S$.

#### Implementation

<iframe src="https://leetcode.com/playground/cF6sqNpZ/shared" frameBorder="0" width="100%" height="500" name="cF6sqNpZ"></iframe>

#### Complexity Analysis

* Time Complexity : $O(|S| + |T|)$ where |S| and |T| represent the lengths of strings $S$ and $T$. The complexity is same as the previous approach. But in certain cases where $|filtered\_S|$ <<< $|S|$, the complexity would reduce because the number of iterations would be $2*|filtered\_S| + |S| + |T|$.
* Space Complexity : $O(|S| + |T|)$.