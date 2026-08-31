# C++, bitset

**Author:** michelusa
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/1413234/](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/1413234/)

---

* using a bitset to track if number at each index satisfy the conditions to be found
* thinking about it, when checking the second condition, the bitset could be left unchanged: instead we increment the count of solutions right there.  However, I felt the current code is a bit clearer the first way - imho

```

int binarySearchableNumbers(vector<int>& nums) {
        /*
        x should be greater than all left 
        x must be lesser than all right

       */  
        bitset<100000> res;        
        int max_seen = nums.front();
        
        for (size_t idx = 0; idx != nums.size(); ++idx) {
            max_seen = max(max_seen, nums[idx]);            
            res[idx] =   nums[idx] >= max_seen ?  1 :0 ;                
        }

        int min_seen = nums.back();
        for (size_t idx = nums.size(); idx-- != 0;) {
            min_seen = min(min_seen, nums[idx]);
            if (res[idx])
                res[idx] =  nums[idx] <=  min_seen   ? 1 : 0;
        }
        return res.count();
    
    }
