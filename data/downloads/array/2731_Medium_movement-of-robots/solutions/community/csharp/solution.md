# [C#], Prefix sum, math

**Author:** Yerkon
**Votes:** 1
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3711284/](https://leetcode.com/problems/movement-of-robots/solutions/3711284/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. We can just **add/subtract the `d`** for each robot and it will work. Because collision here works just like no collision happens.
```
Examples
1.
[-2,0,2], s = "RLL", d = 3
d = 1, [-1, -1, 1] ->, <-, <-.  robots at -1(->, <-) will change direction
d = 2, [-2,  0, 0] <-, ->, <-   robots at  0(->, <-) will change direction
d = 3, [-3, -1, 1] <-, <-, ->

If just add/subtract d
[1, -3, -1], we get the same result but unsorted

2.
[1,5], s = "RL", d = 5
d = 1, [2, 4] ->, <-
d = 2, [3, 3] <-, ->  robots at 3(->, <-), in the next second will change direction
d = 3, [2, 4] <-, ->  passed through
d = 4, [1, 5] <-, ->
d = 5, [0, 6] <-, ->

If just add/subtract d
[6, 0], we get the same result but unsorted

3.
[3,4], s = "RL", d = 2
d = 1, [3, 4] <-, -> change direction, passed through
d = 2, [2, 5] <-, ->  

If just add/subtract d
[5, 2], we get the same result but unsorted

```

2. **Prefix sum**. To calculate distance between all pairs([i, j] = [j,i]) simple case is get brute-force,
but it will not fit to time limit(N^2). To we can calculate distance of all pairs in O(N) lets consider example:
```
[1,4,5,11]. 
(4-1) = 3
(5-4) + (5-1) = 1 + 4 = 5
(11-5) + (11-4) + (11-1) = 6+7+10=23
23+5+3=31

[1,4,5,11] Can be written as:
(4-1) = 4*1 +(-1) = 5*1 - sum(1)
(5-4) + (5-1) = 5*2 + (-4-1) = 5*2 - sum(4,1)
(11-5) + (11-4) + (11-1) = 11*3 + (-5-4-1) = 11*3 - sum(5,4,1)

```

3. **Array sort**. What happens if array not ordered?
```
1.
[1,3],  s="RL" d = 3
d=1, [2,2]
d=2, [1,3]
d=3, [0,4]

[4,0]
i=0, res = 0*4 - 0 = 0, pref=4
i=1, res=1*0 -4= -4.

2.
[0,2,4] 
(2-0)=2
(4-2) + (4-0) = 2+4=6
2+6=8

[4,0,2] unordered
i=0, res = 4*0 - 0 = 0, pref = 4
i=1, res = 1*0 - 4=- 4, pref = 4 
i=2, res = -4 + 2*2 - 4 =-4 + 4 -4 = -4

So, we didn't properly calculate distance

```


# Approach
- **`long[] numsL`** - Used to handle if `nums[i] + d` overflow `int` size


# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int SumDistance(int[] nums, string s, int d) {
        int N = nums.Length;
        int mod = 1000000007;
        long res = 0;
        long pref = 0;
        long[] numsL = new long[N];

        for (int i = 0; i < N; i++) {
            numsL[i] = nums[i] + (s[i] == 'L' ? -d : d);
        }

        Array.Sort(numsL);

        for (long i = 0; i < N; i++) {
            res += i * numsL[i] - pref;
            res = res % mod;
            pref += numsL[i];
        }

        return (int)res;
    }
}

```

# Approach #2
Here insted of prefix sum, used formula.
```
Example,
[a,b,c,d]
(b-a) + (c-a) + (d-a) = -3a + (b + c + d)
(c-b) + (d-b)         = -2b + (c + d)
(d-c)                 = -c + d

= -3a + (-2b + b) + (-c +2c) + 3d
= (0*a - 3*a) + (1*b - 2*b) + (2*c - 1*c) + (3*d - 0*d)

[0,2,4], N = 2
i=0, res += 0*0 - (3-0-1)*0 = 0
i=1, res += 1*2 - (3-1-1)*2 = 0
i=2, res += 2*4 - (3-2-1)*4 = 8

public class Solution {
    public int SumDistance(int[] nums, string s, int d) {
        int N = nums.Length;
        int mod = 1000000007;
        long res = 0;
        long[] numsL = new long[N];
        for (int i = 0; i < N; i++) {
            numsL[i] = nums[i] + (s[i] == 'L' ? -d : d);
        }

        Array.Sort(numsL);

        for (long i = 0; i < N; i++) {
            res += i * numsL[i];
            res %= mod;
            res -= (N - i - 1) * numsL[i];
            res %= mod;
        }

        return (int)res;
    }
}
```
Thanks for solutions from other posts, very helped

