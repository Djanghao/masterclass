# TS solution - encapsulates logic into class allowing testing with words other than croak

**Author:** kaidenrawlinson
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/4504786/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/4504786/)

---

# Code
```
function minNumberOfFrogs(croakOfFrogs: string): number {
    return new Word('croak').getMaxConcurrentIn(croakOfFrogs)
};

class Word {
    private letters: string[]
    
    constructor(word: string) {
        this.letters = word.split('')
    }

    public getMaxConcurrentIn(str: string): number {
        const activeCount = new MaxNum()
        const expectedLetters: Record<string, number> = {}
        this.letters.forEach(l => expectedLetters[l] = 0)

        for (let letter of str.split('')) {
            const index = this.letters.indexOf(letter)
            const nextLetter = this.letters[index + 1]

            if (index === -1) // invalid letter
                return -1
            if (index === 0) { // first letter of croak (c)
                activeCount.increment()
                expectedLetters[nextLetter]++
            } else if (expectedLetters[letter] === 0) { // valid letter but unexpected at this position
                return -1
            } else if (index === this.letters.length - 1) { // last letter of croak (k)
                activeCount.decrement()
                expectedLetters[letter]--
            } else { // middle letter of croak (r,o,a)
                expectedLetters[letter]--
                expectedLetters[nextLetter]++
            }
        }

        const hasIncomplete = Object.values(expectedLetters).some(n => n > 0)
        return hasIncomplete ? -1 : activeCount.max
    }
}

class MaxNum {
    private current = 0
    private _max = 0
    
    increment(by = 1) { 
        this.current += by 
    }

    decrement(by = 1) { 
        this._max = Math.max(this._max, this.current)
        this.current -= by
     }

    get max() { 
        return this._max 
    }
}

```