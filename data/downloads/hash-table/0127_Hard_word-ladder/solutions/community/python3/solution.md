# [Python3] Breadth first search

**Author:** zhanweiting
**Votes:** 156
**Link:** [https://leetcode.com/problems/word-ladder/solutions/346920/](https://leetcode.com/problems/word-ladder/solutions/346920/)

---

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
```
1. Only one letter can be changed at a time.
In the example, from begin word, you can change one letter in 3 ways. 3 is the length of the word.
```
				 hit
		   /      |      \\
		   *it   h*t   hi*
		 /|\\     /|\\     /|\\ 
# In order to continue the  Breath First Search(BFS) process,
# we need to know the children of *it, h*t, and hi*.
# so we need the information from word list.
```
2. Each transformed word must exist in the word list.
	In the example, we need to record all the possible changes that could be made from the word list so that we can have the information to do BFS in the graph above. We use a map to store the data. The key is one-letter-change-word, for example," *it," the value is the word meet the key's condition in the word list.
```
wordList = ["hot","dot","dog","lot","log","cog"]
change_map ={ *ot : hot, dot, lot
			h*t : hot
			ho* :hot
			d*t : dot
			do* : dot, dog
			*og : dog, log, cog
			d*g : dog
			l*t : lot
			lo* : lot, log
			l*g : log
			c*g: cog
			co* : cog 
			}
```

With the information in change_map, we got the information to expand the breadth first search tree.
```
											 hit, level = 1
								 /            |              \\
					     *it                h*t                  hi*
						   |                 |                     |     
			             null  	       hot ,level = 2      null
										 /   |   \\    
										/    |     \\
				               *ot           h*t      ho*
				           /    |   \\         |        |
                     hot,2   dot,3  lot,3   hot,2    hot,2					


# as we can see,  "hot" has been visited in level 2, but "hot" will still appear at the next level. 
# To avoid duplicate calculation, 
# we keep a visited map,  
# if the word in the visited map, we skip the word, i.e. don't append the word into the queue.
# if the word not in the visited map, we put the word into the map, and append the word into the queue.
```
```
from collections import defaultdict
from collections import deque
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
        if endWord not in wordList or not endWord or not beginWord or not wordList:
            return 0
        L = len(beginWord)
        all_combo_dict = defaultdict(list)
        for word in wordList:
            for i in range(L):
                all_combo_dict[word[:i] + "*" + word[i+1:]].append(word) 
        queue = deque([(beginWord, 1)])
        visited = set()
        visited.add(beginWord)
        while queue:
            current_word, level = queue.popleft()
            for i in range(L):
                intermediate_word = current_word[:i] + "*" + current_word[i+1:]
                for word in all_combo_dict[intermediate_word]:
                    if word == endWord:
                        return level + 1
                    if word not in visited:
                        visited.add(word)
                        queue.append((word, level + 1))
        return 0
```