# C++ 3 efficient solutions.

**Author:** IgorB
**Votes:** 3
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/590959/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/590959/)

---

*Note: if we found min column with value 1 in the current row - no need to search past it in following rows.*

Recursive:
```
class Solution {
    public:
        int leftMostColumnWithOne(BinaryMatrix &binaryMatrix) {
            int rows = binaryMatrix.dimensions().front();
            int max_col = binaryMatrix.dimensions().back()-1;
            int res = -1;
            for(int i = 0; i < rows; ++i)
                if(binaryMatrix.get(i, max_col))
                    res = max_col = first_one(binaryMatrix, i, 0, max_col);
            return res;
        }

    protected:
        int first_one(BinaryMatrix &binaryMatrix, int row, int start, int end)
        {
            if(start > end) return start;
            int mid = (start+end)/2;
            binaryMatrix.get(row, mid) ? end = mid-1 : start = mid+1;
            return first_one(binaryMatrix, row, start, end);
        }
};
```
Iterative:
```
class Solution {
    public:
        int leftMostColumnWithOne(BinaryMatrix &binaryMatrix) {
            int rows = binaryMatrix.dimensions().front();
            int max_col = binaryMatrix.dimensions().back()-1;
            int res = -1;
            for(int i = 0; i < rows; ++i)
                if(binaryMatrix.get(i, max_col))
                {
                    int start = 0, end = max_col;
                    while(start <= end)
                    {
                        int mid = (start+end)/2;
                        binaryMatrix.get(i, mid) ? end = mid-1 : start = mid+1;
                    }
                    res = max_col = start;
                }
            return res;
        }
};
```
Or a different way:
```
class Solution {
    public:
        int leftMostColumnWithOne(BinaryMatrix &binaryMatrix) {
            int rows = binaryMatrix.dimensions().front();
            int cols = binaryMatrix.dimensions().back();
            int row = 0, col = cols-1;
            while(row < rows && col >= 0)
                binaryMatrix.get(row, col) ? --col : ++row;
            return col == cols-1 ? -1 : col+1;
        }
};
```