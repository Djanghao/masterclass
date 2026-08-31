# C++ simple solution using next_permutation

**Author:** mnkumar8721
**Votes:** 106
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1186818/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1186818/)

---

We'll first find out kth permutation using next_permutation function.

```
original: 5489355142 and kth-permutation: 5489355421
```

**CATCH : Just find the min no. of steps to make original == kth-permutation  \uD83D\uDC40**
```
class Solution {
public:
    
    // GREEDY APPROACH
    // min steps to make strings equal
    
    int minSteps(string s1, string s2) {
        int size = s1.length();
        int i = 0, j = 0;
        int result = 0;
  
        while (i < size) {
            j = i;
            while (s1[j] != s2[i]) j++;
			
            while (i < j) {
                swap(s1[j], s1[j-1]);
                j--;
                result++;
            }
            i++;
        }
        return result;
    }
    
    int getMinSwaps(string num, int k) {
        string original = num;
        
        while(k--) {
            next_permutation(num.begin(), num.end());
        }
        
        return minSteps(original, num);
    }
};
```

**Qn: WHY IS GREEDY APPROACH WORKING HERE?**

First, we are not doing anything if the characters are at their original place.  

Second, Since we are bringing character to its original position (if it was not), that was the minimum effort (steps) we will have to put in since there is no other way of bringing it to original position **with only adjacent swaps.**

And now we can apply same thing to the rest of the string. Plus we are swapping end to start, which shifts characters towards the end, and ultimately close to their original position, *because everything before that is already in their original position.*

PS - I did it quickly, please let me know in comments if something seems off or not understandable. Thanks!