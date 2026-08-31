# O(n^2) || Dynamic programming || Java | Python | C++ | JavaScript | Go | Rust || 2 Approach

**Author:** kartikdevsharma_
**Votes:** 44
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5542245/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5542245/)

---

# Problem Statement
![strip1.gif](./images/3.gif)

We've got this bunch of books and each book has two important features - how thick it is and how tall it is. Now, we're trying to put these books on a bookcase, but here's the catch: the shelves have a fixed width.

So, what we're trying to do is figure out the smartest way to arrange these books so that our bookcase ends up being as short as possible. 

Now, we can't just shuffle the books around however we want. We have to keep them in the order they're given to us. So as we're going through the books one by one, we've got two choices each time:

1. We can try to squeeze the book onto the shelf we're currently working on. But of course, we can only do this if there's enough space left on that shelf.

2. Or, if the book won't fit, we have to start a new shelf.

The important part: every time we start a new shelf, we're making our bookcase taller. And how much taller? Well, it's going to be as tall as the tallest book on the shelf we just finished.

So, our job is to figure out how can we arrange these books, following all these rules, so that in the end, our bookcase is as short as possible?

It's a good problem because it's not just about cramming as many books as possible onto each shelf. Sometimes, starting a new shelf earlier might actually lead to a shorter bookcase overall. 

---
# Bottom-Up Approach
### Intuition


1. This looks like a optimization problem - we're trying to minimize the total height of the bookshelf.
2. The order of books matters and can't be changed, which adds a constraint.
3. We have to make decisions about where to "break" the shelf and start a new one.
4. It feels like we might need to try different combinations to find the optimal solution.
5. The fact that we can't rearrange books makes me think of dynamic programming - we might be able to build on smaller subproblems.




### Approach

1. **Understanding the Problem Structure:**
   First, we need to recognize that this problem has an optimal substructure. This means that the best solution for arranging n books can be built from the best solutions for arranging fewer books. This is a key characteristic that suggests we can use dynamic programming.

   Why? Because for each book, we have two choices:
   a) Put it on the current shelf if there's space
   b) Start a new shelf with this book
   
   The best choice depends on what we've done with the previous books, but it doesn't depend on what we'll do with future books. This is another hint that dynamic programming could work well here.

2. **Defining Our Subproblem:**
   We define our subproblem as: "What's the minimum height needed for the first i books?"
   
   Why this subproblem? Because if we know the best way to arrange the first i-1 books, we can use that information to figure out the best way to arrange i books. We just need to decide whether to put the i-th book on a new shelf or try to fit it with some of the previous books.

3. **Building the Solution Incrementally:**
   We'll use an array called minHeight to store our intermediate results. minHeight[i] will represent the minimum height needed to arrange the first i books.
   
   Why an array? This allows us to store and reuse the results of our subproblems, which is a key feature of dynamic programming. It prevents us from recalculating the same things over and over.

4. **Base Case:**
   We start with minHeight[0] = 0. This represents the case where we have no books, so the height is zero.
   
   Why do we need this? Every recursive or dynamic programming solution needs a base case - a simple scenario where we know the answer without any calculation. This gives us a starting point to build upon.

5. **Iterating Through the Books:**
   We'll go through the books one by one, from the first to the last. For each book, we'll determine the best way to arrange all books up to and including this one.
   
   Why in this order? Because we need to know the best arrangements for smaller numbers of books before we can figure out the best arrangement for more books.

6. **Considering Placement Options:**
   For each book, we'll try placing it on a shelf with some of the previous books. We start by trying to put it with just the previous book, then the previous two books, and so on, until we can't fit any more.
   
   Why try all these options? Because the optimal solution might involve putting this book on a new shelf, or it might involve combining it with some number of previous books. We need to check all possibilities to find the best one.

7. **Tracking Shelf Width and Height:**
   As we try different combinations, we keep track of two things:
   a) The total width of books on the current shelf
   b) The height of the tallest book on the current shelf
   
   Why? The width tells us if we can fit another book. The height determines how tall this shelf will be, which affects our total bookshelf height.

8. **Updating the Minimum Height:**
   For each valid arrangement (i.e., one that fits on the shelf), we calculate the total height. This is the height of the current shelf plus the minimum height needed for all the books before the ones on this shelf.
   
   Why add these? The total height of our bookshelf is the sum of all the shelf heights. By adding the current shelf to the best arrangement of the books before it, we get the total height for this arrangement.

