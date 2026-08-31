# Elixir O(n) solution

**Author:** NerevarSoul
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4253243/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4253243/)

---

# Approach
Check if k is equal to or larger than the length of the array. In this case choose max number from array
Otherwise iterate through the array and compare first and second elements while wins counter will be equal k or only one element stay in array 

# Complexity
- Time complexity: O(n)
The solution iterates through the array once. 

- Space complexity: O(1)
The solution uses a constant amount of extra space

# Code
```
defmodule Solution do
  @spec get_winner(arr :: [integer], k :: integer) :: integer
  def get_winner(arr, k) when length(arr) > k do
    get_winner(arr, k, 0)
  end

  def get_winner(arr, _k) do
    Enum.max(arr)
  end

  def get_winner([num1], _k, _wins) do
    num1
  end
  
  def get_winner([num1 | _], k, wins) when k == wins  do
    num1
  end
  
  def get_winner([num1 | [num2 | arr]], k, wins) when num1 > num2  do
    get_winner([num1 | arr], k, wins + 1)
  end

  def get_winner([num1 | [num2 | arr]], k, wins) do
    get_winner([num2 | arr], k, 1)
  end
end
```