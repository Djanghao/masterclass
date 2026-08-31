# 【Video】Simply create prefix between 2 words

**Author:** niits
**Votes:** 169
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/6032134/](https://leetcode.com/problems/longest-common-prefix/solutions/6032134/)

---

# Intuition
Create longest common prefix betweeen 2 words.

# Solution Video

https://youtu.be/Dayz6U9c3Ho

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 10,617
Thank you for your support!

---


# Approach

Constraints says there is a possibility that we have 200 words as an input, so I thought it's going to be tough to check common prefix in the all words at the same time.

My strategy is a very simple. Just check them one by one.

```
Input: strs = ["flower","flow","flight"]
```
First of all, we use `flower` and `flow` to find a longest common prefix.

Initialize `pref` with the first word(= `flower`) and `pref_len` is length of the first word(= length of `flower` in this case).

```
pref = flower
pref_len = 6
```
We will loop until we find the common prefix.

In the first loop,
```
while pref != s[0:pref_len]:
= flower != flow

s is `flow`
```
They are different(= `true`), so we make `pref` short one by one.
```
pref = flowe
pref_len = 5
```
In the second loop
```
while pref != s[0:pref_len]:
= flowe != flow
```
They are different(= `true`), so we make `pref` short one by one.
```
pref = flow
pref_len = 4
```
In the third loop
```
while pref != s[0:pref_len]:
= flow != flow
```
The are the same (= `false`), in that case, we found the longest common prefix between `flower` and `flow`. we use it with the next word `flight`.

---

\u2B50\uFE0F Points

By the way, the reason why we put `pref_len` in `s[0:pref_len]` is that even if we have a new word(`flight` in this case), the length of longest common prefix should be `flow` which is `4` at most, because we already checked the lonest common prefix between `flower` and `flow` and we know that `flow` is the longest common prefix. That means there is no possibility to have longest common prefix which is length `5` or more.

---

Let's go back to a main point. Now,
```
pref = flow
pref_len = 4
next word(= s) = "flight"
```
In the first loop
```
while pref != s[0:pref_len]:
= flow != flig
```
They are different(= `true`), let's make `pref` short.
```
pref = flo
pref_len = 3
```
In the second loop
```
while pref != s[0:pref_len]:
= flo != fli
```
They are different(= `true`), let's make `pref` short.
```
pref = fl
pref_len = 2
```
In the thrid loop
```
while pref != s[0:pref_len]:
= fl != fl
```
They are the same(= `false`). We found the longest common prefix with `flight`.
```
return "fl"
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---


https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(m * n)$$

Outer Loop:
Iterates through each string in the strs list, except the first one.
Therefore, it runs n-1 times, where n is the length of the strs list.

Inner Loop:
In the worst case, it iterates through the pref_len characters of the current string s to compare with the current pref.
However, the pref_len decreases in each iteration of the outer loop.
Overall Time Complexity:

The worst-case time complexity is `O(n * m)`, where:
`n` is the number of strings in the strs list.
`m` is the length of the longest common prefix.

In the worst case, the inner loop might run m times for each of the `n-1` strings in the outer loop.
This leads to a total of `(n-1) * m` comparisons.
Since `n-1` is asymptotically equivalent to `n`, the time complexity simplifies to `O(n * m).`

The actual time complexity can be significantly lower if the common prefix is found early in the process.
The algorithm's efficiency depends on the length of the input strings and the similarity between them.
In conclusion, the time complexity of the given longestCommonPrefix function is `O(n * m)` in the worst case.

- Space complexity: $$O(len(strs[0]))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        pref = strs[0]
        pref_len = len(pref)

        for s in strs[1:]:
            while pref != s[0:pref_len]:
                pref_len -= 1
                if pref_len == 0:
                    return ""
                
                pref = pref[0:pref_len]
        
        return pref
```
```javascript []
var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};
```
```java []
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        
        String pref = strs[0];
        int prefLen = pref.length();

        for (int i = 1; i < strs.length; i++) {
            String s = strs[i];
            while (prefLen > s.length() || !pref.equals(s.substring(0, prefLen))) {
                prefLen--;
                if (prefLen == 0) {
                    return "";
                }
                pref = pref.substring(0, prefLen);
            }
        }

        return pref;        
    }
}
```
```C++ []
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";

        string pref = strs[0];
        int prefLen = pref.length();

        for (int i = 1; i < strs.size(); i++) {
            string s = strs[i];
            while (prefLen > s.length() || pref != s.substr(0, prefLen)) {
                prefLen--;
                if (prefLen == 0) {
                    return "";
                }
                pref = pref.substr(0, prefLen);
            }
        }

        return pref;        
    }
};
```

## Step by Step Algorithm

1. **Input Validation**:
   - Check if the input `strs` is a list and if it's empty, return an empty string. This is because at least one string is required to find the common prefix.

   ```python
   if not strs:
       return ""
   ```

2. **Initialization**:
   - Initialize `pref` with the first element of `strs` and calculate the length of the common prefix, `pref_len`.

   ```python
   pref = strs[0]
   pref_len = len(pref)
   ```

3. **Iterating Through Strings**:
   - Iterate through the strings in `strs` starting from the second one, as the first one is already stored in `pref`.

   ```python
   for s in strs[1:]:
   ```

4. **Updating Prefix Length**:
   - Check if the current string `s` matches with the current prefix `pref`. If not, reduce the length of the prefix `pref_len` by 1 and update the prefix accordingly until it matches with `s`.

   ```python
   while pref != s[0:pref_len]:
       pref_len -= 1
       pref = pref[0:pref_len]
   ```

5. **Checking for Empty Prefix**:
   - If `pref_len` becomes 0, it means there's no common prefix, so return an empty string.

   ```python
   if pref_len == 0:
       return ""
   ```

6. **Returning the Result**:
   - Return the final common prefix `pref`.

   ```python
   return pref
   ```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F My previous post - Climbing Stairs

post
https://leetcode.com/problems/climbing-stairs/solutions/4880818/video-2-way-solutions-with-o-n-space-o-1-space/

video
https://youtu.be/ZLZ3G_nlB-E
