# C++ merge, insertion, bubble, quick, heap

**Author:** SunHaozhe
**Votes:** 105
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/448903/](https://leetcode.com/problems/sort-an-array/solutions/448903/)

---

Bubble sort
```
	// bubbleSort(nums);
	void bubbleSort(vector<int>& nums){
        for(int i = nums.size() - 1; i >= 0; i--)
            for(int j = 0; j < i; j++)
                if(nums[j] > nums[j + 1]) 
                    swap(nums[j], nums[j + 1]);
    }
```

*********************************************************

Insertion sort
```
	// insertionSort(nums);
	void insertionSort(vector<int>& nums){
        if(nums.size() == 0 || nums.size() == 1) return;
        for(int i = 1; i < nums.size(); i++){
            int tmp = nums[i];
            int j = i - 1;
            while(j >= 0 && nums[j] > tmp){
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = tmp;
        }
    }
```
*********************************************************

Heap sort

In terms of `heapify` stage:
* Bottom up approach (beginning from bottom + sift down) `O(n)`
* Top down approach (beginning from top + sift up) `O(nlogn)`
* Beginning from top + sift down `not working` 

In fact, "sift down" of a certain node `x` works properly only if both of its left subtree and right subtree (if any) already satisfy the heap property.


For zero-based arrays, for a certain node `x`:
* its parent `floor( (x - 1) / 2 )`
* its left child `2x + 1`
* its right child `2x + 2`

The index of the last non-leaf node of a `n`-sized heap is `floor( n / 2 ) - 1`.
```
	void siftDown(vector<int>& nums, int n, int i){
        int biggest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;
        if(l < n && nums[biggest] < nums[l])
            biggest = l;
        if(r < n && nums[biggest] < nums[r])
            biggest = r;
        if(biggest != i){
            swap(nums[i], nums[biggest]);
            siftDown(nums, n, biggest);
        }
    }
    
	// heapSort(nums);
    void heapSort(vector<int>& nums){
        // heapify stage (bottom up approach)
        for(int i = nums.size() / 2 - 1; i >= 0; i--)
            siftDown(nums, nums.size(), i);
        // sorting stage
        for(int i = nums.size() - 1; i > 0; i--){
            swap(nums[0], nums[i]);
            siftDown(nums, i, 0);
        }
    }
```

*********************************************************
Merge sort (recursive version)
```
	void merge(vector<int>& nums, int l, int m, int r){
        vector<int> tmp(r - l + 1);
        int i = l; // index for left subarray
        int j = m + 1; // index for right subarray
        int k = 0; // index for temporary array
        while(i <= m && j <= r){
            if(nums[i] <= nums[j]) tmp[k++] = nums[i++]; 
            else tmp[k++] = nums[j++];
        }
        while(i <= m) tmp[k++] = nums[i++];
        while(j <= r) tmp[k++] = nums[j++]; 
        for(i = 0; i < k; i++) nums[l + i] = tmp[i];
    }
	
	// mergeSort(nums, 0, nums.size() - 1);
    void mergeSort(vector<int>& nums, int l, int r){
        if(l >= r) return;
        int m = l + (r - l) / 2; //middle index, same as (l+r)/2
        mergeSort(nums, l, m);
        mergeSort(nums, m + 1, r);
        merge(nums, l, m, r);
    }
```

*********************************************************
Quick sort (recursive version)
```
	// quickSort(nums, 0, nums.size() - 1);
    void quickSort(vector<int>& nums, int l, int r){
        if(l >= r) return;
        int i = l; // cursor for final pivot location 
        for(int j = l; j <= r - 1; j++){ // nums[r] is chosen as the pivot
            if(nums[j] <= nums[r]){
                swap(nums[i], nums[j]);
                i++; // smaller or equal elements go to the left of i 
            }
        }
        swap(nums[i], nums[r]); // after swap, the pivot is nums[i]
        quickSort(nums, l, i - 1);
        quickSort(nums, i + 1, r);
    }
```


*********************************************************
The utility function `swap` is defined as follows
```
	void swap(int& a, int& b){
        int tmp = a;
        a = b;
        b = tmp;
    }
```