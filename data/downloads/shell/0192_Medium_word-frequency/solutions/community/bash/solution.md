# 192: Solution step by step explanation

**Author:** Marlen09
**Votes:** 13
**Link:** [https://leetcode.com/problems/word-frequency/solutions/3218865/](https://leetcode.com/problems/word-frequency/solutions/3218865/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Explanation:

- cat words.txt reads the contents of the file
- tr -s ' ' '\
' replaces all spaces with newlines to separate each word into its own line
- sort sorts the words in alphabetical order
- uniq -c counts the frequency of each unique word
- sort -rn sorts the words in descending order of frequency
- awk '{print $2 " " $1}' prints the output in the desired format of "word count"

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
cat words.txt | tr -s ' ' '\
' | sort | uniq -c | sort -rn | awk '{print $2 " " $1}'

```