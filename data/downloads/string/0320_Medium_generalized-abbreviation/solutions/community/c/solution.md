# recursive ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/2187065/](https://leetcode.com/problems/generalized-abbreviation/solutions/2187065/)

---

```
vector<string> generateAbbreviations(string w) 
{
	if(size(w)==1) return vector{w,"1"s};    
	auto p = generateAbbreviations(string(begin(w), prev(end(w))));
	vector<string> out;
	for(auto & s : p)
	{
		out.push_back(s + w.back());
		if(s.back()>='a')             
			out.push_back(s+"1"s);
		else
		{
			 if(s.back()=='9') 
				 s.back()='1', out.push_back(s+"0"s);
			 else
				 s.back()+=1,  out.push_back(s);
		}
	}
	return out;
}
```