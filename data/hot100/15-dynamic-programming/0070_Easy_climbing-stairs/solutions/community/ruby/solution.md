# Ruby six approaches

**Author:** surferbv
**Votes:** 6
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/2775347/](https://leetcode.com/problems/climbing-stairs/solutions/2775347/)

---

```
# 70.climbing_stairs.rb
# @param {Integer} n
# @return {Integer}
#
# recursion using brute force approach
#
# time: O(2^n) the size of the recursion tree is 2^n
#
# space: O(n) where n is the height or depth of the three.
#
# climb_stair(i,n) = (i + 1, n) = climb_stair(i + 2, n)
def climb_stairs(n)
    return climb_stair(0, n) # helper function
 end
 
 # where i is the current step and n is the destination step
 def climb_stair(i, n)
 
     # base case
     # if i > n we walked over and we return 0
     return 0 if i > n 
     # if n is 1 we can only take one step thus return 1
     return 1 if i == n 
 
     # recursive case
     # we climb 1 step and climb 2 steps
     return climb_stair(i + 1, n) + climb_stair(i + 2, n)
 end
```
```
 
 # recursion with memoiztion (i.e. dynamic programming with array)
 #
 # time: O(n) we reduce the size of the the tree by n
 #
 # space: O(n) the depth of the three
 #
 def climb_stairs(n)
     memo = Array.new(n + 1, 0)
     return climb_stair(0, n, memo) 
 end
  
 def climb_stair(i, n, memo)
     return 0 if i > n 
     return 1 if i == n 
     return memo[i] if memo[i] > 0
 
     memo[i] = climb_stair(i + 1, n, memo) + climb_stair(i + 2, n, memo)
     return memo[i]
 end
```
```
 
 # recursion with memoiztion (i.e. dynamic programming with hash)
 #
 # time: O(n) we reduce the size of the the tree by n
 #
 # space: O(n) the depth of the three
 #
 def climb_stairs(n)
     memo = {}
     return climb_stair(0, n, memo) 
 end
  
  def climb_stair(i, n, memo)
     return 0 if i > n 
     return 1 if i == n 
     return memo[i] if memo[i].to_i > 0
 
     memo[i] = climb_stair(i + 1, n, memo) + climb_stair(i + 2, n, memo)
     return memo[i]
 end
```
```
 
 # with memoiztion without recursion
 #
 # time: O(n) we iterate over one array.
 #
 # space: O(n) array of size n.
 #
 # note: credit to other programmer for this solution
 def climb_stairs(n)
     return 1 if n == 1
 
     memo    = Array.new(n + 1, 0)
     memo[1] = 1
     memo[2] = 2
 
     for i in (3..n)
         memo[i] = memo[i - 1] + memo[i - 2]
     end
 
     return memo[n]
 end
```
```
 
 # fibonacci number approach
 #
 # time: O(n) single loop
 #
 # space: O(1) no memory space is allocated
 #
 # note: credit to other programmer for this solution
 def climb_stairs(n)
     return 1 if n == 1
 
     first   = 1
     second  = 2
 
     for i in (3..n)
         third   = first + second
         first   = second
         second  = third
     end
     
     return second 
 end
```
```
 
 # fibonacci formula
 #
 # time: O(log n) raising it to power of x takes log n time.
 #
 # space: O(1) constant space.
 #
 # note: credit to other programmer for this solution 
 def climb_stairs(n)
     sqrt5   = Math::sqrt(5)
     phi     = (1 + sqrt5) / 2.0
     psi     = (1 - sqrt5) / 2.0
 
     return (((phi ** (n + 1)) - (psi ** (n + 1))) / sqrt5).to_i
 end
```