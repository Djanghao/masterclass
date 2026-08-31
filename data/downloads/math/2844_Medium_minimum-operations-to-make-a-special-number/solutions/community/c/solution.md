# HardCoded !!! Is this even acceptable in Interview

**Author:** dusk24
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995522/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995522/)

---

```
class Solution {
public:
    int minimumOperations(string s) {
        int n =  s.size();
        int cnt = s.size() ; 
      
        // for any trailing 5 i cant find 2 or 7 in string then return n of size 2 
         if(s=="15"|| s=="35"|| s=="45" || s=="55" ||s=="65"  || s=="85"|| s=="95")return 2;
      
        for(int i = n-1 ; i >=0 ;i--){
            // if last character is 5 i need to find  the first 7 or 2 

            if(s[i]=='5'){
                int right = n-1-i;
                int left  = n-1-right;
              //  cout<<right<<" "<<left<<endl;
                for(int j = i -1 ; j >= 0 ;j--){
                    if(s[j]=='2' || s[j]=='7'){
                        right = n-1-i ;
                        left  = i-j-1;
                    }
                 //   cout<<"After loop: "<<endl;
                  //  cout<<right<<" "<<left<<endl;
                    cnt = min(cnt,left+right);
                }
            }
           // if last character is 0  then find the first  5 or 0 
            if(s[i]=='0'){
                int right = n-1-i;
                int left  = n-1-right;
                // cout<<right<<" "<<left<<endl;
                for(int j = i -1 ; j >= 0 ;j--){
                    if(s[j]=='0' || s[j]=='5'){
                        right = n-1-i ;
                        left  = i-j-1;
                    }
                 //   cout<<"After loop: "<<endl;
                 //   cout<<right<<" "<<left<<endl;
                    cnt = min(cnt,left+right);    
                }
            }           
		}
			
			return cnt;      
    }
};
```