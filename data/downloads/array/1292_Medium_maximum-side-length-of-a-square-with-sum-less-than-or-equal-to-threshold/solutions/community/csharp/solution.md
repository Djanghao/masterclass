# C# Solution

**Author:** anshulgarg904
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/2884049/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/2884049/)

---

# Code
```
public class Solution {
    public int MaxSideLength(int[][] mat, int threshold) {
        int maxSideLength = 0;
        int rows = mat.Length;
        int columns = mat[0].Length;

        for(int i=0; i<rows; i++){
            for(int j=0; j<columns; j++){
                int sum = 0;
                int sideLength = 0;

                while(i+sideLength < rows && j+sideLength < columns && sum <= threshold){
                    
                    for(int k=0; k<=sideLength; k++){
                        sum += mat[i+sideLength][j+k];
                        sum += mat[i+k][j+sideLength];
                    }

                    sum -= mat[i+sideLength][j+sideLength];
                    sideLength++;
                }

                if(sum <= threshold)
                    maxSideLength = Math.Max(maxSideLength, sideLength);
                else
                    maxSideLength = Math.Max(maxSideLength, sideLength-1);
            }
        }

        return maxSideLength;
    }
}
```