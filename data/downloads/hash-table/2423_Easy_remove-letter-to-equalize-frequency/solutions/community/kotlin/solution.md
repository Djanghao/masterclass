# A simple solution on Kotlin

**Author:** kabrishka
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3161695/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3161695/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Return true if it is possible to `remove one letter` so that `the frequency of all letters in word are equal`, and false otherwise.

# Approach
<!-- Describe your approach to solving the problem. -->
Let's create a map in which key = letter, value = number of repetitions in a word.
The algorithm will consist in checking the condition: if you delete one letter, the frequency of letters will become the same. To do this, we need a set that will contain the number of repetitions of letters.
Since the set does not contain repetitions, the set for a word with the same frequency of letters will contain only one number equal to the frequency.
1. Create a cycle of passing through each letter of the word;
2. Reducing the frequency of occurrence of the letter by 1 (it turns out that we removed this letter from the word, For example: the original word = aabbc, after removing the first letter, our word will become = abbc. Or by removing the third letter, our word will become = aabc. When deleting the last one - aabb);
3. Create a set that contains the frequency of occurrence of the letter. If there is only one value in the word after deleting the letter under the idex i in the set => then the frequency of occurrence of each letter is the same => we achieve the condition of the problem;
4. Do not forget to return the "stolen" value of 1 from the letter under the index i.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun equalFrequency(word: String): Boolean {
        val counter = word.groupingBy { it }.eachCount().toMutableMap()

        for (i in word) {
            counter[i] = counter[i]!! - 1

            val set = counter.filterNot { it.value == 0 }.values.toHashSet()
           
            if (set.size == 1) return true

            counter[i] = counter[i]!! + 1
        }
        return false
    }
}
```