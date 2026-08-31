# C# || Solution using HashSet<char> and two ForEach loops

**Author:** timmok2022
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3102510/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3102510/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using HashSet was the first idea to detect any letters in the brokenLetters since all the letters are unique and there is no need to keep track of the frequency of any of them.  

As for the option of iterating through all letters in text, I chose to use the string.Split() for simpler code of checking each word in the text and each letter of the word - thus using two ForEach loops.

The count of all words that can be typed without any of the broken letters, I chose to use a boolean flag to determine whether to count or not.

The final count value is the answer.

# Approach
<!-- Describe your approach to solving the problem. -->
I initialized the HashSet, simply passing the brokenLetters string as the argument of instantiation syntax of the set.

I then split the text into an array of strings, each element representing a word.

Using two foreach loops (not using for loop since  index of the letters is not needed), iterate through the array using the outer forloop and iterate through all letters of a given word the inner forloop.  If any one of the broken letters is found, the boolean flag is used to exclude the particular word from being counted.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```
public class Solution {
    public int CanBeTypedWords(string text, string brokenLetters) {

        var set = new HashSet<char>(brokenLetters);
        bool isBroken = false;
        int count = 0;

        string[] arr = text.Split(" ");
        
        foreach (var s in arr)
        {
            isBroken = false;
            foreach (var c in s)
            {
                if (set.Contains(c)) isBroken = true;
            }
            if (!isBroken) count++;
        }

        return count;
    }
}
```