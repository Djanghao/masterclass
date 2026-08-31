# Typescript trie solution

**Author:** Yidaotus
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/712019/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/712019/)

---

Just a regular trie implementation in Typescript, trying to be as clean as possible.

```typescript
class WordDictionary {
    isWord: boolean;
    child: {[Key: string]: WordDictionary};
    constructor() {
        this.child = {}; 
        this.isWord = false;
    }

    addWord(word: string): void {
        let curr: WordDictionary = this;
        for(const c of word) {
            if(!curr.child[c]) {
                curr.child[c] = new WordDictionary();
            }
            curr = curr.child[c];
        }
        curr.isWord = true;
    }

    search(word: string, i = 0): boolean {
        let curr: WordDictionary = this;
        for(;i < word.length; i++) {
            const c = word[i];
            if(c !== '.') {
                if(!curr.child[c]) { 
                    return false; 
                }
                curr = curr.child[c];
            } else {
                for(const key in curr.child) {
                    if(curr.child[key].search(word, i + 1)){
                        return true;
                    };
                }
                return false;
            }
        }
        return curr.isWord;
    }
}

```