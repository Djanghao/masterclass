# 100% beats in almost Every Languages | Using Dynamic Programming

**Author:** PrinceHiremath
**Votes:** 3
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561167/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561167/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic programming is a technique used to solve problems by breaking them down into smaller subproblems, solving each subproblem once, and storing their solutions - typically using an array or a hash table - to avoid redundant computations.

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        int dp[] = new int[books.length + 1];
        dp[0] = 0;

        for (int i = 1; i <= books.length; i++) {
            int min = dp[i - 1] + books[i - 1][1];
            int height = books[i - 1][1];
            int width = books[i - 1][0];
            int j = i - 2;
            while (j >= 0 && width + books[j][0] <= shelfWidth) {
                width += books[j][0];
                height = Math.max(height, books[j][1]);
                min = Math.min(min, height + dp[j]);
                --j;
            } 
            dp[i] = min;
        }
        return dp[books.length];
    }
})
```
```python3 []
class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
        dp = [0] * (len(books) + 1)

        for i in range(1, len(books) + 1):
            min_height = dp[i - 1] + books[i - 1][1]
            height = books[i - 1][1]
            width = books[i - 1][0]
            j = i - 2
            while j >= 0 and width + books[j][0] <= shelfWidth:
                width += books[j][0]
                height = max(height, books[j][1])
                min_height = min(min_height, height + dp[j])
                j -= 1
            dp[i] = min_height

        return dp[len(books)]

```
```C []

int minHeightShelves(int** books, int booksSize, int* booksColSize, int shelfWidth) {
    int* dp = (int*)malloc((booksSize + 1) * sizeof(int));
    dp[0] = 0;

    for (int i = 1; i <= booksSize; i++) {
        int min = dp[i - 1] + books[i - 1][1];
        int height = books[i - 1][1];
        int width = books[i - 1][0];
        int j = i - 2;
        while (j >= 0 && width + books[j][0] <= shelfWidth) {
            width += books[j][0];
            height = (height > books[j][1]) ? height : books[j][1];
            min = (min < height + dp[j]) ? min : height + dp[j];
            --j;
        }
        dp[i] = min;
    }

    int result = dp[booksSize];
    free(dp);
    return result;
}

```
```javascript []
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const dp = Array(books.length + 1).fill(0);

    for (let i = 1; i <= books.length; i++) {
        let min = dp[i - 1] + books[i - 1][1];
        let height = books[i - 1][1];
        let width = books[i - 1][0];
        let j = i - 2;
        while (j >= 0 && width + books[j][0] <= shelfWidth) {
            width += books[j][0];
            height = Math.max(height, books[j][1]);
            min = Math.min(min, height + dp[j]);
            j--;
        }
        dp[i] = min;
    }
    return dp[books.length];
};
```
```typescript []
function minHeightShelves(books: number[][], shelfWidth: number): number {
    const dp = Array(books.length + 1).fill(0);

    for (let i = 1; i <= books.length; i++) {
        let min = dp[i - 1] + books[i - 1][1];
        let height = books[i - 1][1];
        let width = books[i - 1][0];
        let j = i - 2;
        while (j >= 0 && width + books[j][0] <= shelfWidth) {
            width += books[j][0];
            height = Math.max(height, books[j][1]);
            min = Math.min(min, height + dp[j]);
            j--;
        }
        dp[i] = min;
    }
    return dp[books.length];
};
```
```php []
class Solution {

    /**
     * @param Integer[][] $books
     * @param Integer $shelfWidth
     * @return Integer
     */
    function minHeightShelves($books, $shelfWidth) {
        $dp = array_fill(0, count($books) + 1, 0);

    for ($i = 1; $i <= count($books); $i++) {
        $min = $dp[$i - 1] + $books[$i - 1][1];
        $height = $books[$i - 1][1];
        $width = $books[$i - 1][0];
        $j = $i - 2;
        while ($j >= 0 && $width + $books[$j][0] <= $shelfWidth) {
            $width += $books[$j][0];
            $height = max($height, $books[$j][1]);
            $min = min($min, $height + $dp[$j]);
            $j--;
        }
        $dp[$i] = $min;
    }

    return $dp[count($books)];
    }
}
```
```kotlin []
class Solution {
    fun minHeightShelves(books: Array<IntArray>, shelfWidth: Int): Int {
        val dp = IntArray(books.size + 1)
    
    for (i in 1..books.size) {
        var min = dp[i - 1] + books[i - 1][1]
        var height = books[i - 1][1]
        var width = books[i - 1][0]
        var j = i - 2
        while (j >= 0 && width + books[j][0] <= shelfWidth) {
            width += books[j][0]
            height = maxOf(height, books[j][1])
            min = minOf(min, height + dp[j])
            j--
        }
        dp[i] = min
    }
    return dp[books.size]
    }
}
```
