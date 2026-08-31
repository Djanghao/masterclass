# 【Video】Give me 8 minutes - How we think about a solution

**Author:** niits
**Votes:** 88
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285239/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285239/)

---

# Intuition
Find the same characters at the both sides.

---

# Solution Video

https://youtu.be/Tencj59MHAc

\u203B Since I recorded that video last year, there might be parts that could be unclear. If you have any questions, feel free to leave a comment.

\u25A0 Timeline of the video

`0:00` Read the question of Unique Length-3 Palindromic Subsequences
`1:03` Explain a basic idea to solve Unique Length-3 Palindromic Subsequences
`4:48` Coding
`8:01` Summarize the algorithm of Unique Length-3 Palindromic Subsequences

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,083
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

We know that we create strings which are length of `3`. So simply if we find the same characters at the both sides, we can create Unique Length-3 Palindromic Subsequences, because Length-3 palindrome has only one pattern.

For example
```
aba: OK
xyx: OK
ctc: OK
aaa: OK

aab: not good
baa: not good

```

---

\u2B50\uFE0F Points

We will create and count this pattern.
```
a _ a
z _ z
```
Both sides of characters are the same.

---




##### How can you create the strings?

Let's say

```
Input: ababcad
```
Let's find the frist `a` from beginning and from the last.
```
ababcad
\u2191    \u2191
```

Next, look at the characters between `a`.

```
babc
```
Now we find `a` at the both sides. So if we can make each character unique between `a`, that means we can create Unique Length-3 Palindromic Subsequences.

In this case,

```
(a)babc(a) \u2192 (a)bac(a)
aba
aaa
aca
``` 
---

\u2B50\uFE0F Points

Iterate through input string from the beginning and from the last. Try to find the same characters at the both sides. Then we make each character unique between the same characters.

--- 

##### How many times do you have to find the same characters at the both sides.

The answer is number of unique characters in input string.
```
Input: ababcad
```
In this case, we should find `a`,`b`,`c`,`d` 4 times, because there is posibility that we can create Unique Length-3 Palindromic Subsequences with each unique character.

Let's see the rest of characters `b`,`c`,`d`
```
target = b

ababcad
 \u2191 \u2191

Found bab
```
```
target = c

ababcad
    \u2191
    \u2191

There is no Unique Length-3 Palindromic Subsequences.
```
```
target = d

ababcad
      \u2191
      \u2191

There is no Unique Length-3 Palindromic Subsequences.
```
In the end, we found
```
aba
aaa
aca
bab
```
Output should be total number of unique characters between specific characters at the both sides.
```
between a, we have 3 unique characters (= b, a and c)
between b, we have 1 unique character (= a)
between c, we have 0 unique characters
between d, we have 0 unique characters
```
```
Output: 4
```


Easy! \uD83D\uDE04
Let's see a real algorithm.


---

### Algorithm Overview:

1. Initialization

2. Loop through unique characters

3. Find the first and last occurrence of the character

4. Check if there is a valid range

5. Count unique characters within the valid range

6. Return the result

### Detailed Explanation:

1. **Initialization**:
   ```python
   res = 0
   uniq = set(s)
   ```

   - Initialize `res` to 0, which will store the final result.
   - Create a set `uniq` containing unique characters from the string `s`.

2. **Loop through unique characters**:
   ```python
   for c in uniq:
   ```

   - Iterate through each unique character in the set `uniq`.

3. **Find the first and last occurrence of the character**:
   ```python
   start = s.find(c)
   end = s.rfind(c)
   ```

   - Use `find` to locate the first occurrence of the character `c`.
   - Use `rfind` to locate the last occurrence of the character `c`.

4. **Check if there is a valid range**:
   ```python
   if start < end:
   ```

   - Verify that the first occurrence index is less than the last occurrence index.

5. **Count unique characters within the valid range**:
   ```python
   res += len(set(s[start+1:end]))
   ```

   - If there is a valid range, calculate the length of the set of characters within the substring between `start+1` and `end` (excluding the character at `start`).
   - Add this length to the result.

6. **Return the result**:
   ```python
   return res
   ```

   - After iterating through all unique characters, return the final result.
 

# Complexity
- Time complexity: $$O(26 * (n+n+n))$$ \u2192 $$O(n)$$
3n is start, end, set in the for loop.

- Space complexity: $$O(26)$$ \u2192 $$O(1)$$
`uniq` variable has potentially 26 unique characters.


```python []
class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
    
        res = 0
        uniq = set(s)
        
        for c in uniq:
            start = s.find(c) # search a character from the beginning
            end = s.rfind(c) # search a character from the last index
            
            if start < end:
                res += len(set(s[start+1:end]))
        
        return res
```
```javascript []
var countPalindromicSubsequence = function(s) {
    let res = 0;
    const uniq = new Set(s);

    for (const c of uniq) {
        const start = s.indexOf(c);
        const end = s.lastIndexOf(c);

        if (start < end) {
            res += new Set(s.slice(start + 1, end)).size;
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int countPalindromicSubsequence(String s) {
        int res = 0;
        Set<Character> uniq = new HashSet<>();

        for (char c : s.toCharArray()) {
            uniq.add(c);
        }

        for (char c : uniq) {
            int start = s.indexOf(c);
            int end = s.lastIndexOf(c);

            if (start < end) {
                Set<Character> charSet = new HashSet<>();
                for (int i = start + 1; i < end; i++) {
                    charSet.add(s.charAt(i));
                }
                res += charSet.size();
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int countPalindromicSubsequence(string s) {
        int res = 0;
        unordered_set<char> uniq;

        for (char c : s) {
            uniq.insert(c);
        }

        for (char c : uniq) {
            int start = s.find(c);
            int end = s.rfind(c);

            if (start < end) {
                unordered_set<char> charSet;
                for (int i = start + 1; i < end; i++) {
                    charSet.insert(s[i]);
                }
                res += charSet.size();
            }
        }

        return res;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4290299/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/1XhaQo-cDVg

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`0:19` Important condition
`0:56` Demonstrate how it works
`3:08` What if we have a lot of the same numbers in input array?
`4:10` Coding
`4:55` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4285226/give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/fVv8R93DaTc

\u25A0 Timeline of the video

`0:04` Explain a key point of the question
`1:19` Demonstrate how it works
`3:09` Coding
`5:02` Time Complexity and Space Complexity
