# Java binary search, simple and clean

**Author:** jinwu
**Votes:** 78
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/71124/](https://leetcode.com/problems/h-index-ii/solutions/71124/)

---

The idea is to search for the first index from the sorted array so that :
<br> <i>citations[index] >= length(citations) - index.</I> <br>
And return (length - index) as the result.
Here is the code:

    public int hIndex(int[] citations) {
		int len = citations.length;
		int lo = 0, hi = len - 1;
		while (lo <= hi) {
			int med = (hi + lo) / 2;
			if (citations[med] == len - med) {
				return len - med;
			} else if (citations[med] < len - med) {
				lo = med + 1;
			} else { 
				//(citations[med] > len-med), med qualified as a hIndex,
			    // but we have to continue to search for a higher one.
				hi = med - 1;
			}
		}
		return len - lo;
	}