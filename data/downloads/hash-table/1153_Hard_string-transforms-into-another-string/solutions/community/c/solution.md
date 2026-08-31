# [C++] Simple O(n) algorithm with explanation

**Author:** mhelvens
**Votes:** 6
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/355374/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/355374/)

---

It's easier to think about when `str1` _cannot_ be transformed, namely:

* If two equal `str1` characters are forced to transform to different `str2` characters.
* If any characters need to be 'swapped' (say, 'a' to 'b' and 'b' to a'), but there is no third character available as a temporary placeholder.

The first condition is straight-forward to check. For the second condition, it is only required that `str2` uses fewer than 26 unique characters.

We don't need to check `str1` for the second condition, because even if it does use 26 unique characters, we can use the first conversion to pool two characters into one, freeing up a character to use as a placeholder.

```C++
bool canConvert(string str1, string str2) {
  const int N = str1.size();

  // If the strings are equal, return early.
  // This case won't pass later in the algorithm.
  if (str1 == str2) return true;

  // Make indexing easier by moving the alphabet down to [0..26)
  for (char& c : str1) c -= 'a';
  for (char& c : str2) c -= 'a';

  // Return false if the same str1-char is ever forced to map to different str2-chars
  array<int8_t, 26> mapping;
  mapping.fill(-1);
  for (int i = 0; i < N; ++i) {
    if (mapping[str1[i]] == -1)
      mapping[str1[i]] = str2[i];
    if (mapping[str1[i]] != str2[i])
      return false;
  }

  // Return false if no temporary placeholder character is available.
  bitset<26> chars;
  int char_count = 0;
  for (char c : str2) {
    char_count += !chars[c];
    if (char_count == 26)
      return false;
    chars[c] = 1;
  }

  // OK!
  return true;
}
```