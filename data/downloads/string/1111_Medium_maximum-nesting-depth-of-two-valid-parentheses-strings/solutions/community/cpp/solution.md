# cpp/c++ easy to understand , beginner friendly solution with comments.

**Author:** priyank_2001
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1201480/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/1201480/)

---

```
comments are written inside //  //.

class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq) {
        vector<int>p;                                    // first wee created vector tu put store resulting values//
        int max=0;                                       // created variable and assign with zero to count brackets//
        for(int i=0;i<seq.length();i++)       // traverse overr string //
        {
            if(seq[i]=='(')                          // cheacked for opening bracket condition//
                max++;                            //increse count//
            p.push_back(max%2);        //here is the logic "max%2" it gives the required op//
            if(seq[i]==')')                    //condition if brackets are empty//
                max--;                        //count decreases//
        }
        return p;                        //returned the vector as op//
    }
};
```
## *please upvote if yoou like the solution and feel free to ask any doubt in comments will surely reply.*