# 2-POINTER-WHILE-LOOP-EASY ASS✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 3
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249458/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249458/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to find how many letters of T are there in S in the same order
we can use 2 pointers and any loop of choice while or for loop lets see how
# Approach
<!-- Describe your approach to solving the problem. -->
we start the 2 pointers at the start of the s and t
we starta while loop which checks if the char at these 2 indices are same or not
if same move on to the next char
if not only move index of S to search for the next char in T
after the loop
we know how many chars covered and how many left to cover
return the remaining number of chars to cover
thats it
THANK YOU
comment if any doubt
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.jpeg](./images/0.jpeg)

# Code
```javascript []
var appendCharacters = function(s, t) {
    let si=0
    let ti=0
    while(si<s.length){
        if(s[si]==t[ti]){
            si++
            ti++
        }
        else{
            si++
        }
    }
    return t.length-ti
};
```
```python []
def append_characters(s, t):
    si = 0
    ti = 0
    while si < len(s):
        if s[si] == t[ti]:
            si += 1
            ti += 1
        else:
            si += 1
    return len(t) - ti

s = "examplestring"
t = "string"
print(append_characters(s, t))
```
```java []
public class Main {
    public static int appendCharacters(String s, String t) {
        int si = 0;
        int ti = 0;
        while (si < s.length()) {
            if (s.charAt(si) == t.charAt(ti)) {
                si++;
                ti++;
            } else {
                si++;
            }
        }
        return t.length() - ti;
    }

    public static void main(String[] args) {
        String s = "examplestring";
        String t = "string";
        System.out.println(appendCharacters(s, t));
    }
}
```
```c []
#include <stdio.h>
#include <string.h>

int appendCharacters(char *s, char *t) {
    int si = 0;
    int ti = 0;
    while (si < strlen(s)) {
        if (s[si] == t[ti]) {
            si++;
            ti++;
        } else {
            si++;
        }
    }
    return strlen(t) - ti;
}

int main() {
    char s[] = "examplestring";
    char t[] = "string";
    printf("%d\
", appendCharacters(s, t));
    return 0;
}
```