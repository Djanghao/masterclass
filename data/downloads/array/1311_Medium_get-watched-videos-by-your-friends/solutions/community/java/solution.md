# Java BFS and sort

**Author:** dreamyjpl
**Votes:** 3
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/470726/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/470726/)

---

```java
class Solution {
    public List<String> watchedVideosByFriends(List<List<String>> watchedVideos, int[][] friends, int id, int level) {
        boolean[] visited = new boolean[friends.length];
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(id);
        visited[id] = true;
        while (!queue.isEmpty() && level-- > 0) {
            int size = queue.size();
            while (size-- > 0) {
                int cur = queue.poll();
                for (int i : friends[cur]) {
                    if (!visited[i]) {
                        queue.offer(i);
                        visited[i] = true;
                    }
                }
            }
        }
        if (queue.isEmpty() || level > 0) return new ArrayList<>();
        Map<String, Integer> freq = new HashMap<>();
        for (int i : queue) {
            for (String video : watchedVideos.get(i)) {
                freq.put(video, freq.getOrDefault(video, 0) + 1);
            }
        }
        List<String> res = new ArrayList<>(freq.keySet());
        Collections.sort(res, (e1, e2) -> freq.get(e1) == freq.get(e2) ? e1.compareTo(e2) : Integer.compare(freq.get(e1), freq.get(e2)));
        return res;
    }
}
```