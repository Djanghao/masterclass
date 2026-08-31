# [JAVA] Nothing fancy

**Author:** miyamura
**Votes:** 13
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/878605/](https://leetcode.com/problems/remove-covered-intervals/solutions/878605/)

---

```
		Arrays.sort(intervals,(a,b)->{
            return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0];
        });
        
        int max = intervals[0][1];
        int ans = 1;
        
        for(int[] interval : intervals){
            if(interval[1] > max){
                ans++;
                max = interval[1];
            }
        }
        
        return ans;
```