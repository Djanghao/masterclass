# 🧩 [VIDEO] Maximum Number of String Pairs 🔀 - Reversed String Pairing

**Author:** vanAmsen
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3816585/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3816585/)

---

# Intuition
Upon reading the problem, it's apparent that we need to pair strings that are the reverse of each other. The first instinct is to use a data structure that allows quick lookups to check for the existence of a reversed word. A Python dictionary fits this need perfectly.

https://www.youtube.com/watch?v=zL2d3G-nO0A

# Approach
We'll start by initializing an empty dictionary and a counter variable to track the number of pairs. Next, we iterate through each word in the list. For each word, we generate its reversed counterpart and check if this reversed word is in the dictionary. If it is, we increment our counter and remove the reversed word from the dictionary, effectively forming a pair. If not, we add the original word to the dictionary. This process continues until we've iterated through all the words. Finally, we return the counter as the result, which is the maximum number of pairs we can form.

# Complexity
- Time complexity: The time complexity is \\(O(n)\\) where \\(n\\) is the length of the input list. This is because we're iterating through the list once.

- Space complexity: The space complexity is also \\(O(n)\\) in the worst-case scenario where no words can be paired and all words end up in the dictionary.

In the code, we've used Python's string slicing feature to reverse the string and dictionary's quick lookup feature to find the reversed string. This solution thus efficiently solves the problem.

# Code
``` Python []
class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        word_dict = {} 
        pairs = 0 
        for word in words: 
            reversed_word = word[::-1] 
            if reversed_word in word_dict: 
                word_dict.pop(reversed_word) 
                pairs += 1 
            else: 
                word_dict[word] = 1 
        return pairs 
```
``` C++ []
class Solution {
public:
    int maximumNumberOfStringPairs(vector<string>& words) {
        std::unordered_map<std::string, int> word_dict;
        int pairs = 0;
        for (auto& word : words) {
            std::string reversed_word = word;
            std::reverse(reversed_word.begin(), reversed_word.end());
            if (word_dict[reversed_word]) {
                word_dict[reversed_word]--;
                pairs++;
            }
            else {
                word_dict[word]++;
            }
        }
        return pairs;
    }
};
```
``` Java []
class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        HashMap<String, Integer> word_dict = new HashMap<>();
        int pairs = 0;
        for (String word : words) {
            String reversed_word = new StringBuilder(word).reverse().toString();
            if (word_dict.containsKey(reversed_word) && word_dict.get(reversed_word) > 0) {
                word_dict.put(reversed_word, word_dict.get(reversed_word) - 1);
                pairs++;
            }
            else {
                word_dict.put(word, word_dict.getOrDefault(word, 0) + 1);
            }
        }
        return pairs;        
    }
}
```
``` JavaScript []
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let word_dict = {};
    let pairs = 0;
    for (let word of words) {
        let reversed_word = word.split('').reverse().join('');
        if (word_dict[reversed_word]) {
            word_dict[reversed_word]--;
            pairs++;
        }
        else {
            word_dict[word] = (word_dict[word] || 0) + 1;
        }
    }
    return pairs;    
};
```
``` C# []
public class Solution {
    public int MaximumNumberOfStringPairs(string[] words) {
        Dictionary<string, int> word_dict = new Dictionary<string, int>();
        int pairs = 0;
        foreach (string word in words) {
            char[] arr = word.ToCharArray();
            Array.Reverse(arr);
            string reversed_word = new string(arr);
            if (word_dict.ContainsKey(reversed_word) && word_dict[reversed_word] > 0) {
                word_dict[reversed_word]--;
                pairs++;
            }
            else {
                if (!word_dict.ContainsKey(word)) word_dict[word] = 0;
                word_dict[word]++;
            }
        }
        return pairs;        
    }
}
```