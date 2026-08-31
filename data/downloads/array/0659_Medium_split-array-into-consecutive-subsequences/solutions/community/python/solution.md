# ✔️Python & C++🔥Easiest approach Explained✅| Dictionary & Map | Easy understand ^_^

**Author:** luluboy168
**Votes:** 88
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447044/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447044/)

---

Idea:
* Using two map
	* One for how many sequences have that ending word
	* Another for how many numbers are unchecked
* Loop through every number
	* If there is sequence before the number, we add the number to the seq
	* If not we create a new seq using the number
	* If there aren't two numbers behind to let us create new seq, return False

**PYTHON code**
```
class Solution:
    def isPossible(self, nums: List[int]) -> bool:
        
        seq = defaultdict(int)      # key: ending number, val: how many seqs
        left = Counter(nums)        # key: number, val: how many of key are left unchecked
        
        for num in nums:
            if (not left[num]): continue   # the number is already in seqs, we don't need to check again
            
            if (seq[num-1] > 0):    # If there is sequence before the number, we add the number to the seq
                seq[num-1] -= 1 
                seq[num] += 1
                left[num] -= 1
                
            else:   # If not we create a new seq using the number
                if (not left[num+1] or not left[num+2]):  #  If there aren't two numbers behind to let us create new seq, return False
                    return False
                left[num] -= 1
                left[num+1] -= 1
                left[num+2] -= 1
                seq[num+2] += 1
        
        return True
```

**C++ code**
```
class Solution {
public:
    bool isPossible(vector<int>& nums) 
    {
        unordered_map<int,int>left;   // key: number, val: how many of key are left unchecked
        unordered_map<int,int>seq;    // key: ending number, val: how many seqs
        for (auto x: nums)
            left[x]++;

        for (auto x: nums)
        {
            if (left[x]==0) continue;   // the number is already in seqs, we don't need to check again
			
            if (seq[x-1]>0)  // If there is sequence before the number, we add the number to the seq
            {                
                left[x]--;
                seq[x-1]-=1;
                seq[x]+=1;                
            }
            else   // If not we create a new seq using the number
            {
                if (left[x+1]==0 || left[x+2]==0)   //  If there aren't two numbers behind to let us create new seq, return False
                    return false;
                left[x]--;
                left[x+1]--;
                left[x+2]--;
                seq[x+2]+=1;
            }
        }
        return true;        
    }
};
```
**Please UPVOTE if you LIKE!!**
