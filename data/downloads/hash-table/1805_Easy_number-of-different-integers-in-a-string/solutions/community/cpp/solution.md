# 🌴 C++ || 0 ms || Easy 🌴

**Author:** venom-xd
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1987421/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1987421/)

---

		class Solution {
		public:
			int numDifferentIntegers(string word) {
			vector<string>v;
			for(int i=0;i<word.size();i++)
			{
				if(isdigit(word[i])==true)
				{
				 string ans="";
					while (word[i] == '0')i++;
					while(isdigit(word[i])==true)
					{

					ans+=word[i];
					i++;
					}
					cout<<ans;
					v.push_back(ans);
				}

			}
			set<string>s;
			for(int i=0;i<v.size();i++)
			{
				s.insert(v[i]);
			}
				return s.size();
			}
		};