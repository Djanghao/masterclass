# With Explanation Comments: Time: 24 ms (63.84%), Space: 14.6 MB (69.38%)

**Author:** deleted_user
**Votes:** 14
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2366624/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2366624/)

---

**Like it? ->Upvote please!**

**Solution 1:**
'''
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        
        //base case: if there's only one element-> replace it with -1
        if(arr.size()==1){
            arr[0]=-1;
            return arr;
        }
        
        //loop over the whole array elements
        for(int i=0;i<arr.size();i++){
            //initialize the maximum variable with 0 in each step
            int max=0;
            //loop over the remainder array elements again
            for(int j=i+1;j<arr.size();j++)
                //get the largest value
                if(arr[j]>max)
                    max=arr[j];
            //replace the current value with the max one
            arr[i]=max;
        }
        
        //after that-> replace the last value with -1 & return the array
        arr[arr.size()-1]=-1;
        return arr;
    }
};
'''

**Solution 2:**

'''
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        
        int maximum=-1;
        //loop over the whole array elements
        for(int i=arr.size()-1;i>=0;i--){
            //store the current value in a temp variable
            int temp=arr[i];
            //replace the current value with the maximum one & by default, the last element will be -1, as the initial value is it's
            arr[i]=maximum;
            //get the largest element by comparing
            maximum=max(maximum,temp);
        }

        //return the array elements
        return arr;
    }
};
'''


**Like it? ->Upvote please!**