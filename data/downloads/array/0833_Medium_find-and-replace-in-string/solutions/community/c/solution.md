# C++ Solution Runtime 4ms

**Author:** SekarTopz
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/817285/](https://leetcode.com/problems/find-and-replace-in-string/solutions/817285/)

---

	string findReplaceString(string S, vector<int>& indexes, vector<string>& sources, vector<string>& targets) 
	{
		string res=S;
		map<int, pair<string,string> > mp;
		int key=0;
		for(int i=0; i<indexes.size(); i++)
		{
			mp[indexes[i]] = make_pair(sources[i], targets[i]);
		}
		int dx=0;
		for(auto itr:mp)
		{
			 auto idx = itr.first;
			auto rec = itr.second;
			if(S.substr(idx, rec.first.size()) == rec.first)
			{
				res.erase(idx+dx, rec.first.size());
				res.insert(idx+dx, rec.second);
				dx += rec.second.size() - rec.first.size();
			}
		}
		return res;
	}