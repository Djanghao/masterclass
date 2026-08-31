# Simple Solution (Beats 100%s of the c ++ submission) || Runtime:- 0ms || MEMORY: 6.5MB

**Author:** aditya_kumar_129
**Votes:** 8
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/2849576/](https://leetcode.com/problems/print-words-vertically/solutions/2849576/)

---

# Intuition
If carefully observe then one can see that first we have to store all the words present in the string in a kind of **vitual matrix (you can say).**
Yeah I know it seems typical to imagine in your head.
Lets take an Example:- 
```
"CONTEST IS COMING"
C O N T E S T
I S
C O M I N G
```
Now if you carefully observe then you can see that we have see the matrix from the top and answer store the words in a data structure in our case lets assume a vector. (Its more sort of [vertical order traversal of tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/))

# Approach

Now Lets think how to get the answer.
We need two things to solve this.
1) Store the words present in the given string.
2) The maximum length of the words that is present in the string(Because while trversing the in the vertical order if there is no character present in the words for that particular index then we can add the ' '.)
3) While traversing we also have to remove the trailing spaces that is present in the current iteration of the word.

# Code
```
class Solution {
public:
  vector<string> printVertically(string s) {
    // Step1
    vector<string> words;
    s += ' ';
    string temp;
    for (auto it : s) {
      if (it == ' ') {
        words.push_back(temp);
        temp.clear();
      }
      else temp += it;
    }

    // Step2
    int maxWordLength;
    for (auto it : words) {
      int currentWordLength = it.size();
      maxWordLength = max(maxWordLength, currentWordLength);
    }
    
    //Step3
    vector<string> ans;
    for (int j = 0; j < maxWordLength; j++) {
      string temp;
      for (int i = 0; i < words.size(); i++) {
        if (j < words[i].size())  temp += words[i][j];
        else temp += ' ';
      }
      while (temp.back() == ' ') temp.pop_back();
      ans.push_back(temp);
      temp.clear();
    }
    return ans;
  }
};
```

If You like the approach and simplicity of the code then please upvote it and give it a star.
Ovbiously for any queries feel free to comment.
