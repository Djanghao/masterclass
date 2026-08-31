# 【Video】Two Pointer Solution

**Author:** niits
**Votes:** 401
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/5101957/](https://leetcode.com/problems/is-subsequence/solutions/5101957/)

---

# Intuition
Check both strings one by one.

---

# Solution Video

In the video, the steps of approach below are visualized using diagrams and drawings. I'm sure you understand the solution easily!

https://youtu.be/2FYJxatZnxE

\u25A0 Timeline
`0:00` Read the question of Is Subsequence
`1:26` Explain a basic idea to solve Is Subsequence
`4:04` Coding
`5:28` Time Complexity & Space Complexity 

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,177
Thank you for your support!

---

# Approach

**How I think about a solution:**

Simply, all we have to do is just to count characters for each string `s` and `t` and check if `t` has all characters of `s`, but problem is there is an order to find the characters.

```
Input: s = "abc", t = "ahbgdc"
```
In this case, we need to find `a` in `t` at first. The next character we must find is `b` at the position after `a`, the last character is `c` at the position after `b`. That is kind of a challenging part of this question. It might be tough to use simple `HashMap` or `Set` because they don't have order of data.

That's why I just started thinking it with a very simple example like this.
```
Input: s = "abc", t = "abc"
```
In this case, if we check each character one by one in the both strings from beginning, we can return `true` and this simple example gave me a hint to solve this question.

I realized that if I have the same index number as length of `s` after I iterate though all characters, I can prove that I have subsequence in `t`. 

To prove that, I also check a simple `false` case like this.
```
Input: s = "abc", t = "abd"
```
In this case, when I iterate thorugh both strings from beginning, I stopped at index `2` in `s` which means I didn't find the last character `c` in `t`, so this is a `false` case because `index number for s(2)` is not equal to `length of s(3)`. I couldn't get to `the last position of s`. 

`The last position` means `the last index number + 1` because index usually starts from `0` and counting length of string starts from `1`.

From my thought process above, I tried to iterate thorough both strings from beginning at the same time. 

Let's recap what I said with this example.
```
Input: s = "abc", t = "ahbgdc"
```

```
target: a
s index: 0
t index: 0
```
The first target is `a`. Luckily, the first character of `t` is also `a`. 

```
found: a
Now I can think inputs like this Input: s = "bc", t = "hbgdc"

after the above,

s index: 1
t index: 1
```

Then, the next target is `b` but the next character of `t` is `h`, so now 
```
target: b

found: a
Now I can think inputs like this Input: s = "bc", t = "bgdc"

after the above,

s index: 1
t index: 2

```

The next character of `t` is `b`, I found `b` in `t`.
```
target: b

found: ab
Now I can think inputs like this Input: s = "c", t = "gdc"

after the above,

s index: 2
t index: 3
```

The next and next next character in `t` are `g` and `d`, so just increment `t index` from `3` to `5`.

Finally, I reached the last character in `t` and found `c`

```
target: c

found abc
Now I can think inputs like this Input: s = "", t = ""

after the above,

s index: 3
t index: 6
```

After the process, all I have to do is just to check if `s index(3)` is equal to `length of s(3)`.

```
Output: true
```

That's how I think about my solution. Let's see a real algorithm below.


**Algorithm Overview:**

1. Initialize two pointers, `sp` and `tp`, to 0 to represent the starting positions of the strings `s` and `t` respectively.
2. Iterate through the characters of both strings `s` and `t`, comparing characters at the corresponding positions.
3. If a matching character is found, move the pointer in `s` forward.
4. Always move the pointer in `t` forward.
5. Check if all characters in `s` have been matched in `t`.
6. Return `True` if `s` is a subsequence of `t`, `False` otherwise.

**Detailed Explanation:**

1. Set `sp` and `tp` to 0, indicating the starting positions of `s` and `t` respectively.

2. Iterate through the characters of `s` and `t` using a while loop until either all characters in `s` have been matched or we reach the end of `t`.

   a. Check if the characters at `sp` in `s` and `tp` in `t` are equal.

   b. If they are equal, increment `sp` to move to the next character in `s`.

   c. Always increment `tp` to move forward in `t`.

3. After the loop, check if all characters in `s` have been matched. If `sp` is equal to the length of `s`, then `s` is a subsequence of `t`.

   a. Return `True` if `s` is a subsequence of `t`.

   b. Return `False` if `s` is not a subsequence of `t`.


---

https://youtu.be/Abdq3lNRocc

---



# Complexity
- Time complexity: O(n)
`n` is longer length of input string (`s` or `t`).

- Space complexity: O(1)


```python []
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        sp = tp = 0

        while sp < len(s) and tp < len(t):
            if s[sp] == t[tp]:
                sp += 1
            tp += 1
        
        return sp == len(s)
```
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;    
};
```
```java []
class Solution {
    public boolean isSubsequence(String s, String t) {
        int sp = 0;
        int tp = 0;

        while (sp < s.length() && tp < t.length()) {
            if (s.charAt(sp) == t.charAt(tp)) {
                sp++;
            }
            tp++;
        }

        return sp == s.length();        
    }
}
```
```C++ []
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int sp = 0;
        int tp = 0;

        while (sp < s.length() && tp < t.length()) {
            if (s[sp] == t[tp]) {
                sp++;
            }
            tp++;
        }

        return sp == s.length();        
    }
};
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

## \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

## \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

## \u2B50\uFE0F My previous post - #55. Jump Game

post
https://leetcode.com/problems/jump-game/solutions/4920717/video-move-goal-position/

video
https://youtu.be/m6AymRRYgko