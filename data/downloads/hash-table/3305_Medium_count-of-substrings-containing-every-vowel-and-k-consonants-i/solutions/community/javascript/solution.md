# Sliding window solution

**Author:** thanhlam1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/6122109/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/6122109/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
    const vowelsSet = new Set(["a", "e", "o", "u", "i"]);
    const vowelCount = { a: 0, o: 0, e: 0, u: 0, i: 0 };
    let consonantCount = 0;
    let left = 0;
    let result = 0;

    const countSub = (left, count) => {
        let result = 0;
        const clone = {...vowelCount};
        while (count === k && Object.values(clone).every(count => count >= 1)) {
            result++;
            if (vowelsSet.has(word[left])) {
                clone[word[left]]--;
            } else {
                count--;
            }
            left++;
        }
        return result;
    }

    for (let right = 0; right < word.length; right++) {
        if (vowelsSet.has(word[right])) {
            vowelCount[word[right]]++;
        } else {
            consonantCount++;
        }

        while (consonantCount > k) {
            if (vowelsSet.has(word[left])) {
                vowelCount[word[left]]--;
            } else {
                consonantCount--;
            }
            left++;
        }
        
        result += countSub(left, consonantCount);
    }

    return result;
};
```