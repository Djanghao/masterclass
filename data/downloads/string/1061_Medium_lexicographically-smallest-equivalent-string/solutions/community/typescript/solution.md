# Js/ts easy solution

**Author:** misterfishup
**Votes:** 3
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3049120/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3049120/)

---

Js/ts easy solution.


# Code
```
function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

    const graph = alphabet.reduce((acc,cur) => {
        acc[cur] = new Set([cur])
        return acc
    }, {}) 

    const connect = (a: string, b: string) => {
        for (const x of graph[a]) {
            for (const y of graph[b]) {
                graph[x].add(y)
                graph[y].add(x)
            }
        }
    }

    for (let i =0; i< s1.length; i++) {
        connect(s1[i], s2[i])
    }

    return Array.from(baseStr).map((c)=> [...graph[c]].sort()[0]).join('')

};
```