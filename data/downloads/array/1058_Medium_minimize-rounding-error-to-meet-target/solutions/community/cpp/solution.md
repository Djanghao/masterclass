# sort ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3860930/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/3860930/)

---

```
string minimizeError(vector<string>& p, int t)
{
	int sum{}, n(size(p));
	vector<float> v;
	for(const auto & p : p)   
	{
		float x = stof(p);
		int i   = x;
		if(x-i==0.0f)
			t-=i, --n;
		else
		{
			sum += int(x);
			v.push_back(x-i);
		}
	}
	int d = t-sum;
	if(sum>t or d>n) return "-1";
	float out_f{.0f}; 
	sort(begin(v), end(v), [](const auto & x, const auto & y){ return 1.f-2*x<1.f-2*y; });
	for(int i{}; i<size(v); ++i)
		out_f += i<d ? 1.f-v[i] : v[i];

	string out = to_string(round(out_f*1000)/1000);
	return {begin(out), end(out)-3};
}
```