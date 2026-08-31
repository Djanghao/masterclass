# An intuitive greedy approach with step-by-step explanation (beats 100% C#)

**Author:** TheName_
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/6082368/](https://leetcode.com/problems/video-stitching/solutions/6082368/)

---

# Intuition
We can approach this in a greedy manner.
Since we have to cover the entire sporting event, we can sort the clips by their start times and try cover the longest possible time with a single clip before moving the the next one.

If we cannot find a clip that starts at the needed time, that means there are not enough clips to cover the entire event.

# Approach
1. Sort the clips by start time
2. Initialize two variables - the next required timestamp (`0` at the beginning) and the counter of used clips.
3. Take the clip that ends latest out of the ones that start at or earlier than the next required timestamp.
Then assign the end time of the chosen clip as the next required timestamp and increase the counter of used clips. 
**NOTES:**

    a. *If there are no clips that start at or earlier than the next required timestamp - we already know that there is not enough clips to cover the whole sporting event so we can return early with `-1`.*

    b. *If the next required timestamp is already equal to or longer than the total time of the event, we can return the current count early.*

5. If we went through all of the clips that means we did not manage to find one that covers the whole event so we can just return `-1` at this point.

Let's walk through two examples:

Example 1 - `clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10`
1. After sorting by start times: `clips = [[0,2],[1,9],[1,5],[4,6],[5,9],[8,10]], time = 10`
2. `nextRequiredTimestamp = 0` and `counter = 0`
3. A few iterations:
    1. Clips starting at 0: `[[0,2]]` 
    The one with latest end time out of these: `[0,2]` 
    `counter = 1`
    `nextRequiredTimestamp = 2`

    2. Clips starting before or at `2`: `[[1,9],[1,5]]` (we exclude the clips already analyzed in the previous iteration because if they were longer we would have used them already)
    The one with latest end time out of these: `[1,9]` 
    `counter = 2`
    `nextRequiredTimestamp = 9`

    2. Clips starting before or at `9`: `[[4,6],[5,9],[8,10]]` (excluding already analyzed clips)
    The one with latest end time out of these: `[8,10]` 
    `counter = 3`
    `nextRequiredTimestamp = 10`
    Since the next required timestamp is equal to the total event time (`nextRequiredTimestamp == time`), we have found our answer and can return the current count (`3`)

Example 2: `clips = [[0,1],[1,2]], time = 5`
1. After sorting by start times: `clips = [[0,1],[1,2]], time = 10`
2. `nextRequiredTimestamp = 0` and `counter = 0`
3. A few iterations:
    1. Clips starting at 0: `[[0,1]]` 
    The one with latest end time out of these: `[0,1]` 
    `counter = 1`
    `nextRequiredTimestamp = 1`

    2. Clips starting before or at `1`: `[[1,2]]` (excluding already analyzed clips)
    The one with latest end time out of these: `[1,2]` 
    `counter = 2`
    `nextRequiredTimestamp = 2`

4. Since we did not find enough clips to cover the whole event but have analyzed all of the available clips, there is no way to cover it, so we return `-1`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Sorting - $$O(n*log(n))$$ 
Finding the slots: $$O(n)$$ (we analyze each clip only once by checking its start and end times and the amount of work for each clip is constant - comparison and assignment of next required timestamp)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the sorting algorithm depends on the programming language but oftentimes it is $$O(log(n))$$.
Additional space is only used for two variables so a constant.


# Code
```csharp []
public class Solution {
    public int VideoStitching(int[][] clips, int time) {
        // 1. Sort the clips by start time
        Array.Sort(clips, Comparer<int[]>.Create((arr1, arr2) => arr1[0].CompareTo(arr2[0])));

        // 2. Initialize two variables
        var nextRequiredTimestamp = 0;
        var counter = 0;

        for(var i=0; i<clips.Length; i++) {
            // 3a) if there are no clips remaining that start earlier than or at the next required timestamp, we cannot cover the entire event and so we can return -1 early.
            if (clips[i][0] > nextRequiredTimestamp) {
                return -1;
            }

            // 3. Finding the clip with latest end time out of clips that start earlier than or at the currently required timestamp
            var currentlyRequiredTimestamp = nextRequiredTimestamp;
            nextRequiredTimestamp = clips[i][1];
            while (i+1 < clips.Length && currentlyRequiredTimestamp >= clips[i+1][0]) {
                nextRequiredTimestamp = Math.Max(nextRequiredTimestamp, clips[++i][1]);
            }

            // 3. Increasing the counter
            counter++;

            // 3b) If the next required timestamp is equal to or greater than the end time, we have found our answer
            if (nextRequiredTimestamp >= time) {
                return counter;
            }
        }

        // 4. We have analyzed all of the clips and did not find enough to cover all the time, so we can return -1
        return -1;
    }
}
```