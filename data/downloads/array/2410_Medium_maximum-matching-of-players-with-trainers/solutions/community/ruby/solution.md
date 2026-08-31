# Two Pointer. O(n log n) time, O(1) space. Beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/4157972/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/4157972/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {Integer[]} players
# @param {Integer[]} trainers
# @return {Integer}
def match_players_and_trainers(players, trainers)

    players.sort!
    trainers.sort!
    i = 0
    j = 0
    answer = 0
    while i < players.size and j < trainers.size
        if players[i] <= trainers[j]
            answer += 1
            i += 1
            j += 1
        elsif players[i] > trainers[j]
            j += 1     
        else
            break       
        end
    end
    
    answer
end



```