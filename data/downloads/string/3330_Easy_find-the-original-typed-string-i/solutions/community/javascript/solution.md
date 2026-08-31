# JavaScript Easy Solution | Beginner Friendly | Beats 100% | O(N) Time Complexity

**Author:** GabimaruDev
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971706/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971706/)

---

# Complexity
- **Time** complexity: $$O(n)$$

# Code
```javascript []
var possibleStringCount = function(word) {
    set = new Set()
    counter = 0

    for (i = 0; i < word.length; i++) {
        if (!set.has(word[i])) {
            set.add(word[i])
        } else if (set.has(word[i]) && word[i-1] == word[i]) {
            counter++
        }
    }

    return ++counter
};
```