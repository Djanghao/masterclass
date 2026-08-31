# PYTHON || BEAT 95%🔥|| 100% EFFICIENT🔥|| OPTIMAL SOLUTION || EASY TO UNDERSTAND ||

**Author:** Adit_gaur
**Votes:** 62
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/5264467/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/5264467/)

---

# if it's help, please up \u2B06vote!\u2764\uFE0F and comment\uD83D\uDD25
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The problem requires reversing the order of words in a given string. The intuitive approach is to split the string into a list of words, reverse the order of the list, and then join the words back into a string.
# Approach
<!-- Describe your approach to solving the problem. -->
- Split the input string into a list of words using the split() method.
- Reverse the order of the list of words using the slicing technique [::-1].
- Join the reversed list of words back into a string using the join() method with a space character ' ' as the separator.
- Return the resulting string.

# Complexity
- Time complexity: $O(n)$
Where n is the length of the input string s.
The split() and join() operations take linear time proportional to the length of the string.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
Where n is the length of the input string s.
A new list of words is created, and the output string has the same length as the input string.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        # Split the string into words
        words = s.split()
        
        # Reverse the list of words
        reversed_words = words[::-1]
        
        # Join the reversed words with spaces
        reversed_string = ' '.join(reversed_words)
        
        return reversed_string
```
![7c17f983-3b8b-4738-b722-c1c1466f9510_1682940288.2823734.jpeg](./images/0.jpeg)
