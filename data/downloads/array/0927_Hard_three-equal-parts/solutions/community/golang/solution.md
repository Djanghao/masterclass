# Golang & C++ solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/1575243/](https://leetcode.com/problems/three-equal-parts/solutions/1575243/)

---

```go
func threeEqualParts(arr []int) []int {
	// remove all leading zeros if 1 exist
	removedLeadingZero := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] == 1 {
			removedLeadingZero = i
			arr = arr[i:]
			break
		}
	}
	// valid check
	if len(arr) < 3 {
		return []int{-1, -1}
	}
	// arr[0] equal to 0 means all value in arr is 0
	if arr[0] == 0 {
		return []int{0, 2}
	}
	// first non zero index from current to last index
	firstNonZero := make([]int, len(arr))
	nonZeroIndex := math.MaxInt32
	for i := len(arr) - 1; i >= 0; i-- {
		if arr[i] == 1 {
			nonZeroIndex = i
		}
		firstNonZero[i] = nonZeroIndex
	}
loop:
	for end1 := 0; end1 < len(arr)-2; end1++ {
		size := end1 + 1
		end2 := firstNonZero[end1+1] + end1
		if end2 >= len(arr)-1 {
			continue
		}
		end3 := firstNonZero[end2+1] + end1
		if end3 != len(arr)-1 {
			continue
		}
		for i := 0; i < size; i++ {
			if arr[end1-i] != arr[end2-i] {
				continue loop
			}
			if arr[end1-i] != arr[end3-i] {
				continue loop
			}
		}
		return []int{end1 + removedLeadingZero, end2 + 1 + removedLeadingZero}
	}
	return []int{-1, -1}
}
```

```c++
class Solution {
public:
    vector<int> threeEqualParts(vector<int>& arr) {
        int sizeOfOne = 0;
        for (auto &i : arr) {
            if (i == 1) {
                sizeOfOne++;
            }
        }
        if (sizeOfOne % 3 != 0) {
            return vector<int>{-1, -1};
        }
        if (sizeOfOne == 0) {
            return vector<int>{0, 2};
        }
        int currentSizeOfOne = 0;
        int end1 = 0;
        int end2 = 0;
        int end3 = 0;
        int prefixZero = -1;
        for (std::vector<int>::size_type i = 0; i < arr.size(); i++) {
            if (arr[i] == 1) {
                currentSizeOfOne++;
                if (prefixZero == -1) {
                    prefixZero = i;
                }
                if (currentSizeOfOne == sizeOfOne/3) {
                    end1 = i;
                }
                if (currentSizeOfOne == sizeOfOne/3*2) {
                    end2 = i;
                }
                if (currentSizeOfOne == sizeOfOne) {
                    end3 = i;
                }
            }
        }
        int suffixZero = static_cast<int>(arr.size() - 1) - end3;
        end1 += suffixZero;
        end2 += suffixZero;
        end3 += suffixZero;
        for (auto i = 0; i <= end1-prefixZero; i++) {
            if (arr[end1-i] != arr[end2-i] || arr[end1-i] != arr[end3-i]) {
                return vector<int>{-1, -1};
            }
        }
        return vector<int>{end1, end2+1};
    }
};
```