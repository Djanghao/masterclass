# Using regular expressions :}

**Author:** afranklin31520
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/5560684/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/5560684/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
DO NOT USE A TRIE
DO NOT BUILD YOUR OWN DFS
USE PYTHON RE
# Approach
<!-- Describe your approach to solving the problem. -->
1. separate each word by a space since it is gauranteed that s only contains lowercase english letters
2. now replace all dots with [a-z] and use the `match()` function to search for that specific pattern




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ for search word
$$O(1)$$ for add word
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
class WordDictionary:
    def __init__(self):
        self.s = ''
    def addWord(self, word: str) -> None:
        self.s+=" "+word+" "
    def search(self, word: str) -> bool:
        word = word.replace(".",'[a-z]')
        return True if re.search(" "+word+" ",self.s) else False


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```
PLEASE UPVOTE!!!!
![image.png](./images/0.png)

