# cpp simple solution explanation with example beats 100% time and space

**Author:** _MrBing
**Votes:** 21
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/651391/](https://leetcode.com/problems/monotone-increasing-digits/solutions/651391/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for Monotone Increasing Digits.
Memory Usage: 5.9 MB, less than 100.00% of C++ online submissions for Monotone Increasing Digits.
Logic : any number 'xxxxx..' a number monotonically increasing largest but smaller  than original number will be one less than the point before which every number is monotonically increasing  and after that point all places are filled whith 9 to get maximum

eg: 5 4 3 7 7 6
    7 6 if this was our number than 6 9 will be ans which is 7-1 and rest 9
    7 7 6 ------------------------- 6 9 9
    3 7 7 6 -----------------------3 7(till here monotonically increasing so one less than this is 3 6 and rest 9 9 ) 3 6 9 9 
     4 3 7 7 6 --- 3 9 9 9 9
     5 4 3 7 7 6 -- 4 9 9 9 9 9  
   ``` 
    class Solution {
public:
    int monotoneIncreasingDigits(int N) {
        if(N < 10){
            return N;
        }
        string s = to_string(N);
        int index = s.length();
        int i;
        for(i = index -1 ; i > 0; i--){
            if(s[i-1] > s[i]){
                s[i-1]--;
                index = i; 
            }
        }
        for(i = index; i < s.length(); i++){
            s[i] = '9';
        }
        N = stoi(s);
        return N;
    }
};