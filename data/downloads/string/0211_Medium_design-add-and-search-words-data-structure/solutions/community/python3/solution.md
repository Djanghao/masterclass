# ✅✅Python Simple Solution 🔥🔥 Easy to Understand🔥🔥

**Author:** cohesk
**Votes:** 113
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313633/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313633/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am Giving away my premium content videos related to computer science and data science and also will be sharing well-structured assignments and study materials to clear interviews at top companies to my first 1000 Subscribers. So, **DON'T FORGET** to Subscribe

https://www.youtube.com/@techwired8/?sub_confirmation=1
```
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False
        
class WordDictionary:
    def __init__(self):
        self.root = TrieNode()      

    def addWord(self, word):
        current_node = self.root
        for character in word:
            current_node = current_node.children.setdefault(character, TrieNode())
        current_node.is_word = True
        
    def search(self, word):
        def dfs(node, index):
            if index == len(word):
                return node.is_word
               
            if word[index] == ".":
                for child in node.children.values():
                    if dfs(child, index+1):
                        return True
                    
            if word[index] in node.children:
                return dfs(node.children[word[index]], index+1)
            
            return False
    
        return dfs(self.root, 0)

```
![image.png](./images/0.png)

# Please UPVOTE \uD83D\uDC4D