# Using Hashmap and Hashset

**Author:** meathirarosejohn
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-common-word/solutions/5934898/](https://leetcode.com/problems/most-common-word/solutions/5934898/)

---

# Intuition
The problem asks us to find the most frequent word in a paragraph that is not on the banned list. We need to clean up the input to extract words, count how many times each word appears, and then return the word that occurs the most frequently but is not banned.

# Approach
1. First, we convert the paragraph into lowercase to make the comparison case-insensitive.
2. We split the paragraph into individual words by removing non-alphabetic characters using a regular expression.
3. We create a set for banned words to easily check if a word is banned.
4. We count the frequency of each word in the paragraph (ignoring banned words and empty strings).
5. Finally, we iterate through the words and find the one that appears the most frequently.

# Complexity
- Time complexity:
The time complexity is O(n + m), where n is the number of words in the paragraph, and m is the number of banned words.

- Space complexity:
The space complexity is O(n) because we store the word counts in a map and the banned words in a set, both of which depend on the number of unique words in the paragraph.

# Code
```javascript []
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().split(/\\W+/g);
    const map = {};
    const bannedSet = new Set(banned);
    for(const word of words){
        if(!bannedSet.has(word) && word!=='')
            map[word] = (map[word] || 0) + 1;
    }
    let maxCount = 0;
    let frequent = '';
    for(const key in map){
        if(map[key] > maxCount){
            maxCount = map[key];
            frequent = key;
        }
    }
    return frequent;
};
```
```typescript []
function mostCommonWord(paragraph: string, banned: string[]): string {
    let words: string[] = paragraph.toLowerCase().split(/\\W+/g);
    
    const map: { [key: string]: number } = {};
    const bannedSet: Set<string> = new Set(banned);
    
    for (const word of words) {
        if (!bannedSet.has(word) && word !== '') {
            map[word] = (map[word] || 0) + 1;
        }
    }

    let maxCount:number = 0;
    let frequent:string = '';
    for (const key in map) {
        if (map[key] > maxCount) {
            maxCount = map[key];
            frequent = key;
        }
    }
    
    return frequent;
};
```

