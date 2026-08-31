# (O(n)⏱️|💯%) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 C++🦾 C##️⃣ Character Count🪄

**Author:** VishnuThangaraj
**Votes:** 8
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561511/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4561511/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A

# Intuition\uD83E\uDDE0
<!-- Describe your first thoughts on how to solve this problem. -->
Comparing the character count in both strings (word1 | word2) and Storing the frequency of characters in seperate array and comparing to determine the two strings are close or not.

# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
1. **COUNTING FREQUENCY**
    - Initialize arrays, `frequency1` and `frequency2` which stores the frequency of the characters in `word1` and `word2`.
    - `Frequency[index]` , where **index == i th** letter of the alphabet.
2. **CHECK CHARACTER PRESENCE**
    - Iterate through the frequency arrays.
    - If a character present in one word and not in another, Return **False**
    - Both words should contain same set of characters, regardless of its count.
3. **SORTING FREQUENCY ARRAY**
    -   Sort the frequency arrays and compare the count of the frequency in both array.
    - If Both array has same number in count , Return **True** else **False**.

# Complexity\u231B
- Time complexity: `O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`, Since the size of the frequency arrays are constant.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java []
class Solution {
    public boolean closeStrings(String word1, String word2) {
        int[] frequency1 = new int[26];
        int[] frequency2 = new int[26];

        for(char letter : word1.toCharArray())
            frequency1[letter - 'a']++;

        for(char letter : word2.toCharArray())
            frequency2[letter - 'a']++;

        for(int index=0; index<26; index++){
            if(frequency1[index] == 0 && frequency2[index] != 0)
                return false;
            if(frequency1[index] != 0 && frequency2[index] == 0)
                return false;
        }

        Arrays.sort(frequency1);
        Arrays.sort(frequency2);

        return Arrays.equals(frequency1, frequency2);
    }
}
```
``` Python []
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        
        frequency1 = [0] * 26
        frequency2 = [0] * 26

        for letter in word1:
            frequency1[ord(letter)- ord('a')] += 1

        for letter in word2:
            frequency2[ord(letter)- ord('a')] += 1

        for index in range (0,26):
            if frequency1[index] == 0 and frequency2[index] != 0:
                return False
            if frequency1[index] != 0 and frequency2[index] == 0:
                return False

        return sorted(frequency1) == sorted(frequency2)
```
``` Javascript []
var closeStrings = function(word1, word2) {
    const frequency1 = new Array(26).fill(0);
    const frequency2 =new Array(26).fill(0);

    for(let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let index=0; index<26; index++){
        if(frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if(frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    frequency1.sort((a, b) => a - b)
    frequency2.sort((a, b) => a - b)

    return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};
```
``` Typescript []
function closeStrings(word1: string, word2: string): boolean {
    const frequency1 = new Array(26).fill(0);
    const frequency2 =new Array(26).fill(0);

    for(let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let index=0; index<26; index++){
        if(frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if(frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    frequency1.sort((a, b) => a - b)
    frequency2.sort((a, b) => a - b)

    return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};
```
``` C++ []
class Solution {
public:
    bool closeStrings(std::string word1, std::string word2) {
        std::vector<int> frequency1(26, 0);
        std::vector<int> frequency2(26, 0);

        for (char letter : word1)
            frequency1[letter - 'a']++;

        for (char letter : word2)
            frequency2[letter - 'a']++;

        for (int index = 0; index < 26; index++) {
            if (frequency1[index] == 0 && frequency2[index] != 0)
                return false;
            if (frequency1[index] != 0 && frequency2[index] == 0)
                return false;
        }

        std::sort(frequency1.begin(), frequency1.end());
        std::sort(frequency2.begin(), frequency2.end());

        for (int index = 0; index < 26; index++)
            if (frequency1[index] != frequency2[index])
                return false;

        return true;
    }
};
```
``` C# []
public class Solution {
    public bool CloseStrings(string word1, string word2) {
        if(word1.Length != word2.Length) return false;

        int[] frequency1 = new int[26];
        int[] frequency2 = new int[26];

        for(int index=0; index<word1.Length; index++){
            frequency1[word1[index] - 'a']++;
            frequency2[word2[index] - 'a']++;
        }

        for(int index=0; index<26; index++){
            if(frequency1[index] == 0 && frequency2[index] != 0)
                return false;
            if(frequency1[index] != 0 && frequency2[index] == 0)
                return false;
        }

        Array.Sort(frequency1);
        Array.Sort(frequency2);

        return frequency1.SequenceEqual(frequency2);
    }
}
```