9. **Choosing the Best Option:**
   After trying all possible arrangements for the current book, we keep the one that gives us the smallest total height. We store this in our minHeight array.
   
   Why keep only the best? This is the essence of dynamic programming. We only need to know the best solution for each subproblem to solve larger problems.

10. **Final Result:**
    After we've processed all the books, minHeight[n] (where n is the total number of books) gives us the minimum possible height for the entire bookshelf.

**Pseudocode:**

```
function arrangeBooks(books, shelfWidth):
    // We'll use an array to store the minimum height for each subproblem
    // minHeight[i] will represent the minimum height for the first i books
    minHeight = new array of size (books.length + 1), initialized with infinity
    minHeight[0] = 0  // Base case: no books means zero height

    for i from 1 to books.length:
        currentShelfWidth = 0
        currentShelfHeight = 0
        
        // Try placing book i with some of the previous books
        for j from i-1 down to 0:
            if currentShelfWidth + books[j].thickness > shelfWidth:
                break  // Can't fit any more books on this shelf
            
            currentShelfWidth += books[j].thickness
            currentShelfHeight = max(currentShelfHeight, books[j].height)
            
            // Calculate total height if we use this arrangement
            possibleHeight = minHeight[j] + currentShelfHeight
            
            // Update minHeight[i] if this is better
            minHeight[i] = min(minHeight[i], possibleHeight)

    return minHeight[books.length]
```

This approach builds the solution bottom-up. For each book, we try placing it with the previous books, keeping track of the shelf width and height. We use the results of smaller subproblems (minHeight for fewer books) to solve larger subproblems.

The key insight is that once we've found the optimal arrangement for i-1 books, we can use that to help find the optimal arrangement for i books.



### Complexity

 **Time Complexity: O(n^2)**

1. We have an outer loop that iterates through all n books: O(n)
2. For each book, we have an inner loop that potentially looks back at all previous books: O(n)
3. These nested loops give us a quadratic time complexity: O(n) * O(n) = O(n^2)

In the worst case, where the shelf is very wide and can accommodate all books, we'll always look back at all previous books for each new book.

Best case scenario: O(n) if the shelf width only ever fits one book.
Average case: Still O(n^2) as we expect to look back at a significant portion of previous books for each new book.

 **Space Complexity: O(n)**

1. We use a single array (minHeight) to store our dynamic programming results.
2. This array has a size of n+1, where n is the number of books.
3. Therefore, our space complexity is linear: O(n)

Note: We're not counting the input array in our space complexity, as that's considered part of the input.


---
![strip1.gif](./images/3.gif)
# Code
```java []
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        return arrangeBooks(books, shelfWidth);
    }

    private int arrangeBooks(int[][] books, int maxShelfWidth) {
        int[] minHeights = new int[books.length + 1];
        
        for (int bookIndex = 1; bookIndex <= books.length; bookIndex++) {
            minHeights[bookIndex] = Integer.MAX_VALUE;
            int currentShelfHeight = 0;
            int currentShelfWidth = 0;
            
            for (int lastBook = bookIndex - 1; lastBook >= 0; lastBook--) {
                int currentBookThickness = books[lastBook][0];
                int currentBookHeight = books[lastBook][1];
                
                if (currentShelfWidth + currentBookThickness > maxShelfWidth) {
                    break;
                }
                
                currentShelfWidth += currentBookThickness;
                currentShelfHeight = Math.max(currentShelfHeight, currentBookHeight);
                
                int currentArrangementHeight = minHeights[lastBook] + currentShelfHeight;
                minHeights[bookIndex] = Math.min(minHeights[bookIndex], currentArrangementHeight);
            }
        }
        
        return minHeights[books.length];
    }
}
```

