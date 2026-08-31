# 🚀 Iterative Solution || Explained Intuition 🚀

**Author:** MohamedMamdouh20
**Votes:** 156
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285072/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285072/)

---

# Problem Description

Given a string `s`, calculates the count of **unique** palindromes of length **three** that can be formed as **subsequences** within `s`. 

A **palindrome** is a string that reads the **same** forward and backward. In this context, a **subsequence** of a string is a new string formed by **deleting** some characters (possibly none) from the original string without altering the relative **order** of the remaining characters.

**Note** that the count should consider only **unique** palindromes, even if there are multiple ways to derive the same subsequence.

- **Constraints:**
    - $3 <= s.length <= 10^5$
    - `s` consists of only **lowercase** English letters.
    - Count **unique** palindromes


---



# Intuition

Hi there,\uD83D\uDE04

How are you? I hope you are fine \uD83D\uDE03\uD83D\uDCAA
Let's zoom in\uD83D\uDD0E the details of our today's interesting problem.

We have a string\uD83E\uDDF5 and we want to calculate the number of **palindrome** subsequences in this string of length `3` specifically the **unique** number of those subsequences.

Ok, seems easy to solve right ?\uD83E\uDD14
First thing that we can think of is our big guy **BRUTE FORCE**\uD83D\uDCAA\uD83D\uDCAA.
By **looping** over all the characters of our string and thing look **forward** and **backward** for **similar** characters that can form 3-length palindrome.\uD83D\uDE03
Unfortunately, this solution will give us $O(N ^ 2)$ time complexity, **TLE** and some **headaches**.\uD83D\uDE02\uD83D\uDE02

How can we improve this solution atleast to get rid of headaces?\uD83D\uDCA2
Did you notice something I said earlier ?\uD83E\uDD28
We will look for **similar** characters forward and backward for every character in our string.\uD83E\uDD2F

So why don't we change our perspective a little !\uD83E\uDD29
We know that we have `26` **unique** characters in English so why don't we compute last and first occurences only for each character and then for each **pair** of them let's see how many **unique** letters between them.\uD83E\uDD2F

Huh, Does that improve our time complexity ?\uD83E\uDD14
Yes, alot and also remove headaces.\uD83D\uDE02\uD83D\uDCA2
to compute **first** and **last** occurences of every character of the `26` English characters it will take us to iterate over the input string one time and to look for every **unique** character between them it will take at most to iterate over the whole string for the `26` English characters which is `26 * N` so it is at most `27 * N` iterations which is $O(N)$.\uD83E\uDD29

Let's see an example:
```
input = abascba

First occurence: a -> 0
                 b -> 1
                 c -> 4
                 s -> 3
Last occurence: a -> 6
                b -> 5
                c -> 4
                s -> 3

Now for each character of them we calculate number of unique characters between both occurences.

For a -> 0 : 6
        unique chars -> a, b, c, s -> 4 answers
For b -> 1 : 5
        unique chars -> a, c, s -> 3 answers
For c -> 4 : 4
        unique chars -> - -> 0 answers
For s -> 5 : 5
        unique chars -> - -> 0 answers

Final asnwer is 4 + 3 + 0 + 0 = 7
```

```
input = bbsasccbaba

First occurence: a -> 3
                 b -> 0
                 c -> 5
                 s -> 2
Last occurence: a -> 10
                b -> 9
                c -> 6
                s -> 4

Now for each character of them we calculate number of unique characters between both occurences.

For a -> 3 : 10
        unique chars -> a, b, c, s -> 4 answers
For b -> 0 : 9
        unique chars -> a, b, c, s -> 4 answers
For c -> 5 : 6
        unique chars -> - -> 0 answers
For s -> 2 : 4
        unique chars -> a -> 1 answers

Final asnwer is 4 + 4 + 0 + 1 = 9
```
And this how will our algorithm work. \u2728

