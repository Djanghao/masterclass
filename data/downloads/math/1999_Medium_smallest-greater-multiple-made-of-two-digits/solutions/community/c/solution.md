# exhaustion ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/2364966/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/2364966/)

---

```
int findInteger(int k, int d1, int d2)
{
	int out{INT_MAX};
	queue<int> q({0});
	int d[]{d1, d2}, D[]{(INT_MAX-d1)/10, (INT_MAX-d2)/10};
	for(int i{}; i<10; ++i)
		for(int j{}, sz(size(q)); j<sz; ++j)
		{        
			int n = q.front(); q.pop();
			for(int x{}; x<2; ++x)
				if(n<D[x]) 
				{
					int N{n*10+d[x]};
					q.push(N);
					if(!(N%k) and N>k) out = min(out, N); 
				}
		}      
	return out==INT_MAX ? -1 : out;
}
```