# Python/Python3 solution BruteForce & Optimized solution using Dictionary

**Author:** prasanthksp1009
**Votes:** 10
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/1218305/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/1218305/)

---

**Brute Foce Solution(Time Limit Exceeded)**

This solution will work if the length of the elements in the testcase is <50000(5 * 10^4).
If it exceeds 50000 it will throw TLE error.
**Code:**
```
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        sumP = 0 #To store the value of Sum of floor values
        for i in nums: #Traverse every element in nums
            for j in nums: #Traverse every element in nums
                sumP += (j//i) #Simply do floor division and add the number to sumP
        return sumP % (10**9 +7)#return the sumof the pairs
```

**Optimized Solution**

The solution is built by using frequency of the prefix elements(freqency prefix sum).
1. Take the frequency of the elements given in the nums and store ir in dictionary.
2. After storing calculate the prefix frequency of the nums according to the frequency present in the dictionary.
3. After computing prefix Frequency just calculate the sum of the floor division.
* If you need to futher understanding the code kindly watch Part by Part Implementation. 

**Code:**
```
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        maxi = max(nums) + 1
        dic = {}
        prefix=[0]*maxi
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        #print(dic)
        for i in range(1,maxi):
            if i not in dic:
                prefix[i] = prefix[i-1]
            else:
                prefix[i] = prefix[i-1]+dic[i]
        #print(prefix,dic)
        sumP = 0
        for i in set(nums):
            for j in range(i,maxi,i):
                sumP += dic[i]*(prefix[-1]-prefix[j-1])
				#print(sumP,end = " ")
        return sumP % (10**9 +7)
```
**Part by Part Implementation**
```
#Part - 1 : Calculating the frequency of the elements in nums to dictionary.
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        dic = {}
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        print(dic)
```
**Output:
{2: 1, 5: 1, 9: 1}**

```
#Part - 2 : Calculation of Prefix frequency according to the frequency of the nums in dictionary.
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        dic = {}
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        #print(dic)
        maxi = max(nums) + 1
        prefix=[0]*maxi
        for i in range(1,maxi):
            if i not in dic:
                prefix[i] = prefix[i-1]
            else:
                prefix[i] = prefix[i-1]+dic[i]
        print(prefix)
```
**Output:
[0, 0, 1, 1, 1, 2, 2, 2, 2, 3]**

```
#Part - 3 : Calculation of sum of floor division 
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        maxi = max(nums) + 1
        dic = {}
        prefix=[0]*maxi
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        #print(dic)
        for i in range(1,maxi):
            if i not in dic:
                prefix[i] = prefix[i-1]
            else:
                prefix[i] = prefix[i-1]+dic[i]
        #print(prefix,dic)
        sumP = 0
        for i in set(nums):
            for j in range(i,maxi,i):
                sumP += dic[i]*(prefix[-1]-prefix[j-1])
                print(sumP,end = " ")
```
**Output:
1 4 6 7 8 10**

***We rise by lifting others***