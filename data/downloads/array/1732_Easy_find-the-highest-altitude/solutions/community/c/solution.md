# JAVA || C++ || PYTHON || SELF EXPLANATORY

**Author:** rajat_gupta_
**Votes:** 48
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/1031436/](https://leetcode.com/problems/find-the-highest-altitude/solutions/1031436/)

---

# **CPP**

**Runtime: 0 ms, faster than 100.00% of C++ online submissions
Memory Usage: 8 MB, less than 100.00% of C++ online submissions**
```
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int max_alt=0;
        int curr_alt=0;
        for(int i=0;i<gain.size();i++){
            curr_alt+=gain[i]; 
            max_alt=max(curr_alt, max_alt);
        }
        return max_alt;
    }
};

//TC: O(n), SC: O(1)
```

# **JAVA**

**Runtime: 0 ms, faster than 100.00% of Java online submissions
Memory Usage: 36.4 MB, less than 100.00% of Java online submissions**
```
class Solution {
    public int largestAltitude(int[] gain) {
         int max_alt=0;
        int curr_alt=0;
        for(int i=0;i<gain.length;i++){
            curr_alt+=gain[i]; 
            max_alt=Math.max(curr_alt, max_alt);
        }
        return max_alt;
    }
}

//TC: O(n), SC: O(1)
```

# **PYTHON**
**Runtime: 32 ms, faster than 100.00% of Python3 online submissions
Memory Usage: 14.2 MB, less than 100.00% of Python3 online submissions**

```
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        curr_alt=0
        max_alt=0
        for i in range(0,len(gain)):
            curr_alt+=gain[i]
            max_alt=max(max_alt,curr_alt)
        return max_alt
		
//TC: O(n), SC: O(1)		
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
