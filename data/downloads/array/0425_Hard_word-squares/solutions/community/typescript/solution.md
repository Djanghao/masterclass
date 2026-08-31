# Typescript/Javascript|| beats 100% || Backtracking || DFS || Trie

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/2838894/](https://leetcode.com/problems/word-squares/solutions/2838894/)

---

# Approach
Backtracking with Trie. Trie is needed for the limiting backtracking variants during the DFS recursion.
# Complexity
TBD.
# Code
```
class TrieNode {
    public children: Map<string, TrieNode> = new Map<string, TrieNode>();
    public words: string[] = [];
}
function wordSquares(words: string[]): string[][] {
    const trieRoot = new TrieNode();
    for (const word of words) {
        let node = trieRoot;
        trieRoot.words.push(word);
        for (let char of word) {
            let curr = node.children.get(char);
            if (!curr) {
                curr = new TrieNode();
                node.children.set(char, curr);
            }
            node = curr;
            node.words.push(word);
        }
    }

    let result = [];
    const backtrack = (square: string[] = []) => {
        if (square.length === square[0]?.length) {
            result.push(square.concat());
            return;
        }

        let node = trieRoot; 
        for (let i = 0; i < square.length; i++) {
            const char = square[i][square.length];
            node = node.children.get(char); 
            if (!node) {
                return;
            }
        }

        const nextWords = node.words;
        for (const word of nextWords) {
            backtrack(square.concat(word));
        }
    }
  
    backtrack();

    return result;
 };

```