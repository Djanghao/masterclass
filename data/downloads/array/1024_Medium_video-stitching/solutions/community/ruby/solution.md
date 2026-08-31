# Ruby solution with sorting, explained (100%/67%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/4086427/](https://leetcode.com/problems/video-stitching/solutions/4086427/)

---

# Intuition
Sort the clips, then iterated through them.  Add a new clip whenever necessary, and return -1 if there's a missing gap.  Return the number of clips once you get to time.

# Approach
1. Sort the clips.
2. Initialize curr_end (the ending time of the last clip), total (number of clips used), and i at 0.
3. Iterate through the rest of the clips.
    - If the next clip doesn't intersect with curr_end, it's impossible to cover the full interval, so return -1.
    - Otherwise, look through all clips that could be merged with the current one and choose the one with the latest ending time.  (Since the clips are sorted, you can increment i and won't need to check those clips again.)  Add 1 to total.
4. At the end, return the total number of clips you've used if you cover the full interval, -1 otherwise.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def video_stitching(clips, time)
    clips.sort!
    curr_end = 0
    total = 0
    i = 0

    until i == clips.length || curr_end >= time
        return -1 if clips[i][0] > curr_end
        max = clips[0][1]

        if i != clips.length && clips[i][0] <= curr_end
            until i == clips.length || clips[i][0] > curr_end
                max = clips[i][1] if clips[i][1] > max
                i += 1
            end
        else
            i += 1
        end
        
        total += 1
        curr_end = max
    end

    curr_end >= time ? total : -1
end
```