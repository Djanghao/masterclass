# ✅✅Java | C++ Simple Solution 🔥🔥 Easy to Understand🔥🔥

**Author:** cohesk
**Votes:** 77
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321976/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3321976/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am Giving away my premium content videos related to computer science and data science and also will be sharing well-structured assignments and study materials to clear interviews at top companies to my first 1000 Subscribers. So, **DON'T FORGET** to Subscribe

Click Here to Subscribe \uD83D\uDC49 https://www.youtube.com/@techwired8/?sub_confirmation=1

**Solution Video Search \uD83D\uDC49 "Number of Zero-Filled Subarrays by Tech Wired leetcode" on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (55).png](./images/0.png)


**Java:**
```

class Solution {
       public long zeroFilledSubarray(int[] nums) {
        long cnt = 0, zeroSubarraysEndingAtCurrentIndex = 0;
        for (int n : nums) {
            if (n == 0) {
                cnt += ++zeroSubarraysEndingAtCurrentIndex;
            }else {
                zeroSubarraysEndingAtCurrentIndex = 0;
            }
        }
        return cnt;
    }

}
```

**C++:**
```
class Solution {
public:
    long zeroFilledSubarray(vector<int>& nums) {
        long cnt = 0, zeroSubarraysEndingAtCurrentIndex = 0;
        for (int n : nums) {
            if (n == 0) {
                cnt += ++zeroSubarraysEndingAtCurrentIndex;
            } else {
                zeroSubarraysEndingAtCurrentIndex = 0;
            }
        }
        return cnt;
    }
};

```
![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D