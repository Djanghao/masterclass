# Clean and Crisp C++

**Author:** Vibhoar_Bajaj
**Votes:** 13
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/2643035/](https://leetcode.com/problems/bulls-and-cows/solutions/2643035/)

---

```
class Solution {
public:
    string getHint(string secret, string guess) {
        unordered_map<char, int> m;
        int b =0;
        int c=0;
        for(int i =0;i<secret.size();i++){
            if(secret[i]== guess[i]){
                b++;
            }
            else{
                m[secret[i]]++;
            }
        }

        for(int i =0;i<secret.size();i++){
            if(secret[i]!= guess[i]){
                if(m[guess[i]]>0){
                    c++;
                    m[guess[i]]--;
                }
            }
        }
        string a = to_string(b) + "A" + to_string(c) + "B";
        return a ;
    }
};
//upvote pls