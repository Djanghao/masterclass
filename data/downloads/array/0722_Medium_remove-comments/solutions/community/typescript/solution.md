# I think it's simple.

**Author:** sdg9670
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-comments/solutions/5059244/](https://leetcode.com/problems/remove-comments/solutions/5059244/)

---

# Code
```
function removeComments(source: string[]): string[] {
    let isOpenedBlock = false

    const result: string[] = []
    for(const line of source) {
        if(
            !isOpenedBlock && // block comment closed
            (result.length === 0 || result[result.length - 1].length > 0) // no empty str
        )
            result.push('')

        for(let i = 0; i < line.length; i++) {
            const s = line[i]
            const nextS = line[i + 1] // string or undefined (if i === line.length - 1)

            if(isOpenedBlock) {
                if(s === '*' && nextS === '/') {
                    isOpenedBlock = false
                    i++ // pass nextS ('/')
                }
                continue
            }
            if(s === '/' && nextS === '/') {
                break
            }
            if(s === '/' && nextS === '*') {
                isOpenedBlock = true
                i++ // pass nextS ('*')
                continue
            }
            result[result.length - 1] += s
        }
    }

    return result
};
```