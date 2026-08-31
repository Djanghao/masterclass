# intuition Explain || Maths || Java simple solution || (O(nlogn)|| sorting

**Author:** Princearya23
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2063469/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2063469/)

---


Applying the slope formula:
the slopes of parallel lines are equal. Note that two lines are parallel if their slopes are equal and they have different y-intercepts. In other words, perpendicular slopes are negative reciprocals of each other.
(y2 - y1)/(x2-x1) = (y4 - y3)/(x4-x3)

Let dy = y2 - y1
Let dx = x2 - x1

Let dy1 = y4 - y3
Let dx1 = x4 - x3

Now just check 
(dx1*dy != dx*dy1)  if they are not equal then lines++

and keep modifying there dx and dy
dy = dy1
dx = dx1

// code
class Solution {
    public int minimumLines(int[][] stockPrices) {
        
        int n = stockPrices.length;
        if(n == 1 || n == 2) return n - 1;
        
       
        Arrays.sort(stockPrices,(a,b) ->{
              return a[0] - b[0];
        });
    
        
        int x2 = stockPrices[1][0];
        int x1 = stockPrices[0][0];
        
        int y2 = stockPrices[1][1];
        int y1 = stockPrices[0][1];
        
        
        int dx = x2 - x1;
        int dy = y2 - y1;
    
        int lines = 1;
        
        for(int i=2;i<n;i++){
            
            int x4 = stockPrices[i][0];
            int x3 = stockPrices[i-1][0];
            
            int y4 = stockPrices[i][1];
            int y3 = stockPrices[i-1][1];
             
            int dx1 = (x4 - x3);
            int dy1 = (y4 - y3);
            
            if(dx1*dy != dx*dy1) lines++;
            dy = dy1;
            dx = dx1;
        }
        return lines;
    }
}