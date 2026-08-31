# ✅ C++ || GRADE 1 ADDITION TECHNIQUE 😁

**Author:** Adarsh_Shukla
**Votes:** 20
**Link:** [https://leetcode.com/problems/add-strings/solutions/2808140/](https://leetcode.com/problems/add-strings/solutions/2808140/)

---

# Intuition
GRADE 1 ADDITION USING CARRY 
![add.png](./images/0.png)

# WARNING 
![rte.png](./images/1.png)

Do not use the in-built functions(to_string() and stoi())) OR 
stringstream,ostringstream for datatype conversions as 
you will be getting TLE due to size restrictions of the functions.

# Code
```
class Solution {
public:
    string addStrings(string num1, string num2) {
        // accessing lastdigit of the num1 string
        int i = num1.size()-1;

        // accessing lastdigit of the num2 string 
        int j = num2.size()-1;

        // declared a integer variable carry and assigned it 0
        int carry = 0;

        // declared an empty string
        string ans = "";

        // traversing the num1 and num2 string till the leftmost digit
        // and till carry > 0
        while(i>=0 || j>=0 || carry){
            //declared an int var sum and assigned 0 to it
            long sum = 0;

            // convert the char to int and add it to sum variable
            if(i>=0){
                sum+=num1[i]-'0';
                i--;
            }

            // similarily convert the char to int and it to sum var
            if(j>=0){
                sum+=num2[j]-'0';
                j--;
            }

            // add carry to the sum
            sum+=carry;

            // carry is always the leftmost digit of a number
            carry=sum/10;

            /* concatenate the last digit of the sum after converting 
             it into string using to_string function */ 
            ans+=to_string(sum%10);
        }

        /* as the required sum is obtained in the reverse manner , 
         reverse the sum to obtain the actual answer */
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
```