# C++ for Beginners

**Author:** ritikmishra
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2452066/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2452066/)

---

We simply keep counting the current sum of pixels, and as soon as it exceeds 100, increment the lines required by one.

	vector<int> numberOfLines(vector<int>& widths, string s) {
        int cnt=1, currSum=0;
        
        for (int i=0;i<s.size();i++) {
            currSum += widths[s[i]-'a'];
            if(currSum > 100) {
                currSum = widths[s[i]-'a'];
                cnt++;
            }
        }
        
        return {cnt,currSum};
    }