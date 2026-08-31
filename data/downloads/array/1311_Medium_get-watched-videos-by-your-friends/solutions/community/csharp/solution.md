# C# Adjacency list BFS solution using Queue and Dictionary

**Author:** pykan
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5859342/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5859342/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given friends list is already an adjacency list. Traverse through id to the list of all friends at each level until you reach the Kth level.

# Approach
<!-- Describe your approach to solving the problem. -->
Enqueue list of friends at each level starting with the first node as id. At each level, dequeue all friends and also save their visited state to avoid visiting again. When Kth level is reached, add all the watched videos of the friends at that level to a dictionary and then sort the dictionary and send back the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```csharp []
public class Solution {
    public IList<string> WatchedVideosByFriends(IList<IList<string>> watchedVideos, int[][] friends, int id, int level) {
        int n = friends.Length;
        var dict = new Dictionary<string, int>();
        int[] visited = new int[n];
        Queue<int> queue = new Queue<int>();
        queue.Enqueue(id);
        visited[id] = 1;
        int k = 0;
        while(queue.Count > 0) {
            int cnt = queue.Count;
            for(int i = 0; i < cnt; i++) {
                int next = queue.Dequeue();
                if(k == level) {
                    foreach(var item in watchedVideos[next]) {
                        if(dict.ContainsKey(item)) dict[item]++;
                        else dict.Add(item, 1);
                    }
                }
                else {
                    int m = friends[next].Length;
                    for(int j = 0; j < m; j++) {
                        if(visited[friends[next][j]] == 0) {
                            queue.Enqueue(friends[next][j]);
                            visited[friends[next][j]] = 1;
                        }
                    }
                }
            }
            k++;
        }

        var ordered = dict.OrderBy(x => x.Value).ThenBy(x => x.Key);
        return ordered.Select(x => x.Key).ToList();
    }
}
```