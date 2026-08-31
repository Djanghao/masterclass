# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/5348329/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/5348329/)

---

**Java**
```
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public long countPrefixSuffixPairs(String[] words) {
        Trie trie = new Trie();
        for (String word : words) {
            trie.addWord(word);
        }
        return trie.countPrefixSuffixPairs;
    }
}

class TrieNode {

    int frequency;
    Map<Integer, TrieNode> branches = new HashMap<>();
}

class Trie {

    private static final int ALPHABET_SIZE = 26;
    private final TrieNode root = new TrieNode();
    long countPrefixSuffixPairs;

    void addWord(String word) {
        TrieNode current = root;
        int prefix = 0;
        int suffix = word.length() - 1;

        while (prefix < word.length() && suffix >= 0) {
            int hashPrefixSuffix = getHashForPrefixSuffixPair(word.charAt(prefix), word.charAt(suffix));
            if (!current.branches.containsKey(hashPrefixSuffix)) {
                current.branches.put(hashPrefixSuffix, new TrieNode());
            }
            current = current.branches.get(hashPrefixSuffix);
            countPrefixSuffixPairs += current.frequency;
            ++prefix;
            --suffix;
        }
        ++current.frequency;
    }

    private int getHashForPrefixSuffixPair(char prefix, char suffix) {
        return (prefix - 'a') * ALPHABET_SIZE + (suffix - 'a');
    }
}
```
**JavaScript**
```
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    const trie = new Trie();
    for (let word of words) {
        trie.addWord(word);
    }
    return trie.countPrefixSuffixPairs;
};

class TrieNode {
    frequency = 0;
    // Map<number, TrieNode>
    branches = new Map();
}

class Trie {

    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;

    root = new TrieNode();
    countPrefixSuffixPairs = 0;

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        let prefix = 0;
        let suffix = word.length - 1;

        while (prefix < word.length && suffix >= 0) {
            const hashPrefixSuffix = this.getHashForPrefixSuffixPair(word.codePointAt(prefix), word.codePointAt(suffix));
            if (!current.branches.has(hashPrefixSuffix)) {
                current.branches.set(hashPrefixSuffix, new TrieNode());
            }
            current = current.branches.get(hashPrefixSuffix);
            this.countPrefixSuffixPairs += current.frequency;
            ++prefix;
            --suffix;
        }
        ++current.frequency;
    }

    /**
     * @param {number} prefixCodePoint
     * @param {number} suffixCodePoint
     * @return {number}
     */
    getHashForPrefixSuffixPair(prefixCodePoint, suffixCodePoint) {
        return (prefixCodePoint - Trie.ASCII_SMALL_CASE_A) * Trie.ALPHABET_SIZE + (suffixCodePoint - Trie.ASCII_SMALL_CASE_A);
    }
}
```
**TypeScript**
```
function countPrefixSuffixPairs(words: string[]): number {
    const trie = new Trie();
    for (let word of words) {
        trie.addWord(word);
    }
    return trie.countPrefixSuffixPairs;
};

class TrieNode {
    frequency = 0;
    branches = new Map<number, TrieNode>();
}

class Trie {

    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;

    root = new TrieNode();
    countPrefixSuffixPairs = 0;

    addWord(word: string): void {
        let current = this.root;
        let prefix = 0;
        let suffix = word.length - 1;

        while (prefix < word.length && suffix >= 0) {
            const hashPrefixSuffix = this.getHashForPrefixSuffixPair(word.codePointAt(prefix), word.codePointAt(suffix));
            if (!current.branches.has(hashPrefixSuffix)) {
                current.branches.set(hashPrefixSuffix, new TrieNode());
            }
            current = current.branches.get(hashPrefixSuffix);
            this.countPrefixSuffixPairs += current.frequency;
            ++prefix;
            --suffix;
        }
        ++current.frequency;
    }

    getHashForPrefixSuffixPair(prefixCodePoint: number, suffixCodePoint: number): number {
        return (prefixCodePoint - Trie.ASCII_SMALL_CASE_A) * Trie.ALPHABET_SIZE + (suffixCodePoint - Trie.ASCII_SMALL_CASE_A);
    }
}
```
**C++ with Smart Pointers**
```
#include <array>
#include <vector>
#include <memory>
#include <string>
#include <string_view>
using namespace std;

struct TrieNode {
    int frequency;
    unordered_map<int, shared_ptr<TrieNode>> branches;
};

class Trie {

private:
    static const int ALPHABET_SIZE = 26;
    shared_ptr<TrieNode> root = make_shared<TrieNode>();

    int getHashForPrefixSuffixPair(char prefix, char suffix) const {
        return (prefix - 'a') * ALPHABET_SIZE + (suffix - 'a');
    }

public:
    long long countPrefixSuffixPairs = 0;

    void addWord(string_view word) {
        shared_ptr<TrieNode> current = root;
        size_t prefix = 0;
        size_t suffix = word.length() - 1;

        while (prefix < word.length() && suffix != variant_npos) {
            int hashPrefixSuffix = getHashForPrefixSuffixPair(word[prefix], word[suffix]);
            if (!current->branches.contains(hashPrefixSuffix)) {
                current->branches[hashPrefixSuffix] = make_shared<TrieNode>();
            }
            current = current->branches[hashPrefixSuffix];
            countPrefixSuffixPairs += current->frequency;
            ++prefix;
            --suffix;
        }
        ++current->frequency;
    }
};

class Solution {

public:
    long long countPrefixSuffixPairs(const vector<string>& words) const {
        auto trie = make_unique<Trie>();
        for (const auto& word : words) {
            trie->addWord(word);
        }
        return trie->countPrefixSuffixPairs;
    }
};
```
**C++ with Raw Pointers**
```
#include <array>
#include <vector>
#include <memory>
#include <string>
#include <string_view>
using namespace std;

struct TrieNode {
    int frequency;
    unordered_map<int, TrieNode*> branches;
};

class Trie {

private:
    static const int ALPHABET_SIZE = 26;
    TrieNode* root = new TrieNode();

    int getHashForPrefixSuffixPair(char prefix, char suffix) const {
        return (prefix - 'a') * ALPHABET_SIZE + (suffix - 'a');
    }

public:
    long long countPrefixSuffixPairs = 0;

    void addWord(string_view word) {
        TrieNode* current = root;
        size_t prefix = 0;
        size_t suffix = word.length() - 1;

        while (prefix < word.length() && suffix != variant_npos) {
            int hashPrefixSuffix = getHashForPrefixSuffixPair(word[prefix], word[suffix]);
            if (!current->branches.contains(hashPrefixSuffix)) {
                current->branches[hashPrefixSuffix] = new TrieNode();
            }
            current = current->branches[hashPrefixSuffix];
            countPrefixSuffixPairs += current->frequency;
            ++prefix;
            --suffix;
        }
        ++current->frequency;
    }
};

class Solution {

public:
    long long countPrefixSuffixPairs(const vector<string>& words) const {
        Trie* trie = new Trie();
        for (const auto& word : words) {
            trie->addWord(word);
        }
        return trie->countPrefixSuffixPairs;
    }
};
```
**C#**
```
using System;
using System.Collections.Generic;

public class Solution
{
    public long CountPrefixSuffixPairs(string[] words)
    {
        Trie trie = new Trie();
        foreach (var word in words)
        {
            trie.AddWord(word);
        }
        return trie.countPrefixSuffixPairs;
    }
}

class TrieNode
{
    public int frequency;
    public Dictionary<int, TrieNode> branches = new Dictionary<int, TrieNode>();
}

class Trie
{
    private static readonly int ALPHABET_SIZE = 26;
    private readonly TrieNode root = new TrieNode();
    public long countPrefixSuffixPairs;

    public void AddWord(String word)
    {
        TrieNode current = root;
        int prefix = 0;
        int suffix = word.Length - 1;

        while (prefix < word.Length && suffix >= 0)
        {
            int hashPrefixSuffix = GetHashForPrefixSuffixPair(word[prefix], word[suffix]);
            current.branches.TryAdd(hashPrefixSuffix, new TrieNode());
            current = current.branches[hashPrefixSuffix];
            countPrefixSuffixPairs += current.frequency;
            ++prefix;
            --suffix;
        }
        ++current.frequency;
    }

    private int GetHashForPrefixSuffixPair(char prefix, char suffix)
    {
        return (prefix - 'a') * ALPHABET_SIZE + (suffix - 'a');
    }
}
```
**Kotlin**
```
import java.util.HashMap

class Solution {
    fun countPrefixSuffixPairs(words: Array<String>): Long {
        val trie = Trie()
        for (word in words) {
            trie.addWord(word)
        }
        return trie.countPrefixSuffixPairs
    }
}

class TrieNode {

    var frequency = 0
    val branches: HashMap<Int, TrieNode> = HashMap<Int, TrieNode>()
}

class Trie {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    private val root: TrieNode = TrieNode()
    var countPrefixSuffixPairs: Long = 0

    fun addWord(word: String) {
        var current: TrieNode = root
        var prefix = 0
        var suffix = word.length - 1

        while (prefix < word.length && suffix >= 0) {
            val hashPrefixSuffix = getHashForPrefixSuffixPair(word[prefix], word[suffix])
            if (!current.branches.containsKey(hashPrefixSuffix)) {
                current.branches[hashPrefixSuffix] = TrieNode()
            }
            current = current.branches[hashPrefixSuffix]!!
            countPrefixSuffixPairs += current.frequency
            ++prefix
            --suffix
        }
        ++current.frequency
    }

    private fun getHashForPrefixSuffixPair(prefix: Char, suffix: Char): Int {
        return (prefix - 'a') * ALPHABET_SIZE + (suffix - 'a')
    }
}
```
**Go**
``` 
package main

import "fmt"

const ALPHABET_SIZE = 26

func countPrefixSuffixPairs(words []string) int64 {
    trie := Trie{createTrieNode(), 0}
    for _, word := range words {
            trie.addWord(&word)
    }
    return trie.countPrefixSuffixPairs
}

type TrieNode struct {
    frequency int
    branches  map[int]*TrieNode
}

type Trie struct {
    root                   *TrieNode
    countPrefixSuffixPairs int64
}

func createTrieNode() *TrieNode {
    trieNode := &TrieNode{
        frequency: 0,
        branches:  map[int]*TrieNode{},
    }
    return trieNode
}

func (trie *Trie) addWord(word *string) {
    current := trie.root
    prefix := 0
    suffix := len(*word) - 1

    for prefix < len(*word) && suffix >= 0 {
        hashPrefixSuffix := getHashForPrefixSuffixPair((*word)[prefix], (*word)[suffix])
        if current.branches[hashPrefixSuffix] == nil {
            current.branches[hashPrefixSuffix] = createTrieNode()
        }
        current = current.branches[hashPrefixSuffix]
        trie.countPrefixSuffixPairs += int64(current.frequency)
        prefix++
        suffix--
    }
    current.frequency++
}

func getHashForPrefixSuffixPair(prefix byte, suffix byte) int {
    return int(prefix-'a')*ALPHABET_SIZE + int(suffix-'a')
}
```