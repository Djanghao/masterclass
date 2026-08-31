# 🔥🚀Beginner 🧠friendly🥰   | |    ✅Green Beats🙌🧠  | |  JAVA

**Author:** Pintu008
**Votes:** 26
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/4364415/](https://leetcode.com/problems/flipping-an-image/solutions/4364415/)

---

# Intuition
- The horizontal flip is performed by reversing the order of elements in each row.
- Inversion is achieved by changing 0s to 1s and 1s to 0s.
- The combination of these two operations creates the desired result.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
### 1. Horizontal Flip:

For each row in the image, reverse the order of its elements. This effectively flips the image horizontally.
### 2. Invert:

Iterate through the flipped image and replace each 0 with 1 and each 1 with 0. This step achieves the inversion.
### 3. Return Result:

Return the resulting image after both horizontal flipping and inversion.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: **O(N*M)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **ON*M)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        int [][] rev = new int[image[0].length][image.length];
        for(int i=0; i<image.length; i++){
            int k=0;
            for(int j=image[i].length-1; j>=0; j--){
                rev[i][k++] = image[i][j];
            }
        }
        for(int i=0; i<rev.length; i++){
            for(int j=0; j<rev[i].length; j++){
                if(rev[i][j]==1) rev[i][j]=0;
                else if(rev[i][j]==0) rev[i][j]=1;
            }
        }
        return rev;
    }
}
```
![WhatsApp Image 2023-12-03 at 12.33.52.jpeg](./images/0.jpeg)
