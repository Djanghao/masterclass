# Simple to understand Typescript solution

**Author:** Seb6656
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5475789/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5475789/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minOperations(boxes: string): number[] {
    const answer = [];
    for(let i=0; i<boxes.length; i++){
        let moves = 0;
        for(let j=0; j<boxes.length; j++){
            if(boxes[j] === "1"){
                moves += Math.abs(i - j)
            }
        }
        answer.push(moves);
    }
    return answer;
};
```