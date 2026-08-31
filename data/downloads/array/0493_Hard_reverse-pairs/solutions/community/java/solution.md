# Java MergeSort O(n long n) Templater Solution for Reverse Pairs, #327, and #315

**Author:** lh19900702
**Votes:** 30
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/112146/](https://leetcode.com/problems/reverse-pairs/solutions/112146/)

---

Reverse Pairs
```
	public int reversePairs(int[] nums) {
		if (nums == null || nums.length < 2) return 0;
        return mergesort(nums, 0, nums.length-1);
    }
	
	private int mergesort(int[] nums, int low, int high){
		if (low >= high) return 0;
		int mid = low + (high - low) / 2;
		int count = mergesort(nums, low, mid) + mergesort(nums, mid+1, high);
		for (int i = low, j = mid+1; i <= mid && j <= high;){
			if (nums[i] > (long) nums[j] * 2){
                count += mid - i + 1;
                j++;
            }
            else i++;
		}
		
		merge(nums, low, high);
		return count;
	}
	
	private void merge(int[] nums, int low, int high){
		int mid = low + (high - low) / 2;
		int[] arr = new int[high - low + 1];
		
		int i = low, j = mid + 1, k = 0;
		while (k < arr.length){
			int num1 = i > mid ? Integer.MAX_VALUE : nums[i];
			int num2 = j > high ? Integer.MAX_VALUE : nums[j];
			
			arr[k++] = num1 <= num2 ? nums[i++] : nums[j++];
		}
		
		for (int p = 0; p < arr.length; p++) nums[p+low] = arr[p];
	}
```

Count of Smaller after self
```
public List<Integer> countSmaller(int[] nums) {
        List<Integer> res = new ArrayList<>();
        int[] count = new int[nums.length];
        int[] index = new int[nums.length];
        for (int i = 0; i < index.length; i++) index[i] = i;
        
        mergeSortCountSmaller(nums, index, count, 0, nums.length-1);
        
        for (int i : count) res.add(i);
        return res;
    }
	
	private void mergeSortCountSmaller(int[] nums, int[] index, int[] count, int low, int high){
		if (low >= high) return;
		int mid = low + (high - low) / 2;
		mergeSortCountSmaller(nums, index, count, low, mid);
		mergeSortCountSmaller(nums, index, count, mid+1, high);
		int rightCount = 0, i = low;
		for (int j = mid + 1; i <= mid && j <= high; ){
			if (nums[index[j]] < nums[index[i]]){
				rightCount++;
				j++;
			}
			else count[index[i++]] += rightCount;
		}
		
		while (i <= mid) count[index[i++]] += rightCount;
		
		mergeCountSmaller(nums, index, low, high);
	}
	
	private void mergeCountSmaller(int[] nums, int[] index, int low, int high){
		int mid = low + (high - low) / 2;
		int[] arr = new int[high - low + 1];
		int i = low, j = mid + 1, k = 0;
		
		while (k < arr.length){
			int num1 = i <= mid ? nums[index[i]] : Integer.MAX_VALUE;
			int num2 = j <= high ? nums[index[j]] : Integer.MAX_VALUE;
			
			arr[k++] = num1 <= num2 ? index[i++] : index[j++];
		}
		
		for (int p = 0; p < arr.length; p++) index[p+low] = arr[p];
	}
```
Count of Range Sum
```
	public int countRangeSum(int[] nums, int lower, int upper) {
        if (nums == null || nums.length == 0) return 0;
        
        long[] sums = new long[nums.length+1];
        for (int i = 1; i < sums.length; i++){
            sums[i] = nums[i-1] + sums[i-1];
        }
        
        return mergesortCountRangeSum(sums, lower, upper, 0, sums.length-1);
    }
	
	private int mergesortCountRangeSum(long[] sums, int lower, int upper, int low, int high){
		if (low >= high) return 0;
		
		int mid = low + (high - low) / 2;
		int res = mergesortCountRangeSum(sums, lower, upper, low, mid) + 
					mergesortCountRangeSum(sums, lower, upper, mid+1, high);
		int i = mid+1, j = mid+1;
		
		// Time complexity: for i or j, it could only be moved from mid+1 to high,
		// so this is a two pointer problem, not 2 loops
		for (int k = low; k <= mid; k++){
			while (i <= high && sums[i] - sums[k] < lower) i++;
			while (j <= high && sums[j] - sums[k] <= upper) j++;
			res += j - i;
		}
		
		mergeCountRangeSum(sums, low, high);
		return res;
	}
	
	private void mergeCountRangeSum(long[] sums, int low, int high){
		int mid = low + (high - low) / 2;
		int i = low, j = mid+1, k = 0;
		long[] arr = new long[high-low+1];
		
		while (k < arr.length){
			long num1 = i <= mid ? sums[i] : Long.MAX_VALUE;
			long num2 = j <= high ? sums[j] : Long.MAX_VALUE;
			
			arr[k++] = num1 <= num2 ? sums[i++] : sums[j++];
		}
		
		for (int p = 0; p < arr.length; p++) sums[p+low] = arr[p];
	}
```