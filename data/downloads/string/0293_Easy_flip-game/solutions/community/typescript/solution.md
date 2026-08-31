# Beats 100%, Linear solution

**Author:** MishaKonki
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/5162109/](https://leetcode.com/problems/flip-game/solutions/5162109/)

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
    function generatePossibleNextMoves(currentState: string): string[] {

        let result: string[] = []
        for (let i = 1; i < currentState.length; i+=1) {
            if (currentState[i] === '+' && currentState[i-1] === '+') {
                let newString = currentState.split('');
                newString[i] = '-'
                newString[i-1] = '-'
                result.push(newString.join(''))
            } 
        }
       return result
    };
```