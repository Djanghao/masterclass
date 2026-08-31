# Simple Greedy Java Solution

**Author:** fabrizio3
**Votes:** 212
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/93987/](https://leetcode.com/problems/assign-cookies/solutions/93987/)

---

```
Arrays.sort(g);
Arrays.sort(s);
int i = 0;
for(int j=0;i<g.length && j<s.length;j++) {
	if(g[i]<=s[j]) i++;
}
return i;
```

Just assign the cookies starting from the child with less greediness to maximize the number of happy children .