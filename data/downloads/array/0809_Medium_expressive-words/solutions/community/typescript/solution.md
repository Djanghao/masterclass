# Easy to Understand Typescript solution (two pointers)

**Author:** iosmonbekov
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/3616095/](https://leetcode.com/problems/expressive-words/solutions/3616095/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function expressiveWords(s: string, words: string[]): number {
    let result = 0;

    for (const word of words) {
        let isStretchy = true;
        let wi = 0;
        let si = 0;

        while (wi < word.length) {
            let sc = 0;
            let wc = 0;

            if (word[wi] !== s[si]) {
                isStretchy = false;
                break;
            }

            while (word[wi] === s[si]) {
                wi++;
                wc++;
            }

            while (s[si] === word[wi - 1]) {
                si++;
                sc++;
            }

            if (sc < 3 && sc !== wc) isStretchy = false;
            if (sc < wc) isStretchy = false;
        }

        if (isStretchy && !s[si]) result++;
    }

    return result;
};
```