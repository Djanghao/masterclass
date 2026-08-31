# ok ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4026123/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4026123/)

---

**time: `O(log N)`; space: `O(1)`**
```
string smallestNumber(long long n) 
{
	if(n==1) return "1";
	int d[10]{};
	for(int i{9}; i>1; )
		n%i ? --i : (n/=i, ++d[i]);

	string out{};
	for(int i{1}; i<10; ++i)
	   out.append(d[i],'0'+i);
	return n!=1 ? "-1" : out;
}
```