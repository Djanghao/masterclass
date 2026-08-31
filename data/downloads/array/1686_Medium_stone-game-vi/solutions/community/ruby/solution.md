# Ruby sorting solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/3641741/](https://leetcode.com/problems/stone-game-vi/solutions/3641741/)

---

# Intuition
Stones that are worth a lot to either player are valuable to both players, either by giving them lots of points or preventing their opponent from getting lots of points.  The best strategy is to pick the stones with the greatest total value.

# Approach
1. Create an array of stones, with the value assigned by both players.
2. Sort these stones by total value.
3. Initialize score as 0
4. Pop off pairs of stones, adding the alice value for one and subtracting the bob value for the next.
5. If there's a stone left over (because there were an odd number), give those points to Alice.
6. Convert the score to 1, -1, or 0.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def stone_game_vi(alice, bob)
    stones = []
    (0...alice.length).each { |i| stones << [alice[i],bob[i]] }

    stones.sort_by! { |arr| arr[0] + arr[1] }

    score = 0
    while stones.length > 1
        score += stones.pop[0]
        score -= stones.pop[1]
    end
    
    score += stones[0][0] if stones[0]

    if score > 0
        1
    elsif score < 0
        -1
    else
        0
    end
end
```