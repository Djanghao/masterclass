# C++ | Both Two Pointers and HashMap Approach Explained

**Author:** cyber-venom003
**Votes:** 1109
**Link:** [https://leetcode.com/problems/3sum/solutions/1462423/](https://leetcode.com/problems/3sum/solutions/1462423/)

---

Requirements we need to fulfil:  Find the triplets having sum = 0.

As array has both -ve and +ve numbers, firstly we sort the array. Sorted array would have -ve numbers together and +ve numbers together in an increasing order. This will make easy for searching the required numbers to make a 0 sum.

Base cases after sorting:
- If array size is < 3, means no triplet would exist from that array. Return empty vector of vectors.
- If first element is +ve, that means there is no -ve number by which we can make a 0 triplet sum. Return empty vector of vectors.

### Two Pointer Approach:

The basic thinking logic for this is: Fix any one number in sorted array and find the other two numbers after it. The other two numbers can be easily found using two pointers (as array is sorted) and two numbers should have sum = -1*(fixed number).

- Traverse the array and fix a number at every iteration.
- If number fixed is +ve, break there because we can't make it zero by searching after it.
- If number is getting repeated, ignore the lower loop and continue. This is for unique triplets. We want the last instance of the fixed number, if it is repeated.
- Make two pointers high and low, and initialize sum as 0.
- Search between two pointers, just similiar to binary search. Sum = num[i] + num[low] + num[high].
- If sum is -ve, means, we need more +ve numbers to make it 0, increament low (low++).
- If sum is +ve, means, we need more -ve numbers to make it 0, decreament high (high--).
- If sum is 0, that means we have found the required triplet, push it in answer vector.
- Now again, to avoid duplicate triplets, we have to navigate to last occurences of num[low] and num[high] respectively. Update the low and high with last occurences of low and high.

My Two Pointer Submission:
```
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin() , nums.end());    //Sorted Array
        if(nums.size() < 3){    //Base case 1
            return {};
        }
        if(nums[0] > 0){        //Base case 2
            return {};
        }
        vector<vector<int>> answer;
        for(int i = 0 ; i < nums.size() ; ++i){     //Traversing the array to fix the number.
            if(nums[i] > 0){     //If number fixed is +ve, stop there because we can't make it zero by searching after it.
                break;
            }
            if(i > 0 && nums[i] == nums[i - 1]){    //If number is getting repeated, ignore the lower loop and continue.
                continue;
            }
            int low = i + 1 , high = nums.size() - 1;   //Make two pointers high and low, and initialize sum as 0.
            int sum = 0;
            while(low < high){                          //Search between two pointers, just similiar to binary search.
                sum = nums[i] + nums[low] + nums[high];
                if(sum > 0){   //If sum is +ve, means, we need more -ve numbers to make it 0, decreament high (high--).
                    high--;
                } else if(sum < 0){ //If sum is -ve, means, we need more +ve numbers to make it 0, increament low (low++).
                    low++;
                } else {
                    answer.push_back({nums[i] , nums[low] , nums[high]});  //we have found the required triplet, push it in answer vector
                    int last_low_occurence = nums[low] , last_high_occurence = nums[high];  //Now again, to avoid duplicate triplets, we have to navigate to last occurences of num[low] and num[high] respectively
                    while(low < high && nums[low] == last_low_occurence){   // Update the low and high with last occurences of low and high.
                        low++;
                    }
                    while(low < high && nums[high] == last_high_occurence){
                        high--;
                    }
                }
            }
        }
        return answer;      //Return the answer vector.
    }
};
```

### HashMap Approach:

In this approach, firstly, we will hash the indices of all elements in a hashMap. In case of repeated elements, the last occurence index would be stored in hashMap. 

- Here also we fix a number (num[i]), by traversing the loop. But the loop traversal here for fixing numbers would leave last two indices. These last two indices would be covered by the nested loop. 
- If number fixed is +ve, break there because we can't make it zero by searching after it.
- Make a nested loop to fix a number after the first fixed number. (num[j])
- To make sum 0, we would require the -ve sum of both fixed numbers. Let us say this required.
- Now, we will find the this required number in hashMap. If it exists in hashmap and its last occurrence index > 2nd fixed index, we found our triplet. Push it in answer vector.
- Update j to last occurence of 2nd fixed number to avoid duplicate triplets.
- Update i to last occurence of 1st fixed number to avoid duplicate triplets.
- Return answer vector.

My HashMap Submission:

```
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin() , nums.end());     //Sorted Array
        if(nums.size() < 3){                // Base Case 1
            return {};
        }
        if(nums[0] > 0){                    // Base Case 2
            return {};
        }
        unordered_map<int , int> hashMap;
        for(int i = 0 ; i < nums.size() ; ++i){     //Hashing of Indices
            hashMap[nums[i]] = i;
        }
        vector<vector<int>> answer;
        for(int i = 0 ; i < nums.size() - 2 ; ++i){     //Traversing the array to fix the number.
            if(nums[i] > 0){     //If number fixed is +ve, stop there because we can't make it zero by searching after it.
                break;
            }
            for(int j = i + 1 ; j < nums.size() - 1 ; ++j){     //Fixing another number after first number
                int required = -1*(nums[i] + nums[j]);    //To make sum 0, we would require the -ve sum of both fixed numbers.
                if(hashMap.count(required) && hashMap.find(required)->second > j){ //If it exists in hashmap and its last occurrence index > 2nd fixed index, we found our triplet.
                    answer.push_back({nums[i] , nums[j] , required});
                }
                j = hashMap.find(nums[j])->second; //Update j to last occurence of 2nd fixed number to avoid duplicate triplets.
            }
            i = hashMap.find(nums[i])->second;     //Update i to last occurence of 1st fixed number to avoid duplicate triplets.
        }
        return answer;  //Return answer vector.
    }
};
```

**PLEASE UPVOTE IT IF YOU LIKED IT, IT REALLY MOTIVATES :)**