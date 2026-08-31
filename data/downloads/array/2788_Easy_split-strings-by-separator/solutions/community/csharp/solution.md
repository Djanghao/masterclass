# 🔥 [VIDEO] Split Strings by Separator - LeetCode Solution

**Author:** vanAmsen
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3809909/](https://leetcode.com/problems/split-strings-by-separator/solutions/3809909/)

---

# Intuition
Initially, upon reading the problem statement, it is evident that the task requires manipulation and processing of strings in a list. The Python built-in `split()` method comes to mind as it allows us to divide a string into a list where each word is a separate list item.

https://youtu.be/G-UtexPS4zA

# Approach
The approach for this problem is straightforward. For each string in the list, we use the `split()` method to divide the string into substrings based on the provided separator. This results in a list of substrings. We then use the `extend()` method to add these substrings to our result list. To ensure we don't include empty strings in our result, we use a list comprehension to filter out any such strings.

# Complexity
- Time complexity: The time complexity is \\(O(n \\cdot m)\\), where \\(n\\) is the number of words in the list and \\(m\\) is the average length of a word. This is because we need to iterate over each word and for each word, we perform a split operation which takes \\(O(m)\\) time.
  
- Space complexity: The space complexity is \\(O(n \\cdot m)\\) as in the worst case, every character in every word could be a separate string in the result list.

# Code
```Python []
class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        result = [] 
        for word in words: 
            split_word = word.split(separator) 
            result.extend([w for w in split_word if w]) 
        return result 
```
``` Java []
class Solution {
    public List<String> splitWordsBySeparator(List<String> words, char separator) {
        List<String> result = new ArrayList<>();
        String sep = Character.toString(separator);
        if (".|[$(){}^?*+\\\".indexOf(separator) != -1) {
            sep = "\\\" + sep;
        }
        for (String word : words) {
            String[] splitWord = word.split(sep);
            for (String w : splitWord) {
                if (!w.isEmpty()) {
                    result.add(w);
                }
            }
        }
        return result;
    }
}
```
``` C++ []
class Solution {
public:
    vector<string> splitWordsBySeparator(vector<string>& words, char separator) {
        vector<string> result;
        for (string& word : words) {
            stringstream ss(word);
            string token;
            while (getline(ss, token, separator)) {
                if (!token.empty()) {
                    result.push_back(token);
                }
            }
        }
        return result;
    }
};
```
``` C# []
public class Solution {
    public IList<string> SplitWordsBySeparator(IList<string> words, char separator) {
        List<string> result = new List<string>();
        foreach (string word in words) {
            string[] splitWord = word.Split(separator);
            foreach (string w in splitWord) {
                if (!string.IsNullOrEmpty(w)) {
                    result.Add(w);
                }
            }
        }
        return result;
    }
}
```
``` JavaScript []
var splitWordsBySeparator = function(words, separator) {
        let result = [];
        for (let word of words) {
            let splitWord = word.split(separator);
            for (let w of splitWord) {
                if (w) {
                    result.push(w);
                }
            }
        }
        return result;
};
```