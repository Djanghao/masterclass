# Java O(height) Diff array

**Author:** REED_W
**Votes:** -1
**Link:** [https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5738860/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5738860/)

---



# Complexity
- Time complexity:O(h)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
    private long sln1(int h, int[] ps, String ds){
        int n = ps.length;
        long[] timeline = new long[h*2+2];
        long[] presum = new long[h*2+2];
        long sum = 0, res = 0;
        for(int i=0;i<n;i++){
            sum += ps[i];
            if(ds.charAt(i)=='U' || ps[i] == 0){
                timeline[1] += 1;
                timeline[h-ps[i]+1] += -2;
                timeline[2*h-ps[i]+1] += 2;
            }else{
                timeline[1] += -1;
                timeline[ps[i]+1] += 2;
                timeline[ps[i]+1+h] += -2;
            }
        }
        for(int i= 1;i< timeline.length; i++){
            timeline[i] += timeline[i-1];
            presum[i] += presum[i-1]+timeline[i];
            res = Math.max(res, sum+presum[i]);
        }
        return res;
    }
```

if you hate if:
```java []
    private long sln1(int h, int[] ps, String ds){
        int n = ps.length;
        long[] timeline = new long[h*2+2];
        long[] presum = new long[h*2+2];
        long sum = 0, res = 0;
        int[] map = new int[26];
        map['U'-'A'] = 1; map['D'-'A'] = -1;
        for(int i=0;i<n;i++){
            sum += ps[i];
            int d = map[ds.charAt(i) - 'A'];
            timeline[1] += d;
            timeline[h*(d+1>>1)-d*ps[i]+1] += -2*d;
            timeline[h+h*(d+1>>1)-d*ps[i]+1] += 2*d;
        }
        for(int i= 1;i< timeline.length; i++){
            timeline[i] += timeline[i-1];
            presum[i] += presum[i-1]+timeline[i];
            res = Math.max(res, sum+presum[i]);
        }
        return res;
    }
```