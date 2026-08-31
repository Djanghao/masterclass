# Python 3   ||   6 lines,  bfs, Counter   ||   T/S: 93% / 70%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4376475/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4376475/)

---

Here's the plan:
- We keep track of the nodes not visited in our *bfs* with `unseen`.
- The first `row` in our *bfs* is `id`. We construct each subsequent `row` using the  current`row`.
- We we arrive at the *level*`row`, we use a counter to do the required sort.
```
class Solution:
    def watchedVideosByFriends(self, watchedVideos: List[List[str]],
                 friends: List[List[int]], id: int, level: int) -> List[str]:

        unseen = set(range(len(watchedVideos))) - (row:={id})

        for _ in range(level):
            unseen-= row
            row = set(chain(*[friends[r] for r in row])) & unseen

        ctr = Counter(chain(*[watchedVideos[r] for r in row]))
        return sorted(ctr.keys(), key = lambda x: (ctr[x],x))     
```
[https://leetcode.com/problems/get-watched-videos-by-your-friends/submissions/1277569949/](https://leetcode.com/problems/get-watched-videos-by-your-friends/submissions/1277569949/)


I could be wrong, but I think that time complexity is *O*(*NM*) and space complexity is *O*(*NM*), in which *N* ~ `len(friends)` and *M* ~ the count of all movies.