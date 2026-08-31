# ✅ Short & Easy Solution w/ Explanation | Greedily Select Max Units/Box Ratio

**Author:** archit91
**Votes:** 85
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1272564/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1272564/)

---

\u2714\uFE0F ***Solution (Sort & Choose Greedily)***

We can easiliy observe that it will **always be better to choose the box with maximum number of units** in it so that the overall number of units that can be put on truck is maximized.

Thus, we will sort the given *`boxTypes`* array based on number of units in each box. Then we greedily keep choosing the boxes starting from the first one from the sorted array till we fill the whole truck.

**C++**
```
int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
	sort(begin(boxTypes), end(boxTypes), [](auto& a, auto& b){ return a[1] > b[1];}); // sort by number of units / box
	int maxUnits = 0;
	for(auto& box : boxTypes) {
		if(truckSize <= 0) break;                    // keep choosing greedily till you run out of truckSize 
		maxUnits += min(truckSize, box[0]) * box[1]; // add (no of box * units) in that box
		truckSize -= box[0];
	}
	return maxUnits;
}
```

---

**Python**
```
def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
	boxTypes.sort(key=lambda a:-a[1])
	max_units = 0
	for box in boxTypes:
		if truckSize < 0 : break
		max_units += min(truckSize, box[0]) * box[1]
		truckSize -= box[0]
	return max_units
```

***Time Complexity :*** **`O(NlogN)`**, where *`N`* is the number of elements in *`boxTypes`*
***Space Complexity :*** **`O(1)`**, we are always using constant amount of space (ignoring the space required by the sort algorithm)


---

\u2714\uFE0F ***Solution - II (Similar to Counting sort)***

The given constraints for `numberOfUnitsPerBox` are small enough that we can use an approach similar to counting sort to reduce the time complexity to `O(N)`.

Here, we can declare an array *`freq`* of size=1000 (which is maximum number of units per box) where *`freq[i]`* will denote the number of boxes that can hold *`i`* number of units. We can iterate through the given *`boxTypes`* array and populate the `freq` array. Then we can iterate over the `freq` array and greedily choose starting from `i=1000 ` till we run out of *`truckSize`* or pick all available boxes.

**C++**
```
int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
	int freq[1001]{0}, maxUnits = 0;   // freq[i] = number of boxes that can hold i units
	for(auto& box : boxTypes) freq[box[1]] += box[0];
	// greedily choose starting from max units till either truckSize runs out or you choose all boxes
	for(int units = 1000; truckSize > 0 && ~units; --units) { 
		maxUnits += min(truckSize, freq[units]) * units;
		truckSize -= freq[units];
	}
	return maxUnits;
}
```

---

**Python**
```
def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
    freq, max_units = [0]*1001, 0
    for box in boxTypes:
        freq[box[1]] += box[0]
    for units in range(1000,0,-1):
        if truckSize < 0: break
        max_units += min(truckSize, freq[units]) * units
        truckSize -= freq[units]
    return max_units
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---