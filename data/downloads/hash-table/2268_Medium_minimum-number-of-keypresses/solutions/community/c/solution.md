# Simple C++ solution explained with O(n) time complexity explained

**Author:** harsha4148
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2432518/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2432518/)

---

Since we only have lowercase English letters we can use an array of size 26. 
Thus, we get the space complexity as constant.
Logic: 
Count the frequency of each letter
Now distribute it in such a way that it minimizes teh number of key presses. 
How do you do it? 
Sort the entire frequency in descending order.
Let's say we get top 5 frequencies as follows:
'a' - 5
'e' - 4
's' - 4
't' - 3
'o' -3
Now if we choose the keypad ordering such that these 5 letters go into 1st postion of numbers 1-5 we only have to click it once (minimum) to get that letter:

1(a..)  2(e..) 3(s..)
4(t..)  5(o..) 6(...)
7(...)  8(...)  9(...)

Similarly we will do for each letter. So the top 9 frequency letters have to be clicked only once. The next 9 frequency letters require you to press it twice and the remaining 8 letters requires you to press 3 times. 
Then you return the total count.

If n is the total length of string s. 
Time Complexity = **O(n)**
Space Complexity = **O(1)**

Since, array size is constant the time to sort the array is also constant i.e. 26 log26

```
class Solution {
public:
    int minimumKeypresses(string s) {
        vector<int> arr(26,0);
        for(char ch:s)
        {
            arr[ch-'a']++;
        }
        sort(arr.begin(),arr.end(),greater<int>());
        int ans=0;
        for(int i=0;i<26;i++)
        {
            if(i<=8){
                ans+=arr[i];
            }
            else if(i>8 && i<=17){
                ans+=(2*arr[i]);
            }
            else{
                ans+=(3*arr[i]);
            }
        }
        return ans;
    }
};