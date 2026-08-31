# Detailed Explanation With Clean Code | Diagonal Traversal

**Author:** bitmasker
**Votes:** 7
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1577269/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1577269/)

---

<br/>

>  You can solve this problem using the diagram given in sample testcase

<br/>
<img src="https://assets.leetcode.com/uploads/2021/10/26/exam1.png" height="200px" />

<br/>

If you are just confused about the diagonal traversal, you can see the last part of this blog :)

**Steps:**

* cols = encodedText.size() / rows
* Fill all the characters in a 2D vector of size rows * cols (including spaces)
* Add all the diagonals to answer string
* Remove trailing zeros

For the example shown in above image when you traverse diagonally, you will get these substrings
```
"i lo" 
"ve l"
"eetc"
"ode"
"  "
" "
```
And when you keep adding these character by character, you will have original text as
`"i love leetcode  "`
then you can remove the trailing spaces
<br/>

```
class Solution {
public:
    string decodeCiphertext(string encoded, int rows) {
        
        int n = encoded.size();
        int cols = n / rows;
        vector<vector<char>> arr(rows, vector<char>(cols));
        int k = 0;
        
		// filling the vector
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                arr[i][j] = encoded[k++];
            }
        }
        
        string original = "";
        
		// diagonal traversal as shown in image 
        for(int col = 0; col < cols; col++) {
            int r = 0;
            int c = col;
            while(c < cols and r < rows) {
                original += arr[r++][c++];
            }
        }
        
		// removing trailing zeros
        while(original.back() == ' ') original.pop_back();
        
        return original;
    }
};
```

<br/>

**If you are confused about how to traverse diagonally:**

<p>Traversing diagonals in a matrix simply means going from `row = 0; row < rows` and `col = 0; col < cols
` by doing `row++, col++` at each stage
<br/>

**Diagonal traversal for matrix of size (4 * 6) (Shown in image) will be as follows:**

```
(0, 0) -> (1, 1) -> (2, 2) -> (3, 3)
(0, 1) -> (1, 2) -> (2, 3) -> (3, 4)
(0, 2) -> (1, 3) -> (2, 4) -> (3, 5)
(0, 3) -> (1, 4) -> (2, 5)
(0, 4) -> (1, 5)
(0, 5)
```

</p>

**Time complexity = Space complexity = O(n) = O(rows * cols)**

<br/>