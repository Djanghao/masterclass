# JS/TS BFS Solution

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5791127/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5791127/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
##  Time complexity: O(n + m)
- The time complexity of this algorithm is O(n + m), where n is the number of friends and m is the total number of watched videos by all friends at the desired level.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(N)
- The space complexity of this algorithm is O(n) for the visited array and queue, O(m) for the videoCount map, and O(k) for the levelFriends array, where k is the number of friends at the desired level. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    let n = friends.length;

    // Step 1: Perform BFS to find friends at the required level
    let visited = new Array(n).fill(false);
    let queue = [id];
    visited[id] = true;

    let currentLevel = 0;
    let levelFriends = [];

    while (queue.length > 0 && currentLevel < level) {
        let size = queue.length;
        currentLevel++;

        for (let i = 0; i < size; i++) {
            let person = queue.shift();
            for (let friend of friends[person]) {
                if (!visited[friend]) {
                    visited[friend] = true;
                    queue.push(friend);
                }
            }
        }
    }

    // At this point, `queue` contains all friends at the desired level
    levelFriends = queue;

    // Step 2: Count the frequency of videos watched by these friends
    let videoCount = new Map();

    for (let friend of levelFriends) {
        for (let video of watchedVideos[friend]) {
            videoCount.set(video, (videoCount.get(video) || 0) + 1);
        }
    }

    // Step 3: Sort videos first by frequency, then alphabetically
    let sortedVideos = Array.from(videoCount.keys()).sort((a, b) => {
        if (videoCount.get(a) === videoCount.get(b)) {
            return a.localeCompare(b); // Alphabetical order if frequency is the same
        } else {
            return videoCount.get(a) - videoCount.get(b); // Sort by frequency
        }
    });

    return sortedVideos;
};

```