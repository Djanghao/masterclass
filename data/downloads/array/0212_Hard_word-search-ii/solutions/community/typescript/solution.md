# TypeScript: Trie + DFS

**Author:** thekillingspree
**Votes:** 4
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/4066107/](https://leetcode.com/problems/word-search-ii/solutions/4066107/)

---

# Intuition

We need to use DFS to track and find the words in the table. At each iteration, we can check if the current candidate is a prefix of a word.

# Approach

Since we have a prefix matching type problem, we can use a Trie to search for the words. To better improve the performance and to avoid string concatention, we can directly store the word on the leaf node of the Trie.

We first create a Trie, and insert all the words to the Trie. After adding a specific node, we set the `node.word` value to the word that was added.

We then try to find the words by DFS on each character in the table. 

To keep a track on the current candidate, we use a Trie node, which points to the current character in a valid prefix. If the current character is not part of a word, then we do not need to process further and just exit out of the iteration. We also update the current `node` to point to it's corresponding child.

If the node indicates end of a word, i.e., `node.word` is not null, then this means that we found a word and hence we'll add it to the result. Once a word has been added to the result, to ensure that it is not added again, we set `node.word` to `null`, so that it would not be reprocesses again.

To ensure we do not revisit nodes again, we set the current table character to an arbitrary character that it is out of the allowed alphabets, for example "#". We also need to check if the current character we are processing is "#" or not, if so, then we ignore the current character.


We then DFS on all four valid directions. Once done, we revert back to the original character on the table.


# Complexity

The DFS requires us to branch out 4 times. So the time complexity would be exponential. Since we use a Trie, the time complexity would depend on the average word length in the Trie $$L$$.

- Time complexity: $$O(m * n * 4 ^ L)$$ where L is the average word Length.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O((N * L) + 4 ^ L)$$ where N is the number of words and L is the average word Length. $$4^L$$ space is for the recursive stack.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class TrieNode {

    private nodes = new Map<string, TrieNode>();
    word: string | null = null;

    constructor() {

    }

    insert(word: string) {
        let curr = this as TrieNode;
        for (const char of word) {
            if (!curr.nodes.has(char)) {
                curr.nodes.set(char, new TrieNode());
            }
            curr = curr.nodes.get(char);
        }
        curr.word = word;
    }

    hasChar(char: string) {
        return this.nodes.has(char);
    }

    getNode(char: string): TrieNode | null {
        return this.nodes.get(char)
    }
}

function search(m: number, n: number, board: string[][], node: TrieNode, result: string[]) {
    const M = board.length;
    const N = board[0].length;

    if (m < 0 || n < 0 || m >= M || n >= N) return;

    const currChar = board[m][n]
    if (currChar === "#" || !node.hasChar(currChar)) return;

    node = node.getNode(currChar);

    if (node.word) {
        result.push(node.word);
        node.word = null;
    }

    board[m][n] = "#";

    search(m+1, n, board, node, result);
    search(m, n+1, board, node, result);
    search(m, n-1, board, node, result);
    search(m-1, n, board, node, result);

    board[m][n] = currChar;
    
}


function findWords(board: string[][], words: string[]): string[] {

    const root = new TrieNode();

    for (const word of words) {
        root.insert(word);
    }

    const M = board.length;
    const N = board[0].length;
    const result = [];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            search(i, j, board, root, result)
        }
    }

    return result

};
```