# Don't accumulate the same video of same user !

**Author:** LeonDong1993
**Votes:** 10
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/2758206/](https://leetcode.com/problems/most-popular-video-creator/solutions/2758206/)

---

The description of this question is not clear. The input can have multiple entry that are same video posted by same user. For exmaple,

["alice","alice","alice"]
["c","b","c"]
[1,2,2]

The answer for this example is ["alice", "b"], not ["alice", "c"]. 

I wasted like at least 20mins on this issue. 

**Update:
Leetcode have fixed this by enforce the input has no duplicate ids for the same user. So the above example is not a valid test case now.**