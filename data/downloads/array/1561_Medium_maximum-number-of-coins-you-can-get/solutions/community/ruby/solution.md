# One of the easier problems to solve

**Author:** bangline
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4324341/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4324341/)

---

# Intuition
Knew that sorting the piles was a good start to find the min, max values of the piles. The essence is to get the max number of coins you need
```
[max_for_alice, next_max_for_you, min_for_bob]
```
And repeat. 

# Approach
Simple while loop, popping and shifting values off the array, keeping hold of the second highest value.

# Code
```
# @param {Integer[]} piles
# @return {Integer}
def max_coins(piles)
    piles.sort!
    max_for_me = 0
    while (piles.length > 0) do
        piles.pop # alice
        max_for_me += piles.pop
        piles.shift # bob
    end
    max_for_me
end
```