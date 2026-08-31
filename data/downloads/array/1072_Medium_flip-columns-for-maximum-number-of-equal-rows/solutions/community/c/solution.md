# C++ | HashMap | Find maximum occuring pattern | explanation

**Author:** utkarsh915
**Votes:** 77
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/1218248/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/1218248/)

---

The main idea is to find the "pattern" of each row.
"Pattern" here is defined by whether each element in the
row is same as the first element or not.
Then we return the frequency of the most frequent pattern.

e.g. for the matrix -
**[[0,0,0],
 [0,0,1],
 [1,1,0]]**

pattern will be -
**[[T,T,T],
 [T,T,F],
 [T,T,F]]**

here, the pattern **"TTF"** appears 2 times(highest)
so, **2 is the answer**  
  
### Why does this method work?

In the rows having the same pattern,
we can either flip all the columns having **'F'**, or **'T'**,
and all individual rows will become equal.

**e.g.** in the above example,
2nd and 3rd rows have pattern **"TTF"**
let us flip the column having **"F"**
so 2nd row becomes ```0, 0, 0```, and
so 3rd row becomes ```1, 1, 1```

find the C++ code below

```
	int maxEqualRowsAfterFlips(vector<vector<int>>& M) {
		unordered_map<string, int> map;

		for (auto& r : M) {
			// generate the pattern for the current row
			string s(r.size(), 'T');
			for (int i = 1; i < r.size(); i++) {
				if (r[i] != r[0]) s[i] = 'F';
			}
			// put the pattern to map
			map[s]++;
		}

		// find the highest freq of the pattern
		int ans = 0;
		for (auto& p : map)
			ans = max(ans, p.second);
		
		return ans;
	}
```