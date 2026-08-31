# faster than 100.00%  | O(N) | (Java and C++)

**Author:** IAmCoderrr
**Votes:** 269
**Link:** [https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2261229/](https://leetcode.com/problems/move-pieces-to-obtain-a-string/solutions/2261229/)

---

I am ignoring all the empty _ charcater,

As soon as i encounter any character other then _ ,
Then the characters must be same,

if It is 'L'
 then this condition must hold j>= i , if in target string it found at index i and , in st string it found at J
 because we can move 'L' charcater to left , means left in st string , 
otherwise i should return fase;

same with 'R'
then this condition must hold j<= i , if in target string it found at index i and , in st string it found at J
because we can move 'R' charcater to right ,means  right in st string , 
otherwise i should return false;

**Time complexityO(N)**
because every time either i increase I , or J , or both

**Space complexityO(1)**

**Upvote if you find this solution helpfull**
```
bool canChange(string st, string tar) {
        int n=tar.length();
        int i=0,j=0;
        while(i<=n && j<=n){
            
            while(i<n && tar[i]=='_') i++;
            while(j<n && st[j]=='_') j++;
            
            if(i==n || j==n){
                return i==n && j==n;
            }
            
            if(tar[i]!=st[j]) return false;
            
            if(tar[i]=='L'){
                if(j<i) return false;
            }
            else{
                if(i<j) return false;
            }
            
            i++;
            j++;
        }
        return true;
    }
	```