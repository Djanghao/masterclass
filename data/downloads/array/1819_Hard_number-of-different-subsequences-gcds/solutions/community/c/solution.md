# [C++] with explanation | Simple Solution

**Author:** divyanshu1
**Votes:** 52
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142846/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142846/)

---

1. We will loop through all the possible gcd options i.e from 1 to max_element_in_array (if max_element in array is x then we can't have gcd greater than x)
2. Now we will check each multiples of gcd option (1 to max_element) and update our current_gcd.
3. If current_gcd is equal to gcd_option we increase ans by 1.

for understanding point 2 and 3->
suppose we have elements 4, 8, 12, 16, 20, 24, 28, 32, 36, . . . . . . .  i.e multiples of 4
gcd of any subsequence will be >=4
and if we keep on adding more element gcd will decrease or be same. eg
* we have 8, 16 -> gcd=8
* if we add 24 then gcd of 8, 16, 24 = 8
* if we add 36 then gcd of 8, 16, 24, 36 = 4

```
class Solution {
public:
    int countDifferentSubsequenceGCDs(vector<int>& a){
        int ans=0;
        int ma=INT_MIN;
        int n=a.size();
        int b[2000001]={0};     //array to check if number is present in given array (O(1))
        
		for(int i=0;i<n;i++){
            ma=max(ma, a[i]);      //find max element in array
            b[a[i]]=1;
        }
        
		for(int i=1;i<=ma;i++){    // loop for all possible candidates which can be gcd i.e from 1 to max_element
            int cgcd=0;     //current gcd
            
			for(int j=i;j<=ma;j+=i){     //loop for all multiples of i
                if(b[j]==1){     // if j is present in array
                    cgcd=__gcd(cgcd, j);
                }
               
			   if(cgcd==i){    //check if we can form subsequence with gcd
                    ans++;   //increment ans;
                    break;
                }
            }
        }
        return ans;
    }
};
//Fast io
static bool     _foo = ios::sync_with_stdio(false);
static ostream* _bar = cin.tie(NULL);
```

**Upvote !!** \uD83D\uDC4D