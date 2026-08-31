# Que ko feel krte hai 😊😊 || Hindi Explaination 💥✅ || C++ Code

**Author:** abhirai1
**Votes:** 51
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742814/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* agar mai sabka first occurence remove krte ja rha hu
* to phir, yr to confirm hai ki, jo element last me bachenge
* unki freq sabse maximum hogi
* ( \uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F\uD83E\uDD37\u200D\u2642\uFE0F , es baat ko abhi achche se feel krta hu)
# Approach
<!-- Describe your approach to solving the problem. -->
* code me baat krte hai...pure feel ke sath
# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string lastNonEmptyString(string s) {

        // why unordered_map ?
        // maine bola freq ke liye..
        // lekin freq kyu nikalu ? mai..
        // good question...\uD83E\uDD37\u200D\u2642\uFE0F

        // dekho question me mention hai ki 
        // ham sabki occurence ki pehli occurence remove krenge 
        // thik n..

        // ab n ek baat socho 
        // copy pe 5 gole bnanao
        // do ko A, do ko B aur ek ko c
        // rakho, ab jaise jaise tum har step me
        // first occur ko remove krte jaoge
        // socho ki last tak vhi elements bachenge jiski, freq
        // sabse jayda hogi..
        unordered_map<char,int> ump; 
        int maxi=0; 
        for(auto it:s){
            ump[it]++;
            // sabse maximum freq nikalne ke liye
            maxi=max(ump[it],maxi);
        }
        
        string ans="";

        // pichche se kyu traverse ?
        // dekho simple hai...hme hamesha se 
        // aage se hi remove kr rhe hai
        // to last me jo elmenent 
        // maximum time aaya hai    
        // uski last wali occur sabse last me htegi

        // nhi smjhe..koi na
        // aaaaaa
        // aage se ek ek krke , a ko remove kro, to sabse last me kaun
        // sa a hatega, jo sabse last me hai, vhi n
        // esiliye....last se traverse kiya ?
        // abhi bhi doubt hai....comment kro, smjha dunga..
        // aur exp ke sath...
        for(int i=s.size()-1;i>=0;i--){
            if(ump[s[i]]==maxi){
                // jo bhi element mila jiski  freq maximum hia
                // vo mere answer ka part hai
                // kyuki vo last tak bachega
                ans.push_back(s[i]);
                // minus esiliye kiya, taki ki
                // jab uska agla occur, aaye to,
                // uski freq ,maxi ke brabar na ho, kyuki ek hi occur
                // lenge n...
                // if doubt..pareshan nhi hona...
                // your friend abhirai1 is here..
                // feel free to ask (\uD83D\uDE0A\uD83D\uDE0A\uD83D\uDE0A)
                ump[s[i]]--;
            }
        }

        // pichche se traverse kar rhe hai n
        // to answer ulta store ho gya hau
        // esiliye
        reverse(ans.begin(),ans.end());

        // happy coding \uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDC4D\uD83D\uDE0A
        return ans;
    }
};
```