# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/5518463/](https://leetcode.com/problems/sentence-similarity/solutions/5518463/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
public boolean areSentencesSimilar(String[] sentence1, String[] sentence2, List<List<String>> similarPairs) {
    // Check if the sentences have the same length
    if (sentence1.length != sentence2.length) {
        return false;
    }
    
    // Create a map to store similar pairs
    Map<String, Set<String>> similarMap = new HashMap<>();
    
    // Populate the map with the similar pairs
    for (List<String> pair : similarPairs) {
        similarMap.computeIfAbsent(pair.get(0), k -> new HashSet<>()).add(pair.get(1));
        similarMap.computeIfAbsent(pair.get(1), k -> new HashSet<>()).add(pair.get(0));
    }
    
    // Check each word pair in the sentences
    for (int i = 0; i < sentence1.length; i++) {
        String word1 = sentence1[i];
        String word2 = sentence2[i];
        
        // A word is always similar to itself
        if (word1.equals(word2)) {
            continue;
        }
        
        // Check if the words are similar according to the map
        if (!similarMap.getOrDefault(word1, new HashSet<>()).contains(word2) && 
            !similarMap.getOrDefault(word2, new HashSet<>()).contains(word1)) {
            return false;
        }
    }
    
    // All words are similar
    return true;
}
```
```Javascript []
/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    // Check if the sentences have the same length
    if (sentence1.length !== sentence2.length) {
        return false;
    }
    
    // Create a map to store similar pairs
    const similarMap = new Map();
    
    // Populate the map with the similar pairs
    for (let pair of similarPairs) {
        if (!similarMap.has(pair[0])) {
            similarMap.set(pair[0], new Set());
        }
        similarMap.get(pair[0]).add(pair[1]);

        if (!similarMap.has(pair[1])) {
            similarMap.set(pair[1], new Set());
        }
        similarMap.get(pair[1]).add(pair[0]);
    }
    
    // Check each word pair in the sentences
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i];
        const word2 = sentence2[i];
        
        // A word is always similar to itself
        if (word1 === word2) {
            continue;
        }
        
        // Check if the words are similar according to the map
        if (!(similarMap.has(word1) && similarMap.get(word1).has(word2)) &&
            !(similarMap.has(word2) && similarMap.get(word2).has(word1))) {
            return false;
        }
    }
    
    // All words are similar
    return true;
};
```
```Typescript []
function areSentencesSimilar(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
    // Check if the sentences have the same length
    if (sentence1.length !== sentence2.length) {
        return false;
    }
    
    // Create a map to store similar pairs
    const similarMap: Map<string, Set<string>> = new Map();
    
    // Populate the map with the similar pairs
    for (let pair of similarPairs) {
        if (!similarMap.has(pair[0])) {
            similarMap.set(pair[0], new Set());
        }
        similarMap.get(pair[0])!.add(pair[1]);

        if (!similarMap.has(pair[1])) {
            similarMap.set(pair[1], new Set());
        }
        similarMap.get(pair[1])!.add(pair[0]);
    }
    
    // Check each word pair in the sentences
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i];
        const word2 = sentence2[i];
        
        // A word is always similar to itself
        if (word1 === word2) {
            continue;
        }
        
        // Check if the words are similar according to the map
        if (!(similarMap.has(word1) && similarMap.get(word1)!.has(word2)) &&
            !(similarMap.has(word2) && similarMap.get(word2)!.has(word1))) {
            return false;
        }
    }
    
    // All words are similar
    return true;
};
```