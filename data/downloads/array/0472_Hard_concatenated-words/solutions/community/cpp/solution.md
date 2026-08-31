# C++ || Simple DP (With Full Explanation) || Beats 99% 🏁🔥

**Author:** ufoblivr
**Votes:** 528
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3103555/](https://leetcode.com/problems/concatenated-words/solutions/3103555/)

---

# Intuition
The intuition behind this solution is to use dynamic programming to check if a word can be constructed by the concatenation of other words in the set.

# Approach
First, the input list of words is converted into an unordered_set, which is an efficient data structure for checking if a word is in the set in constant time. Then, an empty vector res is created to store the concatenated words that are found.

The code then iterates over the input list of words. For each word, it creates a vector dp of size n+1 where n is the length of the word. This vector is used to store whether it is possible to construct the word until a certain index by concatenating other words in the set. The vector is initially set to 0 for all indices, except for the first element, which is set to 1.

The code then iterates over the word again, and for each index i, it checks if the dp value at index i is 1, which means it is possible to construct the word until this index by concatenating other words. If so, it checks if there is a word in the set that starts from this index and has a length j - i, where j is the next index. If such a word is found, it updates the dp value at index j to 1.

Finally, after iterating over the word, the code checks if the dp value at the last index is 1, which means that the word can be constructed by the concatenation of other words in the set. If so, it adds the word to the result vector.

After iterating over all the words, the code returns the result vector, which contains all the concatenated words in the input list of words.

\uD83D\uDCCD Here is an example of how the code would work for the word "catdog" and the set of words {"cat","dog"}:
1. First, the input list of words is converted into an unordered_set, which is an efficient data structure for checking if a word is in the set in constant time.
2. Then, an empty vector res is created to store the concatenated words that are found.
3. The code then iterates over the input list of words. For each word "catdog", it creates a vector dp of size n+1 where n is the length of the word. This vector is used to store whether it is possible to construct the word until a certain index by concatenating other words in the set. The vector is initially set to 0 for all indices, except for the first element, which is set to 1.
    ```
    dp = [1, 0, 0, 0, 0, 0, 0]

    ```
4. The code then iterates over the word again, and for each index i, it checks if the dp value at index i is 1, which means it is possible to construct the word until this index by concatenating other words. If so, it checks if there is a word in the set that starts from this index and has a length j - i, where j is the next index. If such a word is found, it updates the dp value at index j to 1.
    ```
    i = 0, j = 3, check if "cat" is in set: Yes, update dp[3] = 1
    i = 3, j = 6, check if "dog" is in set: Yes, update dp[6] = 1
    ```
5. Finally, after iterating over the word, the code checks if the dp value at the last index is 1, which means that the word can be constructed by the concatenation of other words in the set. If so, it adds the word to the result vector.
    ```
    dp = [1, 0, 0, 1, 0, 0, 1]

    ```

As the dp array's last index is 1, which means the word "catdog" can be constructed by the concatenation of other words in the set, so it's added to the result vector.

In this way, this approach is checking if a word is a concatenated word by breaking it down into substrings and checking if each substring is a word in the set, making use of a dp array to store intermediate results. This method is much more efficient than checking all possible concatenations of words.

# Complexity
- **Time complexity:**
The time complexity of this solution is **O(n * L^2)**, where n is the number of words in the input list and L is the maximum length of the words.
The main source of the time complexity is the nested loops that iterate over the words and the characters of the words. The outer loop iterates over the words and has a time complexity of O(n). The inner loop iterates over the characters of the words and has a time complexity of O(L). The inner loop also performs additional operations, such as checking if a word is in the set and updating the dp array, which also contribute to the overall time complexity.

- **Space complexity:**
The space complexity is **O(n * L)**, where n is the number of words in the input list and L is the maximum length of the words. The main source of the space complexity is the dp array, which is created for each word and has a size of L. Additionally, creating a unordered_set of all the words also takes O(n) space.

# Code
```
class Solution {
public:
    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        unordered_set<string> words_set;
        for (string word : words) words_set.insert(word);
        vector<string> res;
    
        for (string word : words) {
            int n = word.size();
            vector<int> dp(n + 1, 0);
            dp[0] = 1;
            for (int i = 0; i < n; i++) {
                if (!dp[i]) continue;
                for (int j = i + 1; j <= n; j++) {
                    if (j - i < n && words_set.count(word.substr(i, j - i))) {
                        dp[j] = 1;
                    }
                }
                if (dp[n]) {
                    res.push_back(word);
                    break;
                }
            }
        }
        return res;
    }
};
```


![2wlbi6.webp](./images/0.webp)
