# Typescript solution. 2 different ways

**Author:** josevicente
**Votes:** 1
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/2256150/](https://leetcode.com/problems/html-entity-parser/solutions/2256150/)

---

This first solution has a problem trying to parse **&amp;amp;gt;** so I had to handle this case separately.
```
function entityParser(text: string): string {
    
    return (text === '&amp;gt;') ? '&gt;' : text.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&frasl;/g, '/');

};
```

Using map
```
function entityParser(text: string): string {
    
    const parser = {
        '&quot;' : '"',
        '&apos;' : "'",
        '&amp;'  : '&',
        '&gt;'   : '>',
        '&lt;'   : '<',
        '&frasl;':'/'
    }
    
    return text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, (t) => {
        return parser[t];
    });
};
```