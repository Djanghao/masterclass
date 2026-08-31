# 🚀✅🚀 Simple Solution For Beginner Friendly 🔥🔥🔥

**Author:** ilxamovic
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352184/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352184/)

---

# Intuition
The code appears to be solving a problem related to counting characters in words that can be formed using a given set of characters. The `countCharacters` method takes a list of words and a string of characters as input and returns the total length of words that can be formed using the characters in the input string.

The `myFunc` method seems to be a helper function that counts the occurrences of each character in a given string and returns a dictionary with characters as keys and their counts as values.

# Approach
1. The `myFunc` method is used to count the occurrences of characters in each word from the input list.
2. For each word, the code checks if it can be formed using the characters in the input string (`chars`). It does so by comparing the character counts in the word with the character counts in the input string.
3. If a word can be formed, its length is added to the `result`.
4. The final result is the total length of words that can be formed using the characters in the input string.

# Complexity
- **Time complexity:** The time complexity of the code is dominated by the loops that iterate over the characters in the words and the characters in the input string. Let's denote the length of the input string as m and the total number of characters in all words as n. The time complexity is O(m + n).
- **Space complexity:** The space complexity is dominated by the dictionary `dc`, which stores the counts of characters in each word. The space complexity is O(m), where m is the length of the input string.

## Performance
| Language | Execution Time (ms) | Memory Usage (MB) |
| :--- | :---:| :---: | 
Java | 106 | 44.6 |
Python3 | 190 | 17.3 |
C# | 161 | 85.9 |

# Code
```python []
class Solution:
    def myFunc(self, s: str):
        dc = {}
        for i in s:
            if i in dc:
                dc[i] += 1
            else:
                dc[i] = 1

        return dc
    
    def countCharacters(self, words: List[str], chars: str) -> int:
        result = 0
        for i in words:
            check = 0
            cur = self.myFunc(i)
            for j in cur:
                if cur[j] <= chars.count(j):
                    check = 1
                else:
                    check = 0
                    break
            if check == 1:
                result += len(i)
        return result
```
```C# []
public class Solution
{
    private Dictionary<char, int> MyFunc(string s)
    {
        Dictionary<char, int> dc = new Dictionary<char, int>();
        foreach (char i in s)
        {
            if (dc.ContainsKey(i))
            {
                dc[i] += 1;
            }
            else
            {
                dc[i] = 1;
            }
        }
        return dc;
    }

    public int CountCharacters(string[] words, string chars)
    {
        int result = 0;
        foreach (string word in words)
        {
            int check = 0;
            Dictionary<char, int> cur = MyFunc(word);
            foreach (var entry in cur)
            {
                if (entry.Value <= chars.Count(c => c == entry.Key))
                {
                    check = 1;
                }
                else
                {
                    check = 0;
                    break;
                }
            }
            if (check == 1)
            {
                result += word.Length;
            }
        }
        return result;
    }
}
```
```Java []
public class Solution {
    private HashMap<Character, Integer> myFunc(String s) {
        HashMap<Character, Integer> dc = new HashMap<>();
        for (char i : s.toCharArray()) {
            dc.put(i, dc.getOrDefault(i, 0) + 1);
        }
        return dc;
    }

    public int countCharacters(String[] words, String chars) {
        int result = 0;
        for (String word : words) {
            int check = 0;
            HashMap<Character, Integer> cur = myFunc(word);
            for (HashMap.Entry<Character, Integer> entry : cur.entrySet()) {
                if (entry.getValue() <= chars.chars().filter(c -> c == entry.getKey()).count()) {
                    check = 1;
                } else {
                    check = 0;
                    break;
                }
            }
            if (check == 1) {
                result += word.length();
            }
        }
        return result;
    }
}
```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!