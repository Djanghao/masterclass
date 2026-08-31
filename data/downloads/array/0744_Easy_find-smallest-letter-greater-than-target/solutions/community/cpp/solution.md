# C++ || 3 Approaches || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/760959/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/760959/)

---

***Runtime: 28 ms, faster than 87.59% of C++ online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 16.2 MB, less than 6.06% of C++ online submissions for Find Smallest Letter Greater Than Target.***

```
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        vector<int> alphabets(26, 0);
        for(int i=0; i<letters.size() ;i++){
            alphabets[letters[i] - 'a']++;
        }
        int index = (target - 'a' + 1)%26;
        while(alphabets[index] == 0){
            index = (index+1)%26;
        }
        return 'a'+index;
    }
};
```
***Runtime: 24 ms, faster than 95.45% of C++ online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 16.2 MB, less than 9.85% of C++ online submissions for Find Smallest Letter Greater Than Target.***
```
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int index = upper_bound(letters.begin(), letters.end(), target) - letters.begin();
        return index >= letters.size() ? letters[0] : letters[index];
    }
};
```
***Runtime: 28 ms, faster than 87.59% of C++ online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 15.9 MB, less than 77.27% of C++ online submissions for Find Smallest Letter Greater Than Target.***
```
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int low = 0;
        int high = letters.size()-1;
        while(low < high){
            int mid = low + (high - low)/2;
            if(letters[mid] <= target){
                low = mid+1;
            }else{
                high = mid;
            }
        }
        return letters[low] > target ? letters[low] : letters[0];
    }
};
```