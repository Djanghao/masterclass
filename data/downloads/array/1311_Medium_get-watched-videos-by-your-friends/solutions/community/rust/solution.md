# BST simple solution

**Author:** sergioarrighi
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/6052819/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/6052819/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Perform BFS traversal until prvided level.
When the algo reaches required depth, store the movies in an hash map for constant time access. While storing movies, count their frequencies and store this piece of data too.

# Approach
<!-- Describe your approach to solving the problem. -->
Use an hashmap with movie as key and freq as value.
Keep track of visited nodes to avoid any loop.
Create a queue for the BST process.
Pop the queue.
Skip process if already visited or when level is greater than required.
When visiting a node, record the visit.
When current level (stored in the queue along side the node id), insert the movie in the map or increment the frequency.
Scan the list of friends and add to the back of the queue to continue the process.
Sort the result and return.

# Complexity
- Time complexity: O(V + E + m \u22C5 k + tlogt)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V + E + t)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Where:
V: Number of people (nodes).
E: Number of friendships (edges).
m: Average number of videos per person.
k: Number of people at the target level.
t: Number of unique videos.

# Code
```rust []
use std::collections::{HashMap, HashSet, VecDeque};
use std::cmp::Reverse;

impl Solution {
    pub fn watched_videos_by_friends(watched_videos: Vec<Vec<String>>, friends: Vec<Vec<i32>>, id: i32, level: i32) -> Vec<String> {
        let mut res: HashMap<String, i32> = HashMap::new();
        // Keep track of visited friends
        let mut visited: HashSet<i32> = HashSet::new();
        
        // Create queue for BFS traversal
        // The queue contains touples (person_id, level)
        let mut queue: VecDeque<(i32, i32)> = VecDeque::new();
        // Start exploring from node id
        queue.push_back((id, 0));

        while let Some((curr_id, curr_level)) = queue.pop_front() {
            // Visit
            //println!("Visiting {curr_id} at level {curr_level}");
            if visited.contains(&curr_id) || curr_level > level {
                continue;
            }
            visited.insert(curr_id);

            // Chech videos and update map
            if curr_id != id && curr_level == level {
                for video in watched_videos[curr_id as usize].clone() {
                    //println!("Add video {video}");
                    res.entry(video).and_modify(|x| *x += 1).or_insert(1);
                }
            }

            // Explore
            for &friend in &friends[curr_id as usize] {
                queue.push_back((friend, curr_level + 1));
            } 
        }
        //println!("{res:?}");
        // Sort res by freq
        let mut res: Vec<(String, i32)> = res.drain().collect();
        //println!("{res:?}");

        res.sort_by(|a, b| {
            a.1.cmp(&b.1) // Compare by value (ascending)
                .then(a.0.cmp(&b.0)) // If equal, compare by string lexicographically
        });
        let (sorted_movies, _): (Vec<_>, Vec<_>) = res.into_iter().unzip();
        sorted_movies
    }
}
```