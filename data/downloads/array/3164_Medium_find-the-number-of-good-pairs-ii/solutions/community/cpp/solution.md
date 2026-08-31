# [C++] | [Full Explanation] | Easy to understand ✅

**Author:** fitrayuda
**Votes:** 185
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5208957/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5208957/)

---

# My idea to solve the problem is

1. Get the factor of the number in nums1
- here is the idea to get the factor of the number in nums1
- first you need to loop until sqrt(nums1[i]) -> why not looping until nums1[i]? 
  - i think you will get the time limit if u looping until nums1[i] (Correct me if i'am wrong) because 
    - the maximum number of nums1[i] = 10^6 and total number on nums1 = 10^5, so the time complexity will be 10^11
  - so to avoid that, here i just looping until sqrt(nums1[i]) -> what is the logic behind that, why can we get all the factors of the number by just looping sqrt(n), here is the idea
  - lets say we have z = 12, and this is the factor of 12
    - 1 x 12 = 12
    - 2 x 6  = 12
    - 3 x 4  = 12
    - 4 x 3  = 12
    - 6 x 2  = 12
    - 12 x 1 = 12
    - 1, 2 , 3, 4, 6, 12
  - if u notice there is a repeating pattern after (3 x 4), so we just need to loop until i <= sqrt(12) -> i <= 3
  - for every loop process you can get the factor of 12 -> i x b = z -> i x b = 12
    - i -> from the initial value loop
    - b -> from z / i -> 12 / i
  - another example, lets say we have z = 16, and this is the factor of 16
    - 1 x 16 = 16
    - 2 x 8  = 16
    - 4 x 4  = 16
    - 1, 2, 4, 8, 16
  - if u notice there is a repeating pattern after (4 x 4), so we just need to loop until i <= sqrt(16) -> i <= 4
  - you need to becareful, in this cases there is 4 x 4, so you just need to add 4 one time not twice

2. after you understand how we can get all factor of the number in nums1 with n * sqrt(nums1[i]) time complexity
   - you need to store all factor of the number in nums1 on hash table -> in c++ you can use unordered_map
   - lets say we have nums1 = [10,20,30]
        - 10 -> 1,2,5,10
        - 20 -> 1,2,5,10,20
        - 30 -> 1,3,5,10,15,30
   - on the hash table it will be like this
        - [1] = 3
        - [2] = 2
        - [3] = 1
        - [5] = 3
        - [10] = 3
        - [15] = 1
        - [20] = 1
        - [30] = 1

3. the last step is, you need to loop for every number on nums2
   - every process you need to multiply nums2[i] with k (according to the explanation on the problem)
   - to get the answer you just need to get the value of hash_table[nums2[i]]
   - if the value of hash_table[nums2[i]] is exist or more than 0, we know there will be as many pairs as hashTable[nums2[i]]

```
here is the example
nums1 = [10,20,30]
nums2 = [5,15]
k = 2

factor of all number on nums1
10 -> 1,2,5,10
20 -> 1,2,5,10,20
30 -> 1,3,5,10,15,30

store to the hashTable
[1] = 3
[2] = 2
[3] = 1
[5] = 3
[10] = 3
[15] = 1
[20] = 1
[30] = 1

loop for every number on nums2
- 5 -> 5 * 2 = 10 -> check hashTable[10] -> 3 -> then there are 3 pairs
  - (10 with 5 * 2)
  - (20 with 5 * 2)
  - (30 with 5 * 2)
- 15 -> 15 * 2 = 30 -> check hashTable[30] -> 1 -> then there is 1 pair
  - (30 with 15 * 2)

result = 3 + 1 = 4
```

Note : 
- iam using i * i instead of sqrt(n), but i think the result will be same (Correct me if i'am wrong)
- iam using hashTable to get the O(1) time complexity on insertion and (lookup or get the value)
- if you think its helpful, dont forget to upvote :)


```
class Solution {
public:
    long long numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        unordered_map<int,int> hashTable;
        
        for(auto number : nums1){
            
            for(int i = 1; i * i <= number; i++){
                if(i * i == number){
                    hashTable[i]++;
                }else if(number % i == 0){
                    hashTable[i]++;
                    hashTable[number / i]++;
                }
            }
            
        }
        
        long long int answer = 0;
        
        for(auto number : nums2){
            number *= k;
            if(hashTable[number] > 0){
                answer += hashTable[number];
            }
        }
        
        return answer;
    }
};
```