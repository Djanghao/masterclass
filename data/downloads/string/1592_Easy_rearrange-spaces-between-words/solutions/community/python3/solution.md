# Python3 simple solution based on built-in functions

**Author:** user7867e
**Votes:** 9
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/1224050/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/1224050/)

---

class Solution:
    def reorderSpaces(self, text: str) -> str:
        
        # 
        words_list = text.split()
        num_spaces = text.count(' ')
        num_words = len(words_list)
        # 
        if num_words == 1:
            return(words_list[0] + ' ' * num_spaces)
        else:
            q, r = divmod(num_spaces, num_words - 1)
            return( (' ' * q).join(words_list) + ' ' * r )