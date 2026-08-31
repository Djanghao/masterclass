# Python 3 Trie + DFS Solution w/ Explanation

**Author:** async-await
**Votes:** 13
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/1549172/](https://leetcode.com/problems/implement-magic-dictionary/solutions/1549172/)

---

The idea here is to use a Trie and a depth first search, similar to LeetCode 211: https://leetcode.com/problems/design-add-and-search-words-data-structure.

We define a TrieNode to use for this algorithm. I choose to specify that a node is explicitly a terminal node for a word with ```is_end``` but you may opt to simply add a child with "#". Whatever works for you.

The idea behind this algorithm is that we have to try the change at every possible place, even if the character matches because we could end up with the case that we never change anything and end up with the string we originally searched for, which is not allowed given the example test cases (because we MUST change 1 character). We will keep track of this with a variable called ```modifications``` which has an initial value of 1 and represents the modifications we are allowed to make.

We kick off our DFS at the root of the Trie. For each invocation of DFS, the algorithm proceeds as follows:

+ 1). Check that modifications is > 0. If modifications = 1, then we haven't used a modification. If modifications = 0, then we have used our one allowed modification. If modifications is less than 0, then we have used more than one modification and this path is invalid as it violates the problem statement that only allows us one character change.
+ 2). If our search word is empty, that means we have reached the end of the Trie and we need to check whether or not we have a valid answer here. A valid answer here is one where we have used our one allowed change AND the node we are at is the terminal node for a word.
+ 3). Once those checks are done, if we still have work to do, then we iterate over the characters at this level in the Trie. 
	+ If the character is equal to the first character of the string we are searching, then call dfs recursively with that next node, slice the first character off the string, and keep modifications untouched as we have not made a change.
	+ If the character is not equal, then we do the same as in the previous step except this time we call the recursive DFS function with modifications - 1 as we are using our one change allowed to skip the current character.


I'm not 100% sure on the time complexity of this algorithm. Perhaps someone can help in the comments below.

```
class TrieNode:
    def __init__(self, char):
        self.char = char
        self.children = {}
        self.is_end = False
        
class MagicDictionary:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.trie = TrieNode("#")

    def add_word(self, word):
        root = self.trie
        
        for char in word:
            if char not in root.children:
                root.children[char] = TrieNode(char)
            
            root = root.children[char]
        
        root.is_end = True
        
    def buildDict(self, dictionary: List[str]) -> None:
        for word in dictionary:
            self.add_word(word)
            
    def search(self, searchWord: str) -> bool:
        return self.dfs(self.trie, searchWord, 1)
    
    def dfs(self, node, word, modifications):
        if modifications < 0:
            return False
        
        if not word:
            return not modifications and node.is_end
        
        for child in node.children:
            if child == word[0]:
                if self.dfs(node.children[word[0]], word[1:], modifications):
                    return True
            else:
                if self.dfs(node.children[child], word[1:], modifications - 1):
                    return True 
```