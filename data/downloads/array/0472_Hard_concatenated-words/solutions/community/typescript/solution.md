# Solution using Trie and DFS

**Author:** scoderOO7
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/4972368/](https://leetcode.com/problems/concatenated-words/solutions/4972368/)

---

# Code
```
class TrieNode {
    children: Map<string, TrieNode>
    isWord: boolean
    constructor() {
        this.children = new Map()
        this.isWord = false
    }
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node = this.root
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode())
            }
            node = node.children.get(ch)
        }
        node.isWord = true
    }

    search(word: string): boolean {
        let node = this.root
        
        for (let i = 0; i < word.length; i++) {
            const ch = word[i]
            if (node.children.has(ch)) {
                node = node.children.get(ch)
                if (node.isWord && this.search(word.substring(i + 1))) {
                    return true
                }
            } else {
                return false
            }
        }

        return node !== this.root && node.isWord
    }
}

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    words.sort((a, b) => a.length - b.length)
    const trieRoot = new Trie()
    let answer = []

    for (const word of words) {
        if (trieRoot.search(word)) {
            answer.push(word)
        } else {
            trieRoot.insert(word)
        }
    }

    return answer
};
```