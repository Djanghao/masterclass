# Most Clean Solution in 13 Languages | O(1) Space

**Author:** cs_iitian
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4250079/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4250079/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After every iteration, the element which is largest till now would be in the first place for comparison.
`what would happen if the first element is largest ?`
then for every iteration our winner would be the first element, because it is largest.
Example: `[4,3,2,1]`
[4,3,2,1] -> [4,2,1,3] -> [4,1,3,2] -> [4,3,2,1] -> ..... ( ans so on )

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize max element as first element. `max = arr[0]`
- now start from `i = 1 to n-1` 
- compare current element with the max, if max wins increase the count, if the curr element wins then update max as this element and assign `count = 1`

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int getWinner(int[] arr, int k) {
        int max = arr[0];
        int count = 0;
        for(int i=1;i<arr.length&&count<k;i++) {
            if(max < arr[i]) {
                max = arr[i];
                count = 0;
            }
            count++;
        }
        return max;
    }
}
```
```C++ []
class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        std::ios::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);

        int max_val = arr[0];
        int count = 0;
        for (int i = 1; i < arr.size() && count < k; ++i) {
            if (max_val < arr[i]) {
                max_val = arr[i];
                count = 0;
            }
            ++count;
        }
        return max_val;
    }
};
```
```Python []
class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        max_val, count = arr[0], 0
        for i in range(1, len(arr)):
            if max_val < arr[i]:
                max_val = arr[i]
                count = 0
            count += 1
            if count == k:
                break
        return max_val
```
```C# []
public class Solution {
    public int GetWinner(int[] arr, int k) {
        int maxVal = arr[0];
        int count = 0;
        for (int i = 1; i < arr.Length && count < k; i++) {
            if (maxVal < arr[i]) {
                maxVal = arr[i];
                count = 0;
            }
            count++;
        }
        return maxVal;
    }
}
```
```Scala []
object Solution {
    def getWinner(arr: Array[Int], k: Int): Int = {
        var maxVal = arr(0)
        var count = 0
        for (i <- 1 until arr.length) {
            if (maxVal < arr(i)) {
                maxVal = arr(i)
                count = 0
            }
            count += 1
            if (count == k) {
                return maxVal
            }
        }
        maxVal
    }
}
```
```Javascript []
var getWinner = function(arr, k) {
    let maxVal = arr[0];
    let count = 0;
    for (let i = 1; i < arr.length && count < k; ++i) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
            count = 0;
        }
        ++count;
    }
    return maxVal;
};
```
```Kotlin []
class Solution {
    fun getWinner(arr: IntArray, k: Int): Int {
        var maxVal = arr[0]
        var count = 0
        for (i in 1 until arr.size) {
            if (maxVal < arr[i]) {
                maxVal = arr[i]
                count = 0
            }
            count++
            if (count == k) {
                break
            }
        }
        return maxVal
    }
}
```
```Go []
func getWinner(arr []int, k int) int {
    maxVal, count := arr[0], 0
    for i := 1; i < len(arr); i++ {
        if maxVal < arr[i] {
            maxVal = arr[i]
            count = 0
        }
        count++
        if count == k {
            return maxVal
        }
    }
    return maxVal
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function getWinner($arr, $k) {
        $max = $arr[0];
        $count = 0;
        for ($i = 1; $i < count($arr) && $count < $k; $i++) {
            if ($max < $arr[$i]) {
                $max = $arr[$i];
                $count = 0;
            }
            $count++;
        }
        return $max;
    }
}
```
```Ruby []
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def get_winner(arr, k)
    max_val, count = arr[0], 0
    (1...arr.length).each do |i|
        if max_val < arr[i]
            max_val = arr[i]
            count = 0
        end
        count += 1
        return max_val if count == k
    end
    max_val
end
```
```Rust []
impl Solution {
    pub fn get_winner(arr: Vec<i32>, k: i32) -> i32 {
        let mut max_val = arr[0];
        let mut count = 0;
        for i in 1..arr.len() {
            if max_val < arr[i] {
                max_val = arr[i];
                count = 0;
            }
            count += 1;
            if count == k {
                return max_val;
            }
        }
        max_val
    }
}
```
```Swift []
class Solution {
    func getWinner(_ arr: [Int], _ k: Int) -> Int {
        var max = arr[0]
        var count = 0
        for i in 1..<arr.count where count < k {
            if max < arr[i] {
                max = arr[i]
                count = 0
            }
            count += 1
        }
        return max
    }
}
```
```Dart []
class Solution {
  int getWinner(List<int> arr, int k) {
    int max = arr[0];
    int count = 0;
    for (int i = 1; i < arr.length && count < k; i++) {
        if (max < arr[i]) {
            max = arr[i];
            count = 0;
        }
        count++;
    }
    return max;
  }
}
```

Thanks
If you like this , Please upvote to learn all languages