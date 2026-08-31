# [TypeScript] Streaming solution with Trie and Set

**Author:** 4x13
**Votes:** 1
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/1611432/](https://leetcode.com/problems/stream-of-characters/solutions/1611432/)

---

The LC provided solution holds onto the stream in memory, which is not how you'd process streams in real word scenarios for better scale. This solution doesn't build the reversed-trie, hence a bit slower (33% fast, 100% better on memory), but still a good solution worth considering.

```
class StreamChecker {
  #trie: {[key: string]: boolean | Object} = {};
  #pending = new Set();

  constructor(words: string[]) {
    for (const word of words) this._addWord(word);
  }

  _addWord(word: string): void {
    if (!word.length) return;
    let ptr: null | boolean | {[key: string]: boolean | Object} = this.#trie;
    for (const char of word) {
      if (!ptr[char]) ptr[char] = {};
      ptr = ptr[char];
    }
    ptr['_'] = true;
  }

  query(letter: string): boolean {
    // Validate each pending first.
    let ret = false;
    const newPending = new Set();
    for (const ptr of this.#pending) {
      const newPtr = ptr[letter];
      if (!newPtr) continue;
      if (newPtr['_']) ret = true;
      newPending.add(newPtr);
    }
    this.#pending = newPending;

    // Check for words that start with this letter.
    if (this.#trie[letter]) {
      this.#pending.add(this.#trie[letter]);

      // Single character word corner-case?
      if (this.#trie[letter]['_']) ret = true;
    }
    
    return ret;
  }
}

/**
* Your StreamChecker object will be instantiated and called as such:
* var obj = new StreamChecker(words)
* var param_1 = obj.query(letter)
*/
```