# C# Solution | Greedy | O(n)

**Author:** anshulgarg904
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5128218/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5128218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$ O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumBuckets(string hamsters) {
        if(!IsFeedable(hamsters)) return -1;

        int i = 0, res = 0;

        while(i < hamsters.Length){
            if(hamsters[i] == '.'){
                i++;
                continue;
            } 

            StringBuilder sb = new();
            int j = i;

            while(j < hamsters.Length && sb.Length < 3){
                sb.Append(hamsters[j++]);
            }

            if(sb.Equals("H.H")){
                res++;
                i = j;
            }
            else{
                res++;
                i++;
            }
        }

        return res;
    }

    private bool IsFeedable(string hamsters){
        if(hamsters.Length == 1 && hamsters[0] == 'H') return false;
        
        int last = hamsters.Length-1;

        if((hamsters[0] == 'H' && hamsters[1] == 'H') 
        || (hamsters[last] == 'H' && hamsters[last-1] == 'H')) return false;

        int i = 0, count = 0;

        while(i <= last){
            if(hamsters[i] == 'H'){
                count++;
            }
            else{
                count = 0;
            }

            if(count == 3) return false;
            i++;
        }

        return true;
    }
}
```