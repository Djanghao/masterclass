# log(k) with proof

**Author:** junkmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/4419162/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/4419162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First we need to find a way to figure out how many 0s any x! has. We can use prime factorization. 10 = 2 * 5.

1 = 1 (0 zero)
2 = 2a
3 = 3
4 = 2b * 2c
5 = 5a (0 -> 1 zero)
6 = 2d * 3
7 = 7
8 = 2e * 2f * 2
9 = 3 * 3
10 = 2 * 5b (1 -> 2 zeroes)
11 = 11
12 = 2 * 2 * 3
13 = 13
14 = 2 * 7
15 = 3 * 5c (2 -> 3 zeroes)
16 = 2 * 2 * 2 * 2
17 = 17
18 = 2 * 3 * 3
19 = 19
20 = 2 * 2 * 5d (3 -> 4 zeroes)
21 = 3 * 7
22 = 2 * 11
23 = 23
24 = 2 * 2 * 2 * 3
25 = 5e * 5f (4 -> 6 zeroes)

For every 5 we see, we can always match it with a previously seen 2 (this is what the letters are), to extract a 10. Everytime we do this, it means a 0 is added.

At first it appears the pattern is simply 0!..4! = 0 zero, 5!..9! = 1 zero, 10!..14! = 2 zeroes, 5n!..(5n+4)! = n zeroes, but this isn't exactly true. Indeed, 25 has a prime factorization of 5 * 5, meaning that 2 zeroes will be added once we hit 25!. So the pattern is actually:
For every multiple of 5, add 1 zero.
For every multiple of 5^2, add another zero.
For every multiple of 5^3, add another zero.
etc.

Now let's plot for every k, what the answer is.

k  = ans
0  = 5 (up to 4!)
1  = 5 (9!)
2  = 5 (14!)
3  = 5 (19!)
4  = 5 (24!)
5  = 0
6  = 5 (29!)
7  = 5 (34!)
8  = 5 (39!)
9  = 5 (44!)
10 = 5 (49!)
11 = 0
12 = 5 (54!)
13 = 5 (59!)
14 = 5 (64!)
15 = 5 (69!)
16 = 5 (74!)
17 = 0
18 = 5 (79!)
19 = 5 (84!)
20 = 5 (89!)
21 = 5 (94!)
22 = 5 (99!)
23 = 0
24 = 5 (104!)
25 = 5 (109!)
26 = 5 (114!)
27 = 5 (119!)
28 = 5 (124!)
29 = 0
30 = 0
31 = 5 (129!)
32 = 5 (134!)
33 = 5 (139!)
34 = 5 (144!)
35 = 5 (149!)
36 = 0
37 = 5 (154!)
38 = 5 (159!)
39 = 5 (164!)
40 = 5 (169!)
41 = 5 (174!)
42 = 0
43 = 5 (179!)
44 = 5 (184!)
45 = 5 (189!)
46 = 5 (194!)
47 = 5 (199!)
48 = 0
49 = 5 (204!)
50 = 5 (209!)
51 = 5 (214!)
52 = 5 (219!)
53 = 5 (224!)
54 = 0
55 = 5 (229!)
56 = 5 (234!)
57 = 5 (239!)
58 = 5 (244!)
59 = 5 (249!)
60 = 0
61 = 0
62 = 5 (254!)
...
152 = 5 (624!)
153 = 0
154 = 0
155 = 0
156 = 5 (629!)
etc.

This part is a bit complicated, but there are some patterns that build on top of each other (from inner to outer):
A: 5 5s followed by a 0, length **6**
B: 5 times pattern A followed by a 0, length **31** (**31** = 5 * **6** + 1)
C: 5 times pattern B followed by a 0, length **156** (**156** = 5 * **31** + 1)
etc.

N: 5 times pattern N - 1 followed by a 0, length 5 * len(pattern N - 1) + 1

So this is what the code does

1. Find what the length of longest pattern that has at least one occurrence is in k + 1.
2. Reduce k + 1 by substracting how many times said pattern fits in it (times its length of course).
3. If nothing remains, we're done reducing.
4. Otherwise, keep reducing using the next smaller pattern.

At the end, the length of the last pattern used in the reduction will be 1 or something else, if it's 1 return 5 otherwise return 0 (means we hit one of those 0s).

# Complexity
- Time complexity:
$$O(log(k))$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int PreimageSizeFZF(int k) {
        ++k;
        var ml = 31L; // motif length

        for (; ml <= k; ml = 5 * ml + 1);

        ml = (ml - 1) / 5;

        while (k % ml > 0) {
            k %= (int)ml;
            ml = (ml - 1) / 5;
        }

        return ml == 1 ? 5 : 0;
    }
}
```