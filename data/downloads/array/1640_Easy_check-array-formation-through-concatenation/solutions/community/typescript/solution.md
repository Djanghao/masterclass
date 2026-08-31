# Solution using DFS with TypeScript

**Author:** user2291m
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/5820876/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/5820876/)

---


# Code
```typescript []
type State = {
    offset: number, 
    pieces_left: number[][],
}


function canFormArray(arr: number[], pieces: number[][]): boolean {
    
    const stack: State[] = [{
        offset: 0,
        pieces_left: pieces,
    }];
    
    while (stack.length > 0) {
        
        const state: State = stack.pop();
        if (state.offset === arr.length) {
            return true;
        }

        // possible pieces that can be placed next
        const possible_pieces = state.pieces_left.filter(piece => {
            if (piece.length + state.offset > arr.length) {
                // piece overlaps
                return false;
            }

            for (let i = 0; i < piece.length; i++) {
                if (piece[i] !== arr[state.offset + i]) {
                    // piece does not fit 
                    return false;
                }
            }

            return true;
        });

        possible_pieces.forEach(possible_piece => {
            // for every possible piece, create new state and push to stack
            stack.push({
                offset: state.offset + possible_piece.length,                       // piece placed, move offset
                pieces_left: state.pieces_left.filter(p => p !== possible_piece),   // remove used piece from pieces_left
            });
        })
    }

    return false;
};
```