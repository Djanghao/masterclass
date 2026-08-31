# Solution

**Author:** deleted_user
**Votes:** 526
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/3161191/](https://leetcode.com/problems/merge-intervals/solutions/3161191/)

---

```C++ []
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
      if(intervals.size()==1)
         return intervals;
      vector<pair<int,int>> p;
      for(int i=0;i<intervals.size();i++)
      {
          p.push_back({intervals[i][0],intervals[i][1]});
      } 
      sort(p.begin(),p.end());

      vector<vector<int>> ans;
      int f=p[0].first,s=p[0].second;
      for(int i=0;i<p.size()-1;i++)
      {
          vector<int> a(2);
          if(s>=p[i+1].first)
          {
              s=max(s,p[i+1].second);
          }
          else
          {
              a[0]=f;
              a[1]=s;
              f=p[i+1].first;
              s=p[i+1].second;
              ans.push_back(a);
          }
      } 
      int n=intervals.size();
      ans.push_back({f,s});
      return ans;
    }
};
```

```Python3 []
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key=lambda x: x [0])

        ans = []

        for interval in intervals:
            if not ans or ans[-1][1] < interval[0]:
                ans.append(interval)
            else:
                ans[-1][1] = max(ans[-1][1], interval[1])
        
        return ans
```

```Java []
class Solution {
    public int[][] merge(int[][] intervals) {
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		
		for (int i = 0; i < intervals.length; i++) {
			min = Math.min(min, intervals[i][0]);
			max = Math.max(max, intervals[i][0]);
		}
		
		int[] range = new int[max - min + 1];
		for (int i = 0; i < intervals.length; i++) {
			range[intervals[i][0] - min] = Math.max(intervals[i][1] - min, range[intervals[i][0] - min]); 
		}
		
		int start = 0, end = 0;
		LinkedList<int[]> result = new LinkedList<>();
		for (int i = 0; i < range.length; i++) {
			if (range[i] == 0) {
				continue;
			}
			if (i <= end) {
				end = Math.max(range[i], end);
			} else {
				result.add(new int[] {start + min, end + min});
				start = i;
				end = range[i];
			}
		}
		result.add(new int[] {start + min, end + min});
		return result.toArray(new int[result.size()][]);
	}
}
```
