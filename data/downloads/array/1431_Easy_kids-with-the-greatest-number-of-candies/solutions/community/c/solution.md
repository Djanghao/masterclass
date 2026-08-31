# C++ (Speed,Mem)=(100%,100%)  with O(n) and O(n) + Video

**Author:** crab_10legs
**Votes:** 42
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/616048/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/616048/)

---

https://www.youtube.com/watch?v=xPp3wMEOTBI
```
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        
        vector<bool> out;
        int max = *max_element(candies.begin(), candies.end());
        
        for(int i=0; i < candies.size(); i++){
            if(candies[i]+extraCandies >= max)
                out.push_back(true);
            else
                out.push_back(false);
        }
        
        return out;
    }
```