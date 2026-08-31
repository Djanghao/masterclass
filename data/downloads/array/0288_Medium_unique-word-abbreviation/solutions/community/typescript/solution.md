# Simple TS/JS  solution using Map and Set

**Author:** seredenko99
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/4613410/](https://leetcode.com/problems/unique-word-abbreviation/solutions/4613410/)

---

# Code
```
class ValidWordAbbr {
    private map = new Map<string, Set<string>>();

    constructor(dictionary: string[]) {
        for (const word of dictionary) {
            const abbreviation = this.getAbbreviation(word);
            const mapped = this.map.get(abbreviation);

            if (!mapped) {
                this.map.set(abbreviation, new Set([word]));
                continue;
            }

            mapped.add(word);
        }
    }

    isUnique(word: string): boolean {
        const abbreviation = this.getAbbreviation(word);
        const mapped = this.map.get(abbreviation);

        if (!mapped) {
            return true;
        }

        if (!mapped.has(word)) {
            return false;
        }

        return mapped.size === 1;
    }

    private getAbbreviation(word: string) {
        if (word.length < 3) {
            return word;
        }

        return `${word[0]}${word.length - 2}${word.at(-1)}`;
    }
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
```