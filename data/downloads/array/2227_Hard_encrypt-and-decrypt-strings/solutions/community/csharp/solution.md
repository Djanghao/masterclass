# hard...

**Author:** s9927220
**Votes:** 0
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4931364/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4931364/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Encrypter {
    Dictionary<char, string> charToValue = new Dictionary<char, string>();
    Dictionary<string, int> encryptedWordCount = new Dictionary<string, int>();

    public Encrypter(char[] keys, string[] values, string[] dictionary) {
        for (int i = 0; i < keys.Length; i++) {
            charToValue[keys[i]] = values[i];
        }

        // Encrypt each word in the dictionary and count the occurrences of each encrypted form
        foreach (var word in dictionary) {
            var encryptedWord = Encrypt(word);
            if (!string.IsNullOrEmpty(encryptedWord)) {
                if (!encryptedWordCount.ContainsKey(encryptedWord)) {
                    encryptedWordCount[encryptedWord] = 0;
                }
                encryptedWordCount[encryptedWord]++;
            }
        }
    }
    
    public string Encrypt(string word1) {
        string result = "";
        foreach (char c in word1) {
            if (!charToValue.ContainsKey(c)) return ""; // Encryption fails if char not found
            result += charToValue[c];
        }
        return result;
    }
    
    public int Decrypt(string word2) {
        // Directly return the count of dictionary words that match the encrypted form
        return encryptedWordCount.ContainsKey(word2) ? encryptedWordCount[word2] : 0;
    }
}

```