```C++ []
#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int minHeightShelves(std::vector<std::vector<int>>& books, int shelfWidth) {
        return arrangeBooks(books, shelfWidth);
    }

private:
    int arrangeBooks(std::vector<std::vector<int>>& books, int maxShelfWidth) {
        std::vector<int> minHeights(books.size() + 1, INT_MAX);
        minHeights[0] = 0;

        for (int bookIndex = 1; bookIndex <= books.size(); bookIndex++) {
            int currentShelfHeight = 0;
            int currentShelfWidth = 0;

            for (int lastBook = bookIndex - 1; lastBook >= 0; lastBook--) {
                int currentBookThickness = books[lastBook][0];
                int currentBookHeight = books[lastBook][1];

                if (currentShelfWidth + currentBookThickness > maxShelfWidth) {
                    break;
                }

                currentShelfWidth += currentBookThickness;
                currentShelfHeight = std::max(currentShelfHeight, currentBookHeight);

                int currentArrangementHeight = minHeights[lastBook] + currentShelfHeight;
                minHeights[bookIndex] = std::min(minHeights[bookIndex], currentArrangementHeight);
            }
        }

        return minHeights[books.size()];
    }
};
```
```Python []
from typing import List

class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
        return self.arrangeBooks(books, shelfWidth)

    def arrangeBooks(self, books: List[List[int]], maxShelfWidth: int) -> int:
        minHeights = [float('inf')] * (len(books) + 1)
        minHeights[0] = 0

        for bookIndex in range(1, len(books) + 1):
            currentShelfHeight = 0
            currentShelfWidth = 0

            for lastBook in range(bookIndex - 1, -1, -1):
                currentBookThickness, currentBookHeight = books[lastBook]

                if currentShelfWidth + currentBookThickness > maxShelfWidth:
                    break

                currentShelfWidth += currentBookThickness
                currentShelfHeight = max(currentShelfHeight, currentBookHeight)

                currentArrangementHeight = minHeights[lastBook] + currentShelfHeight
                minHeights[bookIndex] = min(minHeights[bookIndex], currentArrangementHeight)

        return minHeights[len(books)]
```
```JavaScript []
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    return arrangeBooks(books, shelfWidth);
};

/**
 * @param {number[][]} books
 * @param {number} maxShelfWidth
 * @return {number}
 */
function arrangeBooks(books, maxShelfWidth) {
    const minHeights = new Array(books.length + 1).fill(Infinity);
    minHeights[0] = 0;

    for (let bookIndex = 1; bookIndex <= books.length; bookIndex++) {
        let currentShelfHeight = 0;
        let currentShelfWidth = 0;

        for (let lastBook = bookIndex - 1; lastBook >= 0; lastBook--) {
            const [currentBookThickness, currentBookHeight] = books[lastBook];

            if (currentShelfWidth + currentBookThickness > maxShelfWidth) {
                break;
            }

            currentShelfWidth += currentBookThickness;
            currentShelfHeight = Math.max(currentShelfHeight, currentBookHeight);

            const currentArrangementHeight = minHeights[lastBook] + currentShelfHeight;
            minHeights[bookIndex] = Math.min(minHeights[bookIndex], currentArrangementHeight);
        }
    }

    return minHeights[books.length];
}
```
```Go []
package main

import "math"

func minHeightShelves(books [][]int, shelfWidth int) int {
    return arrangeBooks(books, shelfWidth)
}

func arrangeBooks(books [][]int, maxShelfWidth int) int {
    minHeights := make([]int, len(books)+1)
    for i := range minHeights {
        minHeights[i] = math.MaxInt32
    }
    minHeights[0] = 0

    for bookIndex := 1; bookIndex <= len(books); bookIndex++ {
        currentShelfHeight := 0
        currentShelfWidth := 0

        for lastBook := bookIndex - 1; lastBook >= 0; lastBook-- {
            currentBookThickness := books[lastBook][0]
            currentBookHeight := books[lastBook][1]

            if currentShelfWidth+currentBookThickness > maxShelfWidth {
                break
            }

            currentShelfWidth += currentBookThickness
            currentShelfHeight = max(currentShelfHeight, currentBookHeight)

            currentArrangementHeight := minHeights[lastBook] + currentShelfHeight
            minHeights[bookIndex] = min(minHeights[bookIndex], currentArrangementHeight)
        }
    }

    return minHeights[len(books)]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

```Rust []
impl Solution {
    pub fn min_height_shelves(books: Vec<Vec<i32>>, shelf_width: i32) -> i32 {
        // Helper function to perform the calculation
        fn arrange_books(books: &Vec<Vec<i32>>, max_shelf_width: i32) -> i32 {
            let n = books.len();
            let mut min_heights = vec![i32::MAX; n + 1];
            min_heights[0] = 0; // Base case: No books, no height required

            for book_index in 1..=n {
                let mut current_shelf_height = 0;
                let mut current_shelf_width = 0;

                for last_book in (0..book_index).rev() {
                    let (current_book_thickness, current_book_height) = (books[last_book][0], books[last_book][1]);

                    if current_shelf_width + current_book_thickness > max_shelf_width {
                        break;
                    }

                    current_shelf_width += current_book_thickness;
                    current_shelf_height = current_shelf_height.max(current_book_height);

                    let current_arrangement_height = min_heights[last_book] + current_shelf_height;
                    min_heights[book_index] = min_heights[book_index].min(current_arrangement_height);
                }
            }

            min_heights[n]
        }

        // Call the helper function with the provided parameters
        arrange_books(&books, shelf_width)
    }
}

