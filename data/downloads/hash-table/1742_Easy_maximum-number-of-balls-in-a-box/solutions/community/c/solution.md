# C++ 8ms Simple to Understand

**Author:** shreyashakhil
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1056630/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1056630/)

---

This is a very basic implementation for solving the problem. The biggest number of box would be when we have 99999 balls (highLimit is 10e5) i.e 9*5 = 45.
This was important since we will now make a vector/array having 46 elements each initialised to Zero.
Here follows a basic intuition -
1. Make a vector/array of 46 elements initialised to zero.
2. Loop through Low Limit and High Limit including the limits.
3. Have a ```sum``` Variable and a ```temp``` Variable to store sum of digits of each number and to have a copy of the original number such that the loop doesn't get affected.
4. Increment the Array/Vector at index  ```sum```. 
5. Return the Max Element of the Vector once the loop is finished.

Here is the C++ implementation of the above intuition - 
```
class Solution {
public:
    int countBalls(int lowLimit, int highLimit) {
        
        vector<int> box (46,0);
        for(int i = lowLimit;i<=highLimit;i++)
        {
            int sum = 0;
            int temp = i;
            while(temp)
            {
                sum = sum + temp%10;
                temp = temp/10;
            }
            box[sum]++;
        }
        
        return *max_element(box.begin(),box.end());
    }
};
```