**Bonus part**\uD83E\uDD29
What is the **maximum** answer that can we get for this problem ?\uD83E\uDD14
<details>
  <summary>Click to show the answer</summary>
    <div>
        It is 676 but why?\uD83E\uDD28 </br>
            <details>
                <summary>Click to show the justification</summary>
                    <div>How we got such a number? </br>
    We remember that we have 26 unique chars in English right? </br>
    our palidrome subsequences are formed of 3 places _ _ _ let's call them a b c. a and c must have the same value of the 26 chars and b can be any char of the 26 chars so the answer will be 26 * 26 different unique palindromes.
                    </div>
            </details>
        </div>
</details>

</br>
And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80




---


# Approach
1. **Initialize Arrays:** Create arrays `minExist` and `maxExist` with 26 elements each, initialized to `INT_MAX` and `INT_MIN`, respectively.
2. **Populate Arrays:** Iterate through each character in the input string, updating the minimum and maximum occurrences for each character in the corresponding arrays.
3. **Count Unique Palindromic Subsequences:**
    - Iterate over each character in the alphabet (26 characters).
    - Check if the character has occurred in the input string. If not, skip to the next character.
    - Create an empty set `uniqueCharsBetween` to store unique characters between the minimum and maximum occurrences of the current character.
    - Iterate over the characters between the minimum and maximum occurrences, adding each character to the set.
    - Add the count of unique characters between occurrences to `uniqueCount`.
4. **Return Result:** Return the total count of unique palindromic subsequences `uniqueCount`.


## Complexity
- **Time complexity:** $O(N)$
Since we iterating **two** passes, **first** pass to compute first and last occurence for each character with time `N` and **second** pass to compute number of unique palindromes. In the **second** pass we iterate over all the unique characters which are `26` and we iterate between their first and last occurence to compute the number of unique characters which can be at most `N` characters.
So time complexity is `26 * N + N` which is `27 * N` which is also `O(N)`.
Where `N` is number of characters in our input string.

- **Space complexity:** $O(1)$
Since we are storing two arrays to compute last and first occurence each one of them is of size `26` and we use hash set that can be at maximum with size `26` so the space complexity is still `O(1)`. Since we have constant space variables.


---


