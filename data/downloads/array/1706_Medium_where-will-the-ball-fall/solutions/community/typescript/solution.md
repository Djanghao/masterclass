# Beats 100% in performance, easy solution, not killing the call stack, 57ms.

**Author:** ErezShahaf
**Votes:** 0
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/4726210/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/4726210/)

---

# Intuition
My intuition was to try to make the previous record holder cry by writing a faster code.

# Approach
I pressed keys on the keyboard untill the code was done.

# Complexity
- Time complexity:
On

- Space complexity:
O1

# Code
```
function findBall(grid: number[][]): number[] {
    const columns : number = grid[0].length;
    const rows : number = grid.length;
    const answer : number[] = [];
    for(let i = 0; i < columns; i++)
    {
        let currentRow : number = 0;
        let currentColumn : number = i;
        while(currentRow < rows)
        {
            const boxValue : number = grid[currentRow][currentColumn];
            
            if((currentColumn == 0 && boxValue == -1) || (currentColumn == columns - 1 && boxValue == 1))
            {
                answer.push(-1);
                currentRow = rows;
            }
            else if(boxValue != grid[currentRow][currentColumn + boxValue])
            {
                answer.push(-1);
                currentRow = rows;
            }
            else
            {
                currentRow++;
                currentColumn += boxValue;
                if(currentRow == rows)answer.push(currentColumn);
            }
        }
    }
    return answer;
};
```