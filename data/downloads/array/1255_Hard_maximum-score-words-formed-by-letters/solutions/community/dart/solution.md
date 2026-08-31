# BEATS 100% The BEST DFS Dart Solution With Explanation

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5202181/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5202181/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is a classic example of combinatorial search problem where we need to find the best combination of words that can be formed from the given letters to maximize the score. The first thought that comes to mind is to use a depth-first search (DFS) approach to explore all possible combinations of words.
# Approach
<!-- Describe your approach to solving the problem. -->
1. We start by creating a frequency map of the given letters. This map will help us keep track of the available letters that can be used to form words.

2. We then use a recursive function (DFS) to explore all possible combinations of words. For each word, we have two choices: include it in our set of words or exclude it.

3. If we decide to include a word, we first check if it can be formed with the available letters in our map. If it can, we subtract the letters used from our map, add the score of the word to our current score, and recursively call our function for the next word.

4. If we decide to exclude a word, we simply recursively call our function for the next word without modifying our map or current score.

5. If we have considered all words, we return our current score as it represents the score of a valid set of words.

6. Our goal is to maximize our score, so at each step, we take the maximum score between including and excluding the current word.

7. We start our DFS from the first word with a current score of 0.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(2^n))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
  int maxScoreWords(List<String> words, List<String> letters, List<int> score) {
    // Initialize the maximum score to 0
    int maxScore = 0;
    // Get the Unicode value of 'a'
    final aCode = 'a'.codeUnitAt(0);
    // Initialize a map to count the frequency of each letter in the given letters
    Map<String,int> map = {};
    letters.forEach((l){
        map[l]=(map[l]??0)+1;
    });
    // Define a recursive function (DFS) to calculate the maximum score
    int dfs(int ind, int currentScore){
        // If we have considered all words, return the current score
        if(ind==words.length) return currentScore;
        // Get the current word
        final word = words[ind];
        // Initialize the local score to 0
        int localScore = 0;
        // Initialize a flag to check if the current word can be formed by the given letters
        bool exist = true;
        int i=0;
        // Try to form the current word by the given letters
        for(i;i<word.length && exist;i++){
            final l = word[i];
            // If the current letter is not in the map, the current word cannot be formed
            if(!map.containsKey(l)){
                exist=false;
                break;
            }
            // If the current letter is in the map and its count is 1, remove it from the map
            if(map[l]! == 1) map.remove(l);
            // Otherwise, decrease its count by 1
            else map[l] = map[l]! - 1;
            // Add the score of the current letter to the local score
            localScore += score[l.codeUnitAt(0)-aCode];
        }
        int include = 0;
        // If the current word can be formed, try to include it in the set of words and move to the next word
        if(exist){
            include = dfs(ind+1,currentScore+localScore);
        }
        // If we backtrack from the current set of words, add the letters of the current word back to the map
        for(--i;i>=0;i--){
            map[word[i]]=(map[word[i]]??0)+1;
        }
        // Try to not include the current word in the set of words and move to the next word
        int exclude = dfs(ind+1,currentScore);
        // Return the maximum score between including and not including the current word
        return max(include,exclude);
    }
    // Start calculating the maximum score from the first word
    return dfs(0,0);
  }
}
```