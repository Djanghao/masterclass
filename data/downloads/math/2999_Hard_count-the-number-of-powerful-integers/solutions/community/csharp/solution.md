# Beats 100% O(D^2) DP-Soln

**Author:** harsh007kumar
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4528608/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4528608/)

---

# Complexity
- Complexity:
    Time O(d^2) | Space O(d), d = no of digits in finish i.e. max 15 as given in problem constraints

![image.png](./images/0.png)

# Code
```
public class Solution {
    // Time O(d^2) | Space O(d), d = no of digits in finish i.e. max 15 as given in problem constraints
    public long NumberOfPowerfulInt(long start, long finish, int limit, string suffix) {
        int sLen = suffix.Length;
        // instead of working with 2 variables we calculate no of powersfull till finish and subtract no of powerfuls till start-1
        return PowerfulTillNum(finish.ToString())-PowerfulTillNum((start-1).ToString());

        // finds the no of powerful no's till x
        long PowerfulTillNum(string num)                // O(d^2)
        {
            StringBuilder sb = new();
            for(int i=0;i<sLen;i++) sb.Append('9');

            // now to find all the powerful till X,
            // we start finding no of powerfull with x.length reducing length by 1 till its = suffix.length
            long allLengthPowerful = 0;
            for(int length = sLen;length<=num.Length;length++)   // O(d), d = no of digits/length of 'num'
            {
                allLengthPowerful+=CountPowerful(length<num.Length ? sb.ToString() : num);
                sb.Append('9'); // updating for next length no
            }
            return allLengthPowerful;
        }
        // find the no of powerful of fixed length <= given num 'X' & all digits <= limit
        long CountPowerful(string x)
        {
            int powerfulLength = x.Length;
            // cache for DP (Top-Down)
            var cache = new long[powerfulLength,2];
            for(int r=0;r<powerfulLength;r++)
                cache[r,0] = cache[r,1] = -1;
            
            return PowerFul(0,0);                       // O(d), d = no of digits in 'X'

            // local recursive function to get the PowerFul
            long PowerFul(int i, int foundSmallerEarlier)
            {
                if(i>=powerfulLength) return 1;
                if(cache[i,foundSmallerEarlier]!=-1) return cache[i,foundSmallerEarlier];
                
                // starting digit cannot be 0
                int startDigit = i==0 ? 1 : 0;
                // smaller for whatever is in the 'X' at given index or the limit
                int endDigit = Math.Min(foundSmallerEarlier==1 ? 9 : x[i]-'0',limit);
                
                // add check to update start and end digit if we have entered index in suffix territory's 
                if(i>=powerfulLength-sLen)
                {
                    int sIdx = sLen-(powerfulLength-i);
                    startDigit = Math.Max(startDigit,suffix[sIdx]-'0');
                    endDigit = Math.Min(endDigit,suffix[sIdx]-'0');
                }
                
                long ans = 0;
                while(startDigit<=endDigit)             // O(10)
                {
                    // have not found smaller earlier than see if current digit is smaller or not is yes update to 1
                    ans += PowerFul(i + 1, foundSmallerEarlier==1 ? 1 : (startDigit < (x[i] - '0') ? 1 : 0));

                    startDigit++;
                }
                // save the ans for current index in cache before returning
                return cache[i,foundSmallerEarlier] = ans;
            }
        }
    }
}
```