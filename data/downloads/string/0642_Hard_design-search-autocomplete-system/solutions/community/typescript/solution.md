# The most effective TS solution based on Trie - beats 100.00%of users with TypeScript

**Author:** dimau777
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/4184514/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/4184514/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It's a perfect task for implementing Trie. The main idea here to save and keep TOP 3 most relevant sentences in each Trie Node.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class AutocompleteSystem {
  trie: Trie;
  sentences: {[sentence: string]: number}; // Map of all sentences and their frequency
  currentSentence: string;

  constructor(sentences: string[], times: number[]) {
    this.trie = new Trie();
    this.sentences = {};
    this.currentSentence = "";

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      const freq = times[i];
      this.sentences[sentence] = freq;
      this.trie.insert(sentence, freq);
    }
  }

  input(c: string): string[] {
    if (c === "#") {
      // Increment sentences counter
      if (!this.sentences[this.currentSentence]) {
        this.sentences[this.currentSentence] = 0;
      }
      this.sentences[this.currentSentence]++;

      // Update frequency
      const freq = this.sentences[this.currentSentence];
      this.trie.insert(this.currentSentence, freq);

      // Clear and return
      this.currentSentence = "";
      return [];
    }

    this.currentSentence += c;
    return this.trie.startsWith(this.currentSentence);
  }
}

// Interface for keeping TOP 3 sentences in the Trie Node
interface Entry {
  sentence: string;
  freq: number;
}

class TrieNode {
  children: { [key: string]: TrieNode } = {};
  private readonly top: Entry[] = []; // We keep only top 3 sentences with this prefix here

  // This method updates the top 3 sentences with corresponding prefix
  update(sentence: string, freq: number) {
    // If the current sentence is already in out top, just update it's frequency
    for (const entry of this.top) {
      if (sentence === entry.sentence) {
        entry.freq = freq;
        this.top.sort(compare);
        return;
      }
    }

    // If we have a free slot just add a new sentence there
    if (this.top.length < 3) {
      this.top.push({ sentence, freq });
      this.top.sort(compare);
      return;
    }

    // if the current sentence has a higher frequency or is smaller in terms of ASCII symbols - replace the least relevant sentence in top 3 with the current one
    if (compare(this.top[0], {sentence, freq}) < 0) {
      this.top[0] = { sentence, freq };
      this.top.sort(compare);
    }
  }

  // Get top 3 sentences with this prefix
  getTop(): string[] {
    const res = [];
    for (const entry of this.top) {
      res.push(entry.sentence);
    }
    return res.reverse();
  }
}

class Trie {
  private readonly root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string, freq: number): void {
    let cur = this.root;
    for (const char of word) {
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];

      cur.update(word, freq);
    }
  }

  startsWith(prefix: string): string[] {
    let cur = this.root;
    for (const char of prefix) {
      if (!cur.children[char]) return [];
      cur = cur.children[char];
    }
    return cur.getTop();
  }
}

// Helper function for comparing sentences and it's frequencies
function compare(a: Entry, b: Entry) {
  if (a.freq !== b.freq) return a.freq - b.freq;
  return a.sentence < b.sentence ? 1 : -1;
}
```