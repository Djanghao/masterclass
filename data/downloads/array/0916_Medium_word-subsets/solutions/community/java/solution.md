# C++ | Java | Python || Full Explanations with comments

**Author:** nitin23rathod
**Votes:** 52
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2352794/](https://leetcode.com/problems/word-subsets/solutions/2352794/)

---

**Approch :**
* we know that order doesn't matter and all word of B are subset of word in A then only that word is considered. Having this in mind lets make a common word through B and just check that word as a subset in A.
* we can make a frequency map. instead of using Hashmap we can use array of 26(as all are lowercase) to store frequency.

**Time Compexity :** `O(A + B)`
**Space Compexity :** `O(1)`   -> constant 

```
class Solution {
public:
    vector<string> wordSubsets(vector<string>& A, vector<string>& B) {
        vector<int>freq(26,0);           //create the frequency count of elements of B.
        for(auto x:B){
            vector<int>temp(26,0);
            for(auto y:x){
                temp[y-'a']++;
                freq[y-'a'] = max(freq[y-'a'],temp[y-'a']); 
            }
        }
        vector<string>res;
        for(auto x:A){
            vector<int>temp(26,0);
            for(auto y:x) temp[y-'a']++;    //create the frequency count for all the elements in A
            bool flag=true;
            for(int i=0 ; i<26 ; i++)
                if(freq[i]>temp[i]) {flag=false;break;}         //check if the frequency count of B is subset of all A elements
            if(flag) res.push_back(x);
        }
        return res;
    }
};
```
**UPVOTE if found it helpful feel free to reach out to me or comment down if you have any doubt**

**Java :**
@lee215
```
 public List<String> wordSubsets(String[] A, String[] B) {
        int[] count = new int[26], tmp;
        int i;
        for (String b : B) {
            tmp = counter(b);
            for (i = 0; i < 26; ++i)
                count[i] = Math.max(count[i], tmp[i]);
        }
        List<String> res = new ArrayList<>();
        for (String a : A) {
            tmp = counter(a);
            for (i = 0; i < 26; ++i)
                if (tmp[i] < count[i])
                    break;
            if (i == 26) res.add(a);
        }
        return res;
    }

    int[] counter(String word) {
        int[] count = new int[26];
        for (char c : word.toCharArray()) count[c - 'a']++;
        return count;
    }
```
 
 **Python :**
 @leihao1313

```
 def wordSubsets(self, A, B):
        count = collections.Counter()
        for b in B:
            count |= collections.Counter(b)
        return [a for a in A if not count - Counter(a)]
```