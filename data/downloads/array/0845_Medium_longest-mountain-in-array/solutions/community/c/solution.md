# C++ easy solution with comments and algorithm

**Author:** s_tripathi
**Votes:** 44
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/1215470/](https://leetcode.com/problems/longest-mountain-in-array/solutions/1215470/)

---


REMEMBER TO UPVOTE THE ANSWER

Time Complexity O(n)
Space Complexity O(1)
```
class Solution {
public:
    int longestMountain(vector<int>& arr) {
        int n = arr.size();
        // 1. IDENTIFY PEAKS
        // 2. TRAVERSE BACKWARDS WHILE PREVIOUS ELEMENT -
        // - IS SMALLER THAT CURRENT (i.e. GO TO THE START ROOT OF THE MOUNTAIN)
        // 3. TRAVERSE FORWARD WHILE NEXT ELEMENT IS SMALLER THAN CURRENT 
        // (i.e. GO TO THE END ROOT OF THE MOUNTAIN)
        // 4 . ADD THEM TO CALCULATE THE MOUNTAIN LENGTH
        int max_length = 0;
        for(int i=1;i<n-1;i++)
        {
            if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) //PEAK CONDITION
            {
                int start_root = i;
                int end_root = i;
                while( start_root>0 && arr[start_root] > arr[start_root-1])
                {
                    start_root--; //getting start root
                    
                }
                while( end_root<n-1 && arr[end_root] > arr[end_root+1] )
                {
                    end_root++; //getting end root
                }
                max_length = max(max_length,(end_root-start_root+1));
                i = end_root;
            }
        }
        return max_length;
    }
};
```