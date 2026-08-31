# C++ | Shortest and Simple Solution | Sorting with smallest range

**Author:** ankitkushawaha1000
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/2360885/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/2360885/)

---


	class Solution {
	public:
		vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {

			sort(intervals.begin(), intervals.end(), [](const vector<int> &a, const vector<int> &b){
				return a[1] - a[0] < b[1] - b[0];
			});

			int n = queries.size();
			set<pair<int, int>> st;
			for(auto i = 0; i < n; i++){
				st.insert({queries[i], i});
			}
			vector<int> res(n, -1);

			for(auto &it : intervals){
				auto itl = st.lower_bound({it[0], 0});
				auto itr = st.upper_bound({it[1], n});
				while(itl != itr){
					int ind = itl -> second;
					res[ind] = it[1] - it[0] + 1;
					st.erase(itl++);
				}		 
			}

			return res;
		}
	};