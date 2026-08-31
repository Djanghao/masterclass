# [Java] Summary of Usages of split() and replace() vs. replaceAll()

**Author:** junhaowanggg
**Votes:** 33
**Link:** [https://leetcode.com/problems/most-common-word/solutions/411380/](https://leetcode.com/problems/most-common-word/solutions/411380/)

---

Reference: [LeetCode](https://leetcode.com/problems/most-common-word/)
Difficulty: <span class="green">Easy</span>

## Problem

> Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  **It is guaranteed there is at least one word that isn't banned, and that the answer is unique.**

> Words in the list of banned words are **given in lowercase**, and free of punctuation.  Words in the paragraph are not case sensitive. The answer is in **lowercase**.

**Note:** 

- 1 <= `paragraph.length` <= 1000.
- 0 <= `banned.length` <= 100.
- 1 <= `banned[i].length` <= 10.
- The answer is unique, and written in lowercase (even if its occurrences in `paragraph` may have uppercase symbols, and even if it is a proper noun.)
- Paragraph only consists of `letters`, `spaces`, or the punctuation symbols `!?',;.`.
- There are no hyphens or hyphenated words.
- Words only consist of letters, never apostrophes or other punctuation symbols.

**Example:** 

```java
Input: "Bob hit a ball, the hit BALL flew far after it was hit."
banned: ["hit"]
Output:  "ball"

Input: "a, a, a, a, b,b,b,c, c"
banned: ["a"]
Output: "b"
```


## Analysis

### Hash Set + Hash Map

**Note:** `str.split("\\\\s+")` is equivalent to `str.split("\\\\s+", 0)`. It means split the string for as many times as possible, and remove empty result `""`. So `trim()` is not necessary here.

Original code:

```java
public String mostCommonWord(String paragraph, String[] banned) {
  String str = preprocess(paragraph);
  String[] words = str.split("\\\\s+"); // split by one or more spaces
  // ban set
  Set<String> banSet = new HashSet<>();
  for (String s : banned) banSet.add(s);
  // count map
  Map<String, Integer> countMap = new HashMap<>();
  int maxCount = 0;
  for (String s : words) {
    if (banSet.contains(s)) continue;
    int count = countMap.getOrDefault(s, 0) + 1;
    maxCount = Math.max(maxCount, count);
    countMap.put(s, count);
  }
  // find the string with maxCount
  for (String s : countMap.keySet()) {
    if (countMap.get(s) == maxCount) {
      return s;
    }
  }
  return null;
}
```

Here is the `preprocess` function:

```java
// "a, a, a, a, b,b,b,c, c"
// ["a"]
// Output: "b"
private String preprocess(String s) {
  s = s.replace("!", " "); // for "a,a,a,,a", we should replace by " " instead of ""
  s = s.replace("?", " ");
  s = s.replace("'", " ");
  s = s.replace(",", " ");
  s = s.replace(";", " ");
  s = s.replace(".", " ");
  s = s.trim();  // should be put after all those replace()
  s = s.toLowerCase();
  return s;
}
```

Or:

```java
private String preprocess(String s) {
  s = s.replaceAll("\\\\!|\\\\?|\\\\'|\\\\,|\\\\;|\\\\.", " ");
  s = s.trim();  // should be put after all those replace()
  s = s.toLowerCase();
  return s;
}
```

**`replace()` vs. `replaceAll()`:**

- `replace(char oldChar, char newChar)`
- `replace(CharSequence target, CharSequence replacement)`
- `replaceAll(String regex, String replacement)`

Notice that they all replace all occurrences. `All` in the name of `replaceAll` doesn't mean only it can replace all occurrences.


A succinct version:

- `\\\\w+` matches all `alphanumeric` characters and `_`.
- `\\\\W+` matches all characters except `alphanumeric` characters and `_`.
- They are opposite.


```java
private String preprocess(String s) {
  s = s.replaceAll("\\\\W+", " ");
  s = s.trim().toLowerCase();
}
```

A more succinct version:

```java
String[] words = s.toLowerCase().split("\\\\W+"); // "\\\\W+" includes spaces
```

Rules about `split()`: [271. Encode and Decode Strings](http://junhaow.com/lc/problems/string/271_encode-and-decode-strings.html)


```java
"..".split("\\\\W+", -1); // ["", ""]
"..".split("\\\\W+", 0);  // []
"..".split("\\\\W+", 1);  // [".."]
"..".split("\\\\W+", 2);  // ["", ""]
```






