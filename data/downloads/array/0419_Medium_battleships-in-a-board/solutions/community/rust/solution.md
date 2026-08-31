# detect and then delete

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/4817492/](https://leetcode.com/problems/battleships-in-a-board/solutions/4817492/)

---



# Code
```
impl Solution {
    pub fn count_battleships(mut a:  Vec<Vec<char>>) -> i32 {
        let mut total = 0;
        
        for i in 0..a.len() {
            for j in 0..a[0].len() {
                if a[i][j]=='.' {continue}
                total +=1;
                for ii in i+1..a.len() {
                    if a[ii][j]=='X' {
                        a[ii][j] ='.'
                    } else {break}
                }
                for jj in j+1..a[0].len() {
                    if a[i][jj] == 'X' {
                        a[i][jj] = '.'
                    } else {break}
                }
            }
        }
        total
    }
}
```