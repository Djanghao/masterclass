# Ruby solution with memoization, explained (100%/100%)

**Author:** dtkalla
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-music-playlists/solutions/3869549/](https://leetcode.com/problems/number-of-music-playlists/solutions/3869549/)

---

# Intuition
The first k songs all have to be different.  After that, for each song, we can choose to play a new one or we can play an old song we played at least k songs ago.
Use memoization to calculate these possibilities efficiently.

# Approach
1. Create a memo and make n, goal, and k class variables.
2. Use the permute helper function to calculate the possibilities for the first k songs and the ways helper function to calculate the possibilities for the remaining songs.  Multply these, use modulo, and return.

Permute:
- The first k songs have to all be different.  There are n possibilties for the first, n-1 for the second, etc.

Ways helper function:
1. Return 0 if songs is negative (this is an invalid case).
2. If you've reached the end of the playlist (the goalth song!), return 1 if you've played every song and 0 otherwise.
3. If this calculation is store in memo, return it.
4. Option 1: play a new song.  Multiply by songs (you can choose from any of the remaining songs) and decrement songs for the next index.
5. Option 2: play an old song.  There are (@n - songs) songs that you've played, but it can't be a song you've played in the last k spots, so subtract @k also.  Multiply but ways at the next index.
6. Add these two options together, memoize, and return.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
def num_music_playlists(n, goal, k)
    @memo = Array.new(goal) { Array.new(k+1) }
    @n, @goal, @k = n, goal, k

    (permute * ways(k,n-k)) % 1000000007
end

def permute
    total = 1
    (@n-@k+1..@n).each { |i| total *= i }
    total
end

def ways(i,songs)
    return 0 if songs < 0
    return (songs == 0 ? 1 : 0) if i == @goal
    return @memo[i][songs] if @memo[i][songs]

    option1 = songs * ways(i+1, songs-1)
    option2 = (@n - songs - @k) * ways(i+1, songs)

    @memo[i][songs] = option1 + option2
end
```