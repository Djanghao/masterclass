# Rust both 100%

**Author:** rexthk
**Votes:** 1
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/525198/](https://leetcode.com/problems/alphabet-board-path/solutions/525198/)

---

```
impl Solution {
    pub fn alphabet_board_path(target: String) -> String {
        // ascii a to z:
        //  97  98  99 100 101
        // 102 103 104 105 106
        // 107 108 109 110 111
        // 112 113 114 115 116
        // 117 118 119 120 121
        // 122
        
        let mut start: u8 = 97; // starting point
        let mut result: String = String::from("");
        
        for c in target.chars() {
            let dest : u8 = c as u8;
            
            while start != dest {
                let currentRow: u8 = (start - 97) / 5;
                let targetRow: u8 = (dest - 97) / 5;

                if currentRow > targetRow {
                    result.push('U');
                    start -= 5;
                } else if currentRow < targetRow {
                    if start + 5 > 122 {
                        result.push('L');
                        start -= 1;
                    } else {
                        result.push('D');
                        start += 5;    
                    }
                } else {
                    if start > dest {
                        result.push('L');
                        start -= 1;
                    } else {
                        result.push('R');
                        start += 1;
                    }
                }
            }
            
            result.push('!');
        }
        
        result
    }
}
```