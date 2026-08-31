# Best Fast And Easy Ts

**Author:** BeOrNot2Be
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4990324/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4990324/)

---

# Intuition
Needed to think for a second. Also I typed touched typed so it took a second second.

But I knew that the spaces would be placed into the right spots relativly to the expectations by simply revresing. 

I just needed to remember that fact and think whether it would be optimal to do the individual word reverse after that. 

# Approach
read code comments

# Complexity
- Time complexity:
O(n)

# Code
```
// from the output, we can basicaly place words in the approximate spaces by reversing the whole string and then reversing everything one by one
// seems to be the only approach
// O(n + n + n) -> O(n)

function reverseWords(s: string[]): void {
    s.reverse()

    let start = 0
    let end = 0
    let curr = 0

    while (curr <= s.length){
        if (curr === s.length || s[curr] === " ") {
            end = curr -1
        
            while (end - start >= 1) {
                const tmp = s[start]
                s[start] = s[end]
                s[end] = tmp
                
                end -= 1
                start += 1
            }

            start = curr + 1
        }

        curr += 1
    }
};



```