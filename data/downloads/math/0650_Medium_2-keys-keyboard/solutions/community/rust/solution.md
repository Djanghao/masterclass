# Recursion & Top-down DP with O(n^2) TC | Multiple Languages

**Author:** Solution_Assist
**Votes:** 77
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5655013/](https://leetcode.com/problems/2-keys-keyboard/solutions/5655013/)

---

Click on the link below for more efficient solution
***[Approach 3: Bottom-Up O(n\u2217 \u221A(n)) 
Appraoch 4: Primze factorization O(\u221An)](https://leetcode.com/problems/2-keys-keyboard/solutions/5655034/o-sqrt-n-bottom-up-dp-prime-factorization)***
---
# Approach 1 Recursion
### Intuition
When we first look at this problem, we might think about how we'd actually create multiple 'A's on a notepad. We start with one 'A', and we have two choices: we can either copy what we have and then paste it, or we can just paste what we copied before.

The tricky part is figuring out when to copy and when to paste. If we just keep pasting, we'll only add the same number of 'A's each time. But if we copy too often, we might be wasting operations.

The key insight is that we don't need to copy every single time. Once we've copied, we can paste that same thing multiple times. For example, if we want 9 'A's, we could do this:

1. Start with 'A'
2. Copy All (now we have 'A' in the clipboard)
3. Paste (now we have 'AA')
4. Copy All (now we have 'AA' in the clipboard)
5. Paste (now we have 'AAAA')
6. Paste (now we have 'AAAAAA')
7. Copy All (now we have 'AAAAAA' in the clipboard)
8. Paste (now we have 'AAAAAAAAAAAA')

See that We overshot. But this shows us that we need to be smart about when we copy and when we paste.

This suggests that we might need to try different combinations of copying and pasting to find the best one. And that's where the idea of using recursion comes in.

### Approach

**Mathematical Explanation**

Let's define our function $f(i, j$) more formally:

$f(i, j)$ = the minimum number of operations needed to get n A's, starting with i A's on the screen and j A's in the clipboard.

Our goal is to find $f(1, 1)$, which represents starting with one 'A' on the screen and one 'A' in the clipboard.

At each step, we have two options:

1. Copy All and Paste:
   This operation always takes 2 steps (1 for Copy, 1 for Paste).
   It changes our state from $(i, j)$ to $(2i, i)$.
   The number of operations for this choice is: 2 + $f(2i, i)$

2. Paste Only:
   This operation takes 1 step.
   It changes our state from $(i, j)$ to $(i+j, j)$.
   The number of operations for this choice is: 1 + $f(i+j, j)$

Therefore, we can express $f(i, j)$ as a recurrence relation:

$f(i, j) = min(2 + f(2i, i), 1 + f(i+j, j))$

This recurrence relation captures the essence of our decision at each step: we're choosing the minimum between the two possible operations.

Base cases:
1. If i = n, we've reached our goal, so $f(n, j)$ = 0 for any j.
2. If i > n, we've overshot, so we return a very large number (effectively infinity).

Now, let's look at how this plays out mathematically for a few steps:

Starting state: (1, 1)
$f(1, 1) = min(2 + f(2, 1), 1 + f(2, 1))$
        = 1 + $f(2, 1)$  // Paste is always better when $i=j$

Now for $f(2, 1)$:
$f(2, 1) = min(2 + f(4, 2), 1 + f(3, 1))$

For $f(4, 2)$:
$f(4, 2) = min(2 + f(8, 4), 1 + f(6, 2))$

For $f(3, 1)$:
$f(3, 1) = min(2 + f(6, 3), 1 + f(4, 1))$

This process continues, building a tree of recursive calls, until we reach our base cases.

The key mathematical insight is that this process will always terminate because:
1. Each "Copy All and Paste" operation doubles the number of A's.
2. Each "Paste" operation increases the number of A's by at least 1.

Therefore, we will always eventually either reach n or overshoot n.

The solution is found by always choosing the minimum at each step, which ensures we explore all possible combinations of operations while keeping track of the best (minimum) solution found so far.

**Implementation**

1. We start with a function that takes two parameters:
   - `currentLength`: The number of 'A's we currently have on the screen
   - `clipboardLength`: The number of 'A's we have copied to our clipboard

2. Our goal is to reach exactly `targetLength` 'A's using the minimum number of operations.

3. At each step, we have two choices:
   - Copy All and then Paste
   - Just Paste

4. We use recursion to explore both of these choices at each step.

5. We keep track of the minimum number of operations needed to reach our target.

Here's a detailed pseudo-code representation of our approach:

```
function minSteps(targetLength):
    if targetLength == 1:
        return 0  // We already have one 'A', so no operations needed
    
    return 1 + findMinSteps(1, 1)  // Start with one 'A' on screen and in clipboard

function findMinSteps(currentLength, clipboardLength):
    if currentLength == targetLength:
        return 0  // We've reached our goal, no more operations needed
    
    if currentLength > targetLength:
        return VERY_LARGE_NUMBER  // We've overshot, this path is invalid
    
    // Try Copy All and Paste
    copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength)
    
    // Try Paste only
    pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength)
    
    // Return the minimum of the two options
    return minimum(copyAndPaste, pasteOnly)
```

Now, let's dive deeper into each part of this approach:

1. Base Cases:
   - If `currentLength == targetLength`, we've reached our goal. We return 0 because no more operations are needed.
   - If `currentLength > targetLength`, we've overshot our goal. This path is invalid, so we return a very large number to ensure this path isn't chosen.

2. Recursive Cases:
   We explore two options at each step:

   a. Copy All and Paste:
      - This takes 2 operations (1 for Copy All, 1 for Paste)
      - It doubles our current length
      - The clipboard now contains our current length
      - We recursively call our function with these new values

   b. Paste Only:
      - This takes 1 operation
      - It adds our clipboard length to our current length
      - The clipboard length stays the same
      - We recursively call our function with these new values

3. Choosing the Best Option:
   After exploring both options, we return the minimum of the two. This ensures we're always choosing the path with the fewest operations.

4. Initial Call:
   We start our process with 1 'A' on the screen and 1 'A' in the clipboard. That's why our initial call is `findMinSteps(1, 1)`.

5. Handling the n=1 Case:
   If `n` is 1, we already have the desired result (one 'A'), so we return 0.

This recursive approach essentially builds a tree of all possible combinations of Copy All and Paste operations. At each node in this tree, we're making a decision: should we copy and paste, or just paste? By exploring all paths and always choosing the minimum, we guarantee that we'll find the optimal solution.


### Complexity
- **Time complexity: $O(2^n)$**
  In the worst case, we might explore every possible combination of Copy All and Paste operations. At each step, we make two recursive calls, which leads to a binary tree of recursive calls. The depth of this tree could be up to n in the worst case. This gives us a time complexity of O(2^n).
It's worth noting that while the time complexity looks bad, the actual running time for the constraints given (n <= 1000) is manageable because many recursive calls will end early due to overshooting the target length. However, for larger values of n, we'd need to consider more efficient approaches, such as dynamic programming.

- **Space complexity: $O(n)$**
  The space complexity is determined by the maximum depth of the recursion stack. In the worst case, this depth could be n, giving us a space complexity of O(n).

### Code

```Java []
class Solution {
    private int targetLength;
    
    public int minSteps(int n) {
        if (n == 1) return 0;
        this.targetLength = n;
        return 1 + findMinSteps(1, 1);
    }
    
    private int findMinSteps(int currentLength, int clipboardLength) {
        if (currentLength == targetLength) return 0;
        if (currentLength > targetLength) return Integer.MAX_VALUE / 2;
        
        int copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength);
        int pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength);
        
        return Math.min(copyAndPaste, pasteOnly);
    }
}

```


```cpp []
class Solution {
private:
    int targetLength;

    int findMinSteps(int currentLength, int clipboardLength) {
        if (currentLength == targetLength) return 0;
        if (currentLength > targetLength) return INT_MAX / 2;

        int copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength);
        int pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength);

        return std::min(copyAndPaste, pasteOnly);
    }

public:
    int minSteps(int n) {
        if (n == 1) return 0;
        targetLength = n;
        return 1 + findMinSteps(1, 1);
    }
};
```

```python []
class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1:
            return 0
        
        self.target_length = n
        
        def find_min_steps(current_length: int, clipboard_length: int) -> int:
            if current_length == self.target_length:
                return 0
            if current_length > self.target_length:
                return float('inf')
            
            copy_and_paste = 2 + find_min_steps(current_length * 2, current_length)
            paste_only = 1 + find_min_steps(current_length + clipboard_length, clipboard_length)
            
            return min(copy_and_paste, paste_only)
        
        return 1 + find_min_steps(1, 1)
```
```c# []

class Solution {
    private var targetLength: Int = 0

    fun minSteps(n: Int): Int {
        if (n == 1) return 0
        targetLength = n
        return 1 + findMinSteps(1, 1)
    }

    private fun findMinSteps(currentLength: Int, clipboardLength: Int): Int {
        if (currentLength == targetLength) return 0
        if (currentLength > targetLength) return Int.MAX_VALUE / 2

        val copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength)
        val pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength)

        return minOf(copyAndPaste, pasteOnly)
    }
}

```
```kotlin []

class Solution {
    private var targetLength: Int = 0

    fun minSteps(n: Int): Int {
        if (n == 1) return 0
        targetLength = n
        return 1 + findMinSteps(1, 1)
    }

    private fun findMinSteps(currentLength: Int, clipboardLength: Int): Int {
        if (currentLength == targetLength) return 0
        if (currentLength > targetLength) return Int.MAX_VALUE / 2

        val copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength)
        val pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength)

        return minOf(copyAndPaste, pasteOnly)
    }
}

```

```go []
func minSteps(n int) int {
    if n == 1 {
        return 0
    }

    var findMinSteps func(int, int) int
    findMinSteps = func(currentLength, clipboardLength int) int {
        if currentLength == n {
            return 0
        }
        if currentLength > n {
            return 1<<31 - 1 // Max int32
        }

        copyAndPaste := 2 + findMinSteps(currentLength*2, currentLength)
        pasteOnly := 1 + findMinSteps(currentLength+clipboardLength, clipboardLength)

        return min(copyAndPaste, pasteOnly)
    }

    return 1 + findMinSteps(1, 1)
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

```rust []
impl Solution {
    pub fn min_steps(n: i32) -> i32 {
        if n == 1 {
            return 0;
        }

        fn find_min_steps(current_length: i32, clipboard_length: i32, target_length: i32) -> i32 {
            if current_length == target_length {
                return 0;
            }
            if current_length > target_length {
                return i32::MAX / 2;
            }

            let copy_and_paste = 2 + find_min_steps(current_length * 2, current_length, target_length);
            let paste_only = 1 + find_min_steps(current_length + clipboard_length, clipboard_length, target_length);

            copy_and_paste.min(paste_only)
        }

        1 + find_min_steps(1, 1, n)
    }
}
```

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) return 0;

    const findMinSteps = (currentLength, clipboardLength) => {
        if (currentLength === n) return 0;
        if (currentLength > n) return Number.MAX_SAFE_INTEGER / 2;

        const copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength);
        const pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength);

        return Math.min(copyAndPaste, pasteOnly);
    };

    return 1 + findMinSteps(1, 1);
};
```
```TypeScript []
function minSteps(n: number): number {
    if (n === 1) return 0; // Base case: No steps needed if the target is 1

    const targetLength = n;
    
    function findMinSteps(currentLength: number, clipboardLength: number): number {
        if (currentLength === targetLength) return 0;
        if (currentLength > targetLength) return Number.MAX_SAFE_INTEGER / 2;

        // Try the "copy and paste" operation
        const copyAndPaste = 2 + findMinSteps(currentLength * 2, currentLength);
        // Try the "paste only" operation
        const pasteOnly = 1 + findMinSteps(currentLength + clipboardLength, clipboardLength);

        return Math.min(copyAndPaste, pasteOnly);
    }

    return 1 + findMinSteps(1, 1);
}


```
---
## EXAMPLES

### Example 1: n = 3

**Initial Setup:**
- Current number of 'A's on the screen: 1
- Clipboard content: 1 'A'
- Target: 3 'A's

We'll create a table to show each recursive step:

| Step | Current Length | Clipboard Length | Operation | Recursion Call | Explanation |
|------|----------------|------------------|-----------|----------------|-------------|
| 1    | 1              | 1                | Start     | `minSteps(1, 1)` | We start with 1 'A' on the screen and 1 'A' in the clipboard. |
| 2    | 1              | 1                | Paste     | `findMinSteps(2, 1)` | We paste, so now we have 2 'A's on the screen. |
| 3    | 2              | 1                | Paste     | `findMinSteps(3, 1)` | We paste again, now we have 3 'A's on the screen, matching our target. |
| 4    | 3              | 1                | Base Case | Return 0         | We've reached our target, so we return 0, indicating no more operations needed. |

**Explanation:**
- **Step 1:** We start with 1 'A' on the screen and 1 'A' in the clipboard.
- **Step 2:** We perform a "Paste" operation, resulting in 2 'A's on the screen. We recursively call `findMinSteps(2, 1)`.
- **Step 3:** We paste again, reaching 3 'A's on the screen. We recursively call `findMinSteps(3, 1)`.
- **Step 4:** The current length matches the target, so we return 0.

**Final Result:** The minimum steps required are 3.

### Step-by-Step Execution for n = 3

**Initial State:**
- Current Length: 1
- Clipboard Length: 1
- Target: 3

#### Step 1: Call `minSteps(1, 1)`
- The function is called with 1 'A' on the screen and 1 'A' in the clipboard.
- We proceed to recursively explore both options: pasting and copy-pasting.

#### Step 2: Explore "Paste" Option
- The first option is to paste, which leads to `findMinSteps(2, 1)`.
- Now, we have 2 'A's on the screen and 1 'A' in the clipboard.

#### Step 3: Explore "Paste" Again
- From 2 'A's, we paste again, leading to `findMinSteps(3, 1)`.
- Now, we have 3 'A's on the screen, matching our target.

#### Step 4: Base Case
- Since the current length is equal to the target, we return 0, indicating no more operations are needed.

#### Step 5: Backtrack and Combine Results
- We backtrack to the previous steps, combining the results to compute the minimum number of operations.
- The total operations are 3: 1 (initial step) + 1 (paste to 2 'A's) + 1 (paste to 3 'A's).

### Example 2: n = 1

**Initial Setup:**
- Current number of 'A's on the screen: 1
- Clipboard content: 1 'A'
- Target: 1 'A'

| Step | Current Length | Clipboard Length | Operation | Recursion Call | Explanation |
|------|----------------|------------------|-----------|----------------|-------------|
| 1    | 1              | 1                | Start     | `minSteps(1, 1)` | We start with 1 'A' on the screen and 1 'A' in the clipboard. |
| 2    | 1              | 1                | Base Case | Return 0         | The current length matches the target, so we return 0, indicating no operations are needed. |

**Explanation:**
- **Step 1:** We start with 1 'A' on the screen and 1 'A' in the clipboard.
- **Step 2:** Since the current length already matches the target, we return 0.

**Final Result:** The minimum steps required are 0.


---
# Approach 2


### Intuition

When we first encounter this problem, we might think about how we'd manually create multiple 'A's on a notepad. We start with a single 'A', and we have two choices: we can either copy what we have and then paste it, or we can just paste what we copied before.

The challenge lies in determining when to copy and when to paste. If we just keep pasting, we'll only add the same number of 'A's each time. But if we copy too often, we might be wasting operations. This suggests that there's a balance to strike, and finding that balance is key to minimizing our operations.

Let's consider an example. Suppose we want to get 9 'A's. We might do something like this:

1. Start with 'A'
2. Copy All (clipboard: 'A')
3. Paste (now we have 'AA')
4. Copy All (clipboard: 'AA')
5. Paste (now we have 'AAAA')
6. Paste (now we have 'AAAAAA')
7. Copy All (clipboard: 'AAAAAA')
8. Paste (now we have 'AAAAAAAAAAAA')

We've overshot our target, but this illustrates an important point: we don't need to copy every single time. Once we've copied, we can paste that same thing multiple times.

This realization leads us to think recursively. At each step, we have two choices:

1. Copy all and then paste
2. Just paste what's already in the clipboard

We need to try both these options and see which one leads to the target with fewer operations.

Here's where it gets interesting. As we explore these options recursively, we'll notice that we're solving the same subproblems over and over. For instance, whether we get to 4 'A's by copying and pasting 'AA' or by pasting 'A' four times, the question "what's the best way to get from 4 'A's to the target?" is the same.

This observation is crucial. It tells us that our problem has overlapping subproblems, a key characteristic of problems that can be optimized using dynamic programming.

The idea of dynamic programming is to break down a complex problem into simpler subproblems, solve each subproblem only once, and store their solutions for future use. In our case, each subproblem is "what's the minimum number of operations to get from X 'A's to the target, given that I have Y 'A's in my clipboard?"

By storing the solutions to these subproblems (a technique called memoization), we can avoid redundant calculations and significantly speed up our algorithm.

This top-down approach allows us to maintain the intuitive recursive structure of our solution while dramatically improving its efficiency. We're essentially building a solution from the top (our target) down to the base cases, but we're smart about it - we remember what we've calculated so we don't have to calculate it again.

This approach mimics how we might think about the problem naturally (recursively trying different options), but it optimizes this process by eliminating redundant work. It's a perfect blend of intuitive problem-solving and algorithmic efficiency.

### Approach
Let's dive deep into the approach, breaking it down step by step:

1. **Problem State Representation**

   We represent each state in our problem with two key pieces of information:
   - `currentLength`: The number of 'A's we currently have on the screen
   - `clipboardLength`: The number of 'A's we have copied to our clipboard

   Why these two? Because they completely describe our current situation. With these two pieces of information, we know exactly what our options are: we can either paste `clipboardLength` 'A's, or we can copy all and then paste, doubling our `currentLength`.

2. **Base Cases**

   We define two important base cases:
   
   a. If `currentLength == targetLength`, we return 0. This means we've reached our goal, and no more operations are needed.
   
   b. If `currentLength > targetLength`, we return a very large number (effectively infinity). This indicates that we've overshot our target, and this path is invalid.

   These base cases are crucial as they define when our recursion should stop and start returning values back up the call stack.

3. **Memoization Setup**

   We create a 2D array `cache` to store our memoized results:
   - The first dimension represents `currentLength` (from 0 to targetLength)
   - The second dimension represents `clipboardLength` (from 0 to targetLength/2)

   We use targetLength/2 for the second dimension because our clipboard length will never exceed half of our target length. (If it did, a single paste would overshoot our target.)

   We initialize this array with a sentinel value (like -1) to indicate uncalculated states.

4. **Main Recursive Function**

   Our core function, let's call it `calculateMinOps`, takes two parameters: `currentLength` and `clipboardLength`.

   Here's a detailed breakdown of this function:

   ```
   function calculateMinOps(currentLength, clipboardLength):
       // Base cases
       if currentLength == targetLength:
           return 0
       if currentLength > targetLength:
           return VERY_LARGE_NUMBER

       // Check memoized result
       if cache[currentLength][clipboardLength] is not sentinel:
           return cache[currentLength][clipboardLength]

       // Option 1: Paste
       pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength)

       // Option 2: Copy All and Paste
       copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength)

       // Choose the better option
       result = min(pasteOption, copyPasteOption)

       // Memoize the result
       cache[currentLength][clipboardLength] = result

       return result
   ```

   Let's break this down further:

   a. We first check our base cases. This is crucial for stopping our recursion.

   b. We then check if we've already calculated the result for this state. If so, we return the memoized result immediately. This is the key to our optimization.

   c. If we haven't calculated this state before, we explore our two options:
      - Paste: We add `clipboardLength` to our `currentLength` and make a recursive call. This costs 1 operation.
      - Copy and Paste: We double our `currentLength` and update our `clipboardLength`. This costs 2 operations (1 for copy, 1 for paste).

   d. We take the minimum of these two options. This ensures we're always choosing the path with fewer operations.

   e. Before returning, we store our result in the cache. This is crucial for our memoization strategy.

5. **Initial Call**

   We start our process with `calculateMinOps(1, 1)`. This represents our initial state: one 'A' on the screen, and one 'A' in the clipboard.

6. **Recursion and Memoization in Action**

   As our function runs, it will build up solutions to subproblems and store them in the cache. For example, it might calculate the best way to get from 2 'A's to the target, then later reuse that result when it encounters the same subproblem through a different path.

7. **Result Interpretation**

   The value returned by our initial call to `calculateMinOps(1, 1)` is the minimum number of operations needed to reach the target length from our starting state of one 'A'.

This approach combines the intuitive nature of recursion with the efficiency of dynamic programming. We're essentially building a solution from the top (our target) down to the base cases, but we're being smart about it by remembering what we've calculated to avoid redundant work.

The use of memoization transforms what would otherwise be an exponential time algorithm into a polynomial one. We're trading space (in the form of our cache) for time, which is often a worthwhile trade-off.

This method also has the advantage of being relatively easy to understand and implement, while still being highly efficient. It closely mirrors how we might think about the problem naturally, making it a great example of how algorithmic thinking can optimize our intuitive problem-solving processes.


### Complexity
- **Time complexity: $O(n^2)$**
In the worst case, we might need to fill out our entire cache. The cache has dimensions n \xD7 (n/2), where n is our target length. For each cell, we're doing constant time operations. Therefore, our time complexity is O(n * n/2) = O(n^2).
- **Space complexity: $O(n^2)$**
Our cache is a 2D array with dimensions n \xD7 (n/2), so our space complexity is also O(n^2). Additionally, the recursion itself will use stack space, but this will be at most O(n) deep, which is dominated by the O(n^2) space of our cache.

### Code 

```Java []
class Solution {
    private int targetLength;
    private int[][] cache;

    public int minSteps(int targetLength) {
        if (targetLength == 1) return 0;
        this.targetLength = targetLength;
        this.cache = new int[targetLength + 1][targetLength / 2 + 1];
        return 1 + calculateMinOps(1, 1);
    }

    private int calculateMinOps(int currentLength, int clipboardLength) {
        if (currentLength == targetLength) return 0;
        if (currentLength > targetLength) return Integer.MAX_VALUE / 2; 

        if (cache[currentLength][clipboardLength] != 0) {
            return cache[currentLength][clipboardLength];
        }

        int pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength);
        int copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength);

        int result = Math.min(pasteOption, copyPasteOption);
        cache[currentLength][clipboardLength] = result;

        return result;
    }
}
```
```C++ []
class Solution {
private:
    int targetLength;
    vector<vector<int>> cache;

    int calculateMinOps(int currentLength, int clipboardLength) {
        if (currentLength == targetLength) return 0;
        if (currentLength > targetLength) return INT_MAX / 2;

        if (cache[currentLength][clipboardLength] != -1) {
            return cache[currentLength][clipboardLength];
        }

        int pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength);
        int copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength);

        int result = min(pasteOption, copyPasteOption);
        cache[currentLength][clipboardLength] = result;

        return result;
    }

public:
    int minSteps(int n) {
        if (n == 1) return 0;
        targetLength = n;
        cache = vector<vector<int>>(n + 1, vector<int>(n / 2 + 1, -1));
        return 1 + calculateMinOps(1, 1);
    }
};

```
```Python []
class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1:
            return 0
        
        self.target_length = n
        self.cache = [[-1] * (n // 2 + 1) for _ in range(n + 1)]
        
        def calculate_min_ops(current_length: int, clipboard_length: int) -> int:
            if current_length == self.target_length:
                return 0
            if current_length > self.target_length:
                return float('inf')
            
            if self.cache[current_length][clipboard_length] != -1:
                return self.cache[current_length][clipboard_length]
            
            paste_option = 1 + calculate_min_ops(current_length + clipboard_length, clipboard_length)
            copy_paste_option = 2 + calculate_min_ops(current_length * 2, current_length)
            
            result = min(paste_option, copy_paste_option)
            self.cache[current_length][clipboard_length] = result
            return result
        
        return 1 + calculate_min_ops(1, 1)

```

```C# []
using System;

public class Solution
{
    private int targetLength;
    private int[,] cache;

    public int MinSteps(int targetLength)
    {
        if (targetLength == 1) return 0;
        this.targetLength = targetLength;
        this.cache = new int[targetLength + 1, targetLength / 2 + 1];
        return 1 + CalculateMinOps(1, 1);
    }

    private int CalculateMinOps(int currentLength, int clipboardLength)
    {
        if (currentLength == targetLength) return 0;
        if (currentLength > targetLength) return int.MaxValue / 2; 

        if (cache[currentLength, clipboardLength] != 0)
        {
            return cache[currentLength, clipboardLength];
        }

        int pasteOption = 1 + CalculateMinOps(currentLength + clipboardLength, clipboardLength);
        int copyPasteOption = 2 + CalculateMinOps(currentLength * 2, currentLength);

        int result = Math.Min(pasteOption, copyPasteOption);
        cache[currentLength, clipboardLength] = result;

        return result;
    }
}


```
```kotlin []
class Solution {
    private var targetLength: Int = 0
    private lateinit var cache: Array<IntArray>

    fun minSteps(targetLength: Int): Int {
        if (targetLength == 1) return 0
        this.targetLength = targetLength
        this.cache = Array(targetLength + 1) { IntArray(targetLength / 2 + 1) }
        return 1 + calculateMinOps(1, 1)
    }

    private fun calculateMinOps(currentLength: Int, clipboardLength: Int): Int {
        if (currentLength == targetLength) return 0
        if (currentLength > targetLength) return Int.MAX_VALUE / 2 

        if (cache[currentLength][clipboardLength] != 0) {
            return cache[currentLength][clipboardLength]
        }

        val pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength)
        val copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength)

        val result = minOf(pasteOption, copyPasteOption)
        cache[currentLength][clipboardLength] = result

        return result
    }
}



```
```Go []
func minSteps(n int) int {
    if n == 1 {
        return 0
    }
    
    cache := make([][]int, n+1)
    for i := range cache {
        cache[i] = make([]int, n/2+1)
        for j := range cache[i] {
            cache[i][j] = -1
        }
    }
    
    var calculateMinOps func(int, int) int
    calculateMinOps = func(currentLength, clipboardLength int) int {
        if currentLength == n {
            return 0
        }
        if currentLength > n {
            return 1<<31 - 1 // Max int to avoid overflow
        }
        
        if cache[currentLength][clipboardLength] != -1 {
            return cache[currentLength][clipboardLength]
        }
        
        pasteOption := 1 + calculateMinOps(currentLength+clipboardLength, clipboardLength)
        copyPasteOption := 2 + calculateMinOps(currentLength*2, currentLength)
        
        result := min(pasteOption, copyPasteOption)
        cache[currentLength][clipboardLength] = result
        return result
    }
    
    return 1 + calculateMinOps(1, 1)
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
    pub fn min_steps(n: i32) -> i32 {
        if n == 1 {
            return 0;
        }
        
        let n = n as usize;
        let mut cache = vec![vec![-1; n / 2 + 1]; n + 1];
        
        fn calculate_min_ops(current_length: usize, clipboard_length: usize, n: usize, cache: &mut Vec<Vec<i32>>) -> i32 {
            if current_length == n {
                return 0;
            }
            if current_length > n {
                return i32::MAX / 2;
            }
            
            if cache[current_length][clipboard_length] != -1 {
                return cache[current_length][clipboard_length];
            }
            
            let paste_option = 1 + calculate_min_ops(current_length + clipboard_length, clipboard_length, n, cache);
            let copy_paste_option = 2 + calculate_min_ops(current_length * 2, current_length, n, cache);
            
            let result = paste_option.min(copy_paste_option);
            cache[current_length][clipboard_length] = result;
            result
        }
        
        1 + calculate_min_ops(1, 1, n, &mut cache)
    }
}

```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) return 0;
    
    const cache = Array(n + 1).fill().map(() => Array(Math.floor(n / 2) + 1).fill(-1));
    
    const calculateMinOps = (currentLength, clipboardLength) => {
        if (currentLength === n) return 0;
        if (currentLength > n) return Number.MAX_SAFE_INTEGER / 2;
        
        if (cache[currentLength][clipboardLength] !== -1) {
            return cache[currentLength][clipboardLength];
        }
        
        const pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength);
        const copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength);
        
        const result = Math.min(pasteOption, copyPasteOption);
        cache[currentLength][clipboardLength] = result;
        return result;
    };
    
    return 1 + calculateMinOps(1, 1);
};