```



---
![strip1.gif](./images/3.gif)


# Top-Down Approach 
### Intuition

The top-down approach to the bookshelf problem uses recursion and memoization to solve the problem from the "top" (starting with all books) down to the base cases. Here's how we can think about it:

1. We start with all the books and make decisions one by one, from the first book to the last.
2. For each book, we have two choices:
   a) Put it on the current shelf if there's space.
   b) Start a new shelf with this book.
3. We recursively explore both these options (when possible) and choose the one that gives us the minimum overall height.
4. To avoid redundant calculations, we store the results of subproblems in a cache (memo).

The key insight is that once we've made a decision for a book, the problem becomes smaller - we now have to make decisions for fewer books. This recursive structure naturally leads us to a top-down solution.

### Approach

1. **Define the Recursive Function:**
   We create a helper function that takes the following parameters:
   - Current book index
   - Remaining width on the current shelf
   - Current height of the shelf we're working on

2. **Base Case:**
   When we reach the last book, we make a final decision based on whether it fits on the current shelf or needs a new one.

3. **Memoization:**
   We use a 2D array to store results for each combination of book index and remaining shelf width. This prevents recalculating the same subproblems.

4. **Decision Making:**
   For each book, we consider two options:
   a) Put it on a new shelf
   b) Put it on the current shelf (if space allows)

5. **Recursive Calls:**
   We make recursive calls for both options (when possible) and choose the minimum result.

6. **Caching Results:**
   Before returning, we store the computed result in our memo array for future use.

## Detailed Explanation

1. **Function Parameters:**
   - `books`: The array of book dimensions (thickness, height)
   - `shelfWidth`: The maximum width of each shelf
   - `memo`: 2D array to store computed results
   - `i`: Current book index we're deciding on
   - `remainingWidth`: Remaining width on the current shelf
   - `currentHeight`: Height of the current shelf

2. **Base Case:**
   When we reach the last book (`i == books.length - 1`), we have two scenarios:
   - If it fits on the current shelf, return the max of current height and this book's height.
   - If it doesn't fit, start a new shelf, returning the sum of current height and this book's height.

3. **Memoization Check:**
   Before any calculation, we check if we've already solved this subproblem (i.e., made a decision for this book with this remaining width). If so, we return the cached result.

4. **Option 1: New Shelf**
   We always consider the option of putting the current book on a new shelf. This means:
   - Adding the current shelf's height to our total
   - Starting a new shelf with this book's height
   - Recursively solving for the next book with a fresh shelf width

5. **Option 2: Current Shelf**
   If there's enough space on the current shelf, we consider putting the book there:
   - Update the shelf height if this book is taller
   - Reduce the remaining width
   - Recursively solve for the next book

6. **Choosing the Best Option:**
   We take the minimum of these two options (or just the first option if the second isn't possible).

7. **Caching the Result:**
   Before returning, we store the computed result in our memo array, indexed by the current book and remaining width.



## Pseudocode



```
function minHeightShelves(books, shelfWidth):
    memo = 2D array of size [books.length][shelfWidth + 1] initialized with 0
    return dpHelper(books, shelfWidth, memo, 0, shelfWidth, 0)

function dpHelper(books, shelfWidth, memo, i, remainingWidth, currentHeight):
    if i == books.length:
        return currentHeight

    if memo[i][remainingWidth] != 0:
        return memo[i][remainingWidth]

    currentBookWidth = books[i][0]
    currentBookHeight = books[i][1]

    // Option 1: Put book on a new shelf
    newShelfHeight = currentHeight + dpHelper(books, shelfWidth, memo, i + 1, shelfWidth - currentBookWidth, currentBookHeight)

    // Option 2: Put book on current shelf (if possible)
    currentShelfHeight = INFINITY
    if remainingWidth >= currentBookWidth:
        newHeight = max(currentHeight, currentBookHeight)
        currentShelfHeight = dpHelper(books, shelfWidth, memo, i + 1, remainingWidth - currentBookWidth, newHeight)

    result = min(newShelfHeight, currentShelfHeight)
    memo[i][remainingWidth] = result
    return result
