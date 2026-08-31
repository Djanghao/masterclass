# O(N) solution, where N is count of chars + Explanation

**Author:** darktugrenok
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/5915187/](https://leetcode.com/problems/unique-morse-code-words/solutions/5915187/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires transforming each word into its Morse code equivalent and finding the number of unique transformations. We can achieve this by iterating through each word, converting it to Morse code using a predefined mapping, and storing the transformations in a set to ensure uniqueness.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a list that holds the Morse code representation for each letter in the alphabet (`'a'` to `'z'`).
2. Use a set to store unique Morse code transformations.
3. Iterate through each word in the input array `words`.
4. For each word, build its Morse code transformation by appending the corresponding Morse code for each character using a `StringBuilder` for more efficient concatenation.
5. Add the resulting transformation to the set.
6. Finally, return the size of the set, which represents the number of unique transformations.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n \\cdot m)$$, where $$n$$ is the number of words and $$m$$ is the average length of each word. We iterate through each character of every word to form the Morse code transformation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n \\cdot m)$$, due to storing the unique transformations in a set.

# Code for my and your solution
```kotlin
class Solution {
    private val codes = listOf(
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
        "..-","...-",".--","-..-","-.--","--.."
    )

    fun uniqueMorseRepresentations(words: Array<String>): Int {
        val transformations = mutableSetOf<String>()
        for (word in words) {
            val stringBuilder = StringBuilder()
            for (letter in word) {
                stringBuilder.append(codes[letter - 'a'])
            }
            transformations.add(stringBuilder.toString())
        }
        return transformations.size
    }
}
```