```
```TypeScript []
function minSteps(n: number): number {
    if (n === 1) return 0; // Base case: No steps needed if the target is 1

    const cache = new Map<string, number>(); // Map for memoization

    function calculateMinOps(currentLength: number, clipboardLength: number): number {
        if (currentLength === n) return 0;
        if (currentLength > n) return Number.MAX_SAFE_INTEGER / 2;

        const key = `${currentLength},${clipboardLength}`;
        if (cache.has(key)) {
            return cache.get(key)!;
        }

        // Option 1: Paste only
        const pasteOption = 1 + calculateMinOps(currentLength + clipboardLength, clipboardLength);
        
        // Option 2: Copy and Paste
        const copyPasteOption = 2 + calculateMinOps(currentLength * 2, currentLength);

        // Compute and store the result in cache
        const result = Math.min(pasteOption, copyPasteOption);
        cache.set(key, result);

        return result;
    }

    return 1 + calculateMinOps(1, 1);
}


```
---

### EXAMPLES



### Example 1: n = 3

**Initial Setup:**
- Current number of 'A's on the screen: 1
- Clipboard content: 1 'A'
- Target: 3 'A'
- Cache: Initialized to `cache[n+1][n/2+1]` with sentinel values.

| Step | Current Length | Clipboard Length | Cache Hit | Paste Option | Copy-Paste Option | Result | Cache Update | Explanation |
|------|----------------|------------------|-----------|--------------|-------------------|--------|--------------|-------------|
| 1    | 1              | 1                | No        | `calculateMinOps(2, 1)` | `calculateMinOps(2, 1)` | 3      | `cache[1][1] = 3` | We start with 1 'A' on the screen and 1 'A' in the clipboard. |
| 2    | 2              | 1                | No        | `calculateMinOps(3, 1)` | `calculateMinOps(4, 2)` | 1      | `cache[2][1] = 1` | We try pasting and copying-pasting, pasting leads to the target. |
| 3    | 3              | 1                | No        | Base Case    | -                 | 0      | -            | We've reached our target, so we return 0. |
| 4    | 4              | 2                | Yes       | -            | -                 | -      | -            | Overshot the target, this path is invalid. |
| 5    | 3              | 1                | Yes       | -            | -                 | 1      | -            | The cached value from step 3 is used to avoid recomputation. |

**Explanation:**
- **Step 1:** We start with 1 'A' on the screen and 1 'A' in the clipboard. We consider both pasting and copying-pasting, storing the result (3 operations) in the cache.
- **Step 2:** From 2 'A's, pasting results in reaching 3 'A's, which matches our target, so we store this result (1 operation) in the cache.
- **Step 3:** Upon reaching 3 'A's, we hit the base case and return 0, indicating no more operations are needed.
- **Step 4:** The attempt to double the length leads to 4 'A's, overshooting the target, so we discard this path.
- **Step 5:** Using the cached result from step 3 allows us to avoid recomputation and directly return 1.

**Final Result:** The minimum steps required are 3.


### Step-by-Step Execution for n = 3

**Initial State:**
- Current Length: 1
- Clipboard Length: 1
- Target: 3
- Cache: `cache[4][2]` initialized with sentinel values.

#### Step 1: Call `minSteps(

1, 1)`
- The function is called with 1 'A' on the screen and 1 'A' in the clipboard.
- We proceed to recursively explore both options: pasting and copy-pasting.

#### Step 2: Explore "Paste" Option
- We first paste, which leads to `calculateMinOps(2, 1)`.
- Now, we have 2 'A's on the screen and 1 'A' in the clipboard.
- We store this intermediate result in the cache.

#### Step 3: Explore "Paste" Again
- From 2 'A's, we paste again, leading to `calculateMinOps(3, 1)`.
- Now, we have 3 'A's on the screen, matching our target.
- We store this intermediate result in the cache.

#### Step 4: Base Case
- Since the current length is equal to the target, we return 0, indicating no more operations are needed.

#### Step 5: Backtrack and Use Cached Results
- We backtrack to the previous steps, using the cached results to avoid redundant calculations.
- The total operations are 3: 1 (initial step) + 1 (paste to 2 'A's) + 1 (paste to 3 'A's).




### Example 2: n = 1

**Initial Setup:**
- Current number of 'A's on the screen: 1
- Clipboard content: 1 'A'
- Target: 1 'A'
- Cache: Initialized to `cache[n+1][n/2+1]` with sentinel values.

| Step | Current Length | Clipboard Length | Cache Hit | Paste Option | Copy-Paste Option | Result | Cache Update | Explanation |
|------|----------------|------------------|-----------|--------------|-------------------|--------|--------------|-------------|
| 1    | 1              | 1                | No        | Base Case    | -                 | 0      | -            | We start with 1 'A' on the screen and 1 'A' in the clipboard. |

**Explanation:**
- **Step 1:** Since the current length already matches the target, we return 0, indicating no operations are needed. No further recursive calls or cache updates are required.

**Final Result:** The minimum steps required are 0.

