# JavaScript and TypeScript Code, 100% readable

**Author:** astiksarathe
**Votes:** 2
**Link:** [https://leetcode.com/problems/detect-capital/solutions/2982947/](https://leetcode.com/problems/detect-capital/solutions/2982947/)

---

# Code
```
function detectCapitalUse(word: string): boolean {

    // upper case 
    let upperCaseStr = word.toUpperCase()
    if(upperCaseStr === word) return true

    // lower case 
    let lowerCaseStr = word.toLowerCase()
    if(lowerCaseStr === word) return true

    //titile case
    let titleCaseStr = toTitleCase(word)
    if(titleCaseStr === word) return true

    return false
}

const toTitleCase = (word:string) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}
```