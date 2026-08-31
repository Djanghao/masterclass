# C++ O(n) solution with detailed explanation

**Author:** jhwang2030
**Votes:** 6
**Link:** [https://leetcode.com/problems/array-nesting/solutions/1904254/](https://leetcode.com/problems/array-nesting/solutions/1904254/)

---

The key points to this problem:

1. All the numbers in the input array are unique so it doesn't exist that two number point to the same index.
2. Based on above fact,  all sets are totally isolated. I mean one number of a set will never lead us to the number of another set.
3. Treat each set like a circle so no matter you start with any number of this set, it traverses the whole set.

```
class Solution {
public:
    int arrayNesting(vector<int>& nums) {
        vector<bool> visited(nums.size(), false);
        int result = 0;
		//Search for all sets
        for(int i = 0; i < nums.size(); i++)
        {
            int index = i;
            int count = 0;
			//Count the numbers in one set
            while(!visited[index])
            {
                visited[index] = true;
                index = nums[index];
                count++;                
            }
			//Record the longest set
            result = max(result, count);
        }
        return result;
    }
};
```

Please upvote if you find my explanation useful.