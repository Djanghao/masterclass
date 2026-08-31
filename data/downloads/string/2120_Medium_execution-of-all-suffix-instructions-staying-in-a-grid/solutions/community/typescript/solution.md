# Beats 93% of speed and 100% of memory

**Author:** Rahexx
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5165207/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5165207/)

---

# Intuition
I just thought that we need x and y for position, counter, and in second loopp we need check char and increase/decrease positions, and check conditions.

# Approach
1. Create in first loop ```x``` and ```y``` for position and ```counter``` for counting how much instructions was done.
2. In second loop we set ```j``` equal ```i``` and we increment/decrement ```x```/```y``` depends on char.
3. We check with if statement if robot goes off the chart. If it is true we push ```counter``` to ```results``` array.
4. Second check is if it is the last char. When it's true you again push ```counter``` to ```results``` array, but to ```counter``` we add one because ```counter``` increment is the last instruction.

# Complexity
- Time complexity:
$$O(n ^ 2)$$

- Space complexity:
$$O(n)$$

# Code
```
function executeInstructions(n: number, startPos: number[], s: string): number[] {
    const results = []

    for(let i = 0; i < s.length; i++){
        let x = startPos[1];
        let y = startPos[0];
        let counter = 0;

        for(let j = i; j < s.length; j++){
            if(s[j] === "L") x--;
            else if(s[j] === "R") x++;
            else if(s[j] === "U") y--;
            else if(s[j] === "D") y++;

            if(x < 0 || x >= n || y < 0 || y >= n){
                results.push(counter)
                break;
            }

            if(j === (s.length - 1)){
                results.push(counter + 1)
                break;
            }

            counter++;
        }
    }

    return results;
};
```