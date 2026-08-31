# [C++] Merge Sort | O(N log N) | Divide and Conquer Approach

**Author:** rakesh06
**Votes:** 16
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3374699/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/3374699/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- First, we create a vector of pairs (value, index) to keep track of the original position of each element in the array.

- Next, we use the merge sort algorithm to sort this vector of pairs based on the value of the elements.

- While merging the sorted subarrays, we count the number of elements that are strictly smaller and strictly greater in the left subarray for each element in the right subarray.

- Once we have merged the two subarrays, we copy the merged subarray back to the original array.

- Finally, we iterate over each element in the array and calculate the cost of each instruction as the minimum of the number of elements that are strictly smaller and strictly greater than the element. We add up these costs to get the total cost of creating the sorted array.

# Complexity
###### Time Complexity : O(N log N)
###### Space Complexity : O(N)

# Note if you get TLE:
- When implementing merge sort, avoid using ```vector.push_back()``` in the merge step. 
- Instead, preassign the size for the vector before the merge like ```vector.resize()``` 
- Using ```vector.push_back()``` during merge causes the vector to repeatedly reassign memory space, which is time-consuming and can cause **time limit exceeds** in some cases.
- **For comparison I have included my TLE solution in the end.**

# Reminder:
- If you change the vector to an array, the code will run much faster since arrays have fixed size and don't require dynamic memory allocation.

# Code
```
class Solution {
public:
    int mod = 1e9 + 7;
    vector<pair<int,int>> index; // vector of pairs (value, index)
    vector<int> lesser, greater; // lesser[i] = number of values in the left of i that are less than i
                                 // greater[i] = number of values in the right of i that are greater than i
    
    void merge(int left, int mid, int right) {
        // calculate lesser and greater for each element in the right subarray
        for(int i = mid + 1, j = left, k = left; i <= right; i++) {
            while(j <= mid and index[j].first < index[i].first) j++;
            while(k <= mid and index[k].first <= index[i].first) k++;
            lesser[index[i].second] += j - left;
            greater[index[i].second] += mid - k + 1;
        }

        // merge the two sorted subarrays
        vector<pair<int,int>> temp(right - left + 1);
        int p = left, q = mid + 1, r = 0;
        while (p <= mid and q <= right) 
            if(index[p].first <= index[q].first)
                temp[r++] = index[p++];
            else
                temp[r++] = index[q++];
        while (p <= mid) 
            temp[r++] = index[p++];
        while (q <= right)
            temp[r++] = index[q++];
        
        // copy the merged subarray back to the original array
        move(temp.begin(), temp.end(), index.begin() + left);
    }

    void mergeSort(int left, int right) {
        if(left >= right)
            return;
        int mid = left + (right - left) / 2;
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }

    int createSortedArray(vector<int>& instructions) {
        int n = instructions.size();
        index.resize(n);
        lesser.resize(n);
        greater.resize(n);

        // initialize index vector with pairs (value, index)
        for (int i = 0; i < n; i++)
            index[i] = {instructions[i], i};
        
        // sort the index vector using merge sort and calculate lesser and greater for each element
        mergeSort(0, n - 1);
        
        int ans = 0;
        for (int i = 0; i < n; i++) {
            // calculate the minimum of the two values and add it to the answer
            ans += min(lesser[i], greater[i]);
            ans %= mod;
        }
        return ans;
    }
};
```


# TLE Code:
```
class Solution {
public:
    int mod = 1e9 + 7;
    vector<pair<int,int>> index;
    vector<long long> lesser, greater;
    void merge(int left, int mid, int right) {
        for(int i = mid + 1, j = left, k = left; i <= right; i++) {
            while(j <= mid and index[j].first < index[i].first) j++;
            while(k <= mid and index[k].first <= index[i].first) k++;
            lesser[index[i].second] += j - left;
            lesser[index[i].second] %= mod;
            greater[index[i].second] += mid - k + 1;
            greater[index[i].second] %= mod;
        }

        vector<pair<int,int>> temp;
        int p = left, q = mid + 1;
        while (p <= mid and q <= right) 
            if(index[p].first <= index[q].first)
                temp.push_back(index[p++]);
            else
                temp.push_back(index[q++]);
        while (p <= mid) 
                temp.push_back(index[p++]);
        while (q <= right)
                temp.push_back(index[q++]);
        
        move(temp.begin(), temp.end(), index.begin() + left);
    }

    void mergeSort(int left, int right) {
        if(left >= right)
            return;
        int mid = left + (right - left) / 2;
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }

    int createSortedArray(vector<int>& instructions) {
        int n = instructions.size();
        lesser.resize(n);
        greater.resize(n);

        for (int i = 0; i < n; i++)
            index.push_back({instructions[i], i});
        
        mergeSort(0, n - 1);
        
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += min(lesser[i], greater[i]);
            ans %= mod;
        }
        return ans;
    }
};
```