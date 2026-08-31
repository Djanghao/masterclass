# Regex Javascript

**Author:** 3nigma
**Votes:** 6
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/576288/](https://leetcode.com/problems/html-entity-parser/solutions/576288/)

---

```
    let map = {
            '&quot;': '"',
            '&apos;': "'",
            '&amp;' : '&',
            '&gt;'  : '>',
            '&lt;'  : '<',
            '&frasl;':'/'}
    return text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, function (m) {
        return map[m];
    });
	```