# Python3 | DFS with backtracking | Clean code with comments

**Author:** snorkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/2331905/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/2331905/)

---

```
class Solution:
    BOARD_SIZE = 8
    
    def diag(self, r, c):
        # Return all diagonal indices except (r, c)
        # Diagonal indices has the same r - c
        inv = r - c
        result = []
        for ri in range(self.BOARD_SIZE):
            ci = ri - inv
            if 0 <= ci < self.BOARD_SIZE and ri != r:
                result.append((ri, ci))

        return result
    
    def reverseDiag(self, r, c):
        # Return all reverse diagonal indices except (r, c)
        # Reverse diagonal indices has the same r + c
        inv = r + c
        result = []
        for ri in range(self.BOARD_SIZE):
            ci = inv - ri
            if 0 <= ci < self.BOARD_SIZE and ri != r:
                result.append((ri, ci))

        return result
    
    def generatePossiblePositions(self, piece, start):
        # Generate list of possible positions for every figure
        rs, cs = start[0] - 1, start[1] - 1

        # Start position
        result = [(rs, cs)]

        # Straight
        if piece == "rook" or piece == "queen":
            result.extend([(r, cs) for r in range(self.BOARD_SIZE) if r != rs])
            result.extend([(rs, c) for c in range(self.BOARD_SIZE) if c != cs])

        # Diagonal
        if piece == "bishop" or piece == "queen":
            result.extend(self.diag(rs, cs))
            result.extend(self.reverseDiag(rs, cs))

        return result
    
    def collide(self, start1, end1, start2, end2):
        # Check if two figures will collide
        # Collision occures if: 
        #  - two figures have the same end points
        #  - one figure stands on the way of second one
        #
        # For this purpose let's model each step of two pieces 
        # and compare their positions at every time step.
        
        def steps(start, end):
            # Total steps that should be done
            return abs(end - start)

        def step(start, end):
            # Step direction -1, 0, 1
            if steps(start, end) == 0:
                return 0
            return (end - start) / steps(start, end)

        (rstart1, cstart1), (rend1, cend1) = start1, end1
        (rstart2, cstart2), (rend2, cend2) = start2, end2

        # Find step direction for each piece
        rstep1, cstep1 = step(rstart1, rend1), step(cstart1, cend1)
        rstep2, cstep2 = step(rstart2, rend2), step(cstart2, cend2)

        # Find maximum number of steps for each piece
        max_step1 = max(steps(rstart1, rend1), steps(cstart1, cend1))
        max_step2 = max(steps(rstart2, rend2), steps(cstart2, cend2))

        # Move pieces step by step and compare their positions
        for step_i in range(max(max_step1, max_step2) + 1):
            step_i1 = min(step_i, max_step1)
            r1 = rstart1 + step_i1 * rstep1
            c1 = cstart1 + step_i1 * cstep1

            step_i2 = min(step_i, max_step2)
            r2 = rstart2 + step_i2 * rstep2
            c2 = cstart2 + step_i2 * cstep2

            # If positions are the same then collision occures
            if r1 == r2 and c1 == c2:
                return True

        return False
    
    def countCombinations(self, pieces: List[str], positions: List[List[int]]) -> int:
        if len(pieces) == 0:
            return 0

        n = len(pieces)
        
        # Make zero-indexed
        start_positions = [[r - 1, c - 1] for r, c in positions]
        
        # All possible positions
        possible_positions = [
            self.generatePossiblePositions(piece, start) 
            for piece, start in zip(pieces, positions)
        ]
        
        # Let's use DFS with backtracking
        # For that we will keep set of already occupied coordinates
        # and current positions of pieces
        occupied = set()
        current_positions = [None] * n  # None means that we didn't placed the piece
        
        def collision(start, end):
            # Helper to check if moving from start to end position will collide with someone
            for start2, end2 in zip(start_positions, current_positions):
                if end2 is not None and self.collide(start, end, start2, end2):
                    return True
            return False

        def dfs(piece_i=0):
            # All pieces are placed
            if piece_i == n:
                return 1

            result = 0
            for position in possible_positions[piece_i]:
                # If position already occupied of collides with other pieces then skip it
                if position in occupied or collision(start_positions[piece_i], position):
                    continue
                
                # Occupy the position
                occupied.add(position)
                current_positions[piece_i] = position
                
                # Run DFS for next piece
                result += dfs(piece_i + 1)
                
                # Release the position
                occupied.remove(position)
                current_positions[piece_i] = None
                
            return result

        return dfs()
```