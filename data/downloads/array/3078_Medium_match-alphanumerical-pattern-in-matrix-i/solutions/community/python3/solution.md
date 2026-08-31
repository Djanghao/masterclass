# Simple brute force with hashmap to store letter <-> number mapping

**Author:** Jarikf
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5698775/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5698775/)

---



# Code
```python3 []
class Solution:
    def findPattern(self, board: List[List[int]], pattern: List[str]) -> List[int]:
        # just move a pattern over the matrix and check each for matching
        # it seems that N pattern comparisons for each col and M for each row
        # comparison is O(mn) where mn is pattern dimensions and for each row and col of board that becomes O(mnMN)
        
        pattern_ymax = len(pattern)
        pattern_xmax = len(pattern[0])

        def matches(y, x):
            if y + pattern_ymax > ymax or x + pattern_xmax > xmax:
                return False
            
            mapping = dict()
            for ycurr in range(pattern_ymax):
                for xcurr in range(pattern_xmax):
                    p_val = pattern[ycurr][xcurr]
                    board_val = board[y+ycurr][x+xcurr]
                    # number
                    if p_val.isdigit():
                        if p_val != str(board_val):
                            return False
                        continue
                    # letter
                    if p_val in mapping:
                        if mapping[p_val] != board_val:
                            return False
                        continue
                    if board_val in mapping:
                        if mapping[board_val] != p_val:
                            return False
                        continue
                    mapping[p_val] = board_val
                    mapping[board_val] = p_val

            return True
        
        ymax = len(board)
        xmax = len(board[0])
        for y in range(ymax):
            for x in range(xmax):
                if matches(y, x):
                    return [y, x]
        return [-1, -1]
        
```