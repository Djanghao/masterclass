# Ruby - Bottom Up DP with comments

**Author:** energetic-soda
**Votes:** 4
**Link:** [https://leetcode.com/problems/coin-change/solutions/2170996/](https://leetcode.com/problems/coin-change/solutions/2170996/)

---

```ruby
# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}
def coin_change(coins, amount)
    # This memo will hold the answers to all of the subproblems,
    # memo[i] is the best answer for amount: i.
    memo = Array.new(amount + 1)
    
    # The best change you can make for amount: 0 is 0 coins.
    memo[0] = 0
    
    # We will go through each sub problem, starting with 0 (which we 
    # will skip because we already have the answer to 0).
    memo.each_index do |sub_problem|  
      next if sub_problem == 0
      
      # We can try using each coin, which gives us the remainder 
      # (sub_problem - coin), which we should have already solved. The  
      # answer to memo[i] should be the minimum of (1 + memo[i - coin])
      # for each coin.
      memo[sub_problem] = coins.map do |coin|
        # Note that some coins will over-shoot us, so we skip them.
        next if (sub_problem - coin) < 0 
        # Some sub_problems may not have a solution, so we skip them too.
        next if memo[sub_problem - coin].nil?
        
        1 + memo[sub_problem - coin]
      end.compact.min
    end
    
    # If there was no way to answer the problem, we return -1
    memo[amount] || -1
end
```