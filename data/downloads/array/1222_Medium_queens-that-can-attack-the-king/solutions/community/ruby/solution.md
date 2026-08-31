# 100% faster and 100% memory efficient usage Ruby solution

**Author:** iamgokulps
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/1885935/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/1885935/)

---

```
def queens_attackthe_king(queens, king)
    res, directions = [], [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    
    directions.each do |row, col|
        king_row, king_col = king[0], king[1]
        
        while(king_row >= 0 and king_col >= 0 and king_row < 8 and king_col < 8)
            king_row, king_col = king_row + row, king_col + col
            
            if(queens.include? [king_row, king_col])
                res << [king_row, king_col]
                break
            end
        end
    end
    
    return res
end
```