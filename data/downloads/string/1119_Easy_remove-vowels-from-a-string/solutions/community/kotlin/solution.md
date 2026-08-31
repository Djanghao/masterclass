# Kotlin solution beats 93% of all Kotlin submissions

**Author:** harsc8
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5077457/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5077457/)

---

# Intuition
We apply filter to our string and filter it so it doesn't contains the vowels. Then convert the returned list from filter() to a string.

# Approach
We create a vowels list containing 'a', 'e', 'i', 'o', 'u'. Then apply a filter to the string so it filters out the vowels list. Finally return the list returned by the filter() as a string.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun removeVowels(s: String): String {
        val vowels = mutableListOf<Char>('a','e','i','o','u')
        return s.filter{ !vowels.contains(it)}.toString()
    }
}
```