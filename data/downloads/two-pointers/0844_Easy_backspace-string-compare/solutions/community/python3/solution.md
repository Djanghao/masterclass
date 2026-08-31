# 【Video】Give me 10 minutes - How we think about a solution - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 74
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/4184137/](https://leetcode.com/problems/backspace-string-compare/solutions/4184137/)

---

# Intuition
Using stack or pointers

---

# Solution Video

https://youtu.be/YBt2dPL6z5o

\u203B I put my son on my lap and recorded a video, so I'm feeling a little rushed. lol Please leave a comment if you have any questions.

\u25A0 Timeline of the video
`0:04` Stack solution code
`0:23` Explain key point with O(1) space
`1:12` Consider 4 cases
`3:14` Coding
`7:20` Time Complexity and Space Complexity


### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,734
My initial goal is 10,000
Thank you for your support!

---

# Approach

## How we think about a solution

Simply, we can solve this question with `stack` like this.

```
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:

        def remove_characters(s):
            stack = []
            for char in s:
                if char == '#' and stack:
                    stack.pop()
                elif char != '#':
                    stack.append(char)
            return stack

        return remove_characters(s) == remove_characters(t)

```

But we can improve space complexity to `O(1)`.

We use `pointers` for s and t but problem is


---

We don't know whether we should keep these characters or not. 

---

To solve the problem, my idea is to iterate through both input strings from the end.

---

\u2B50\uFE0F Points

Iterate through the both strings from end. In that case, basically

If we meet alphabets, then we should keep them.
If we meet "#", then next character will be removed.

---

- Consider basic 4 cases

I think there are 4 basic cases we should consider.

---

\u2B50\uFE0F Points

1. The case where the same characters remain in the end
  Example case: `s = "ab#c"` `t = "ad#c"`
  Results: `true`
2. The case where we remove all characters at the same time
  Example case: `s = "ab##"` `t = "c#d#"`
  Results: `true`
3. The case where we remove all characters in one input string first, opposite of case 2
  Example case: `s = "ab#"` `t = "c#d#"`
  Results: `false`
4. The case where different characters remain in the end, opposite of case 1
  Example case: `s = "a#c"` `t = "b"`
  Results: `false`
---

### Algorithm Overview:
- The code is designed to determine whether two strings are equal after applying backspace operations. It compares the two strings character by character after processing the backspace operations.

### Detailed Explanation:
1. Define a function `get_next_valid_char_index` that takes two arguments: `s` (a string) and `end` (an integer representing the index to start from).
   - Initialize `backspace_count` to 0.
   - Start a while loop that runs while `end` is greater than or equal to 0.
   - Within the loop:
     - Check if the character at index `end` in string `s` is a '#' (backspace).
     - If it is a '#', increment `backspace_count`.
     - If `backspace_count` is greater than 0, decrement it to simulate the removal of a character.
     - If neither of the above conditions is met, break out of the loop. This indicates that you've found the next valid character's index.
     - Decrement `end` by 1 in each iteration.

2. Initialize two pointers, `ps` and `pt`, to the last index of strings `s` and `t`, respectively.

3. Enter a while loop that continues as long as `ps` is greater than or equal to 0 or `pt` is greater than or equal to 0. This loop handles the comparison of the processed strings.

4. In each iteration of the loop:
   - Update `ps` using the `get_next_valid_char_index` function for string `s`.
   - Update `pt` using the `get_next_valid_char_index` function for string `t`.

5. After both `ps` and `pt` are updated:
   - If `ps` is less than 0 and `pt` is less than 0, it means both processed strings are empty. In this case, print "aaaaaa" as a debug message (you can remove it) and return `True` as the strings are equivalent after applying backspace operations.

6. If either `ps` or `pt` is less than 0 but not both, it means one of the strings is empty while the other is not. In this case, return `False` as the strings are not equivalent.

7. If neither of the above conditions is met, check if the characters at indices `ps` in string `s` and `pt` in string `t` are not equal. If they are not equal, return `False`.

8. Decrement `ps` and `pt` by 1 to move on to the next character in both strings.

9. Repeat the loop until both strings are fully processed.

10. If none of the conditions for returning `False` are met throughout the loop, it means the strings are equivalent after applying backspace operations, and the function returns `True`.


# Complexity
- Time complexity: $$O(max(len(s), len(t))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:

        def get_next_valid_char_index(s, end):
            backspace_count = 0
            while end >= 0:
                if s[end] == '#':
                    # find "#"
                    backspace_count += 1
                elif backspace_count > 0:
                    # find an alphabet but skip it because we have backspaces
                    backspace_count -= 1
                else:
                    # if we don't have backspaces and current character is alphabet
                    # it's time to compare two characters from s and t
                    break
                end -= 1
            return end # return current end pointer for the next iteration.

        ps = len(s) - 1
        pt = len(t) - 1

        while ps >= 0 or pt >= 0:
            ps = get_next_valid_char_index(s, ps)
            pt = get_next_valid_char_index(t, pt)

            if ps < 0 and pt < 0:
                # example case s = "ab##" t = "c#d#", case 2                
                return True
            if ps < 0 or pt < 0:
                # example case s = "ab#" t = "c#d#", case 3
                return False
            elif s[ps] != t[pt]:
                # example case s = "a#c" t = "b", case 4
                return False

            ps -= 1
            pt -= 1

        # example case s = "ab#c" t = "ad#c", case 1
        return True
```
```javascript []
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function get_next_valid_char_index(str, end) {
        let backspace_count = 0;
        while (end >= 0) {
            if (str.charAt(end) === '#') {
                backspace_count++;
            } else if (backspace_count > 0) {
                backspace_count--;
            } else {
                break;
            }
            end--;
        }
        return end;
    }

    let ps = s.length - 1;
    let pt = t.length - 1;

    while (ps >= 0 || pt >= 0) {
        ps = get_next_valid_char_index(s, ps);
        pt = get_next_valid_char_index(t, pt);

        if (ps < 0 && pt < 0) {
            return true;
        }
        if (ps < 0 || pt < 0) {
            return false;
        } else if (s.charAt(ps) !== t.charAt(pt)) {
            return false;
        }

        ps--;
        pt--;
    }

    return true;    
};
```
```java []
class Solution {
    public boolean backspaceCompare(String s, String t) {
        int ps = s.length() - 1;
        int pt = t.length() - 1;

        while (ps >= 0 || pt >= 0) {
            ps = get_next_valid_char_index(s, ps);
            pt = get_next_valid_char_index(t, pt);

            if (ps < 0 && pt < 0) {
                return true;
            }
            if (ps < 0 || pt < 0) {
                return false;
            } else if (s.charAt(ps) != t.charAt(pt)) {
                return false;
            }

            ps--;
            pt--;
        }

        return true;        
    }

    private int get_next_valid_char_index(String str, int end) {
        int backspace_count = 0;
        while (end >= 0) {
            if (str.charAt(end) == '#') {
                backspace_count++;
            } else if (backspace_count > 0) {
                backspace_count--;
            } else {
                break;
            }
            end--;
        }
        return end;
    }    
}
```
```C++ []
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        int ps = s.length() - 1;
        int pt = t.length() - 1;

        while (ps >= 0 || pt >= 0) {
            ps = get_next_valid_char_index(s, ps);
            pt = get_next_valid_char_index(t, pt);

            if (ps < 0 && pt < 0) {
                return true;
            }
            if (ps < 0 || pt < 0) {
                return false;
            } else if (s[ps] != t[pt]) {
                return false;
            }

            ps--;
            pt--;
        }

        return true;        
    }

private:
    int get_next_valid_char_index(string str, int end) {
        int backspace_count = 0;
        while (end >= 0) {
            if (str[end] == '#') {
                backspace_count++;
            } else if (backspace_count > 0) {
                backspace_count--;
            } else {
                break;
            }
            end--;
        }
        return end;
    }    
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/backspace-string-compare/solutions/4184137/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

video
https://youtu.be/N8QehVXYSc0

\u25A0 Timeline of the video
`0:04` 2 Keys to solve this question
`0:18` Explain the first key point
`0:45` Explain the first key point
`1:27` Explain the second key point
`5:44` Coding
`9:39` Time Complexity and Space Complexity


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/parallel-courses-iii/solutions/4180474/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/PWorxtrU6hY

\u25A0 Timeline of the video
`0:04` Key point to solve this question
`0:23` Explain the first key point
`1:12` Explain the second key point
`1:39` Demonstrate real algorithms
`6:36` Coding
`10:33` Time Complexity and Space Complexity