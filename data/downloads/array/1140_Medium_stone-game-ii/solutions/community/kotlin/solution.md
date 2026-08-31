# Dynamic Programming with O(n^3) TC  | Multiple Languages

**Author:** Solution_Assist
**Votes:** 36
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/5662924/](https://leetcode.com/problems/stone-game-ii/solutions/5662924/)

---

### Intuition

Since We're playing a game with piles of stones, and we want to figure out how many stones Alice can snag. It's not as simple as just grabbing everything in sight - we've got to think ahead.

First off, we need to consider that Bob's playing too. He's not just going to let Alice take whatever she wants. So for every move we think about for Alice, we've got to wonder, "What would Bob do next?"

Now, there's this interesting rule about how many piles you can take. At first, it's just one or two. But then it can increase based on what the previous player took. It's like the game is ramping up as it goes on. This changing number of piles you can take - let's call it M - seems really important. It's like the game is evolving with each turn.

So how do we approach this? Well, we could try to map out every single possible move Alice and Bob could make. But that sounds like it would take forever, doesn't it? There's got to be a smarter way.

What if we tried to break it down? Instead of looking at the whole game at once, what if we looked at smaller parts of it? Like, if we knew the best move for the last few piles, could that help us figure out the best move earlier in the game?

And here's another thought - do we really need to recalculate everything every time? If we've already figured out the best move for a certain situation, couldn't we just remember that and use it again if we come across the same situation?

Also, it might be helpful to know how many stones are left at any point in the game. Instead of counting them up each time, what if we had a way to quickly know the sum of stones from any pile to the end?

As we think about Alice's strategy, we need to remember that she's not just trying to get the most stones right now. Sometimes, taking fewer stones might set her up for a bigger win later. It's like we need to think several moves ahead.

And what about Bob? We're assuming he's pretty smart too. So every time Alice makes a move, we need to assume Bob's going to make the best possible counter-move. It's like a constant back-and-forth, with each player trying to outsmart the other.

This is starting to feel like a complex puzzle, isn't it? We're not just playing the game - we're trying to understand all its possible outcomes. We're thinking about how each move affects future moves, how to remember what we've already figured out, and how to consider both players' best strategies.

By thinking through all these aspects, we're building up our understanding of the game. We're not just looking for a quick answer, but really trying to grasp the underlying strategy. It's like we're becoming master Stone Game strategists, piecing together the perfect plan for Alice to come out on top!

### Approach

We'll break it down step by step

**1. Precomputing Suffix Sums:**
   First things first, we're going to create a cheat sheet of sorts. For each pile, we'll calculate the total number of stones from that pile to the end. This is our suffix sum array.
```pseudo
suffixSums = new array of size (totalPiles + 1)
for i from totalPiles - 1 down to 0:
    suffixSums[i] = suffixSums[i + 1] + piles[i]
```
   - Start from the last pile.
   - For each pile, add its stones to the sum of all piles after it.
   - Store these sums in an array.

   Why? This lets us quickly know how many stones are left at any point in the game without having to add them up each time.




**2. Setting Up the Recursive Function:**
   We'll create a function that represents Alice's turn. This function will:
```pseudo
function maxStonesAliceCanGet(suffixSums, m, currentPile, memo):
    // Base cases and memoization handled here...
    // Explore all possible moves for Alice...
    return maxStones
```
   - Take in the current state of the game (which pile we're at, what M is).
   - Return the maximum number of stones Alice can get from this point onwards.

**3. Base Case for Recursion:**
   Before we dive into the recursive logic, we need to know when to stop. There are two base cases to consider in the recursive function:
```pseudo
if currentPile >= totalPiles:
    return 0

if currentPile + 2 * m >= totalPiles:
    return suffixSums[currentPile]
```
   - If we're at or past the end of the piles, return 0 (no stones left).
   - If we can take all remaining piles in one go (currentPile + 2*M >= totalPiles), 
     return all remaining stones.

**4. Memoization Setup:**
   To avoid recalculating the same scenarios:
```pseudo
if memo[currentPile][m] != 0:
    return memo[currentPile][m]
```
   - Create a 2D array to store results.
   - Before calculating anything, check if we've seen this exact scenario before.
   - If we have, return the stored result.

**5. Exploring All Possible Moves:**
   Now for the meat of the algorithm:
```pseudo
maxStones = 0
for x from 1 to 2 * m:
    currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(suffixSums, max(m, x), currentPile + x, memo)
    maxStones = max(maxStones, currentStones)
```
   - Initialize a variable to keep track of the max stones Alice can get.
   - Loop through all possible moves (1 to 2*M piles).
   - For each move:
     a. Calculate how many stones Alice gets for this move.
     b. Recursively calculate how many stones Bob can get optimally after this move.
     c. Alice's gain is the current stones minus Bob's optimal play.
   - Keep track of the move that gives Alice the most stones.

**6. The Recursive Part:**
   When we calculate Bob's optimal play, we're actually calling our function again, but from Bob's perspective. This alternating calculation between Alice and Bob is the key to finding the optimal strategy for both players.

**7. Updating M:**
   After each move, we update M to be the larger of:
```pseudo
nextM = max(m, x)
```
   - The current M
   - The number of piles just taken
   This reflects the game rule of M increasing as larger moves are made.

**8. Memoizing the Result:**
   After figuring out the best move for this scenario:
```pseudo
memo[currentPile][m] = maxStones
return maxStones
```
   - Store the result in our memoization array.
   - This way, if we encounter the same game state again, we can just look it up.

**9. Returning the Result:**
   The function returns the maximum number of stones Alice can get from the current game state.

Starting the Game
To kick everything off:
```pseudo
return maxStonesAliceCanGet(suffixSums, 1, 0, memo)
```

- Call our recursive function with the initial game state.
- This means starting at the first pile (index 0) with M = 1.

This approach considers every possible move Alice and Bob could make. By always assuming the opponent will play optimally, we find Alice's best strategy.





### Complexity

- **Time complexity: $O(n^3)$**
$O(n * m^2)$ where n is the number of piles and m is the maximum value of M.
  
  Since:
  - We have n different starting positions (one for each pile).
  - For each position, $M$ can range from 1 to potentially $n/2$ (in the worst case).
  - For each combination of position and M, we explore up to 2M different moves.
  - Thanks to memoization, we only calculate each state once.
  
  So, in the worst case, we're looking at $n * (n/2) * n = O(n^3)$ operations. However, in practice, M is often much smaller than n/2, making the actual runtime closer to $O(n^2)$ in many cases *that's why Leetcodes engine might show $O(n^2)$ of time complexity.*

- **Space complexity: $O(n^2)$**
  
  We're using:
  - A 1D array for suffix sums: $O(n)$
  - A 2D memoization array: $O(n^2)$ in the worst case (when $M$ can grow up to $n/2$)
  - Recursive call stack: $O(n)$ in the worst case
  
  The dominant factor here is the memoization array, giving us an overall space complexity of $O(n^2)$.





### Code 
```java []
class Solution {
    public int stoneGameII(int[] piles) {
        int totalPiles = piles.length;
        int[] suffixSums = new int[totalPiles + 1];
        for (int i = totalPiles - 1; i >= 0; i--) {
            suffixSums[i] = suffixSums[i + 1] + piles[i];
        }
        return maxStonesAliceCanGet(suffixSums, 1, 0, new int[totalPiles][totalPiles + 1]);
    }

    private int maxStonesAliceCanGet(int[] suffixSums, int m, int currentPile, int[][] memo) {
        int totalPiles = suffixSums.length - 1;
        
        if (currentPile >= totalPiles) return 0;
        
        if (currentPile + 2 * m >= totalPiles) {
            return suffixSums[currentPile];
        }
        
        if (memo[currentPile][m] != 0) return memo[currentPile][m];
        
        int maxStones = 0;
        
        for (int x = 1; x <= 2 * m; x++) {
            int currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(suffixSums, Math.max(m, x), currentPile + x, memo);
            maxStones = Math.max(maxStones, currentStones);
        }
        
        memo[currentPile][m] = maxStones;
        return maxStones;
    }
}

```

```python []
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        total_piles = len(piles)
        suffix_sums = [0] * (total_piles + 1)
        for i in range(total_piles - 1, -1, -1):
            suffix_sums[i] = suffix_sums[i + 1] + piles[i]
        
        memo = [[0] * (total_piles + 1) for _ in range(total_piles)]
        
        def max_stones_alice_can_get(m: int, current_pile: int) -> int:
            if current_pile >= total_piles:
                return 0
            
            if current_pile + 2 * m >= total_piles:
                return suffix_sums[current_pile]
            
            if memo[current_pile][m] != 0:
                return memo[current_pile][m]
            
            max_stones = 0
            
            for x in range(1, 2 * m + 1):
                current_stones = suffix_sums[current_pile] - max_stones_alice_can_get(max(m, x), current_pile + x)
                max_stones = max(max_stones, current_stones)
            
            memo[current_pile][m] = max_stones
            return max_stones
        
        return max_stones_alice_can_get(1, 0)

```
```C# []

public class Solution {
    public int StoneGameII(int[] piles) {
        int totalPiles = piles.Length;
        int[] suffixSums = new int[totalPiles + 1];
        for (int i = totalPiles - 1; i >= 0; i--) {
            suffixSums[i] = suffixSums[i + 1] + piles[i];
        }
        return MaxStonesAliceCanGet(suffixSums, 1, 0, new int[totalPiles, totalPiles + 1]);
    }

    private int MaxStonesAliceCanGet(int[] suffixSums, int m, int currentPile, int[,] memo) {
        int totalPiles = suffixSums.Length - 1;
        if (currentPile >= totalPiles) return 0;
        if (currentPile + 2 * m >= totalPiles) {
            return suffixSums[currentPile];
        }
        if (memo[currentPile, m] != 0) return memo[currentPile, m];

        int maxStones = 0;
        for (int x = 1; x <= 2 * m; x++) {
            int currentStones = suffixSums[currentPile] - MaxStonesAliceCanGet(suffixSums, Math.Max(m, x), currentPile + x, memo);
            maxStones = Math.Max(maxStones, currentStones);
        }
        memo[currentPile, m] = maxStones;
        return maxStones;
    }
}

```
```go []
func stoneGameII(piles []int) int {
    totalPiles := len(piles)
    suffixSums := make([]int, totalPiles+1)
    for i := totalPiles - 1; i >= 0; i-- {
        suffixSums[i] = suffixSums[i+1] + piles[i]
    }
    
    memo := make([][]int, totalPiles)
    for i := range memo {
        memo[i] = make([]int, totalPiles+1)
    }
    
    var maxStonesAliceCanGet func(int, int) int
    maxStonesAliceCanGet = func(m, currentPile int) int {
        if currentPile >= totalPiles {
            return 0
        }
        
        if currentPile + 2*m >= totalPiles {
            return suffixSums[currentPile]
        }
        
        if memo[currentPile][m] != 0 {
            return memo[currentPile][m]
        }
        
        maxStones := 0
        
        for x := 1; x <= 2*m; x++ {
            currentStones := suffixSums[currentPile] - maxStonesAliceCanGet(max(m, x), currentPile + x)
            maxStones = max(maxStones, currentStones)
        }
        
        memo[currentPile][m] = maxStones
        return maxStones
    }
    
    return maxStonesAliceCanGet(1, 0)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```

```cpp []
class Solution {
public:
    int stoneGameII(vector<int>& piles) {
        int totalPiles = piles.size();
        vector<int> suffixSums(totalPiles + 1, 0);
        for (int i = totalPiles - 1; i >= 0; i--) {
            suffixSums[i] = suffixSums[i + 1] + piles[i];
        }
        
        vector<vector<int>> memo(totalPiles, vector<int>(totalPiles + 1, 0));
        
        function<int(int,int)> maxStonesAliceCanGet = [&](int m, int currentPile) -> int {
            if (currentPile >= totalPiles) return 0;
            
            if (currentPile + 2 * m >= totalPiles) {
                return suffixSums[currentPile];
            }
            
            if (memo[currentPile][m] != 0) return memo[currentPile][m];
            
            int maxStones = 0;
            
            for (int x = 1; x <= 2 * m; x++) {
                int currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(max(m, x), currentPile + x);
                maxStones = max(maxStones, currentStones);
            }
            
            memo[currentPile][m] = maxStones;
            return maxStones;
        };
        
        return maxStonesAliceCanGet(1, 0);
    }
};

```
```Kotlin []
class Solution {
    fun stoneGameII(piles: IntArray): Int {
        val totalPiles = piles.size
        val suffixSums = IntArray(totalPiles + 1)
        for (i in totalPiles - 1 downTo 0) {
            suffixSums[i] = suffixSums[i + 1] + piles[i]
        }
        return maxStonesAliceCanGet(suffixSums, 1, 0, Array(totalPiles) { IntArray(totalPiles + 1) })
    }

    private fun maxStonesAliceCanGet(suffixSums: IntArray, m: Int, currentPile: Int, memo: Array<IntArray>): Int {
        val totalPiles = suffixSums.size - 1
        if (currentPile >= totalPiles) return 0
        if (currentPile + 2 * m >= totalPiles) {
            return suffixSums[currentPile]
        }
        if (memo[currentPile][m] != 0) return memo[currentPile][m]

        var maxStones = 0
        for (x in 1..2 * m) {
            val currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(suffixSums, maxOf(m, x), currentPile + x, memo)
            maxStones = maxOf(maxStones, currentStones)
        }
        memo[currentPile][m] = maxStones
        return maxStones
    }
}

```

```rust []
impl Solution {
    pub fn stone_game_ii(piles: Vec<i32>) -> i32 {
        let total_piles = piles.len();
        let mut suffix_sums = vec![0; total_piles + 1];
        for i in (0..total_piles).rev() {
            suffix_sums[i] = suffix_sums[i + 1] + piles[i];
        }
        
        let mut memo = vec![vec![0; total_piles + 1]; total_piles];
        
        fn max_stones_alice_can_get(m: usize, current_pile: usize, suffix_sums: &Vec<i32>, memo: &mut Vec<Vec<i32>>) -> i32 {
            let total_piles = suffix_sums.len() - 1;
            
            if current_pile >= total_piles {
                return 0;
            }
            
            if current_pile + 2 * m >= total_piles {
                return suffix_sums[current_pile];
            }
            
            if memo[current_pile][m] != 0 {
                return memo[current_pile][m];
            }
            
            let mut max_stones = 0;
            
            for x in 1..=2*m {
                let current_stones = suffix_sums[current_pile] - max_stones_alice_can_get(m.max(x), current_pile + x, suffix_sums, memo);
                max_stones = max_stones.max(current_stones);
            }
            
            memo[current_pile][m] = max_stones;
            max_stones
        }
        
        max_stones_alice_can_get(1, 0, &suffix_sums, &mut memo)
    }
}

```

```javascript []
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const totalPiles = piles.length;
    const suffixSums = new Array(totalPiles + 1).fill(0);
    for (let i = totalPiles - 1; i >= 0; i--) {
        suffixSums[i] = suffixSums[i + 1] + piles[i];
    }
    
    const memo = Array.from({ length: totalPiles }, () => new Array(totalPiles + 1).fill(0));
    
    const maxStonesAliceCanGet = (m, currentPile) => {
        if (currentPile >= totalPiles) return 0;
        
        if (currentPile + 2 * m >= totalPiles) {
            return suffixSums[currentPile];
        }
        
        if (memo[currentPile][m] !== 0) return memo[currentPile][m];
        
        let maxStones = 0;
        
        for (let x = 1; x <= 2 * m; x++) {
            const currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(Math.max(m, x), currentPile + x);
            maxStones = Math.max(maxStones, currentStones);
        }
        
        memo[currentPile][m] = maxStones;
        return maxStones;
    };
    
    return maxStonesAliceCanGet(1, 0);
};

```
```TypeScript []
function stoneGameII(piles: number[]): number {
    const totalPiles = piles.length;
    const suffixSums = new Array(totalPiles + 1).fill(0);
    for (let i = totalPiles - 1; i >= 0; i--) {
        suffixSums[i] = suffixSums[i + 1] + piles[i];
    }
    const memo: number[][] = Array.from({ length: totalPiles }, () => new Array(totalPiles + 1).fill(0));
    return maxStonesAliceCanGet(suffixSums, 1, 0, memo);
}

function maxStonesAliceCanGet(suffixSums: number[], m: number, currentPile: number, memo: number[][]): number {
    const totalPiles = suffixSums.length - 1;
    if (currentPile >= totalPiles) return 0;
    if (currentPile + 2 * m >= totalPiles) {
        return suffixSums[currentPile];
    }
    if (memo[currentPile][m] !== 0) return memo[currentPile][m];

    let maxStones = 0;
    for (let x = 1; x <= 2 * m; x++) {
        const currentStones = suffixSums[currentPile] - maxStonesAliceCanGet(suffixSums, Math.max(m, x), currentPile + x, memo);
        maxStones = Math.max(maxStones, currentStones);
    }
    memo[currentPile][m] = maxStones;
    return maxStones;
}
```
