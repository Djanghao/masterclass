# Beats 95 / 98 % || Simple solution with HashMap + HashSet in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/4245704/](https://leetcode.com/problems/find-and-replace-pattern/solutions/4245704/)

---

# Intuition
Let's briefly explain what the problem is:
- there's a list of `words` and `pattern`
- our goal is to find such words from `words`, that could be replaced by `pattern` and vice-versa

We'd like to use **HashMap** to establish **links** between characters from a particular word to `pattern`.

```
# Ex.1
word = 'abc'
pattern = 'def'

# A word can be replaced by pattern since we match 
# a=>d, b=>e, c=>f.

# Ex.2
word = 'abc'
pattern = 'ded'
# A word cannot be replaced by pattern since
# a=>d, b=>e and c !=> d
``` 

# Approach
1. declare `ans` to store valid words from `words`
2. declare `cache` to establish links between `words[i]` and `pattern[i]`
3. declare `matched` as a set of established chars from `pattern`
4. iterate over `words`
5. use boolean `isValid` to represent if a word is replacable by `pattern`
6. check, if link between word and pattern **exists** and continue to move
7. otherwise check `cache` and `matched` for a word to be **valid**
8. clear `cache` and `matched` for **each** `words[i]`
9. return `ans` 

# Complexity
- Time complexity: **O(N * K)**, `N`- size of `words`, `K` - size of `pattern`

- Space complexity: **O(N + K)**

# Code in Python3
```
class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        ans = []
        cache = dict()
        matched = set()
        
        for word in words:
            isValid = True

            for i in range(len(pattern)):
                w, p = word[i], pattern[i]

                if w in cache:
                    if cache[w] != p:
                        isValid = False
                        break
                elif p in matched:
                    isValid = False
                    break
                else: 
                    cache[w] = p
                    matched.add(p)

            if isValid: ans.append(word)
            
            cache.clear()
            matched.clear()

        return ans
```
# Code in TypeScript
```
function findAndReplacePattern(words, pattern) {
    let ans = [];
    let cache = {};
    let matched = new Set();

    for (let word of words) {
        let isValid = true;

        for (let i = 0; i < pattern.length; i++) {
            let w = word[i], p = pattern[i];

            if (w in cache) {
                if (cache[w] != p) {
                    isValid = false;
                    break;
                }
            } else if (matched.has(p)) {
                isValid = false;
                break;
            } else {
                cache[w] = p;
                matched.add(p);
            }
        }

        if (isValid) ans.push(word);

        cache = {};
        matched.clear();
    }

    return ans;
}

```