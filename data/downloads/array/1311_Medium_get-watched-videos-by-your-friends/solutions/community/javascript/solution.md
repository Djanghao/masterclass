# bfs

**Author:** PASUMARTHI_ASHIK
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/6093569/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/6093569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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

var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const queue = [];
  queue.push([id, 0]);
  const seen = new Set();
  const map = {};
  
  while (queue.length > 0) {
    const [id, _level] = queue.shift();
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    if (_level == level) {
      for (const video of watchedVideos[id]) {
        if (!map[video]) {
          map[video] = 1
        } else {
          map[video] += 1;
        }
      }
      continue;
    }
    
    for (const f of friends[id]) {
      queue.push([f, _level + 1]);
    }
  }
  
  return Object.keys(map).sort((a, b) => {
    const diff = map[a] - map[b];
    if (diff == 0) {
      return a.localeCompare(b);
    }
    return diff;
  })
};








// var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
//     // Initialize BFS variables
//     let visitedArr = new Array(watchedVideos.length).fill(false);
//     let queue = [[id, 0]]; // Queue stores [currentFriend, currentLevel]
//     visitedArr[id] = true;

//     // To keep track of the friends at the desired level
//     let friendsAtLevel = [];

//     // BFS to find all friends at the target level
//     while (queue.length > 0) {
//         let [nodeVal, curLevel] = queue.shift();

//         // If we've reached the target level, add the friend to the result set
//         if (curLevel === level) {
//             friendsAtLevel.push(nodeVal);
//         }

//         // Continue processing for all neighbors if we're still below the target level
//         if (curLevel < level) {
//             for (let friend of friends[nodeVal]) {
//                 if (!visitedArr[friend]) {
//                     visitedArr[friend] = true;
//                     queue.push([friend, curLevel + 1]); // Increment the level for next nodes
//                 }
//             }
//         }
//     }

//     // Collect videos watched by friends at the exact target level
//     let result = [];
//     for (let friend of friendsAtLevel) {
//         for (let video of watchedVideos[friend]) {
//             result.push(video);
//         }
//     }

//     // Sort the result lexicographically and remove duplicates
//     result = Array.from(new Set(result)).sort();

//     return result;
// };

```