# Three Solutions: Real Recursion, Equation Recursion and Bottom Up Loop

**Author:** gustilc
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/5637861/](https://leetcode.com/problems/paint-fence/solutions/5637861/)

---

# Intuition
- Real Recursion: Let's call all the option recursivelly until position $n$
- Equation Recursion: Let's write an equation that is base on the one deeper option.
- Bottom Up Loop: Using the equation above let's start from the bottom and use it in a loop where we update the current value and the next previous one.

# Approach
- Real Recursion: Uses a function that get the two previous posts and run in a loop calling to the same function, next postion for all the possible next colors beside the previous color in case that the one before was equal.
- Equation Recursion: Define a equation that is base in the how much posibilities ara allows in the next level. I also added memoization for speed reasons and I got the faster solution so far.
- Bottom Up Loop: Instead of memoization like before, we save the previous two values and use it from the next option when $n$ is $n + 1$ than before.

# Complexity
- Time complexity:
    - Real Recursion: $O(n^2)$
    - Equation Recursion: $O(n)$
    - Bottom Up Loop: $O(n)$

- Space complexity:
    - Real Recursion: $O(n^2)$
    - Equation Recursion: $O(n)$
    - Bottom Up Loop: $O(1)$

# Code
```
class SolutionRecursion {
    private var n = 0
    private var k = 0

    private func numWays( pos: Int, prevPrev: Int, prev: Int) -> Int{
        if pos == n { return 1 }
        else {
            var counter = 0
            for color in 0..<k {
                if prevPrev == prev, prev == color { continue }
                let count = numWays( pos:pos+1, prevPrev:prev, prev:color)
                counter += count }
            return counter } }

    private func numWaysPoss2() -> Int {
        return numWays(pos:2, prevPrev:0, prev:0) + 
            numWays(pos:2, prevPrev:0, prev:1) * (k-1) }

    func numWays(_ n: Int, _ k: Int) -> Int {
        if n == 0 { return 0 }
        if n == 1 { return k }
        if n == 2 { return k * k }
        self.n = n
        self.k = k
        return numWaysPoss2() * k }
}    

class SolutionMemoization {   
    var memoization: [Int:Int] = .init()
    func numWays(_ n: Int, _ k: Int) -> Int {
        if let ways = memoization[n] { return ways }
        if n == 1 { memoization[n] = k; return memoization[n]! }
        if n == 2 { memoization[n] = k * k; return memoization[n]! }
        // using different color at i = (n-1) we have (k - 1) times all options at (n-1)
        // using same      color at i = (n-1) we have  one    time  all options at (n-1)
        // => but using the same color at i = (n-1) means that at (n-2) we can use all
        //    the option less one for the color used at i equal to n and (n-1)
        //    using same color at i = (n-1) we have (k - 1) times all options at (n-2)
        // ==> (k-1) * numWaysMath(n-1,k) + (k-1) * numWaysMath(n-2)
        //    (k-1) * ( numWaysMath(n-1, k) + numWaysMath(n-2,k) ) 
        // With Memoization:
        memoization[n] = 
            (k-1) * ( numWays(n-1, k) + numWays(n-2,k) ) 
        return memoization[n]! 
        }
}

class SolutionBottomUp {   
    func numWays(_ n: Int, _ k: Int) -> Int {
        if n == 1 { return k }
        var prevPrevPos = k
        var prevPos = k * k
        for i in 2..<n {
            let next = (k - 1) * (prevPos + prevPrevPos)
            prevPrevPos = prevPos
            prevPos = next }
        return prevPos }
}

class Solution {
    func numWays(_ n: Int, _ k: Int) -> Int {
        //return SolutionRecursion().numWays(n,k)
        //return SolutionMemoization().numWays(n,k)
        return SolutionBottomUp().numWays(n,k)
    }
}

```