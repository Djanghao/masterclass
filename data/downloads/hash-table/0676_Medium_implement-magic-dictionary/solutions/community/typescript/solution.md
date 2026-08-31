# TS easy solution - HashMap

**Author:** elyorsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/4448413/](https://leetcode.com/problems/implement-magic-dictionary/solutions/4448413/)

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
class MagicDictionary {

    map: Map<number, string[]>
    constructor() {
        this.map = new Map()
    }

    buildDict(dictionary: string[]): void {
       dictionary.forEach(dict => {
           const words = this.map.get(dict.length) || []
           words.push(dict)
           this.map.set(dict.length, words)
       })
    }

    search(searchWord: string): boolean {

        const words = this.map.get(searchWord.length)

        if(!words){
            return false
        }

        for (const word of words){
            let diff = 0
            for (let i = 0; i < word.length; i++){
                if(word[i] !== searchWord[i]){
                    diff++
                }

                if(diff > 1){
                    break
                }
            }

            if(diff === 1){
                return true
            }
        }

        return false
    }

}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
```