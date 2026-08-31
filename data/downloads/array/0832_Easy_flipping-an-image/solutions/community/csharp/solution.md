# c# O(n*m) 100% 84%

**Author:** SirWillyWonka
**Votes:** 0
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/6093189/](https://leetcode.com/problems/flipping-an-image/solutions/6093189/)

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
```csharp []
public class Solution {
    public int[][] FlipAndInvertImage(int[][] image) 
    {
        if(image.Length ==1)
        {
            if(image[0][0] == 0 )
            {
                image[0][0] = 1;
            }
            else
                image[0][0] = 0;

        }
        for(int i = 0; i < image.Length; i++)
        {
            for(int j = 0; j < image.Length/2 ; j++)
            {
                int temp = image[i][j];
                image[i][j] = image[i][image.Length-1-j];
                image[i][image.Length-1-j] = temp;


                if(image[i][j] ==1)
                {
                    image[i][j] = 0;
                }
                else
                {
                    image[i][j] = 1;
                }
                if( image[i][image.Length-1-j] ==1)
                {
                     image[i][image.Length-1-j] = 0;
                }
                else
                {
                    image[i][image.Length-1-j] = 1;
                }
                if(j == image.Length/2 -1 && image.Length%2 !=0 && image[i][image.Length/2] == 1)
                {
                    image[i][j+1] = 0;
                }
                else if(j == image.Length/2 -1 && image.Length%2 !=0 && image[i][image.Length/2] == 0)
                {
                    image[i][j+1] = 1;
                }
            }
            
        }
        return image;
    }
}
```