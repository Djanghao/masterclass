# All you need is some greediness | back simulation

**Author:** Hassu083
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846103/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846103/)

---


# Intuition and Approach
The key observation is that the length of the word doubles with each operation. This allows us to reverse the process by determining which operation led to the kth character without constructing the full string.

- Word length grows exponentially: Each operation doubles the string length, so we calculate the minimum number of operations needed to reach at least k characters.

- Reversing operations: We simulate the process in reverse, halving the length at each step. When we cross the midpoint of the current length, it indicates that the desired character came from the second half of the word in the previous operation.

- Track character shifts: Each time the $$operations[i] == 1$$ is encountered, the entire word is shifted in the alphabet. We keep track of these shifts using a changes variable to calculate the final character.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def kthCharacter(self, k: int, opt: List[int]) -> str:
        
        if k == 1:
            return "a"
        
        l = 1
        n = len(opt)
        for i in range(n):
            
            l *= 2
            
            if l >= k:
                break
        
        changes = 0
        for j in range(i, -1, -1):
            if k > l//2:
                changes += opt[j]
                k -= l//2
            l = l//2
        return chr(ord("a") + changes%26)
            
                
                
                
        
```