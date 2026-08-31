# Video Explanation (Intuition behind every optimisation)

**Author:** codingmohan
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546880/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546880/)

---

# Explanation

[Click here for the video](https://youtu.be/e09nxcVafuE)

# Code
```
class Solution {
public:
    int numberOfSubstrings(string s) {
        int n = s.length();
        int cnt = 0;
        
        vector<int> zro;
        for (int i = 0; i < n; i ++)
            if (s[i] == '0') zro.push_back(i);
        
        if (zro.empty()) return n*(n+1)/2;
        int zro_ind = 0;
        
        for (int l = 0; l < n; l ++) {
            while (zro_ind < zro.size() && zro[zro_ind] < l) zro_ind ++;
            
            vector<int> valid_zro;
            for (int z = zro_ind; z < zro.size() && z < (zro_ind+201); z ++)
                valid_zro.push_back(zro[z]);
            valid_zro.push_back(n);
            
            int zro_cnt = 0;
            int last = l;
            
            for (auto ind : valid_zro) {
                int min_one = zro_cnt*zro_cnt;
                int min_ind = max(l + min_one + zro_cnt - 1, last);

                if (min_ind < ind) cnt += (ind - min_ind); 
                
                last = ind;
                zro_cnt ++;
            }
        }
        return cnt;
    }
};
```