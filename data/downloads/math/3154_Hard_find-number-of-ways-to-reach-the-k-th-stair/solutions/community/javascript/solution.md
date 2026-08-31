# [Javascript] Pure Hack, No Luck

**Author:** rexcheng
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5178138/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5178138/)

---

# Intuition
Honestly, I did't know how to solve this question at the beginning. I struggled with finding an optimized DP solution but couldn't during the contest.

I'm just here to tell you that if you are ever stucked, at least try something and maybe you will find some way out.

# Approach
Look at the constraint `k <= 10^9`. Native DP solution with $O(k)$ space complexity will very likely hit the memory limit. Maybe there exists a math solution?

Anyway, let's write a brute force solution and take a look at the output.
```javascript []
function waysToReachStair(k) {
	let result = 0;
	const stack = [[1, -1, 0]];
	while (stack.length > 0) {
		const [stair, prevJump, jump] = stack.pop();
		if (stair === k) result++;
		if (stair > 0 && prevJump !== jump) stack.push([stair - 1, jump, jump]);
		if (stair + 2 ** jump > k + 1) continue;
		stack.push([stair + 2 ** jump, jump, jump + 1]);
	}
	return result;
}

// run it from k = 0 to k = 200 and observe the results
for (let k = 0; k < 200; k++) {
	console.log(`${k}\	${waysToReachStair(k)}`);
}
```
```output []
0	2
1	4
2	4
3	3
4	2
5	4
6	6
7	4
8	1
9	0
10	0
11	1
12	5
13	10
14	10
15	5
16	1
17	0
18	0
19	0
20	0
21	0
22	0
23	0
24	0
25	0
26	1
27	6
28	15
29	20
30	15
31	6
32	1
33	0
34	0
35	0
36	0
37	0
38	0
39	0
40	0
41	0
42	0
43	0
44	0
45	0
46	0
47	0
48	0
49	0
50	0
51	0
52	0
53	0
54	0
55	0
56	0
57	1
58	7
59	21
60	35
61	35
62	21
63	7
64	1
65	0
66	0
67	0
68	0
69	0
70	0
71	0
72	0
73	0
74	0
75	0
76	0
77	0
78	0
79	0
80	0
81	0
82	0
83	0
84	0
85	0
86	0
87	0
88	0
89	0
90	0
91	0
92	0
93	0
94	0
95	0
96	0
97	0
98	0
99	0
100	0
101	0
102	0
103	0
104	0
105	0
106	0
107	0
108	0
109	0
110	0
111	0
112	0
113	0
114	0
115	0
116	0
117	0
118	0
119	0
120	1
121	8
122	28
123	56
124	70
125	56
126	28
127	8
128	1
129	0
130	0
131	0
132	0
133	0
134	0
135	0
136	0
137	0
138	0
139	0
140	0
141	0
142	0
143	0
144	0
145	0
146	0
147	0
148	0
149	0
150	0
151	0
152	0
153	0
154	0
155	0
156	0
157	0
158	0
159	0
160	0
161	0
162	0
163	0
164	0
165	0
166	0
167	0
168	0
169	0
170	0
171	0
172	0
173	0
174	0
175	0
176	0
177	0
178	0
179	0
180	0
181	0
182	0
183	0
184	0
185	0
186	0
187	0
188	0
189	0
190	0
191	0
192	0
193	0
194	0
195	0
196	0
197	0
198	0
199	0
```
**Well, we found the pattern!**

No obvious pattern for any `k <= 10`. Just hardcode the answer. For any `k > 10`, there are only a few chunks of `k` where the answer is not `0`. Let's take a look at these chunks.

## 11 <= k <= 16
```
11	1
12	5
13	10
14	10
15	5
16	1
```

## 26 <= k <= 32
```
26	1
27	6
28	15
29	20
30	15
31	6
32	1
```

## 57 <= k <= 64
```
57	1
58	7
59	21
60	35
61	35
62	21
63	7
64	1
```

First thing to notice is that the answers are symmetric. Second thing to notice is that the largest value of `k` in each chunk is some power of `2`. `16 = 2^4`, `32 = 2^5`, `64 = 2^6`. Third thing to notice is that when `k` is some power of `2`, the answer is always `1`.

**Okay, let's make sense out of it.**

When `k` is some power of `2`, the way to reach stair `k` is to repeat operation 2 (jump) until we reach stair `k` because the stair we can reach forms a geometric series starting from 1 (`2^0`): `1, 2, 4, 8, 16, 32, 64, ...`

When `k` is $2^n - 1$, one less than some power of `2`, we can go to stair $2^n$ using all jumps like above, and then take a step back using operation 1. However, we can take a step back any time following a jump. How many jumps for $2^n$? `n + 1` jumps because the first jump has `n = 0`. Now, you know why the answer is `5 = 4 + 1` when `k = 15 = 2^4 - 1`, `6 = 5 + 1` when `k = 31 = 2^5 - 1`, etc.

When `k` is $2^n - 2$, two less than some power of `2`, we can take two steps back using operation 1 following a jump. We know we take `n + 1` jumps to reach $2^n$ stair. How many different ways we can choose two jumps (to be followed by a step back) out of `n + 1` jumps? Combinations!
$$C_{n+1}^2$$

The pattern follows...

# Complexity
- Time complexity: $O(log(n))$

- Space complexity: $O(1)$

# Code
```javascript []
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function(k) {
    const answers = [2, 4, 4, 3, 2, 4, 6, 4, 1, 0, 0];
    if (k <= 10) return answers[k];
    const n = Math.ceil(Math.log2(k));
    const upper = 2 ** n; // upper boundary of the chunk
    const lower = upper - (n + 1); // lower boundary of the chunk
    if (k >= lower && k <= upper) {
        return combination(n + 1, upper - k);
    }
    return 0;
};
```