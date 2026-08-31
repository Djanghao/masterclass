# Official Solution

**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solution/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solution/)

---

### Approach: Traverse The String To Find The Longest Substring

#### Intuition

If the length of a string consisting entirely of the character $1$ is $k$, then the number of substrings consisting of all $1$ characters (including the string itself) is $\dfrac{k \times (k + 1)}{2}$.

First, find all the longest substrings that contain only the character $1$. The phrase “the longest substring that contains only the character $1$” means that, assuming the substring’s index range is $[i, j]$ (inclusive), where $i \le j$, all characters within the substring are $1$. Additionally, the index $i$ must either be at the leftmost position of the string $s$ or the character at index $i - 1$ must be $0$, and the index $j$ must either be at the rightmost position of $s$ or the character at index $j + 1$ must be $0$.

After identifying all such longest substrings containing only the character $1$, the total number of substrings consisting entirely of $1$ can be calculated.

The specific method is to traverse the string from left to right. Whenever a character $1$ is encountered, count the number of consecutive $1$s. When a character $0$ is encountered, it indicates that the traversal of the current substring containing only $1$s has ended. Compute the number of substrings based on the length of this substring, then reset the counter for consecutive $1$s. After the traversal is complete, if the counter for consecutive $1$s is still greater than zero, it means there is one final substring consisting entirely of $1$s, so the number of substrings for it should also be calculated.

#### Implementation

<iframe src="https://leetcode.com/playground/Reecan3v/shared" frameBorder="0" width="100%" height="446" name="Reecan3v"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

- Time complexity: $O(n)$.
  
  The string is traversed once.

- Space complexity: $O(1)$.
  
  Only a few additional variables are used.

---