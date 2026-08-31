# C++ || compare with element to the left and up || clean code

**Author:** heder
**Votes:** 36
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2761319/](https://leetcode.com/problems/toeplitz-matrix/solutions/2761319/)

---

# Approach 1: compare with element to the left and up

This is pretty straight forward, for the rows > 0 and cols > 0 we just check if each element is equal to the element to the left and up.

```cpp
    static bool isToeplitzMatrix(const vector<vector<int>>& matrix) {
        const int rows = matrix.size();
        const int cols = matrix[0].size();
        for (int r = 1; r < rows; ++r)
            for (int c = 1; c < cols; ++c)
                if (matrix[r][c] != matrix[r - 1][c - 1]) return false;
        
        return true;
    }
```

**Complexity Analysis**
  * Time Complexity: $$O(rows * cols)$$ and we can't do better than that, as we need to look at every element in the matrix to decide if it's Toeplitz matrix.
  * Space Complexity: $$O(1)$$

## Further thoughts and comments
  * A [Toeplitz matrix](https://en.wikipedia.org/wiki/Toeplitz_matrix) has some interesting properties which are worth taking look.
  * For the follow up question [this post](https://leetcode.com/problems/toeplitz-matrix/discuss/271388/Java-Solution-for-Follow-Up-1-and-2) from @zyuan18 outlines the approach that I would take as well, i.e. break up the matrix column wise with one column overlap. With that we would also reading large chunks from disk sequentially. Leaving enough memory for 3 partial rows in memory would allow to process two while reading the 3rd chunk from disk in the background. Accessing anything out of order would be rather expensive.
  * For cache locality and prefetching IMO the input matrix is just too small for that really to matter, as the size is restricted to 20x20. For larger input's this would really start to matter though.
  * Dragons here: Strictly speaking we should be using ```size_t``` instead of ```int``` for ```rows```, ```cols```, ```r```, and ```c``` and use the code below. What we need to watch out for when using ```size_t``` instead of ```int``` is that ```size_t``` is an unsigned type and ```size(matrix) - 1``` could _underflow_ if the matrix is empty. The program would crash and burn in this case. Not a problem in the way the code is written, but if we would have written ```for (int i = 0; i < size(matrix) - 1; ++i)``` instead we could potential run into problems here. What's interesting is that the compiler seems to generate slight more compact code for the version using ```size_t```, see https://godbolt.org/z/rYW55ddr1

```cpp
    static bool isToeplitzMatrix(const vector<vector<int>>& matrix) {
        const size_t rows = matrix.size();
        const size_t cols = matrix[0].size();
        for (size_t r = 1; r < rows; ++r)
            for (size_t c = 1; c < cols; ++c)
                if (matrix[r][c] != matrix[r - 1][c - 1]) return false;
        
        return true;
    }
```
  * What's the deal with ```static``` you might ask? We are not using any member variables of ```class Solution```. That ```static``` makes this explicit and we are also not passing the implicit ```this``` pointer around.
  * Why all the ```const```? Using ```const``` has more than once helped the compiler in protecting me from myself and making it clear what I intend not to modify.


_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
