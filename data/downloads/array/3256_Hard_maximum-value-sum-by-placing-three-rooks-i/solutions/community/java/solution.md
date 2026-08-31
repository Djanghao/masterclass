# Sort & Backtracking Java ~15ms! Python ~250ms!🚀 BEATS 100%✅

**Author:** vvk20
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651052/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/solutions/5651052/)

---

# Code
```java []

class Solution {
    public long max = Long.MIN_VALUE;
    public long maximumValueSum(int[][] board) {
        int m = board.length;
        int n = board[0].length;
        List<List<Integer>> valuesList = new ArrayList<>(m*n);
        //Get max 3 row values for all rows
        for(int i=0; i<m; ++i){
            List<List<Integer>> rowValues = new ArrayList<>(n);
            int max1 = -1;
            int max2 = -1;
            int max3 = -1;
            for(int j=0; j<n; ++j){
                rowValues.add(new ArrayList<Integer>(3));
                List<Integer> value = rowValues.get(rowValues.size()-1);
                value.add(board[i][j]);
                value.add(i);
                value.add(j);
                if(max1 == -1 || board[i][j] >= rowValues.get(max1).get(0)){
                    max3 = max2;
                    max2 = max1;
                    max1 = j;
                }else if(max2 == -1 || board[i][j] >= rowValues.get(max2).get(0)){
                    max3 = max2;
                    max2 = j;
                }else if(max3 == -1 || board[i][j] >= rowValues.get(max3).get(0)){
                    max3 = j;
                }
            }
            valuesList.add(rowValues.get(max1));
            valuesList.add(rowValues.get(max2));
            valuesList.add(rowValues.get(max3));
        }
        //Sort all the possible values
        Collections.sort(valuesList, new Comparator<List<Integer>>(){
            @Override
            public int compare(List<Integer> a, List<Integer> b){
                return b.get(0) - a.get(0);
            }
        });
        boolean[] rows = new boolean[m];
        boolean[] cols = new boolean[n];
        
        backtrack(0, 0, 0, valuesList, rows, cols);

        return max;
    }
    public void backtrack(int idx, long curSum, int nums, List<List<Integer>> valuesList, boolean[] rows, boolean[] cols){
        if(nums == 3){
            if(curSum > max){
                max = curSum;
            }
            return;
        }
        if(idx >= valuesList.size()){
            return;
        }
        long value = valuesList.get(idx).get(0);

        //Check if it is possible to get new max from here. If not, return.
        if(curSum + value * (3 - nums) < max){
            return;
        }

        //Pick
        int row = valuesList.get(idx).get(1);
        int col = valuesList.get(idx).get(2);
        if(!rows[row] && !cols[col]){
            rows[row] = true;
            cols[col] = true;
            backtrack(idx+1, curSum+value, nums+1, valuesList, rows, cols);
            rows[row] = false;
            cols[col] = false;
        }

        //Dont pick
        backtrack(idx+1, curSum, nums, valuesList, rows, cols);

    }
}
```
```python []
class Solution:
    def maximumValueSum(self, board: List[List[int]]) -> int:
        m = len(board)
        n = len(board[0])
        valuesList = []
        #Get max 3 row values for all rows
        for i in range(m):
            rowValues = []
            max1 = -1
            max2 = -1
            max3 = -1
            for j in range(n):
                value = []
                value.append(board[i][j])
                value.append(i)
                value.append(j)
                
                rowValues.append(value)
                if(max1 == -1 or board[i][j] >= rowValues[max1][0]):
                    max3 = max2
                    max2 = max1
                    max1 = j
                elif(max2 == -1 or board[i][j] >= rowValues[max2][0]):
                    max3 = max2
                    max2 = j
                elif(max3 == -1 or board[i][j] >= rowValues[max3][0]):
                    max3 = j
            valuesList.append(rowValues[max1])
            valuesList.append(rowValues[max2])
            valuesList.append(rowValues[max3])

        def sortFunc(val):
            return val[0]
        #Sort all the possible values    
        valuesList.sort(key=sortFunc, reverse=True)

        rows = [False] * m
        cols = [False] * n

        maxval = -10e9

        def backtrack(idx, curSum, nums, valuesList, rows, cols):
            nonlocal maxval

            if nums == 3:
                if curSum > maxval:
                    maxval = curSum
                return
            if idx >= len(valuesList):
                return
            value = valuesList[idx][0]

            #Check if it is possible to get new max from here. If not, return.
            if (curSum + value * (3 - nums)) < maxval:
                return
            
            #Pick
            row = valuesList[idx][1]
            col = valuesList[idx][2]
            if(not(rows[row]) and not(cols[col])):
                rows[row] = True
                cols[col] = True
                backtrack(idx+1, curSum+value, nums+1, valuesList, rows, cols)
                rows[row] = False
                cols[col] = False

            #Dont pick
            backtrack(idx+1, curSum, nums, valuesList, rows, cols)

        backtrack(0, 0, 0, valuesList, rows, cols)

        return maxval
```
