# Official Solution

**Link:** [https://leetcode.com/problems/break-a-palindrome/solution/](https://leetcode.com/problems/break-a-palindrome/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Greedy

**Intuition**

We want to change the given non-empty palindromic string into the lexicographically smallest non-palindromic string by changing exactly one character. First, let's see if we can always change a non-empty palindromic string into a non-palindromic string. A non-empty palindromic string can be represented in two forms that are shown below. The first one has an even length (greater than or equal to 2) and the second one has an odd length.

![fig](../Figures/1328/1328A.png)
- Let's consider the first case, where the given string is a non-empty palindrome and has an even length. Since the length is even, we can divide the string into two halves. As shown in the figure above, the characters in the first half are in reverse order of the second half. The first character matches with the last character, the second character matches with the second last character, and so on. To change the string into a non-palindromic string, we only need to change a character in one of the two halves so that the two halves no longer match. This is always possible since we can always pick some character, change it, and the resulting string will no longer be a palindrome.

![fig](../Figures/1328/1328B.png)
- In the second scenario, the given string is a non-empty palindrome and has an odd length. As shown in the figure above, there will always be a single character in the middle along with the two halves. As in the previous case, the characters in the first half are in reverse order of the second half. It seems like we should always be able to change a character in either half, as we did previously, to make the string non-palindromic. However, the catch here is that the two halves could be empty, and in that case, we will be left with only the middle character, and changing it to any other character will not break the palindrome.

So the conclusion is that we can change a non-empty palindromic string into a non-palindromic string by changing one character only if the length of the string is greater than one.

So, now that we know when it is possible for us to return a non-palindromic string, let's try to find and return the lexicographically smallest one. One approach, which is quite intuitive, is to try changing each character in the string to all $$25$$ of the other characters. Changing each letter in a string of length $$N$$ into the other $$25$$ English lowercase letters gives us $$25*N$$ new strings. Then we can return the lexicographically smallest string. To do that, we would compare each string with the smallest string found so far. Thus, the time complexity of this solution is $$O(M \cdot N^2)$$ where $$M$$ is the number of letters we can change every character to, in this problem, that is $$25$$, but we can do better.

If we observe closely, we don't need to change each character to all $$25$$ other characters. Imagine we are currently looking at the character, say $$X$$, and we are changing it to all the letters from $$a$$ to $$z$$ except for $$X$$. The point to note here is if character $$b$$ is not equal to $$X$$, then there is no need to change the character $$X$$ to any other character from $$c$$ to $$z$$ because the string with character $$b$$ is going to be lexicographically smaller than the other strings with the letter from $$c$$ to $$z$$ at that position. So, we can greedily change every character of the string to the smallest different character and find the smallest string among all of the resulting strings. However, the time complexity will still be $$O(N^2)$$ because we need to compare $$N$$ strings of length $$N$$.

The last greedy optimization to improve the complexity of our algorithm relies on an observation similar to the one we just made. If we observe even more closely, for every character except $$a$$, the lexicographically smallest character is $$a$$. Therefore, all the characters except $$a$$ will be converted to $$a$$. Now, since we are changing the characters to $$a$$ and $$a$$ is the lexicographically smallest character, then among all the $$N$$ conversions of the string, which will be the lexicographically smallest? It will be the one in which $$a$$ is placed at the leftmost position. Thus, we need to change the first character in the string to $$a$$, and that will be the answer.

But what about the case when we cannot change any of the characters to $$a$$? For the strings made up of only character $$a$$ like $$aaa$$ or strings made up of exactly `N - 1` $$a$$'s (where `N` is the string length) and one different character in the middle, like $$aazaa$$, we need to discover another way. In the first case, there is no point in substituting $$a$$ for another $$a$$. In the second case, we cannot replace $$z$$ with some other character between $$a$$ and $$y$$ because the string will remain a palindrome. In this case, we must replace $$a$$, and the optimal character choice is $$b$$ because that's the smallest among all other letters. Since the character that we are replacing the existing character with is not the smallest, we should do the swap in the rightmost position.

Finally, one last improvement to the algorithm: instead of traversing over all the characters, we can only traverse the left half as the corresponding characters in the right half will be the same.

**Algorithm**

1. If the length of the string is $$1$$, return an empty string since we cannot create a non-palindromic string in this case.
2. Iterate over the string from left to the middle of the string: if the character is not $$a$$, change it to $$a$$ and return the string.
3. If we traversed over the whole left part of the string and still haven't got a non-palindromic string, it means the string has only $$a$$'s. Hence, change the last character to $$b$$ and return the obtained string.

**Implementation**

<iframe src="https://leetcode.com/playground/SPYTi75E/shared" frameBorder="0" width="100%" height="395" name="SPYTi75E"></iframe>

**Complexity Analysis**

 Let $$N$$ be the length of the given palindromic string.

* Time complexity: $$O(N)$$

    We traverse over $$N/2$$ characters and if we fail to find an answer during the traversal, then we change the last character of the string to $$b$$. Hence, the time complexity is $$O(N)$$.

* Space complexity: $$O(N)$$

    In Java, we need to change the string to a character array; hence the space complexity is $$O(N)$$. However, in C++, strings are mutable; hence the space complexity for the C++ solution is $$O(1)$$.
    

<br/>

---