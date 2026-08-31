# C++ | Find max and second max | easy to understand

**Author:** khushiprerak
**Votes:** 106
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766804/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766804/)

---

**Approach**
1. Make separate hashmaps to store the frequency of even and odd indices elements separately. 
2. Find the elements with maximum frequency and second maximum frequency for both even and odd indices. 
3. As mentioned in the problem description, ``` arr[i]!=arr[i-1]``` so we need to take care that the elements with maximum frequency for odd and even indices are not same. That's why we need the second maximum frequency for both odd and even indices so that we can use the second maximum frequency element for odd or even indices whichever gives the minimum result. 


[@jionghongli](https://leetcode.com/jionghongli/) has explained the logic beautifully! Check out his comment:   https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/discuss/1766804/C++-or-Find-max-and-second-max-or-easy-to-understand/1264833

**Code**

```
class Solution {
public:
    int minimumOperations(vector<int>& nums) {
        
        int totalEven = 0, totalOdd = 0;
        
        unordered_map<int,int> mapEven, mapOdd;
        
        for(int i=0;i<nums.size();i++) {
            if(i%2==0) {
                totalEven++;
                mapEven[nums[i]]++;
            }
            
            else {
                totalOdd++;
                mapOdd[nums[i]]++;
            }
        }
        
        
        int firstEvenCount = 0, firstEven = 0;
        int secondEvenCount = 0, secondEven = 0;
        
        for(auto it=mapEven.begin();it!=mapEven.end();it++) {
            int num = it->first;
            int count = it->second;
            
            if(count>=firstEvenCount) {
                secondEvenCount = firstEvenCount;
                secondEven = firstEven;
                firstEvenCount = count;
                firstEven = num;
            }
            
            else if(count >= secondEvenCount) {
                secondEvenCount = count;
                secondEven = num;
            }
        }
        
        
        int firstOddCount = 0, firstOdd = 0;
        int secondOddCount = 0, secondOdd = 0;
        
        
        for(auto it=mapOdd.begin();it!=mapOdd.end();it++) {
            int num = it->first;
            int count = it->second;
            
            if(count>=firstOddCount) {
                secondOddCount = firstOddCount;
                secondOdd = firstOdd;
                firstOddCount = count;
                firstOdd = num;
            }
            
            else if(count>=secondOddCount) {
                secondOddCount = count;
                secondOdd = num;
            }
        }
        
        int operationsEven = 0, operationsOdd = 0;
        
        
        operationsEven = totalEven - firstEvenCount;
        
        if(firstEven!=firstOdd) operationsEven += (totalOdd - firstOddCount);
        else operationsEven += (totalOdd - secondOddCount);
        
        
        operationsOdd = totalOdd - firstOddCount;
        if(firstOdd!=firstEven) operationsOdd += (totalEven - firstEvenCount);
        else operationsOdd += (totalEven - secondEvenCount);
        
        
        return min(operationsEven, operationsOdd);
        
    }
};
```