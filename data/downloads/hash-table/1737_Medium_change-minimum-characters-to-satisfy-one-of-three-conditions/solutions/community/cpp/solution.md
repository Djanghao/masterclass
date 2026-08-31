# 💻✔✨ C++ || Hash Map || Greedy Compare || Commented Code

**Author:** batman14
**Votes:** 2
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3428523/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3428523/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. find frequencies all of alphabet in both strings as `mpa & mpb`.
2. compute the prefix sum of each alphabet for both mpa & mpb as `prefixA & prefixB.`
3. Check making string a smaller than string b for all alphabet from 'a' to 'y', as `val1`.
4. Check making string a larger than string b for all alphabet from 'a' to 'y', as `val2`.
5. Check making string a eqaul to string b for all alphabet from 'a' to 'z', as `val3`.
6. Return the `min of val1, val2 and val3`.


![download (1).jfif](./images/0.jpeg)


# Complexity
- Time complexity : O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity  : O(4*26) => O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minCharacters(string a, string b) {
        int n1 = a.size();
        int n2 = b.size();

        vector<int> mpa (26,0);
        vector<int> mpb (26,0);

        vector<int> prefixA, prefixB;

        //finding frequency of each aplhabet in Asring & Bstring
        for(auto i : a) 
            mpa[i-'a']++;
        for(auto i : b) 
            mpb[i-'a']++;

        //evaluating the prefix Sum for both mpa & mpb
        int al=0, bl=0;
        for(int i=0; i<26; i++) {
            al += mpa[i];
            bl += mpb[i];
            prefixA.push_back(al);
            prefixB.push_back(bl);
        } 

        //making Astring smaller than Bstring for all a->y (can't do that on z)
        int val1 = n1+n2;
        for(int i=0; i<25; i++) {
            int achange = n1 - prefixA[i];
            int bchange = prefixB[i];
            int curr = achange + bchange; 
            val1 = min(curr,val1);
        } 

        //making Bstring smaller than Astring for all a->y (can't do that on z)
        int val2 = n1+n2;
        for(int i=0; i<25; i++) {
            int achange = prefixA[i];
            int bchange = n2 - prefixB[i];
            int curr = achange + bchange; 
            val2 = min(curr,val2);
        } 

        //making Astring equal to Bstring for all a->z
        int val3 = n1+n2;
        for(int i=0; i<26; i++) {
            int achange = n1 - mpa[i];
            int bchange = n2 - mpb[i];
            int curr = achange + bchange; 
            val3 = min(curr,val3);
        }
        
        return min(val3, min(val1,val2)); 
    }
};
```

![images.jfif](./images/1.jpeg)
