# Easy To Understand C++ Code with comments

**Author:** Vishalkd747
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931346/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931346/)

---

```
class Solution {
public:
    string minimizeResult(string expr) {
        //First find the index of '+ in expresseion. let it be idx.
		int idx;
        int n=expr.size();
        for(int i=0;i<n;i++)
            if(expr[i]=='+')
            {
                idx=i;
                break;
            }
			
		//Now find two numbers which are on left and right side of '+' sign in expression	
        string num1 = expr.substr(0,idx);
        string num2 = expr.substr(idx+1,n-idx-1);
		
		//b1 and b2 are for brackets . b1=left bracket, b2=right bracket
        int b1=0,b2=0;
        int min =INT_MAX;
        string ans;
		
		//p1 and p2 are product number outside the brackets i.e our expresion is p1(sum)p2
        int p1,p2;
		
		//Find all possible conditions, iterate left bracket over num1 and right bracket over num2
        for(int b1=0;b1<num1.size();b1++)
        {
            for(int b2=0;b2<num2.size();b2++)
            {
                // s1 and s2 are strings which are outside the left parenthesis and right parenthesis respectively 
                string s1=num1.substr(0,b1);
                string s2=num2.substr(b2+1,b2-num2.size()-1);
               
               //if any of the string is empty then its int value should be 1 else its same as string.
			   if(s1.empty())
                    p1=1;
                else
                    p1=stoi(num1.substr(0,b1));
                if(s2.empty())
                    p2=1;
                else
                    p2=stoi(num2.substr(b2+1,b2-num2.size()-1));
					
				//sum stores the numerical value of the sum between the parenthesis	
                int sum=stoi(num1.substr(b1,num1.size())) + stoi(num2.substr(0,b2+1));
               //eval stores the numerical value of whole expression
			   int eval=p1*sum*p2;
			   
			   //if velue of expression is less then minimum, then make ans string = s1(sum) s1
                if(eval<min){
                    
                    min=eval;
                    ans=s1+"("+num1.substr(b1,num1.size())+"+"+num2.substr(0,b2+1)+")"+s2;
                
                }
                
            }
        }
        return ans;
        //return final string
        
    }
};
```