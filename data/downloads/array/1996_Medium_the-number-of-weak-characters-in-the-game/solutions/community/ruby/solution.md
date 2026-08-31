# Ruby: Attack Descending, Defense Ascending.

**Author:** user9697N
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2554801/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2554801/)

---

## Leetcode: 1996. The Number of Weak Characters in the Game.


**Ruby: Attack Descending, Defence Ascending.**


Wrong Assumption that this sequence could be sorted by one compare method.

I'll try to sort. By a sort method. And then select number of groups of "equal" elements. Answer is number of gropus minus one. (Does not works)

Next try. Based on the [Votrubac](https://leetcode.com/votrubac/)'s solution.

- https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/discuss/1452696/O(n)

First sort by attack (!). Than count week. Week are onews who defens is less then maxumum. First maximum is `-Float::INIFINTY`, thus array of one characther have now week elements.

Let's try.

Need to sort tricy. Attack - Descending, start from maxumum attack. But Defence ascending. Dose it plays any role how to sort Defence? Yes it dose. Need to sort defence ascending.

Ruby code:
```Ruby
# Leetcode: 1996. The Number of Weak Characters in the Game.
# https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
# = = = = = = = = = = = = = =
# Accepted.
# Thanks God, Jesus Christ!
# = = = = = = = = = = = = = =
# Runtime: 1569 ms, faster than 100.00% of Ruby online submissions for The Number of Weak Characters in the Game.
# Memory Usage: 225.3 MB, less than 100.00% of Ruby online submissions for The Number of Weak Characters in the Game.
# @param {Integer[][]} properties
# @return {Integer}
def number_of_weak_characters(properties)
  # Based on:
  # https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/discuss/1452696/O(n)
  answer, max = 0, -Float::INFINITY
  # Attack => DECS;
  # Defence => ASC;
  properties.sort{|a,b| a[0] == b[0] ? (a[1] <=> b[1]) : (b[0] <=> a[0])}
    .each do |_,defence|
      answer += 1 if defence < max
      max = [defence,max].max
    end
  answer
end
```

Tests:
```
[[5,5],[6,3],[3,6]]
[[2,2],[3,3]]
[[1,5],[10,4],[4,3]]
[[1,1],[2,1],[2,2],[1,2]]
```
