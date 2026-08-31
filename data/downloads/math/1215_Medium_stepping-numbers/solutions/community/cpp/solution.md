# nice ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/3704589/](https://leetcode.com/problems/stepping-numbers/solutions/3704589/)

---

```
vector<int> countSteppingNumbers(int l, int h) 
{        
	int v[4096]{0,1,2,3,4,5,6,7,8,9}, SZ{10};
	for(int i{1}; i<SZ; )
		for(int sz(SZ); i<sz; ++i)
			if(v[i]<INT_MAX/10)
			{
			    int t{v[i]*10+v[i]%10}; 
				if(v[i]%10!=0 and t-1<=h) v[SZ++]=t-1;
				if(v[i]%10!=9 and t+1<=h) v[SZ++]=t+1;
			}
	return {lower_bound(begin(v), begin(v)+SZ, l), upper_bound(begin(v), begin(v)+SZ, h)};
}
```