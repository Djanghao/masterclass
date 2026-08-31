# JavaScript | sliding window

**Author:** Zhe1ka
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/3206148/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/3206148/)

---

- Time complexity:
O(n log n)

- Space complexity:
O(1)

# Code
```
function countVowelSubstrings(word: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (vowels.has(letter)) {
            const subStrLetters = new Set([letter]);

            for (let j = i + 1; j < word.length; j++) {
                if (vowels.has(word[j])) {
                    subStrLetters.add(word[j]);

                    if (subStrLetters.size === 5) {
                        count++;
                    }
                } else {
                    break;
                }
            }
        }
    }

    return count;
};
```