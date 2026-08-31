# C# Simple O(rol*col) solution

**Author:** dmytro4322
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/5831879/](https://leetcode.com/problems/kth-smallest-instructions/solutions/5831879/)

---

# Approach
Build Matrix
10 6 3 1
 4 3 2 1
 1 1 1 0
if left number is greater or equal than K then navigate to left 
else navigate to bottom and reduce K by left number

# Complexity
- Time complexity: O(row*col)

- Space complexity: O(row*col)

# Code
```csharp []
public class Solution {
    public string KthSmallestPath(int[] destination, int k) {
        int n = Math.Max(destination[0], destination[1]);
        int[,] matrix = new int[n+1,n+1];

        for(int i = 0; i<=n; i++) {
            matrix[n, i]=matrix[i, n]=1;
        }

        for(int i = n - 1; i>= 0; i--) {
            for(int j = i; j>=0; j--) {
                matrix[i,j] = matrix[j,i] = matrix[i+1, j] + matrix[i,j+1];
            }
        }

        int posY = 0, posX = 0;
        StringBuilder resultBuilder = new StringBuilder();

        if (destination[1]>destination[0]) {
            posY = destination[1] - destination[0];
        }
        else {
            posX = destination[0] - destination[1];
        }

        while (posY < n && posX < n) {
            if (matrix[posY, posX+1] >= k) {
                resultBuilder.Append('H');
                posX++;
            }
            else {
                resultBuilder.Append('V');
                k -= matrix[posY, posX+1];
                posY++;
            }
        }

        resultBuilder.Append(posY < posX ? 'V' : 'H', Math.Abs(posY - posX));
        return resultBuilder.ToString();
    }
}
```