# Simple Solution with Brief explanation | Time: O(n) | Space: O(10) ~ Constant

**Author:** abhinav1602
**Votes:** 12
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/532860/](https://leetcode.com/problems/largest-multiple-of-three/solutions/532860/)

---

**Steps:**
1. Divisibility rule of 3: Sum of digits of the numbers should be divisible by 3.
2. Calculate the total sum of all the given digits.
3. Calculate the remainder of the total sum when divided by 3.
4. If it is 0, we do not need to do anything, otherwise, the remainder could be 1 or 2.
5. If the remainder is 1 we need to find the smallest digit which gives the remainder 1 and remove it. Same for remainder 2.
6. In the end, when we have removed the smallest digit which is present and which can help settle the remainder difference when removed. We can create the largest number which is a multiple of 3.
7. It will obviously be the concatination of all the present digits in decreasing order which will give the largest number. Return it. 

**Code:**
```
string largestMultipleOfThree(vector<int>& digits) {
        int n = digits.size();
        int d[10] = {};
        int rem1[] =  {1, 4, 7, 2, 5, 8}, rem2[] = {2, 5, 8, 1, 4, 7};
        int sum = 0;
        
        for(int i=0; i<n; i++){
            ++d[digits[i]];
            sum += digits[i];
        }
        
        while(sum % 3 != 0){
            for(int i=0; i<6; i++){
                if(sum % 3 == 1 && d[rem1[i]]) {
                    sum -= rem1[i];
                    d[rem1[i]]--;
                    break;
                }
                else if(sum % 3 == 2 && d[rem2[i]]){
                    sum -= rem2[i];
                    d[rem2[i]]--;
                    break;
                }
            }
        }
        
        string ans = "";
        
        for(int i=9; i>=0; i--) {
            for(int j=1; j<=d[i]; j++)
                ans += to_string(i);
        }
        return ans[0]=='0'?"0":ans;
    }
```

**References:**
* https://en.wikipedia.org/wiki/Divisibility_rule#Divisibility_by_3_or_9
