# Java O(1) 100% faster

**Author:** akhil_t
**Votes:** 13
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284627/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1284627/)

---

```
class Solution {
    public int numberOfRounds(String startTime, String finishTime) {
        Integer startHH = Integer.parseInt(startTime.substring(0,2));
        Integer startMM = Integer.parseInt(startTime.substring(3));
        Integer finishHH = Integer.parseInt(finishTime.substring(0,2));
        Integer finishMM = Integer.parseInt(finishTime.substring(3));
        
        int start = startHH*60 +startMM;
        int end = finishHH*60 +finishMM;
        if (start > end) {
           end += 24*60;
        }
        
        return (int) Math.floor(end / 15.00) - (int) Math.ceil(start / 15.00);
    }
}
```