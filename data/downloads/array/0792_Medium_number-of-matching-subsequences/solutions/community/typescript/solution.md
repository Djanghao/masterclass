# Readable typescript solution without cryptic shit

**Author:** kazinov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/3538433/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/3538433/)

---

# Complexity
- Time complexity:
O(n + sum(w)) time, where n - s.length, sum(w) - sum of all chars in words

- Space complexity:
O(m) time, where m - words.length

# Code
```
// O(n + sum(w)) time, where n - s.length, sum(w) - sum of all chars in words
// O(m) time, where m - words.length
function numMatchingSubseq(s: string, words: string[]): number {
    let matches = 0;
    const charToPointers: Record<string, WordPointer[]> = {};
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        const firstChar = word[0];
        charToPointers[firstChar] = charToPointers[firstChar] || [];
        charToPointers[firstChar].push(new WordPointer(i));
    }
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const pointers = charToPointers[char] || [];
        charToPointers[char] = [];
        for(const pointer of pointers) {
            pointer.position++;
            if(pointer.isOut(words)) {
                matches++;
            } else {
                const nextWordChar = pointer.getChar(words);
                charToPointers[nextWordChar] = charToPointers[nextWordChar] || [];
                charToPointers[nextWordChar].push(pointer);
            }
        }
    }
    return matches;
};
class WordPointer {
    constructor(
        private index: number,
        public position = 0) {
    }
    getWord(words: string[]): string {
        return words[this.index];
    }
    getChar(words: string[]): string {
        const word = this.getWord(words);
        return word[this.position];
    }
    isOut(words: string[]): boolean {
        const word = this.getWord(words);
        return this.position >= word.length;
    }
}
```