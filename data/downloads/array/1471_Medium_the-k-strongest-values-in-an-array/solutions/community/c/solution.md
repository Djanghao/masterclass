# [C++] Simple solution using two pointers

**Author:** hayashi-ay
**Votes:** 15
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/675237/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/675237/)

---


```cpp
class Solution {
public:
    vector<int> getStrongest(vector<int>& arr, int k) {
        sort(arr.begin(), arr.end());
        int left = 0;
        int right = arr.size()-1;
        int midIndex = (arr.size() -1)/2;
        int mid = arr[midIndex];
        
        vector<int> answer(k);
        int counter = 0;
        while(counter<k){
            int leftValue = abs(arr[left]-mid);
            int rightValue = abs(arr[right]-mid);
            
            if(rightValue>=leftValue){
                answer[counter] = arr[right];
                right--;
            } else {
                answer[counter] = arr[left];
                left++;
            }
            counter++;
        }
        return answer;
    }
};
```