```

## Complexity Analysis

**Time Complexity: O(n * w)**
- n: number of books
- w: shelf width
- We have n * w possible states (each book with each possible remaining width)
- Each state is computed only once due to memoization
- Within each state, we do O(1) work

**Space Complexity: O(n * w)**
- The memo array has dimensions n * w
- The recursion stack can go up to depth n in the worst case

---
![strip1.gif](./images/3.gif)
## Code



```Java []
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        int[][] memo = new int[books.length][shelfWidth + 1];
        return dpHelper(books, shelfWidth, memo, 0, shelfWidth, 0);
    }

    private int dpHelper(int[][] books, int shelfWidth, int[][] memo, int i, int remainingWidth, int currentHeight) {
        if (i == books.length) return currentHeight;

        if (memo[i][remainingWidth] != 0) return memo[i][remainingWidth];

        int currentBookWidth = books[i][0], currentBookHeight = books[i][1];

        // Option 1: Put book on a new shelf
        int newShelfHeight = currentHeight + dpHelper(books, shelfWidth, memo, i + 1, shelfWidth - currentBookWidth, currentBookHeight);

        // Option 2: Put book on current shelf (if possible)
        int currentShelfHeight = Integer.MAX_VALUE;
        if (remainingWidth >= currentBookWidth) {
            int newHeight = Math.max(currentHeight, currentBookHeight);
            currentShelfHeight = dpHelper(books, shelfWidth, memo, i + 1, remainingWidth - currentBookWidth, newHeight);
        }

        int result = Math.min(newShelfHeight, currentShelfHeight);
        memo[i][remainingWidth] = result;
        return result;
    }
}
```

```Python []
class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
        @functools.lru_cache(None)
        def dp(i, remainingWidth, currentHeight):
            if i == len(books):
                return currentHeight
            
            currentBookWidth, currentBookHeight = books[i]
            
            # Option 1: Put book on a new shelf
            newShelfHeight = currentHeight + dp(i + 1, shelfWidth - currentBookWidth, currentBookHeight)
            
            # Option 2: Put book on current shelf (if possible)
            currentShelfHeight = float('inf')
            if remainingWidth >= currentBookWidth:
                newHeight = max(currentHeight, currentBookHeight)
                currentShelfHeight = dp(i + 1, remainingWidth - currentBookWidth, newHeight)
            
            return min(newShelfHeight, currentShelfHeight)
        
        return dp(0, shelfWidth, 0)
