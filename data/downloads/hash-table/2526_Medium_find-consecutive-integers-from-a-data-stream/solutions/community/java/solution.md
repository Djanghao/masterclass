# JAVA | Record the streak of same consecutive number

**Author:** sourin_bruh
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015258/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015258/)

---

# Please Upvote :D
---
``` java []
class DataStream {
    private int val, k, count;
    public DataStream(int value, int k) {
        this.val = value;
        this.k = k;
        this.count = 0;
    }

    public boolean consec(int num) {
        // if num == val, increment the streak else set it to 0
        count = (num == val)? count + 1 : 0;
        return count >= k;
        
    }
}

// TC: O(k) - let k be the number of calls made to consec()
// SC: O(1)
```