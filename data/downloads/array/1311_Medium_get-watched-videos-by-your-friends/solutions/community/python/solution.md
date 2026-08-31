# Find friends of friends, 84% speed

**Author:** EvgenySH
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/1431209/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/1431209/)

---

Runtime: 276 ms, faster than 84.09% of Python3 online submissions for Get Watched Videos by Your Friends.
Memory Usage: 16.2 MB, less than 20.45% of Python3 online submissions for Get Watched Videos by Your Friends.
```
class Solution:
    def watchedVideosByFriends(self, watchedVideos: List[List[str]], friends: List[List[int]], id: int, level: int) -> List[str]:
        friends = [set(lst) for lst in friends]
        row = friends[id]
        previous_friends = {id}
        for _ in range(1, level):
            previous_friends.update(row)
            new_row = set()
            for friend in row:
                new_row.update(friends[friend])
            row = new_row - previous_friends
        videos = defaultdict(int)
        for friend in row:
            for video in watchedVideos[friend]:
                videos[video] += 1
        return [v for _, v in sorted((freq, v) for v, freq in videos.items())]
```
