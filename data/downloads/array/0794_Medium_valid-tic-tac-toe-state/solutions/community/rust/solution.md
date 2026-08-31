# impossible if more than 5 stones are in lines of 3

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5070736/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5070736/)

---



# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn valid_tic_tac_toe(board: Vec<String>) -> bool {
        let l = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let f = |k : usize| {let i = k % 3;   let j = k /3 ;  board[i].chars().nth(j).unwrap() };
        
        let v = |c:char| l.into_iter().filter(|&ijk| {
            let i = ijk[0];
            let j = ijk[1];
            let k = ijk[2];
            f(i)==c && f(i)==f(j) && f(i)==f(k)}).flatten().collect::<HashSet<_>>().len();

        let a = (0..9).filter(|&i|f(i) == 'X').count();
        let b = (0..9).filter(|&i|f(i) == 'O').count();
        
        (a == b  || a == b+1) && v('X') <=5 && v('O') <= 5 && v('X').min(v('O')) == 0
        && (v('X') ==0 || a > b) && (v('O') ==0 || a == b)

    }
}
```