```

```C++ []
class Solution {
public:
    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {
        vector<vector<int>> memo(books.size(), vector<int>(shelfWidth + 1, 0));
        return dpHelper(books, shelfWidth, memo, 0, shelfWidth, 0);
    }
    
private:
    int dpHelper(const vector<vector<int>>& books, int shelfWidth, vector<vector<int>>& memo, int i, int remainingWidth, int currentHeight) {
        if (i == books.size()) return currentHeight;
        
        if (memo[i][remainingWidth] != 0) return memo[i][remainingWidth];
        
        int currentBookWidth = books[i][0], currentBookHeight = books[i][1];
        
        // Option 1: Put book on a new shelf
        int newShelfHeight = currentHeight + dpHelper(books, shelfWidth, memo, i + 1, shelfWidth - currentBookWidth, currentBookHeight);
        
        // Option 2: Put book on current shelf (if possible)
        int currentShelfHeight = INT_MAX;
        if (remainingWidth >= currentBookWidth) {
            int newHeight = max(currentHeight, currentBookHeight);
            currentShelfHeight = dpHelper(books, shelfWidth, memo, i + 1, remainingWidth - currentBookWidth, newHeight);
        }
        
        int result = min(newShelfHeight, currentShelfHeight);
        memo[i][remainingWidth] = result;
        return result;
    }
};
```

```JavaScript []
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const memo = new Array(books.length).fill(0).map(() => new Array(shelfWidth + 1).fill(0));
    
    const dpHelper = (i, remainingWidth, currentHeight) => {
        if (i === books.length) return currentHeight;
        
        if (memo[i][remainingWidth] !== 0) return memo[i][remainingWidth];
        
        const [currentBookWidth, currentBookHeight] = books[i];
        
        // Option 1: Put book on a new shelf
        const newShelfHeight = currentHeight + dpHelper(i + 1, shelfWidth - currentBookWidth, currentBookHeight);
        
        // Option 2: Put book on current shelf (if possible)
        let currentShelfHeight = Infinity;
        if (remainingWidth >= currentBookWidth) {
            const newHeight = Math.max(currentHeight, currentBookHeight);
            currentShelfHeight = dpHelper(i + 1, remainingWidth - currentBookWidth, newHeight);
        }
        
        const result = Math.min(newShelfHeight, currentShelfHeight);
        memo[i][remainingWidth] = result;
        return result;
    };
    
    return dpHelper(0, shelfWidth, 0);
};
```

```Go []
func minHeightShelves(books [][]int, shelfWidth int) int {
    memo := make([][]int, len(books))
    for i := range memo {
        memo[i] = make([]int, shelfWidth+1)
    }
    
    var dpHelper func(int, int, int) int
    dpHelper = func(i, remainingWidth, currentHeight int) int {
        if i == len(books) {
            return currentHeight
        }
        
        if memo[i][remainingWidth] != 0 {
            return memo[i][remainingWidth]
        }
        
        currentBookWidth, currentBookHeight := books[i][0], books[i][1]
        
        // Option 1: Put book on a new shelf
        newShelfHeight := currentHeight + dpHelper(i+1, shelfWidth-currentBookWidth, currentBookHeight)
        
        // Option 2: Put book on current shelf (if possible)
        currentShelfHeight := math.MaxInt32
        if remainingWidth >= currentBookWidth {
            newHeight := max(currentHeight, currentBookHeight)
            currentShelfHeight = dpHelper(i+1, remainingWidth-currentBookWidth, newHeight)
        }
        
        result := min(newShelfHeight, currentShelfHeight)
        memo[i][remainingWidth] = result
        return result
    }
    
    return dpHelper(0, shelfWidth, 0)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

```Rust []
impl Solution {
    pub fn min_height_shelves(books: Vec<Vec<i32>>, shelf_width: i32) -> i32 {
        let mut memo = vec![vec![0; (shelf_width + 1) as usize]; books.len()];
        
        fn dp_helper(books: &Vec<Vec<i32>>, shelf_width: i32, memo: &mut Vec<Vec<i32>>, i: usize, remaining_width: i32, current_height: i32) -> i32 {
            if i == books.len() {
                return current_height;
            }
            
            if memo[i][remaining_width as usize] != 0 {
                return memo[i][remaining_width as usize];
            }
            
            let (current_book_width, current_book_height) = (books[i][0], books[i][1]);
            
            // Option 1: Put book on a new shelf
            let new_shelf_height = current_height + dp_helper(books, shelf_width, memo, i + 1, shelf_width - current_book_width, current_book_height);
            
            // Option 2: Put book on current shelf (if possible)
            let mut current_shelf_height = std::i32::MAX;
            if remaining_width >= current_book_width {
                let new_height = current_height.max(current_book_height);
                current_shelf_height = dp_helper(books, shelf_width, memo, i + 1, remaining_width - current_book_width, new_height);
            }
            
            let result = new_shelf_height.min(current_shelf_height);
            memo[i][remaining_width as usize] = result;
            result
        }
        
        dp_helper(&books, shelf_width, &mut memo, 0, shelf_width, 0)
    }
}
```
**PS:** A lot of people were having doubts about why the currentHeight variable is not included in the time complexity and the DP array of the top-down solution. Here's the explanation:

In top-down solution, the currentHeight (which represents the maximum height of the current shelf) is passed as a parameter to the dpHelper function. However, it's not used as part of the memoization key. Here's why:

1. **Subproblem Uniqueness:** The unique subproblems in this dynamic programming solution are defined by two factors: the current book index (i) and the remaining width on the current shelf (remainingWidth). These two parameters fully capture the state of our problem at any given point in the recursion. The currentHeight, while important for calculations, doesn't define a new unique subproblem.

2. **Order-Dependent Consistency**: The books are always processed in the same order. This means that for any given book index and remaining shelf width, the books that came before (and thus contributed to the current height) are always the same. As a result, the optimal height for a specific combination of book index and remaining width will always be consistent.

*The solution works without explicitly caching currentHeight because:*

1. *It's recalculated and updated in each recursive call as needed.*
2. *The optimal substructure of the problem ensures that our memoized results for each (book index, remaining width) pair already incorporate the best possible height configuration for that state.*

In terms of time complexity, currentHeight doesn't add an extra dimension to our problem space. We're still fundamentally solving subproblems based on book index and remaining width, with currentHeight being a parameter that helps us compute the optimal solution within each subproblem.

This approach allows us to maintain the efficiency of our DP solution while keeping the memoization structure as simple and memory-efficient as possible. The memo array memo[i][remainingWidth] implicitly captures the effect of currentHeight for each unique state, without needing to store it explicitly.


---