# Code
```C++ []
class Solution {
public:
    int countPalindromicSubsequence(string inputString) {
        // Arrays to store the minimum and maximum occurrences of each character in the input string
        vector<int> minExist(26, INT_MAX);
        vector<int> maxExist(26, INT_MIN);

        // Populate minExist and maxExist arrays
        for(int i = 0; i < inputString.size(); i++) {
            int charIndex = inputString[i] - 'a';
            minExist[charIndex] = min(minExist[charIndex], i);
            maxExist[charIndex] = max(maxExist[charIndex], i);
        }

        // Variable to store the final count of unique palindromic subsequences
        int uniqueCount = 0;

        // Iterate over each character in the alphabet
        for (int charIndex = 0; charIndex < 26; charIndex++) {
            // Check if the character has occurred in the input string
            if (minExist[charIndex] == INT_MAX || maxExist[charIndex] == INT_MIN) {
                continue; // No occurrences, move to the next character
            }

            // Set to store unique characters between the minimum and maximum occurrences
            unordered_set<char> uniqueCharsBetween;

            // Iterate over the characters between the minimum and maximum occurrences
            for (int j = minExist[charIndex] + 1; j < maxExist[charIndex]; j++) {
                uniqueCharsBetween.insert(inputString[j]);
            }

            // Add the count of unique characters between the occurrences to the final count
            uniqueCount += uniqueCharsBetween.size();
        }

        // Return the total count of unique palindromic subsequences
        return uniqueCount;
    }
};
```
```Java []
class Solution {
    public int countPalindromicSubsequence(String inputString) {
        // Arrays to store the minimum and maximum occurrences of each character in the input string
        int[] minExist = new int[26];
        int[] maxExist = new int[26];
        for (int i = 0; i < 26; i++) {
            minExist[i] = Integer.MAX_VALUE;
            maxExist[i] = Integer.MIN_VALUE;
        }

        // Populate minExist and maxExist arrays
        for (int i = 0; i < inputString.length(); i++) {
            int charIndex = inputString.charAt(i) - 'a';
            minExist[charIndex] = Math.min(minExist[charIndex], i);
            maxExist[charIndex] = Math.max(maxExist[charIndex], i);
        }

        // Variable to store the final count of unique palindromic subsequences
        int uniqueCount = 0;

        // Iterate over each character in the alphabet
        for (int charIndex = 0; charIndex < 26; charIndex++) {
            // Check if the character has occurred in the input string
            if (minExist[charIndex] == Integer.MAX_VALUE || maxExist[charIndex] == Integer.MIN_VALUE) {
                continue; // No occurrences, move to the next character
            }

            // Set to store unique characters between the minimum and maximum occurrences
            HashSet<Character> uniqueCharsBetween = new HashSet<>();

            // Iterate over the characters between the minimum and maximum occurrences
            for (int j = minExist[charIndex] + 1; j < maxExist[charIndex]; j++) {
                uniqueCharsBetween.add(inputString.charAt(j));
            }

            // Add the count of unique characters between the occurrences to the final count
            uniqueCount += uniqueCharsBetween.size();
        }

        // Return the total count of unique palindromic subsequences
        return uniqueCount;
    }
}
```
```Python []
class Solution:
    def countPalindromicSubsequence(self, inputString):
        # Arrays to store the minimum and maximum occurrences of each character in the input string
        min_exist = [float('inf')] * 26
        max_exist = [float('-inf')] * 26

        # Populate min_exist and max_exist arrays
        for i in range(len(inputString)):
            char_index = ord(inputString[i]) - ord('a')
            min_exist[char_index] = min(min_exist[char_index], i)
            max_exist[char_index] = max(max_exist[char_index], i)

        # Variable to store the final count of unique palindromic subsequences
        unique_count = 0

        # Iterate over each character in the alphabet
        for char_index in range(26):
            # Check if the character has occurred in the input string
            if min_exist[char_index] == float('inf') or max_exist[char_index] == float('-inf'):
                continue  # No occurrences, move to the next character

            # Set to store unique characters between the minimum and maximum occurrences
            unique_chars_between = set()

            # Iterate over the characters between the minimum and maximum occurrences
            for j in range(min_exist[char_index] + 1, max_exist[char_index]):
                unique_chars_between.add(inputString[j])

            # Add the count of unique characters between the occurrences to the final count
            unique_count += len(unique_chars_between)

        # Return the total count of unique palindromic subsequences
        return unique_count
```
```C []
int countPalindromicSubsequence(char* inputString) {
    // Arrays to store the minimum and maximum occurrences of each character in the input string
    int minExist[26];
    int maxExist[26];

    // Initialize arrays with default values
    for (int i = 0; i < 26; i++) {
        minExist[i] = INT_MAX;
        maxExist[i] = INT_MIN;
    }

    // Populate minExist and maxExist arrays
    for (int i = 0; inputString[i] != '\\0'; i++) {
        int charIndex = inputString[i] - 'a';
        minExist[charIndex] = (minExist[charIndex] < i) ? minExist[charIndex] : i;
        maxExist[charIndex] = (maxExist[charIndex] > i) ? maxExist[charIndex] : i;
    }

    // Variable to store the final count of unique palindromic subsequences
    int uniqueCount = 0;

    // Iterate over each character in the alphabet
    for (int charIndex = 0; charIndex < 26; charIndex++) {
        // Check if the character has occurred in the input string
        if (minExist[charIndex] == INT_MAX || maxExist[charIndex] == INT_MIN) {
            continue; // No occurrences, move to the next character
        }

        // Set to store unique characters between the minimum and maximum occurrences
        char uniqueCharsBetween[CHAR_MAX];
        int uniqueCharsCount = 0;

        // Iterate over the characters between the minimum and maximum occurrences
        for (int j = minExist[charIndex] + 1; j < maxExist[charIndex]; j++) {
            int charExists = 0;
            for (int k = 0; k < uniqueCharsCount; k++) {
                if (uniqueCharsBetween[k] == inputString[j]) {
                    charExists = 1;
                    break;
                }
            }
            if (!charExists) {
                uniqueCharsBetween[uniqueCharsCount++] = inputString[j];
            }
        }

        // Add the count of unique characters between the occurrences to the final count
        uniqueCount += uniqueCharsCount;
    }

    // Return the total count of unique palindromic subsequences
    return uniqueCount;
}
```


![HelpfulJerry.jpg](./images/0.jpeg)
