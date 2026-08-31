# Dynamic Image Averaging Filter

**Author:** hosam_ali
**Votes:** 0
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4426613/](https://leetcode.com/problems/image-smoother/solutions/4426613/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to implement a dynamic image averaging filter that can handle images of arbitrary dimensions. The problem involves iterating over each pixel in the input image, computing the average value based on neighboring pixels, and constructing a new image accordingly. The approach aims to make the code more flexible by avoiding hardcoded conditions for different image sizes.

# Approach
<!-- Describe your approach to solving the problem. -->
Define a function applyFilter that takes a 2D list representing the input image.
Calculate the sum of pixel values from the current pixel and its neighbors.
Determine the count of pixels involved in the average calculation.
Update the pixel value in the new image based on the calculated average.
Iterate over all pixels in the input image to construct the new image.

# Complexity
Time complexity: 

O(m\xD7n), where 

m is the number of rows and 

n is the number of columns in the input image.
Space complexity: 

O(m\xD7n) for storing the new image.
# Code
```
class Solution {
  List<List<int>> imageSmoother(List<List<int>> img) {
       int m = img.length;
  int n = img.isNotEmpty ? img[0].length : 0;

  if (m == 0 || n == 0) {
    // Handle empty or invalid input
    return [[0]];
  }

  List<List<int>> newimg = [];

  for (int i = 0; i < m; i++) {
    newimg.add([]);
    for (int j = 0; j < n; j++) {
      int sum = img[i][j];
      int count = 1;

      if (i > 0) {
        sum += img[i - 1][j];
        count++;

        if (j > 0) {
          sum += img[i - 1][j - 1];
          count++;
        }

        if (j < n - 1) {
          sum += img[i - 1][j + 1];
          count++;
        }
      }

      if (i < m - 1) {
        sum += img[i + 1][j];
        count++;

        if (j > 0) {
          sum += img[i + 1][j - 1];
          count++;
        }

        if (j < n - 1) {
          sum += img[i + 1][j + 1];
          count++;
        }
      }

      if (j > 0) {
        sum += img[i][j - 1];
        count++;
      }

      if (j < n - 1) {
        sum += img[i][j + 1];
        count++;
      }

      newimg[i].add((sum / count).floor());
    }
  }

  print(newimg);
  return newimg;
  }
}
```