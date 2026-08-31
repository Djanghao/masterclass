# This is an easy problem if you see the problem is trying to trick us!

**Author:** James_Jone
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280386/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280386/)

---

# Intuition
This question is asking us to find the player that can win k games in a row.
The biggest confusuion of this question is the lost player goes to the end of the array, but that DOES NOT MATTER AT ALL!!!
This is because the player with the highest skill can win infinite games, so if the current player has the highest skill, we now we've found the player that can win k games. And we are guranteed to find that player before we reach the the lost player at the end!
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Traverse the array while keeping track of the max skill and its index.
If the current value is smaller than the current max skill, we add the count by 1.
If the current value is greater than the current max skill, we set the max skill to the current value and reset count to 1.
If the current count equals to K, we return the max skill's index.
If we still have not returned at the end of the traversal, we return the max index.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N) for traversing the array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func findWinningPlayer(skills []int, k int) int {
    max := skills[0]
    maxIdx := 0
    count := 0
    for i := 1; i < len(skills); i++ {
        val := skills[i]
        if val > max {
            max = val
            maxIdx = i
            count = 1
        } else {
            count++
        }
        if count == k {
                return maxIdx
        }
    }
    return maxIdx
}

/*
     skills = [4,2,6,3,9], k = 2
               ^ ^
*/
```