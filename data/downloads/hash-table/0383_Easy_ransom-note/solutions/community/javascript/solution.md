# Easiest solution and best readability with O(1) space | no extra memory allocated

**Author:** thakursaad
**Votes:** 92
**Link:** [https://leetcode.com/problems/ransom-note/solutions/2651027/](https://leetcode.com/problems/ransom-note/solutions/2651027/)

---

Algorithm:
1. We have two strings.
2. we are iterating over every **char** in magazine.
3. if we find that **char** in the **ransomeNote**, we will replace it with an empty string `''`. That means we are removing that **char** from **ransomeNote**. 
4. removing all the char of **ransomeNote** that mathces that **char** from **magazine**
5. at last if the **magazine** remains empty string. we return `true`. else `false`


```
var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  
  if (!ransomNote) return true;
  else return false;
};
```

Memory Usage: **44.8** MB, less than **61.76%**
Runtime: **111** ms, faster than **76.27%**
Time Complexity: **O(n^2)** because we are using `replace` here which iterates over the string.

**`Please leave an upvote if it helped \uD83D\uDE0A`**