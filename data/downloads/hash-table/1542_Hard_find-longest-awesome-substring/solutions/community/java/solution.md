# Awesome Solution for Awesome Substring

**Author:** AbhayDutt
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-longest-awesome-substring/solutions/4151776/](https://leetcode.com/problems/find-longest-awesome-substring/solutions/4151776/)

---

https://leetcode.com/problems/find-longest-awesome-substring/solutions/2217420/c-solution-bit-manipulation-and-hashmaps-explanation/

this guy's solution did it for me



# Code
```
class Solution {
    public int longestAwesome(String s) {
        return util1(s);
    }
    // brain melt
    public int util1(String str) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        hm.put(0, -1);
        int mask = 0, ans = 0;
        for (int i = 0; i < str.length(); i++) {
            mask = mask ^ (1 << (str.charAt(i) - '0'));
            // if this conditions comes, that means every number in between has come even
            // number of times
            if (hm.containsKey(mask)) {
                ans = Math.max(ans, (i - hm.get(mask)));
            } else {
                hm.put(mask, i);
            }
            // if the below conditions work, we know that that only one is odd, rest all
            // were even
            for (int j = 0; j < 10; j++) {
                int newMask = mask ^ (1 << j);
                if (hm.containsKey(newMask)) {
                    ans = Math.max(ans, (i - hm.get(newMask)));
                }
            }
        }
        return ans;
    }
}
```

you can check out my github repository where i am uploading famous interview questions topic wise with solutions.
link-- https://github.com/Abhaydutt2003/DataStructureAndAlgoPractice 
kindly upvote if you like my solution. you can ask doubts below.\xAF
