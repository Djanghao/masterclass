# Simple and Fast Solution O(N-M)

**Author:** luciococorullo17
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4120555/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/4120555/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
You need to find out if the substring B is present in the string A.
# Approach
<!-- Describe your approach to solving the problem. -->
Iterating on the string A we can extract the substring that starts at i and ends at i + needle.lenght. Once you got the substring just compare it with needle, if its equal return i;

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n-m)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ In place

# Code
```
class Solution {
  int strStr(String haystack, String needle) {
   if (needle.isEmpty || haystack.isEmpty || needle.length > haystack.length)
    return -1;

  for (int i = 0; i <= haystack.length - needle.length; i++) {
    final String substring = haystack.substring(i, i + needle.length);
    if (substring == needle) {
      return i;
    }
  }
  return -1;
}
}
```