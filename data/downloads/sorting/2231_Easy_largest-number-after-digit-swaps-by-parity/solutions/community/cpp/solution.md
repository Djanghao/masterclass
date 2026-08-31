# C++ Solution || Fully Commented || 💯% fast

**Author:** NitinSingh77
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/3276988/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/3276988/)

---



# Code
```
class Solution {
public:
    int largestInteger(int num) {
      priority_queue<int>odd,even;//To store the even and odd values in descending order separately;

        vector<int>seq,nitin;  //Seq vector to store the sequence of odd and even occurrences and nitin vector to store the values of priority queue in order;

        while(num>0)  
        // To split and store the even digits in even priority queue and odd in odd priority   queue and all the digits in seq vector;
        {                           
            int last=num%10;
            if(last%2==0)
            {
                even.emplace(last);
            }
            else
            {
                odd.emplace(last);
            }
            num=num/10;
            seq.emplace_back(last);
        }
        reverse(seq.begin(),seq.end());//reverse the vectore since the digits are stored in reverse order in the vector.
        int ans=0;
        for(int i=0;i<seq.size();i++) //store the digits from even and odd priority queue into nitin vector according to the occurrences.

        {
            if(seq[i]%2==0)
            {
                nitin.emplace_back(even.top());
                even.pop();
            }
            else
            {
                nitin.emplace_back(odd.top());
                odd.pop();
            }

        }
        for(int i=0;i<nitin.size();i++) //Store the final values in answer.
        {
            ans=ans*10+nitin[i];
        }
        return ans;
         }
};
```