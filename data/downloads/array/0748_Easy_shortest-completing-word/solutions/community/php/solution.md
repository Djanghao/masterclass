# Counting

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/5520721/](https://leetcode.com/problems/shortest-completing-word/solutions/5520721/)

---

# Approach

1. The function count_letters(word) counts the number of occurrences of each letter in a word. 
- It creates a dictionary-like object that stores the count of each letter. 
- It then iterates over the letters in the license plate and checks if the count of that letter in the word is less than or equal to the count in the license plate. 
- It sums up these counts to get the total count of letters in the word that are also present in the license plate.
2. The function starts by converting the license plate to lowercase and creating a Counter object license_count that stores the count of each letter in the license plate.
3. It initializes min_word to None and min_length to a large value.
4. It iterates over each word in the words list. 
- For each word, it checks if the word is shorter than the current minimum length and if the count of letters in the word that are also present in the license plate is equal to the total count of letters in the license plate. 
- If both conditions are met, it updates min_word and min_length with the current word and its length.
5. Finally, it returns the min_word.

# Complexity
- Time complexity:
$$O(N*M)$$, where N is the number of words in the words list and M is the average length of each word. This is because of the nested loops used in the solution.
The outer loop iterates over each word in the words list, which takes O(N) time.
Inside the loop, the function count_letters(word) is called for each word. This function iterates over each letter in the word, which takes O(M) time (where M is the length of the word).


- Space complexity:
$$O(1)$$ because the extra space used is constant and does not grow with the input size

# Code
``` python3 []
class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        def count_letters(word):
            count = Counter(word)
            return sum(min(count[letter], license_count[letter]) for letter in count)
        
        licensePlate = licensePlate.lower()
        license_count = Counter(c for c in licensePlate if c.isalpha())

        min_word = None
        # Find the shortest word that contains all the letters in the license plate
        min_length = float('inf')

        for word in words:
            if len(word) < min_length and count_letters(word) == sum(license_count.values()):
                # Check if the word contains all the letters in the license plate and is shorter than the current minimum
                min_word = word
                min_length = len(word)

        return min_word
```
``` javascript []
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    function countLetters(word) {
        const count = {};
        for (let letter of word) {
            count[letter] = (count[letter] || 0) + 1;
        }
        return Object.keys(count).reduce((sum, letter) => sum + Math.min(count[letter], licenseCount[letter] || 0), 0);
    }
    
    licensePlate = licensePlate.toLowerCase();
    const licenseCount = {};
    for (let char of licensePlate) {
        if (/[a-z]/.test(char)) {
            licenseCount[char] = (licenseCount[char] || 0) + 1;
        }
    }

    let minWord = null;
    let minLength = Infinity;

    for (let word of words) {
        if (word.length < minLength && countLetters(word) === Object.values(licenseCount).reduce((acc, val) => acc + val, 0)) {
            minWord = word;
            minLength = word.length;
        }
    }

    return minWord;
};
```
``` php []
class Solution {

    /**
     * @param String $licensePlate
     * @param String[] $words
     * @return String
     */
    function shortestCompletingWord($licensePlate, $words) {
        $licensePlate = strtolower($licensePlate);
        $licenseCount = array_count_values(preg_split('//', preg_replace('/[^a-zA-Z]/', '', $licensePlate), -1, PREG_SPLIT_NO_EMPTY));
        
        $minWord = null;
        $minLength = INF;

        foreach ($words as $word) {
            $count = [];
            foreach (str_split($word) as $letter) {
                $count[$letter] = ($count[$letter] ?? 0) + 1;
            }
            
            $sum = 0;
            foreach ($count as $letter => $value) {
                $sum += min($value, $licenseCount[$letter] ?? 0);
            }

            if (strlen($word) < $minLength && $sum == array_sum($licenseCount)) {
                $minWord = $word;
                $minLength = strlen($word);
            }
        }

        return $minWord;
    }
}
```