# Very Easy 100% || find-first-palindromic-string-in-the-array➕ || 🔥with Explaination🔥||

**Author:** adoutsh
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4720403/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4720403/)

---

![image.png](./images/0.png)

---

# ****PLEASE UPVOTE IF IT HELPED\uD83D\uDE4C****

---


# Intuition \uD83D\uDCA1
To solve this problem, we need to iterate through the array of words and check each word to see if it is a palindrome. A palindrome is a string that reads the same forward and backward. So, we'll need a function to determine whether a given word is a palindrome or not. If we find a palindrome in the array, we return it; otherwise, we return an empty string.

To determine whether a string is a palindrome, we iterate through its characters from both ends simultaneously, comparing characters at corresponding positions. If at any point, the characters don't match, we know the string is not a palindrome.

# Approach \uD83D\uDE80
1. **Iterate Through Words Array:** We start by iterating through the array of words using a loop. For each word in the array, we'll perform a check to see if it's a palindrome.
2. **Check for Palindrome:** We define a helper function, palindrome, to check if a given word is a palindrome. This function iterates through the characters of the word from both ends, comparing characters at corresponding positions. If at any point the characters don't match, we know the word is not a palindrome, and we return false. Otherwise, if we successfully iterate through all characters without finding any mismatches, we return true.
3. **Return First Palindrome:** Within the loop iterating through the words array, if we find a palindrome using the palindrome helper function, we return that palindrome immediately. This ensures that we return the first palindrome encountered in the array.

# Complexity \uD83D\uDCCA
- Time complexity:O(n * m)
Iterating through the array of words requires visiting each word once, so the time complexity is O(n), where n is the number of words in the array.
Checking if a word is a palindrome involves iterating through its characters, which takes O(m) time, where m is the length of the word.
Overall, the time complexity of the algorithm is O(n * m).

- Space complexity:O(1)
The space complexity is O(1) because we are not using any additional space that grows with the size of the input. We only have a constant amount of space used for variables and the function call stack.

# Code \uD83D\uDC68\u200D\uD83D\uDCBB

```java []
class Solution {
    public String firstPalindrome(String[] words) {
        for(int i = 0; i < words.length; i++){
            if(palindrome(words[i]))return words[i];
        }
        return "";
    }

    private boolean palindrome(String word){
        for(int i = 0, k = word.length() - 1; i < word.length() / 2; i++, k--){
            if(word.charAt(i) != word.charAt(k))return false;
        }
        return true;
    }
}
```
```C# []
public class Solution
{
    public string FirstPalindrome(string[] words)
    {
        foreach (string word in words)
        {
            if (IsPalindrome(word))
                return word;
        }
        return "";
    }

    private bool IsPalindrome(string word)
    {
        for (int i = 0, k = word.Length - 1; i < word.Length / 2; i++, k--)
        {
            if (word[i] != word[k])
                return false;
        }
        return true;
    }
}

```
```C++ []
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        for (const string& word : words) {
            if (isPalindrome(word))
                return word;
        }
        return "";
    }

private:
    bool isPalindrome(string word) {
        for (int i = 0, k = word.length() - 1; i < word.length() / 2; i++, k--) {
            if (word[i] != word[k])
                return false;
        }
        return true;
    }
};
```
```JavaScript []
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if (isPalindrome(word))
            return word;
    }
    return "";
};

function isPalindrome(word) {
    for (let i = 0, k = word.length - 1; i < Math.floor(word.length / 2); i++, k--) {
        if (word[i] !== word[k])
            return false;
    }
    return true;
}

```
```Python3 []
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if self.isPalindrome(word):
                return word
        return ""

    def isPalindrome(self, word: str) -> bool:
        return word == word[::-1]
```
```Python []
class Solution(object):
    def firstPalindrome(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
        for word in words:
            if self.isPalindrome(word):
                return word
        return ""

    def isPalindrome(self, word):
        return word == word[::-1]
```
```C []
bool isPalindrome(const char* word);

char* firstPalindrome(char** words, int wordsSize) {
    for (int i = 0; i < wordsSize; ++i) {
        if (isPalindrome(words[i]))
            return words[i];
    }
    return "";
}

bool isPalindrome(const char* word) {
    int length = strlen(word);
    for (int i = 0, k = length - 1; i < length / 2; ++i, --k) {
        if (word[i] != word[k])
            return false;
    }
    return true;
}
```
```ruby []
# @param {String[]} words
# @return {String}
def first_palindrome(words)
    words.each do |word|
        return word if is_palindrome(word)
    end
    ""
end

def is_palindrome(word)
    word == word.reverse
end
```

![upvote.jpeg](./images/1.jpeg)


---
#  #PLEASE UPVOTE IF IT HELPED

---







