# Python 3   ||   11 lines,  w/ explanation   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/video-stitching/solutions/3032762/](https://leetcode.com/problems/video-stitching/solutions/3032762/)

---

Here's the plan:
- We sort `clip` by increasing `start` and then by decreasing `end` for those clips with same `start`.
- We initiate `t` to keep track of the`end`of the most recent clip we use. If and when `t` equals or exceeds `time`, we return the number of clips. If we run out of clips before that happens, then we return `-1`.
- We iterate through clips. First, grabbing the initial clip in the sorted list. Second, we discard all clips that end before that clip's`end`. 
- Third, we acrete all clips that start before `t` in `cSet`and then select from`cSet`the clip with the greatest`end`as the new most recent clip.
- Fouth, we increment`ans`, flush`cSet`, and check whether we are finished.

Notes: Originally I checked whether a clip starting at zero did actually exist, but the code passed without the check, so I removed it. Also, I have paid heed to the excellent suggestions in the comments below.
```
class Solution:
    def videoStitching(self, clips: List[List[int]], time: int) -> int:

        clips = deque(sorted(clips, key = lambda x: (x[0],-x[1])))

        t, cSet, ans = 0, set(), 0

        while clips:
            while clips and clips[0][1] <= t: clips.popleft()
            while clips and clips[0][0] <= t: cSet.add(clips.popleft()[1])

            if clips and not cSet: return -1
            t = max(cSet, default = t)
            ans+= 1
            if t >= time: return ans 
            cSet.clear()

        return -1
```
[https://leetcode.com/problems/video-stitching/submissions/1273645129/](https://leetcode.com/problems/video-stitching/submissions/1273645129/)

I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is  *O*(*N*), in which *N* ~ `len(clips)`.

