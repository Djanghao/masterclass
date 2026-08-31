# C++ 100% beats

**Author:** ramudarsingh46
**Votes:** 6
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/5683139/](https://leetcode.com/problems/solve-the-equation/solutions/5683139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution{
public:
    int convert(string n,int i){
        if(i>=n.size()) return 0;
        return (n[i]-48)*pow(10,n.size()-i-1)+convert(n,i+1);
    }
    void generate(string& s,int& i,int& x,int& val){
        if(i>=s.size()) return;
        if(s[i]=='=') return;
        int sign=1;
        if(s[i]=='+'){
            i++;
        }
        else if(s[i]=='-'){
            i++;
            sign=-1;
        }
        if(i<s.size() && s[i]>=48 && s[i]<=57){
            int j=i;
            while(j<s.size() && s[j]>=48 && s[j]<=57) j++;
            int u=(convert(s.substr(i,j-i),0));
            u*=sign;
            if(j<s.size() && s[j]=='x'){
                x+=(u);
                j++;
            }
            else{
                val+=u;
            }
            i=j;
            generate(s,i,x,val);
        }
        else if(i<s.size() && s[i]=='x'){
            x+=(sign);
            i++;
            generate(s,i,x,val);
        }
        return;
    }
    string solveEquation(string equation){
        int x1=0;
        int val1=0;
        int i=0;
        generate(equation,i,x1,val1);
        i++;
        int x2=0,val2=0;
        //cout<<x1<<" "<<val1<<endl; 
        generate(equation,i,x2,val2);
        int val=val2-val1;
        int x=x1-x2;
        if(x==0 && val==0) return "Infinite solutions";
        else if(x==0 && val!=0) return "No solution";
        else{
            int v=val/x;
            int sign=1;
            if(v<0){
                sign=-1;
                v=abs(v);
            }
            string s="";
            if(v==0) s+=(v+48);
            else{
                while(v>0){
                    int rem=v%10;
                    s+=(rem+48);
                    v/=10;
                }
            }
            reverse(s.begin(),s.end());
            if(sign==-1){
                return "x=-"+s;
            }
            else return "x="+s;
        }
    }
};
```