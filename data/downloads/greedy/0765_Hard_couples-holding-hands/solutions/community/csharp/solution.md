# C# Cyclic permutations and Greedy Algorithms solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/5327593/](https://leetcode.com/problems/couples-holding-hands/solutions/5327593/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of arranging couples such that they sit side by side with the minimum number of swaps, we can use the idea of cyclic permutations and greedy algorithms.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization: We first initialize the number of swaps to zero and create an array to store the position of each
//  person in the row.

//  Filling the Position Array: We loop through the row array to fill the position array, which keeps track of where 
//  each person is sitting.

//  Main Loop: We loop through the row array in steps of 2. For each couple (first, second), we check if they are sitting
//  together. If not, we find the position of the correct partner using the position array and swap them.

//  Swapping: We define a helper method 'Swap'' to swap two elements in the row array and update their positions in the
//  position array.

//  Return: Finally, we return the total number of swaps made.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n)
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n)
___

# Code
```
public class Solution {
    public int MinSwapsCouples(int[] row) {
        int n = row.Length / 2;
        int swaps = 0;
        
        // Create an array to store the position of each person
        int[] position = new int[row.Length];
        
        for (int i = 0; i < row.Length; i++) {
            position[row[i]] = i;
        }
        
        for (int i = 0; i < row.Length; i += 2) {
            int first = row[i];
            int second = first % 2 == 0 ? first + 1 : first - 1;
            
            if (row[i + 1] != second) {
                swaps++;
                int partnerIndex = position[second];
                
                // Swap the positions in the row
                Swap(row, i + 1, partnerIndex);
                
                // Update the positions in the position array
                position[row[partnerIndex]] = partnerIndex;
                position[row[i + 1]] = i + 1;
            }
        }
        
        return swaps;
    }
    
    private void Swap(int[] row, int i, int j) {
        int temp = row[i];
        row[i] = row[j];
        row[j] = temp;
    }
}
```