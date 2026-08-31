# ✅✅ 0 MS || Complexity : O(N)/O(1) || C++

**Author:** kawanchaudhary
**Votes:** 3
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/2281386/](https://leetcode.com/problems/solve-the-equation/solutions/2281386/)

---

```
class Solution {
public:
    int num(int i, int end, string eq){
        char ch = '+';
        int left = 0;
        while(i < end){
            int x = 0;
            while(i<end && isdigit(eq[i])){
                x = x*10 + (eq[i]-'0');
                i++;
            }
            if(i < end && eq[i] == 'x'){
                i++;
                continue;
            }
            left = left + (ch == '-' ? -x : + x);
            ch = eq[i];
            i++;
        }
        return left;
    }
    
    int xNum(int i, int start, string eq){
        int xVal = 0;
        while(i >= start){
            if(eq[i] == 'x'){
                i--;
                char ch = '+';
                int x = 0;
                int y = 1;
                while(i >= start && isdigit(eq[i])){
                    x = x + (eq[i]-'0')*y;
                    y *= 10;
                    i--;
                }
                if(y == 1) x = 1;
                if(i >= start) ch = eq[i];
                xVal = xVal + (ch == '-' ? -x : + x);
            }
            i--;
        }
        return xVal;
    }
    
    string solveEquation(string eq) {
        int n = eq.size();
        int mid = 0 ;
        while(eq[mid] != '='){
            mid++;
        }        
        //Before:        
        int left = num(0, mid, eq);
        int xLeft = xNum(mid-1, 0, eq);
        
        //After:
        int right = num(mid+1, n, eq);
        int xRight = xNum(n-1, mid+1, eq);
        
        //testing:
//         cout<<left<<" "<<right<<endl;
//         cout<<xLeft<<" "<<xRight;
        
        if(xLeft == xRight && left == right){
            return "Infinite solutions";
        }
        else if(xLeft == xRight){
            return "No solution";
        }
        else if(xLeft > xRight){
            int x = xLeft-xRight;
            string str = "x=" + to_string((right-left)/x);
            return str;
        }
        else{
            int x = xRight-xLeft;
            string str = "x=" + to_string((left-right)/x);
            return str;
        }
        
    }
};
```
# Please Upvote if you like this