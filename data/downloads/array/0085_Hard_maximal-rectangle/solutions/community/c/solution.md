# Easy C++ soln based on Largest Histogram

**Author:** AnkurHaritosh
**Votes:** 79
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/872089/](https://leetcode.com/problems/maximal-rectangle/solutions/872089/)

---

```
class Solution {
public:
    
    int largestArea(vector<int>& histogram){
        int n=histogram.size(), area=0;
        stack<int> s;
        
        for(int i=0; i<n; i++){
            while(!s.empty() && histogram[s.top()]>=histogram[i]){
                int top = s.top();
                s.pop();
                
                int start;
                if(s.empty())
                    start = -1;
                else
                    start = s.top();
                    
                
                int curr_area = histogram[top] * (i - start -1);
                area = max(area, curr_area);
            }
            s.push(i);
        }
        
        while(!s.empty()){
            int top = s.top();
            s.pop();

            int start;
            if(s.empty())
                start = -1;
            else
                start = s.top();
            
            int curr_area = histogram[top] * (n - start -1);
            area = max(area, curr_area);
        }
        
        return area;
    }
    
    int maximalRectangle(vector<vector<char>>& matrix) {
        int m=matrix.size();
        if(m==0) return 0;
        int n=matrix[0].size(), result=0;
        vector<int> histogram(n, 0);
        
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(matrix[i][j]=='1')
                    histogram[j]+=1;
                else
                    histogram[j]=0;
            }
            
            result = max(result, largestArea(histogram));
            cout<<result<<" ";
        }
        return result;
    }
};

/*

2 0 2 1 1 

3 1 3 2 2 


Algorithm Outline:
largestArea()

        |
    |   |       |
|   |   |   |   |

1   2   3   1   2   -> 5
0   1   2   3   4   -> index

1. stack
2. iterate, check when value is less that top
3. While less than top, area = height of bar * distance from i (anchor)
4. Add to stack
5. Check while stack not empty
6. Return max_area

main()
1. Calculate histogra array for each row
2. Check largest area in that row
3. Return ans


Horizontal - can check length
Verticle - Keep height of each column top to bottum

calculate area for each histogram in each row 

1 0 1 0 0   -> 1
1 0 1 1 1   -> 3
1 1 1 1 1   -> 6
1 0 1 1 1

*/
```
I appreciate your upvote !!