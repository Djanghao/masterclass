# ✅ Simple solution using Set, O(n), Explained and commented

**Author:** karankhara
**Votes:** 81
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1886983/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1886983/)

---

If you'll like the explanation, do **UpVote** :)
## Algorithm:
		1. First create 2 sets. Then add nums1 elements to set1, and nums2 to set2.This will give us 2 sets with unique elements only.
		2. Now,  just iterate to all elements of set1 and add those elements to first sublist of result list, which are not in set2.
		3. Similarly, iterate to all elements of set2 and add those elements to second sublist of result list, which are not in set1.
		4. Now, we got our result list.

## Complexity:
		Time: O(n)  : n is length of input array with bigger length
		Space: O(m) : m is size of hashset with bigger length

## Code:
	class Solution {
		public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
			Set<Integer> set1 = new HashSet<>();                           // create 2 hashsets
			Set<Integer> set2 = new HashSet<>();
			for(int num : nums1){ set1.add(num); }                         // add nums1 elements to set1
			for(int num : nums2){ set2.add(num); }                         // add nums2 elements to set2
			
			List<List<Integer>> resultList = new ArrayList<>();             // Initialize result list with 2 empty sublists that we will return
			resultList.add(new ArrayList<>());
			resultList.add(new ArrayList<>());

			for(int num : set1){                                            // just iterate to all elements of set1
				if(!set2.contains(num)){ resultList.get(0).add(num); }      // add those elements to first sublist of result list, which are not in set2.
			}
			for(int num : set2){                                            // just iterate to all elements of set2
				if(!set1.contains(num)){ resultList.get(1).add(num); }      // add those elements to first sublist of result list, which are not in set1
			}
			return resultList;
		}
	}
	
If you need more explanation or, if got even more optimized way, let me know.	
If you like the explanation, pls **UpVote** :)