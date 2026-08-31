# ✅ Well Explained || Two Easy Solutions ✅

**Author:** mahesh340
**Votes:** 127
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1756967/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1756967/)

---

**First Approach : Using HashMap**

1. First we will create map for counting frequencies of each element in the array.
2. Now we have 2 cases over here as 
    -->a) if k == 0 it means we need to count frequency of the same element by using map.get(i) method.
	-->b) we need to take counter approach for every element by adding k everytime and check whether that element is present in map or not.
3. Instead of iterating through array, we will iterate through map.keySet() for getting unique elements.
	
		// O(n) Time Solution
	
		class Solution {
				public int findPairs(int[] nums, int k) {
					Map<Integer, Integer> map = new HashMap();
					for (int num : nums)
						map.put(num, map.getOrDefault(num, 0) + 1);

					int result = 0;
					for (int i : map.keySet())
						if (k > 0 && map.containsKey(i + k) || k == 0 && map.get(i) > 1)
							result++;
					return result;
				}
			}

**Second Approach : Using HashSet**

1. First sort the array.
2. After that, iterating through loop from first element to the last element.
3. Using BinarySearch, checked whether (nums[i] + k) is present in the array from index i+1 to n....i.e. if it is present we can take it as for counting approach.
		
		Arrays.binarySearch(array_name, start_index, end_index, value_for_checking) ==> this method returns index of value which we are searching.
		
4. After that just added minimum element to set for getting unique pairs as we know set contains only unique values.
 
		// O(nlogn) Time Solution

		class Solution {
			public int findPairs(int[] nums, int k) {
				Set<Integer> uniquePair = new HashSet();
				Arrays.sort(nums);
				int n = nums.length;

				for (int i = 0; i < n - 1; i++)
					if (Arrays.binarySearch(nums, i + 1, n, nums[i] + k) > 0)
						uniquePair.add(nums[i]);

				return uniquePair.size();
			}
		}
**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0\uD83C\uDF38), If you have any question, feel free to ask.**