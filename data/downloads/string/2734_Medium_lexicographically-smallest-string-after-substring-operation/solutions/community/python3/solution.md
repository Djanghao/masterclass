# Python 3   ||   7 lines, w/ explanation    ||   T/S: 92% / 18%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3626246/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3626246/)

---

The code first splits the string `s` at every occurrence of the character 'a' using the split function. This creates a list arr containing the substrings (including null strings) that are between the 'a' characters.

Next, the code iterates over the elements of `arr`. It checks whether the current substring `ss` is non-empty. If it is, it replaces the characters in `ss` with their lexicographically smaller counterparts. This is done by converting each character to its *ASCII* value, subtracting 1, and converting it back to a character using `chr`. The modified substring is stored back in `arr[i]`, and the loop is terminated using the break statement.

If the loop completes without finding a non-empty substring, then the string`s` consists only of 'a' characters, and, the function returns the string obtained by replacing the last character of `s` with 'z'.

Finally, the function joins the elements of `arr` back together using the letter 'a' as a separator, and returns the resulting string. --*ChatGPT*
```
class Solution:
    def smallestString(self, s: str) -> str:

        arr = s.split('a')

        for i, ss in enumerate(arr):
            if ss:
                arr[i] = ''.join([chr(ord(ch)-1) for ch in ss])
                break

        else: return s[:-1] + 'z'
        
        return 'a'.join(arr)
```
[https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/submissions/968982692/](http://)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~`len(s)`.