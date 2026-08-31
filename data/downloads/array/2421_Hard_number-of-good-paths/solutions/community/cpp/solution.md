# Easy C++ Solution

**Author:** Sagargupta1610
**Votes:** 88
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3052326/](https://leetcode.com/problems/number-of-good-paths/solutions/3052326/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a vector of size n which keeps `vals[i]` & count initialized to 1.
2. Create a vector of size n which keeps parent of that particular node initialize to itself i.e `y[i]=i`.
3. Sorting edges vector based on maximum node like in B/w 2 edges which contains greatest node gets after other one.
4. Then finding parents of both node in each edge.
a. if both count comes same we alot parent according to whoever is lesser.
b. else we alot parent a child and increase ans counter by product of both parent child which is no. of path b/w them.
5. returns ans.

# Complexity
- Time complexity: $$O(n+m*Log(m))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
	int find(vector<int>& y,int i) {
		if(i==y[i]) return i;
		y[i]=find(y,y[i]);
		return y[i];
	}
	int numberOfGoodPaths(vector<int>& vals, vector<vector<int>>& edges) {
        int n = vals.size(),m=edges.size(),ans=0;
		vector<vector<int>> x(n);
		vector<int> y(n);
		for(int i=0;i<n;i++){
			y[i]=i;
			x[i]={vals[i],1};
		}
        sort(edges.begin(),edges.end(),[&](vector<int>& a,vector<int>& b){
	    	return max(vals[a[0]],vals[a[1]])<max(vals[b[0]],vals[b[1]]);
		});
		for(int i=0;i<m;i++){
			int a=find(y,edges[i][0]);
			int b=find(y,edges[i][1]);
			if(x[a][0]!=x[b][0]){
				if(x[a][0]>x[b][0]) y[b]=a;
				else y[a]=b;
			}
			else{
				y[a]=b;
				ans+=x[a][1]*x[b][1];
				x[b][1]+=x[a][1];
			}
		}
		return ans+n;
	}
};
```

---


> # ***--> Don't Forget to Upvote. <--***

---


