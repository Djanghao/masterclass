# [C++] Solution Explained First and Last Element

**Author:** priys
**Votes:** 42
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/807526/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/807526/)

---

There are 2 cases:

##### 1.   if start <= end
**Example 1: **
 ```
 n = 7  and  array = [1, 3, 5, 1, 2, 3]
				1  2  3  4  5  6  7              --1st circle
				1  2  3                              --2nd circle
```
			Note: in this case ans will be [1, 2, 3] which are being repeated twice. i. e. range array[start] to array[end]
			ans = [1,2,3]
**Example 2:**
```
			n = 2 and array = [2, 1, 2, 1, 2, 1, 2]
				2
				1  2
				1  2
				1  2
```
			Note: array[start] == array[end] so the ans is [2]
			ans = [2]

##### 2. if start > end
**Example 1**
```
			n = 2 and array = [2, 1, 2, 1, 2, 1]
					 2
				 1  2
				 1  2
				 1
```
			Note: ans = [1 to array[end], array[start] to n]	in this case 1 to array[end]: [1]
			and array[start] to n: [2]
			ans = [1,2]
**Example 2**
```			n = 5 and array = [3, 1, 3, 1]
						 3  4  5
				 1  2  3  4  5
				 1
```
			 Note: ans = 1 to array[end]  --->   [1] +
			array[start] to n ---->  [3, 4, 5]					
			ans = [1, 3, 4, 5]


**Solution:**
```
class Solution {
public:
    vector<int> mostVisited(int n, vector<int>& rounds) {
        vector <int> ans;
        int size = rounds.size();
        
        if(rounds[0] <= rounds[size-1]) {
            for(int i=rounds[0]; i<= rounds[size-1]; i++) {
                ans.push_back(i);
            }
            return ans;
        }
        else {
            for(int i=1; i<= rounds[size-1]; i++) {
                ans.push_back(i);
            }   
            
            for(int i=rounds[0]; i<=n; i++) {
                ans.push_back(i);
            }
        }
        
        return ans;
    }
};
```
		