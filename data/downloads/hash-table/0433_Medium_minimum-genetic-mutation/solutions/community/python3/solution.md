# 433: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/3271728/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/3271728/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. The first line of the method converts the list of strings bank into a set for faster lookup.

2. The second line checks if the end string is not present in the bank set. If it's not present, then there's no way to reach the end gene through valid mutations, so the method returns -1.

3. The third line defines a dictionary called mutations that maps each character in a gene to the set of possible mutations that can be made to that character. For example, if the character is 'A', then it can be mutated to either 'C', 'G', or 'T'.

4. The fourth line checks if the first character of the start gene is a valid character according to the mutations dictionary. If it's not valid, then there's no way to reach any valid mutation path from the start gene, so the method returns -1.

5. The fifth line initializes a queue called queue with the start gene and a mutations count of 0.

6. The sixth line initializes a set called visited with the start gene, since we have already visited the start gene.

7. The next few lines perform a breadth-first search (BFS) to find the minimum number of mutations required to reach the end gene from the start gene.

8. Inside the while loop, we pop the gene and the mutations count from the left end of the queue.

9. We then iterate over all the characters in the gene and all the possible mutations that can be made to that character.

10. For each mutation, we create a new gene by replacing the character at the current index with the mutated character.

11. We then check if the new gene is in the bank set and if it has not been visited before.

12. If the new gene is in the bank set and has not been visited before, we add it to the visited set, add it to the queue with a mutations count of 1 more than the previous gene, and check if it's the end gene. If it's the end gene, we return the mutations count plus 1, since we need to include the mutation that was just made.

13. If we reach the end of the while loop without finding the end gene, then there is no valid mutation path from start to end, so the method returns -1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
from collections import deque

class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        
        # Create a set of all valid genes in the bank for faster access
        bankSet = set(bank)
        
        # Define the possible mutations for each character
        options = ['A', 'C', 'G', 'T']
        
        # Create a queue to store the genes to be checked
        queue = deque()
        queue.append(startGene)
        
        # Create a set to mark visited genes
        visited = set()
        visited.add(startGene)
        
        # Counter to keep track of the minimum mutations required to reach end gene
        count = 0
        
        # Perform BFS
        while queue:
            size = len(queue)
            for i in range(size):
                gene = queue.popleft()
                if gene == endGene:
                    return count
                for j in range(8):
                    for option in options:
                        newGene = gene[:j] + option + gene[j+1:]
                        if newGene in bankSet and newGene not in visited:
                            visited.add(newGene)
                            queue.append(newGene)
            count += 1
        
        # If end gene not found
        return -1

```